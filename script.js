let todosDestaques = [];
let destaquesFiltrados = [];
let destaqueAtual = 0;
let somenteDestaques = false;

function alunoTemProjeto(aluno) {
  return aluno.projetos && aluno.projetos.some(p => p.nome || p.link || p.github);
}

function contarAlunosComProjeto(turma) {
  return turma.alunos.filter(alunoTemProjeto).length;
}

function contarProjetosComLink(turma) {
  return turma.alunos.reduce((total, aluno) => {
    return total + aluno.projetos.filter(p => p.link && p.link.trim() !== "").length;
  }, 0);
}

function obterTurmasComProjeto() {
  return Object.entries(dadosTurmas)
    .map(([chave, turma]) => ({ chave, ...turma }));
}

function textoDaTurma(turma) {
  return `
    ${turma.codigo}
    ${turma.curso}
    ${turma.periodo}
    ${turma.descricao}
    ${turma.atividadeFinal || ""}
    ${turma.alunos.map(a => a.nome).join(" ")}
    ${turma.alunos.flatMap(a => a.projetos.map(p => `${p.nome} ${(p.tecnologias || []).join(" ")}`)).join(" ")}
  `.toLowerCase();
}

function turmaTemTecnologia(turma, tecnologia) {
  if (tecnologia === "todas") return true;

  return turma.alunos.some(aluno =>
    aluno.projetos.some(projeto =>
      (projeto.tecnologias || []).includes(tecnologia)
    )
  );
}

function turmaTemDestaque(turma) {
  return turma.destaques && turma.destaques.length > 0;
}

function obterFiltros() {
  return {
    texto: document.getElementById("buscaGeral").value.trim().toLowerCase(),
    turma: document.getElementById("filtroTurma").value,
    tecnologia: document.getElementById("filtroTecnologia").value
  };
}

function filtrarTurmas() {
  const filtros = obterFiltros();

  return obterTurmasComProjeto().filter(turma => {
    const textoOk = textoDaTurma(turma).includes(filtros.texto);
    const turmaOk = filtros.turma === "todas" || turma.chave === filtros.turma;
    const tecnologiaOk = turmaTemTecnologia(turma, filtros.tecnologia);
    const destaqueOk = !somenteDestaques || turmaTemDestaque(turma);

    return textoOk && turmaOk && tecnologiaOk && destaqueOk;
  });
}

function atualizarResumo(turmasFiltradas) {
  document.getElementById("totalTurmas").textContent = turmasFiltradas.length;

  document.getElementById("totalProjetos").textContent = turmasFiltradas.reduce((total, turma) => {
    return total + contarProjetosComLink(turma);
  }, 0);

  document.getElementById("totalAlunos").textContent = turmasFiltradas.reduce((total, turma) => {
    return total + contarAlunosComProjeto(turma);
  }, 0);
}

function coletarDestaques() {
  const destaques = [];

  Object.entries(dadosTurmas).forEach(([chave, turma]) => {
    if (!turma.destaques) return;

    turma.destaques.forEach(destaque => {
      destaques.push({
        ...destaque,
        turmaChave: chave,
        turmaCodigo: turma.codigo,
        turmaCurso: turma.curso,
        paginaTurma: turma.pagina
      });
    });
  });

  return destaques;
}

function destaquePassaFiltro(destaque) {
  const filtros = obterFiltros();

  const texto = `
    ${destaque.projeto}
    ${destaque.aluno}
    ${destaque.turmaCodigo}
    ${destaque.turmaCurso}
    ${(destaque.tecnologias || []).join(" ")}
  `.toLowerCase();

  const textoOk = texto.includes(filtros.texto);
  const turmaOk = filtros.turma === "todas" || destaque.turmaChave === filtros.turma;
  const tecnologiaOk = filtros.tecnologia === "todas" || (destaque.tecnologias || []).includes(filtros.tecnologia);

  return textoOk && turmaOk && tecnologiaOk;
}

function renderTurmas(turmasFiltradas) {
  const lista = document.getElementById("listaTurmas");

  if (!turmasFiltradas.length) {
    lista.innerHTML = `<p class="empty-message">Nenhuma turma encontrada com esses filtros.</p>`;
    return;
  }

  lista.innerHTML = turmasFiltradas.map(turma => `
    <article class="card-turma">
      <span class="card-code">${turma.codigo}</span>
      <h3>${turma.curso}</h3>
      <p class="card-period">${turma.periodo}</p>
      <p class="card-desc">${turma.descricao}</p>

      ${turma.atividadeFinal ? `
        <div class="card-activity">
          <strong>Projeto final</strong>
          <p>${turma.atividadeFinal}</p>
        </div>
      ` : ""}

      <div class="card-stats">
        <div class="card-stat">
          <strong>${contarAlunosComProjeto(turma)}</strong>
          <span>Alunos</span>
        </div>
        <div class="card-stat">
          <strong>${contarProjetosComLink(turma)}</strong>
          <span>Projetos</span>
        </div>
      </div>

      <a class="card-open" href="${turma.pagina}">
        Abrir turma
        <i class="fa-solid fa-arrow-right"></i>
      </a>
    </article>
  `).join("");
}

function renderDots() {
  const dots = document.getElementById("highlightDots");

  if (!dots) return;

  dots.innerHTML = destaquesFiltrados.map((_, index) => `
    <span class="carousel-dot ${index === destaqueAtual ? "active" : ""}"></span>
  `).join("");
}

function renderHighlight() {
  const stage = document.getElementById("highlightStage");

  if (!destaquesFiltrados.length) {
    stage.innerHTML = `
      <div class="highlight-card">
        <div class="highlight-image">
          <div class="highlight-placeholder">Nenhum destaque encontrado.</div>
        </div>
        <div class="highlight-info">
          <span class="mini-kicker">Sem resultados</span>
          <h3>Ajuste a busca ou os filtros</h3>
          <p>Use a busca, selecione outra turma ou escolha outra tecnologia.</p>
        </div>
      </div>
    `;
    renderDots();
    return;
  }

  const item = destaquesFiltrados[destaqueAtual];

  stage.innerHTML = `
    <div class="highlight-card">
      <a class="highlight-image" href="${item.link || item.paginaTurma}" target="_blank">
        ${
          item.imagem
            ? `<img src="${item.imagem}" alt="${item.projeto}">`
            : `<div class="highlight-placeholder">Adicione aqui o print do projeto em destaque</div>`
        }
      </a>

      <div class="highlight-info">
        <span class="mini-kicker">${item.turmaCodigo}</span>
        <h3>${item.projeto}</h3>
        <p><strong>${item.aluno}</strong></p>
        <p>${item.descricao || "Projeto em destaque do acervo."}</p>

        <div class="badges">
          ${(item.tecnologias || []).map(tech => `<span class="badge-tech">${tech}</span>`).join("")}
        </div>

        <div class="highlight-links">
          ${item.link ? `<a class="link-primary" href="${item.link}" target="_blank">Visitar projeto</a>` : ""}
          <a class="link-secondary" href="${item.paginaTurma}">Ver turma</a>
          ${item.github ? `<a class="link-secondary" href="${item.github}" target="_blank">GitHub</a>` : ""}
        </div>
      </div>
    </div>
  `;

  renderDots();
}

function aplicarFiltros() {
  const turmasFiltradas = filtrarTurmas();

  atualizarResumo(turmasFiltradas);
  renderTurmas(turmasFiltradas);

  destaquesFiltrados = todosDestaques.filter(destaquePassaFiltro);

  if (somenteDestaques) {
    const chavesTurmas = new Set(turmasFiltradas.map(t => t.chave));
    destaquesFiltrados = destaquesFiltrados.filter(d => chavesTurmas.has(d.turmaChave));
  }

  destaqueAtual = 0;
  renderHighlight();
}

function popularFiltroTurma() {
  const select = document.getElementById("filtroTurma");

  obterTurmasComProjeto().forEach(turma => {
    const option = document.createElement("option");
    option.value = turma.chave;
    option.textContent = `${turma.codigo} - ${turma.curso}`;
    select.appendChild(option);
  });
}

function popularFiltroTecnologia() {
  const select = document.getElementById("filtroTecnologia");
  const tecnologias = new Set();

  obterTurmasComProjeto().forEach(turma => {
    turma.alunos.forEach(aluno => {
      aluno.projetos.forEach(projeto => {
        (projeto.tecnologias || []).forEach(tech => tecnologias.add(tech));
      });
    });
  });

  Array.from(tecnologias)
    .sort((a, b) => a.localeCompare(b, "pt-BR"))
    .forEach(tech => {
      const option = document.createElement("option");
      option.value = tech;
      option.textContent = tech;
      select.appendChild(option);
    });
}

function iniciarEventos() {
  document.getElementById("btnBuscar").addEventListener("click", aplicarFiltros);

  document.getElementById("buscaGeral").addEventListener("keydown", event => {
    if (event.key === "Enter") aplicarFiltros();
  });

  document.getElementById("filtroTurma").addEventListener("change", aplicarFiltros);
  document.getElementById("filtroTecnologia").addEventListener("change", aplicarFiltros);

  document.getElementById("btnSoDestaques").addEventListener("click", () => {
    somenteDestaques = true;
    aplicarFiltros();
  });

  document.getElementById("btnMostrarTudo").addEventListener("click", () => {
    somenteDestaques = false;
    document.getElementById("buscaGeral").value = "";
    document.getElementById("filtroTurma").value = "todas";
    document.getElementById("filtroTecnologia").value = "todas";
    aplicarFiltros();
  });

  document.getElementById("prevHighlight").addEventListener("click", () => {
    if (!destaquesFiltrados.length) return;
    destaqueAtual = (destaqueAtual - 1 + destaquesFiltrados.length) % destaquesFiltrados.length;
    renderHighlight();
  });

  document.getElementById("nextHighlight").addEventListener("click", () => {
    if (!destaquesFiltrados.length) return;
    destaqueAtual = (destaqueAtual + 1) % destaquesFiltrados.length;
    renderHighlight();
  });
}

function iniciar() {
  todosDestaques = coletarDestaques();

  popularFiltroTurma();
  popularFiltroTecnologia();
  iniciarEventos();

  aplicarFiltros();
}

iniciar();