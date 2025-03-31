import { Scene, GameObjects } from 'phaser';

export class MainMenu extends Scene
{
    background: GameObjects.Image;
    logo: GameObjects.Image;
    title: GameObjects.Text;
    tut: GameObjects.Image;
    credit: GameObjects.Image;

    constructor ()
    {
        super('MainMenu');
    }

    create ()
    {

        this.background = this.add.image(400, 300, 'background');
        this.tut = this.add.image(617,180, 'tut').setScale(.21);
        this.credit = this.add.image(200,25, 'credit').setScale(.75);

        

        

        this.input.once('pointerdown', () => {

            this.scene.start('Game');

        });
    }
}
