import { Scene, GameObjects } from 'phaser';

export class MainMenu extends Scene
{
    background: GameObjects.Image;
    logo: GameObjects.Image;
    title: GameObjects.Text;

    constructor ()
    {
        super('MainMenu');
    }

    create ()
    {
        this.background = this.add.image(400, 300, 'background');

        

        

        this.input.once('pointerdown', () => {

            this.scene.start('Game');

        });
    }
}
