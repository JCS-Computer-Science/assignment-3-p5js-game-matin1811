const player = document.getElementById("player");
const obstacle = document.getElementById("obstacle");
const scoreText = document.getElementById("score");
const gameOverScreen = document.getElementById("gameOver");

let score = 0;
let speed = 5;
let gameRunning = true;


document.addEventListener("keydown", (event) => {
  if (event.code === "Space") {
    if (!player.classList.contains("jump")) {
      player.classList.add("jump");

      setTimeout(() => {
        player.classList.remove("jump");
      }, 500);
    }
  }
});


let obstacleLeft = 400;

function gameLoop() {
  if (!gameRunning) return;

  obstacleLeft -= speed;
  if (obstacleLeft < -20) {
    obstacleLeft = 400;
    score++;
    scoreText.innerText = "Score: " + score;

    
    if (score % 5 === 0) {
    speed += 1;
    }
  }

  obstacle.style.left = obstacleLeft + "px";

  
  let playerBottom = parseInt(getComputedStyle(player).getPropertyValue("bottom"));

  if (obstacleLeft < 60 && obstacleLeft > 0 && playerBottom < 40) {
    gameOver();
  }

  requestAnimationFrame(gameLoop);
}


function gameOver() {
  gameRunning = false;
  gameOverScreen.style.display = "block";
}

gameLoop();