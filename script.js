const questions = [
  {
    q: "حين تكون وحيدًا تمامًا… ما الشيء الذي يعجز عن مفارقتك؟",
    a: [
      { text: "أفكار لا تهدأ", type: "x" },
      { text: "ذكريات بعينها", type: "lover" },
      { text: "إحساس غامض بلا سبب", type: "mirror" },
      { text: "فراغ داخلي", type: "ghorfa" }
    ]
  },
  {
    q: "أي فكرة تُقلقك على نحو أعمق؟",
    a: [
      { text: "أن لا يفهمك أحد", type: "ghorfa" },
      { text: "أن تكون مفهومًا أكثر مما ينبغي", type: "godfather" },
      { text: "أن لا تكون مميزًا", type: "x" },
      { text: "أن تتغير دون أن تشعر", type: "mirror" }
    ]
  },
  {
    q: "إن خُيّرت بين خسارتين… فأيهما تختار؟",
    a: [
      { text: "أن تفقد ذاتك", type: "mirror" },
      { text: "شخص عزيز", type: "lover" },
      { text: "حقيقتك", type: "x" },
      { text: "كذبة مريحة", type: "ghorfa" }
    ]
  },
  {
    q: "متى تشعر أنك حقيقي؟",
    a: [
      { text: "حين تتألم", type: "x" },
      { text: "حين تفكر", type: "mirror" },
      { text: "حين تنفرد بنفسك", type: "ghorfa" },
      { text: "حين تسيطر على مشاعرك", type: "godfather" }
    ]
  },
  {
    q: "ما الذي يخشاه قلبك؟",
    a: [
      { text: "أن تصبح عاديًا", type: "x" },
      { text: "أن تُكشف حقيقتك", type: "godfather" },
      { text: "أن تبقى كما أنت", type: "mirror" },
      { text: "أن تفقد المعنى", type: "ghorfa" }
    ]
  }
];

let current = 0;
let score = {};

function startGame() {
  document.getElementById("start-screen").classList.add("hidden");
  document.getElementById("game-screen").classList.remove("hidden");
  showQuestion();
}

function showQuestion() {
  let q = questions[current];
  document.getElementById("question").innerText = q.q;

  let answers = document.getElementById("answers");
  answers.innerHTML = "";

  q.a.forEach(ans => {
    let btn = document.createElement("button");
    btn.innerText = ans.text;
    btn.onclick = () => select(ans.type);
    answers.appendChild(btn);
  });
}

function select(type) {
  score[type] = (score[type] || 0) + 1;

  current++;
  if (current < questions.length) {
    showQuestion();
  } else {
    showResult();
  }
}

function showResult() {
  document.getElementById("game-screen").classList.add("hidden");
  document.getElementById("result-screen").classList.remove("hidden");

  let result = Object.keys(score).reduce((a,b)=>
    score[a] > score[b] ? a : b
  );

  const data = results[result];

  document.getElementById("final-title").innerText = data.title;
  document.getElementById("final-text").innerText = data.text;
  document.getElementById("story-name").innerText = data.story;
  document.getElementById("story-desc").innerText = data.desc;
}

const results = {
  x: {
    title: "القضية X",
    text: "لم تكن إجاباتك عشوائية… بل كانت انعكاسًا لشيء مخفي فيك.",
    story: "X: صوت الحقيقة",
    desc: "رواية عن عقل لا يهرب من الألم بل يحلله حتى النهاية."
  },
  godfather: {
    title: "العرّاب",
    text: "قوتك في ما تخفيه لا في ما تظهره.",
    story: "العرّاب: ظل السلطة",
    desc: "شخصية تتحكم في العالم من الخلف دون أن تُرى."
  },
  mirror: {
    title: "المرآة القديمة",
    text: "أخطر مواجهة هي نفسك.",
    story: "انعكاس بلا رحمة",
    desc: "رحلة داخل الذات حتى الانكسار أو الفهم."
  },
  lover: {
    title: "حب مخملي",
    text: "أنت تحب كأنك تنسج حلمًا.",
    story: "المخمل الأحمر",
    desc: "حب جميل لكنه يقترب من الوهم."
  },
  ghorfa: {
    title: "غرفة 007",
    text: "هناك أشياء في داخلك لا تخرج.",
    story: "غرفة 007",
    desc: "صمت داخلي مليء بما لا يُقال."
  }
};
