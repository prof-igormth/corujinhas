// --- CONTEÚDO EDUCACIONAL DA UNIDADE 1 (Apenas Múltipla Escolha) ---
const mapData = [
  {
    id: 1, 
    icon: "⭐", 
    title: "O que é Educação Financeira?", 
    desc: "Aprenda a usar o dinheiro de forma inteligente.", 
    offset: "translate-x-0",
    subLessons: [
      {
        question: "O que significa educação financeira?",
        options: [
          { text: "Guardar dinheiro sem gastar", correct: false },
          { text: "Aprender a usar o dinheiro de forma inteligente", correct: true },
          { text: "Comprar apenas o que gosta", correct: false }
        ]
      },
      {
        question: "O que é uma necessidade?",
        options: [
          { text: "Um gasto essencial, como comida ou moradia", correct: true },
          { text: "Comprar a roupa da moda", correct: false },
          { text: "Um passeio no fim de semana", correct: false }
        ]
      },
      {
        question: "O que é um orçamento?",
        options: [
          { text: "Um plano para organizar entradas e saídas de dinheiro", correct: true },
          { text: "Uma lista de desejos e sonhos", correct: false },
          { text: "Um tipo de investimento no banco", correct: false }
        ]
      },
      {
        question: "Qual é a regra simples para começar a poupar?",
        options: [
          { text: "Gastar tudo e guardar se sobrar", correct: false },
          { text: "Guardar pelo menos 10% da sua renda", correct: true },
          { text: "Pedir dinheiro emprestado", correct: false }
        ]
      },
      {
        question: "Qual das opções é uma meta de longo prazo?",
        options: [
          { text: "Comprar um celular novo", correct: false },
          { text: "Fazer uma viagem no próximo ano", correct: false },
          { text: "Comprar uma casa", correct: true }
        ]
      }
    ]
  },
  // Nós decorativos (Prontos para receberem lições depois)
  { id: 2, icon: "📖", title: "Leitura de Boletos", desc: "Evite juros e taxas.", offset: "-translate-x-12", subLessons: [] },
  { id: 3, icon: "🎧", title: "Histórias Reais", desc: "Ouça e aprenda com erros.", offset: "-translate-x-20", subLessons: [] }
];

let userState = { currentLevel: 1, gems: 0, energy: 5 };
let activeNodeId = null;
let currentSubIndex = 0;
let selectedOption = null;

function goToScreen(screenId) {
  document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
  document.getElementById(screenId).classList.add('active');
  if (screenId === 'screen-map') { renderMap(); updateTopBar(); }
}

function updateTopBar() {
  document.getElementById('ui-gems').innerText = userState.gems;
  document.getElementById('ui-energy').innerText = userState.energy;
}

function renderMap() {
  const container = document.getElementById('journey-path');
  container.innerHTML = '';

  mapData.forEach((node) => {
    const isCompleted = node.id < userState.currentLevel;
    const isCurrent = node.id === userState.currentLevel;
    const isLocked = node.id > userState.currentLevel;

    let btnClasses = isLocked ? 'node-locked' : isCompleted ? 'node-completed' : 'node-current';
    let displayIcon = isLocked ? '🔒' : isCompleted ? '✔️' : node.icon;

    const nodeHTML = `
      <div class="relative w-full flex justify-center py-3">
        <div class="${node.offset} relative">
          ${isCurrent ? `<div class="absolute -top-14 left-1/2 -translate-x-1/2 bg-white border-2 border-gray-200 text-[#7A5CA0] font-black uppercase text-sm px-4 py-2 rounded-xl shadow-sm z-10 whitespace-nowrap animate-bounce tracking-wider">COMEÇAR<div class="absolute w-0 h-0 border-l-[8px] border-l-transparent border-r-[8px] border-r-transparent border-t-[8px] border-t-white border-b-0 -bottom-[8px] left-1/2 -translate-x-1/2"></div></div>` : ''}
          <button onclick="openSheet(${node.id})" ${isLocked ? 'disabled' : ''} class="node-3d w-[76px] h-[76px] text-[32px] rounded-full flex items-center justify-center border-2 ${btnClasses} shadow-sm z-10">
            ${displayIcon}
          </button>
        </div>
      </div>
    `;
    container.insertAdjacentHTML('beforeend', nodeHTML);
  });
}

function openSheet(id) {
  if (id > userState.currentLevel) return;
  activeNodeId = id;
  const node = mapData.find(n => n.id === id);
  const isCompleted = id < userState.currentLevel;
  
  document.getElementById('sheet-title').innerText = node.title;
  document.getElementById('sheet-desc').innerText = node.desc;
  
  const btn = document.getElementById('btn-start-node');
  if (isCompleted) {
    btn.innerText = "REVISAR";
    btn.className = "btn-3d w-full py-3.5 rounded-2xl font-black text-[17px] uppercase tracking-wider text-[#7A5CA0] bg-white border-2 border-gray-200 border-b-[4px] border-b-gray-300 active:border-b-0";
  } else {
    btn.innerText = "COMEÇAR";
    btn.className = "btn-3d w-full py-3.5 rounded-2xl font-black text-[17px] uppercase tracking-wider text-white bg-[#7A5CA0] border-[#7A5CA0] border-b-[4px] border-b-[#4C5DAA]";
  }

  document.getElementById('modal-overlay').classList.add('show');
  document.getElementById('bottom-sheet').classList.add('show');
}

function closeSheet() {
  document.getElementById('modal-overlay').classList.remove('show');
  document.getElementById('bottom-sheet').classList.remove('show');
}

function startLesson() {
  closeSheet();
  const node = mapData.find(n => n.id === activeNodeId);
  if(!node.subLessons || node.subLessons.length === 0) {
      alert("Nó em desenvolvimento."); return;
  }

  currentSubIndex = 0;
  document.getElementById('lesson-energy').innerText = userState.energy;
  goToScreen('screen-lesson');
  renderLessonPhase();
}

function renderLessonPhase() {
  const node = mapData.find(n => n.id === activeNodeId);
  const subLesson = node.subLessons[currentSubIndex];
  const container = document.getElementById('lesson-content-area');
  const btn = document.getElementById('btn-lesson-action');
  const progress = document.getElementById('lesson-progress');
  
  const totalSteps = node.subLessons.length;
  progress.style.width = `${(currentSubIndex / totalSteps) * 100}%`;
  
  btn.disabled = true;
  selectedOption = null;

  let html = `
    <div class="fade-in">
      <h1 class="text-2xl font-black text-[#1C2A4D] mb-6 leading-tight">${subLesson.question}</h1>
      <div class="space-y-3" id="quiz-options">
        ${subLesson.options.map((opt, i) => `
          <button onclick="selectOption(${i}, ${opt.correct})" class="quiz-btn btn-3d w-full p-4 border-2 border-gray-200 rounded-2xl text-left font-bold text-[17px] text-[#1C2A4D] transition-colors">
            ${opt.text}
          </button>
        `).join('')}
      </div>
    </div>
  `;
  
  btn.innerText = "Verificar";
  btn.className = "btn-3d w-full py-3.5 rounded-2xl font-black text-[17px] uppercase tracking-wider text-gray-400 bg-[#e5e5e5] border-[#e5e5e5]";
  
  container.innerHTML = html;
}

function selectOption(index, isCorrect) {
  selectedOption = isCorrect;
  const btns = document.querySelectorAll('.quiz-btn');
  btns.forEach(b => b.className = "quiz-btn btn-3d w-full p-4 border-2 border-gray-200 rounded-2xl text-left font-bold text-[17px] text-[#1C2A4D]");
  
  btns[index].className = "quiz-btn btn-3d w-full p-4 border-2 border-[#7A5CA0] border-b-[4px] bg-[#BCA6D3]/20 rounded-2xl text-left font-bold text-[17px] text-[#7A5CA0]";
  
  const btn = document.getElementById('btn-lesson-action');
  btn.disabled = false;
  btn.className = "btn-3d w-full py-3.5 rounded-2xl font-black text-[17px] uppercase tracking-wider text-white bg-[#7A5CA0] border-[#7A5CA0] border-b-[#4C5DAA]";
}

function advanceLesson() {
  showFeedbackOverlay(selectedOption);
}

function showFeedbackOverlay(isCorrect) {
  const overlay = document.getElementById('feedback-overlay');
  const icon = document.getElementById('feedback-icon');
  const title = document.getElementById('feedback-title');
  const btnFk = document.getElementById('btn-feedback-continue');
  
  if (isCorrect) {
    userState.energy = Math.min(5, userState.energy + 1);
    document.getElementById('lesson-energy').innerText = userState.energy;

    overlay.className = "bottom-sheet bg-[#d7ffb8] text-[#58a700] p-6 pb-10 flex flex-col gap-4 show";
    icon.innerHTML = "✓"; 
    icon.className = "w-16 h-16 rounded-full flex items-center justify-center text-4xl font-black bg-[#58cc02] text-white";
    title.innerText = "Excelente! +1 ⚡";
    
    btnFk.innerText = "Continuar";
    btnFk.className = "btn-3d w-full py-3.5 rounded-2xl font-black text-[17px] uppercase tracking-wider text-white bg-[#58cc02] border-[#58cc02] border-b-[#58a700]";
    btnFk.onclick = advancePhase; 
  } else {
    userState.energy = Math.max(0, userState.energy - 1);
    document.getElementById('lesson-energy').innerText = userState.energy;
    
    if(userState.energy === 0) {
      overlay.className = "bottom-sheet bg-[#1C2A4D] text-white p-6 pb-10 flex flex-col gap-4 show";
      icon.innerHTML = "💔"; 
      icon.className = "w-16 h-16 rounded-full flex items-center justify-center text-4xl font-black bg-[#F4C542] text-[#1C2A4D]";
      title.innerText = "Acabaram suas energias!";
      
      btnFk.innerText = "Voltar ao Mapa";
      btnFk.className = "btn-3d w-full py-3.5 rounded-2xl font-black text-[17px] uppercase tracking-wider text-[#1C2A4D] bg-[#F4C542] border-[#F4C542] border-b-[#c99f31]";
      btnFk.onclick = () => {
         userState.energy = 5; 
         quitLesson(); 
      };
    } else {
      overlay.className = "bottom-sheet bg-[#ffdfe0] text-[#ea2b2b] p-6 pb-10 flex flex-col gap-4 show";
      icon.innerHTML = "✕"; 
      icon.className = "w-16 h-16 rounded-full flex items-center justify-center text-4xl font-black bg-[#ea2b2b] text-white";
      title.innerText = "Ops! Incorreto.";
      
      btnFk.innerText = "Tentar Novamente";
      btnFk.className = "btn-3d w-full py-3.5 rounded-2xl font-black text-[17px] uppercase tracking-wider text-white bg-[#ff4b4b] border-[#ff4b4b] border-b-[#ea2b2b]";
      btnFk.onclick = retryPhase; 
    }
  }
}

function retryPhase() {
  document.getElementById('feedback-overlay').classList.remove('show');
  
  selectedOption = null;
  const btns = document.querySelectorAll('.quiz-btn');
  btns.forEach(b => b.className = "quiz-btn btn-3d w-full p-4 border-2 border-gray-200 rounded-2xl text-left font-bold text-[17px] text-[#1C2A4D] transition-colors");
  
  const mainBtn = document.getElementById('btn-lesson-action');
  mainBtn.disabled = true;
  mainBtn.innerText = "Verificar";
  mainBtn.className = "btn-3d w-full py-3.5 rounded-2xl font-black text-[17px] uppercase tracking-wider text-gray-400 bg-[#e5e5e5] border-[#e5e5e5]";
}

function advancePhase() {
  document.getElementById('feedback-overlay').classList.remove('show');
  currentSubIndex++;
  
  const node = mapData.find(n => n.id === activeNodeId);
  if (currentSubIndex >= node.subLessons.length) {
    document.getElementById('lesson-progress').style.width = '100%';
    setTimeout(() => goToScreen('screen-success'), 300);
  } else {
    renderLessonPhase();
  }
}

function quitLesson() {
  document.getElementById('feedback-overlay').classList.remove('show');
  goToScreen('screen-map');
}

function finishNode() {
  if (activeNodeId === userState.currentLevel) {
    userState.gems += 15;
    userState.currentLevel++;
  }
  goToScreen('screen-map');
}

// Inicia o app
goToScreen('screen-welcome');
