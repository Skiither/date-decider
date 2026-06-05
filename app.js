const weatherCodes = {
  0: "céu limpo",
  1: "quase limpo",
  2: "algumas nuvens",
  3: "nublado",
  45: "neblina",
  48: "neblina",
  51: "chuva fraca",
  53: "chuva",
  55: "chuva forte",
  61: "chuva fraca",
  63: "chuva",
  65: "chuva forte",
  80: "pancadas de chuva",
  81: "pancadas de chuva",
  82: "pancadas fortes de chuva",
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
const fallbackImage =
  "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?auto=format&fit=crop&w=800&q=80";

const movieCatalog = [
  {
    title: "Glass Onion",
    type: "movie",
    provider: "netflix",
    genre: "comedia",
    image: "https://image.tmdb.org/t/p/w500/vDGr1YdrlfbU9wxTOdpf3zChmv9.jpg",
    synopsis:
      "O detetive Benoit Blanc viaja para a Grécia para investigar um mistério envolvendo um bilionário da tecnologia e seu grupo de amigos.",
    why: "mistério leve, personagens divertidos e conversa fácil depois.",
  },
  {
    title: "La La Land",
    type: "movie",
    provider: "netflix",
    genre: "romance",
    image: "https://image.tmdb.org/t/p/w500/uDO8zWDhfWwoFdKS4fzkUJt0Rf0.jpg",
    synopsis:
      "Uma atriz iniciante e um pianista de jazz se apaixonam em Los Angeles enquanto tentam equilibrar amor, sonhos e carreira.",
    why: "romance bonito, música e clima de date clássico.",
  },
  {
    title: "The Adam Project",
    type: "movie",
    provider: "netflix",
    genre: "acao",
    image: "https://image.tmdb.org/t/p/w500/wFjboE0aFZNbVOF05fzrka9Fqyx.jpg",
    synopsis:
      "Um piloto que viaja no tempo encontra sua versão criança e precisa trabalhar com ela para salvar o futuro.",
    why: "ação leve, humor e ritmo fácil de assistir a dois.",
  },
  {
    title: "A Sociedade da Neve",
    type: "movie",
    provider: "netflix",
    genre: "documentario",
    image: "https://image.tmdb.org/t/p/w500/2e853FDVSIso600RqAMunPxiZjq.jpg",
    synopsis:
      "Após a queda de um avião nos Andes, sobreviventes enfrentam condições extremas e decisões impossíveis para continuar vivos.",
    why: "intenso e com assunto forte para conversar depois.",
  },
  {
    title: "Invincible",
    type: "series",
    provider: "prime",
    genre: "acao",
    image: "https://static.tvmaze.com/uploads/images/medium_portrait/618/1545777.jpg",
    synopsis:
      "Mark Grayson é um adolescente comum, exceto pelo fato de ser filho do super-herói mais poderoso do planeta.",
    why: "super-herói com energia, surpresa e episódios que prendem.",
  },
  {
    title: "The Boys",
    type: "series",
    provider: "prime",
    genre: "acao",
    image: "https://static.tvmaze.com/uploads/images/medium_portrait/619/1547768.jpg",
    synopsis:
      "Um grupo de vigilantes enfrenta super-heróis corruptos que abusam da fama, do poder e da influência.",
    why: "para quem quer algo mais caótico, adulto e cheio de assunto.",
  },
  {
    title: "Red, White & Royal Blue",
    type: "movie",
    provider: "prime",
    genre: "romance",
    image: "https://image.tmdb.org/t/p/w500/dD3vhyDRCCT90hf4rldHU6Wu3Va.jpg",
    synopsis:
      "O filho da presidente dos Estados Unidos e um príncipe britânico transformam uma rivalidade pública em romance secreto.",
    why: "romance leve, fofo e direto ao ponto.",
  },
  {
    title: "Only Murders in the Building",
    type: "series",
    provider: "disney",
    genre: "comedia",
    image: "https://static.tvmaze.com/uploads/images/medium_portrait/586/1466415.jpg",
    synopsis:
      "Três vizinhos obcecados por crimes reais acabam investigando assassinatos no próprio prédio.",
    why: "mistério com humor e episódios fáceis de ver em casal.",
  },
  {
    title: "The Last of Us",
    type: "series",
    provider: "max",
    genre: "acao",
    image: "https://static.tvmaze.com/uploads/images/medium_portrait/563/1409008.jpg",
    synopsis:
      "Depois de uma pandemia destruir a civilização, um sobrevivente precisa proteger uma garota que pode ser a última esperança da humanidade.",
    why: "emoção, tensão e uma história que rende conversa.",
  },
  {
    title: "House of the Dragon",
    type: "series",
    provider: "max",
    genre: "acao",
    image: "https://static.tvmaze.com/uploads/images/medium_portrait/627/1568449.jpg",
    synopsis:
      "Ambientada antes de Game of Thrones, a série acompanha a disputa interna da Casa Targaryen pelo trono.",
    why: "fantasia, política e clima de episódio grande.",
  },
  {
    title: "Her",
    type: "movie",
    provider: "max",
    genre: "romance",
    image: "https://image.tmdb.org/t/p/w500/eCOtqtfvn7mxGl6nfmq4b1exJRc.jpg",
    synopsis:
      "Um homem solitário se apaixona por um sistema operacional com voz, personalidade e inteligência próprias.",
    why: "romance diferente, sensível e perfeito para um date mais calmo.",
  },
  {
    title: "Loki",
    type: "series",
    provider: "disney",
    genre: "acao",
    image: "https://static.tvmaze.com/uploads/images/medium_portrait/478/1195717.jpg",
    synopsis:
      "O deus da trapaça sai de sua linha do tempo e se envolve com uma organização que monitora o multiverso.",
    why: "aventura estilosa, episódios curtos e fácil de continuar depois.",
  },
  {
    title: "Elemental",
    type: "movie",
    provider: "disney",
    genre: "romance",
    image: "https://image.tmdb.org/t/p/w500/4Y1WNkd88JXmGfhtWR7dmDAo1T2.jpg",
    synopsis:
      "Em uma cidade onde fogo, água, terra e ar convivem, uma jovem de fogo cria uma conexão inesperada com um rapaz de água.",
    why: "leve, colorido e com romance bem acessível.",
  },
  {
    title: "Free Guy",
    type: "movie",
    provider: "disney",
    genre: "comedia",
    image: "https://image.tmdb.org/t/p/w500/xmbU4JTUm8rsdtn7Y3Fcm30GpeT.jpg",
    synopsis:
      "Um atendente de banco descobre que vive dentro de um videogame e decide virar o herói da própria história.",
    why: "divertido, leve e com energia de date descontraído.",
  },
  {
    title: "Sob Pressão",
    type: "series",
    provider: "globoplay",
    genre: "acao",
    image: "https://static.tvmaze.com/uploads/images/medium_portrait/136/341090.jpg",
    synopsis:
      "A rotina intensa de uma equipe médica em um hospital público do Rio de Janeiro, entre emergências e conflitos pessoais.",
    why: "drama médico brasileiro com ritmo forte.",
  },
  {
    title: "Todas as Flores",
    type: "series",
    provider: "globoplay",
    genre: "romance",
    image: "https://static.tvmaze.com/uploads/images/medium_portrait/435/1088682.jpg",
    synopsis:
      "Uma trama brasileira de romance, vingança e recomeços, com segredos familiares e personagens em choque.",
    why: "novela moderna, drama e romance para comentar junto.",
  },
  {
    title: "Attack on Titan",
    type: "series",
    provider: "netflix",
    genre: "anime",
    image: "https://static.tvmaze.com/uploads/images/medium_portrait/476/1191684.jpg",
    synopsis:
      "A humanidade vive cercada por muralhas para sobreviver a titãs gigantes, até que uma invasão muda tudo.",
    why: "anime intenso, cheio de viradas e perfeito para quem gosta de teorias.",
  },
  {
    title: "Spy x Family",
    type: "series",
    provider: "disney",
    genre: "anime",
    image: "https://static.tvmaze.com/uploads/images/medium_portrait/590/1477119.jpg",
    synopsis:
      "Um espião precisa formar uma família falsa para cumprir uma missão, sem saber que a esposa é assassina e a filha é telepata.",
    why: "leve, divertido e fácil de assistir sem pesar o clima.",
  },
  {
    title: "A Queda da Casa de Usher",
    type: "series",
    provider: "netflix",
    genre: "terror",
    image: "https://static.tvmaze.com/uploads/images/medium_portrait/476/1191759.jpg",
    synopsis:
      "Dois irmãos constroem uma dinastia farmacêutica, mas a família começa a ruir quando seus herdeiros morrem de forma misteriosa.",
    why: "terror elegante, mistério e episódios que prendem.",
  },
  {
    title: "Chef's Table",
    type: "series",
    provider: "netflix",
    genre: "documentario",
    image: "https://static.tvmaze.com/uploads/images/medium_portrait/184/461738.jpg",
    synopsis:
      "Uma série documental que entra nas cozinhas e na mente de chefs renomados ao redor do mundo.",
    why: "documentário bonito, inspirador e ainda combina com comida.",
  },
];

const recipeCatalog = {
  pizza: [
    {
      title: "Pizza de frigideira com queijo e tomate",
      time: "25 minutos",
      steps: [
        "Misture farinha, água, azeite, fermento e uma pitada de sal até formar uma massa macia.",
        "Abra a massa fina, doure na frigideira e vire.",
        "Coloque molho, queijo, tomate e orégano, tampe e deixe o queijo derreter.",
      ],
    },
    {
      title: "Pizza de pão sírio",
      time: "15 minutos",
      steps: [
        "Use pão sírio como base e espalhe molho de tomate.",
        "Cubra com queijo, presunto, milho ou o que tiver em casa.",
        "Leve ao forno até dourar e finalize com azeite.",
      ],
    },
    {
      title: "Pizza caseira de calabresa",
      time: "40 minutos",
      steps: [
        "Monte a massa pronta ou caseira com molho de tomate.",
        "Adicione muçarela, calabresa fatiada e cebola.",
        "Asse até a borda ficar dourada e sirva em fatias para dividir.",
      ],
    },
  ],
  burger: [
    {
      title: "Hambúrguer smash caseiro",
      time: "20 minutos",
      steps: [
        "Faça bolinhas de carne temperadas com sal e pimenta.",
        "Amasse na frigideira bem quente até criar crosta.",
        "Coloque queijo, pão tostado, molho e picles.",
      ],
    },
    {
      title: "Hambúrguer de frango crocante",
      time: "35 minutos",
      steps: [
        "Tempere filé de frango, empane e doure até ficar crocante.",
        "Monte no pão com queijo, alface e maionese temperada.",
        "Sirva com batata ou chips para completar.",
      ],
    },
    {
      title: "Mini hambúrgueres para dividir",
      time: "30 minutos",
      steps: [
        "Modele porções pequenas de carne ou frango.",
        "Grelhe, coloque queijo e monte em mini pães.",
        "Faça dois sabores de molho para deixar o date mais divertido.",
      ],
    },
  ],
  sushi: [
    {
      title: "Temaki simples em casa",
      time: "30 minutos",
      steps: [
        "Prepare arroz japonês e tempere com vinagre, açúcar e sal.",
        "Corte salmão, pepino ou kani em tiras.",
        "Monte cones com alga, arroz, recheio e cream cheese.",
      ],
    },
    {
      title: "Poke de salmão ou frango",
      time: "25 minutos",
      steps: [
        "Monte uma base de arroz, manga, pepino e cenoura.",
        "Adicione salmão, frango ou tofu.",
        "Finalize com shoyu, gergelim e cebolinha.",
      ],
    },
    {
      title: "Sushi bowl sem enrolar",
      time: "20 minutos",
      steps: [
        "Coloque arroz japonês em uma tigela.",
        "Adicione peixe, kani, pepino, manga e cream cheese.",
        "Finalize com alga picada e molho tarê.",
      ],
    },
  ],
  snacks: [
    {
      title: "Tábua de lanches",
      time: "15 minutos",
      steps: [
        "Separe queijos, frios, torradas, frutas e geleia.",
        "Monte tudo em uma tábua bonita.",
        "Sirva com uma bebida gelada e guardanapos à mão.",
      ],
    },
    {
      title: "Sanduíche quente caprichado",
      time: "20 minutos",
      steps: [
        "Recheie pão com queijo, presunto, tomate e orégano.",
        "Doure na frigideira com manteiga dos dois lados.",
        "Corte ao meio e sirva com molho simples.",
      ],
    },
    {
      title: "Nachos de sofá",
      time: "18 minutos",
      steps: [
        "Espalhe nachos em uma forma.",
        "Cubra com queijo, carne moída ou frango desfiado.",
        "Leve ao forno e finalize com sour cream ou guacamole.",
      ],
    },
  ],
  pasta: [
    {
      title: "Macarrão alho e óleo cremoso",
      time: "20 minutos",
      steps: [
        "Cozinhe a massa e reserve um pouco da água.",
        "Doure alho no azeite e misture a massa.",
        "Finalize com parmesão, pimenta e um pouco da água do cozimento.",
      ],
    },
    {
      title: "Massa ao molho branco com bacon",
      time: "30 minutos",
      steps: [
        "Doure bacon e reserve.",
        "Faça molho branco com manteiga, farinha, leite e queijo.",
        "Misture a massa, finalize com bacon e cheiro-verde.",
      ],
    },
    {
      title: "Espaguete ao molho de tomate rápido",
      time: "25 minutos",
      steps: [
        "Refogue alho e cebola no azeite.",
        "Adicione tomate pelado, sal, pimenta e manjericão.",
        "Misture com a massa e finalize com queijo ralado.",
      ],
    },
  ],
  dessert: [
    {
      title: "Brownie de caneca para dois",
      time: "10 minutos",
      steps: [
        "Misture chocolate em pó, farinha, açúcar, leite e óleo.",
        "Leve ao micro-ondas até firmar.",
        "Sirva com sorvete ou calda.",
      ],
    },
    {
      title: "Fondue rápido de chocolate",
      time: "15 minutos",
      steps: [
        "Derreta chocolate com creme de leite.",
        "Corte morango, banana e biscoitos.",
        "Sirva tudo em uma tigela no centro da mesa.",
      ],
    },
    {
      title: "Taça de iogurte com frutas",
      time: "10 minutos",
      steps: [
        "Intercale iogurte, frutas e granola em taças.",
        "Finalize com mel ou geleia.",
        "Deixe gelar alguns minutos antes de servir.",
      ],
    },
  ],
};

const questionBank = {
  location: {
    id: "location",
    kicker: "Primeiro detalhe",
    title: "Onde vai ser o date?",
    description:
      "Escreva a cidade para eu tentar entender se o tempo está pedindo rua ou sofá.",
    type: "location",
    placeholder: "Ex: Lisboa, Porto, Braga...",
  },
  place: {
    id: "place",
    kicker: "Plano base",
    title: "Hoje vocês querem sair ou ficar em casa?",
    type: "single",
    options: [
      {
        value: "outside",
        icon: "☀️",
        image:
          "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80",
        title: "Sair de casa",
        detail: "Quero um date com lugar, horário e plano fora.",
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
        title: "Café",
        detail: "Leve, fofo e bom para date de manhã ou tarde.",
      },
      {
        value: "bar",
        icon: "🍸",
        image:
          "https://images.unsplash.com/photo-1514933651103-005eec06c04b?auto=format&fit=crop&w=800&q=80",
        title: "Barzinho",
        detail: "Noite mais animada, bebida e clima descontraído.",
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
    kicker: "Horário",
    title: "Vai ser de manhã, tarde ou noite?",
    type: "single",
    options: [
      {
        value: "morning",
        icon: "🌤️",
        image:
          "https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?auto=format&fit=crop&w=800&q=80",
        title: "Manhã",
        detail: "Café, brunch ou passeio leve.",
      },
      {
        value: "afternoon",
        icon: "🌆",
        image:
          "https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?auto=format&fit=crop&w=800&q=80",
        title: "Tarde",
        detail: "Café, lanche, passeio ou algo tranquilo.",
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
    title: "Qual é a vibe do bolso hoje?",
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
          "https://images.unsplash.com/photo-1526367790999-0150786686a2?auto=format&fit=crop&w=800&q=80",
        title: "Meio termo",
        detail: "Gostoso, mas sem exagero.",
      },
    ],
  },
  foods: {
    id: "foods",
    kicker: "Comida",
    title: "O que vocês gostam de comer?",
    description: "Escolha as favoritas. O app vai decidir uma só no final.",
    type: "multi",
    options: [
      {
        value: "pizza",
        icon: "🍕",
        image:
          "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=800&q=80",
        title: "Pizza",
        detail: "Fácil de dividir.",
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
        detail: "Leve e rápido.",
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
    extraLabel: "Mais comidas que vocês gostam",
    extraPlaceholder: "Ex: tacos, ramen, churrasco...",
  },
  outsideFinish: {
    id: "outsideFinish",
    kicker: "Fechamento",
    title: "Como vocês querem terminar o date fora?",
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
    title: "Quais assinaturas vocês têm?",
    description: "Escolha as plataformas disponíveis para o app decidir o que assistir.",
    type: "multi",
    options: [
      {
        value: "netflix",
        icon: "N",
        image:
          "https://images.unsplash.com/photo-1522869635100-9f4c5e86aa37?auto=format&fit=crop&w=800&q=80",
        title: "Netflix",
        detail: "Filmes e séries populares.",
      },
      {
        value: "prime",
        icon: "P",
        image:
          "https://images.unsplash.com/photo-1594909122845-11baa439b7bf?auto=format&fit=crop&w=800&q=80",
        title: "Prime Video",
        detail: "Aventura, romance e séries fortes.",
      },
      {
        value: "max",
        icon: "M",
        image:
          "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?auto=format&fit=crop&w=800&q=80",
        title: "HBO Max",
        detail: "Séries premium e filmes intensos.",
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
        detail: "Conteúdo brasileiro e novelas.",
      },
    ],
  },
  screen: {
    id: "screen",
    kicker: "Depois da comida",
    title: "Preferem filme ou série?",
    type: "single",
    options: [
      {
        value: "movie",
        icon: "🎬",
        image:
          "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?auto=format&fit=crop&w=800&q=80",
        title: "Filme",
        detail: "Uma escolha fechada, com começo e fim.",
      },
      {
        value: "series",
        icon: "📺",
        image:
          "https://images.unsplash.com/photo-1521967906867-14ec9d64bee8?auto=format&fit=crop&w=800&q=80",
        title: "Série",
        detail: "Bom para assistir um episódio e continuar depois.",
      },
      {
        value: "any",
        icon: "🎲",
        image:
          "https://images.unsplash.com/photo-1524985069026-dd778a71c7b4?auto=format&fit=crop&w=800&q=80",
        title: "Tanto faz",
        detail: "O app decide o melhor título.",
      },
    ],
  },
  genres: {
    id: "genres",
    kicker: "Gosto dos dois",
    title: "Quais gêneros combinam mais?",
    description: "Marque os favoritos. O app vai escolher um gênero e um título específico.",
    type: "multi",
    options: [
      {
        value: "comedia",
        icon: "😂",
        image:
          "https://images.unsplash.com/photo-1516670428252-df97bba108d1?auto=format&fit=crop&w=800&q=80",
        title: "Comédia",
        detail: "Rir sem complicar.",
      },
      {
        value: "romance",
        icon: "💌",
        image:
          "https://images.unsplash.com/photo-1518199266791-5375a83190b7?auto=format&fit=crop&w=800&q=80",
        title: "Romance",
        detail: "Clima de date clássico.",
      },
      {
        value: "acao",
        icon: "💥",
        image:
          "https://images.unsplash.com/photo-1511379938547-c1f69419868d?auto=format&fit=crop&w=800&q=80",
        title: "Ação",
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
    extraLabel: "Outro gênero favorito",
    extraPlaceholder: "Ex: true crime, fantasia, culinária...",
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
  acao: "ação",
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
  seenRecommendationKeys: [],
  recipeIndex: 0,
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
    return `<p class="weather-note">Consultando o clima da cidade...</p>`;
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
      summary: "Não encontrei essa cidade, então vou decidir sem confiar no clima.",
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
      summary: `Não consegui ler o clima em ${place.name}, então vou manter um plano flexível.`,
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
      showError("Coloque uma cidade para continuar.");
      return false;
    }
    state.answers[question.id] = city;
    return true;
  }

  if (question.type === "multi") {
    const selected = formData.getAll(question.id);
    const extra = String(formData.get(`${question.id}Extra`) || "").trim();

    if (selected.length === 0 && !extra) {
      showError("Escolha pelo menos uma opção ou escreva uma ideia sua.");
      return false;
    }

    state.answers[question.id] = selected;
    state.answers[`${question.id}Extra`] = extra;
    return true;
  }

  const selected = formData.get(question.id);
  if (!selected) {
    showError("Escolha uma opção para continuar.");
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
  const key = chooseFoodKey();

  return foodNames[key] || key;
}

function chooseFoodKey() {
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

  for (const item of priority) {
    if (selected.includes(item)) {
      return item;
    }
  }

  return splitExtra(extra)[0] || selected[0] || "pizza";
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

  if (matches.length < 4 && (screen === "movie" || screen === "series")) {
    matches = movieCatalog.filter(
      (item) => item.genre === genre && item.type === screen,
    );
  }

  if (matches.length < 4) {
    matches = uniqueRecommendations([
      ...matches,
      ...movieCatalog.filter((item) => item.genre === genre),
    ]);
  }

  if (matches.length < 4 && (screen === "movie" || screen === "series")) {
    matches = uniqueRecommendations([
      ...matches,
      ...movieCatalog.filter((item) => item.type === screen),
    ]);
  }

  if (matches.length < 4) {
    matches = uniqueRecommendations([...matches, ...movieCatalog]);
  }

  if (matches.length === 0) {
    matches = movieCatalog.filter((item) => providers.includes(item.provider));
  }

  if (matches.length === 0) {
    matches = movieCatalog;
  }

  return matches;
}

function uniqueRecommendations(items) {
  const seen = new Set();

  return items.filter((item) => {
    const key = `${item.provider}-${item.title}`;

    if (seen.has(key)) {
      return false;
    }

    seen.add(key);
    return true;
  });
}

function chooseRecommendation() {
  const recommendations = getRecommendations();
  let available = recommendations.filter(
    (item) => !state.seenRecommendationKeys.includes(getRecommendationKey(item)),
  );

  if (available.length === 0) {
    const expanded = getExpandedRecommendationPool();
    available = expanded.filter(
      (item) => !state.seenRecommendationKeys.includes(getRecommendationKey(item)),
    );
  }

  if (available.length === 0) {
    state.seenRecommendationKeys = [];
    available = [...recommendations];
  }

  const index = state.recommendationIndex % available.length;
  const selected = available[index];
  state.seenRecommendationKeys.push(getRecommendationKey(selected));

  return selected;
}

function getRecommendationKey(item) {
  return `${item.provider}:${item.type}:${item.title}`;
}

function getExpandedRecommendationPool() {
  const screen = state.answers.screen;

  if (screen === "movie" || screen === "series") {
    return movieCatalog.filter((item) => item.type === screen);
  }

  return movieCatalog;
}

function chooseRecipe(foodKey) {
  const recipes = recipeCatalog[foodKey] || recipeCatalog.snacks;
  const index = state.recipeIndex % recipes.length;

  return recipes[index];
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
      ? `um café com brunch em ${city}`
      : `um café bonito com ${food} em ${city}`;
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
    morning: "de manhã",
    afternoon: "à tarde",
    night: "à noite",
  };
  const time = timeLabels[state.answers.time] || "no melhor horário";

  return {
    mode: "outside",
    title: `Date completo em ${state.answers.location}`,
    description: `Plano fechado: vocês vão sair ${time}, ir para ${place} e pedir ${food}. Cheguem sem pressa, sentem em um lugar confortável e deixem a conversa puxar o ritmo. Depois da comida, o fechamento decidido é ${getOptionTitle("outsideFinish", state.answers.outsideFinish).toLowerCase()}, sem abrir outra rodada de indecisão.`,
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
        detail: "O app também decidiu como fechar o encontro.",
        image: getOptionImage("outsideFinish", state.answers.outsideFinish),
      },
      {
        label: "Comida",
        title: food,
        detail: `A escolha do app para comer hoje é ${food}.`,
        image: getOptionImage("foods", state.answers.foods?.[0]) || getOptionImage("foods", "pizza"),
      },
    ],
    tips: [
      state.weather?.summary || "Confira o clima antes de sair.",
      "Reserva ou salva o local no mapa antes de sair.",
      "Se estiver muito cheio, use a segunda opção no mesmo bairro e mantenha o plano.",
    ],
  };
}

function buildHomeResult() {
  const foodKey = chooseFoodKey();
  const food = foodNames[foodKey] || foodKey;
  const recommendation = chooseRecommendation();
  const recipe = chooseRecipe(foodKey);
  const money = state.answers.money;
  const action =
    money === "spend"
      ? `pedir ${food}`
      : money === "save"
        ? `fazer ${food} em casa`
        : `comprar algo simples e montar ${food}`;

  return {
    mode: "home",
    title: "Plano de hoje: date em casa",
    description: `Hoje o plano é ficar em casa, ${action}, preparar a sala com uma luz mais baixa, deixar bebida e guardanapos por perto e assistir ${recommendation.title} na ${providerNames[recommendation.provider]}. O gênero escolhido é ${genreNames[recommendation.genre] || recommendation.genre}, então a noite fica com comida definida, clima confortável e um título certo para dar play sem debate infinito.`,
    hero: recommendation.image,
    recommendation,
    recipe,
    food,
    cards: [
      {
        label: "Comida",
        title: food,
        detail: `Receita sugerida: ${recipe.title}.`,
        image: getOptionImage("foods", state.answers.foods?.[0]) || getOptionImage("foods", "pizza"),
      },
      {
        label: "Streaming",
        title: providerNames[recommendation.provider],
        detail: `${recommendation.type === "series" ? "Série" : "Filme"} escolhido no catálogo.`,
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
      state.weather?.summary || "Como é em casa, o clima não atrapalha o plano.",
      "Comecem pela receita, deixem a comida pronta e só depois deem play.",
      "Se vocês já assistiram ao título, toque em “Já assisti” para trocar por outro.",
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
      <img
        src="${item.image}"
        alt="Imagem de ${escapeHtml(item.title)}"
        onerror="this.onerror=null;this.src='${fallbackImage}'"
      />
      <div>
        <p class="eyebrow">Escolha para assistir</p>
        <h3>${escapeHtml(item.title)}</h3>
        <p>
          ${item.type === "series" ? "Série" : "Filme"} de
          ${genreNames[item.genre] || item.genre} na ${providerNames[item.provider]}.
          ${item.why}
        </p>
        <p class="watch-synopsis">
          <strong>Sinopse:</strong> ${escapeHtml(item.synopsis || "Sinopse não disponível no momento.")}
        </p>
        <button class="ghost-button" id="watched-button" type="button">
          Já assisti
        </button>
      </div>
    </article>
  `;
}

function renderRecipeCard(result) {
  if (result.mode !== "home" || !result.recipe) {
    return "";
  }

  return `
    <article class="recipe-card">
      <div>
        <p class="eyebrow">Comida escolhida</p>
        <h3>${escapeHtml(result.food)}</h3>
        <p>Receita sugerida: <strong>${escapeHtml(result.recipe.title)}</strong>.</p>
        <span class="recipe-time">${escapeHtml(result.recipe.time)}</span>
      </div>
      <ol>
        ${result.recipe.steps.map((step) => `<li>${escapeHtml(step)}</li>`).join("")}
      </ol>
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
    ${renderRecipeCard(result)}
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
        summary: "Não consegui consultar o clima agora, então vou deixar o plano mais protegido.",
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
  state.seenRecommendationKeys = [];
  state.recipeIndex = Date.now();
  renderResult();
}

function restartQuiz() {
  state.step = 0;
  state.answers = {};
  state.weather = null;
  state.isLoadingWeather = false;
  state.recommendationIndex = 0;
  state.seenRecommendationKeys = [];
  state.recipeIndex = 0;
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
