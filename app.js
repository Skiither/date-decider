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
        title: "Sair de casa",
        detail: "Quero um date com lugar, horario e plano fora.",
      },
      {
        value: "home",
        icon: "🏠",
        title: "Ficar em casa",
        detail: "Conforto, comida e entretenimento sem correria.",
      },
      {
        value: "flex",
        icon: "🧭",
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
        title: "Restaurante",
        detail: "Sentar, comer bem e conversar com calma.",
      },
      {
        value: "cafe",
        icon: "☕",
        title: "Cafe",
        detail: "Leve, fofo e bom para date de manha ou tarde.",
      },
      {
        value: "bar",
        icon: "🍸",
        title: "Barzinho",
        detail: "Noite mais animada, bebida e clima descontraido.",
      },
      {
        value: "walk",
        icon: "🌇",
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
        title: "Manha",
        detail: "Cafe, brunch ou passeio leve.",
      },
      {
        value: "afternoon",
        icon: "🌆",
        title: "Tarde",
        detail: "Cafe, lanche, passeio ou algo tranquilo.",
      },
      {
        value: "night",
        icon: "🌙",
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
        title: "Gastar um pouco",
        detail: "Hoje vale caprichar no date.",
      },
      {
        value: "save",
        icon: "🍳",
        title: "Economizar",
        detail: "Quero algo bom sem gastar demais.",
      },
      {
        value: "balanced",
        icon: "✨",
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
      { value: "pizza", icon: "🍕", title: "Pizza", detail: "Facil de dividir." },
      { value: "burger", icon: "🍔", title: "Hamburguer", detail: "Casual e certeiro." },
      { value: "sushi", icon: "🍣", title: "Sushi", detail: "Mais especial." },
      { value: "snacks", icon: "🥪", title: "Lanche", detail: "Leve e rapido." },
      { value: "pasta", icon: "🍝", title: "Massa", detail: "Conforto total." },
      { value: "dessert", icon: "🍰", title: "Doces", detail: "Para fechar bonito." },
    ],
    extraLabel: "Mais comidas que voces gostam",
    extraPlaceholder: "Ex: tacos, ramen, churrasco...",
  },
  screen: {
    id: "screen",
    kicker: "Depois da comida",
    title: "Se o date for em casa, preferem ver o que?",
    type: "single",
    options: [
      {
        value: "movie",
        icon: "🎬",
        title: "Filme",
        detail: "Uma escolha fechada, com comeco e fim.",
      },
      {
        value: "series",
        icon: "📺",
        title: "Serie",
        detail: "Bom para maratonar sem pensar muito.",
      },
      {
        value: "youtube",
        icon: "▶️",
        title: "YouTube",
        detail: "Mais leve, variado e facil de trocar.",
      },
    ],
  },
  genres: {
    id: "genres",
    kicker: "Gosto dos dois",
    title: "Quais generos combinam mais?",
    description: "Marca os favoritos. O app vai escolher um para fechar o plano.",
    type: "multi",
    options: [
      { value: "comedia", icon: "😂", title: "Comedia", detail: "Rir sem complicar." },
      { value: "romance", icon: "💌", title: "Romance", detail: "Clima de date classico." },
      { value: "acao", icon: "💥", title: "Acao", detail: "Energia e adrenalina." },
      { value: "terror", icon: "🕯️", title: "Terror", detail: "Para assistir juntinhos." },
      { value: "documentario", icon: "🧠", title: "Documentario", detail: "Assunto para depois." },
      { value: "anime", icon: "🌙", title: "Anime", detail: "Visual e diferente." },
    ],
    extraLabel: "Outros generos favoritos",
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
};

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
    ];
  }

  if (place === "home" || appPickedHome) {
    return [
      questionBank.location,
      questionBank.place,
      questionBank.money,
      questionBank.foods,
      questionBank.screen,
      questionBank.genres,
    ];
  }

  return [questionBank.location, questionBank.place];
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
      <span class="option-icon" aria-hidden="true">${option.icon}</span>
      <span>
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
  const progress = ((state.step + 1) / questions.length) * 100;

  stepLabel.textContent = `Pergunta ${state.step + 1} de ${questions.length}`;
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
    <div class="options-grid ${question.type === "multi" ? "compact-grid" : ""}">
      ${question.options.map((option) => renderOption(question, option, selected || [])).join("")}
    </div>
    ${
      question.type === "multi"
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

function chooseGenre() {
  const selected = state.answers.genres || [];
  const extra = state.answers.genresExtra || "";
  const screen = state.answers.screen;
  let priority = ["comedia", "romance", "acao", "anime", "documentario", "terror"];

  if (screen === "movie") {
    priority = ["romance", "comedia", "terror", "acao", "anime", "documentario"];
  } else if (screen === "series") {
    priority = ["comedia", "romance", "anime", "acao", "documentario", "terror"];
  } else if (screen === "youtube") {
    priority = ["documentario", "comedia", "anime", "acao", "romance", "terror"];
  }

  return chooseFromList(selected, extra, genreNames, priority);
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
      : `um cafe bonito com ${food} ou sobremesa em ${city}`;
  }

  if (activity === "bar") {
    return `um barzinho com petiscos em ${city}`;
  }

  return `um passeio bonito em ${city} com parada para ${food}`;
}

function buildOutsideResult() {
  const food = chooseFood();
  const place = pickOutsidePlace(food);
  const timeLabels = {
    morning: "de manha",
    afternoon: "a tarde",
    night: "a noite",
  };
  const time = timeLabels[state.answers.time] || "no melhor horario";
  const activity = state.answers.outsideActivity;

  const titleMap = {
    restaurant: "Date completo: restaurante escolhido",
    cafe: "Date completo: cafe e conversa",
    bar: "Date completo: barzinho descontraido",
    walk: "Date completo: passeio com parada gostosa",
  };

  return {
    title: titleMap[activity],
    description: `O plano decidido e: sair ${time}, ir para ${place} e comer ${food}. Depois, fechem com uma mini caminhada ou sobremesa no mesmo bairro.`,
    tips: [
      state.weather?.summary || "Confere o clima antes de sair.",
      "Escolhe o lugar antes e ja deixa uma segunda opcao salva.",
      "Marca um horario claro para nao virar indecisao na hora.",
    ],
  };
}

function buildHomeResult() {
  const food = chooseFood();
  const genre = chooseGenre();
  const screenLabels = {
    movie: "um filme",
    series: "uma serie",
    youtube: "uma selecao de videos no YouTube",
  };
  const screen = screenLabels[state.answers.screen] || "um filme";
  const money = state.answers.money;
  const action =
    money === "spend"
      ? `pedir ${food}`
      : money === "save"
        ? `fazer ${food} em casa`
        : `comprar os ingredientes e montar ${food} sem complicar`;

  return {
    title: "Date completo: sofa, comida e tela",
    description: `O plano decidido e: ${action}, preparar a sala com luz baixa e assistir ${screen} de ${genre}. Nada de escolher mais coisa na hora.`,
    tips: [
      "Define a comida antes de comecar o date.",
      "Deixa bebida, prato e sobremesa prontos antes de dar play.",
      state.weather?.summary || "Como e em casa, o clima nao atrapalha o plano.",
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

function renderResult() {
  const result = buildResult();

  document.querySelector(".quiz-panel").classList.add("hidden");
  resultPanel.classList.remove("hidden");
  stepLabel.textContent = "Resultado pronto";
  progressBar.style.width = "100%";

  resultTitle.textContent = result.title;
  resultDescription.textContent = result.description;
  resultTips.innerHTML = result.tips.map((tip) => `<li>${escapeHtml(tip)}</li>`).join("");
}

form.addEventListener("submit", async (event) => {
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

  renderResult();
});

backButton.addEventListener("click", () => {
  if (state.step > 0) {
    state.step -= 1;
    renderQuestion();
  }
});

restartButton.addEventListener("click", () => {
  state.step = 0;
  state.answers = {};
  state.weather = null;
  state.isLoadingWeather = false;
  resultPanel.classList.add("hidden");
  document.querySelector(".quiz-panel").classList.remove("hidden");
  renderQuestion();
});

renderQuestion();
