class GameBoard {
    score = 0;

    control() {
        document.addEventListener('keyup', function (event) {
            if (event.keyCode === LEFT_KEY) {
                archer.isMoveLeft = false;
            } else if (event.keyCode === RIGHT_KEY) {
                archer.isMoveRight = false;
            } else if (event.keyCode === SPACE_KEY) {
                archer.isShoot = false;
            }
        });
        document.addEventListener('keydown', function (event) {
            if (event.keyCode === LEFT_KEY) {
                archer.isMoveLeft = true;
            } else if (event.keyCode === RIGHT_KEY) {
                archer.isMoveRight = true;
            } else if (event.keyCode === SPACE_KEY) {
                archer.isShoot = true;
            }
        });
        document.addEventListener('keypress', function (event) {
            console.log(event);
            if (event.keyCode === ENTER_KEY) {
                startGame();
            } else if (event.keyCode === R_KEY) {
                restart();
            }
        });
    }

    // Hiện lời chào và hướng dẫn
    drawGuide() {

        ctx.beginPath();
        ctx.font = "50px arial";
        ctx.fillStyle = 'blue';
        ctx.fillText('Welcome to Artistic hearts shoot', 150,100);
        ctx.fillText('Press Enter to Start', 150, 200);
        ctx.fillText('Are you ready !!!',150,300);
        ctx.closePath();


    }

    // Sự kiện va chạm
    crash(heart, arrow) {
        let leftHeart = heart.left;
        let rightHeart = heart.left + heart.width;
        let topHeart = heart.top;
        let bottomHeart = heart.top + heart.height;
        let leftArrow = arrow.left;
        let rightArrow = arrow.left + arrow.width;
        let topArrow = arrow.top;
        let bottomArrow = arrow.top + arrow.height;

        if (rightHeart < leftArrow || bottomHeart < topArrow || leftHeart > rightArrow || topHeart > bottomArrow) {
            return false;
        } else {
            return true;
        }
    }

    // Kiểm tra điều kiện va chạm
    checkCrash() {
        for (let i = 0; i < hearts.length; i++) {
            for (let j = 0; j < archer.arrows.length; j++) {
                if (this.crash(hearts[i], archer.arrows[j])) {
                    hearts[i].isLive = false;
                }
            }
            // Tính điểm
            if (!hearts[i].isLive) {
                hearts.splice(i, 1);
                this.score++;
            }
            if (hearts.length === 0) {
                background.setImage();
                // Tạo lại hearts
                createHeartEveryWhere();
                showHearts();
            }

        }
    }

    drawScore() {
        ctx.beginPath();
        ctx.font = "20px arial";
        ctx.fillStyle = 'white';
        ctx.fillText('Điểm ' + this.score, 20, 30);
        ctx.closePath();
    }
}


