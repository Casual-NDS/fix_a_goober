import { Scene } from 'phaser';

export class CutScene extends Scene {

  constructor() {
    super('CutScene');
  }
  preload() {

  }
  create() {
    let video = this.add.video(400, 300, 'testvid');
    video.play();
    this.input.once('pointerdown', () => {

      this.scene.start('Game');

    });
  };

}