const font = new Font("default");
const logo = new Image("sega.png"); // carrega a imagem do logo

let frame = 0;
let musicPlaying = false;

os.setInterval(() => {
  Screen.clear();

  // Título
  font.setStyle("default");
  font.print(50, 200, "Sonic Adventure");

  // Texto piscando
  if (Math.floor(frame / 30) % 2 === 0) {
    font.print(220, 400, "Pressiona Start");
  }

  // Autor
  font.print(200, 30, "Autor: Antoniel");

  // Música de fundo
  if (!musicPlaying) {
    Media.playMusic("Title Screen.wav", true);
    musicPlaying = true;
  }

  // Exibe a imagem do logo
  logo.draw(180, 50); // x=180, y=50 → ajusta conforme o tamanho da imagem

  Screen.flip();
  frame++;
}, 0);

// Intro depois de 10s
os.setTimeout(() => {
  Media.stopMusic();
  Media.playVideo("intro.mp4");
}, 10000);
