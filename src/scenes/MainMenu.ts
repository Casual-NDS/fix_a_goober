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
        this.credit = this.add.image(200, 25, 'credit').setScale(.75);
        this.button = this.add.image(650, 350, "start_button")

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
