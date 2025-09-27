// Classe Sonic em 3D
class Sonic {
    constructor(x, y, z) {
        this.x = x;
        this.y = y;
        this.z = z;
        this.velX = 0;
        this.velY = 0;
        this.velZ = 0;
        this.speed = 0.2;      // velocidade andando
        this.runSpeed = 0.5;   // velocidade correndo
        this.jumpPower = 0.6;  // força do pulo
        this.gravity = -0.03;  // gravidade
        this.onGround = true;

        // Carregar modelo GLB
        this.model = Render.loadModel("players/Sonic/dreamcast_-_sonic_adventure_-_sonic.glb");
        this.node = Render.createObject(this.model);

        Render.setPosition(this.node, this.x, this.y, this.z);
        Render.setScale(this.node, 0.5, 0.5, 0.5); // ajustar tamanho
    }

    update(input) {
        // movimentação simples WASD / setas
        if (input.left)  this.x -= this.speed;
        if (input.right) this.x += this.speed;
        if (input.up)    this.z -= this.speed;
        if (input.down)  this.z += this.speed;

        // atualizar posição no mundo
        Render.setPosition(this.node, this.x, this.y, this.z);
    }
}