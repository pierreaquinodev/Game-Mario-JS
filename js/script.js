const jump = () => {
  const mario = document.querySelector(".mario");
  mario.classList.add("jump");
  setTimeout(() => {
    mario.classList.remove("jump");
  }, 1000);
};

const loop = setInterval(() => {
  const pipe = document.querySelector(".pipe");
  const pipePosition = pipe.offsetLeft;
  const mario = document.querySelector(".mario");
  const marioPosition = +window
    .getComputedStyle(mario)
    .bottom.replace("px", "");

  if (pipePosition <= 120 && pipePosition > 0 && marioPosition < 80) {
    pipe.style.animation = "none";
    pipe.style.left = `${pipePosition}px`;
    mario.style.animation = "none";
    mario.style.bottom = `${marioPosition}px`;
    mario.src = "./imgs/game-over.png";
    mario.style.width = "80px";
    mario.style.marginLeft = "50px";
    clearInterval(loop);
  }
}, 10);

document.addEventListener("keypress", jump);
