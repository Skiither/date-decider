const weatherCodes = {
  0: "ceu limpo",
  1: "quase limpo",
  2: "algumas nuvens",
  3: "nublado",
  45: "nevoeiro",
  48: "nevoeiro",
  51: "chuva fraca",
  53: "chuva",
  55: "chuva forte",
  61: "chuva fraca",
  63: "chuva",
  65: "chuva forte",
  80: "aguaceiros",
  81: "aguaceiros",
  82: "aguaceiros fortes",
  95: "trovoada",
};

const providerNames = {
  netflix: "Netflix",
  prime: "Prime Video",
  max: "HBO Max",
  disney: "Disney+",
  globoplay: "Globoplay",
};

const providerPriority = ["netflix", "prime", "max", "disney", "globoplay"];

const movieCatalog = [
  {
    title: "Glass Onion",
    type: "movie",
    provider: "netflix",
    genre: "comedia",
    image:
      "https://image.tmdb.org/t/p/w500/vDGr1YdrlfbU9wxTOdpf3zChmv9.jpg",
    why: "misterio leve, personagens divertidos e conversa facil depois.",
  },
  {
    title: "La La Land",
    type: "movie",
    provider: "netflix",
    genre: "romance",
    image:
      "https://image.tmdb.org/t/p/w500/uDO8zWDhfWwoFdKS4fzkUJt0Rf0.jpg",
    why: "romance bonito, musica e clima de date classico.",
  },
  {
    title: "The Adam Project",
    type: "movie",
    provider: "netflix",
    genre: "acao",
    image:
      "https://image.tmdb.org/t/p/w500/wFjboE0aFZNbVOF05fzrka9Fqyx.jpg",
    why: "acao leve, humor e ritmo facil de assistir a dois.",
  },
  {
    title: "A Sociedade da Neve",
    type: "movie",
    provider: "netflix",
    genre: "documentario",
    image:
      "https://image.tmdb.org/t/p/w500/2e853FDVSIso600RqAMunPxiZjq.jpg",
    why: "intenso e com assunto forte para conversar depois.",
  },
  {
    title: "Invincible",
    type: "series",
    provider: "prime",
    genre: "acao",
    image:
      "https://image.tmdb.org/t/p/w500/dMOpdkrDC5dQxqNydgKxXjBKyAc.jpg",
    why: "super-heroi com energia, surpresa e episodios que prendem.",
  },
  {
    title: "The Boys",
    type: "series",
    provider: "prime",
    genre: "acao",
    image:
      "https://image.tmdb.org/t/p/w500/stTEycfG9928HYGEISBFaG1ngjM.jpg",
    why: "para quem quer algo mais caotico, adulto e cheio de assunto.",
  },
  {
    title: "Red, White & Royal Blue",
    type: "movie",
    provider: "prime",
    genre: "romance",
    image:
      "https://image.tmdb.org/t/p/w500/dD3vhyDRCCT90hf4rldHU6Wu3Va.jpg",
    why: "romance leve, fofo e direto ao ponto.",
  },
  {
    title: "The Marvelous Mrs. Maisel",
    type: "series",
    provider: "prime",
    genre: "comedia",
    image:
      "https://image.tmdb.org/t/p/w500/9bS0G5WlLw2mI5Y60JinqAYv8dB.jpg",
    why: "dialogos rapidos, humor elegante e visual bonito.",
  },
  {
    title: "The Last of Us",
    type: "series",
    provider: "max",
    genre: "acao",
    image:
      "https://image.tmdb.org/t/p/w500/uKvVjHNqB5VmOrdxqAt2F7J78ED.jpg",
    why: "emocao, tensao e uma historia que rende conversa.",
  },
  {
    title: "House of the Dragon",
    type: "series",
    provider: "max",
    genre: "acao",
    image:
      "https://image.tmdb.org/t/p/w500/z2yahl2uefxDCl0nogcRBstwruJ.jpg",
    why: "fantasia, politica e clima de episodio grande.",
  },
  {
    title: "The White Lotus",
    type: "series",
    provider: "max",
    genre: "comedia",
    image:
      "https://image.tmdb.org/t/p/w500/gH5i3KvTtA7kD7Bx9EeeXL3HgXJ.jpg",
    why: "sarcasmo, desconforto divertido e muita coisa para comentar.",
  },
  {
    title: "Her",
    type: "movie",
    provider: "max",
    genre: "romance",
    image:
      "https://image.tmdb.org/t/p/w500/eCOtqtfvn7mxGl6nfmq4b1exJRc.jpg",
    why: "romance diferente, sensivel e perfeito para um date mais calmo.",
  },
  {
    title: "Loki",
    type: "series",
    provider: "disney",
    genre: "acao",
    image:
      "https://image.tmdb.org/t/p/w500/kEl2t3OhXc3Zb9FBh1AuYzRTgZp.jpg",
    why: "aventura estilosa, episodios curtos e facil de continuar depois.",
  },
  {
    title: "Elemental",
    type: "movie",
    provider: "disney",
    genre: "romance",
    image:
      "https://image.tmdb.org/t/p/w500/4Y1WNkd88JXmGfhtWR7dmDAo1T2.jpg",
    why: "leve, colorido e com romance bem acessivel.",
  },
  {
    title: "Only Murders in the Building",
    type: "series",
    provider: "disney",
    genre: "comedia",
    image:
      "https://image.tmdb.org/t/p/w500/bZubW4eLAk2zqk44fSWRDTFfcba.jpg",
    why: "misterio com humor e episodios faceis de ver em casal.",
  },
  {
    title: "Free Guy",
    type: "movie",
    provider: "disney",
    genre: "comedia",
    image:
      "https://image.tmdb.org/t/p/w500/xmbU4JTUm8rsdtn7Y3Fcm30GpeT.jpg",
    why: "divertido, leve e com energia de date descontraido.",
  },
  {
    title: "Sob Pressao",
    type: "series",
    provider: "globoplay",
    genre: "acao",
    image:
      "https://image.tmdb.org/t/p/w500/7EqFq6O6YV5d4dJSp1H4cAZw2tT.jpg",
    why: "drama medico brasileiro com ritmo forte.",
  },
  {
    title: "Todas as Flores",
    type: "series",
    provider: "globoplay",
    genre: "romance",
    image:
      "https://image.tmdb.org/t/p/w500/hZRYiQJg0l4DUT1V0wO4p3wuAEU.jpg",
    why: "novela moderna, drama e romance para comentar junto.",
  },
  {
    title: "Minha Mae e uma Peca",
    type: "movie",
    provider: "globoplay",
    genre: "comedia",
    image:
      "https://image.tmdb.org/t/p/w500/6GmF6wCwHJRq2jD9kHq1vaSBL5B.jpg",
    why: "comedia brasileira facil de rir junto.",
  },
  {
    title: "Assalto ao Banco Central",
    type: "movie",
    provider: "globoplay",
    genre: "acao",
    image:
      "https://image.tmdb.org/t/p/w500/1dxGWIQq8p8AfXnVgSm4fGdBVdK.jpg",
    why: "crime, tensao e um plano mais eletrico.",
  },
];

const questionBank = {
  location: {
    id: "location",
    kicker: "Primeiro detalhe",
    title: "Onde vai ser o date?",
    description:
      "Escreve a cidade para eu tentar perceber se o tempo esta a pedir rua ou sofa.",
    type: "location",
    placeholder: "Ex: Lisboa, Porto, Braga...",
  },
  place: {
    id: "place",
    kicker: "Plano base",
    title: "Hoje voces querem sair ou ficar em casa?",
    type: "single",
    options: [
      {
        value: "outside",
        icon: "☀️",
        image:
          "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80",
        title: "Sair de casa",
        detail: "Quero um date com lugar, horario e plano fora.",
      },
      {
        value: "home",
        icon: "🏠",
        image:
          "https://images.unsplash.com/photo-1523755231516-e43fd2e8dca5?auto=format&fit=crop&w=800&q=80",
        title: "Ficar em casa",
        detail: "Conforto, comida e entretenimento sem correria.",
      },
      {
        value: "flex",
        icon: "🧭",
        image:
          "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=800&q=80",
        title: "O app decide",
        detail: "Respondo o resto e deixo o clima ajudar.",
      },
    ],
  },
  outsideActivity: {
    id: "outsideActivity",
    kicker: "Saindo",
    title: "Que tipo de lugar combina mais?",
    type: "single",
    options: [
      {
        value: "restaurant",
        icon: "🍽️",
        image:
          "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=800&q=80",
        title: "Restaurante",
        detail: "Sentar, comer bem e conversar com calma.",
      },
      {
        value: "cafe",
        icon: "☕",
        image:
          "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=800&q=80",
        title: "Cafe",
        detail: "Leve, fofo e bom para date de manha ou tarde.",
      },
      {
        value: "bar",
        icon: "🍸",
        image:
          "https://images.unsplash.com/photo-1514933651103-005eec06c04b?auto=format&fit=crop&w=800&q=80",
        title: "Barzinho",
        detail: "Noite mais animada, bebida e clima descontraido.",
      },
      {
        value: "walk",
        icon: "🌇",
        image:
          "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=800&q=80",
        title: "Passeio bonito",
        detail: "Andar, ver um lugar legal e fechar com comida.",
      },
    ],
  },
  time: {
    id: "time",
    kicker: "Horario",
    title: "Vai ser de manha, tarde ou noite?",
    type: "single",
    options: [
      {
        value: "morning",
        icon: "🌤️",
        image:
          "https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?auto=format&fit=crop&w=800&q=80",
        title: "Manha",
        detail: "Cafe, brunch ou passeio leve.",
      },
      {
        value: "afternoon",
        icon: "🌆",
        image:
          "https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?auto=format&fit=crop&w=800&q=80",
        title: "Tarde",
        detail: "Cafe, lanche, passeio ou algo tranquilo.",
      },
      {
        value: "night",
        icon: "🌙",
        image:
          "https://images.unsplash.com/photo-1519608487953-e999c86e7455?auto=format&fit=crop&w=800&q=80",
        title: "Noite",
        detail: "Jantar, barzinho ou cinema depois.",
      },
    ],
  },
  money: {
    id: "money",
    kicker: "Dinheiro",
    title: "Qual e a vibe do bolso hoje?",
    type: "single",
    options: [
      {
        value: "spend",
        icon: "🛵",
        image:
          "https://images.unsplash.com/photo-1526367790999-0150786686a2?auto=format&fit=crop&w=800&q=80",
        title: "Gastar um pouco",
        detail: "Hoje vale caprichar no date.",
      },
      {
        value: "save",
        icon: "🍳",
        image:
          "https://images.unsplash.com/photo-1556911220-bff31c812dba?auto=format&fit=crop&w=800&q=80",
        title: "Economizar",
        detail: "Quero algo bom sem gastar demais.",
      },
      {
        value: "balanced",
        icon: "✨",
        image:
          "https://images.unsplash.com/photo-1514517220034-6d6b70d35266?auto=format&fit=crop&w=800&q=80",
        title: "Meio termo",
        detail: "Gostoso, mas sem exagero.",
      },
    ],
  },
  foods: {
    id: "foods",
    kicker: "Comida",
    title: "O que voces gostam de comer?",
    description: "Escolhe as favoritas. O app vai decidir uma so no final.",
    type: "multi",
    options: [
      {
        value: "pizza",
        icon: "🍕",
        image:
          "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=800&q=80",
        title: "Pizza",
        detail: "Facil de dividir.",
      },
      {
        value: "burger",
        icon: "🍔",
        image:
          "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=800&q=80",
        title: "Hamburguer",
        detail: "Casual e certeiro.",
      },
      {
        value: "sushi",
        icon: "🍣",
        image:
          "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?auto=format&fit=crop&w=800&q=80",
        title: "Sushi",
        detail: "Mais especial.",
      },
      {
        value: "snacks",
        icon: "🥪",
        image:
          "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?auto=format&fit=crop&w=800&q=80",
        title: "Lanche",
        detail: "Leve e rapido.",
      },
      {
        value: "pasta",
        icon: "🍝",
        image:
          "https://images.unsplash.com/photo-1551183053-bf91a1d81141?auto=format&fit=crop&w=800&q=80",
        title: "Massa",
        detail: "Conforto total.",
      },
      {
        value: "dessert",
        icon: "🍰",
        image:
          "https://images.unsplash.com/photo-1488477181946-6428a0291777?auto=format&fit=crop&w=800&q=80",
        title: "Doces",
        detail: "Para fechar bonito.",
      },
    ],
    extraLabel: "Mais comidas que voces gostam",
    extraPlaceholder: "Ex: tacos, ramen, churrasco...",
  },
  outsideFinish: {
    id: "outsideFinish",
    kicker: "Fechamento",
    title: "Como voces querem terminar o date fora?",
    type: "single",
    options: [
      {
        value: "dessert",
        icon: "",
        image:
          "https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?auto=format&fit=crop&w=800&q=80",
        title: "Sobremesa",
        detail: "Doce final e conversa sem pressa.",
      },
      {
        value: "walk",
        icon: "",
        image:
          "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=800&q=80",
        title: "Caminhada curta",
        detail: "Andar um pouco e deixar o date respirar.",
      },
      {
        value: "drink",
        icon: "",
        image:
          "https://images.unsplash.com/photo-1514933651103-005eec06c04b?auto=format&fit=crop&w=800&q=80",
        title: "Drink",
        detail: "Mais uma parada leve antes de ir embora.",
      },
      {
        value: "calm",
        icon: "",
        image:
          "https://images.unsplash.com/photo-1518005020951-eccb494ad742?auto=format&fit=crop&w=800&q=80",
        title: "Encerrar tranquilo",
        detail: "Sem esticar demais, deixando gosto de quero mais.",
      },
    ],
  },
  providers: {
    id: "providers",
    kicker: "Streaming",
    title: "Quais assinaturas voces tem?",
    description: "Escolhe as plataformas disponiveis para o app decidir o que assistir.",
    type: "multi",
    options: [
      {
        value: "netflix",
        icon: "N",
        image:
          "https://images.unsplash.com/photo-1522869635100-9f4c5e86aa37?auto=format&fit=crop&w=800&q=80",
        title: "Netflix",
        detail: "Filmes e series populares.",
      },
      {
        value: "prime",
        icon: "P",
        image:
          "https://images.unsplash.com/photo-1594909122845-11baa439b7bf?auto=format&fit=crop&w=800&q=80",
        title: "Prime Video",
        detail: "Aventura, romance e series fortes.",
      },
      {
        value: "max",
        icon: "M",
        image:
          "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?auto=format&fit=crop&w=800&q=80",
        title: "HBO Max",
        detail: "Series premium e filmes intensos.",
      },
      {
        value: "disney",
        icon: "D+",
        image:
          "https://images.unsplash.com/photo-1595769816263-9b910be24d5f?auto=format&fit=crop&w=800&q=80",
        title: "Disney+",
        detail: "Leve, fantasia e aventura.",
      },
      {
        value: "globoplay",
        icon: "G",
        image:
          "https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?auto=format&fit=crop&w=800&q=80",
        title: "Globoplay",
        detail: "Conteudo brasileiro e novelas.",
      },
    ],
  },
  screen: {
    id: "screen",
    kicker: "Depois da comida",
    title: "Preferem filme ou serie?",
    type: "single",
    options: [
      {
        value: "movie",
        icon: "🎬",
        image:
          "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?auto=format&fit=crop&w=800&q=80",
        title: "Filme",
        detail: "Uma escolha fechada, com comeco e fim.",
      },
      {
        value: "series",
        icon: "📺",
        image:
          "https://images.unsplash.com/photo-1521967906867-14ec9d64bee8?auto=format&fit=crop&w=800&q=80",
        title: "Serie",
        detail: "Bom para assistir um episodio e continuar depois.",
      },
      {
        value: "any",
        icon: "🎲",
        image:
          "https://images.unsplash.com/photo-1524985069026-dd778a71c7b4?auto=format&fit=crop&w=800&q=80",
        title: "Tanto faz",
        detail: "O app decide o melhor titulo.",
      },
    ],
  },
  genres: {
    id: "genres",
    kicker: "Gosto dos dois",
    title: "Quais generos combinam mais?",
    description: "Marca os favoritos. O app vai escolher um e um titulo especifico.",
    type: "multi",
    options: [
      {
        value: "comedia",
        icon: "😂",
        image:
          "https://images.unsplash.com/photo-1516670428252-df97bba108d1?auto=format&fit=crop&w=800&q=80",
        title: "Comedia",
        detail: "Rir sem complicar.",
      },
      {
        value: "romance",
        icon: "💌",
        image:
          "https://images.unsplash.com/photo-1518199266791-5375a83190b7?auto=format&fit=crop&w=800&q=80",
        title: "Romance",
        detail: "Clima de date classico.",
      },
      {
        value: "acao",
        icon: "💥",
        image:
          "https://images.unsplash.com/photo-1511379938547-c1f69419868d?auto=format&fit=crop&w=800&q=80",
        title: "Acao",
        detail: "Energia e adrenalina.",
      },
      {
        value: "documentario",
        icon: "🧠",
        image:
          "https://images.unsplash.com/photo-1457369804613-52c61a468e7d?auto=format&fit=crop&w=800&q=80",
        title: "Documentario",
        detail: "Assunto para depois.",
      },
      {
        value: "anime",
        icon: "🌙",
        image:
          "https://images.unsplash.com/photo-1618336753974-aae8e04506aa?auto=format&fit=crop&w=800&q=80",
        title: "Anime",
        detail: "Visual e diferente.",
      },
      {
        value: "terror",
        icon: "🕯️",
        image:
          "https://images.unsplash.com/photo-1509248961158-e54f6934749c?auto=format&fit=crop&w=800&q=80",
        title: "Terror",
        detail: "Para assistir juntinhos.",
      },
    ],
    extraLabel: "Outro genero favorito",
    extraPlaceholder: "Ex: true crime, fantasia, culinaria...",
  },
};

const foodNames = {
  pizza: "pizza",
  burger: "hamburguer",
  sushi: "sushi",
  snacks: "lanche",
  pasta: "massa",
  dessert: "sobremesa",
};

const genreNames = {
  comedia: "comedia",
  romance: "romance",
  acao: "acao",
  terror: "terror",
  documentario: "documentario",
  anime: "anime",
};

const state = {
  step: 0,
  answers: {},
  weather: null,
  isLoadingWeather: false,
  recommendationIndex: 0,
  currentResult: null,
};

const totalSteps = 7;

const form = document.querySelector("#date-form");
const questionArea = document.querySelector("#question-area");
const backButton = document.querySelector("#back-button");
const nextButton = document.querySelector("#next-button");
const stepLabel = document.querySelector("#step-label");
const progressBar = document.querySelector("#progress-bar");
const resultPanel = document.querySelector("#result-panel");
const resultTitle = document.querySelector("#result-title");
const resultDescription = document.querySelector("#result-description");
const resultTips = document.querySelector("#result-tips");
const restartButton = document.querySelector("#restart-button");

function getQuestions() {
  const place = state.answers.place;
  const weatherSuggestsHome = state.weather && !state.weather.isSunny;
  const appPickedHome = place === "flex" && weatherSuggestsHome;
  const appPickedOutside = place === "flex" && !weatherSuggestsHome;

  if (place === "outside" || appPickedOutside) {
    return [
      questionBank.location,
      questionBank.place,
      questionBank.outsideActivity,
      questionBank.time,
      questionBank.money,
      questionBank.foods,
      questionBank.outsideFinish,
    ];
  }

  if (place === "home" || appPickedHome) {
    return [
      questionBank.location,
      questionBank.place,
      questionBank.money,
      questionBank.foods,
      questionBank.providers,
      questionBank.screen,
      questionBank.genres,
    ];
  }

  return [questionBank.location, questionBank.place];
}

function getTotalStepCount() {
  return totalSteps;
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function normalizeText(value) {
  return String(value)
    .trim()
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");
}

function renderWeatherNote() {
  if (state.isLoadingWeather) {
    return `<p class="weather-note">A espreitar o clima da cidade...</p>`;
  }

  if (!state.weather) {
    return "";
  }

  return `
    <p class="weather-note ${state.weather.isSunny ? "sunny" : "cloudy"}">
      ${state.weather.summary}
    </p>
  `;
}

function renderOption(question, option, selected) {
  const checked = Array.isArray(selected)
    ? selected.includes(option.value)
    : selected === option.value;
  const inputType = question.type === "multi" ? "checkbox" : "radio";

  return `
    <label class="option-card illustrated-option">
      <input
        type="${inputType}"
        name="${question.id}"
        value="${option.value}"
        ${checked ? "checked" : ""}
      />
      <span
        class="option-image"
        style="background-image: url('${option.image}')"
        aria-hidden="true"
      ></span>
      <span class="option-copy">
        <span class="option-title">${option.title}</span>
        <span class="option-detail">${option.detail}</span>
      </span>
    </label>
  `;
}

function renderQuestion() {
  const questions = getQuestions();
  const question = questions[state.step];
  const selected = state.answers[question.id];
  const total = getTotalStepCount();
  const progress = ((state.step + 1) / total) * 100;

  stepLabel.textContent = `Pergunta ${state.step + 1} de ${total}`;
  progressBar.style.width = `${progress}%`;
  backButton.disabled = state.step === 0 || state.isLoadingWeather;
  nextButton.disabled = state.isLoadingWeather;
  nextButton.textContent =
    state.step === questions.length - 1 ? "Montar o date" : "Continuar";

  if (question.type === "location") {
    questionArea.innerHTML = `
      <p class="question-kicker">${question.kicker}</p>
      <h2 class="question-title">${question.title}</h2>
      <p class="question-description">${question.description}</p>
      <label class="text-field">
        <span>Cidade</span>
        <input
          id="location-input"
          name="${question.id}"
          type="text"
          value="${escapeHtml(selected || "")}"
          placeholder="${question.placeholder}"
          autocomplete="address-level2"
          required
        />
      </label>
      ${renderWeatherNote()}
      <p class="form-error" id="form-error"></p>
    `;
    return;
  }

  const extraValue = state.answers[`${question.id}Extra`] || "";

  questionArea.innerHTML = `
    <p class="question-kicker">${question.kicker}</p>
    <h2 class="question-title">${question.title}</h2>
    ${question.description ? `<p class="question-description">${question.description}</p>` : ""}
    ${renderWeatherNote()}
    <div class="options-grid card-grid">
      ${question.options.map((option) => renderOption(question, option, selected || [])).join("")}
    </div>
    ${
      question.type === "multi" && question.extraLabel
        ? `
          <label class="text-field extra-field">
            <span>${question.extraLabel}</span>
            <input
              name="${question.id}Extra"
              type="text"
              value="${escapeHtml(extraValue)}"
              placeholder="${question.extraPlaceholder}"
            />
          </label>
        `
        : ""
    }
    <p class="form-error" id="form-error"></p>
  `;
}

async function fetchWeather(city) {
  const encodedCity = encodeURIComponent(city.trim());
  const geoUrl = `https://geocoding-api.open-meteo.com/v1/search?name=${encodedCity}&count=10&language=pt&format=json`;
  const geoResponse = await fetch(geoUrl);
  const geoData = await geoResponse.json();

  if (!geoData.results || geoData.results.length === 0) {
    return {
      isSunny: false,
      summary: "Nao encontrei essa cidade, entao vou decidir sem confiar no clima.",
    };
  }

  const normalizedCity = normalizeText(city);
  const place =
    geoData.results.find(
      (result) =>
        normalizeText(result.name) === normalizedCity &&
        result.country_code === "PT",
    ) ||
    geoData.results.find((result) => normalizeText(result.name) === normalizedCity) ||
    geoData.results[0];
  const weatherUrl = `https://api.open-meteo.com/v1/forecast?latitude=${place.latitude}&longitude=${place.longitude}&current_weather=true&timezone=auto`;
  const weatherResponse = await fetch(weatherUrl);
  const weatherData = await weatherResponse.json();
  const current = weatherData.current_weather;

  if (!current) {
    return {
      isSunny: false,
      summary: `Nao consegui ler o clima em ${place.name}, entao vou manter um plano flexivel.`,
    };
  }

  const code = current.weathercode;
  const isSunny = current.is_day === 1 && [0, 1, 2].includes(code);
  const condition = weatherCodes[code] || "tempo incerto";
  const sunText = isSunny ? "parece bom para sair" : "pede um plano mais protegido";

  return {
    isSunny,
    city: place.name,
    summary: `Em ${place.name}, ${place.country_code}: ${Math.round(current.temperature)}°C, ${condition}. Hoje ${sunText}.`,
  };
}

function showError(message) {
  const error = document.querySelector("#form-error");
  if (error) {
    error.textContent = message;
  }
}

function collectCurrentAnswer() {
  const question = getQuestions()[state.step];
  const formData = new FormData(form);

  if (question.type === "location") {
    const city = String(formData.get(question.id) || "").trim();
    if (!city) {
      showError("Coloca uma cidade para continuar.");
      return false;
    }
    state.answers[question.id] = city;
    return true;
  }

  if (question.type === "multi") {
    const selected = formData.getAll(question.id);
    const extra = String(formData.get(`${question.id}Extra`) || "").trim();

    if (selected.length === 0 && !extra) {
      showError("Escolhe pelo menos uma opcao ou escreve uma ideia tua.");
      return false;
    }

    state.answers[question.id] = selected;
    state.answers[`${question.id}Extra`] = extra;
    return true;
  }

  const selected = formData.get(question.id);
  if (!selected) {
    showError("Escolhe uma opcao para continuar.");
    return false;
  }

  state.answers[question.id] = selected;
  return true;
}

function splitExtra(value) {
  return String(value || "")
    .split(",")
    .map((item) => item.trim())
    .filter(Boolean);
}

function chooseFromList(selected, extra, labels, priority) {
  const custom = splitExtra(extra);
  const candidates = [...selected, ...custom];

  for (const item of priority) {
    if (selected.includes(item)) {
      return labels[item] || item;
    }
  }

  if (custom.length > 0) {
    return custom[0];
  }

  return labels[candidates[0]] || candidates[0] || "algo simples";
}

function chooseFood() {
  const selected = state.answers.foods || [];
  const extra = state.answers.foodsExtra || "";
  const outsideActivity = state.answers.outsideActivity;
  const time = state.answers.time;
  const money = state.answers.money;
  let priority = ["pizza", "burger", "pasta", "snacks", "sushi", "dessert"];

  if (outsideActivity === "cafe" || time === "morning") {
    priority = ["snacks", "dessert", "pizza", "burger", "pasta", "sushi"];
  } else if (outsideActivity === "restaurant" && money === "spend") {
    priority = ["sushi", "pasta", "burger", "pizza", "dessert", "snacks"];
  } else if (outsideActivity === "bar") {
    priority = ["burger", "pizza", "snacks", "sushi", "dessert", "pasta"];
  } else if (state.answers.place === "home" && money === "save") {
    priority = ["pasta", "pizza", "burger", "snacks", "dessert", "sushi"];
  }

  return chooseFromList(selected, extra, foodNames, priority);
}

function chooseGenreKey() {
  const selected = state.answers.genres || [];
  const custom = splitExtra(state.answers.genresExtra || "");
  const screen = state.answers.screen;
  let priority = ["comedia", "romance", "acao", "anime", "documentario", "terror"];

  if (screen === "movie") {
    priority = ["romance", "comedia", "terror", "acao", "anime", "documentario"];
  } else if (screen === "series") {
    priority = ["comedia", "romance", "anime", "acao", "documentario", "terror"];
  }

  for (const item of priority) {
    if (selected.includes(item)) {
      return item;
    }
  }

  return custom[0] || selected[0] || "comedia";
}

function getSelectedProviders() {
  const selected = state.answers.providers || [];

  if (selected.length > 0) {
    return selected;
  }

  return providerPriority;
}

function getRecommendations() {
  const genre = chooseGenreKey();
  const providers = getSelectedProviders();
  const screen = state.answers.screen;
  let matches = movieCatalog.filter(
    (item) => providers.includes(item.provider) && item.genre === genre,
  );

  if (screen === "movie" || screen === "series") {
    matches = matches.filter((item) => item.type === screen);
  }

  if (matches.length === 0) {
    matches = movieCatalog.filter((item) => providers.includes(item.provider));
  }

  if (matches.length === 0) {
    matches = movieCatalog;
  }

  return matches;
}

function chooseRecommendation() {
  const recommendations = getRecommendations();
  const index = state.recommendationIndex % recommendations.length;
  return recommendations[index];
}

function getOptionImage(questionId, value) {
  const question = questionBank[questionId];
  const option = question?.options.find((item) => item.value === value);
  return option?.image || "";
}

function getOptionTitle(questionId, value) {
  const question = questionBank[questionId];
  const option = question?.options.find((item) => item.value === value);
  return option?.title || value;
}

function pickOutsidePlace(food) {
  const activity = state.answers.outsideActivity;
  const time = state.answers.time;
  const city = state.answers.location;

  if (activity === "restaurant") {
    return time === "night"
      ? `um restaurante acolhedor em ${city}`
      : `um restaurante casual em ${city}`;
  }

  if (activity === "cafe") {
    return time === "morning"
      ? `um cafe com brunch em ${city}`
      : `um cafe bonito com ${food} em ${city}`;
  }

  if (activity === "bar") {
    return `um barzinho com petiscos em ${city}`;
  }

  return `um passeio bonito em ${city} com parada para ${food}`;
}

function buildOutsideResult() {
  const food = chooseFood();
  const place = pickOutsidePlace(food);
  const activity = state.answers.outsideActivity;
  const timeLabels = {
    morning: "de manha",
    afternoon: "a tarde",
    night: "a noite",
  };
  const time = timeLabels[state.answers.time] || "no melhor horario";

  return {
    mode: "outside",
    title: `Date completo em ${state.answers.location}`,
    description: `Plano fechado: voces vao sair ${time}, ir para ${place} e pedir ${food}. Cheguem sem pressa, sentem num lugar confortavel e deixem a conversa puxar o ritmo. Depois da comida, o fechamento decidido e ${getOptionTitle("outsideFinish", state.answers.outsideFinish).toLowerCase()}, sem abrir outra rodada de indecisao.`,
    hero: getOptionImage("outsideActivity", activity),
    cards: [
      {
        label: "Lugar",
        title: getOptionTitle("outsideActivity", activity),
        detail: place,
        image: getOptionImage("outsideActivity", activity),
      },
      {
        label: "Horario",
        title: getOptionTitle("time", state.answers.time),
        detail: `Ir ${time}`,
        image: getOptionImage("time", state.answers.time),
      },
      {
        label: "Final",
        title: getOptionTitle("outsideFinish", state.answers.outsideFinish),
        detail: "O app tambem decidiu como fechar o encontro.",
        image: getOptionImage("outsideFinish", state.answers.outsideFinish),
      },
      {
        label: "Comida",
        title: food,
        detail: `A escolha do app para comer hoje e ${food}.`,
        image: getOptionImage("foods", state.answers.foods?.[0]) || getOptionImage("foods", "pizza"),
      },
    ],
    tips: [
      state.weather?.summary || "Confere o clima antes de sair.",
      "Reserva ou salva o local no mapa antes de sair.",
      "Se estiver muito cheio, use a segunda opcao no mesmo bairro e mantenha o plano.",
    ],
  };
}

function buildHomeResult() {
  const food = chooseFood();
  const recommendation = chooseRecommendation();
  const money = state.answers.money;
  const action =
    money === "spend"
      ? `pedir ${food}`
      : money === "save"
        ? `fazer ${food} em casa`
        : `comprar algo simples e montar ${food}`;

  return {
    mode: "home",
    title: "Date completo em casa",
    description: `Plano fechado: voces vao ${action}, arrumar a sala com luz baixa, deixar bebida pronta e assistir ${recommendation.title} na ${providerNames[recommendation.provider]}. O genero decidido e ${genreNames[recommendation.genre] || recommendation.genre}; a ideia e um date confortavel, com comida definida e titulo escolhido sem debate infinito.`,
    hero: recommendation.image,
    recommendation,
    cards: [
      {
        label: "Comida",
        title: food,
        detail: `A escolha do app para hoje e ${food}.`,
        image: getOptionImage("foods", state.answers.foods?.[0]) || getOptionImage("foods", "pizza"),
      },
      {
        label: "Streaming",
        title: providerNames[recommendation.provider],
        detail: `${recommendation.type === "series" ? "Serie" : "Filme"} escolhido no catalogo.`,
        image: recommendation.image,
      },
      {
        label: "Genero",
        title: genreNames[recommendation.genre] || recommendation.genre,
        detail: recommendation.why,
        image: getOptionImage("genres", recommendation.genre) || recommendation.image,
      },
    ],
    tips: [
      state.weather?.summary || "Como e em casa, o clima nao atrapalha o plano.",
      "Deixa a comida resolvida antes de apertar play.",
      "Se ja assistiram, toca no botao abaixo para trocar por outro do mesmo estilo.",
    ],
  };
}

function buildResult() {
  const weatherSuggestsHome = state.weather && !state.weather.isSunny;
  const shouldStayHome =
    state.answers.place === "home" ||
    (state.answers.place === "flex" && weatherSuggestsHome);

  return shouldStayHome ? buildHomeResult() : buildOutsideResult();
}

function renderResultCards(cards) {
  return `
    <div class="plan-grid">
      ${cards
        .map(
          (card) => `
            <article class="plan-card">
              <div class="plan-card-image" style="background-image: url('${card.image}')"></div>
              <div class="plan-card-copy">
                <span>${card.label}</span>
                <h3>${escapeHtml(card.title)}</h3>
                <p>${escapeHtml(card.detail)}</p>
              </div>
            </article>
          `,
        )
        .join("")}
    </div>
  `;
}

function renderWatchCard(result) {
  if (result.mode !== "home" || !result.recommendation) {
    return "";
  }

  const item = result.recommendation;

  return `
    <article class="watch-card">
      <img src="${item.image}" alt="Poster de ${escapeHtml(item.title)}" />
      <div>
        <p class="eyebrow">Escolha para assistir</p>
        <h3>${escapeHtml(item.title)}</h3>
        <p>
          ${item.type === "series" ? "Serie" : "Filme"} de
          ${genreNames[item.genre] || item.genre} na ${providerNames[item.provider]}.
          ${item.why}
        </p>
        <button class="ghost-button" id="watched-button" type="button">
          Ja assisti a esse filme ou serie
        </button>
      </div>
    </article>
  `;
}

function renderResult() {
  const result = buildResult();
  state.currentResult = result;

  document.querySelector(".quiz-panel").classList.add("hidden");
  resultPanel.classList.remove("hidden");
  stepLabel.textContent = "Resultado pronto";
  progressBar.style.width = "100%";

  resultPanel.innerHTML = `
    <p class="eyebrow">Plano escolhido</p>
    <div class="result-hero" style="background-image: url('${result.hero}')"></div>
    <h2 id="result-title">${escapeHtml(result.title)}</h2>
    <p id="result-description">${escapeHtml(result.description)}</p>
    ${renderResultCards(result.cards)}
    ${renderWatchCard(result)}
    <ul id="result-tips" class="tips-list">
      ${result.tips.map((tip) => `<li>${escapeHtml(tip)}</li>`).join("")}
    </ul>
    <button class="primary-button" id="restart-button" type="button">
      Fazer outra vez
    </button>
  `;

  document.querySelector("#restart-button").addEventListener("click", restartQuiz);
  const watchedButton = document.querySelector("#watched-button");

  if (watchedButton) {
    watchedButton.addEventListener("click", () => {
      state.recommendationIndex += 1;
      renderResult();
    });
  }
}

async function handleSubmit(event) {
  event.preventDefault();

  if (!collectCurrentAnswer()) {
    return;
  }

  const question = getQuestions()[state.step];

  if (question.type === "location") {
    state.isLoadingWeather = true;
    renderQuestion();

    try {
      state.weather = await fetchWeather(state.answers.location);
    } catch {
      state.weather = {
        isSunny: false,
        summary: "Nao consegui consultar o clima agora, entao vou deixar o plano mais protegido.",
      };
    } finally {
      state.isLoadingWeather = false;
    }
  }

  const questions = getQuestions();
  if (state.step < questions.length - 1) {
    state.step += 1;
    renderQuestion();
    return;
  }

  state.recommendationIndex = 0;
  renderResult();
}

function restartQuiz() {
  state.step = 0;
  state.answers = {};
  state.weather = null;
  state.isLoadingWeather = false;
  state.recommendationIndex = 0;
  state.currentResult = null;
  resultPanel.classList.add("hidden");
  document.querySelector(".quiz-panel").classList.remove("hidden");
  renderQuestion();
}

form.addEventListener("submit", handleSubmit);

backButton.addEventListener("click", () => {
  if (state.step > 0) {
    state.step -= 1;
    renderQuestion();
  }
});

restartButton.addEventListener("click", restartQuiz);

renderQuestion();
