let heartArray = ['pictures/heartbaby1.png','pictures/heartbaby2.png','pictures/heartbaby3.png','pictures/heartbaby4.png',
    'pictures/heartbaby5.png','pictures/heartbaby6.png','pictures/heartbaby7.png'];

let hearts = [];

class Heart {
    constructor(left, top, width, height, speed) {
        this.left = left;
        this.top = top;
        this.width = width;
        this.height = height;
        this.speed = speed;
        this.isLive = true ;
        this.img = '';
    }
    // Thay đổi heart ngẫu nhiên trong mảng
    setImage() {
        let temp = heartArray[Math.floor(Math.random()*heartArray.length)];
        
        if (this.img === temp) {
            temp = heartArray[Math.floor(Math.random()*heartArray.length)];
        }
        else {
            this.img = temp;
        }
    }
    // Hiển thị heart trên canvas
    draw() {
        let heartImage = new Image();
        heartImage.src = this.img;
        if (this.isLive) {
            ctx.drawImage(heartImage, this.left,this.top,this.width,this.height);
        }
    };
    // Giảm độ cao của heart
    move() {
        this.top += this.speed;
    };
}

// Khởi tạo 1 heart.
function createHeart() {
    let speed = Math.random()*1.3 +0.5;
    let leftHeart = Math.random() * (canvas.width - HEART_WIDTH + 1);
    let topHeart = Math.random() * (0 - canvas.height);
    let heart = new Heart(leftHeart,topHeart, HEART_WIDTH, HEART_HEIGHT, speed);
    hearts.push(heart);
    heart.setImage();
    heart.draw();
}
// Tạo một bầu trời heart
function createHeartEveryWhere() {
    for (let i = 1 ; i < 50 ; i++) {
        createHeart();
    }
}

createHeartEveryWhere();
// Hiển thị heart
function showHearts() {
    for (let i = 0; i < hearts.length;i++) {
        hearts[i].move();
        hearts[i].draw();
    }
}

