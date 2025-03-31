import { Scene } from 'phaser';

export class GameOver extends Scene
{
    camera: Phaser.Cameras.Scene2D.Camera;
    gg: Phaser.GameObjects.Image;
    ta: Phaser.GameObjects.Image;
    thx: Phaser.GameObjects.Image;
    gameover_text : Phaser.GameObjects.Text;

    constructor ()
    {
        super('GameOver');
    }

    create ()
    {
        this.gg = this.add.image(400, 300, 'gg');
        this.ta = this.add.image(235, 200, 'ta');
        this.thx = this.add.image(590, 190, 'thx').setScale(0.65);

       
    

        this.input.once('pointerdown', () => {

            this.scene.start('MainMenu');

        });
    }
}
