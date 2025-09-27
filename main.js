const font = new Font("default");

let frame = 0; // contador de frames

os.setInterval(() => {
  Screen.clear(); // Limpa a tela

  // Título
  font.print(50, 200, "Sonic Adventure");

  // Texto piscando (mostra em alguns frames, esconde em outros)
  if (Math.floor(frame / 30) % 2 === 0) {  
    // 30 = ~meio segundo se estiver rodando a 60fps
    font.print(220, 400, "Pressiona Start");
  }

  // Autor no topo
  font.print(200, 30, "Autor: Antoniel");

  Screen.flip(); // Atualiza a tela

  frame++; // avança o contador
}, 0);