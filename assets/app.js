// ============================================================
// ANATO·PRUEBAS — lógica de la aplicación
// ============================================================

const STORAGE_KEY = "anato-provas-progress-v1";

let state = {
  answered: {}, // { "cardiovascular-0": { selected: 2, correct: true } }
};

function loadState() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) state.answered = JSON.parse(raw).answered || {};
  } catch (e) {
    console.warn("No se pudo leer el progreso guardado:", e);
  }
}

function saveState() {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  } catch (e) {
    console.warn("No se pudo guardar el progreso:", e);
  }
}

function qKey(topicKey, idx) {
  return `${topicKey}-${idx}`;
}

// ---------- Iconos SVG simples por sistema ----------
const ICONS = {
  heart: `<svg viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M24 41C24 41 6 29.5 6 17.5C6 11.7 10.5 8 15 8C19 8 22 10.5 24 14C26 10.5 29 8 33 8C37.5 8 42 11.7 42 17.5C42 29.5 24 41 24 41Z"/><path d="M14 19h5l3 7 4-13 3 6h6" stroke-width="1.6"/></svg>`,
  lungs: `<svg viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M24 8v14"/><path d="M24 22c-2-4-6-6-9-6-4 0-7 3-7 9 0 8 3 14 7 14 3 0 5-2 6-5l3-12"/><path d="M24 22c2-4 6-6 9-6 4 0 7 3 7 9 0 8-3 14-7 14-3 0-5-2-6-5l-3-12"/><circle cx="24" cy="8" r="2.2" fill="currentColor" stroke="none"/></svg>`,
  torso: `<svg viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 6c0 4-3 5-3 9s2 6 2 10-3 6-3 12 4 5 12 5 12 1 12-5-3-8-3-12 2-6 2-10-3-5-3-9"/><path d="M13 15h22M12 24h24"/></svg>`,
  intestine: `<svg viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M10 12c0-3 3-4 5-2s1 6-2 6-5 3-3 6 7 1 7-3"/><path d="M17 19c2 4 8 4 10 0s7-3 9 1-1 7-4 6"/><path d="M32 26c3 1 4 5 1 7s-8 0-8-4 4-5 1-9"/></svg>`,
  liver: `<svg viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M8 20c1-6 7-9 14-8 5-4 13-3 16 2 4 6 1 14-6 16-7 3-17 2-21-3-3-3-4-5-3-7Z"/><circle cx="34" cy="28" r="4"/></svg>`,
  kidney: `<svg viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 8c-7 0-11 6-11 15s4 17 11 17c5 0 6-5 4-9-2-3-1-5 2-5s7 2 9-2 0-9-3-11c2-3 1-5-2-5-3-1-7-1-10 0Z"/></svg>`,
  stethoscope: `<svg viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 6v10c0 5 4 9 9 9s9-4 9-9V6"/><path d="M23 25v6a8 8 0 0 0 16 0v-2"/><circle cx="39" cy="29" r="3"/><path d="M10 6h4M27 6h4" stroke-linecap="round"/></svg>`,
};

// ---------- Render: vista índice ----------

function computeTopicProgress(topicKey) {
  const topic = QUESTION_BANK[topicKey];
  const total = topic.questions.length;
  let done = 0, correct = 0;
  topic.questions.forEach((_, i) => {
    const rec = state.answered[qKey(topicKey, i)];
    if (rec) {
      done++;
      if (rec.correct) correct++;
    }
  });
  return { total, done, correct };
}

function computeGlobalProgress() {
  let total = 0, done = 0, correct = 0;
  ALL_TOPIC_KEYS.forEach(k => {
    const p = computeTopicProgress(k);
    total += p.total;
    done += p.done;
    correct += p.correct;
  });
  return { total, done, correct };
}

function renderGlobalProgress() {
  const { total, done, correct } = computeGlobalProgress();
  const pct = total ? Math.round((done / total) * 100) : 0;
  const circumference = 2 * Math.PI * 26;
  const offset = circumference * (1 - pct / 100);

  document.getElementById("ring-fill").style.strokeDasharray = `${circumference}`;
  document.getElementById("ring-fill").style.strokeDashoffset = `${offset}`;
  document.getElementById("ring-label").textContent = `${pct}%`;

  const text = document.getElementById("global-progress-text");
  text.innerHTML = `<strong>${done}</strong> de <strong>${total}</strong> preguntas respondidas &middot; <strong>${correct}</strong> correctas`;
}

function renderSystemsGrid() {
  const grid = document.getElementById("systems-grid");
  grid.innerHTML = "";

  ALL_TOPIC_KEYS.forEach((key, idx) => {
    const topic = QUESTION_BANK[key];
    const { total, done, correct } = computeTopicProgress(key);
    const pct = total ? Math.round((done / total) * 100) : 0;
    const isComplete = done === total && total > 0;

    const card = document.createElement("button");
    card.className = "system-card" + (isComplete ? " complete" : "");
    card.setAttribute("type", "button");
    card.setAttribute("aria-label", `Abrir ${topic.label}, ${done} de ${total} respondidas`);
    card.innerHTML = `
      <div class="system-card-top">
        <div class="system-icon">${ICONS[topic.icon] || ""}</div>
        <span class="system-fig">FIG. ${idx + 1}</span>
      </div>
      <div>
        <h3 class="system-name">${topic.label}</h3>
        <div class="system-sub">${topic.short}</div>
      </div>
      <div class="system-meta">
        <div class="system-bar"><div class="system-bar-fill" style="width:${pct}%"></div></div>
        <span class="system-count">${done}/${total}</span>
      </div>
    `;
    card.addEventListener("click", () => openQuiz(key));
    grid.appendChild(card);
  });
}

// ---------- Render: vista de quiz ----------

let currentTopicKey = null;

function openQuiz(topicKey) {
  currentTopicKey = topicKey;
  document.getElementById("index-view").classList.add("hidden");
  const quizView = document.getElementById("quiz-view");
  quizView.classList.add("active");
  renderQuiz(topicKey);
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function closeQuiz() {
  document.getElementById("index-view").classList.remove("hidden");
  document.getElementById("quiz-view").classList.remove("active");
  renderSystemsGrid();
  renderGlobalProgress();
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function letterFor(i) {
  return String.fromCharCode(97 + i); // a, b, c, d
}

function renderQuiz(topicKey) {
  const topic = QUESTION_BANK[topicKey];
  const { done, total, correct } = computeTopicProgress(topicKey);

  document.getElementById("quiz-title").textContent = topic.label;
  document.getElementById("quiz-tally").textContent = `${done}/${total} respondidas · ${correct} correctas`;

  const container = document.getElementById("questions-container");
  container.innerHTML = "";

  topic.questions.forEach((item, idx) => {
    const key = qKey(topicKey, idx);
    const rec = state.answered[key];

    const card = document.createElement("article");
    card.className = "question-card" + (rec ? ` answered ${rec.correct ? "correct" : "incorrect"}` : "");
    card.id = `q-${idx}`;

    const head = document.createElement("div");
    head.className = "q-head";
    head.innerHTML = `<span class="q-number">${String(idx + 1).padStart(2, "0")}</span><p class="q-text">${item.q}</p>`;
    card.appendChild(head);

    const optsList = document.createElement("ul");
    optsList.className = "q-options";

    item.options.forEach((opt, optIdx) => {
      const li = document.createElement("li");
      const btn = document.createElement("button");
      btn.type = "button";
      btn.className = "q-option";
      btn.innerHTML = `<span class="q-option-letter">${letterFor(optIdx)}</span><span>${opt}</span>`;

      if (rec) {
        btn.disabled = true;
        if (optIdx === rec.selected && optIdx === item.correct) {
          btn.classList.add("selected-correct");
          btn.querySelector(".q-option-letter").insertAdjacentHTML("afterend", "");
          btn.insertAdjacentHTML("beforeend", `<span class="q-option-mark">✓</span>`);
        } else if (optIdx === rec.selected && optIdx !== item.correct) {
          btn.classList.add("selected-wrong");
          btn.insertAdjacentHTML("beforeend", `<span class="q-option-mark">✗</span>`);
        } else if (optIdx === item.correct) {
          btn.classList.add("reveal-correct");
        }
      } else {
        btn.addEventListener("click", () => handleAnswer(topicKey, idx, optIdx));
      }

      li.appendChild(btn);
      optsList.appendChild(li);
    });

    card.appendChild(optsList);

    if (rec) {
      const fb = document.createElement("div");
      const isCorrect = rec.correct;
      fb.className = `q-feedback ${isCorrect ? "correct" : "incorrect"}`;
      fb.innerHTML = `
        <span class="q-feedback-icon">${isCorrect ? "✓" : "↳"}</span>
        <div>
          <span class="q-feedback-label">${isCorrect ? "Correcto" : "Revisemos esto"}</span>
          ${item.feedback}
        </div>
      `;
      card.appendChild(fb);
    }

    container.appendChild(card);
  });
}

function handleAnswer(topicKey, idx, selectedIdx) {
  const topic = QUESTION_BANK[topicKey];
  const item = topic.questions[idx];
  const isCorrect = selectedIdx === item.correct;
  const key = qKey(topicKey, idx);

  state.answered[key] = { selected: selectedIdx, correct: isCorrect };
  saveState();

  renderQuiz(topicKey);

  // Mantener la vista cerca de la tarjeta respondida
  const card = document.getElementById(`q-${idx}`);
  if (card) {
    const rect = card.getBoundingClientRect();
    if (rect.top < 80 || rect.bottom > window.innerHeight - 40) {
      card.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  }
}

function resetProgress() {
  const ok = window.confirm("¿Borrar todo el progreso guardado? Esta acción no se puede deshacer.");
  if (!ok) return;
  state.answered = {};
  saveState();
  renderGlobalProgress();
  renderSystemsGrid();
  if (currentTopicKey) renderQuiz(currentTopicKey);
}

// ---------- Navegación entre temas (footer del quiz) ----------

function setupFooterNav() {
  const prevBtn = document.getElementById("nav-prev");
  const nextBtn = document.getElementById("nav-next");

  prevBtn.addEventListener("click", () => {
    const i = ALL_TOPIC_KEYS.indexOf(currentTopicKey);
    if (i > 0) openQuiz(ALL_TOPIC_KEYS[i - 1]);
  });
  nextBtn.addEventListener("click", () => {
    const i = ALL_TOPIC_KEYS.indexOf(currentTopicKey);
    if (i < ALL_TOPIC_KEYS.length - 1) openQuiz(ALL_TOPIC_KEYS[i + 1]);
  });
}

function updateFooterNavState() {
  const i = ALL_TOPIC_KEYS.indexOf(currentTopicKey);
  const prevBtn = document.getElementById("nav-prev");
  const nextBtn = document.getElementById("nav-next");
  prevBtn.disabled = i <= 0;
  nextBtn.disabled = i >= ALL_TOPIC_KEYS.length - 1;
  prevBtn.textContent = i > 0 ? `← ${QUESTION_BANK[ALL_TOPIC_KEYS[i - 1]].short}` : "← inicio";
  nextBtn.textContent = i < ALL_TOPIC_KEYS.length - 1 ? `${QUESTION_BANK[ALL_TOPIC_KEYS[i + 1]].short} →` : "fin →";
}

// Envolver renderQuiz para refrescar footer nav también
const _renderQuiz = renderQuiz;
renderQuiz = function (topicKey) {
  _renderQuiz(topicKey);
  updateFooterNavState();
};

// ---------- Inicialización ----------

document.addEventListener("DOMContentLoaded", () => {
  loadState();
  renderGlobalProgress();
  renderSystemsGrid();
  setupFooterNav();

  document.getElementById("back-btn").addEventListener("click", closeQuiz);
  document.getElementById("reset-btn").addEventListener("click", resetProgress);
});
