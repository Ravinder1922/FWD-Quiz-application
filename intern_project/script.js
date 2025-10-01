
let currentQuiz = [];
let currentQuestion = 0;
let score = 0;
let timer;
let timePerQuestion = 15;
let timeLeft = timePerQuestion;
let currentSubject = '';
let sectionKeys = [];
let currentSection = 0;


const questionEl = document.getElementById('question');
const optionsEl = document.getElementById('options');
const nextBtn = document.getElementById('next-btn');
const nextSectionBtn = document.getElementById('next-section-btn');
const feedbackEl = document.getElementById('feedback');
const explanationEl = document.getElementById('explanation');
const timerBar = document.getElementById('timer-bar');
const progressEl = document.getElementById('progress');
const progressBarEl = document.getElementById('progress-bar');
const sectionNav = document.getElementById('section-nav');


const categoryNames = {
  history: "📜 History",
  geography: "🌍 Geography",
  sports: "🏀 Sports",
  politics: "⚖️ Politics",
  currentAffairs: "📰 Current Affairs",
  algebra: "∑ Algebra",
  mensuration: "🧊 Mensuration",
  arithmetic: "➗ Arithmetic",
  trigonometry: "∆ Trigonometry",
  series: "∞ Series",
  physics: "💡 Physics",
  chemistry: "⚛️ Chemistry",
  biology: "🧬 Biology",
  astronomy: "🪐 Solar System",
  environment: "♻️ Environment",
  basics: "🤖 The language of the future",
  puzzels: "🧩 Think beyond",
  Health: "❤️ Health is Wealth"

};


const quizData = {
  general: {
    history: [
      { question: "Who was the first President of the United States?", options: ["George Washington", "Abraham Lincoln", "Thomas Jefferson", "John Adams"], answer: "George Washington", explanation: "George Washington became the first President in 1789." },
      { question: "In which year did World War II end?", options: ["1945", "1939", "1918", "1963"], answer: "1945", explanation: "World War II ended in 1945." },
      { question: "Who discovered America?", options: ["Christopher Columbus", "Vasco da Gama", "Marco Polo", "Ferdinand Magellan"], answer: "Christopher Columbus", explanation: "Columbus reached the Americas in 1492." },
      { question: "The Great Fire of London occurred in which year?", options: ["1666", "1766", "1866", "1966"], answer: "1666", explanation: "The Great Fire destroyed much of London in 1666." },
      { question: "Who was known as the Iron Lady?", options: ["Margaret Thatcher", "Indira Gandhi", "Angela Merkel", "Golda Meir"], answer: "Margaret Thatcher", explanation: "Margaret Thatcher, UK Prime Minister, was called the Iron Lady." }
    ],
    geography: [
      { question: "What is the largest continent?", options: ["Asia", "Africa", "Europe", "Antarctica"], answer: "Asia", explanation: "Asia is the largest continent by area." },
      { question: "Which river flows through Egypt?", options: ["Nile", "Amazon", "Ganges", "Yangtze"], answer: "Nile", explanation: "The Nile is the longest river in Egypt." },
      { question: "Mount Everest is located in which country?", options: ["Nepal", "India", "China", "Bhutan"], answer: "Nepal", explanation: "Mount Everest lies on the Nepal-China border." },
      { question: "The Sahara Desert is in which continent?", options: ["Africa", "Asia", "Australia", "South America"], answer: "Africa", explanation: "The Sahara is the largest hot desert in Africa." },
      { question: "What is the capital of Australia?", options: ["Canberra", "Sydney", "Melbourne", "Perth"], answer: "Canberra", explanation: "Canberra is the capital city of Australia." }
    ],
    sports: [
      { question: "How many players are in a soccer team?", options: ["11", "9", "7", "10"], answer: "11", explanation: "A soccer team has 11 players on the field." },
      { question: "Which country won the FIFA World Cup in 2018?", options: ["France", "Brazil", "Germany", "Argentina"], answer: "France", explanation: "France won the 2018 World Cup in Russia." },
      { question: "In tennis, what is the term 'love'?", options: ["0", "15", "30", "40"], answer: "0", explanation: "'Love' means zero points in tennis." },
      { question: "How many rings are there in the Olympic flag?", options: ["5", "6", "4", "7"], answer: "5", explanation: "There are 5 interlocked rings on the Olympic flag." },
      { question: "Which sport uses a shuttlecock?", options: ["Badminton", "Tennis", "Squash", "Table Tennis"], answer: "Badminton", explanation: "Badminton is played using a shuttlecock." }
    ],
    politics: [
      { question: "Who is the current President of the United States?", options: ["Joe Biden", "Donald Trump", "Barack Obama", "George Bush"], answer: "Joe Biden", explanation: "Joe Biden became the 46th President in 2021." },
      { question: "What is the lower house of the UK Parliament?", options: ["House of Commons", "House of Lords", "Senate", "Congress"], answer: "House of Commons", explanation: "The House of Commons is the elected lower house." },
      { question: "Who is the Prime Minister of India (2025)?", options: ["Narendra Modi", "Manmohan Singh", "Atal Bihari Vajpayee", "Rahul Gandhi"], answer: "Narendra Modi", explanation: "Narendra Modi is the current Prime Minister of India." },
      { question: "Which country has the largest democracy?", options: ["India", "USA", "China", "Brazil"], answer: "India", explanation: "India is the largest democracy in the world by population." },
      { question: "The UN was founded in which year?", options: ["1945", "1919", "1939", "1960"], answer: "1945", explanation: "The United Nations was established after WWII in 1945." }
    ],
    currentAffairs: [
      { question: "Which country recently landed a rover on the Moon?", options: ["China", "USA", "India", "Russia"], answer: "China", explanation: "China has successfully landed a rover on the Moon recently." },
      { question: "The COP26 summit focused on?", options: ["Climate Change", "Trade", "Health", "Education"], answer: "Climate Change", explanation: "COP26 addressed global climate action." },
      { question: "Which vaccine was first approved for COVID-19?", options: ["Pfizer", "Moderna", "AstraZeneca", "Johnson & Johnson"], answer: "Pfizer", explanation: "Pfizer-BioNTech vaccine was the first widely approved." },
      { question: "Which technology is used in ChatGPT?", options: ["AI Language Model", "Blockchain", "Quantum Computing", "IoT"], answer: "AI Language Model", explanation: "ChatGPT uses AI and machine learning models." },
      { question: "Which country will host the 2026 FIFA World Cup?", options: ["USA", "Canada", "Mexico", "All three"], answer: "All three", explanation: "USA, Canada, and Mexico will co-host the tournament." }
    ]
  },
  math: {
    algebra: [
      { question: "Quadratic Formula?", options: ["(-b ± √(b²-4ac)) / 2a", "b² - 4ac", "ax²+bx+c", "(-b ± √a)/2"], answer: "(-b ± √(b²-4ac)) / 2a", explanation: "x = (-b ± √(b²-4ac)) / (2a)" },
      { question: "(a+b)² expansion?", options: ["a²+2ab+b²", "a²-b²", "a²+b²", "a²+ab+b²"], answer: "a²+2ab+b²", explanation: "(a+b)² = a²+2ab+b²" },
      { question: "(a-b)² expansion?", options: ["a²-2ab+b²", "a²-b²", "a²+2ab+b²", "a²+ab+b²"], answer: "a²-2ab+b²", explanation: "(a-b)² = a²-2ab+b²" },
      { question: "(a+b)(a-b) = ?", options: ["a²-b²", "a²+b²", "a²+2ab+b²", "a²+ab+b²"], answer: "a²-b²", explanation: "(a+b)(a-b) = a²-b² (difference of squares)" },
      { question: "Sum of roots of ax²+bx+c=0?", options: ["-b/a", "c/a", "-c/b", "b/a"], answer: "-b/a", explanation: "Sum of roots = -b/a" }
    ],
    arithmetic: [
      { question: "Simple Interest formula?", options: ["(P×R×T)/100", "P+R+T", "PRT", "P×R/T"], answer: "(P×R×T)/100", explanation: "SI = (P × R × T) / 100" },
      { question: "Average formula?", options: ["Sum of terms / Number of terms", "Sum × Number", "Sum - Number", "Number / Sum"], answer: "Sum of terms / Number of terms", explanation: "Average = (Sum of terms) ÷ (Number of terms)" },
      { question: "Speed = ?", options: ["Distance/Time", "Time/Distance", "Distance×Time", "Distance-Time"], answer: "Distance/Time", explanation: "Speed = Distance ÷ Time" },
      { question: "Profit = ?", options: ["SP - CP", "CP - SP", "CP/SP", "SP/CP"], answer: "SP - CP", explanation: "Profit = Selling Price - Cost Price" },
      { question: "Percentage formula?", options: ["(Value/Total)×100", "Value×Total", "Value+Total", "(Value×100)/Total²"], answer: "(Value/Total)×100", explanation: "Percentage = (Value ÷ Total) × 100" }
    ],
    trigonometry: [
      { question: "sin²θ + cos²θ = ?", options: ["1", "0", "2", "θ"], answer: "1", explanation: "Pythagorean identity: sin²θ + cos²θ = 1" },
      { question: "tanθ = ?", options: ["sinθ/cosθ", "cosθ/sinθ", "1/sinθ", "1/cosθ"], answer: "sinθ/cosθ", explanation: "Definition: tanθ = sinθ / cosθ" },
      { question: "cotθ = ?", options: ["1/tanθ", "tanθ", "cosθ/sinθ", "1/sinθ"], answer: "1/tanθ", explanation: "cotθ = 1/tanθ = cosθ/sinθ" },
      { question: "sec²θ - tan²θ = ?", options: ["1", "0", "θ", "sin²θ"], answer: "1", explanation: "Identity: sec²θ - tan²θ = 1" },
      { question: "Angle of elevation is measured from?", options: ["Horizontal", "Vertical", "Slope", "Hypotenuse"], answer: "Horizontal", explanation: "Angle of elevation is from the horizontal line" }
    ],
    mensuration: [
      { question: "Formula for area of a circle?", options: ["πr²", "2πr", "πd", "r²"], answer: "πr²", explanation: "Area of circle = πr²" },
      { question: "Volume of a cube with side a?", options: ["a³", "6a²", "a²", "2a³"], answer: "a³", explanation: "Volume = side³ = a³" },
      { question: "Surface area of a sphere?", options: ["4πr²", "2πr", "πr²", "πd²"], answer: "4πr²", explanation: "Surface Area = 4πr²" },
      { question: "Volume of a cylinder?", options: ["πr²h", "2πrh", "πrh²", "πr³"], answer: "πr²h", explanation: "Volume of cylinder = πr²h" },
      { question: "Perimeter of a rectangle with length l and breadth b?", options: ["2(l+b)", "l×b", "l+b", "4(l+b)"], answer: "2(l+b)", explanation: "Perimeter = 2(l+b)" }
    ],
    series: [
      { question: "Sum of first n natural numbers?", options: ["n(n+1)/2", "n²", "n(n-1)/2", "2n+1"], answer: "n(n+1)/2", explanation: "Formula: 1+2+3+...+n = n(n+1)/2" },
      { question: "Sum of squares of first n natural numbers?", options: ["n(n+1)(2n+1)/6", "n²(n+1)²/4", "n(n+1)/2", "n³"], answer: "n(n+1)(2n+1)/6", explanation: "Formula: 1²+2²+3²+...+n² = n(n+1)(2n+1)/6" },
      { question: "Sum of cubes of first n natural numbers?", options: ["[n(n+1)/2]²", "n³", "n²(n+1)²/2", "n(n+1)(2n+1)/12"], answer: "[n(n+1)/2]²", explanation: "Formula: 1³+2³+3³+...+n³ = [n(n+1)/2]²" },
      { question: "Sum of first n odd numbers?", options: ["n²", "n(n+1)", "2n+1", "n³"], answer: "n²", explanation: "Formula: 1+3+5+...+(2n-1) = n²" },
      { question: "Sum of first n even numbers?", options: ["n(n+1)", "n²", "2n", "n(n-1)"], answer: "n(n+1)", explanation: "Formula: 2+4+6+...+2n = n(n+1)" }
    ]

  },
  science: {
    physics: [
      { question: "Speed of light in vacuum?", options: ["3×10^8 m/s", "3×10^6 m/s", "3×10^5 m/s", "3×10^7 m/s"], answer: "3×10^8 m/s", explanation: "Speed of light is 3×10^8 m/s." },
      { question: "Force = ?", options: ["mass × acceleration", "mass + acceleration", "mass / acceleration", "mass - acceleration"], answer: "mass × acceleration", explanation: "Newton's second law: F = m*a" },
      { question: "Unit of energy?", options: ["Joule", "Newton", "Watt", "Pascal"], answer: "Joule", explanation: "Energy is measured in Joules." },
      { question: "Acceleration due to gravity on Earth?", options: ["9.8 m/s²", "10 m/s²", "9 m/s²", "8.9 m/s²"], answer: "9.8 m/s²", explanation: "g = 9.8 m/s²" },
      { question: "Which particle is negatively charged?", options: ["Electron", "Proton", "Neutron", "Photon"], answer: "Electron", explanation: "Electrons have negative charge." }
    ],
    chemistry: [
      { question: "H2O is?", options: ["Water", "Oxygen", "Hydrogen", "Hydrogen Peroxide"], answer: "Water", explanation: "H2O is water." },
      { question: "NaCl is?", options: ["Salt", "Sugar", "Baking Soda", "Vinegar"], answer: "Salt", explanation: "NaCl is common salt." },
      { question: "Atomic number of Hydrogen?", options: ["1", "2", "3", "4"], answer: "1", explanation: "Hydrogen has atomic number 1." },
      { question: "Acid has pH < ?", options: ["7", "14", "0", "10"], answer: "7", explanation: "Acidic pH < 7" },
      { question: "Base has pH > ?", options: ["7", "0", "14", "10"], answer: "7", explanation: "Basic pH > 7" }
    ],
    biology: [
      { question: "Human heart has how many chambers?", options: ["4", "2", "3", "5"], answer: "4", explanation: "Human heart has 4 chambers." },
      { question: "Red blood cells carry?", options: ["Oxygen", "CO2", "Water", "Hormones"], answer: "Oxygen", explanation: "RBCs carry oxygen." },
      { question: "DNA stands for?", options: ["Deoxyribonucleic Acid", "Ribonucleic Acid", "Deoxyribose Acid", "Nucleic Acid"], answer: "Deoxyribonucleic Acid", explanation: "DNA is Deoxyribonucleic Acid." },
      { question: "Largest organ in human body?", options: ["Skin", "Liver", "Heart", "Lungs"], answer: "Skin", explanation: "Skin is the largest organ." },
      { question: "Which vitamin is produced in sunlight?", options: ["Vitamin D", "Vitamin C", "Vitamin A", "Vitamin K"], answer: "Vitamin D", explanation: "Vitamin D is produced in skin on sunlight exposure." }
    ],
    astronomy: [
      { question: "Earth revolves around?", options: ["Sun", "Moon", "Mars", "Jupiter"], answer: "Sun", explanation: "Earth revolves around the Sun." },
      { question: "The Moon is a?", options: ["Satellite", "Planet", "Star", "Comet"], answer: "Satellite", explanation: "Moon is Earth's natural satellite." },
      { question: "Light year measures?", options: ["Distance", "Time", "Speed", "Mass"], answer: "Distance", explanation: "A light year is a measure of distance." },
      { question: "Galaxy we live in?", options: ["Milky Way", "Andromeda", "Whirlpool", "Sombrero"], answer: "Milky Way", explanation: "We live in the Milky Way galaxy." },
      { question: "Planet known as Red Planet?", options: ["Mars", "Jupiter", "Venus", "Mercury"], answer: "Mars", explanation: "Mars is called the Red Planet." }
    ],
    environment: [
      { question: "What gas do plants produce?", options: ["Oxygen", "CO2", "Nitrogen", "Methane"], answer: "Oxygen", explanation: "Plants produce oxygen during photosynthesis." },
      { question: "Greenhouse effect is due to?", options: ["CO2", "Oxygen", "Nitrogen", "Argon"], answer: "CO2", explanation: "CO2 traps heat causing greenhouse effect." },
      { question: "Largest rainforest?", options: ["Amazon", "Congo", "Daintree", "Sundarbans"], answer: "Amazon", explanation: "Amazon is the largest rainforest." },
      { question: "Pollution is caused by?", options: ["Humans", "Animals", "Plants", "Rocks"], answer: "Humans", explanation: "Human activities cause most pollution." },
      { question: "Ozone layer protects from?", options: ["UV Rays", "Infrared", "X-rays", "Visible light"], answer: "UV Rays", explanation: "Ozone layer absorbs harmful UV rays." }
    ]
  },
  computerScience: {
    basics: [
      { question: "What does CPU stand for?", options: ["Central Processing Unit", "Computer Personal Unit", "Central Print Unit", "Control Processing Unit"], answer: "Central Processing Unit", explanation: "CPU is the brain of the computer, executing instructions and processing data." },
      { question: "What is RAM used for?", options: ["Temporary data storage", "Permanent storage", "Networking", "Power supply"], answer: "Temporary data storage", explanation: "RAM stores data temporarily for fast access while programs are running." },
      { question: "HTML is used for?", options: ["Web page structure", "Styling web pages", "Programming logic", "Database management"], answer: "Web page structure", explanation: "HTML defines the structure and content of web pages." },
      { question: "What does SQL stand for?", options: ["Structured Query Language", "Simple Query Language", "Standard Question Language", "System Query Logic"], answer: "Structured Query Language", explanation: "SQL is used to manage and query relational databases." },
      { question: "Which data structure uses LIFO?", options: ["Stack", "Queue", "Linked List", "Array"], answer: "Stack", explanation: "Stack follows Last-In-First-Out order; last element added is first removed." },
      { question: "Binary system uses how many digits?", options: ["2", "8", "10", "16"], answer: "2", explanation: "Binary uses 0 and 1 to represent all data in computers." },
      { question: "What is an algorithm?", options: ["Step-by-step procedure", "Programming language", "Software tool", "Hardware component"], answer: "Step-by-step procedure", explanation: "An algorithm is a sequence of instructions to solve a specific problem." },
      { question: "Which is a programming language?", options: ["Python", "HTTP", "HTML", "CSS"], answer: "Python", explanation: "Python is a high-level programming language used for software development." },
      { question: "What does 'OS' stand for in computers?", options: ["Operating System", "Open Software", "Output System", "Online Service"], answer: "Operating System", explanation: "An operating system manages hardware and software resources of a computer." },
      { question: "Which protocol is used for web browsing?", options: ["HTTP/HTTPS", "FTP", "SMTP", "SSH"], answer: "HTTP/HTTPS", explanation: "HTTP/HTTPS protocols are used to transfer web pages over the internet." }

    ]
  },
  Logic: {
    puzzels: [
      { question: "Find the missing number: 2, 6, 12, 20, ?", options: ["30", "28", "26", "32"], answer: "30", explanation: "Pattern: add consecutive even numbers (+4, +6, +8, +10)." },
      { question: "A is older than B. B is older than C. Who is the oldest?", options: ["A", "B", "C", "Cannot be determined"], answer: "A", explanation: "A > B > C, so A is oldest." },
      { question: "What has to be broken before you can use it?", options: ["Egg", "Glass", "Promise", "Lock"], answer: "Egg", explanation: "An egg must be broken to use it." },
      { question: "Which shape comes next: ◯, ▲, ◯, ▲, ?", options: ["◯", "▲", "■", "◆"], answer: "◯", explanation: "The sequence alternates circle, triangle." },
      { question: "A man pushes his car to a hotel and loses his fortune. Why?", options: ["Playing Monopoly", "He crashed", "Out of fuel", "Sold the car"], answer: "Playing Monopoly", explanation: "It’s a riddle — Monopoly tokens land on hotels and lose money." },
      { question: "If five cats catch five mice in five minutes, how many cats to catch 100 mice in 100 minutes?", options: ["5", "10", "20", "1"], answer: "5", explanation: "One cat catches 1 mouse in 5 min → in 100 min each cat catches 20 mice → 5 cats catch 100." },
      { question: "I’m tall when I’m young and short when I’m old. What am I?", options: ["Candle", "Tree", "Mountain", "Shadow"], answer: "Candle", explanation: "A candle burns down over time, getting shorter." },
      { question: "Two fathers and two sons went fishing. They caught 3 fish, one each. How is this possible?", options: ["They were 3 people", "They shared fish", "Error in count", "Impossible"], answer: "They were 3 people", explanation: "Grandfather, father, and son = 2 fathers + 2 sons but only 3 people." },
      { question: "Which number comes next: 1, 1, 2, 3, 5, 8, ?", options: ["11", "13", "12", "15"], answer: "13", explanation: "This is the Fibonacci sequence (add previous two numbers)." },
      { question: "I have cities but no houses, forests but no trees, and rivers but no water. What am I?", options: ["Map", "Dream", "Book", "Puzzle"], answer: "Map", explanation: "A map shows cities, forests, and rivers but none are real." }

    ]
  },
  Health: {
    Health: [
      { question: "Which vitamin is produced in the skin upon sunlight exposure?", options: ["Vitamin D", "Vitamin C", "Vitamin A", "Vitamin K"], answer: "Vitamin D", explanation: "Vitamin D is synthesized in the skin when exposed to sunlight." },
      { question: "What nutrient is essential for muscle growth?", options: ["Protein", "Carbs", "Fat", "Vitamin C"], answer: "Protein", explanation: "Proteins are the building blocks for muscle repair and growth." },
      { question: "How many hours of sleep are recommended for adults?", options: ["7-9 hours", "5-6 hours", "10-12 hours", "4-5 hours"], answer: "7-9 hours", explanation: "Adults need 7-9 hours of sleep for optimal health and function." },
      { question: "Which exercise improves cardiovascular health?", options: ["Running", "Weight lifting", "Yoga", "Stretching"], answer: "Running", explanation: "Cardio exercises like running strengthen the heart and lungs." },
      { question: "Which mineral is important for strong bones and teeth?", options: ["Calcium", "Iron", "Potassium", "Magnesium"], answer: "Calcium", explanation: "Calcium is vital for bone density and dental health." },
      { question: "What percentage of the human body is water?", options: ["60-70%", "30-40%", "80-90%", "10-20%"], answer: "60-70%", explanation: "Around two-thirds of the human body is composed of water." },
      { question: "What type of fat is considered healthy?", options: ["Unsaturated fat", "Trans fat", "Saturated fat", "Processed fat"], answer: "Unsaturated fat", explanation: "Unsaturated fats (from nuts, fish, oils) support heart health." },
      { question: "Which exercise builds flexibility?", options: ["Yoga", "Sprinting", "Cycling", "Bench press"], answer: "Yoga", explanation: "Yoga enhances flexibility, balance, and reduces stress." },
      { question: "What is BMI used to measure?", options: ["Body fat", "Muscle mass", "Hydration", "Energy"], answer: "Body fat", explanation: "BMI estimates body fat based on weight and height." },
      { question: "Which nutrient provides the most energy per gram?", options: ["Fat", "Protein", "Carbohydrates", "Fiber"], answer: "Fat", explanation: "Fat provides 9 kcal per gram, more than protein or carbs." }
    ]
  }



};




if (document.getElementById("start-btn")) {
  document.getElementById("start-btn").onclick = () => {
    let username = document.getElementById("username").value.trim();
    if (!username) {
      alert("⚠️ Please enter your nickname before starting!");
      return;
    }
    localStorage.setItem("quizUsername", username);
    window.location.href = "subjects.html";
  };
}


function selectSubject(subject) {
  localStorage.setItem("quizSubject", subject);
  window.location.href = "quiz.html";
}


if (window.location.pathname.includes("quiz.html")) {
  window.onload = () => {
    currentSubject = localStorage.getItem("quizSubject");
    if (!currentSubject) window.location.href = "subjects.html";
    startQuiz(currentSubject);
  };
}


if (window.location.pathname.includes("result.html")) {
  window.onload = () => {
    let result = JSON.parse(localStorage.getItem("lastResult"));
    if (!result) window.location.href = "subjects.html";
    document.getElementById("score").innerText = result.username;
    document.getElementById("percentage").innerText =
      `You scored ${result.finalScore} out of ${result.totalQuestions} (${result.percentage}%)`;
    document.getElementById("result-feedback").innerText = result.feedback;
  };
}

function goBack() {
  window.history.back();
}


function updateLeaderboard() {
  let container = document.getElementById('leaderboard-sections');
  if (!container) return;
  container.innerHTML = '';

  const subjectNames = {
    general: "General Knowledge",
    math: "Mathematics",
    science: "Science",
    computerScience: "Computer Science",
    Logic: "Logic & puzzles",
    Health: "Health & Fitness"
  };

  Object.keys(subjectNames).forEach(subject => {
    let leaderboard = JSON.parse(localStorage.getItem(subject)) || [];
    let section = document.createElement('div');
    section.classList.add('leaderboard-section');

    let title = document.createElement('h3');
    title.innerText = subjectNames[subject];
    section.appendChild(title);

    let table = document.createElement('table');
    table.innerHTML = `
      <thead><tr><th>Name</th><th>Score</th></tr></thead><tbody></tbody>
    `;

    let tbody = table.querySelector('tbody');
    if (leaderboard.length > 0) {
      leaderboard.forEach(entry => {
        let row = document.createElement('tr');
        row.innerHTML = `<td>${entry.name}</td><td>${entry.score}</td>`;
        tbody.appendChild(row);
      });
    } else {
      let row = document.createElement('tr');
      row.innerHTML = `<td colspan="2">No scores yet</td>`;
      tbody.appendChild(row);
    }

    section.appendChild(table);
    container.appendChild(section);
  });
}


if (window.location.pathname.includes("index.html")) {
  window.onload = () => {
    updateLeaderboard(); 
  };
}


function saveLeaderboard(subject, score) {
  let leaderboard = JSON.parse(localStorage.getItem(subject)) || [];
  let username = localStorage.getItem("quizUsername") || "Guest";

  
  leaderboard.push({ name: username, score });

  leaderboard.sort((a, b) => b.score - a.score);
  localStorage.setItem(subject, JSON.stringify(leaderboard.slice(0, 5)));
}



function shuffleArray(arr) {
  let array = [...arr];
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

function permute(arr) {
  let results = [];
  function backtrack(path, options) {
    if (options.length === 0) { results.push(path); return; }
    for (let i = 0; i < options.length; i++) {
      backtrack(path.concat(options[i]), options.slice(0, i).concat(options.slice(i + 1)));
    }
  }
  backtrack([], arr);
  return results;
}

function getRandomPermutationQuestions(questions) {
  if (questions.length > 6) return shuffleArray(questions);
  let indices = questions.map((_, i) => i);
  let allPerms = permute(indices);
  let randomOrder = allPerms[Math.floor(Math.random() * allPerms.length)];
  return randomOrder.map(i => questions[i]);
}


function startQuiz(subject) {
  currentSubject = subject;

  const subjectTitleEl = document.getElementById('quiz-subject-title');
  const subjectDisplayName = {
    general: "General Knowledge",
    math: "Mathematics",
    science: "Science"
  };
  if (subjectTitleEl) subjectTitleEl.innerText = subjectDisplayName[subject] || subject;

  sectionKeys = Object.keys(quizData[subject]);
  currentSection = 0;
  score = 0;

  renderSectionNav();
  loadSection(currentSection);
}


function renderSectionNav() {
  if (!sectionNav) return;
  sectionNav.innerHTML = '';
  sectionKeys.forEach((sec, index) => {
    const btn = document.createElement('button');
    btn.innerText = categoryNames[sec] || sec;
    btn.className = 'section-btn';
    btn.onclick = () => loadSection(index);
    sectionNav.appendChild(btn);
  });
  highlightActiveSection();
}

function highlightActiveSection() {
  if (!sectionNav) return;
  const buttons = sectionNav.querySelectorAll('.section-btn');
  buttons.forEach((btn, i) => {
    if (i === currentSection) btn.classList.add('active-section');
    else btn.classList.remove('active-section');
  });
}


function loadSection(sectionIndex) {
  currentSection = sectionIndex;
  highlightActiveSection();

  const subjectTitleEl = document.getElementById('quiz-subject-title');
  const sectionTitleEl = document.getElementById('quiz-section-title');

  const subjectDisplayName = {
    general: "General Knowledge",
    math: "Mathematics",
    science: "Science"
  };
  const sectionName = categoryNames[sectionKeys[currentSection]] || sectionKeys[currentSection];

  if (subjectTitleEl) subjectTitleEl.innerText = subjectDisplayName[currentSubject] || currentSubject;
  if (sectionTitleEl) sectionTitleEl.innerText = `Section: ${sectionName}`;

  const rawQuestions = quizData[currentSubject][sectionKeys[currentSection]];
  currentQuiz = getRandomPermutationQuestions(rawQuestions);
  currentQuiz.forEach(q => q.options = shuffleArray(q.options));
  currentQuestion = 0;

  loadQuestion();
}


function loadQuestion() {
  if (!questionEl) return;
  feedbackEl.innerText = '';
  explanationEl.innerText = '';
  nextBtn.style.display = 'none';
  nextSectionBtn.style.display = 'none';

  const q = currentQuiz[currentQuestion];
  questionEl.innerText = q.question;
  progressEl.innerText = `Question ${currentQuestion + 1} of ${currentQuiz.length}`;

  optionsEl.innerHTML = '';
  q.options.forEach(option => {
    const li = document.createElement('li');
    li.innerText = option;
    li.onclick = () => selectAnswer(option, li, q.explanation);
    optionsEl.appendChild(li);
  });

  startTimer();
  updateProgressBar();
}


function updateProgressBar() {
  const percent = ((currentQuestion) / currentQuiz.length) * 100;
  progressBarEl.style.width = percent + "%";
}


function selectAnswer(selected, li, explanation) {
  clearInterval(timer);
  const correct = currentQuiz[currentQuestion].answer;

  
  document.querySelectorAll('.options-list li').forEach(item => item.onclick = null);

  if (selected === correct) {
    score++;
    if (li) li.classList.add('correct'); 
  } else {
    if (li) li.classList.add('wrong');   
    
    document.querySelectorAll('.options-list li').forEach(item => {
      if (item.innerText === correct) item.classList.add('correct');
    });
  }

  if (explanation) {
    explanationEl.innerHTML = `<span class="bold-label">Explanation:<br><br></span> ${explanation}`;
  }


  
  if (currentQuestion < currentQuiz.length - 1) {
    nextBtn.style.display = 'inline-block';
  } else if (currentSection < sectionKeys.length - 1) {
    nextSectionBtn.style.display = 'inline-block';
  } else {
    nextSectionBtn.style.display = 'inline-block';
    nextSectionBtn.innerText = "Finish Quiz";
  }
}




if (nextBtn) {
  nextBtn.onclick = () => {
    currentQuestion++;
    if (currentQuestion < currentQuiz.length) {
      loadQuestion();
    }
  };
}


if (nextSectionBtn) {
  nextSectionBtn.onclick = () => {
    currentSection++;
    if (currentSection < sectionKeys.length) {
      loadSection(currentSection);
    } else {
      showResult();
    }
  };
}


function startTimer() {
  timeLeft = timePerQuestion;
  timerBar.style.width = "100%";
  timerBar.style.background = "#673ab7";
  clearInterval(timer);
  timer = setInterval(() => {
    timeLeft--;
    let percent = (timeLeft / timePerQuestion) * 100;
    timerBar.style.width = percent + "%";
    if (percent < 50) timerBar.style.background = "#ff9800";
    if (percent < 20) timerBar.style.background = "#f44336";
    if (timeLeft <= 0) {
      clearInterval(timer);
      selectAnswer(null, null, currentQuiz[currentQuestion].explanation);
    }
  }, 1000);
}


function showResult() {
  let username = localStorage.getItem("quizUsername") || "Guest";
  let totalQuestions = sectionKeys.reduce((acc, sec) => acc + quizData[currentSubject][sec].length, 0);
  let finalScore = score;
  let percentage = Math.round((finalScore / totalQuestions) * 100);

  let feedback;
  if (percentage >= 80) feedback = "🏆 Excellent!";
  else if (percentage >= 60) feedback = "🎉 Great job!";
  else if (percentage >= 40) feedback = "👍 Nice job, keep improving!";
  else feedback = "💪 Don't give up, try again!";

  localStorage.setItem("lastResult", JSON.stringify({
    username,
    finalScore,
    totalQuestions,
    percentage,
    feedback
  }));

  saveLeaderboard(currentSubject, finalScore);
  window.location.href = "result.html";
}


function restartQuiz() {
  localStorage.removeItem("lastResult");
  window.location.href = "subjects.html";
}





const navLinks = document.querySelectorAll('.nav-link');
const sections = document.querySelectorAll('#home-section, #leaderboard, #feedback-1');
const feedbackDisplay = document.getElementById('feedback-display');

function showSection(targetId) {
  sections.forEach(sec => {
    if (sec.id === targetId) {
      sec.style.display = 'block';        
      setTimeout(() => sec.classList.add('active'), 10); 
    } else {
      sec.classList.remove('active');      
      setTimeout(() => sec.style.display = 'none', 500); 
    }
  });

  navLinks.forEach(link => {
    link.classList.toggle('active', link.dataset.target === targetId);
  });

  
  if (targetId === 'home-section') {
    feedbackDisplay.style.display = 'flex';
    loadFeedback(); 
  } else {
    feedbackDisplay.style.display = 'none';
  }

  
  if (targetId === 'leaderboard') updateLeaderboard();
}


showSection('home-section');

navLinks.forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    showSection(link.dataset.target);
  });
});


function loadFeedback() {
  const feedbackList = JSON.parse(localStorage.getItem('feedbacks')) || [];

  if (feedbackList.length === 0) {
    feedbackDisplay.innerHTML = "<div class='feedback-item'><p>No feedback yet. Be the first!</p></div>";
    return;
  }

  feedbackDisplay.innerHTML = '';
  feedbackList.forEach(item => {
    const feedbackItem = document.createElement('div');
    feedbackItem.classList.add('feedback-item');

    let starsHTML = '';
    for (let i = 1; i <= 5; i++) {
      starsHTML += `<span class="display-star ${i <= item.rating ? 'filled' : ''}">&#9733;</span>`;
    }

    feedbackItem.innerHTML = `
      <h2>What Users Say...</h2>
      <div class="feedback-card">
        <p>"${item.text}"</p>
        <div class="stars"><b style="color: #01f1e9ff;">Rating:</b> ${starsHTML}</div>
        <h4>- ${item.name}</h4>
      </div>
    `;

    feedbackDisplay.appendChild(feedbackItem);
  });

  
  const firstClone = feedbackDisplay.children[0].cloneNode(true);
  feedbackDisplay.appendChild(firstClone);

  let carouselIndex = 0;
  const totalItems = feedbackList.length + 1; 

  function slideTo(index) {
    feedbackDisplay.style.transition = 'transform 0.5s ease-in-out';
    feedbackDisplay.style.transform = `translateX(-${index * 100}%)`;
  }

  function resetToStart() {
    feedbackDisplay.style.transition = 'none';
    feedbackDisplay.style.transform = 'translateX(0%)';
    carouselIndex = 0;
  }

  slideTo(carouselIndex);

  if (window.carouselInterval) clearInterval(window.carouselInterval);
  window.carouselInterval = setInterval(() => {
    carouselIndex++;
    slideTo(carouselIndex);

    if (carouselIndex === totalItems - 1) {
      setTimeout(resetToStart, 500); 
    }
  }, 4000);
}





const stars = document.querySelectorAll('.star');
const ratingInput = document.getElementById('rating');

stars.forEach(star => {
  star.addEventListener('click', () => {
    const value = parseInt(star.dataset.value);

    
    if (ratingInput.value == value) {
      ratingInput.value = 0;
      stars.forEach(s => s.classList.remove('selected'));
      return;
    }

    
    ratingInput.value = value;

    
    stars.forEach(s => s.classList.remove('selected'));
    stars.forEach(s => {
      if (parseInt(s.dataset.value) <= value) {
        s.classList.add('selected');
      }
    });
  });
});



feedbackForm.addEventListener('submit', function (e) {
  e.preventDefault();

  const name = document.getElementById('name').value.trim();
  const feedbackText = document.getElementById('feedbackText').value.trim();
  const rating = parseInt(document.getElementById('rating').value);

  if (!name || !feedbackText || rating === 0) {
    alert("Please fill in name, feedback, and give a rating.");
    return;
  }

  const newFeedback = { name, text: feedbackText, rating };

  const feedbackList = JSON.parse(localStorage.getItem('feedbacks')) || [];
  feedbackList.unshift(newFeedback);
  localStorage.setItem('feedbacks', JSON.stringify(feedbackList));

  feedbackForm.reset();
  ratingInput.value = 0;
  stars.forEach(star => star.classList.remove('selected'));

  showSection('home-section');
  loadFeedback();
});

window.addEventListener('DOMContentLoaded', () => {
  loadFeedback();
});
const contactForm = document.getElementById('contactForm');
const contactResponse = document.getElementById('contact-response');

if (contactForm) {
  contactForm.addEventListener('submit', function(e) {
    e.preventDefault();

    const name = document.getElementById('contact-name').value.trim();
    const email = document.getElementById('contact-email').value.trim();
    const message = document.getElementById('contact-message').value.trim();

    if (!name || !email || !message) {
      contactResponse.style.display = "block";
      contactResponse.style.color = "red";
      contactResponse.textContent = "⚠️ Please fill all fields.";
      return;
    }

    
    const contactMessages = JSON.parse(localStorage.getItem('contactMessages')) || [];
    contactMessages.unshift({ name, email, message });
    localStorage.setItem('contactMessages', JSON.stringify(contactMessages));

    contactResponse.style.display = "block";
    contactResponse.style.color = "lightgreen";
    contactResponse.textContent = "✅ Thank you! Your message has been sent.";
    
    contactForm.reset();
  });
}
function showSection(targetId) {
  sections.forEach(sec => {
    if (sec.id === targetId) {
      sec.style.display = 'block';        
      setTimeout(() => sec.classList.add('active'), 10); 
    } else {
      sec.classList.remove('active');      
      setTimeout(() => sec.style.display = 'none', 500); 
    }
  });

  navLinks.forEach(link => {
    link.classList.toggle('active', link.dataset.target === targetId);
  });

  
  const feedbackDisplay = document.getElementById('feedback-display');
  const contactSection = document.getElementById('contact-section');

  if (targetId === 'home-section') {
    if (feedbackDisplay) feedbackDisplay.style.display = 'flex';
    if (contactSection) contactSection.style.display = 'block';
    loadFeedback();
  } else {
    if (feedbackDisplay) feedbackDisplay.style.display = 'none';
    if (contactSection) contactSection.style.display = 'none';
  }

 
  if (targetId === 'leaderboard') updateLeaderboard();
}
