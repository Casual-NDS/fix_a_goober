import { Scene } from 'phaser';
//talk to mr sf as text is all shwoing up in the array
const ITEM_HINTS: { [index: string]: { [index: string]: string[] } } = {
    A: {
        A: ['"ME. WANT. DRINK."'],
        B: ['"My throat is \nparched,\ndo you have\ncough drops?"'],
        C: ['"Grrr…..thirst."'],
        D: ['"I want energy for\n‘hard work’ and\n‘money making’"'],
        E: ['"Gimme your drink \nsucka!"'],
        F: ['"Man I was\ncooked rare,\nI need liquid."'],
    },
    B: {
        A: ['"I. HURT."'],
        B: ['"Isn’t it obvious?"'],
        C: ['"My brrrain is\nsticking out…"'],
        D: ['"Medical supplies\nI need."'],
        E: ['"Aye I needs up a\nfixing for the\nbarrel of\nmy firearm!"'],
        F: ['"Someone bit off\nmy ear!!!!!!!!!"'],
    },
    C: {
        A: ['"GREEN."',],
        B: ['"Pickled\neyeball please."'],
        C: ['"So thats where\nmy eye went."'],
        D: ['"What in jar \nis not a\ndelicacy in my\nhomeland, comrade."'],
        E: ['"Give me the weird\ngreen thing. Now!"'],
        F: ['"I may be a steak,\nbut another \neye won’t hurt…"'],
    },
    D: {
        A: ['"I. WANT.\nTRAVEL. ING."'],
        B: ['"The Hospital \nwants some I.D \nto prove who I am…"'],
        C: ['"I…need..a..vacation "'],
        D: ['"You got Passport?\nI travel\nto Arstotzka."'],
        E: ['"THE FED ARE AFTER \nME! HELP!"'],
        F: ['"Trying to leave \nthis place.\nCan you help?"'],
    },
    E: {
        A: ['"Where am I?"',],
        B: ['"I dont need \nanything...\nCan you tell me\nwhere the\nhospital is?"'],
        C: ['"Me….havee.. nothing"'],
        D: ['"Hello there! I\nsaw big line and\nthought\n“I should be here!”"'],
        E: ['"Stick em’ up!"'],
        F: ['"I feel…fine."'],
    },
    F: {
        A: ['"SODIUM."'],
        B: ['"Rub salt in my \nwounds,\nthat’ll fix them."'],
        C: ['"White stuff…\nfor… brain…."'],
        D: ['"Ah yes!\nEdible goods\nI recognize"'],
        E: ['"Throwing salt \nwon’t save you!"'],
        F: ['"Please I need to\nbe seasoned.."'],
    }
}
const ITEM_BINGI: { [index: string]: string } = {
    A: 'goober0',
    B: 'goober1',
    C: 'goober2',
    D: 'goober3',
    E: 'goober4',
    F: 'goober5',
    G: 'goober7',
}

function getRandom(array: string[]): string {
    return array[Math.floor(Math.random() * array.length)];
}

export class Game extends Scene {
    currentItem: string;
    currentGoober: string;
    itemA: any;
    itemB: any;
    itemC: any;
    itemD: any;
    itemE: any;
    itemF: any;
    goober0: Phaser.GameObjects.Image;
    goober1: Phaser.GameObjects.Image;
    goober2: Phaser.GameObjects.Image;
    goober3: Phaser.GameObjects.Image;
    goober4: Phaser.GameObjects.Image;
    goober5: Phaser.GameObjects.Image;
    goober7: Phaser.GameObjects.Image;
    bingus: Phaser.GameObjects.Image;
    speech: Phaser.GameObjects.Image;
    textcover: Phaser.GameObjects.Image;
    bg: any;
    speechText: any;
    timeText: any;
    timeLeft = 1000;
    streakCounter: number;
    streakCounterText: any;
    constructor() {
        super('Game');
    }

    preload() {
        this.load.image('bg', 'assets/bg.PNG');
        this.load.image('ground', 'assets/platform.png');
        this.load.image('star', 'assets/star.png');
        this.load.image('bingus', 'assets/bingus_temp.png');
        this.load.image('itemA', 'assets/itemA.svg.png');
        this.load.image('itemB', 'assets/itemB.PNG');
        this.load.image('itemC', 'assets/itemC.PNG');
        this.load.image('itemD', 'assets/itemD.PNG');
        this.load.image('itemE', 'assets/itemE.PNG');
        this.load.image('itemF', 'assets/itemF.PNG');
        this.load.image('goober0', 'assets/goober0.PNG');
        this.load.image('goober1', 'assets/goober1.PNG');
        this.load.image('goober2', 'assets/goober2.PNG');
        this.load.image('goober3', 'assets/goober3.PNG');
        this.load.image('goober4', 'assets/goober4.PNG');
        this.load.image('goober5', 'assets/goober5.PNG');
        this.load.image('goober7', 'assets/goober7.png');
        this.load.image('speech', 'assets/speech.png');
        this.load.image('textcover', 'assets/textcover.PNG')


    }
    winning = false;
    checkItem(item: any) {
        if (this.winning) return;
        if (this.currentItem == item.value) {
            this.winning = true;
            console.log(this.currentItem + " right item!")
            this.speechText.setText("CORRECT!");
            this.streakCounter += 1;
            console.log(this.streakCounter);
            this.timeLeft += 2000;
            this.time.delayedCall(700, () => {
                // this.bingus.setTexture(ITEM_BINGI['G']);
                this.speechText.setText("NEXT!!!")
                this.randomizeItem();
                this.bingus.setTexture(ITEM_BINGI[this.currentGoober]);
                this.time.delayedCall(500, () => {
                    this.winning = false;
                    this.speechText.setText('' +
                        getRandom(ITEM_HINTS[this.currentItem][this.currentGoober]));
                    // [Math.random()*ITEM_HINTS[this.currentItem].length])

                });
            });
            // change item ,add score, etc.
        } else {
            console.log(this.currentItem + " no bad");
            this.speechText.setText("WRONG!");
            this.streakCounter = 0;
            console.log(this.streakCounter)
            this.time.delayedCall(1000, () => {
                this.speechText.setText("Try Again!")
                this.time.delayedCall(5000, () => {
                    this.speechText.setText('' + ([this.currentItem]));
                });
            });
            this.timeLeft -= 3000;
        }
    }

    randomizeItem() {
        this.currentItem = Phaser.Math.RND.pick(['A', 'B', 'C', 'D', 'E', 'F']);
        this.currentGoober = Phaser.Math.RND.pick(['A', 'B', 'C', 'D', 'E', 'F']);
        console.log("Current Item: " + this.currentItem);
        console.log("Current Goober: " + this.currentGoober);
    }

    create() {
        this.winning = false;
        // randomize chosen item
        this.streakCounter = 0;
        // change timing
        this.timeLeft = 5000;
        // (ITEM_HINTS[this.currentItem]);
        this.randomizeItem();
        this.bg = this.add.image(400, 300, 'bg').setScale(1);
        this.speech = this.add.image(240, 100, 'speech').setScale(1.05);
        this.textcover = this.add.image(752, 120, 'textcover').setScale(1.2);
        this.bingus = this.add.image(500, 150, 'bingus').setScale(2);
        this.itemA = this.add.image(700, 300, 'itemA').setScale(.65);
        this.itemA.value = "A";
        this.itemB = this.add.image(450, 350, 'itemB').setScale(0.10);
        this.itemB.value = "B";
        this.itemC = this.add.image(250, 360, 'itemC').setScale(0.10);
        this.itemC.value = "C";
        this.itemD = this.add.image(700, 530, 'itemD').setScale(0.10);
        this.itemD.value = "D";
        this.itemE = this.add.image(100, 525, 'itemE').setScale(0.10);
        this.itemE.value = "E";
        this.itemF = this.add.image(600, 350, 'itemF').setScale(0.06);
        this.itemF.value = "F";



        for (const item of [this.itemA, this.itemB, this.itemC, this.itemD, this.itemE, this.itemF]) {
            item.setInteractive();
            item.on('clicked', () => {
                this.checkItem(item);
            })
        }
        this.input.on('gameobjectup', (pointer: Phaser.Input.Pointer, gameObject: Phaser.GameObjects.GameObject) => {
            gameObject.emit('clicked');
        })
        this.speechText = this.add.text(16, 16, (ITEM_HINTS[this.currentItem][this.currentGoober]), { fontSize: '32px', color: '#000', });
        this.bingus.setTexture(ITEM_BINGI[this.currentGoober]).setScale(.20);
        this.timeText = this.add.text(690, 55, "" + Math.floor(this.timeLeft / 100), { fontSize: '48px', color: '#ffffff', });
        this.streakCounterText = this.add.text(710, 150, "" + this.streakCounter, { fontSize: '48px', color: '#ffffff' });
    }

    update() {
        // if the streak counter is greater than 10 or something
        // subtract more from timeleft
        // else
        // subtract 1
        // if(this.streakCounter > 5) {
        //     this.timeLeft -=
        // }
        this.timeLeft -= 1 + this.streakCounter / 10;
        this.timeText.setText(Math.floor(this.timeLeft / 10));
        this.streakCounterText.setText(this.streakCounter);
        if (this.timeLeft <= 0) {
            this.scene.start('GameOver');
            this.streakCounter = 0;
            console.log(this.streakCounter)
        }
    }
}

//add onevent and talka abt text changing for delay
