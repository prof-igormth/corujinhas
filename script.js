// --- DADOS DO MAPA (8 NÓS / 40 LIÇÕES DA PLANILHA) ---
const dadosMapa = [
  { "id": 1, "icon": "⭐", "titulo": "Fundamentos I", "desc": "Entenda renda, despesa e o básico.", "offset": "translate-x-0",
    "licoes": [
      { "pergunta": "O que é renda e despesa", "opcoes": [{ "texto": "Renda é salário, despesa é gasto", "correta": true }, { "texto": "Renda é dívida", "correta": false }, { "texto": "Renda é prejuízo", "correta": false }] },
      { "pergunta": "Necessidade vs. desejo", "opcoes": [{ "texto": "Necessidade é essencial (moradia)", "correta": true }, { "texto": "Desejo é comida", "correta": false }, { "texto": "Ambos são essenciais", "correta": false }] },
      { "pergunta": "Orçamento simples", "opcoes": [{ "texto": "Registrar entradas e saídas", "correta": true }, { "texto": "Ignorar pequenos gastos", "correta": false }, { "texto": "Somar apenas dívidas", "correta": false }] },
      { "pergunta": "A importância de anotar gastos", "opcoes": [{ "texto": "Criar o hábito de controle", "correta": true }, { "texto": "Anotar só compras grandes", "correta": false }, { "texto": "Não anotar nada", "correta": false }] },
      { "pergunta": "Primeiros passos para poupar", "opcoes": [{ "texto": "Guardar pelo menos 10%", "correta": true }, { "texto": "Gastar toda a renda", "correta": false }, { "texto": "Pedir dinheiro", "correta": false }] }
    ]
  },
  { "id": 2, "icon": "📈", "titulo": "Controle 2", "desc": "Gatilhos de consumo e reserva.", "offset": "translate-x-12",
    "licoes": [
      { "pergunta": "Compras por impulso", "opcoes": [{ "texto": "Planejar compras antecipadamente", "correta": true }, { "texto": "Comprar sem pensar", "correta": false }, { "texto": "Usar crédito sempre", "correta": false }] },
      { "pergunta": "Planejamento semanal", "opcoes": [{ "texto": "Definir limites de gasto", "correta": true }, { "texto": "Gastar sem limite", "correta": false }, { "texto": "Não controlar", "correta": false }] },
      { "pergunta": "Entendendo juros e dívidas", "opcoes": [{ "texto": "Juros aumentam sua dívida", "correta": true }, { "texto": "Juros reduzem a dívida", "correta": false }, { "texto": "Juros são sempre bons", "correta": false }] },
      { "pergunta": "Reserva de emergência", "opcoes": [{ "texto": "Guardar para imprevistos", "correta": true }, { "texto": "Guardar só 1 real", "correta": false }, { "texto": "Não guardar nada", "correta": false }] },
      { "pergunta": "Reduzir gasto desnecessário", "opcoes": [{ "texto": "Cancelar o que não usa", "correta": true }, { "texto": "Manter todas as assinaturas", "correta": false }, { "texto": "Gastar ainda mais", "correta": false }] }
    ]
  },
  { "id": 3, "icon": "🛒", "titulo": "Consumo 3", "desc": "Preços, Cartão e Crédito.", "offset": "translate-x-20",
    "licoes": [
      { "pergunta": "Comparar preços", "opcoes": [{ "texto": "Pesquisar antes de comprar", "correta": true }, { "texto": "Comprar o primeiro", "correta": false }, { "texto": "Ignorar descontos", "correta": false }] },
      { "pergunta": "Impacto do Cartão de Crédito", "opcoes": [{ "texto": "Pode gerar dívidas se não pagar", "correta": true }, { "texto": "É dinheiro grátis", "correta": false }, { "texto": "Não cobra juros", "correta": false }] },
      { "pergunta": "Crédito bom vs. ruim", "opcoes": [{ "texto": "Bom: Estudo / Ruim: Luxo", "correta": true }, { "texto": "Bom: Viagem", "correta": false }, { "texto": "Ambos são ruins", "correta": false }] },
      { "pergunta": "Estratégias anti-dívida", "opcoes": [{ "texto": "Planejar os gastos do mês", "correta": true }, { "texto": "Usar o limite todo", "correta": false }, { "texto": "Ignorar os boletos", "correta": false }] },
      { "pergunta": "Orçamento Familiar", "opcoes": [{ "texto": "Dividir despesas da casa", "correta": true }, { "texto": "Esconder dívidas", "correta": false }, { "texto": "Gastar sem avisar", "correta": false }] }
    ]
  },
  { "id": 4, "icon": "💰", "titulo": "Investimentos", "desc": "Fazer o dinheiro render.", "offset": "translate-x-12",
    "licoes": [
      { "pergunta": "O que é investir?", "opcoes": [{ "texto": "Fazer o dinheiro render", "correta": true }, { "texto": "Comprar roupas", "correta": false }, { "texto": "Guardar no colchão", "correta": false }] },
      { "pergunta": "Poupança vs. Investimento", "opcoes": [{ "texto": "Poupança rende menos", "correta": true }, { "texto": "Poupança é o melhor", "correta": false }, { "texto": "São exatamente iguais", "correta": false }] },
      { "pergunta": "Tesouro Direto", "opcoes": [{ "texto": "Empréstimo para o Governo", "correta": true }, { "texto": "Um tipo de loteria", "correta": false }, { "texto": "Uma dívida ruim", "correta": false }] },
      { "pergunta": "Rendimento Simples", "opcoes": [{ "texto": "Juros sobre o capital inicial", "correta": true }, { "texto": "Juros sobre juros", "correta": false }, { "texto": "Perda de valor", "correta": false }] },
      { "pergunta": "Meta de Investimento", "opcoes": [{ "texto": "Definir valor e prazo", "correta": true }, { "texto": "Gastar os lucros", "correta": false }, { "texto": "Investir sem objetivo", "correta": false }] }
    ]
  },
  { "id": 5, "icon": "📅", "titulo": "Planejamento", "desc": "Metas e valor do tempo.", "offset": "translate-x-0",
    "licoes": [
      { "pergunta": "Como definir metas?", "opcoes": [{ "texto": "Ter valor e data definidos", "correta": true }, { "texto": "Apenas sonhar", "correta": false }, { "texto": "Gastar tudo hoje", "correta": false }] },
      { "pergunta": "Planejamento Mensal", "opcoes": [{ "texto": "Organizar os próximos 30 dias", "correta": true }, { "texto": "Viver o hoje apenas", "correta": false }, { "texto": "Ignorar as despesas", "correta": false }] },
      { "pergunta": "Guardar Automático", "opcoes": [{ "texto": "Transferência programada", "correta": true }, { "texto": "Esperar sobrar", "correta": false }, { "texto": "Não poupar nunca", "correta": false }] },
      { "pergunta": "Lidar com Imprevistos", "opcoes": [{ "texto": "Usar reserva de emergência", "correta": true }, { "texto": "Pegar um empréstimo", "correta": false }, { "texto": "Entrar em pânico", "correta": false }] },
      { "pergunta": "O Valor do Tempo", "opcoes": [{ "texto": "Juros compostos premiam o tempo", "correta": true }, { "texto": "O tempo não importa", "correta": false }, { "texto": "O dinheiro desaparece", "correta": false }] }
    ]
  },
  { "id": 6, "icon": "📝", "titulo": "Orçamento 6", "desc": "Fixas, variáveis e negociação.", "offset": "-translate-x-12",
    "licoes": [
      { "pergunta": "Tipos de Despesas", "opcoes": [{ "texto": "Fixas (Aluguel) / Variáveis (Luz)", "correta": true }, { "texto": "Todas são fixas", "correta": false }, { "texto": "Lazer é sempre fixo", "correta": false }] },
      { "pergunta": "Cortar Supérfluos", "opcoes": [{ "texto": "Identificar desperdícios mensais", "correta": true }, { "texto": "Parar de comprar comida", "correta": false }, { "texto": "Aumentar os gastos", "correta": false }] },
      { "pergunta": "Metas Curtas", "opcoes": [{ "texto": "Objetivos para poucos meses", "correta": true }, { "texto": "Plano de 50 anos", "correta": false }, { "texto": "Não planejar nada", "correta": false }] },
      { "pergunta": "Negociar Preços", "opcoes": [{ "texto": "Pedir desconto no pagamento à vista", "correta": true }, { "texto": "Aceitar o primeiro preço", "correta": false }, { "texto": "Não pesquisar em outras lojas", "correta": false }] },
      { "pergunta": "Pequenos Gastos", "opcoes": [{ "texto": "Muitos gastos pequenos somam muito", "correta": true }, { "texto": "Eles não fazem diferença", "correta": false }, { "texto": "Sempre ajudam a poupar", "correta": false }] }
    ]
  },
  { "id": 7, "icon": "🔐", "titulo": "Segurança", "desc": "PIX e Fraudes Digitais.", "offset": "-translate-x-20",
    "licoes": [
      { "pergunta": "Segurança no PIX", "opcoes": [{ "texto": "Nunca compartilhar as suas senhas", "correta": true }, { "texto": "Mandar foto do cartão", "correta": false }, { "texto": "Ignorar alertas do banco", "correta": false }] },
      { "pergunta": "Débito vs Crédito", "opcoes": [{ "texto": "Débito tira o dinheiro na hora", "correta": true }, { "texto": "Crédito é totalmente grátis", "correta": false }, { "texto": "São exatamente iguais", "correta": false }] },
      { "pergunta": "Evitar Fraudes", "opcoes": [{ "texto": "Conferir o link oficial do site", "correta": true }, { "texto": "Clicar em promoções suspeitas", "correta": false }, { "texto": "Mandar dados por chat", "correta": false }] },
      { "pergunta": "Metas de Médio Prazo", "opcoes": [{ "texto": "Plano financeiro para 1 a 3 anos", "correta": true }, { "texto": "Gastar tudo hoje", "correta": false }, { "texto": "Poupar para daqui a 100 anos", "correta": false }] },
      { "pergunta": "Juros Simples", "opcoes": [{ "texto": "Calculados sempre sobre o principal", "correta": true }, { "texto": "Juros em cima de juros", "correta": false }, { "texto": "Não existem", "correta": false }] }
    ]
  },
  { "id": 8, "icon": "🏆", "titulo": "Futuro", "desc": "Inflação e Salário Líquido.", "offset": "-translate-x-12",
    "licoes": [
      { "pergunta": "Juros Compostos", "opcoes": [{ "texto": "Juros sobre o saldo já acumulado", "correta": true }, { "texto": "Juros sobre o valor inicial", "correta": false }, { "texto": "Sempre taxa zero", "correta": false }] },
      { "pergunta": "O que é Inflação?", "opcoes": [{ "texto": "Aumento contínuo dos preços", "correta": true }, { "texto": "Seu dinheiro valendo mais", "correta": false }, { "texto": "Queda geral de preços", "correta": false }] },
      { "pergunta": "Proteção Inflacionária", "opcoes": [{ "texto": "Investir em títulos atrelados (IPCA)", "correta": true }, { "texto": "Guardar dinheiro em casa", "correta": false }, { "texto": "Ignorar o mercado financeiro", "correta": false }] },
      { "pergunta": "Salário Líquido", "opcoes": [{ "texto": "O que você recebe após descontos", "correta": true }, { "texto": "O valor bruto do contrato", "correta": false }, { "texto": "Apenas o bônus", "correta": false }] },
      { "pergunta": "Férias sem Dívidas", "opcoes": [{ "texto": "Poupar dinheiro com antecedência", "correta": true }, { "texto": "Parcelar no cartão em 24x", "correta": false }, { "texto": "Não planejar nada", "correta": false }] }
    ]
  }
];

// --- NOVA CHAVE DE SAVE: FORÇA RESET PARA CORRIGIR BUGS DE CACHE ---
const SAVE_KEY = 'corujinha_dados_v5';

// FORÇANDO OS VALORES INICIAIS: 0 diamantes e 5 de energia
let estado = JSON.parse(localStorage.getItem(SAVE_KEY)) || { 
  nivel: 1, 
  licao: 0, 
  gemas: 0, 
  energia: 5, 
  ultimaPerda: null 
};

let faseId = null, licaoLocal = 0, selecionada = null, timer = null;

function salvar() { localStorage.setItem(SAVE_KEY, JSON.stringify(estado)); }

function mudarTela(id) {
  document.querySelectorAll('.tela').forEach(t => t.classList.remove('ativa'));
  document.getElementById(id).classList.add('ativa');
  const h = document.getElementById('cabecalho');
  const semH = ['tela-inicio', 'tela-diagnostico', 'tela-licao', 'tela-sucesso'];
  semH.includes(id) ? h.classList.add('escondido') : h.classList.remove('escondido');
  if (id === 'tela-mapa') { desenharMapa(); atualizarTopo(); verificarEnergia(); }
}

function atualizarTopo() {
  document.getElementById('texto-gemas').innerText = estado.gemas;
  document.getElementById('texto-energia').innerText = estado.energia;
}

function verificarEnergia() {
  if (estado.energia <= 0 && estado.ultimaPerda) {
    const agora = new Date().getTime(), diff = agora - estado.ultimaPerda, dia = 86400000;
    if (diff >= dia) { 
        estado.energia = 5; estado.ultimaPerda = null; salvar(); atualizarTopo(); 
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
    if (duracao < 0) { clearInterval(timer); estado.energia = 5; salvar(); fecharAvisoEnergia(); atualizarTopo(); }
  }, 1000);
}

function desenharMapa() {
  const container = document.getElementById('caminho-trilha');
  container.innerHTML = '';
  dadosMapa.forEach(f => {
    const comp = f.id < estado.nivel;
    const curr = f.id === estado.nivel;
    const lock = f.id > estado.nivel;
    
    let moedas = '<div class="flex gap-1 mt-2">';
    for(let i=0; i<5; i++) {
      // REGRA: Pinta a moeda de dourado imediatamente após a lição ser concluída
      let cor = (comp || (curr && i < estado.licao)) ? "bg-[#F4C542] border-[#d4a522]" : "bg-[#BCA6D3] border-[#7A5CA0]";
      moedas += `<div class="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full border ${cor} transition-colors duration-300"></div>`;
    }
    moedas += '</div>';

    container.insertAdjacentHTML('beforeend', `
      <div class="relative w-full flex justify-center py-3">
        <div class="${f.offset} flex flex-col items-center">
          <button onclick="abrirGaveta(${f.id})" class="circulo-fase w-14 h-14 sm:w-16 sm:h-16 rounded-full border-2 ${lock?'fase-bloqueada':comp?'fase-concluida':'fase-atual'} text-xl sm:text-2xl flex items-center justify-center">${lock?'🔒':comp?'✔️':f.icon}</button>
          ${moedas}
        </div>
      </div>`);
  });
}

function abrirGaveta(id) {
  if (id > estado.nivel) {
    alert("🔒 Nível Bloqueado!\n\nVocê precisa completar todas as 5 lições do nó atual para liberar esta fase.");
    return;
  }
  
  if (estado.energia <= 0) { mostrarAvisoEnergia(); return; }
  
  faseId = id; 
  const f = dadosMapa.find(x => x.id === id);
  document.getElementById('titulo-gaveta').innerText = f.titulo;
  document.getElementById('desc-gaveta').innerText = f.desc;
  document.getElementById('fundo-escuro').classList.add('visivel');
  document.getElementById('gaveta-mapa').classList.add('visivel');
}

function comecarLicao() {
  fecharGaveta();
  licaoLocal = (faseId === estado.nivel) ? estado.licao : 0;
  mudarTela('tela-licao');
  renderizar();
}

function renderizar() {
  const f = dadosMapa.find(x => x.id === faseId), l = f.licoes[licaoLocal];
  document.getElementById('barra-progresso').style.width = `${(licaoLocal/f.licoes.length)*100}%`;
  document.getElementById('energia-licao').innerText = estado.energia;
  document.getElementById('botao-acao-licao').disabled = true;
  
  // NOVA REGRA: Cria uma cópia das opções e embaralha aleatoriamente!
  const opcoesEmbaralhadas = [...l.opcoes].sort(() => Math.random() - 0.5);

  document.getElementById('area-pergunta').innerHTML = `
    <h1 class="text-lg sm:text-xl font-black mb-6 text-center">${l.pergunta}</h1>
    <div class="space-y-3">
      ${opcoesEmbaralhadas.map((o,i)=>`
        <button onclick="selecionar(${i},${o.correta})" class="opcao-pergunta botao-3d w-full p-4 border-2 rounded-2xl text-left font-bold border-gray-200 text-[#1C2A4D] text-sm sm:text-base">${o.texto}</button>
      `).join('')}
    </div>`;
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
    // ACERTOU
    o.className = "gaveta-baixo bg-[#d7ffb8] text-[#58a700] p-6 pb-10 visivel";
    i.innerHTML = "✓"; i.className = "w-12 h-12 rounded-full flex items-center justify-center bg-[#58cc02] text-white";
    t.innerText = "Excelente!"; b.className = "botao-3d w-full py-3.5 rounded-2xl font-black text-white bg-[#58cc02]";
    b.onclick = () => {
      o.classList.remove('visivel');
      
      if (faseId === estado.nivel) { 
          estado.licao++; 
          if (estado.licao >= 5) {
            mudarTela('tela-sucesso'); 
          } else {
            mudarTela('tela-mapa');
          }
      } else {
          mudarTela('tela-mapa');
      }
      salvar();
    };
  } else {
    // ERROU
    estado.energia--; 
    if (estado.energia <= 0) estado.ultimaPerda = new Date().getTime();
    salvar(); atualizarTopo();
    
    o.className = "gaveta-baixo bg-[#ffdfe0] text-[#ea2b2b] p-6 pb-10 visivel";
    i.innerHTML = "✕"; i.className = "w-12 h-12 rounded-full flex items-center justify-center bg-[#ea2b2b] text-white";
    t.innerText = estado.energia <= 0 ? "Energia Esgotada!" : "Ops! Incorreto.";
    b.className = "botao-3d w-full py-3.5 rounded-2xl font-black text-white bg-[#ea2b2b]";
    b.onclick = () => { 
        o.classList.remove('visivel'); 
        if (estado.energia <= 0) { 
            mudarTela('tela-mapa'); mostrarAvisoEnergia(); 
        } else { 
            renderizar(); 
        } 
    };
  }
}

function mostrarAvisoEnergia() { document.getElementById('aviso-energia').classList.add('visivel'); verificarEnergia(); }
function fecharAvisoEnergia() { document.getElementById('aviso-energia').classList.remove('visivel'); }
function fecharGaveta() { document.getElementById('fundo-escuro').classList.remove('visivel'); document.getElementById('gaveta-mapa').classList.remove('visivel'); }
function sairDaLicao() { mudarTela('tela-mapa'); }

// REGRA: AQUI O ALUNO GANHA O DIAMANTE (+1)
function finalizarFase() { 
  estado.nivel++; 
  estado.licao = 0; 
  estado.gemas += 1; 
  salvar(); 
  mudarTela('tela-mapa'); 
}

function verAnuncio() { 
  alert("📺 Simulando Anúncio... (Ganhou +1 Energia)"); 
  setTimeout(() => { 
    estado.energia = Math.min(5, estado.energia + 1); 
    salvar(); atualizarTopo(); 
    if(estado.energia > 0) fecharAvisoEnergia(); 
  }, 1000); 
}

// Inicia o app
mudarTela('tela-inicio');
