class Bullet  {
    constructor(left, top, width, height) {
        this.left = left;
        this.top = top;
        this.width = width;
        this.height = height;
        this.speed = 9;
    }
    draw() {
        let bulletImage = new Image();
        bulletImage.src = '../pictures/bullet3.png';
        ctx.drawImage(bulletImage,this.left,this.top,this.width,this.height);
    }
    move() {
        this.top -= this.speed;
    }
}
