const state = { all: [], highlights: [], students: [], highlightIndex: 0, heroIndex: 0, heroTimer: null, classVisible: 6, talentVisible: 8, selectedStudent: null, curatorMode: new URLSearchParams(location.search).get("curadoria") === "1" };
const $ = (selector) => document.querySelector(selector);
const esc = (value = "") => String(value).replace(/[&<>"']/g, char => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[char]));
const norm = (value = "") => String(value).normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase().trim();
const cleanCourse = (value = "") => String(value).replace(/[^\p{L}\p{N}\s-]/gu, "").trim();
const getTurmas = () => Object.entries(dadosTurmas).map(([key, value]) => ({ key, ...value, paginaAnterior: value.pagina, pagina: `turma.html?turma=${encodeURIComponent(key)}` }));
const validProjects = aluno => (aluno.projetos || []).filter(p => p.nome || p.link || p.github);
const initials = name => name.split(/\s+/).filter(Boolean).slice(0, 2).map(part => part[0]).join("").toUpperCase();
const personTokens = name => norm(name).split(/\s+/).filter(token => token.length > 2);
const samePerson = (a, b) => {
  const left = personTokens(a), right = personTokens(b);
  if (!left.length || !right.length || left[0] !== right[0]) return false;
  return left.some(token => right.includes(token)) && right.some(token => left.includes(token));
};

function matchHighlight(turma, aluno, projeto) {
  return (turma.destaques || []).find(item => norm(item.projeto) === norm(projeto.nome) || samePerson(item.aluno, aluno.nome));
}

function buildData() {
  const projects = [];
  const students = [];
  getTurmas().forEach(turma => {
    (turma.alunos || []).forEach(aluno => {
      const projetos = validProjects(aluno).map(projeto => {
        const destaque = matchHighlight(turma, aluno, projeto);
        const enriched = { ...projeto, aluno: aluno.nome, alunoData: aluno, turma: turma.codigo, turmaKey: turma.key, curso: turma.curso, pagina: turma.pagina, imagem: destaque?.imagem || "" };
        projects.push(enriched);
        return enriched;
      });
      students.push({ ...aluno, projetos, turma: turma.codigo, turmaKey: turma.key, curso: turma.curso, pagina: turma.pagina });
    });
  });
  state.all = projects;
  state.students = students;
  state.highlights = getTurmas().flatMap(turma => (turma.destaques || []).slice(0, 2).map(item => {
    const student = students.find(s => s.turmaKey === turma.key && samePerson(s.nome, item.aluno));
    return { ...item, nome: item.projeto, alunoData: student || { nome: item.aluno, projetos: [] }, turma: turma.codigo, turmaKey: turma.key, curso: turma.curso, pagina: turma.pagina };
  }));
}

function allTechnologies() {
  return [...new Set(state.all.flatMap(p => p.tecnologias || []))].sort((a, b) => a.localeCompare(b, "pt-BR"));
}

function projectArea(project) {
  const course = norm(project.curso);
  if (course.includes("front")) return "Front-End";
  if (course.includes("back")) return "Back-End";
  if (course.includes("rede") || course.includes("infra")) return "Redes e Infraestrutura";
  if (course.includes("power") || course.includes("excel") || course.includes("dado")) return "Dados e Produtividade";
  if (course.includes("youtube") || course.includes("conteudo")) return "Conteúdo Digital";
  return cleanCourse(project.curso) || "Outras formações";
}

function projectTheme(project) {
  const text = norm([project.nome, project.descricao].join(" "));
  const rules = [
    ["Petshop e Animais", /pet|petshop|veterin|animal|adocao/],
    ["Alimentação e Delivery", /restaurante|lanchonete|pizza|delivery|comida|culinaria|cardapio|japones|bar\b/],
    ["Clínicas e Saúde", /clinica|hospital|saude|medic|odont|farmacia|academia/],
    ["Lojas e E-commerce", /loja|store|e-commerce|comercio|tabacaria|papelaria|eletronic|iphone|cds?|vinil/],
    ["Turismo, Cultura e Eventos", /turismo|turistic|passeio|viagem|evento|cultura|museu/],
    ["Cidadania e Impacto Social", /cidada|social|inclus|acessib|recicla|sustent|comunidade/],
    ["Serviços e Gestão", /oficina|gestao|administr|manutenc|construcao|sistema|controle|agendamento/],
    ["Educação e Dados", /escola|educa|dashboard|power bi|excel|dados|biblioteca/],
    ["Redes e Infraestrutura", /rede|infraestrutura|servidor|packet tracer|cisco|roteador/]
  ];
  return (rules.find(([, regex]) => regex.test(text)) || ["Sites e Soluções Digitais"])[0];
}

function allThemes() {
  return [...new Set(state.all.map(projectTheme))].sort((a, b) => a.localeCompare(b, "pt-BR"));
}

function updateCounts() {
  const studentsWithProjects = state.students.filter(s => s.projetos.length).length;
  const values = { totalTurmas: getTurmas().length, totalProjetos: state.all.length, totalAlunos: studentsWithProjects, totalTecnologias: allTechnologies().length, floatProjetos: state.all.length, floatAlunos: studentsWithProjects };
  Object.entries(values).forEach(([id, value]) => { const node = $(`#${id}`); if (node) node.textContent = value; });
}

function renderHero() {
  const items = state.highlights.length ? state.highlights : state.all;
  if (!items.length) return;
  state.heroIndex = (state.heroIndex + items.length) % items.length;
  const p = items[state.heroIndex];
  if (!p) return;
  $("#heroFeatureTitle").textContent = p.projeto || p.nome;
  $("#heroFeatureStudent").textContent = p.aluno;
  $("#heroFeatureCourse").textContent = cleanCourse(p.curso) || "Tecnologia";
  $("#heroFeatureTags").innerHTML = (p.tecnologias || []).slice(0, 4).map(t => `<span>${esc(t)}</span>`).join("");
  $("#heroFeatureImage").innerHTML = p.imagem ? `<img src="${esc(p.imagem)}" alt="Imagem do projeto ${esc(p.projeto || p.nome)}">` : '<i class="fa-solid fa-laptop-code"></i>';
  const link = $("#heroFeatureLink");
  link.href = p.link || p.pagina || "#explorar";
  link.removeAttribute("target");
  link.removeAttribute("rel");
  if (p.link) { link.target = "_blank"; link.rel = "noopener"; }
  $("#heroFeatureStatus").textContent = `${state.heroIndex + 1} de ${items.length}`;
}

function changeHero(step) {
  state.heroIndex += step;
  renderHero();
  restartHeroRotation();
}

function restartHeroRotation() {
  if (state.heroTimer) clearInterval(state.heroTimer);
  if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    state.heroTimer = setInterval(() => { state.heroIndex += 1; renderHero(); }, 6500);
  }
}

function applyTheme(theme) {
  document.documentElement.dataset.theme = theme;
  const dark = theme === "dark";
  const button = $("#themeToggle");
  button.innerHTML = `<i class="fa-solid fa-${dark ? "sun" : "moon"}"></i>`;
  button.setAttribute("aria-label", dark ? "Ativar tema claro" : "Ativar tema escuro");
}

function initTheme() {
  const saved = localStorage.getItem("vitrine-theme");
  const preferred = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  applyTheme(saved || preferred);
}

function populateFilters() {
  getTurmas().forEach(t => $("#filtroTurma").insertAdjacentHTML("beforeend", `<option value="${esc(t.key)}">${esc(t.codigo)} — ${esc(cleanCourse(t.curso))}</option>`));
  allTechnologies().forEach(t => $("#filtroTecnologia").insertAdjacentHTML("beforeend", `<option value="${esc(t)}">${esc(t)}</option>`));
  [...new Set(state.all.map(projectArea))].sort((a, b) => a.localeCompare(b, "pt-BR")).forEach(area => $("#filtroArea").insertAdjacentHTML("beforeend", `<option value="${esc(area)}">${esc(area)}</option>`));
  allThemes().forEach(theme => $("#filtroTema").insertAdjacentHTML("beforeend", `<option value="${esc(theme)}">${esc(theme)}</option>`));
  $("#themeChips").innerHTML = allThemes().map(theme => { const count = state.all.filter(p => projectTheme(p) === theme).length; return `<button type="button" data-theme-filter="${esc(theme)}"><i class="fa-solid fa-folder-open"></i><span>${esc(theme)}</span><strong>${count}</strong></button>`; }).join("");
}

function renderCarousel() {
  const items = state.highlights;
  if (!items.length) { $("#highlightStage").innerHTML = '<div class="empty-state">Nenhum destaque cadastrado.</div>'; return; }
  state.highlightIndex = (state.highlightIndex + items.length) % items.length;
  const p = items[state.highlightIndex];
  const student = findStudent(p.aluno, p.turmaKey);
  const media = p.imagem ? `<img src="${esc(p.imagem)}" alt="Imagem do projeto ${esc(p.projeto)}">` : '<i class="fa-solid fa-laptop-code"></i>';
  $("#highlightStage").innerHTML = `<article class="highlight-slide"><div class="highlight-media">${media}</div><div class="highlight-copy"><span class="highlight-kicker">${esc(p.turma)} • ${esc(cleanCourse(p.curso))}</span><h3>${esc(p.projeto)}</h3><span class="highlight-student">${esc(p.aluno)}</span><p>${esc(p.descricao || "Projeto desenvolvido durante a formação profissional.")}</p><div class="feature-tags">${(p.tecnologias || []).slice(0, 5).map(t => `<span>${esc(t)}</span>`).join("")}</div><div class="highlight-links">${p.link ? `<a href="${esc(p.link)}" target="_blank" rel="noopener">Abrir projeto <i class="fa-solid fa-arrow-up-right-from-square"></i></a>` : ""}<a href="${esc(p.pagina)}">Ver turma</a>${student ? `<a href="#alunos" data-profile="${esc(student.turmaKey)}|${esc(student.nome)}">Ver perfil</a>` : ""}</div></div></article>`;
  $("#highlightCounter").textContent = `${state.highlightIndex + 1} de ${items.length} destaques • máximo de 2 por turma`;
  $("#highlightDots").innerHTML = items.map((_, i) => `<button class="carousel-dot ${i === state.highlightIndex ? "active" : ""}" data-dot="${i}" aria-label="Ir ao destaque ${i + 1}"></button>`).join("");
}

function projectCard(p) {
  const media = p.imagem ? `<img src="${esc(p.imagem)}" alt="Imagem do projeto ${esc(p.nome)}">` : '<i class="fa-solid fa-laptop-code"></i>';
  return `<article class="project-card"><div class="project-thumb">${media}</div><div class="project-body"><div class="project-meta"><span>${esc(p.turma)}</span><span>${esc(cleanCourse(p.curso))}</span></div><h3>${esc(p.nome)}</h3><p class="project-student">${esc(p.aluno)}</p><div class="feature-tags">${(p.tecnologias || []).slice(0, 4).map(t => `<span>${esc(t)}</span>`).join("")}</div><div class="project-links">${p.link ? `<a href="${esc(p.link)}" target="_blank" rel="noopener">Abrir projeto <i class="fa-solid fa-arrow-up-right-from-square"></i></a>` : ""}${p.github ? `<a href="${esc(p.github)}" target="_blank" rel="noopener">GitHub</a>` : ""}<a href="${esc(p.pagina)}">Ver turma</a><button class="link-button" data-profile="${esc(p.turmaKey)}|${esc(p.aluno)}">Ver perfil</button></div></div></article>`;
}

function applySearch() {
  const query = norm($("#buscaGeral").value);
  const turma = $("#filtroTurma").value;
  const tech = $("#filtroTecnologia").value;
  const area = $("#filtroArea").value;
  const theme = $("#filtroTema").value;
  const active = Boolean(query || turma !== "todas" || tech !== "todas" || area !== "todas" || theme !== "todos");
  const results = state.all.filter(p => {
    const haystack = norm([p.nome, p.descricao, p.aluno, p.turma, p.curso, projectTheme(p), ...(p.tecnologias || [])].join(" "));
    return (!query || haystack.includes(query)) && (turma === "todas" || p.turmaKey === turma) && (tech === "todas" || (p.tecnologias || []).includes(tech)) && (area === "todas" || projectArea(p) === area) && (theme === "todos" || projectTheme(p) === theme);
  });
  $("#resultsTitle").textContent = active ? "Projetos encontrados" : "Selecione um tema ou faça uma busca";
  $("#themeChips").querySelectorAll("button").forEach(button => button.classList.toggle("active", theme !== "todos" && button.dataset.themeFilter === theme));
  if (!active) {
    $("#resultCount").textContent = "O acervo aparecerá aqui";
    $("#projectGrid").innerHTML = '<div class="empty-state"><i class="fa-solid fa-filter"></i><h3>Use os filtros para explorar o acervo</h3><p>Você também pode entrar diretamente em uma turma ou no perfil de um aluno.</p></div>';
    return;
  }
  $("#resultCount").textContent = `${results.length} projeto${results.length === 1 ? "" : "s"} encontrado${results.length === 1 ? "" : "s"}`;
  $("#projectGrid").innerHTML = results.length ? results.map(projectCard).join("") : '<div class="empty-state"><i class="fa-solid fa-magnifying-glass"></i><h3>Nenhum projeto encontrado</h3><p>Tente outro termo ou limpe os filtros.</p></div>';
}

function renderClasses() {
  const turmas = getTurmas();
  $("#classGrid").innerHTML = turmas.slice(0, state.classVisible).map(t => {
    const alunos = (t.alunos || []).filter(a => validProjects(a).length).length;
    const projetos = (t.alunos || []).reduce((sum, a) => sum + validProjects(a).length, 0);
    return `<article class="class-card"><span class="class-code">${esc(t.codigo)} • ${esc(t.periodo || "")}</span><h3>${esc(cleanCourse(t.curso))}</h3><p>${esc(t.descricao || "Projetos desenvolvidos durante a formação.")}</p><div class="class-counts"><span><i class="fa-solid fa-folder-open"></i> ${projetos} projetos</span><span><i class="fa-solid fa-user-graduate"></i> ${alunos} alunos</span></div><a href="${esc(t.pagina)}">Abrir turma <i class="fa-solid fa-arrow-right"></i></a></article>`;
  }).join("");
  $("#loadMoreClasses").hidden = state.classVisible >= turmas.length;
}

function openNames() {
  try { return new Set(JSON.parse(localStorage.getItem("vitrine-open-to-work") || "[]")); } catch { return new Set(); }
}
function studentKey(s) { return `${s.turmaKey}|${s.nome}`; }
function isOpen(s) { return Boolean(s.openToWork) || openNames().has(studentKey(s)); }
function toggleOpen(s) {
  if (!state.curatorMode) return;
  const names = openNames(), key = studentKey(s);
  names.has(key) ? names.delete(key) : names.add(key);
  localStorage.setItem("vitrine-open-to-work", JSON.stringify([...names]));
  renderTalents();
  if (state.selectedStudent && studentKey(state.selectedStudent) === key) fillDialog(s);
}

function renderTalents() {
  $("#talentGrid").innerHTML = state.students.slice(0, state.talentVisible).map(s => {
    const skills = [...new Set(s.projetos.flatMap(p => p.tecnologias || []))].slice(0, 4);
    const open = isOpen(s);
    return `<article class="talent-card"><div class="talent-head"><div class="talent-avatar-wrap"><div class="talent-avatar">${esc(initials(s.nome))}</div><span class="open-badge" ${open ? "" : "hidden"}>OPEN TO WORK</span></div><div><h3>${esc(s.nome)}</h3><p>${esc(cleanCourse(s.curso))} • ${s.projetos.length} projeto${s.projetos.length === 1 ? "" : "s"}</p></div></div><div class="skill-row">${skills.map(t => `<span>${esc(t)}</span>`).join("")}</div><div class="talent-actions"><button data-profile="${esc(studentKey(s))}">Ver perfil</button>${s.linkedin ? `<a href="${esc(s.linkedin)}" target="_blank" rel="noopener">LinkedIn</a>` : ""}${s.github ? `<a href="${esc(s.github)}" target="_blank" rel="noopener">GitHub</a>` : ""}</div>${state.curatorMode ? `<button class="open-switch ${open ? "active" : ""}" data-open="${esc(studentKey(s))}"><i class="fa-solid fa-briefcase"></i> ${open ? "Marcado como Open to Work" : "Marcar Open to Work"}</button>` : ""}</article>`;
  }).join("");
  $("#loadMoreTalents").hidden = state.talentVisible >= state.students.length;
}

function findStudent(name, turmaKey) {
  return state.students.find(s => s.turmaKey === turmaKey && samePerson(s.nome, name));
}

function fillDialog(s) {
  state.selectedStudent = s;
  const skills = [...new Set(s.projetos.flatMap(p => p.tecnologias || []))];
  const open = isOpen(s);
  $("#dialogAvatar").textContent = initials(s.nome);
  $("#dialogOpenBadge").hidden = !open;
  $("#dialogCourse").textContent = `${cleanCourse(s.curso)} • ${s.turma}`;
  $("#dialogName").textContent = s.nome;
  $("#dialogSummary").textContent = s.observacao || `${s.projetos.length} projeto(s) publicado(s) na Vitrine.`;
  $("#dialogSkills").innerHTML = skills.length ? skills.map(t => `<span>${esc(t)}</span>`).join("") : '<span>Competências em atualização</span>';
  $("#dialogProjects").innerHTML = s.projetos.length ? s.projetos.map(p => p.link ? `<a href="${esc(p.link)}" target="_blank" rel="noopener">${esc(p.nome)} <i class="fa-solid fa-arrow-up-right-from-square"></i></a>` : `<a href="${esc(p.github || s.pagina)}" target="_blank" rel="noopener">${esc(p.nome)}</a>`).join("") : '<span class="empty-profile-info">Nenhum projeto publicado neste perfil até o momento.</span>';
  $("#dialogActions").innerHTML = `${s.curriculo ? `<a href="${esc(s.curriculo)}" target="_blank" rel="noopener"><i class="fa-solid fa-file-lines"></i> Ver currículo</a>` : '<span class="disabled"><i class="fa-solid fa-file-lines"></i> Currículo em atualização</span>'}${s.linkedin ? `<a href="${esc(s.linkedin)}" target="_blank" rel="noopener"><i class="fa-brands fa-linkedin"></i> LinkedIn</a>` : '<span class="disabled"><i class="fa-brands fa-linkedin"></i> LinkedIn não informado</span>'}${s.github ? `<a href="${esc(s.github)}" target="_blank" rel="noopener"><i class="fa-brands fa-github"></i> GitHub</a>` : ""}<a href="${esc(s.pagina)}"><i class="fa-solid fa-people-group"></i> Ver turma e outros projetos</a>`;
  $("#dialogOpenToggle").innerHTML = `<i class="fa-solid fa-briefcase"></i> ${open ? "Remover Open to Work" : "Marcar como Open to Work"}`;
  $("#dialogOpenToggle").hidden = !state.curatorMode;
  const note = $(".dialog-note");
  note.hidden = !state.curatorMode;
  note.innerHTML = '<i class="fa-solid fa-circle-info"></i> Modo de curadoria demonstrativo: a marcação fica salva apenas neste navegador.';
}

function openProfile(key) {
  const [turmaKey, ...nameParts] = key.split("|");
  const student = findStudent(nameParts.join("|"), turmaKey);
  if (!student) return;
  fillDialog(student);
  $("#profileDialog").showModal();
}

function bindEvents() {
  $("#heroPrev").addEventListener("click", () => changeHero(-1));
  $("#heroNext").addEventListener("click", () => changeHero(1));
  $("#themeToggle").addEventListener("click", () => { const theme = document.documentElement.dataset.theme === "dark" ? "light" : "dark"; localStorage.setItem("vitrine-theme", theme); applyTheme(theme); });
  $("#buscaGeral").addEventListener("input", applySearch);
  ["filtroTurma", "filtroTecnologia", "filtroArea", "filtroTema"].forEach(id => $(`#${id}`).addEventListener("change", applySearch));
  $("#themeChips").addEventListener("click", e => { const button = e.target.closest("[data-theme-filter]"); if (!button) return; $("#filtroTema").value = button.dataset.themeFilter; applySearch(); $("#searchResults").scrollIntoView({ behavior: "smooth", block: "start" }); });
  $("#btnMostrarTudo").addEventListener("click", () => { $("#buscaGeral").value = ""; $("#filtroTurma").value = "todas"; $("#filtroTecnologia").value = "todas"; $("#filtroArea").value = "todas"; $("#filtroTema").value = "todos"; applySearch(); });
  $("#loadMoreClasses").addEventListener("click", () => { state.classVisible += 6; renderClasses(); });
  $("#loadMoreTalents").addEventListener("click", () => { state.talentVisible += 8; renderTalents(); });
  document.addEventListener("click", e => { const profile = e.target.closest("[data-profile]"); const toggle = e.target.closest("[data-open]"); if (profile) { e.preventDefault(); openProfile(profile.dataset.profile); } if (toggle) { const [turmaKey, ...parts] = toggle.dataset.open.split("|"); const s = findStudent(parts.join("|"), turmaKey); if (s) toggleOpen(s); } });
  const nav = $("#mainNav"), menu = $("#menuButton");
  menu.addEventListener("click", () => { const open = nav.classList.toggle("open"); menu.setAttribute("aria-expanded", open); });
  nav.querySelectorAll("a").forEach(a => a.addEventListener("click", () => nav.classList.remove("open")));
  const moreButton = $("#moreMenuButton"), moreMenu = $("#moreMenu");
  moreButton.addEventListener("click", e => { e.stopPropagation(); const open = moreMenu.classList.toggle("open"); moreButton.setAttribute("aria-expanded", open); });
  document.addEventListener("click", e => { if (!e.target.closest(".nav-dropdown")) { moreMenu.classList.remove("open"); moreButton.setAttribute("aria-expanded", "false"); } });
  $("#closeProfile").addEventListener("click", () => $("#profileDialog").close());
  $("#profileDialog").addEventListener("click", e => { if (e.target === $("#profileDialog")) $("#profileDialog").close(); });
  $("#dialogOpenToggle").addEventListener("click", () => { if (state.curatorMode && state.selectedStudent) toggleOpen(state.selectedStudent); });
}

function init() {
  initTheme(); buildData(); updateCounts(); renderHero(); populateFilters(); renderClasses(); renderTalents(); bindEvents(); restartHeroRotation();
}
init();
