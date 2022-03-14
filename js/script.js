const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
function render() {

    ctx.fillStyle = "#000";

    ctx.fillRect(0, 0, canvas.width, canvas.height);
}
render();
const netWidth = 4;
const netHeight = canvas.height;
const paddleWidth = 10;
const paddleHeight = 100;
let upArrowPressed = false;
let downArrowPressed = false;
const net = {
    x: canvas.width / 2 - netWidth / 2,
    y: 0,
    width: netWidth,
    height: netHeight,
    color: "#FFF"
};

const user = {
    x: 10,
    y: canvas.height / 2 - paddleHeight / 2,
    width: paddleWidth,
    height: paddleHeight,
    color: '#FFF',
    score: 0

}
const ai = {
    x: canvas.width - (paddleWidth + 10),
    y: canvas.height / 2 - paddleHeight / 2,
    width: paddleWidth,
    height: paddleHeight,
    color: '#FFF',
    score: 0

}
const ball = {
    x: canvas.width / 2,
    y: canvas.height / 2,
    radius: 7,
    speed: 7,
    velocityX: 5,
    velocityY: 5,
    color: '#05EDFF'
};
function drawNet() {

    ctx.fillStyle = net.color;
    ctx.fillRect(net.x, net.y, net.width, net.height);

}
function drawScore(x, y, score) {
    ctx.fillStyle = '#fff';
    ctx.font = '35px sans-serif';
    ctx.fillText(score, x, y);

}
function drawPaddle(x, y, width, height, color) {
    ctx.fillStyle = color;
    ctx.fillRect(x, y, width, height);

}
function drawBall(x, y, radius, color) {
    ctx.fillStyle = color;
    ctx.beginPath();
    ctx.arc(x, y, radius, 0, Math.PI * 2, true);
    ctx.closePath();
    ctx.fill();
}
drawNet();
drawScore(canvas.width / 4, canvas.height / 6, user.score);
drawScore(3 * canvas.width / 4, canvas.height / 6, ai.score);
drawPaddle(user.x, user.y, user.width, user.height, user.color);
drawPaddle(ai.x, ai.y, ai.width, ai.height, ai.color);
drawBall(ball.x, ball.y, ball.radius, ball.color);

function gameLoop() {
    update();
    render();
}
setInterval(gameLoop, 1000 / 60);
window.addEventListener('keydown', keyDownHandler);
window.addEventListener('keyup', keyUpHandler);
function keyDownHandler(event) {

    switch (event.keyCode) {

        case 38:

            upArrowPressed = true;
            break;
        case 40:
            downArrowPressed = true;
            break;
    }
}

function update() {
    ball.x += ball.velocityX;
    ball.y = ball.velocityY;

}


