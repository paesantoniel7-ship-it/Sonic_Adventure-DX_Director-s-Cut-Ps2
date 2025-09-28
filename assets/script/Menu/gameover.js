// fim de jogo no sonic adventure dx
const font = new Font("default");

// inicia a musica de fundo do game over
Media.playMusic("Game Over.wav", true);

// inicia o loop do game over
os.setInterval(() => {
  Screen.clear();

  font.setStyle("default");
  font.print(200, 200, "Game Over");
  font.print(150, 300, "Pressiona Start para reiniciar");

  Screen.flip();
}, 0); // <-- 0 = sem atraso, roda a cada frame