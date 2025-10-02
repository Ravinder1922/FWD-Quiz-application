
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
    English: "English",
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
  li.onclick = () => selectAnswer(option, li, q.explanation, q.additionalInfo);
  optionsEl.appendChild(li);
});


  startTimer();
  updateProgressBar();
}


function updateProgressBar() {
  const percent = ((currentQuestion) / currentQuiz.length) * 100;
  progressBarEl.style.width = percent + "%";
}


function selectAnswer(selected, li, explanation, additionalInfo) {
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

  explanationEl.innerHTML = `<span class="bold-label">Explanation:</span> ${explanation || ""}`;
  if (additionalInfo) {
    explanationEl.innerHTML += `<br><br><span class="bold-label">Additional Info:</span> ${additionalInfo}`;
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
