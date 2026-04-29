const loremPadrao =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.";

const dadosTurmas = {

  u060: {
    codigo: "QUA03062026U060",
    curso: "🧩 Programador BackEnd",
    periodo: "Fevereiro a Abril de 2026",
    pagina: "paginas/turma-u060.html",
    descricao:
      "Turma com projetos integrando front-end e back-end, priorizando soluções úteis para comércios, serviços e organizações locais, com foco em aprendizagem aplicada.",

    destaques: [
      {
        aluno: "Igor Lima de Andrade",
        projeto: "SerCidadão",
        descricao: "Site de conclusão do curso com foco em soluções sociais, voltado a conectar cidadãos a serviços públicos e informações relevantes para a comunidade de Santa Cruz, promovendo cidadania ativa e acesso facilitado a recursos locais.",
        tecnologias: ["HTML", "CSS", "JavaScript", "Java", "Spring Boot", "MySQL"],
        link: "https://igorlima017.github.io/sercidadaosantacruz/",
        github: "https://github.com/igorlima017/sercidadaosantacruz",
        imagem: "img/destaques/u060-igor-sercidadao.png"
      },
      {
        aluno: "Maria Rosângela Mendes",
        projeto: "Tabacaria Havana",
        descricao: "Site de conclusão do curso com foco em tabacaria, voltado a apresentar os produtos, promoções e história da Tabacaria Havana, proporcionando uma experiência online para os clientes e fortalecendo a presença digital do comércio local.",
        tecnologias: ["HTML", "CSS", "JavaScript", "Java", "Spring Boot", "MySQL"],
        link: "https://sammyfreitas.github.io/tabacaria-havana/",
        github: "https://github.com/RosaMendes12/Tabacaria-Havana",
        imagem: "img/destaques/u060-rosa-tabacaria.png"
      },
      {
        aluno: "Matheus Fernando Neves da Silva",
        projeto: "iPhone Store",
        descricao: "Site de criação de uma loja de iPhones fictícia, com foco em apresentar os produtos, promoções e informações sobre os modelos disponíveis, proporcionando uma experiência de compra online para os clientes interessados em adquirir iPhones e acessórios relacionados.",
        tecnologias: ["HTML", "CSS", "JavaScript", "Java", "Spring Boot", "MySQL"],
        link: "https://mtsneves.github.io/iphonestore/",
        github: "https://github.com/mtsneves/iphonestore",
        imagem: "img/destaques/u060-matheus-iphone-store.png"
      }
    ],

    alunos: [
      {
        nome: "Alec Lima Ferreira da Silva",
        linkedin: "",
        instagram: "",
        github: "https://github.com/AlecLimaDev/T.60_Alec_OficinaMecanica_BackEnd",
        observacao: "Projeto final publicado com site e API.",
        projetos: [
          {
            nome: "Oficina Mecânica",
            tecnologias: ["HTML", "CSS", "JavaScript", "Java", "Spring Boot", "MySQL"],
            link: "https://oficinamecanica.qzz.io/",
            github: "https://github.com/AlecLimaDev/T.60_Alec_OficinaMecanica_BackEnd",
            descricao: loremPadrao
          },
          {
            nome: "API Oficina Mecânica",
            tecnologias: ["Java", "Spring Boot", "MySQL"],
            link: "https://api.oficinamecanica.qzz.io/mecanicos",
            github: "https://github.com/AlecLimaDev/T.60_Alec_OficinaMecanica_BackEnd",
            descricao: loremPadrao
          }
        ]
      },
      {
        nome: "Caio Querino Salustiano Marques",
        linkedin: "https://linkedin.com/in/caio-querino-1257622a5",
        instagram: "",
        github: "https://github.com/CaioQuerino/ClinicaMedica",
        observacao: "Possui front-end e repositório do back-end.",
        projetos: [
          {
            nome: "Clínica Médica",
            tecnologias: ["HTML", "CSS", "JavaScript", "Java", "Spring Boot", "MySQL"],
            link: "https://caioquerino.github.io/ClinicaMedica/",
            github: "https://github.com/CaioQuerino/ClinicaMedica",
            descricao: loremPadrao
          },
          {
            nome: "Backend Clínica Médica",
            tecnologias: ["Java", "Spring Boot", "MySQL"],
            link: "",
            github: "https://github.com/CaioQuerino/ClinicaMedicaBackend",
            descricao: loremPadrao
          }
        ]
      },
      {
        nome: "Charles Pires da Ressurreição",
        linkedin: "",
        instagram: "",
        github: "https://github.com/charlespires987/Academia",
        observacao: "Projeto final publicado.",
        projetos: [
          {
            nome: "Academia",
            tecnologias: ["HTML", "CSS", "JavaScript", "Java", "Spring Boot", "MySQL"],
            link: "https://charlespires987.github.io/Academia/",
            github: "https://github.com/charlespires987/Academia",
            descricao: loremPadrao
          }
        ]
      },
      {
        nome: "Igor Lagos Almeida",
        linkedin: "",
        instagram: "",
        github: "",
        observacao: "Aluno listado na planilha sem projeto preenchido.",
        projetos: []
      },
      {
        nome: "Igor Lima de Andrade",
        linkedin: "",
        instagram: "",
        github: "https://github.com/igorlima017/sercidadaosantacruz",
        observacao: "Projeto com forte viés social.",
        projetos: [
          {
            nome: "SerCidadão",
            tecnologias: ["HTML", "CSS", "JavaScript", "Java", "Spring Boot", "MySQL"],
            link: "https://igorlima017.github.io/sercidadaosantacruz/",
            github: "https://github.com/igorlima017/sercidadaosantacruz",
            descricao: "Projeto de conclusão do curso com foco em soluções sociais."
          }
        ]
      },
      {
        nome: "Jhonas dos Santos Cunha",
        linkedin: "",
        instagram: "",
        github: "https://github.com/JhonasSantos/Hospital",
        observacao: "Projeto publicado com temática de clínica infantil.",
        projetos: [
          {
            nome: "Clínica Infantil",
            tecnologias: ["HTML", "CSS", "JavaScript", "Java", "Spring Boot", "MySQL"],
            link: "https://jhonassantos.github.io/Hospital/",
            github: "https://github.com/JhonasSantos/Hospital",
            descricao: "Projeto de conclusão do curso com foco em clínica infantil."
          }
        ]
      },
      {
        nome: "Lucas Matheus Santos de Oliveira",
        linkedin: "",
        instagram: "",
        github: "https://github.com/lmsso12345/TrabalhoFinalSenai",
        observacao: "Projeto final voltado a gestão petshop.",
        projetos: [
          {
            nome: "Gestão Petshop",
            tecnologias: ["HTML", "CSS", "JavaScript", "Java", "Spring Boot", "MySQL"],
            link: "https://lmsso12345.github.io/TrabalhoFinalSenai/",
            github: "https://github.com/lmsso12345/TrabalhoFinalSenai",
            descricao: "Projeto de conclusão do curso com foco em gestão de petshop."
          }
        ]
      },
      {
        nome: "Luiz Felipe Sousa e Sena",
        linkedin: "",
        instagram: "",
        github: "https://github.com/laiipesousa-alt/dizimo",
        observacao: "Projeto publicado com foco administrativo.",
        projetos: [
          {
            nome: "Sistema Dizimo",
            tecnologias: ["HTML", "CSS", "JavaScript", "Java", "Spring Boot", "MySQL"],
            link: "https://laiipesousa-alt.github.io/dizimo/",
            github: "https://github.com/laiipesousa-alt/dizimo",
            descricao: "Projeto de conclusão do curso com foco em sistema de dízimo para igrejas."
          }
        ]
      },
      {
        nome: "Maria Rosangela Mendes",
        linkedin: "",
        instagram: "",
        github: "https://github.com/RosaMendes12/Tabacaria-Havana",
        observacao: "Projeto com repositório, mas sem site publicado na planilha.",
        projetos: [
          {
            nome: "Tabacaria Havana",
            tecnologias: ["Java", "Spring Boot", "MySQL"],
            link: "https://sammyfreitas.github.io/tabacaria-havana/",
            github: "https://github.com/RosaMendes12/Tabacaria-Havana",
            descricao: "Projeto de conclusão do curso com foco em tabacaria."
          }
        ]
      },
      {
        nome: "Matheus Fernando Neves da Silva",
        linkedin: "",
        instagram: "",
        github: "https://github.com/mtsneves/iphonestore",
        observacao: "Projeto final bem estruturado e publicado.",
        projetos: [
          {
            nome: "iPhone Store",
            tecnologias: ["HTML", "CSS", "JavaScript", "Java", "Spring Boot", "MySQL"],
            link: "https://mtsneves.github.io/iphonestore/",
            github: "https://github.com/mtsneves/iphonestore",
            descricao: "Projeto de conclusão do curso com foco em loja de iPhones."
          }
        ]
      }
    ]
  },

  u059: {
    codigo: "QUA03062026U059",
    curso: "🧩 Programador BackEnd",
    periodo: "Fevereiro a Abril de 2026",
    pagina: "paginas/turma-u059.html",
    descricao:
      "Turma com projetos finais voltados ao desenvolvimento de sistemas completos, unindo front-end mínimo em HTML/CSS e construção de APIs com Java, Spring Boot e banco de dados.",

    destaques: [
      {
        aluno: "Arthur Lima Provenzano Palhaes",
        projeto: "Restaurante",
        descricao: "Site de conclusão do curso com foco em módulos para um restaurante fictício, voltado a apresentar os módulos de gestão de cadastro de garçons, mesas e pedidos.",
        tecnologias: ["HTML", "CSS", "JavaScript", "Java", "Spring Boot", "MySQL"],
        link: "https://sammyfreitas.github.io/restauranteArthur",
        github: "https://github.com/arthurpalhaes/restaurante",
        imagem: "img/destaques/u059-arthur-restaurante.png"
      },
      {
        aluno: "Elisangela Ribeiro",
        projeto: "Turismo",
        descricao: "Aproveitando o projeto final para criar um site de agência particular de turismo da aluna focado em atrativos locais e passeios, com o objetivo de promover o turismo regional e destacar pontos turísticos, eventos e experiências culturais disponíveis na área, incentivando a visitação e valorização do patrimônio local.",
        tecnologias: ["HTML", "CSS", "JavaScript"],
        link: "https://sammyfreitas.github.io/encantosrio/",
        github: "https://github.com/elisangelafrrio",
        imagem: "img/destaques/u059-elisangela-turismo.png"
      },
      {
        aluno: "Kaiky Ferreira da Silva",
        projeto: "Restaurante Japonês Delivery",
        descricao: "Criação de um site para um restaurante japonês fictício, com foco em delivery, apresentando o cardápio, promoções e informações de contato, proporcionando uma experiência online para os clientes interessados em saborear a culinária japonesa no conforto de suas casas.",
        tecnologias: ["HTML", "CSS", "JavaScript", "Java", "Spring Boot", "MySQL"],
        link: "https://kaikyferreiradasilva0-png.github.io/Japanese-Restaurant-Delivery/",
        github: "https://github.com/kaikyferreiradasilva0-png/Japanese-Restaurant-Delivery",
        imagem: "img/destaques/u059-kaiky-restaurante-japones.png"
      },
      {
        aluno: "Kamila Florindo",
        projeto: "Manuntecare",
        descricao: loremPadrao,
        tecnologias: ["HTML", "CSS", "JavaScript", "Java", "Spring Boot", "MySQL"],
        link: "https://sammyfreitas.github.io/manuntecare",
        github: "https://github.com/sammyfreitas/manuntecare",
        imagem: "img/destaques/u059-kamila-manuntecare.png"
      },
      {
        aluno: "Wellington Gonçalves de Moura de Barros",
        projeto: "Wellington Tech Store",
        descricao: "Projeto de conclusão do curso com foco em loja de eletrônicos, voltado a apresentar os produtos, promoções e informações sobre os modelos disponíveis, proporcionando uma experiência de compra online para os clientes interessados em adquirir eletrônicos e acessórios relacionados.",
        tecnologias: ["HTML", "CSS", "JavaScript", "Java", "Spring Boot", "MySQL"],
        link: "https://wellmourati.github.io/Loja_Eletronico_SenaiT59-Front",
        github: "https://github.com/WellMouraTi/Loja_Eletronico_SenaiT59-Front?authuser=0",
        imagem: "img/destaques/u059-wellington-eletronicos.png"
      },


    ],

    alunos: [
      {
        nome: "Arthur Lima Provenzano Palhaes",
        linkedin: "",
        instagram: "",
        github: "https://github.com/arthurpalhaes/restaurante",
        observacao: "Projeto final com front-end e API Restful.",
        projetos: [
          {
            nome: "Restaurante",
            tecnologias: ["HTML", "CSS", "JavaScript", "Java", "Spring Boot", "MySQL"],
            link: "https://sammyfreitas.github.io/restauranteArthur",
            github: "https://github.com/arthurpalhaes/restaurante",
            descricao: loremPadrao
          }
        ]
      },
      {
        nome: "Eduarda Baptista de Castilho",
        linkedin: "",
        instagram: "",
        github: "https://github.com/eduardacastilho/lojinha-audio-visual-/",
        observacao: "Projeto final completo com boa integração entre interface e back-end.",
        projetos: [
          {
            nome: "LojaCDs",
            tecnologias: ["HTML", "CSS", "JavaScript", "Java", "Spring Boot", "MySQL"],
            link: "https://eduardacastilho.github.io/lojinha-audio-visual-/",
            github: "https://github.com/eduardacastilho/lojinha-audio-visual-/",
            descricao: loremPadrao
          }
        ]
      },
      {
        nome: "Elisangela Fernandes Ribeiro",
        linkedin: "",
        instagram: "",
        github: "https://github.com/sammyfreitas/encantosrio",
        observacao: "Projeto com foco principal no front-end.",
        projetos: [
          {
            nome: "Encantos Rio",
            tecnologias: ["HTML", "CSS", "JavaScript"],
            link: "https://sammyfreitas.github.io/encantosrio",
            github: "https://github.com/sammyfreitas/encantosrio",
            descricao: loremPadrao
          }
        ]
      },
      {
        nome: "Felipe Campos de Moura",
        linkedin: "",
        instagram: "",
        github: "https://github.com/FelipeC-M/clinica?authuser=2",
        observacao: "Projeto final com deploy e uso de Railway.",
        projetos: [
          {
            nome: "Clínica",
            tecnologias: ["HTML", "CSS", "JavaScript", "Java", "Spring Boot", "MySQL", "Railway"],
            link: "https://felipec-m.github.io/clinica/?authuser=2",
            github: "https://github.com/FelipeC-M/clinica?authuser=2",
            descricao: loremPadrao
          }
        ]
      },
      {
        nome: "Felipe Santos Melo",
        linkedin: "",
        instagram: "",
        github: "https://github.com/felipesm12/petshop",
        observacao: "Projeto com front-end e back-end publicado.",
        projetos: [
          {
            nome: "Petshop",
            tecnologias: ["HTML", "CSS", "JavaScript", "Java", "Spring Boot", "MySQL", "Railway"],
            link: "https://felipesm12.github.io/petshop",
            github: "https://github.com/felipesm12/petshop",
            descricao: loremPadrao
          }
        ]
      },
      {
        nome: "Gusttavo Oliveira da Silva",
        linkedin: "",
        instagram: "",
        github: "https://github.com/sammyfreitas/frequenciaIgreja",
        observacao: "Projeto com foco principal em dashboard e front-end.",
        projetos: [
          {
            nome: "Dashboard Frequência Membros Igreja",
            tecnologias: ["HTML", "CSS", "JavaScript", "Spring Boot"],
            link: "https://sammyfreitas.github.io/frequenciaIgreja/",
            github: "https://github.com/sammyfreitas/frequenciaIgreja",
            descricao: loremPadrao
          }
        ]
      },
      {
        nome: "Kaiky Ferreira da Silva",
        linkedin: "",
        instagram: "",
        github: "https://github.com/kaikyferreiradasilva0-png/Japanese-Restaurant-Delivery",
        observacao: "Projeto final forte e bem conectado à proposta comercial.",
        projetos: [
          {
            nome: "Restaurante Japonês Delivery",
            tecnologias: ["HTML", "CSS", "JavaScript", "Java", "Spring Boot", "MySQL"],
            link: "https://kaikyferreiradasilva0-png.github.io/Japanese-Restaurant-Delivery/",
            github: "https://github.com/kaikyferreiradasilva0-png/Japanese-Restaurant-Delivery",
            descricao: loremPadrao
          }
        ]
      },
      {
        nome: "Kamila da Silva Florindo",
        linkedin: "",
        instagram: "",
        github: "https://github.com/sammyfreitas/manuntecare",
        observacao: "Projeto final voltado a manutenção técnica.",
        projetos: [
          {
            nome: "ManunteCare",
            tecnologias: ["HTML", "CSS", "JavaScript", "Java", "Spring Boot", "MySQL"],
            link: "https://sammyfreitas.github.io/manuntecare/",
            github: "https://github.com/sammyfreitas/manuntecare",
            descricao: loremPadrao
          }
        ]
      },
      {
        nome: "Wellington Gonçalves Moura de Barros",
        linkedin: "",
        instagram: "",
        github: "https://github.com/WellMouraTi/Loja_Eletronico_SenaiT59-Front?authuser=0",
        observacao: "Projeto publicado com tema de loja de eletrônicos.",
        projetos: [
          {
            nome: "Loja Eletrônicos",
            tecnologias: ["HTML", "CSS", "JavaScript", "Java", "Spring Boot", "MySQL"],
            link: "https://wellmourati.github.io/Loja_Eletronico_SenaiT59-Front",
            github: "https://github.com/WellMouraTi/Loja_Eletronico_SenaiT59-Front?authuser=0",
            descricao: loremPadrao
          }
        ]
      },
      {
        nome: "Wesley de Sousa Borges",
        linkedin: "",
        instagram: "",
        github: "https://github.com/Wesleysousa39/wcell",
        observacao: "Projeto final com foco em loja e manutenção de celulares.",
        projetos: [
          {
            nome: "WCell",
            tecnologias: ["HTML", "CSS", "JavaScript", "Java", "Spring Boot", "MySQL"],
            link: "https://wesleysousa39.github.io/wcell/",
            github: "https://github.com/Wesleysousa39/wcell",
            descricao: loremPadrao
          }
        ]
      }
    ]
  },

  u908: {
    codigo: "APR0012026U908",
    curso: "📁 Assistente Administrativo",
    periodo: "Fevereiro a Abril de 2026",
    pagina: "paginas/turma-u908.html",
    descricao:
      "EM CONSTRUÇÃO: Na disciplina de TGA e em Empreendedorismo, os alunos tiveram o primeiro contato com construção de ideias de negócio, utilizando Canvas,fazendo prototipação conceitual de produtos e apresentação de pitch.",
    destaques: [],
    alunos: [],
  },

  u883: {
    codigo: "APR0012025U883",
    curso: "📁 Assistente Administrativo",
    periodo: "Novembro de 2025 a Janeiro de 2026",
    pagina: "paginas/turma-u883.html",
    descricao:
      "EM CONSTRUÇÃO: Na disciplina de TGA e em Empreendedorismo, os alunos tiveram o primeiro contato com construção de ideias de negócio, utilizando Canvas,fazendo prototipação conceitual de produtos e apresentação de pitch.",
    destaques: [],
    alunos: [],
  },

  u001: {
    codigo: "APR01302025U001",
    curso: "💻 Desenvolvedor de Soluções Integradas em TI (Eletrobrás)",
    periodo: "Junho a Outubro de 2025",
    pagina: "paginas/turma-u001.html",
    descricao:
      "EM CONSTRUÇÃO: Turma de aprendizagem com foco em desenvolvimento de projetos com apresentação em formato de pitch, estruturação de ideias, proposta de solução tecnológica e prototipação inicial voltada ao contexto organizacional.",
    destaques: [],
    alunos: [],
  },

  u005: {
    codigo: "APP23382025U005",
    curso: "📊 Análise de Dados",
    periodo: "Dezembro de 2025",
    pagina: "paginas/turma-u005.html",
    descricao:
      "EM CONSTRUÇÃO: Turma com projetos de análise de dados, utilizando ferramentas como Excel e Power BI, com foco em soluções aplicadas. Turma em construção. Projetos e alunos serão adicionados após o levantamento das entregas.",
    destaques: [],
    alunos: []
  },

  u036: {
    codigo: "QUA03062025U036",
    curso: "🧩 Programador BackEnd",
    periodo: "Junho a Setembro de 2025",
    pagina: "paginas/turma-u036.html",
    descricao:
      "EM CONSTRUÇÃO: Turma de Back-end com projetos voltados ao desenvolvimento de APIs restful de Sistema CRUD, utilizando Java, Spring Boot e banco de dados MySQL",
    destaques: [],
    alunos: [],
  },

  u030: {
    codigo: "QUA03062025U030",
    curso: "🧩 Programador BackEnd",
    periodo: "Fevereiro a Abril de 2025",
    pagina: "paginas/turma-u030.html",
    descricao:
      "EM CONSTRUÇÃO: Turma de Back-end com projetos voltados ao desenvolvimento de APIs restful de Sistema CRUD, utilizando Java, Spring Boot e banco de dados MySQL",
    destaques: [],
    alunos: [],
  },

  u027: {
    codigo: "QUA02382025U027",
    curso: "🌐 Operação de Sistemas Computacionais em Rede",
    periodo: "Março a Julho de 2025",
    pagina: "paginas/turma-u027.html",
    descricao:
      "Turma voltada ao planejamento e implementação de infraestrutura de rede, integrando documentação técnica, planilha de custos, apresentação e simulação no Cisco Packet Tracer.",
    destaques: [
      {
        aluno: "Lucas Pereira da Silva",
        projeto: "Projeto de Infraestrutura de Rede",
        descricao: "Documentação técnica, proposta e apresentação de solução de rede empresarial.",
        tecnologias: ["Packet Tracer", "Word", "Excel", "PowerPoint", "Redes"],
        link: "download/T.U027.Redes_LUCAS_PEREIRA_Documentação_Técnica .pdf",
        github: "",
        imagem: "img/destaques/u027-lucas-pereira.png"
      },
      {
        aluno: "Lucas Avelino do Carmo Santos",
        projeto: "Projeto de Infraestrutura de Rede",
        descricao: "Projeto técnico de rede com documentação e apresentação.",
        tecnologias: ["Packet Tracer", "Word", "Excel", "PowerPoint", "Redes"],
        link: "download/T.U027.Redes_LUCAS_AVELINO_Documentação_Técnica .pdf",
        github: "",
        imagem: "img/destaques/u027-lucas-avelino.png"
      },
      {
        aluno: "Thiago Gonçalves Alves",
        projeto: "Projeto de Infraestrutura de Rede",
        descricao: "Projeto técnico com planejamento, documentação e apresentação para cliente.",
        tecnologias: ["Packet Tracer", "Word", "Excel", "PowerPoint", "Redes"],
        link: "download/T.U027.Redes_THIAGO_GONCALVES_Documentação_Técnica .pdf",
        github: "",
        imagem: "img/destaques/u027-thiago.png"
      }
    ],
    alunos: [
      {
        nome: "Asafe da Silva Lages Bezerra",
        github: "",
        linkedin: "",
        instagram: "",
        observacao: "Nota 60.",
        projetos: [
          {
            nome: "Documentação Técnica de Rede",
            tecnologias: ["Packet Tracer", "Word", "Excel", "PowerPoint", "Redes"],
            link: "download/T.U027.Redes_ASAFE_Documentação_Técnica .pdf",
            github: "",
            descricao: loremPadrao
          }
        ]
      },
      {
        nome: "Caio Vinicius Pereira Couto",
        github: "",
        linkedin: "",
        instagram: "",
        observacao: "Nota 85.",
        projetos: [
          {
            nome: "Documentação Técnica de Rede",
            tecnologias: ["Packet Tracer", "Word", "Excel", "PowerPoint", "Redes"],
            link: "download/T.U027.Redes_CAIO_Documentação_Técnica .pdf",
            github: "",
            descricao: loremPadrao
          },
          {
            nome: "Apresentação Técnica",
            tecnologias: ["PowerPoint", "Redes"],
            link: "download/T.U027.Redes_CAIO_Apresentacao.pptx",
            github: "",
            descricao: loremPadrao
          }
        ]
      },
      {
        nome: "Diego Morais Sousa Costa",
        github: "",
        linkedin: "",
        instagram: "",
        observacao: "Nota 80.",
        projetos: [
          {
            nome: "Documentação Técnica de Rede",
            tecnologias: ["Packet Tracer", "Word", "Excel", "PowerPoint", "Redes"],
            link: "download/T.U027.Redes_DIEGO_Documentação_Técnica .pdf",
            github: "",
            descricao: loremPadrao
          },
          {
            nome: "Apresentação Técnica",
            tecnologias: ["PowerPoint", "Redes"],
            link: "download/T.U027.Redes_DIEGO_Apresentacao.pptx",
            github: "",
            descricao: loremPadrao
          }
        ]
      },
      {
        nome: "Eduarda da Silva Novo",
        github: "",
        linkedin: "",
        instagram: "",
        observacao: "Nota 80.",
        projetos: [
          {
            nome: "Documentação Técnica de Rede",
            tecnologias: ["Packet Tracer", "Word", "Excel", "PowerPoint", "Redes"],
            link: "download/T.U027.Redes_EDUARDA_Documentação_Técnica .pdf",
            github: "",
            descricao: loremPadrao
          },
          {
            nome: "Apresentação Técnica",
            tecnologias: ["PowerPoint", "Redes"],
            link: "download/T.U027.Redes_EDUARDA_Apresentacao.pptx",
            github: "",
            descricao: loremPadrao
          }
        ]
      },
      {
        nome: "Felipe Martins Sisquim",
        github: "",
        linkedin: "",
        instagram: "",
        observacao: "Nota 85.",
        projetos: [
          {
            nome: "Documentação Técnica de Rede",
            tecnologias: ["Packet Tracer", "Word", "Excel", "PowerPoint", "Redes"],
            link: "download/T.U027.Redes_FELIPE_SISQUIM_Documentação_Técnica .pdf",
            github: "",
            descricao: loremPadrao
          },
          {
            nome: "Apresentação Técnica",
            tecnologias: ["PowerPoint", "Redes"],
            link: "download/T.U027.Redes_FELIPE_SISQUIM_Apresentacao.pptx",
            github: "",
            descricao: loremPadrao
          }
        ]
      },
      {
        nome: "Fernando Silva Barbosa",
        github: "",
        linkedin: "",
        instagram: "",
        observacao: "Nota 85.",
        projetos: [
          {
            nome: "Documentação Técnica de Rede",
            tecnologias: ["Packet Tracer", "Word", "Excel", "PowerPoint", "Redes"],
            link: "download/T.U027.Redes_FERNANDO_SILVA_Documentação_Técnica .pdf",
            github: "",
            descricao: loremPadrao
          },
          {
            nome: "Apresentação Técnica",
            tecnologias: ["PowerPoint", "Redes"],
            link: "download/T.U027.Redes_FERNANDO_SILVA_Apresentacao.pptx",
            github: "",
            descricao: loremPadrao
          }
        ]
      },
      {
        nome: "Guilherme Felipe Tavares Sena",
        github: "",
        linkedin: "",
        instagram: "",
        observacao: "Nota 85.",
        projetos: [
          {
            nome: "Documentação Técnica de Rede",
            tecnologias: ["Packet Tracer", "Word", "Excel", "PowerPoint", "Redes"],
            link: "download/T.U027.Redes_GUILHERME_Documentação_Técnica .pdf",
            github: "",
            descricao: loremPadrao
          },
          {
            nome: "Apresentação Técnica",
            tecnologias: ["PowerPoint", "Redes"],
            link: "download/T.U027.Redes_GUILHERME_Apresentacao.pptx",
            github: "",
            descricao: loremPadrao
          }
        ]
      },
      {
        nome: "Lucas Avelino do Carmo Santos",
        github: "",
        linkedin: "",
        instagram: "",
        observacao: "Nota 95.",
        projetos: [
          {
            nome: "Documentação Técnica de Rede",
            tecnologias: ["Packet Tracer", "Word", "Excel", "PowerPoint", "Redes"],
            link: "download/T.U027.Redes_LUCAS_AVELINO_Documentação_Técnica .pdf",
            github: "",
            descricao: loremPadrao
          },
          {
            nome: "Apresentação Técnica",
            tecnologias: ["PowerPoint", "Redes"],
            link: "download/T.U027.Redes_LUCAS_AVELINO_Apresentacao.pptx",
            github: "",
            descricao: loremPadrao
          }
        ]
      },
      {
        nome: "Lucas Pereira da Silva",
        github: "",
        linkedin: "",
        instagram: "",
        observacao: "Nota 100.",
        projetos: [
          {
            nome: "Documentação Técnica de Rede",
            tecnologias: ["Packet Tracer", "Word", "Excel", "PowerPoint", "Redes"],
            link: "download/T.U027.Redes_LUCAS_PEREIRA_Documentação_Técnica .pdf",
            github: "",
            descricao: loremPadrao
          },
          {
            nome: "Apresentação Técnica",
            tecnologias: ["PowerPoint", "Redes"],
            link: "download/T.U027.Redes_LUCAS_PEREIRA_Apresentacao.pptx",
            github: "",
            descricao: loremPadrao
          }
        ]
      },
      {
        nome: "Nathã Almeida Oliveira",
        github: "",
        linkedin: "",
        instagram: "",
        observacao: "Nota 80.",
        projetos: [
          {
            nome: "Documentação Técnica de Rede",
            tecnologias: ["Packet Tracer", "Word", "Excel", "PowerPoint", "Redes"],
            link: "download/T.U027.Redes_NATHÃ_Documentação_Técnica .pdf",
            github: "",
            descricao: loremPadrao
          },
          {
            nome: "Apresentação Técnica",
            tecnologias: ["PowerPoint", "Redes"],
            link: "download/T.U027.Redes_NATHÃ_Apresentacao.pptx",
            github: "",
            descricao: loremPadrao
          }
        ]
      },
      {
        nome: "Thiago Gonçalves Alves",
        github: "",
        linkedin: "",
        instagram: "",
        observacao: "Nota 95.",
        projetos: [
          {
            nome: "Documentação Técnica de Rede",
            tecnologias: ["Packet Tracer", "Word", "Excel", "PowerPoint", "Redes"],
            link: "download/T.U027.Redes_THIAGO_GONCALVES_Documentação_Técnica .pdf",
            github: "",
            descricao: loremPadrao
          },
          {
            nome: "Apresentação Técnica",
            tecnologias: ["PowerPoint", "Redes"],
            link: "download/T.U027.Redes_THIAGO_GONCALVES_Apresentacao.pptx",
            github: "",
            descricao: loremPadrao
          }
        ]
      }
    ]
  },

  o039: {
    codigo: "QUA02492025O039",
    curso: "💻 Programador FrontEnd",
    periodo: "Fevereiro de 2025",
    pagina: "paginas/turma-o039.html",
    descricao:
      "Turma focada na criação de interfaces web e sites autorais, com incentivo para que os projetos finais dialoguem com pequenos comerciantes, presença digital e comunicação com a comunidade.",

    destaques: [
      {
        aluno: "Gabriel Viana de Freitas Leão da Costa",
        projeto: "Site Vianense",
        descricao: "Projeto voltado a criação de um site para a empresa Vianense, com foco em apresentar as promoções, encartes e link para os videos e comerciais do supermercado.",
        tecnologias: ["HTML", "CSS", "JavaScript"],
        link: "https://gabriel-leao-git.github.io/Site-vianense/",
        github: "https://github.com/gabriel-leao-git",
        imagem: "img/destaques/o039-gabriel-vianense.png"
      },
      {
        aluno: "Gabriel Viana de Freitas Leão da Costa",
        projeto: "Kata Reciclagem",
        descricao: "Projeto voltado a conscientização sobre reciclagem e sustentabilidade com viés social para uma Cooperativa de Catadores.",
        tecnologias: ["HTML", "CSS", "JavaScript"],
        link: "https://gabriel-leao-git.github.io/Kata-Reciclagem/",
        github: "https://github.com/gabriel-leao-git",
        imagem: "img/destaques/o039-gabriel-kata-reciclagem.png"
      },
      {
        aluno: "Geovanni Marques de Oliveira",
        projeto: "Portfolio Nara Eventos",
        descricao: "Criação de um portfolio para a empresa Nara Eventos, com foco em apresentar seus serviços e mostrar que eventos transformam sonhos em realidade com eventos memoráveis.",
        tecnologias: ["HTML", "CSS", "JavaScript"],
        link: "https://geovannimarques.github.io/portfolio-nara/",
        github: "https://github.com/geovannimarques",
        imagem: "img/destaques/o039-gabriel-geovanni-nara-eventos.png"
      },
      {
        aluno: "Josmar Felippe de Oliveira",
        projeto: "Laborar: Gestão em Saúde Ocupacional",
        descricao: "Projeto voltado a criação de um site para a empresa Laborar, com foco em apresentar seus produtos e serviços.",
        tecnologias: ["HTML", "CSS", "JavaScript", "React"],
        link: "https://josmar-felippe.github.io/Laborar/",
        github: "https://github.com/josmar-felippe",
        imagem: "img/destaques/o039-josmar-laborar.png"
      },
      {
        aluno: "Kaio Victor Nunes de Oliveira",
        projeto: "Start Consultoria",
        descricao: "Projeto voltado a criação de um site para a empresa Start Consultoria, um serviço de Job Hunter, Curriculo Profissional e Reestruturação de LinkedIn, com foco em apresentar seus serviços e mostrar que o futuro do trabalho é para quem se prepara.",
        tecnologias: ["HTML", "CSS", "JavaScript", "React"],
        link: "https://kvnerd.github.io/KvNerd-start/",
        github: "https://github.com/kvnerd",
        imagem: "img/destaques/o039-kaio-start.png"
      },
    ],

    alunos: [
      {
        nome: "Allan Luís Moquedace Terra",
        linkedin: "",
        instagram: "https://www.instagram.com/021.allan.moquedace/",
        github: "https://github.com/allanluis",
        observacao: "Projeto principal publicado.",
        projetos: [
          {
            nome: "Minhas Actions",
            tecnologias: ["HTML", "CSS", "JavaScript"],
            link: "https://allanluis.github.io/minhas-actions/",
            github: "",
            descricao: loremPadrao
          }
        ]
      },
      {
        nome: "Bilma Miliana De Almeida Evangelista",
        linkedin: "https://www.linkedin.com/in/miliana-almeida-a06896279/",
        instagram: "",
        github: "https://github.com/Miliana-Almeida",
        observacao: "Possui múltiplos projetos.",
        projetos: [
          {
            nome: "Minha Lanchonete",
            tecnologias: ["HTML", "CSS", "JavaScript", "React"],
            link: "https://miliana-almeida.github.io/minha_lanchonete/",
            github: "https://github.com/Miliana-Almeida",
            descricao: loremPadrao
          },
          {
            nome: "Salão de Beleza",
            tecnologias: ["HTML", "CSS", "JavaScript", "React"],
            link: "https://miliana-almeida.github.io/Sal-o-de-beleza/",
            github: "https://github.com/Miliana-Almeida",
            descricao: loremPadrao
          },
          {
            nome: "Calculadora do IMC",
            tecnologias: ["HTML", "CSS", "JavaScript"],
            link: "https://miliana-almeida.github.io/Calculadora-do-IMC/",
            github: "https://github.com/Miliana-Almeida",
            descricao: loremPadrao
          },
          {
            nome: "Calcular Combustível",
            tecnologias: ["HTML", "CSS", "JavaScript"],
            link: "https://miliana-almeida.github.io/CALCULAR-COMBUSTIVEL/",
            github: "https://github.com/Miliana-Almeida",
            descricao: loremPadrao
          }
        ]
      },
      {
        nome: "Daniella Passos Fialho",
        linkedin: "https://www.linkedin.com/in/daniella-fialho-05081477/",
        instagram: "",
        github: "https://github.com/dpfialho92",
        observacao: "Possui projeto adicional.",
        projetos: [
          {
            nome: "Retro Game",
            tecnologias: ["HTML", "CSS", "JavaScript"],
            link: "https://dpfialho92.github.io/retro_game/",
            github: "https://github.com/dpfialho92",
            descricao: loremPadrao
          },
          {
            nome: "Minha Lanchonete",
            tecnologias: ["HTML", "CSS", "JavaScript"],
            link: "https://dpfialho92.github.io/minha-lanchonete/",
            github: "https://github.com/dpfialho92",
            descricao: loremPadrao
          }
        ]
      },
      {
        nome: "Dávila Pontes Alves",
        linkedin: "",
        instagram: "",
        github: "",
        observacao: "Entregou o código, mas sem GitHub próprio.",
        projetos: [
          {
            nome: "GDecor",
            tecnologias: ["HTML", "CSS"],
            link: "https://sammyfreitas.github.io/gdecor/",
            github: "",
            descricao: loremPadrao
          }
        ]
      },
      {
        nome: "Elaine Christina Celestino",
        linkedin: "https://www.linkedin.com/in/elainecelestino/",
        instagram: "",
        github: "https://github.com/elaccel",
        observacao: "Projeto bem estruturado.",
        projetos: [
          {
            nome: "Tatooine Lanches",
            tecnologias: ["HTML", "CSS", "JavaScript"],
            link: "https://elaccel.github.io/tatooine-lanches/",
            github: "https://github.com/elaccel",
            descricao: loremPadrao
          }
        ]
      },
      {
        nome: "Erick dos Santos Silveira",
        linkedin: "",
        instagram: "",
        github: "https://github.com/dsserick",
        observacao: "Projeto simples.",
        projetos: [
          {
            nome: "Home Page",
            tecnologias: ["HTML", "CSS"],
            link: "https://dsserick.github.io/home-page-1",
            github: "https://github.com/dsserick",
            descricao: loremPadrao
          }
        ]
      },
      {
        nome: "Erick Rocha De Almeida Santos",
        linkedin: "",
        instagram: "",
        github: "https://github.com/erickrocha21",
        observacao: "Projeto publicado.",
        projetos: [
          {
            nome: "Minha Lanchonete",
            tecnologias: ["HTML", "CSS", "JavaScript"],
            link: "https://erickrocha21.github.io/minha-lanchonete/",
            github: "https://github.com/erickrocha21",
            descricao: loremPadrao
          }
        ]
      },
      {
        nome: "Gabriel Viana de Freitas Leão da Costa",
        linkedin: "https://www.linkedin.com/in/gabriel-le%C3%A3o-rio-de-janeiro-br",
        instagram: "https://www.instagram.com/gabbriel_leao/",
        github: "https://github.com/gabriel-leao-git",
        observacao: "Possui múltiplos projetos e portfólio.",
        projetos: [
          {
            nome: "Site Vianense",
            tecnologias: ["HTML", "CSS", "JavaScript"],
            link: "https://gabriel-leao-git.github.io/Site-vianense/",
            github: "https://github.com/gabriel-leao-git",
            descricao: loremPadrao
          },
          {
            nome: "Kata Reciclagem",
            tecnologias: ["HTML", "CSS", "JavaScript"],
            link: "https://gabriel-leao-git.github.io/kata-reciclagem/",
            github: "https://github.com/gabriel-leao-git",
            descricao: loremPadrao
          },
          {
            nome: "Portfólio Gabriel Leão",
            tecnologias: ["HTML", "CSS", "JavaScript"],
            link: "https://gabriel-leao-git.github.io/Portfolio-Gabriel-Leao/",
            github: "https://github.com/gabriel-leao-git",
            descricao: loremPadrao
          }
        ]
      },
      {
        nome: "Geovanni Marques",
        linkedin: "",
        instagram: "",
        github: "https://github.com/geovannimarques",
        observacao: "Projeto nível profissional.",
        projetos: [
          {
            nome: "Portfólio Nara",
            tecnologias: ["HTML", "CSS", "JavaScript", "React"],
            link: "https://geovannimarques.github.io/portfolio-nara/",
            github: "https://github.com/geovannimarques",
            descricao: loremPadrao
          }
        ]
      },
      {
        nome: "Israel Richene Costa",
        linkedin: "",
        instagram: "",
        github: "https://github.com/IsraelRCosta",
        observacao: "Possui múltiplos projetos.",
        projetos: [
          {
            nome: "Projeto Lanchonete",
            tecnologias: ["HTML", "CSS", "JavaScript"],
            link: "https://israelrcosta.github.io/Projeto-lanchonete/",
            github: "https://github.com/IsraelRCosta",
            descricao: loremPadrao
          },
          {
            nome: "Projeto Pizzaria",
            tecnologias: ["HTML", "CSS", "JavaScript"],
            link: "https://israelrcosta.github.io/Projeto-Pizzaria/",
            github: "https://github.com/IsraelRCosta",
            descricao: loremPadrao
          }
        ]
      },
      {
        nome: "Jefferson Pereira Pinto",
        linkedin: "",
        instagram: "",
        github: "https://github.com/Jeffersonpp-prog/Projeto_Final",
        observacao: "Somente backend encontrado.",
        projetos: []
      },
      {
        nome: "Jhéssica Tamiozzo Magela Campos",
        linkedin: "",
        instagram: "",
        github: "https://github.com/jhessicatamiozzo",
        observacao: "Projeto simples.",
        projetos: [
          {
            nome: "Página 1",
            tecnologias: ["HTML", "CSS"],
            link: "https://jhessicatamiozzo.github.io/Pagina-1/",
            github: "https://github.com/jhessicatamiozzo",
            descricao: loremPadrao
          }
        ]
      },
      {
        nome: "João Barbosa Neto",
        linkedin: "",
        instagram: "",
        github: "https://github.com/jneto17",
        observacao: "Possui mais de um projeto.",
        projetos: [
          {
            nome: "Petshop Amor Animal",
            tecnologias: ["HTML", "CSS", "JavaScript", "React"],
            link: "https://jneto17.github.io/petshopAmoranimal/",
            github: "https://github.com/jneto17",
            descricao: loremPadrao
          },
          {
            nome: "Restaurante Paraíso das Receitas",
            tecnologias: ["HTML", "CSS", "JavaScript"],
            link: "https://jneto17.github.io/Restaurante-4/",
            github: "https://github.com/jneto17",
            descricao: loremPadrao
          }
        ]
      },
      {
        nome: "Josmar Felippe da Silva Pinho",
        linkedin: "https://www.linkedin.com/in/josmar-felippe-10561713/",
        instagram: "",
        github: "https://github.com/josmar-felippe",
        observacao: "Projeto publicado.",
        projetos: [
          {
            nome: "Laborar",
            tecnologias: ["HTML", "CSS"],
            link: "https://josmar-felippe.github.io/Laborar/",
            github: "https://github.com/josmar-felippe",
            descricao: loremPadrao
          }
        ]
      },
      {
        nome: "Kaio Victor Amorim da Silva",
        linkedin: "",
        instagram: "",
        github: "https://github.com/kvnerd",
        observacao: "Possui vários projetos.",
        projetos: [
          {
            nome: "Homepage KV",
            tecnologias: ["HTML", "CSS", "JavaScript"],
            link: "https://kvnerd.github.io/homepage-kv/",
            github: "https://github.com/kvnerd",
            descricao: loremPadrao
          },
          {
            nome: "Relógio KV",
            tecnologias: ["HTML", "CSS", "JavaScript"],
            link: "https://kvnerd.github.io/KvNerd-relogio/",
            github: "https://github.com/kvnerd",
            descricao: loremPadrao
          },
          {
            nome: "Kaio Lanches",
            tecnologias: ["HTML", "CSS", "JavaScript", "React"],
            link: "https://kvnerd.github.io/kaio-lanchess/",
            github: "https://github.com/kvnerd",
            descricao: loremPadrao
          },
          {
            nome: "Start Consultoria",
            tecnologias: ["HTML", "CSS", "JavaScript"],
            link: "https://kvnerd.github.io/KvNerd-start/",
            github: "https://github.com/kvnerd",
            descricao: loremPadrao
          }
        ]
      },
      {
        nome: "Karina Beatriz Salomão Vasconcelos",
        linkedin: "",
        instagram: "",
        github: "https://github.com/karinavasconcelos",
        observacao: "Projeto simples.",
        projetos: [
          {
            nome: "Home Page",
            tecnologias: ["HTML", "CSS"],
            link: "https://karinavasconcelos.github.io/Home-Page/",
            github: "https://github.com/karinavasconcelos",
            descricao: loremPadrao
          }
        ]
      },
      {
        nome: "Luiz Felipe da Silva Mendes",
        linkedin: "",
        instagram: "",
        github: "https://github.com/Felipeseucorretor",
        observacao: "Projeto simples.",
        projetos: [
          {
            nome: "Página Web",
            tecnologias: ["HTML", "CSS"],
            link: "https://felipeseucorretor.github.io/ex-pag-1/",
            github: "https://github.com/Felipeseucorretor",
            descricao: loremPadrao
          }
        ]
      },
      {
        nome: "Nelson Pedro Rodrigues da Silva",
        linkedin: "https://www.linkedin.com/in/pedro-rodrigues-8b447720a/",
        instagram: "https://www.instagram.com/pedrovanessa9",
        github: "https://github.com/pedrorodrigues89",
        observacao: "Possui vários projetos, incluindo projeto final completo.",
        projetos: [
          {
            nome: "Neon Lanches",
            tecnologias: ["HTML", "CSS"],
            link: "https://pedrorodrigues89.github.io/Neon-Lanches/",
            github: "https://github.com/pedrorodrigues89",
            descricao: loremPadrao
          },
          {
            nome: "Minha Biografia/Perfil",
            tecnologias: ["HTML", "CSS"],
            link: "https://pedrorodrigues89.github.io/pagina-4/",
            github: "https://github.com/pedrorodrigues89",
            descricao: loremPadrao
          },
          {
            nome: "Tabela Call of Duty",
            tecnologias: ["HTML", "CSS"],
            link: "https://pedrorodrigues89.github.io/Tabela-call-of-duty/",
            github: "https://github.com/pedrorodrigues89",
            descricao: loremPadrao
          },
          {
            nome: "Montagem e Manutenção",
            tecnologias: ["HTML", "CSS"],
            link: "https://pedrorodrigues89.github.io/Montagem-e-manuten-o.INFOPVTEC/",
            github: "https://github.com/pedrorodrigues89",
            descricao: loremPadrao
          },
          {
            nome: "Vanessa Joias",
            tecnologias: ["HTML", "CSS", "JavaScript", "React"],
            link: "https://pedrorodrigues89.github.io/Vanessa-Joias-projeto-integrador/",
            github: "https://github.com/pedrorodrigues89",
            descricao: loremPadrao
          }
        ]
      },
      {
        nome: "Patrícia Verônica de Lima França",
        linkedin: "https://www.linkedin.com/in/patr%C3%ADcia-fran%C3%A7a-170978232/",
        instagram: "",
        github: "https://github.com/PatriciaFranca87",
        observacao: "Possui vários projetos publicados.",
        projetos: [
          {
            nome: "Biografia/Sobre nmim",
            tecnologias: ["HTML", "CSS"],
            link: "https://patriciafranca87.github.io/P-gina_1/",
            github: "https://github.com/PatriciaFranca87",
            descricao: loremPadrao
          },
          {
            nome: "Calculadora IMC",
            tecnologias: ["HTML", "CSS", "JavaScript"],
            link: "https://patriciafranca87.github.io/Calculadora-IMC/",
            github: "https://github.com/PatriciaFranca87",
            descricao: loremPadrao
          },
          {
            nome: "Página Cris Art's",
            tecnologias: ["HTML", "CSS", "JavaScript"],
            link: "https://patriciafranca87.github.io/Pagina-Cris-Art-s/",
            github: "https://github.com/PatriciaFranca87",
            descricao: loremPadrao
          },
          {
            nome: "Madame G",
            tecnologias: ["HTML", "CSS", "JavaScript"],
            link: "https://patriciafranca87.github.io/madame-g/",
            github: "https://github.com/PatriciaFranca87",
            descricao: loremPadrao
          },
          {
            nome: "Lanchonete",
            tecnologias: ["HTML", "CSS", "JavaScript", "React"],
            link: "https://patriciafranca87.github.io/lanchonete/",
            github: "https://github.com/PatriciaFranca87",
            descricao: loremPadrao
          },
          {
            nome: "Lanchonete Imperius",
            tecnologias: ["HTML", "CSS", "JavaScript", "React"],
            link: "https://patriciafranca87.github.io/Lanchonete-imperius/",
            github: "https://github.com/PatriciaFranca87",
            descricao: loremPadrao
          }
        ]
      },
      {
        nome: "Robson Nogueira Da Silva",
        linkedin: "https://www.linkedin.com/in/robson-silva-a40b711b4/",
        instagram: "https://www.instagram.com/robsonrj29/",
        github: "https://github.com/nogueira29",
        observacao: "Projeto publicado.",
        projetos: [
          {
            nome: "Rafaela Cakes Natal",
            tecnologias: ["HTML", "CSS"],
            link: "https://nogueira29.github.io/RafaelaCakesNatal/",
            github: "https://github.com/nogueira29",
            descricao: loremPadrao
          }
        ]
      },
      {
        nome: "Victor Hugo Botelho de Menezes",
        linkedin: "https://www.linkedin.com/in/victor-menezes-439251252/",
        instagram: "https://www.instagram.com/victormnz11",
        github: "https://github.com/vtmenezes99",
        observacao: "Possui mais de um projeto.",
        projetos: [
          {
            nome: "Calculadora",
            tecnologias: ["HTML", "CSS", "JavaScript"],
            link: "https://vtmenezes99.github.io/Calculadora-/",
            github: "https://github.com/vtmenezes99",
            descricao: loremPadrao
          },
          {
            nome: "Conversor de Moedas",
            tecnologias: ["HTML", "CSS", "JavaScript"],
            link: "https://vtmenezes99.github.io/Conversor-de-moedas/",
            github: "https://github.com/vtmenezes99",
            descricao: loremPadrao
          }
        ]
      }
    ]
  },

  u003: {
    codigo: "APP22782024U003",
    curso: "📊 Power BI",
    periodo: "Fevereiro de 2025",
    pagina: "paginas/turma-u003.html",
    descricao:
      "EM CONSTRUÇÃO: Turma de Power BI com foco em análise de dados, criação de dashboards, tratamento de informações, indicadores visuais e apoio à tomada de decisão.",
    destaques: [],
    alunos: [],
  },

  u098: {
    codigo: "APP00632024U098",
    curso: "📊 Excel Avançado",
    periodo: "Janeiro de 2025",
    pagina: "paginas/turma-u098.html",
    descricao:
      "EM CONSTRUÇÃO: Turma com soluções utilizando Excel avançado, automação e análise de dados.",
    destaques: [],
    alunos: [],
  },

  u046: {
    codigo: "APP07652024U046",
    curso: "📊 Excel como Ferramenta de Banco de Dados",
    periodo: "Dezembro de 2024",
    pagina: "paginas/turma-u046.html",
    descricao:
      "EM CONSTRUÇÃO: Turma com projetos de Excel avançado, utilizando o Excel como ferramenta de banco de dados para soluções diversas.",
    destaques: [],
    alunos: [],
  },

  u207: {
    codigo: "QUA00952024U207",
    curso: "🖥️ Operador de Computadores",
    periodo: "Novembro de 2024",
    pagina: "paginas/turma-u207.html",
    descricao:
      "EM CONSTRUÇÃO: Turma de Operador de Computadores com atividades práticas voltadas ao uso de sistemas, ferramentas de escritório, organização de arquivos e fundamentos de informática.",
    destaques: [],
    alunos: [],
  },

  u153: {
    codigo: "QUA02232024U153",
    curso: "🌐 Operador de Sistemas Computacionais em Rede",
    periodo: "Maio a Setembro de 2024",
    pagina: "paginas/turma-u153.html",
    descricao:
      "EM CONSTRUÇÃO: Turma de Operador de Sistemas Computacionais em Rede com atividades voltadas a infraestrutura, configuração de sistemas, redes, conectividade e suporte técnico.",
    destaques: [],
    alunos: [],
  },

  u042: {
    codigo: "APP07652024U042",
    curso: "📊 Excel como Ferramenta de Banco de Dados",
    periodo: "Abril de 2024",
    pagina: "paginas/turma-u042.html",
    descricao:
      "Turma com projetos de Excel avançado, utilizando o Excel como ferramenta de banco de dados para soluções diversas.",
    destaques: [],
    alunos: [],
  },

  o024: {
    codigo: "QUA02492023O024",
    curso: "💻 Programador FrontEnd",
    periodo: "2023",
    pagina: "paginas/turma-o024.html",
    descricao:
      "Turma com foco em páginas web, negócios locais, currículo, contato, JavaScript e introdução a React.",
    destaques: [
      {
        aluno: "Raoni de Oliveira Gonçalves",
        projeto: "Pizzashop",
        descricao: "Projeto de pizzaria desenvolvido como negócio local.",
        tecnologias: ["HTML", "CSS", "JavaScript"],
        link: "https://raonigoncalves.github.io/negocio-local/",
        github: "https://github.com/raonigoncalves",
        imagem: "img/destaques/o024-raoni-pizzashop.png"
      },
      {
        aluno: "Lucas Coelho Gabriel",
        projeto: "Projeto Livre - OAB Mais Diversidade",
        descricao: "Projeto publicado em GitHub Pages. (publicado pelo professor via fork para habilitar visualização web)",
        tecnologias: ["HTML", "CSS", "JavaScript"],
        link: "https://sammyfreitas.github.io/oabmaisdiversidade/",
        github: "https://github.com/LucasGabrielDesigner",
        imagem: "img/destaques/o024-lucas-oabmais.png"
      },
      {
        aluno: "Salomão Rodrigues Vasconcelos",
        projeto: "Projeto Final - Studio Pilates Fisiofit",
        descricao: "Projeto publicado em GitHub Pages.",
        tecnologias: ["HTML", "CSS", "JavaScript"],
        link: "https://salomrodr.github.io/fisiofit-studio-pilates/",
        github: "https://github.com/salomrodr",
        imagem: "img/destaques/o024-salomao-pilates.png"
      },
      {
        aluno: "Salomão Rodrigues Vasconcelos",
        projeto: "Projeto Final - Studio Pilates Fisiofit",
        descricao: "Projeto publicado em GitHub Pages.",
        tecnologias: ["HTML", "CSS", "JavaScript"],
        link: "https://salomrodr.github.io/fisiofit-studio-pilates/",
        github: "https://github.com/salomrodr",
        imagem: "img/destaques/o024-salomao-pilates.png"
      },
      {
        aluno: "Luiz Felipe Reis",
        projeto: "Projeto Final - Deda Materiais de Construção",
        descricao: "Projeto publicado em GitHub Pages.",
        tecnologias: ["HTML", "CSS", "JavaScript"],
        link: "https://devfelipreis.github.io/pagina-de-negocio-local/",
        github: "https://github.com/devfelipreis",
        imagem: "img/destaques/o024-luizfelipe-construcao.png"
      },
      {
        aluno: "Salomão Rodrigues Vasconcelos",
        projeto: "Projeto Final - Studio Pilates Fisiofit",
        descricao: "Projeto publicado em GitHub Pages.",
        tecnologias: ["HTML", "CSS", "JavaScript"],
        link: "https://salomrodr.github.io/fisiofit-studio-pilates/",
        github: "https://github.com/salomrodr",
        imagem: "img/destaques/o024-salomao-pilates.png"
      },

    ],
    alunos: [
      {
        nome: "Emanoel Souza",
        github: "https://github.com/EmanoelSouza1",
        linkedin: "",
        instagram: "https://www.instagram.com/neneeltrembala/",
        facebook: "https://www.facebook.com/emanoel.souza.50951",
        observacao: "Tema previsto: Bar e Confeitaria. Possui vários projetos publicados.",
        projetos: [
          {
            nome: "Projeto Integrador - BAR",
            tecnologias: ["HTML", "CSS", "JavaScript"],
            link: "https://emanoelsouza1.github.io/Site-Neg-cio-Livre/",
            github: "https://github.com/EmanoelSouza",
            descricao: "O projeto de negócio local é uma loja de cosméticos, com foco em perfumaria, utilizando HTML, CSS e JavaScript. Projeto temático."
          },
          {
            nome: "Projeto - Portfolio Pessoal",
            tecnologias: ["HTML", "CSS", "JavaScript"],
            link: "https://emanoelsouza1.github.io/Portifolio/",
            github: "https://github.com/EmanoelSouza",
            descricao: "Portfolio pessoal com projetos desenvolvidos durante o curso, utilizando HTML, CSS e JavaScript. Projeto temático."
          },
          {
            nome: "Projeto Livre - Confeitaria da Tia Belinha",
            tecnologias: ["HTML", "CSS", "JavaScript"],
            link: "https://sammyfreitas.github.io/Site-negocio-Local-emanoel/",
            github: "https://github.com/EmanoelSouza",
            descricao: "Fork criado pelo professor para disponibilicao de visualização web do projeto de negócio local, onde o aluno fez uma versão com tema de confeitaria, utilizando HTML, CSS e JavaScript. Projeto temático."
          },

        ]
      },
      {
        nome: "João Felipe",
        github: "https://github.com/jota321",
        linkedin: "",
        instagram: "",
        observacao: "Tema previsto: academia. Em construção.",
        projetos: [
          {
            nome: "Projeto Flamengo / Brasileirão 2023",
            tecnologias: ["HTML", "CSS", "JavaScript"],
            link: "https://sammyfreitas.github.io/tabela-brasileirao-jota321/",
            github: "https://github.com/jota321",
            descricao: "Foi necessario fork do professor para habilitar a visualização web. Integração de API \"apifutebol\" para exibir a tabela do Brasileirão de 2023, utilizando HTML, CSS e JavaScript. Projeto temático."
          },
          {
            nome: "Projeto: Calculadora",
            tecnologias: ["HTML", "CSS", "JavaScript"],
            link: "https://jota321.github.io/calculadora/",
            github: "https://github.com/jota321",
            descricao: "Criação de uma calculadora para aprimorar minhas habilidades em HTML, CSS e JavaScript."
          },

        ]
      },
      {
        nome: "João Pedro Queiroz",
        github: "https://github.com/JoaoQueiroz98",
        linkedin: "",
        instagram: "https://www.instagram.com/joaoqueiroz1898/",
        observacao: "Tema: Perfumaria / Natura.",
        projetos: [
          {
            nome: "Projeto Integrador - Loja Natura",
            tecnologias: ["HTML", "CSS", "JavaScript"],
            link: "https://joaoqueiroz98.github.io/Negocio-local/",
            github: "https://github.com/JoaoQueiroz98",
            descricao: "O projeto de negócio local é uma loja de cosméticos, com foco em perfumaria, utilizando HTML, CSS e JavaScript. Projeto temático."
          },
          {
            nome: "Projeto - Portfolio Pessoal",
            tecnologias: ["HTML", "CSS", "JavaScript"],
            link: "https://joaoqueiroz98.github.io/Perfil/",
            github: "https://github.com/JoaoQueiroz98",
            descricao: "Portfolio pessoal com projetos desenvolvidos durante o curso, utilizando HTML, CSS e JavaScript. Projeto temático."
          },
          {
            nome: "Projeto Livre -Sobre mim",
            tecnologias: ["HTML", "CSS", "JavaScript"],
            link: "https://joaoqueiroz98.github.io/Sobre-mim/",
            github: "https://github.com/JoaoQueiroz98",
            descricao: "Projeto livre onde coloquei um pouco sobre mim, utilizando HTML, CSS e JavaScript. Projeto temático."
          },
        ]
      },
      {
        nome: "Lucas Coelho Gabriel",
        github: "https://github.com/LucasGabrielDesigner",
        linkedin: "https://lucasgabrieldesigner.com/",
        instagram: "",
        observacao: "Tema previsto: loja de jogos, consoles e PC. Possui vários projetos publicados.",
        projetos: [
          {
            nome: "Projeto Integrador - Site de Loja de Jogos e Consoles",
            tecnologias: ["HTML", "CSS", "JavaScript"],
            link: "https://lucasgabrieldesigner.github.io/projeto-site-loja-jogos/",
            github: "https://github.com/LucasGabrielDesigner",
            descricao: "Loja de Jogos e Consoles - Projeto Integrador"
          },
          {
            nome: "Projeto Portfólio Pessoal",
            tecnologias: ["HTML", "CSS", "JavaScript"],
            link: "https://lucasgabrieldesigner.github.io/projeto-integrador-senai-front-end/",
            github: "https://github.com/LucasGabrielDesigner",
            descricao: "Portfólio Pessoal com todos os projetos desenvolvidos durante o curso, incluindo currículo, contato e projetos temáticos. Projeto Integrador."
          },
          {
            nome: "Projeto OAB Mais Diversidade",
            tecnologias: ["HTML", "CSS", "JavaScript"],
            link: "https://lucasgabrieldesigner.github.io/projeto-integrador-senai-front-end/",
            github: "https://sammyfreitas.github.io/oabmaisdiversidade/",
            descricao: "Projeto de Diversidade OAB - não foi possível publicar e o professor fez um fork e o upload do projeto."
          },
          {
            nome: "Projeto: Site de Videos",
            tecnologias: ["HTML", "CSS", "JavaScript"],
            link: "https://lucasgabrieldesigner.github.io/site-de-videos",
            github: "https://github.com/LucasGabrielDesigner",
            descricao: "Site com videos, aprendendo a inserir vídeos usando HTML, CSS e JavaScript. Projeto temático."
          },
          {
            nome: "Projeto Site de Signos",
            tecnologias: ["HTML", "CSS", "JavaScript"],
            link: "https://lucasgabrieldesigner.github.io/signos/",
            github: "https://github.com/LucasGabrielDesigner",
            descricao: "Site de Signos, onde a partir da data de nascimento, é possível localizaro signo e seus elementos. Projeto temático."
          },
          {
            nome: "Projeto Tabela do Brasileirão de 2023",
            tecnologias: ["HTML", "CSS", "JavaScript"],
            link: "https://lucasgabrieldesigner.github.io/fazendo-tabela-de-brasielirao-2023/",
            github: "https://github.com/LucasGabrielDesigner",
            descricao: "Integração de API \"apifutebol\" para exibir a tabela do Brasileirão de 2023, utilizando HTML, CSS e JavaScript. Projeto temático."
          },

        ],
      },
      {
        nome: "Luiz Felipe Reis",
        github: "https://github.com/DevFelipreis",
        linkedin: "https://www.linkedin.com/in/devlfreis/",
        instagram: "https://www.instagram.com/heisacreative/",
        portfolio: "https://www.lfreisdesign.online/",
        observacao: "Tema: Loja de material de construção.",
        projetos: [
          {
            nome: "Projeto Final: Deda Materiais de Construção",
            tecnologias: ["HTML", "CSS", "JavaScript"],
            link: "https://devfelipreis.github.io/pagina-de-negocio-local/",
            github: "https://github.com/DevFelipreis",
            descricao: "Projeto final, página de negócio local: Material de Construção, utilizando HTML, CSS e JavaScript. Projeto temático de loja de material de construção."
          },
          {
            nome: "Projeto Integrador: Página Portfólio Pessoal",
            tecnologias: ["HTML", "CSS", "JavaScript"],
            link: "https://devfelipreis.github.io/projeto-integrador/",
            github: "https://github.com/DevFelipreis",
            descricao: "Projeto Integrador: Página Portfólio Pessoal com os projetos desenvolvidos durante o curso."
          },
          {
            nome: "Projeto Livre: Fórmula 1",
            tecnologias: ["HTML", "CSS", "JavaScript"],
            link: "https://devfelipreis.github.io/projeto-livre/",
            github: "https://github.com/DevFelipreis",
            descricao: "Projeto temático, calendario corridas F1 2024, utilizando HTML, CSS e JavaScript."
          },
          {
            nome: "Projeto BackEnd: Banco Digital",
            tecnologias: ["JavaScript", "Node.js", "date-fns", "express.js"],
            link: "https://github.com/DevFelipreis/api-restful-banco-digital",
            github: "https://github.com/DevFelipreis",
            descricao: "Projetos sem frontend, utilizando JS, Node.js, date-fns e express.js. Projeto temático de banco digital.",
          },
          {
            nome: "Projeto BackEnd: Meu Money",
            tecnologias: ["JavaScript", "Node.js", "date-fns", "express.js"],
            link: "https://github.com/DevFelipreis/api-restful-meu-money",
            github: "https://github.com/DevFelipreis",
            descricao: "Projetos sem frontend, utilizando JS, Node.js, date-fns e express.js. Projeto temático Meu Money - aplicativo de gerenciamento de despesas",
          },
        ]
      },
      {
        nome: "Paulo Sergio",
        github: "https://github.com/paulosergioneto",
        linkedin: "",
        instagram: "https://instagram.com/paulonetobfr",
        observacao: "Tema: Salão de beleza.",
        projetos: [
          {
            nome: "Projeto Final - Salão de Beleza",
            tecnologias: ["HTML", "CSS", "JavaScript", "JS"],
            link: "https://sammyfreitas.github.io/Proj_Salao/",
            github: "https://github.com/paulosergioneto",
            descricao: "projeto integrador de salao - fork pelo professor para disponibilização web."
          },
          {
            nome: "Projeto Integrador - Portfólio Pessoal",
            tecnologias: ["HTML", "CSS", "JavaScript", "JS"],
            link: "https://paulosergioneto.github.io/Proj_Integrador/",
            github: "https://github.com/paulosergioneto",
            descricao: "projeto integrador, portfolio pessoal utilizando HTML e CSS."
          },
          {
            nome: "Projeto Livre - Cachorro Quente do Paulão",
            tecnologias: ["HTML", "CSS", "JavaScript", "JS"],
            link: "https://paulosergioneto.github.io/Proj_livre/",
            github: "https://github.com/paulosergioneto",
            descricao: "projeto integrador, portfolio pessoal utilizando HTML e CSS."
          },
        ]
      },
      {
        nome: "Raoni de Oliveira Gonçalves",
        github: "https://github.com/raonigoncalves",
        linkedin: "",
        instagram: "",
        observacao: "Projeto de negócio local publicado.",
        projetos: [
          {
            nome: "Brasileirão",
            tecnologias: ["HTML", "CSS"],
            link: "https://raonigoncalves.github.io/brasileirao/",
            github: "https://github.com/raonigoncalves",
            descricao: "projeto de tabela do brasileirão, utilizando HTML e CSS. Projeto temático de futebol."
          },
          {
            nome: "Negócio Local / Pizzashop",
            tecnologias: ["HTML", "CSS", "JavaScript"],
            link: "https://raonigoncalves.github.io/negocio-local/",
            github: "https://github.com/raonigoncalves",
            descricao: loremPadrao
          }
        ]
      },
      {
        nome: "Ruimar Aquiles",
        github: "https://github.com/RuimarAquiles",
        linkedin: "",
        facebook: "https://www.facebook.com/aquilesinformatica.br",
        instagram: "https://www.instagram.com/aquilesinformatica.rj/",
        observacao: "Projeto Barbearia publicado em GitHub Pages.",
        projetos: [
          {
            nome: "Projeto Final - Barbearia",
            tecnologias: ["HTML", "CSS", "JavaScript"],
            link: "https://ruimaraquiles.github.io/NegocioLocal/",
            github: "https://github.com/RuimarAquiles",
            descricao: "Criação de landing page uma Barbearia. Projeto para negócio local, com foco em apresentação comercial e presença digital."
          },
          {
            nome: "Projeto Portfólio Pessoal",
            tecnologias: ["HTML", "CSS", "JavaScript"],
            link: "https://ruimaraquiles.github.io/Portifolio/",
            github: "https://github.com/RuimarAquiles",
            descricao: "Portfólio pessoal com projetos e experiências adquiridas no Curso de Programador Front-End no Senai Maracanã com o Prof. Anthony Freitas."
          },
          {
            nome: "Projeto Próprio: Aquiles Informatica",
            tecnologias: ["HTML", "CSS", "JavaScript"],
            link: "https://ruimaraquiles.github.io/Projeto-proprio/",
            github: "https://github.com/RuimarAquiles",
            descricao: "Criação de onepage da minha loja de manutenção de informática."
          },
          {
            nome: "Projeto: Conversor de Moedas - API pública ExchangeRate-API",
            tecnologias: ["HTML", "CSS", "JavaScript", "API pública"],
            link: "https://ruimaraquiles.github.io/ConversorDeTemperatura/",
            github: "https://github.com/RuimarAquiles",
            descricao: "Criação de one page para conversão de moedas utilizando a API pública ExchangeRate-API, integrando HTML, CSS e JavaScript para consumo de dados em tempo real."
          },
          {
            nome: "Projeto Conversão de Temperatura",
            tecnologias: ["HTML", "CSS", "JavaScript"],
            link: "https://ruimaraquiles.github.io/ConversorDeTemperatura/",
            github: "https://github.com/RuimarAquiles",
            descricao: "Criação de one page para conversão de temperatura, integrando HTML, CSS e JavaScript."
          },
        ]
      },
      {
        nome: "Salomão Rodrigues",
        github: "https://github.com/salomrodr",
        linkedin: "https://www.linkedin.com/in/salomrodr/",
        instagram: "https://www.instagram.com/salomrodr",
        facebook: "https://www.facebook.com/salomrodr",
        twitter: "https://x.com/salomrodr",
        observacao: "Tema: Studio de pilates.",
        projetos: [
          {
            nome: "Projeto Final - Studio de Pilates",
            tecnologias: ["HTML", "CSS", "JavaScript"],
            link: "https://salomrodr.github.io/fisiofit-studio-pilates/",
            github: "https://github.com/salomrodr",
            descricao: "Criação de one page para studio de pilates, integrando HTML, CSS e JavaScript."
          },
          {
            nome: "Projeto: Consulta Fabricante e Modelo de Veículo",
            tecnologias: ["HTML", "CSS", "JavaScript", "API pública"],
            link: "https://salomrodr.github.io/projeto-consulta-fabricante-modelo-veiculo/",
            github: "https://github.com/salomrodr",
            descricao: "Criação de one page para consulta de fabricante e modelo de veículo com api publica através da placa, integrando HTML, CSS e JavaScript."
          },
          {
            nome: "Projeto: Calculadora",
            tecnologias: ["HTML", "CSS", "JavaScript"],
            link: "https://salomrodr.github.io/senai-curso-programador-front-end-projeto-integrador-projeto04/",
            github: "https://github.com/salomrodr",
            descricao: "Criação de uma calculadora interativa. A proposta era ir além da funcionalidade básica, integrando design moderno e uma experiência do usuário intuitiva. Este projeto me proporcionou uma valiosa oportunidade para aprimorar minhas habilidades em HTML, CSS e JavaScript."
          },
          {
            nome: "Projeto: Conversor de Temperatura",
            tecnologias: ["HTML", "CSS", "JavaScript"],
            link: "https://salomrodr.github.io/senai-curso-programador-front-end-projeto-integrador-projeto06/",
            github: "https://github.com/salomrodr",
            descricao: "O objetivo principal foi criar um ambiente intuitivo e amigável para os usuários, destacando-me na implementação de um conversor de temperatura."
          },
          {
            nome: "Projeto: Conversor de Moedas",
            tecnologias: ["HTML", "CSS", "JavaScript"],
            link: "https://salomrodr.github.io/senai-curso-programador-front-end-projeto-integrador-projeto07/",
            github: "https://github.com/salomrodr",
            descricao: "Neste projeto, concentrei-me no desenvolvimento de uma calculadora de câmbio online, proporcionando aos usuários uma ferramenta intuitiva e eficaz para realizar conversões monetárias em tempo real. Para isso, integrei a API pública ExchanGerate, que fornece dados precisos e atualizados de taxas de câmbio. Este projeto não apenas demonstra minhas habilidades de desenvolvimento web, mas também destaca a capacidade de integrar APIs externas para enriquecer a funcionalidade da aplicação",
          },
          {
            nome: "Projeto: Calculadora de IMC",
            tecnologias: ["HTML", "CSS", "JavaScript"],
            link: "https://github.com/salomrodr/senai-curso-programador-front-end-projeto-integrador-projeto05",
            github: "https://github.com/salomrodr",
            descricao: "Criação de uma calculadora calculadora de IMC (Índice de Massa Corporal), uma ferramenta fundamental na avaliação da saúde e do peso corporal. A página interativa proporciona aos usuários a capacidade de inserir dados pessoais, como peso e altura, e realiza o cálculo dinâmico do Índice de Massa Corporal."
          },
        ]
      },
      {
        nome: "Vitor",
        github: "https://github.com/V1it0or",
        linkedin: "",
        instagram: "",
        observacao: "Tema: Academia de boxe.",
        projetos: [
          {
            nome: "Projeto Final: Academia de Boxe",
            tecnologias: ["HTML", "CSS", "JavaScript"],
            link: "https://v1it0or.github.io/Projeto-Loca1/",
            github: "https://github.com/V1it0or",
            descricao: "Criação de uma onepage para academia de boxe, integrando HTML, CSS e JavaScript. O projeto inclui uma calculadora de IMC (Índice de Massa Corporal) para auxiliar os usuários a monitorar sua saúde e condicionamento físico, além de informações sobre os serviços oferecidos pela academia."
          },
          {
            nome: "Projeto Portfolio Pessoal",
            tecnologias: ["HTML", "CSS", "JavaScript"],
            link: "https://v1it0or.github.io/Projeto-/",
            github: "https://github.com/V1it0or",
            descricao: "Criação de uma pagina a fim de colocar os projetos desenvolvidos no curso."
          },
        ]
      }
    ]
  },

  o022: {
    codigo: "QUA02492023O022",
    curso: "💻 Programador FrontEnd",
    periodo: "2023",
    pagina: "paginas/turma-o022.html",
    descricao:
      "Turma com foco na criação de portfólio pessoal, currículo, páginas temáticas e projetos progressivos usando HTML, CSS, JavaScript e API pública.",
    destaques: [
      {
        aluno: "Amanda da Veiga",
        projeto: "Site de Adoção Pet",
        descricao: "Projeto final com temática social, voltado à adoção de animais.",
        tecnologias: ["HTML", "CSS", "JavaScript"],
        link: "https://amandavvp.github.io/site-de-adocao-pet/",
        github: "https://github.com/amandavvp",
        imagem: "img/destaques/o022-amanda-adocao-pet.png"
      },
      {
        aluno: "Eduardo Addum",
        projeto: "Loja de Informatica",
        descricao: "Projeto final com foco em negócio local e apresentação de serviços.",
        tecnologias: ["HTML", "CSS", "JavaScript"],
        link: "https://esaddum.github.io/lojainformatica/",
        github: "https://github.com/esaddum",
        imagem: "img/destaques/o022-eduardo-lojainformatica.png"
      },
      {
        aluno: "Ricardo Gonçalves",
        projeto: "RF Marcenaria",
        descricao: "Landing page para negócio local, com foco em apresentação comercial e presença digital.",
        tecnologias: ["HTML", "CSS", "JavaScript"],
        link: "https://devricart.github.io/RF-Marcenaria-landing-page/",
        github: "https://github.com/DevRicart",
        imagem: "img/destaques/o022-ricardo-rf-marcenaria.png"
      },
      {
        aluno: "Wanderson Lúcio",
        projeto: "Landing Page Academia",
        descricao: "Projeto final com foco em negócio local e apresentação de serviços.",
        tecnologias: ["HTML", "CSS", "JavaScript"],
        link: "https://wandersondantaas.github.io/landing-page-academia/",
        github: "https://github.com/Wandersondantaas",
        imagem: "img/destaques/o022-wanderson-academia.png"
      }
    ],
    alunos: [
      {
        nome: "Adriana Ribeiro Oliveira",
        github: "https://github.com/AdrianaOliveira2023",
        linkedin: "",
        instagram: "",
        observacao: "Possui vários projetos publicados.",
        projetos: [
          {
            nome: "Projeto Integrador",
            tecnologias: ["HTML", "CSS", "JavaScript"],
            link: "https://adrianaoliveira2023.github.io/Projeto-integrador/",
            github: "https://github.com/AdrianaOliveira2023",
            descricao: loremPadrao
          },
          {
            nome: "Projeto Padaria",
            tecnologias: ["HTML", "CSS"],
            link: "https://adrianaoliveira2023.github.io/Projeto-Padaria/",
            github: "https://github.com/AdrianaOliveira2023",
            descricao: loremPadrao
          },
          {
            nome: "SonicFlow",
            tecnologias: ["HTML", "CSS", "JavaScript"],
            link: "https://adrianaoliveira2023.github.io/SonicFlow/",
            github: "https://github.com/AdrianaOliveira2023",
            descricao: loremPadrao
          },
          {
            nome: "Galeria de AMP Stories",
            tecnologias: ["HTML", "CSS"],
            link: "https://adrianaoliveira2023.github.io/Galeria-de-AMP-Stories/",
            github: "https://github.com/AdrianaOliveira2023",
            descricao: loremPadrao
          }
        ]
      },
      {
        nome: "Alexandre Belem",
        github: "https://github.com/alexbelem",
        linkedin: "",
        instagram: "",
        observacao: "Possui portfólio, currículo e projetos publicados.",
        projetos: [
          {
            nome: "Lotus",
            tecnologias: ["HTML", "CSS", "JavaScript"],
            link: "https://alexbelem.github.io/Lotus/",
            github: "https://github.com/alexbelem",
            descricao: loremPadrao
          },
          {
            nome: "Currículo",
            tecnologias: ["HTML", "CSS"],
            link: "https://alexbelem.github.io/curriculo/",
            github: "https://github.com/alexbelem",
            descricao: loremPadrao
          }
        ]
      },
      {
        nome: "Amanda da Veiga",
        github: "https://github.com/amandavvp",
        linkedin: "https://www.linkedin.com/in/amandavvporto",
        instagram: "",
        observacao: "Projeto final com temática social.",
        projetos: [
          {
            nome: "Site de Adoção Pet",
            tecnologias: ["HTML", "CSS", "JavaScript"],
            link: "https://amandavvp.github.io/site-de-adocao-pet/",
            github: "https://github.com/amandavvp",
            descricao: loremPadrao
          },
          {
            nome: "About Me",
            tecnologias: ["HTML", "CSS"],
            link: "https://amandavvp.github.io/about-me/",
            github: "https://github.com/amandavvp",
            descricao: loremPadrao
          },
          {
            nome: "Churrascômetro",
            tecnologias: ["HTML", "CSS", "JavaScript"],
            link: "https://amandavvp.github.io/Churrascometro/",
            github: "https://github.com/amandavvp",
            descricao: loremPadrao
          }
        ]
      },
      {
        nome: "Carla N Silva",
        github: "",
        linkedin: "",
        instagram: "",
        observacao: "Possui vários projetos publicados.",
        projetos: [
          {
            nome: "Meu Primeiro Portal",
            tecnologias: ["HTML", "CSS"],
            link: "https://estudocns.github.io/MeuPrimeiroPortal/",
            github: "",
            descricao: loremPadrao
          },
          {
            nome: "Projeto Padaria",
            tecnologias: ["HTML", "CSS"],
            link: "https://estudocns.github.io/Projeto01--Padaria/",
            github: "",
            descricao: loremPadrao
          },
          {
            nome: "Conversor de Moedas",
            tecnologias: ["HTML", "CSS", "JavaScript", "API"],
            link: "https://estudocns.github.io/Conversor-de-moedas-/",
            github: "",
            descricao: loremPadrao
          }
        ]
      },
      {
        nome: "Eduardo Stephan Addum",
        github: "https://github.com/ESADDUM",
        linkedin: "",
        instagram: "",
        observacao: "Projeto final de loja de informática.",
        projetos: [
          {
            nome: "Loja Informática",
            tecnologias: ["HTML", "CSS", "JavaScript"],
            link: "https://esaddum.github.io/lojainformatica/",
            github: "https://github.com/ESADDUM",
            descricao: loremPadrao
          }
        ]
      },
      {
        nome: "José Luís de Souza",
        github: "https://github.com/luissouzas",
        linkedin: "https://www.linkedin.com/in/jos%C3%A9-lu%C3%ADs-de-souza-serra-398b7a89",
        instagram: "https://www.instagram.com/luis_d_souza/",
        observacao: "Projeto final publicado.",
        projetos: [
          {
            nome: "Produto Digital Apex I",
            tecnologias: ["HTML", "CSS", "JavaScript"],
            link: "https://luissouzas.github.io/produto_digital_Apex_I/",
            github: "https://github.com/luissouzas",
            descricao: loremPadrao
          }
        ]
      },
      {
        nome: "Luana Souza",
        github: "https://github.com/LuanaMattos",
        linkedin: "https://www.linkedin.com/in/luanamattos/",
        instagram: "",
        observacao: "Possui projetos com foco cultural e social.",
        projetos: [
          {
            nome: "Ada Lovelace Page",
            tecnologias: ["HTML", "CSS", "JavaScript"],
            link: "https://luanamattos.github.io/ada-lovelace-page/",
            github: "https://github.com/LuanaMattos",
            descricao: loremPadrao
          },
          {
            nome: "Cardápio",
            tecnologias: ["HTML", "CSS"],
            link: "https://luanamattos.github.io/cardapio/",
            github: "https://github.com/LuanaMattos",
            descricao: loremPadrao
          }
        ]
      },
      {
        nome: "Ricardo Gonçalves",
        github: "https://github.com/DevRicart",
        linkedin: "https://www.linkedin.com/in/ricardo-gon/",
        instagram: "",
        observacao: "Possui muitos projetos publicados e bom volume de produção.",
        projetos: [
          {
            nome: "RF Marcenaria",
            tecnologias: ["HTML", "CSS", "JavaScript"],
            link: "https://devricart.github.io/RF-Marcenaria-landing-page/",
            github: "https://github.com/DevRicart",
            descricao: loremPadrao
          },
          {
            nome: "Portfólio Pessoal",
            tecnologias: ["HTML", "CSS", "JavaScript"],
            link: "https://devricart.github.io/Portfolio-Pessoal/",
            github: "https://github.com/DevRicart",
            descricao: loremPadrao
          },
          {
            nome: "Catalone's Bakery",
            tecnologias: ["HTML", "CSS", "JavaScript"],
            link: "https://devricart.github.io/Catalone-s-Bakery/",
            github: "https://github.com/DevRicart",
            descricao: loremPadrao
          }
        ]
      },
      {
        nome: "Wanderson Lúcio",
        github: "https://github.com/Wandersondantaas",
        linkedin: "https://www.linkedin.com/in/wandantaas",
        instagram: "https://www.instagram.com/wandersondantaas/",
        observacao: "Projeto final de academia e outros projetos publicados.",
        projetos: [
          {
            nome: "Landing Page Academia",
            tecnologias: ["HTML", "CSS", "JavaScript"],
            link: "https://wandersondantaas.github.io/landing-page-academia/",
            github: "https://github.com/Wandersondantaas",
            descricao: loremPadrao
          },
          {
            nome: "História do Android",
            tecnologias: ["HTML", "CSS"],
            link: "https://wandersondantaas.github.io/historia-do-android/",
            github: "https://github.com/Wandersondantaas",
            descricao: loremPadrao
          },
          {
            nome: "Projeto Cordel",
            tecnologias: ["HTML", "CSS"],
            link: "https://wandersondantaas.github.io/projeto-cordel/",
            github: "https://github.com/Wandersondantaas",
            descricao: loremPadrao
          }
        ]
      },
      {
        nome: "Yuri da Silva Carneiro",
        github: "https://github.com/yuricgdasilva",
        linkedin: "",
        instagram: "",
        observacao: "Possui projeto integrador e projetos de aula publicados.",
        projetos: [
          {
            nome: "Projeto Integrador",
            tecnologias: ["HTML", "CSS", "JavaScript"],
            link: "https://yuricgdasilva.github.io/Projeto-integrador/",
            github: "https://github.com/yuricgdasilva",
            descricao: loremPadrao
          },
          {
            nome: "Projeto Padaria",
            tecnologias: ["HTML", "CSS"],
            link: "https://yuricgdasilva.github.io/projeto01-padaria/",
            github: "https://github.com/yuricgdasilva",
            descricao: loremPadrao
          }
        ]
      }
    ]
  },

  uteste: {
    codigo: "EM CONSTRUÇÃO",
    curso: "🧪 Turma Teste",
    periodo: "",
    pagina: "#",
    descricao:
      "Turma em construção para testes de layout e estrutura.",
    destaques: [],
    alunos: [],
  },

};