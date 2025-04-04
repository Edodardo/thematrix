// Seleciona o elemento <canvas> do HTML e obtém o contexto 2D para desenhar
const canvas = document.getElementById('matrix');
const ctx = canvas.getContext('2d');

// Seleciona o input e o elemento onde o texto será exibido
const input = document.getElementById('input');
const output = document.getElementById('output');



// Adiciona um evento para capturar o texto enquanto o usuário digita
input.addEventListener('input', () => {
    output.textContent = input.value; // Atualiza o texto do elemento #output
    if(output.textContent == "Joana"){
        output.textContent = "Amor da Minha Vida ❤"
    }
});

// Define a largura e altura do canvas para ocupar toda a janela do navegador
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Define os caracteres que serão usados no efeito (letras e números)
const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';

// Define o tamanho da fonte em pixels
const fontSize = 16;

// Calcula o número de colunas com base na largura do canvas e no tamanho da fonte
const columns = canvas.width / fontSize;

// Cria um array para rastrear a posição vertical de cada "gota" em cada coluna
const drops = Array(Math.floor(columns)).fill(1);

// Função principal que desenha o efeito no canvas
function draw() {
  // Preenche o canvas com um fundo preto semi-transparente para criar o efeito de "rastro"
  ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  // Define a cor do texto como verde e a fonte como monoespaçada
  ctx.fillStyle = '#0F0';
  ctx.font = `${fontSize}px monospace`;

  // Itera sobre cada coluna para desenhar as letras
  drops.forEach((y, x) => {
    // Escolhe uma letra aleatória da string `letters`
    const text = letters.charAt(Math.floor(Math.random() * letters.length));

    // Desenha a letra na posição correspondente
    ctx.fillText(text, x * fontSize, y * fontSize);

    // Se a gota ultrapassou a altura do canvas ou aleatoriamente (para variar o efeito),
    // reinicia a posição da gota no topo
    if (y * fontSize > canvas.height && Math.random() > 0.975) {
      drops[x] = 0;
    }

    // Move a gota para baixo, incrementando sua posição vertical
    drops[x]++;
  });
}

// Define um intervalo para chamar a função `draw` a cada 50ms, criando o efeito animado
setInterval(draw, 50);