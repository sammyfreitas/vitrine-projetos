const chaveTurma = document.body.dataset.turma;
const turma = dadosTurmas[chaveTurma];

const codigoTurma = document.getElementById("codigoTurma");
const nomeTurma = document.getElementById("nomeTurma");
const periodoTurma = document.getElementById("periodoTurma");
const descricaoTurma = document.getElementById("descricaoTurma");
const totalAlunos = document.getElementById("infoAlunos");
const totalProjetos = document.getElementById("infoProjetos");
const totalDestaques = document.getElementById("infoDestaques");
const areaDestaques = document.getElementById("areaDestaques");
const areaAlunos = document.getElementById("areaAlunos");
const buscaInput = document.getElementById("buscaAluno");

let indiceDestaque = 0;

function contarProjetos(alunos) {
  return alunos.reduce((acc, aluno) => {
    return acc + aluno.projetos.filter(projeto => projeto.link && projeto.link.trim() !== "").length;
  }, 0);
}

function preencherCabecalho() {
  codigoTurma.textContent = turma.codigo;
  nomeTurma.textContent = turma.curso;
  periodoTurma.textContent = turma.periodo;
  descricaoTurma.textContent = turma.descricao;
  totalAlunos.textContent = turma.alunos.length;
  totalProjetos.textContent = contarProjetos(turma.alunos);
  totalDestaques.textContent = turma.destaques.length;
}

function renderDestaque() {
  if (!turma.destaques.length) {
    areaDestaques.innerHTML = `
      <div class="sem-projeto">Nenhum destaque cadastrado ainda.</div>
    `;
    return;
  }

  const destaque = turma.destaques[indiceDestaque];

  const imagemHtml = destaque.imagem
    ? `<img src="../${destaque.imagem}" alt="${destaque.projeto}">`
    : `Adicione aqui o print do projeto em destaque`;

  areaDestaques.innerHTML = `
    <div class="carrossel">
      <button class="carrossel-btn" id="btnAnterior">&#10094;</button>

      <div class="destaque-card">
        <div class="destaque-img">${imagemHtml}</div>

        <div class="destaque-conteudo">
          <span class="badge">Projeto em destaque</span>
          <h3>${destaque.projeto}</h3>
          <p class="aluno">${destaque.aluno}</p>
          <p class="texto">${destaque.descricao}</p>

          <div class="tags">
            ${destaque.tecnologias.map(tech => `<span class="tag-tech">${tech}</span>`).join("")}
          </div>

          <div class="acoes">
            ${destaque.link ? `<a class="btn-principal" href="${destaque.link}" target="_blank">Visitar projeto</a>` : ""}
            ${destaque.github ? `<a class="btn-secundario" href="${destaque.github}" target="_blank">Ver GitHub</a>` : ""}
          </div>
        </div>
      </div>

      <button class="carrossel-btn" id="btnProximo">&#10095;</button>
    </div>
  `;

  const btnAnterior = document.getElementById("btnAnterior");
  const btnProximo = document.getElementById("btnProximo");

  if (btnAnterior && btnProximo) {
    btnAnterior.addEventListener("click", () => {
      indiceDestaque = (indiceDestaque - 1 + turma.destaques.length) % turma.destaques.length;
      renderDestaque();
    });

    btnProximo.addEventListener("click", () => {
      indiceDestaque = (indiceDestaque + 1) % turma.destaques.length;
      renderDestaque();
    });
  }
}

function criarProjetoHtml(projeto) {
  const tecnologias = projeto.tecnologias?.length
    ? projeto.tecnologias.map(tech => `<span class="tag-tech">${tech}</span>`).join("")
    : `<span class="tag-tech">Tecnologias não informadas</span>`;

  return `
    <div class="projeto-item">
      <h4>${projeto.nome || "Projeto sem nome"}</h4>
      <div class="tags">${tecnologias}</div>
      <p class="descricao">${projeto.descricao || "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."}</p>

      <div class="mini-acoes">
        ${projeto.link ? `<a class="link-site" href="${projeto.link}" target="_blank">Visitar projeto</a>` : ""}
        ${projeto.github ? `<a class="link-github" href="${projeto.github}" target="_blank">GitHub</a>` : ""}
      </div>
    </div>
  `;
}

function criarCardAluno(aluno, index) {
  const possuiProjetos = aluno.projetos && aluno.projetos.length > 0 && aluno.projetos.some(p => p.link || p.github || p.nome);

  return `
    <article class="card-aluno">
      <div class="topo-aluno">
        <div>
          <h3>${aluno.nome}</h3>
          <p class="meta-aluno">${aluno.observacao || "Aluno cadastrado na turma."}</p>
        </div>
      </div>

      <div class="links-sociais">
        ${aluno.linkedin ? `<a href="${aluno.linkedin}" target="_blank">LinkedIn</a>` : ""}
        ${aluno.instagram ? `<a href="${aluno.instagram}" target="_blank">Instagram</a>` : ""}
        ${aluno.github ? `<a href="${aluno.github}" target="_blank">GitHub</a>` : ""}
      </div>

      ${
        possuiProjetos
          ? `
            <button class="btn-toggle" data-target="projetos-${index}">
              Ver projetos
            </button>

            <div class="lista-projetos" id="projetos-${index}">
              ${aluno.projetos.map(criarProjetoHtml).join("")}
            </div>
          `
          : `
            <div class="sem-projeto">Sem projeto cadastrado até o momento.</div>
          `
      }
    </article>
  `;
}

function adicionarEventosToggle() {
  const botoes = document.querySelectorAll(".btn-toggle");

  botoes.forEach(botao => {
    botao.addEventListener("click", () => {
      const alvoId = botao.dataset.target;
      const alvo = document.getElementById(alvoId);

      if (alvo.classList.contains("ativo")) {
        alvo.classList.remove("ativo");
        botao.textContent = "Ver projetos";
      } else {
        alvo.classList.add("ativo");
        botao.textContent = "Ocultar projetos";
      }
    });
  });
}

function renderAlunos(filtro = "") {
  const filtroNormalizado = filtro.toLowerCase().trim();

  const alunosFiltrados = turma.alunos.filter(aluno => {
    const nomeAluno = aluno.nome.toLowerCase();
    const projetosTexto = aluno.projetos.map(p => `${p.nome} ${p.tecnologias?.join(" ")}`).join(" ").toLowerCase();

    return nomeAluno.includes(filtroNormalizado) || projetosTexto.includes(filtroNormalizado);
  });

  areaAlunos.innerHTML = alunosFiltrados.map((aluno, index) => criarCardAluno(aluno, index)).join("");
  adicionarEventosToggle();
}

buscaInput.addEventListener("input", (e) => {
  renderAlunos(e.target.value);
});

preencherCabecalho();
renderDestaque();
renderAlunos();