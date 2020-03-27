let background = new Background();
let archer = new Archer(425, 530, ARCHER_WIDTH, ARCHER_HEIGHT,ARCHER_SPEED,false,false,false);
let gameBoard = new GameBoard();
let isGameOver = false;

gameBoard.control();

background.img = backgroundArray[0];
background.draw();
archer.draw();
gameBoard.drawScore();
gameBoard.drawGuide();


function startGame() {
    if (!isGameOver) {
        ctx.clearRect(0,0,canvas.width,canvas.height);
        background.draw();
        showHearts();
        archer.draw();
        archer.move();
        archer.shoot();
        gameBoard.checkCrash();
        // createHeart();
        for (let i = 0; i < hearts.length; i++) {
            if (hearts[i].top > canvas.height) {
                isGameOver = true;
            }
        }
        gameBoard.drawScore();
        requestAnimationFrame(startGame);
    } else {
        alert('Game over ! ' + gameBoard.score + ' score');
    }

}

function restart() {
    location.reload();
}










