import { Scene } from 'phaser';

export class cutscene extends Scene {
  preload() {

    this.load.video('test', 'assets/testvid.mp4', true);

  }
  create() {
    this.add.video(400, 300, 'assets/testvid.mp4');
    this.input.once('pointerdown', () => {

      this.scene.start('cutscene');

    });
  };

}