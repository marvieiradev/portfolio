const projects = [
  {
    id: "pokedex",
    titulo: "Pokedex",
    subtitulo: "Pokedex desenvolvida usando HTML, CSS e Javascript.",
    info: "As informações dos pokemons são exibidas dinamicamnte usando JSON que carrega os dados diretamente de uma API, a 'PokeApi'.",
    tecnologias: ["Javascript", "CSS e HTML"],
    video: "https://www.youtube.com/embed/MlT2C0ZuSf4",
    data: "Maio de 2023",
    btn_projeto: true,
    link_projeto: "https://pokedex-v1-one.vercel.app/",
    btn_repositorio: true,
    link_repositorio: "https://github.com/marvieiradev/pokedex-v1",
  },

  {
    id: "app_clima",
    titulo: "App Clima",
    subtitulo: "Aplicativo simples de clima usando HTML, CSS e Javascript.",
    info: "O aplicativo mostra as condições do clima do em tempo real do local pesquisado, como temperaturas mínima e máxima, além da humidade e velocidade do vento. Os dados são obtidos diretamente da 'Weather API'.",
    tecnologias: ["Javascript", "CSS e HTML"],
    video: "https://www.youtube.com/embed/-IyWFNZ4SZI",
    data: "Junho de 2023",
    btn_projeto: true,
    link_projeto: "https://app-clima-v1.vercel.app/",
    btn_repositorio: true,
    link_repositorio: "https://github.com/marvieiradev/app-clima",
  },

  {
    id: "editor_de_texto",
    titulo: "Editor de Texto",
    subtitulo: "Editor de texto simples usando HTML, CSS e Javascript.",
    info: "É possível digitar e aplicar diversas formatações de texto, como tamanho da fonte, cor de fonte e estilo de texto (formatacão, inseris link, lista, identação). Também é possível salvar e carregar o texto no formato TXT.",
    tecnologias: ["Javascript", "CSS e HTML"],
    video: "https://www.youtube.com/embed/uYdnN770dWc",
    data: "Agosto de 2023",
    btn_projeto: true,
    link_projeto: "https://marvieira-text-editor.vercel.app/",
    btn_repositorio: true,
    link_repositorio: "https://github.com/marvieiradev/text-editor",
  },

  {
    id: "gerador_qr_code",
    titulo: "Gerador de QR Code",
    subtitulo:
      "Feito com apenas HTML, CSS e Javascript, esse é um gerador de QR code bem simples porém efetivo.",
    info: "Com esse gerador é possível criar um QR code a partir de qualquer URL ou texto, Também é possível personalizar suas cores e fazer o download em formato PNG e SVG.",
    tecnologias: ["Javascript", "CSS e HTML"],
    video: "https://www.youtube.com/embed/dW2Dvo3y_qU",
    data: "Agosto de 2023",
    btn_projeto: true,
    link_projeto: "https://qrcode-generator-marvieira.vercel.app/",
    btn_repositorio: true,
    link_repositorio: "https://github.com/marvieiradev/qrcode-generator",
  },

  {
    id: "god_of_war",
    titulo: "God of War",
    subtitulo:
      "Interface do site do jogo God of War Ragnarök. A página conta com animações ao usar o scroll do mouse e é totalmente responsiva, sendo exibida perfeitamente no desktop e mobile.",
    info: "Projeto desenvolvido no evento Semana Front-end da Codeboost.",
    tecnologias: ["Javascript", "CSS e HTML com SASS"],
    video: "https://www.youtube.com/embed/x_jn4Ne2PaE",
    data: "Novembro de 2022",
    btn_projeto: true,
    link_projeto: "https://god-of-war-red.vercel.app/",
    btn_repositorio: true,
    link_repositorio: "https://github.com/marvieiradev/god-of-war",
  },

  {
    id: "quiz_hunter",
    titulo: "Quiz Hunter",
    subtitulo:
      "Aplicativo/Jogo em formato de quiz, Baseado no jogo 'Monster Hunter' da Capcom. Onde o objetivo é acertar o nome correto dos monstros da franquia, representados pela sua figura.",
    info: "Projeto desenvolvido totalmente em Kotlin nativo. Utlizando o Android Studio.",
    tecnologias: ["Kotlin"],
    video: "https://www.youtube.com/embed/bQg7OMd2s5Y",
    data: "Abril de 2023",
    btn_projeto: true,
    link_projeto:
      "https://play.google.com/store/apps/details?id=com.mvieira.quizhunter",
    btn_repositorio: true,
    link_repositorio: "https://github.com/marvieiradev/quiz-hunter",
  },

  {
    id: "meu_palpite",
    titulo: "Meu Palpite",
    subtitulo:
      "Meu Palpite é um aplicativo onde o usuário pode registrar seus palpites nos jogos da Copa do Mundo 2022, também é possivel compartilhar seus palpites.",
    info: "Projeto desenvolvido no evento Full Stack Challenge da Codar.me.",
    tecnologias: [
      "Javascript",
      "NodeJS com Koa",
      "CSS e HTML com Tailwind",
      "Banco de dados com Prisma",
    ],
    video: "https://www.youtube.com/embed/jtkRr3sUO0k",
    data: "Novembro de 2022",
    btn_projeto: true,
    link_projeto: "https://meupalpite-web.vercel.app/",
    btn_repositorio: true,
    link_repositorio: "https://github.com/marvieiradev/meupalpite-web/",
  },

  {
    id: "1up_store",
    titulo: "1UP Store",
    subtitulo:
      "E-commerce desenvolvido durante a Full Stack Week, um evento cujo objetivo principal é criar um projeto altamente relevante, utilizando as tecnologias mais modernas e demandadas pelo mercado.",
    info: "",
    tecnologias: [
      "React",
      "Next.js",
      "Typescript",
      "Next Auth",
      "Postgres com Prisma",
      "Tailwind CSS",
      "API do Stripe",
    ],
    video: "https://www.youtube.com/embed/bPzSzFn7-8E",
    data: "Novembro de 2023",
    btn_projeto: true,
    link_projeto: "https://1up-store.vercel.app/",
    btn_repositorio: true,
    link_repositorio: "https://github.com/marvieiradev/1up-store/",
  },

  {
    id: "best_trip",
    titulo: "Best Trip",
    subtitulo:
      "Sistema de reserva de viagens desenvolvido durante a FSW, evento cujo objetivo principal é criar projetos relevantes, utilizando as tecnologias mais modernas e demandadas pelo mercado.",
    info: "",
    tecnologias: [
      "React",
      "Next.js",
      "Typescript",
      "Next Auth",
      "Postgres com Prisma",
      "Tailwind CSS",
      "API do Stripe",
    ],
    video: "https://www.youtube.com/embed/9nvK93TCyok",
    data: "Dezembro de 2023",
    btn_projeto: true,
    link_projeto: "https://best-trip.vercel.app/",
    btn_repositorio: true,
    link_repositorio: "https://github.com/marvieiradev/best-trip/",
  },

  {
    id: "monster_quiz",
    titulo: "Monster Quiz",
    subtitulo:
      "Jogo em formato de quiz, Baseado no jogo 'Monster Hunter' da Capcom. Onde o objetivo é acertar o nome correto dos monstros da franquia, de acordo com a sua imagem.",
    info: "",
    tecnologias: ["React", "Javascript", "Tailwind CSS"],
    video: "https://www.youtube.com/embed/gzT9r1_kpQI",
    data: "Junho de 2024",
    btn_projeto: true,
    link_projeto: "https://monsterquiz.vercel.app/",
    btn_repositorio: true,
    link_repositorio:
      "https://github.com/marvieiradev/monster-quiz-v1/tree/master/quiz",
  },

  {
    id: "king_barber",
    titulo: "King Barber",
    subtitulo:
      "Sistema de reserva de barbearias desenvolvido durante a FSW, evento cujo objetivo principal é criar projetos relevantes, utilizando as tecnologias mais modernas e demandadas pelo mercado.",
    info: "",
    tecnologias: [
      "React",
      "Next.js",
      "Typescript",
      "Next Auth",
      "Postgres com Prisma",
      "Tailwind CSS",
    ],
    video: "https://www.youtube.com/embed/z3eR-lbeW9w",
    data: "Outubro de 2024",
    btn_projeto: true,
    link_projeto: "https://kingbarber.vercel.app/",
    btn_repositorio: true,
    link_repositorio: "https://github.com/marvieiradev/king-barber",
  },

  {
    id: "my_finances",
    titulo: "My Finances",
    subtitulo:
      "Sistema de finanças onde o usuário cadastra suas movimentações financeiras, que são organizadas e melhoradas graças a insights inteligentes através da Inteligência Artificial, que analisa seus dados financeiros e identifica padrões, tendências e oportunidades de economia.",
    info: "",
    tecnologias: [
      "React",
      "Next.js",
      "Typescript",
      "Tailwind CSS",
      "Postgres com Prisma",
      "Auth com Clerk",
      "Relatório de IA utilizando ChatGPT",
    ],
    video: "https://www.youtube.com/embed/Pn1d8AuG52U",
    data: "Dezembro de 2024",
    btn_projeto: true,
    link_projeto: "https://my-finances-ai.vercel.app/",
    btn_repositorio: true,
    link_repositorio: "https://github.com/marvieiradev/my-finances",
  },

  {
    id: "torcedor-raiz",
    titulo: "Torcedor Raiz",
    subtitulo:
      "O Torcedor Raiz é o aplicativo perfeito para os fãs de futebol que querem ficar por dentro de tudo sobre o seu time do coração.",
    info: "Projeto desenvolvido para o desafio de janeiro do FullStack Club",
    tecnologias: [
      "React",
      "React-Router",
      "Javascript",
      "Tailwind CSS",
      "API da TheSportsDB e Sofascore.",
    ],
    video: "https://www.youtube.com/embed/FH_w0ZPMpKs",
    data: "Janeiro de 2025",
    btn_projeto: true,
    link_projeto: "https://torcedor-raiz.vercel.app/",
    btn_repositorio: true,
    link_repositorio: "https://github.com/marvieiradev/torcedor-raiz",
  },
];

export default projects;
