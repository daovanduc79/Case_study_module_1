class Arrow  {
    constructor(left, top, width, height) {
        this.left = left;
        this.top = top;
        this.width = width;
        this.height = height;
        this.speed = 9;
    }

    draw() {
        let arrowImage = new Image();
        arrowImage.src = 'pictures/arrow2.png';
        ctx.drawImage(arrowImage,this.left,this.top,this.width,this.height);
    }

    move() {
        this.top -= this.speed;
    }
}
