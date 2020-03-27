

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
        this.bullets = [];
    }

    // Hiển thị archer trên canvas
    draw() {
        let archerImage = new Image();
        archerImage.src = '../pictures/archer.png';
        ctx.drawImage(archerImage, this.left, this.top, this.width, this.height);
    }
    // Thay đổi vị trí trái phải
    move() {
        if (this.isMoveLeft) {
            this.left -= this.speed;
        } else if (this.isMoveRight) {
            this.left += this.speed;
        }
        if ((this.left + this.width / 2) < 0) {
            this.left = canvas.width - this.width / 2 ;
        } else if ((this.left + this.width / 2) > canvas.width) {
            this.left = 0 - this.width /2;
        }
    }
    // Khởi tạo bullet
    shoot() {
        if (this.isShoot) {
            this.reloadCount++; // khoảng cách 2 lần bắn
            if (this.reloadCount >= this.reload) {
                // tạo mũi tên tại vị trí cung tên
                let bullet = new Bullet(this.left + this.width / 2 - BULLET_WIDTH / 2,this.top,BULLET_WIDTH,BULLET_HEIGHT)
                this.bullets.push(bullet);

                this.reloadCount = 0;
            }
        }
        for (let i = 0; i < this.bullets.length; i++) {
            // xóa mũi tên khi ra khỏi màn hình
            if (this.bullets[i].top < 0 ) {
                this.bullets.splice(i, 1);
                i--;
            }
            else {
                this.bullets[i].move();
                this.bullets[i].draw();
            }
        }
    }
}



