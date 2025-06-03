import { Scene } from 'phaser';

export class Boot extends Scene {
    constructor() {
        super('Boot');
    }

    preload() {
        //  The Boot Scene is typically used to load in any assets you require for your Preloader, such as a game logo or background.
        //  The smaller the file size of the assets, the better, as the Boot Scene itself has no preloader.

        this.load.image('background', 'assets/mm.PNG');
        this.load.image('tut', 'assets/tut.png');
        this.load.image('gg', 'assets/gg.PNG');
        this.load.image('credit', 'assets/credit.png');
        this.load.image('ta', 'assets/ta.png');
        this.load.image('thx', 'assets/thx.png');
    }

    create() {
        this.scene.start('Preloader');
    }
}
