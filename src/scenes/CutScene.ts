import { Scene } from 'phaser';

export class CutScene extends Scene {
  background: Phaser.GameObjects.Image;
  not: Phaser.GameObjects.Image;
  button: Phaser.GameObjects.Image;
  continueTimer: Phaser.Time.TimerEvent;

  constructor() {
    super('CutScene');
  }
  preload() {

  }

  create() {
    this.not = this.add.image(400, 300, "not");
    //video works?
    let video = this.add.video(400, 300, 'vid').setScale(1);
    video.play();

    let enableContinue = () => {
      this.button.setVisible(true);
    }

    this.continueTimer = this.time.addEvent({
      delay: 2000, // ms
      callback: enableContinue,
      //args: [],
      loop: false,
    });
    this.input.once('pointerdown', () => {
      enableContinue()
    });


    // this.background = this.add.image(400, 300, 'background');
    
    this.button = this.add.image(400, 550, "continue_button").setScale(.5);
    this.button.setVisible(false);
    this.button.setInteractive({ useHandCursor: true });
    this.button.on('pointerover', () => {
        this.button.setTexture("continue_button_hovered")
    });

    this.button.on('pointerout', () => {
        this.button.setTexture("continue_button")
    });
    this.input.once('pointerdown', () => {
        this.button.setTexture("continue_button")
        
        this.scene.start('Game');
  });
}
  }