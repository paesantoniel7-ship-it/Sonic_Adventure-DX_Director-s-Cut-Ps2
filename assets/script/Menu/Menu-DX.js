const font = new Font("default");

os.setInterval(() => { // Basically creates an infinite loop, similar to while true(you can use it too).
  Screen.clear(); // Clear screen for the next frame.
  Screen.flip(); // Updates the screen.
}, 0);

//player.js
class Player {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    // Add any other initialization code here
  }
  update() {
    // Update player position or state here
  }
}

//menu inicial para Sonic Adventure DX
  const menu = document.getElementById("menu");
  const startButton = document.getElementById("start-button");
    const optionsButton = document.getElementById("options-button");
    const creditsButton = document.getElementById("credits-button");
    const exitButton = document.getElementById("exit-button");
    const optionsMenu = document.getElementById("options-menu");
    const creditsMenu = document.getElementById("credits-menu");
    const backButtonOptions = document.getElementById("back-button-options");
    const backButtonCredits = document.getElementById("back-button-credits");
    const volumeControl = document.getElementById("volume-control");
    const resolutionSelect = document.getElementById("resolution-select");
    const fullscreenToggle = document.getElementById("fullscreen-toggle");

    // Función para iniciar el juego

    //app_icon.png
    startButton.addEventListener("click", () => {
      menu.style.display = "none";
      // Aquí iría el código para iniciar el juego
    });

    // Función para mostrar el menú de opciones
    optionsButton.addEventListener("click", () => {
      menu.style.display = "none";
      optionsMenu.style.display = "block";
    });
    // Función para mostrar el menú de créditos
    creditsButton.addEventListener("click", () => {
      menu.style.display = "none";
      creditsMenu.style.display = "block";
    });
    // Función para salir del juego
    exitButton.addEventListener("click", () => {
      window.close(); // Esto puede no funcionar en todos los navegadores por razones de seguridad
    });