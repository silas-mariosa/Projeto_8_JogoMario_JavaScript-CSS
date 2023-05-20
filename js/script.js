const mario = document.querySelector(".mario");
const pipe = document.querySelector(".pipe");
const nuvem = document.querySelector(".nuvem");

const jump = () => {
  mario.classList.add("pulo");

  setTimeout(() => {
    mario.classList.remove("pulo");
  }, 500);
};

const loop = setInterval(() => {
  const pipePosition = pipe.offsetLeft;
  const marioPosition = +window
    .getComputedStyle(mario)
    .bottom.replace("px", "");

  const nuvemPosition = nuvem.offsetLeft;

  if (pipePosition <= 120 && pipePosition > 0 && marioPosition <= 80) {
    pipe.style.animation = "none";
    pipe.style.left = `${pipePosition}px`;

    mario.style.animation = "none";
    mario.style.bottom = `${pipePosition}px`;

    nuvem.style.animation = "none";
    nuvem.style.left = `${nuvemPosition}px`;

    mario.src = "./image/game-over.png";
    mario.style.width = "75px";
    mario.style.marginLeft = "50px";

    clearInterval(loop);
  }
}, 10);

document.addEventListener("keydown", jump);
