const $ = selector => document.querySelector(selector);
const esc = (value = "") => String(value).replace(/[&<>"']/g, char => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[char]));
const cleanCourse = (value = "") => String(value).replace(/[^\p{L}\p{N}\s-]/gu, "").trim();
const initials = name => name.split(/\s+/).filter(Boolean).slice(0, 2).map(part => part[0]).join("").toUpperCase();
const validProjects = aluno => (aluno.projetos || []).filter(p => p.nome || p.link || p.github);
const turmaKey = new URLSearchParams(location.search).get("turma");
const turma = dadosTurmas[turmaKey];

function applyTheme(theme) {
  document.documentElement.dataset.theme = theme;
  const dark = theme === "dark";
  $("#themeToggle").innerHTML = `<i class="fa-solid fa-${dark ? "sun" : "moon"}"></i>`;
  $("#themeToggle").setAttribute("aria-label", dark ? "Ativar tema claro" : "Ativar tema escuro");
}

function isOpen(aluno) {
  try { return Boolean(aluno.openToWork) || new Set(JSON.parse(localStorage.getItem("vitrine-open-to-work") || "[]")).has(`${turmaKey}|${aluno.nome}`); } catch { return Boolean(aluno.openToWork); }
}

function projectCard(projeto, aluno) {
  const destaque = (turma.destaques || []).find(d => d.projeto === projeto.nome);
  const media = destaque?.imagem ? `<img src="${esc(destaque.imagem)}" alt="Imagem do projeto ${esc(projeto.nome)}">` : '<i class="fa-solid fa-laptop-code"></i>';
  return `<article class="project-card"><div class="project-thumb">${media}</div><div class="project-body"><div class="project-meta"><span>${esc(turma.codigo)}</span><span>${esc(cleanCourse(turma.curso))}</span></div><h3>${esc(projeto.nome)}</h3><p class="project-student">${esc(aluno.nome)}</p><div class="feature-tags">${(projeto.tecnologias || []).slice(0, 5).map(t => `<span>${esc(t)}</span>`).join("")}</div><div class="project-links">${projeto.link ? `<a href="${esc(projeto.link)}" target="_blank" rel="noopener">Abrir projeto <i class="fa-solid fa-arrow-up-right-from-square"></i></a>` : ""}${projeto.github ? `<a href="${esc(projeto.github)}" target="_blank" rel="noopener">GitHub</a>` : ""}<button class="link-button" data-profile="${esc(aluno.nome)}">Ver perfil</button></div></div></article>`;
}

function studentCard(aluno) {
  const projetos = validProjects(aluno), skills = [...new Set(projetos.flatMap(p => p.tecnologias || []))].slice(0, 4), open = isOpen(aluno);
  return `<article class="talent-card"><div class="talent-head"><div class="talent-avatar-wrap"><div class="talent-avatar">${esc(initials(aluno.nome))}</div><span class="open-badge" ${open ? "" : "hidden"}>OPEN TO WORK</span></div><div><h3>${esc(aluno.nome)}</h3><p>${projetos.length} projeto${projetos.length === 1 ? "" : "s"} publicado${projetos.length === 1 ? "" : "s"}</p></div></div><div class="skill-row">${skills.length ? skills.map(t => `<span>${esc(t)}</span>`).join("") : '<span>Perfil em atualização</span>'}</div>${!projetos.length ? '<p class="talent-empty">Este perfil ainda não possui projeto ou links publicados.</p>' : ""}<div class="talent-actions"><button data-profile="${esc(aluno.nome)}">Ver perfil</button>${aluno.linkedin ? `<a href="${esc(aluno.linkedin)}" target="_blank" rel="noopener">LinkedIn</a>` : ""}${aluno.github ? `<a href="${esc(aluno.github)}" target="_blank" rel="noopener">GitHub</a>` : ""}</div></article>`;
}

function openProfile(nome) {
  const aluno = (turma.alunos || []).find(a => a.nome === nome);
  if (!aluno) return;
  const projetos = validProjects(aluno), skills = [...new Set(projetos.flatMap(p => p.tecnologias || []))];
  $("#dialogAvatar").textContent = initials(aluno.nome);
  $("#dialogOpenBadge").hidden = !isOpen(aluno);
  $("#dialogCourse").textContent = `${cleanCourse(turma.curso)} • ${turma.codigo}`;
  $("#dialogName").textContent = aluno.nome;
  $("#dialogSummary").textContent = aluno.observacao || "Perfil acadêmico cadastrado na Vitrine de Projetos.";
  $("#dialogSkills").innerHTML = skills.length ? skills.map(t => `<span>${esc(t)}</span>`).join("") : '<span>Competências em atualização</span>';
  $("#dialogProjects").innerHTML = projetos.length ? projetos.map(p => `<a href="${esc(p.link || p.github || "#")}" ${p.link || p.github ? 'target="_blank" rel="noopener"' : ""}>${esc(p.nome)}${p.link || p.github ? ' <i class="fa-solid fa-arrow-up-right-from-square"></i>' : ""}</a>`).join("") : '<span class="empty-profile-info">Nenhum projeto publicado neste perfil até o momento.</span>';
  $("#dialogActions").innerHTML = `${aluno.curriculo ? `<a href="${esc(aluno.curriculo)}" target="_blank" rel="noopener"><i class="fa-solid fa-file-lines"></i> Ver currículo</a>` : '<span class="disabled"><i class="fa-solid fa-file-lines"></i> Currículo em atualização</span>'}${aluno.linkedin ? `<a href="${esc(aluno.linkedin)}" target="_blank" rel="noopener"><i class="fa-brands fa-linkedin"></i> LinkedIn</a>` : '<span class="disabled"><i class="fa-brands fa-linkedin"></i> LinkedIn não informado</span>'}${aluno.github ? `<a href="${esc(aluno.github)}" target="_blank" rel="noopener"><i class="fa-brands fa-github"></i> GitHub</a>` : '<span class="disabled"><i class="fa-brands fa-github"></i> GitHub não informado</span>'}`;
  $("#profileDialog").showModal();
}

function render() {
  if (!turma) {
    document.title = "Turma não encontrada | Vitrine de Projetos";
    $("#conteudo").innerHTML = '<section class="section"><div class="container not-found"><i class="fa-solid fa-circle-exclamation"></i><h1>Turma não encontrada</h1><p>O endereço pode estar incompleto ou a turma ainda não foi cadastrada.</p><a class="button primary" href="index.html#turmas">Ver todas as turmas</a></div></section>';
    return;
  }
  const alunos = turma.alunos || [], projects = alunos.flatMap(aluno => validProjects(aluno).map(projeto => ({ projeto, aluno })));
  document.title = `${cleanCourse(turma.curso)} • ${turma.codigo} | Vitrine de Projetos`;
  $("#classCode").textContent = turma.codigo;
  $("#classTitle").textContent = cleanCourse(turma.curso);
  $("#classDescription").textContent = turma.descricao || "Projetos desenvolvidos durante a formação profissional.";
  $("#classPeriod").textContent = turma.periodo || "Período não informado";
  $("#classStudentCount").textContent = alunos.length;
  $("#classProjectCount").textContent = projects.length;
  $("#classProjectGrid").innerHTML = projects.length ? projects.map(item => projectCard(item.projeto, item.aluno)).join("") : '<div class="not-found"><i class="fa-solid fa-folder-open"></i><h3>Projetos em atualização</h3><p>A turma está cadastrada, mas ainda não possui projetos publicados.</p></div>';
  $("#classStudentGrid").innerHTML = alunos.length ? alunos.map(studentCard).join("") : '<div class="not-found">Nenhum aluno cadastrado nesta turma.</div>';
}

function bindEvents() {
  $("#themeToggle").addEventListener("click", () => { const theme = document.documentElement.dataset.theme === "dark" ? "light" : "dark"; localStorage.setItem("vitrine-theme", theme); applyTheme(theme); });
  const nav = $("#mainNav"), menu = $("#menuButton");
  menu.addEventListener("click", () => { const open = nav.classList.toggle("open"); menu.setAttribute("aria-expanded", open); });
  document.addEventListener("click", event => { const button = event.target.closest("[data-profile]"); if (button) openProfile(button.dataset.profile); });
  $("#closeProfile").addEventListener("click", () => $("#profileDialog").close());
  $("#profileDialog").addEventListener("click", event => { if (event.target === $("#profileDialog")) $("#profileDialog").close(); });
}

const savedTheme = localStorage.getItem("vitrine-theme");
applyTheme(savedTheme || (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"));
render();
if (turma) bindEvents();
