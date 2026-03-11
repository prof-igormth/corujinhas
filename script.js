const dadosMapa = [
  {
    id: 1, icon: "⭐", titulo: "Conceitos Básicos", desc: "Aprenda a lidar com o dinheiro.", offset: "translate-x-0",
    licoes: [
      { pergunta: "O que significa educação financeira?", opcoes: [{ texto: "Guardar dinheiro", correta: false }, { texto: "Usar dinheiro com inteligência", correta: true }, { texto: "Comprar tudo que vê", correta: false }] },
      { pergunta: "O que é uma necessidade?", opcoes: [{ texto: "Gasto essencial (comida)", correta: true }, { texto: "Roupa de marca", correta: false }, { texto: "Viagem cara", correta: false }] },
      { pergunta: "O que é um orçamento?", opcoes: [{ texto: "Plano de ganhos e gastos", correta: true }, { texto: "Lista de desejos", correta: false }, { texto: "Cartão de crédito", correta: false }] },
      { pergunta: "Quanto devemos poupar?", opcoes: [{ texto: "Nada", correta: false }, { texto: "Pelo menos 10%", correta: true }, { texto: "Tudo o que ganha", correta: false }] },
      { pergunta: "O que é meta de longo prazo?", opcoes: [{ texto: "Lanche de hoje", correta: false }, { texto: "Festa amanhã", correta: false }, { texto: "Compra da casa", correta: true }] }
    ]
  },
  { id: 2, icon: "📖", titulo: "Leitura de Boletos", desc: "Evite juros e taxas.", offset: "translate-x-10", licoes: [] }
];

let estadoUsuario = JSON.parse(localStorage.getItem('corujinha_final')) || { 
  nivelAtual: 1, licaoAtual: 0, gemas: 0, energia: 5, ultimaPerdaEnergia: null 
};

let faseId = null, indiceLocal = 0, selecionada = null, timer = null;

function salvar() { localStorage.setItem('corujinha_final', JSON.stringify(estadoUsuario)); }

function mudarTela(id) {
  document.querySelectorAll('.tela').forEach(t => t.classList.remove('ativa'));
  document.getElementById(id).classList.add('ativa');
  const h = document.getElementById('cabecalho');
  const semH = ['tela-inicio', 'tela-diagnostico', 'tela-licao', 'tela-sucesso'];
  semH.includes(id) ? h.classList.add('escondido') : h.classList.remove('escondido');
  if (id === 'tela-mapa') { desenharMapa(); atualizarTopo(); verificarEnergia(); }
}

function atualizarTopo() {
  document.getElementById('texto-gemas').innerText = estadoUsuario.gemas;
  document.getElementById('texto-energia').innerText = estadoUsuario.energia;
}

function verificarEnergia() {
  if (estadoUsuario.energia <= 0 && estadoUsuario.ultimaPerdaEnergia) {
    const agora = new Date().getTime(), diff = agora - estadoUsuario.ultimaPerdaEnergia, dia = 86400000;
    if (diff >= dia) { 
        estadoUsuario.energia = 5; estadoUsuario.ultimaPerdaEnergia = null; salvar(); atualizarTopo(); 
    } else { 
        iniciarTimer(dia - diff); 
    }
  }
}

function iniciarTimer(duracao) {
  clearInterval(timer);
  const campo = document.getElementById('relogio-energia');
  timer = setInterval(() => {
    let h = Math.floor(duracao / 3600000), m = Math.floor((duracao % 3600000) / 60000), s = Math.floor((duracao % 60000) / 1000);
    campo.innerText = `${h.toString().padStart(2,'0')}:${m.toString().padStart(2,'0')}:${s.toString().padStart(2,'0')}`;
    duracao -= 1000;
    if (duracao < 0) { clearInterval(timer); estadoUsuario.energia = 5; salvar(); fecharAvisoEnergia(); atualizarTopo(); }
  }, 1000);
}

function desenharMapa() {
  const container = document.getElementById('caminho-trilha');
  container.innerHTML = '';
  dadosMapa.forEach(f => {
    const comp = f.id < estadoUsuario.nivelAtual, curr = f.id === estadoUsuario.nivelAtual, lock = f.id > estadoUsuario.nivelAtual;
    let moedas = '<div class="flex gap-1 mt-2">';
    for(let i=0; i<5; i++) {
      let cor = (comp || (curr && i < estadoUsuario.licaoAtual)) ? "bg-[#F4C542] border-[#d4a522]" : "bg-[#BCA6D3] border-[#7A5CA0]";
      moedas += `<div class="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full border ${cor}"></div>`;
    }
    moedas += '</div>';
    container.insertAdjacentHTML('beforeend', `
      <div class="relative w-full flex justify-center py-3">
        <div class="${f.offset} flex flex-col items-center">
          <button onclick="abrirGaveta(${f.id})" ${lock?'disabled':''} class="circulo-fase w-14 h-14 sm:w-16 sm:h-16 rounded-full border-2 ${lock?'fase-bloqueada':comp?'fase-concluida':'fase-atual'} text-xl sm:text-2xl flex items-center justify-center">${lock?'🔒':comp?'✔️':f.icon}</button>
          ${moedas}
        </div>
      </div>`);
  });
}

function abrirGaveta(id) {
  if (estadoUsuario.energia <= 0) { mostrarAvisoEnergia(); return; }
  faseId = id; const f = dadosMapa.find(x => x.id === id);
  document.getElementById('titulo-gaveta').innerText = f.titulo;
  document.getElementById('desc-gaveta').innerText = f.desc;
  document.getElementById('fundo-escuro').classList.add('visivel');
  document.getElementById('gaveta-mapa').classList.add('visivel');
}

function comecarLicao() {
  fecharGaveta();
  indiceLocal = (faseId === estadoUsuario.nivelAtual) ? estadoUsuario.licaoAtual : 0;
  mudarTela('tela-licao');
  renderizar();
}

function renderizar() {
  const f = dadosMapa.find(x => x.id === faseId), l = f.licoes[indiceLocal];
  document.getElementById('barra-progresso').style.width = `${(indiceLocal/f.licoes.length)*100}%`;
  document.getElementById('energia-licao').innerText = estadoUsuario.energia;
  document.getElementById('botao-acao-licao').disabled = true;
  document.getElementById('area-pergunta').innerHTML = `
    <h1 class="text-lg sm:text-xl font-black mb-6 text-center">${l.pergunta}</h1>
    <div class="space-y-3">${l.opcoes.map((o,i)=>`<button onclick="selecionar(${i},${o.correta})" class="opcao-pergunta botao-3d w-full p-4 border-2 rounded-2xl text-left font-bold border-gray-200 text-[#1C2A4D] text-sm sm:text-base">${o.texto}</button>`).join('')}</div>`;
}

function selecionar(i, correta) {
  selecionada = correta;
  document.querySelectorAll('.opcao-pergunta').forEach(b => b.classList.remove('bg-[#BCA6D3]/20', 'border-[#7A5CA0]'));
  document.querySelectorAll('.opcao-pergunta')[i].classList.add('bg-[#BCA6D3]/20', 'border-[#7A5CA0]');
  document.getElementById('botao-acao-licao').disabled = false;
}

function avancarLicao() {
  const o = document.getElementById('aviso-resultado'), i = document.getElementById('icone-resultado'), t = document.getElementById('titulo-resultado'), b = document.getElementById('botao-continuar-resultado');
  if (selecionada) {
    o.className = "gaveta-baixo bg-[#d7ffb8] text-[#58a700] p-6 pb-10 visivel";
    i.innerHTML = "✓"; i.className = "w-12 h-12 rounded-full flex items-center justify-center bg-[#58cc02] text-white";
    t.innerText = "Excelente!"; b.className = "botao-3d w-full py-3.5 rounded-2xl font-black text-white bg-[#58cc02]";
    b.onclick = () => {
      o.classList.remove('visivel');
      if (faseId === estadoUsuario.nivelAtual) { estadoUsuario.licaoAtual++; estadoUsuario.gemas += 5; }
      if (estadoUsuario.licaoAtual >= 5) mudarTela('tela-sucesso'); else mudarTela('tela-mapa');
      salvar();
    };
  } else {
    estadoUsuario.energia--; if (estadoUsuario.energia <= 0) estadoUsuario.ultimaPerdaEnergia = new Date().getTime();
    salvar(); atualizarTopo();
    o.className = "gaveta-baixo bg-[#ffdfe0] text-[#ea2b2b] p-6 pb-10 visivel";
    i.innerHTML = "✕"; i.className = "w-12 h-12 rounded-full flex items-center justify-center bg-[#ea2b2b] text-white";
    t.innerText = estadoUsuario.energia <= 0 ? "Energia Esgotada!" : "Ops! Incorreto.";
    b.className = "botao-3d w-full py-3.5 rounded-2xl font-black text-white bg-[#ea2b2b]";
    b.onclick = () => { o.classList.remove('visivel'); if (estadoUsuario.energia <= 0) { mudarTela('tela-mapa'); mostrarAvisoEnergia(); } else renderizar(); };
  }
}

function mostrarAvisoEnergia() { document.getElementById('aviso-energia').classList.add('visivel'); verificarEnergia(); }
function fecharAvisoEnergia() { document.getElementById('aviso-energia').classList.remove('visivel'); }
function fecharGaveta() { document.getElementById('fundo-escuro').classList.remove('visivel'); document.getElementById('gaveta-mapa').classList.remove('visivel'); }
function sairDaLicao() { mudarTela('tela-mapa'); }
function finalizarFase() { estadoUsuario.nivelAtual++; estadoUsuario.licaoAtual = 0; estadoUsuario.gemas += 15; salvar(); mudarTela('tela-mapa'); }
function verAnuncio() { alert("📺 Exibindo anúncio..."); setTimeout(() => { estadoUsuario.energia = Math.min(5, estadoUsuario.energia + 1); salvar(); atualizarTopo(); if(estadoUsuario.energia > 0) fecharAvisoEnergia(); }, 1000); }

mudarTela('tela-inicio');
