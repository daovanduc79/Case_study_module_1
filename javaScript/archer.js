
class Archer {
    constructor(left, top, width, height, speed, isMoveLeft, isMoveRight, isShoot) {
        this.left = left;
        this.top = top;
        this.width = width;
        this.height = height;
        this.speed = speed;
        this.isMoveLeft = isMoveLeft;
        this.isMoveRight = isMoveRight;
        this.isShoot = isShoot;
        this.reloadCount = 0;
        this.reload = 9;
        this.arrows = [];
    }

    // Hiển thị archer trên canvas
    draw() {
        let archerImage = new Image();
        archerImage.src = 'pictures/archer.png';
        ctx.drawImage(archerImage, this.left, this.top, this.width, this.height);
    }
    // Thay đổi vị trí trái phải
    move() {
        
        if (this.isMoveLeft) {
            this.left -= this.speed;
        } else if (this.isMoveRight) {
            this.left += this.speed;
        }
        // ra khỏi canvas
        if ((this.left + this.width / 2) < 0) {
            this.left = canvas.width - this.width / 2 ;
        } else if ((this.left + this.width / 2) > canvas.width) {
            this.left = 0 - this.width /2;
        }
    }
    // Khởi tạo arrow
    shoot() {
        if (this.isShoot) {
            this.reloadCount++; // khoảng cách 2 lần bắn
            if (this.reloadCount >= this.reload) {
                // tạo arrow tại vị trí archer
                let arrow = new Arrow(this.left + this.width / 2 - ARROW_WIDTH / 2,this.top,ARROW_WIDTH,ARROW_HEIGHT);
                this.arrows.push(arrow);

                this.reloadCount = 0;
            }
        }
        for (let i = 0; i < this.arrows.length; i++) {
            // xóa arrow khi ra khỏi màn hình
            if (this.arrows[i].top < 0 ) {
                this.arrows.splice(i, 1);
                i--;
            }
            else {
                this.arrows[i].move();
                this.arrows[i].draw();
            }
        }
    }
}



