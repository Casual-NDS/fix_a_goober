import { Scene } from 'phaser';

const ITEM_HINTS: {[index: string]: string}= {
    A: 'avocado',
    B: 'flowers',
    C: 'pirate',
    D: 'donkey',
    E: 'egg',
    F: 'funnyword'
}


export class Game extends Scene {
    currentItem: string;
    itemA: any;
    itemB: any;
    itemC: any;
    itemD: any;
    itemE: any;
    itemF: any;
    bingus: any;
    bg: any;
    speechText: any;
    timeText: any;
    timeLeft = 1000;
    constructor() {
        super('Game');
    }

    preload() {
        this.load.image('bg', 'assets/bg.png');
        this.load.image('ground', 'assets/platform.png');
        this.load.image('star', 'assets/star.png');
        this.load.image('bingus', 'assets/bingus_temp.png');
        this.load.image('itemA', 'assets/itemA.svg.png');
        this.load.image('itemB', 'assets/itemB.png');
        this.load.image('itemC', 'assets/itemC.png');
        this.load.image('itemD', 'assets/itemD.png');
        this.load.image('itemE', 'assets/itemE.png');
        this.load.image('itemF', 'assets/itemF.png');


    }

    checkItem(item: any) {
        if (this.currentItem == item.value) {
            console.log(this.currentItem + " right item!")
            this.speechText.setText("says: You got it!");
            this.timeLeft += 1000;
            this.time.delayedCall(2000, () => {
                this.speechText.setText("Your next item is...")
                this.time.delayedCall(500, () => {
                    this.randomizeItem();
                    this.speechText.setText('says: ' + ITEM_HINTS[this.currentItem]);
                });
            });
            // change item ,add score, etc.
        } else {
            console.log(this.currentItem + " no bad");
            this.speechText.setText("says: No bad!");
            
            this.time.delayedCall(1000, () => {
                this.speechText.setText("Your still item is...")
                this.time.delayedCall(500, () => {
                    this.speechText.setText('says: ' + ITEM_HINTS[this.currentItem]);
                });
            });
            this.timeLeft -= 100;
        }
    }

    randomizeItem() {
        this.currentItem = Phaser.Math.RND.pick(['A', 'B', 'C', 'D','E','F']);
    }

    create() {
        // randomize chosen item
        this.timeLeft = 1000;
        this.randomizeItem();
        this.bg = this.add.image(400, 300, 'bg').setScale(1);
        this.bingus = this.add.image(400, 100, 'bingus').setScale(2);
        this.itemA = this.add.image(350, 450, 'itemA').setScale(0.5);
        this.itemA.value = "A";
        this.itemB = this.add.image(450, 450, 'itemB').setScale(0.5);
        this.itemB.value = "B";
        this.itemC = this.add.image(350, 550, 'itemC').setScale(0.5);
        this.itemC.value = "C";
        this.itemD = this.add.image(450, 550, 'itemD').setScale(0.5);
        this.itemD.value = "D";
        this.itemE = this.add.image(600, 450, 'itemE').setScale(0.5);
        this.itemE.value = "E";
        this.itemF = this.add.image(600, 550, 'itemF').setScale(0.5);
        this.itemF.value = "F";
        for (const item of [this.itemA, this.itemB, this.itemC, this.itemD, this.itemE, this.itemF]) {
            item.setInteractive();
            item.on('clicked', () => {
                this.checkItem(item);
            })
        }
        this.input.on('gameobjectup', (pointer, gameObject) => {
            gameObject.emit('clicked');
        })
        this.speechText = this.add.text(16, 16, 'says: ' + this.currentItem, { fontSize: '32px', color: '#000'  });
        this.timeText = this.add.text(740, 16, "" + this.timeLeft, { fontSize: '32px', color: '#c71414' });
    }

    update() {
        this.timeLeft--;
        this.timeText.setText(this.timeLeft);
        if (this.timeLeft <= 0) { this.scene.start('GameOver'); }
    }
}

//add onevent and talka abt text changing for delay
