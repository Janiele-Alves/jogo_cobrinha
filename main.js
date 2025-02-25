const canvas = document.getElementById('snakeCanvas');
const ctx = canvas.getContext('2d');

const box = 20;
let snake = [{ x: 10, y: 10 }];

function drawSnake() {
    ctx.fillStyle = 'red';
    snake.forEach(segment => {
        ctx.fillRect(segment.x * box, segment.y * box, box, box);
        ctx.strokeStyle = '#f2f2f2';
        ctx.strokeRect(segment.x * box, segment.y * box, box, box);
    });
}

function gameLoop() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawSnake();
}

setInterval(gameLoop, 150);


document.addEventListener('keydown', e => {
    switch (e.key) {
        case 'w':
            direction = 'up';
            console.log("para cima");
            break;
        case 's':
            direction = 'down';
            console.log("para baixo");
            break;
        case 'a':
            direction = 'left';
            console.log("esquerda");
            break;
        case 'd':
            direction = 'right';
            console.log("direita");
            break;
    }
});

