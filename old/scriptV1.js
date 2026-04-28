function contarProjetosComLink(turma) {
  return turma.alunos.reduce((acc, aluno) => {
    return acc + aluno.projetos.filter(projeto => projeto.link && projeto.link.trim() !== "").length;
  }, 0);
}

function contarAlunos(turma) {
  return turma.alunos.length;
}

function coletarTodosDestaques() {
  const destaques = [];

  Object.values(dadosTurmas).forEach(turma => {
    if (!Array.isArray(turma.destaques)) return;

    turma.destaques.forEach(item => {
      destaques.push({
        ...item,
        turmaCodigo: turma.codigo,
        turmaCurso: turma.curso,
        paginaTurma: turma.pagina
      });
    });
  });

  return destaques;
}

function coletarTecnologias(destaques) {
  const setTecnologias = new Set();

  destaques.forEach(item => {
    (item.tecnologias || []).forEach(tech => setTecnologias.add(tech));
  });

  return Array.from(setTecnologias).sort((a, b) => a.localeCompare(b, "pt-BR"));
}

function preencherResumo() {
  const turmasArray = Object.values(dadosTurmas);

  const totalTurmas = turmasArray.length;
  const totalProjetos = turmasArray.reduce((acc, turma) => acc + contarProjetosComLink(turma), 0);
  const totalAlunos = turmasArray.reduce((acc, turma) => acc + contarAlunos(turma), 0);

  document.getElementById("totalTurmas").textContent = totalTurmas;
  document.getElementById("totalProjetos").textContent = totalProjetos;
  document.getElementById("totalAlunos").textContent = totalAlunos;
}

function renderDestaques(destaques) {
  const lista = document.getElementById("listaDestaques");

  if (!destaques.length) {
    lista.innerHTML = `
      <article class="card-destaque fade-in-up">
        <span class="badge-highlight">Em breve</span>
        <h3>Nenhum destaque disponível</h3>
        <p class="descricao">Assim que os projetos forem marcados como destaque, eles aparecerão aqui.</p>
      </article>
    `;
    return;
  }

  lista.innerHTML = destaques.map((item, index) => `
    <article class="card-destaque fade-in-up" style="animation-delay:${index * 0.05}s">
      <span class="badge-highlight">Destaque</span>
      <h3>${item.projeto || "Projeto"}</h3>
      <p class="autor">${item.aluno || "Aluno"}</p>
      <p class="turma-ref">${item.turmaCurso} • ${item.turmaCodigo}</p>
      <p class="descricao">${item.descricao || "Projeto em destaque do acervo."}</p>

      <div class="tags">
        ${(item.tecnologias || []).map(tech => `<span class="tag">${tech}</span>`).join("")}
      </div>

      <div class="card-links">
        ${item.link ? `<a class="link-main" href="${item.link}" target="_blank" rel="noopener noreferrer">Visitar projeto</a>` : ""}
        ${item.github ? `<a class="link-alt" href="${item.github}" target="_blank" rel="noopener noreferrer">GitHub</a>` : ""}
        ${item.paginaTurma ? `<a class="link-alt" href="${item.paginaTurma}">Abrir turma</a>` : ""}
      </div>
    </article>
  `).join("");
}

function renderTurmas(apenasComTecnologia = "todas", somenteDestaques = false) {
  const listaTurmas = document.getElementById("listaTurmas");
  const turmasArray = Object.values(dadosTurmas);

  const turmasFiltradas = turmasArray.filter(turma => {
    if (!somenteDestaques && apenasComTecnologia === "todas") {
      return true;
    }

    const projetos = turma.alunos.flatMap(aluno => aluno.projetos || []);
    const destaques = turma.destaques || [];

    const temTecnologia = apenasComTecnologia === "todas"
      ? true
      : projetos.some(projeto => (projeto.tecnologias || []).includes(apenasComTecnologia)) ||
        destaques.some(item => (item.tecnologias || []).includes(apenasComTecnologia));

    const temDestaque = !somenteDestaques || destaques.length > 0;

    return temTecnologia && temDestaque;
  });

  if (!turmasFiltradas.length) {
    listaTurmas.innerHTML = `
      <article class="card-turma fade-in-up">
        <span class="turma-code">Sem resultados</span>
        <h3>Nenhuma turma encontrada</h3>
        <p class="descricao">Tente outro filtro de tecnologia ou volte para mostrar tudo.</p>
      </article>
    `;
    return;
  }

  listaTurmas.innerHTML = turmasFiltradas.map((turma, index) => `
    <article class="card-turma fade-in-up" style="animation-delay:${index * 0.05}s">
      <span class="turma-code">${turma.codigo}</span>
      <h3>${turma.curso}</h3>
      <p class="periodo">${turma.periodo}</p>
      <p class="descricao">${turma.descricao}</p>

      <div class="turma-stats">
        <div class="turma-stat">
          <strong>${contarAlunos(turma)}</strong>
          <span>Alunos</span>
        </div>
        <div class="turma-stat">
          <strong>${contarProjetosComLink(turma)}</strong>
          <span>Projetos</span>
        </div>
      </div>

      <a class="open-link" href="${turma.pagina}">Abrir turma</a>
    </article>
  `).join("");
}

function preencherFiltroTecnologias() {
  const select = document.getElementById("filtroTecnologia");
  const destaques = coletarTodosDestaques();
  const tecnologias = coletarTecnologias(destaques);

  tecnologias.forEach(tech => {
    const option = document.createElement("option");
    option.value = tech;
    option.textContent = tech;
    select.appendChild(option);
  });
}

function iniciarFiltros() {
  const select = document.getElementById("filtroTecnologia");
  const btnSomenteDestaques = document.getElementById("btnSomenteDestaques");
  const btnMostrarTodos = document.getElementById("btnMostrarTodos");

  let filtroAtual = "todas";
  let somenteDestaques = false;

  function atualizarTela() {
    const todosDestaques = coletarTodosDestaques();

    const destaquesFiltrados = todosDestaques.filter(item => {
      const passaTecnologia = filtroAtual === "todas"
        ? true
        : (item.tecnologias || []).includes(filtroAtual);

      return passaTecnologia;
    });

    renderDestaques(destaquesFiltrados);
    renderTurmas(filtroAtual, somenteDestaques);
  }

  select.addEventListener("change", (e) => {
    filtroAtual = e.target.value;
    atualizarTela();
  });

  btnSomenteDestaques.addEventListener("click", () => {
    somenteDestaques = true;
    atualizarTela();
  });

  btnMostrarTodos.addEventListener("click", () => {
    somenteDestaques = false;
    filtroAtual = "todas";
    select.value = "todas";
    atualizarTela();
  });

  atualizarTela();
}

function iniciarPagina() {
  preencherResumo();
  preencherFiltroTecnologias();
  iniciarFiltros();
}

iniciarPagina();