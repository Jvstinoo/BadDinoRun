const canvas = document.getElementById('game');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth * .5;
canvas.height = window.innerHeight * .5;
const goat = document.getElementById('goat');
let timer = 0;

const player = new Block(canvas, ctx);
const enemy = new EnemyBlock(canvas, ctx);

window.onload = function () {
    document.addEventListener("keydown", (event) => {
        if (event.key == ' ' && enemy.vel == 0) {
            console.log("Game started");
            enemy.vel = 6;
            enemy.x = canvas.width;
            player.vel = 8;
            if (player.score > player.highScore)
                player.highScore = player.score;
            player.score = 0;
        }
    })
    window.addEventListener('touchstart', function () {
        console.log("Game started");
        enemy.vel = 6;
        enemy.x = canvas.width;
        player.vel = 8;
        if (player.score > player.highScore)
            player.highScore = player.score;
        player.score = 0;
    }
    )
}

function drawScore() {
    if (timer % 10 == 0 && timer != 0)
        player.score++;
    ctx.fillStyle = 'white';
    ctx.fillText("Score: " + player.score, canvas.width - 100, 20);
    ctx.fillText("High Score: " + player.highScore, canvas.width - 100, 40);
}

function pressSpace() {
    if (enemy.vel == 0) {
        ctx.fillStyle = 'white';
        ctx.fillText("Press Space to start", canvas.width / 2 - 50, canvas.height / 2);
    }
}

function collision() {
    // Check collision with enemy
    if (player.x + player.width > enemy.x && player.x < enemy.x + enemy.width && player.y + player.height > enemy.y && player.y < enemy.y + enemy.height) {
        player.vel = 0;
        enemy.vel = 0;
    } else { enemy.vel > 0 ? timer++ : timer = 0; }
}

function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawScore();
    pressSpace();
    player.main();
    enemy.main();
    collision();
}

// Make draw run every frame
setInterval(draw, 1000 / 60);
