class mainScene extends Phaser.Scene {

  constructor() {
    super("mainScene");
    
    this.podzol;
    this.player;
  }

  preload(){
    this.load.image('podzol', './assets/map/podzol.png');
    this.cursors = this.input.keyboard.createCursorKeys();
    this.pl_spritesheet =  this.load.spritesheet('player', './assets/player/Sprite-0003_forExport.png', {frameWidth: 135, frameHeight: 215})
  }

  create() {
  //   this.add.image(300, 300, 'podzol');
  
  const walkFront = this.anims.create({
            key: 'walkFront',
            frames: this.anims.generateFrameNumbers('player', {frames: [ 0, 1, 2, 3, 4]}),
            frameRate: 5
    });

    const walkBack = this.anims.create({
      key: 'walkBack',
      frames: this.anims.generateFrameNumbers('player', {frames: [5, 6, 7, 8, 9]}),
      frameRate: 5
    });

    const walkRight = this.anims.create({
      key: 'walkRight',
      frames: this.anims.generateFrameNumbers('player', {frames: [10, 11, 12, 13, 14]}),
      frameRate: 5
    });

    const walkLeft = this.anims.create({
      key: 'walkLeft',
      frames: this.anims.generateFrameNumbers('player', {frames: [15, 16, 17, 18, 19]}),
      frameRate: 5
    });

    this.podzol = this.add.tileSprite(0, 0, 1920, 1920, 'podzol');
      
    this.podzol.setScale(10);
    
    console.log(this);

    this.physics.world.setBounds(0, 0, 1920, 1920);

    this.player = this.physics.add.sprite(300, 300, 'player');
    
    this.player.play({ key: 'walkFront', repeat: 5 });
    
    console.log(this.pl_spritesheet);
    console.log(this.player.body)
  }
  
   update() {
       
    // console.log(this.player)

    // this.player.body.setZeroVelocity();
    // console.log(this.cursors)
    
    if (this.cursors.up.isDown)
    {
        this.player.setVelocityY(-160)
    }
    else if (this.cursors.down.isDown)
    {
      this.player.setVelocityY(160)
    }
    else {
      this.player.setVelocityY(0)
    }

    if (this.cursors.left.isDown)
    {
      this.player.setVelocityX(-160)
    }

    else if (this.cursors.right.isDown)
    {
      this.player.setVelocityX(160)
    }

    else {
      this.player.setVelocityX(0)
    }

}

}