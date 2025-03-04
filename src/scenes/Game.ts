import { Scene } from 'phaser';


export class Game extends Scene {
    currentItem: string;
    itemA: any;
    itemB: any;
    itemC: any;
    itemD: any;
    bingus: any;
    bg: any;
    speechText: any;
    timedEvent: any;
    onEvent: any;
    constructor() {
        super('Game');
    }

    preload() {
        this.load.image('bg', 'assets/bg.png');
        this.load.image('ground', 'assets/platform.png');
        this.load.image('star', 'assets/star.png');
        this.load.image('bingus','assets/bingus_temp.png');
        this.load.image('itemA', 'assets/itemA.svg.png');
        this.load.image('itemB', 'assets/itemB.png');
        this.load.image('itemC', 'assets/itemC.png');
        this.load.image('itemD', 'assets/itemD.png');
        
        
    }

    checkItem(item: any){
        if (this.currentItem == item.value){
            console.log(this.currentItem + " right item!")
            this.speechText.setText("says: You got it!");
            this.randomizeItem()
            this.speechText.setText( 'says: '+ this.currentItem);
            // change item ,add score, etc.
        } else {
            console.log(this.currentItem + " no bad");
            this.speechText.setText("says: No bad!");
        }
    }

    randomizeItem(){
        this.currentItem = Phaser.Math.RND.pick(['A','B','C','D'])
    }

    create() {
        // randomize chosen item
        this.randomizeItem();
        this.timedEvent = this.time.addEvent({ delay: 10000, callback: this.onEvent, callbackScope: this, repeat: 1, startAt: 5000 });
        this.bg = this.add.image(400,300, 'bg').setScale(1);
        this.bingus = this.add.image(400,100,'bingus').setScale(2);
        this.itemA = this.add.image(350,450,'itemA').setScale(0.5);
        this.itemA.value = "A";
        this.itemB = this.add.image(450,450,'itemB').setScale(0.5);
        this.itemB.value = "B";
        this.itemC = this.add.image(350,550,'itemC').setScale(0.5);
        this.itemC.value = "C";
        this.itemD = this.add.image(450,550,'itemD').setScale(0.5);
        this.itemD.value = "D";
        for (const item of [this.itemA, this.itemB, this.itemC, this.itemD]){
            item.setInteractive();
            item.on('clicked', ()=> {
                this.checkItem(item);
            })
        }
        this.input.on('gameobjectup', (pointer, gameObject) => {
            gameObject.emit('clicked');
        })
        this.speechText = this.add.text(16, 16, 'says: ' + this.currentItem, { fontSize: '32px', fill: '#000' });
    }

    update() {
        
    }
}

//add onevent and talka abt text changing for delay
