import { Scene } from 'phaser';

export class CutScene extends Scene {
  background: Phaser.GameObjects.Image;
  credit: Phaser.GameObjects.Image;
  button: Phaser.GameObjects.Image;
  continueTimer: Phaser.Time.TimerEvent;

  constructor() {
    super('CutScene');
  }
  preload() {

  }

  create() {
    let video = this.add.video(400, 300, 'testvid');
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
    this.credit = this.add.image(200, 25, 'credit').setScale(.75);
    this.button = this.add.image(650, 350, "continue_button");
    this.button.setVisible(false);
    this.button.setInteractive({ useHandCursor: true });
    this.button.on('pointerover', () => {
        this.button.setTexture("continue_button_hovered")
    });

    this.button.on('pointerout', () => {
        this.button.setTexture("continue_button")
    });

    this.button.once('pointerdown', () => {

        this.scene.start('Game');

    });
  }
}