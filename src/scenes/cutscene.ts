import { Scene, GameObjects } from 'phaser';

export class cutscene extends Scene
{
    preload () {

  this.load.video('ripley', 'assets/aliens.mp4');

};
create () {

  this.add.video(400, 300, 'ripley');

};

}