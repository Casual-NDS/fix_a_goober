import { Scene, GameObjects } from 'phaser';

export class MainMenu extends Scene {
    background: GameObjects.Image;
    logo: GameObjects.Image;
    title: GameObjects.Text;
    tut: GameObjects.Image;
    credit: GameObjects.Image;
    button: GameObjects.Image;
    constructor() {
        super('MainMenu');
    }

    create() {

        this.background = this.add.image(400, 300, 'background');
        this.tut = this.add.image(617, 180, 'tut').setScale(.21);
        this.credit = this.add.image(200, 25, 'credit').setScale(.75);
        this.button = this.add.image(100, 100, "start_button")

        this.button.setInteractive({ useHandCursor: true });

        this.button.on('pointerover', () => {
            this.button.setTexture("start_button_hovered")
        });

        this.button.on('pointerout', () => {
            this.button.setTexture("start_button")
        });

        this.input.once('pointerdown', () => {

            this.scene.start('CutScene');

        });
    }
}
