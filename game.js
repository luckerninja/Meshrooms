let config = {
    type: Phaser.AUTO,
    width: 600,
    height: 600,
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 0 }
        }
    },
    scene: [mainScene],
    pixelArt: true
};

let game = new Phaser.Game(config);
