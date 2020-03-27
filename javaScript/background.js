let canvas = document.getElementById('myCanvas');
let ctx = canvas.getContext('2d');
let backgroundArray = ['../pictures/background1.png','../pictures/background2.png','../pictures/background3.png','../pictures/background4.png'];



class Background {
    constructor() {
        this.img = '';
    }
    setImage() {
        let temp = backgroundArray[Math.floor(Math.random()*backgroundArray.length)];

        if (this.img === temp) {
            temp = backgroundArray[Math.floor(Math.random()*backgroundArray.length)];
        } else {
            this.img = temp ;
        }
    }

    draw() {
        let backgroundImage = new Image();
        backgroundImage.src = this.img;
        ctx.drawImage(backgroundImage,0,0,900,600)
    }
}