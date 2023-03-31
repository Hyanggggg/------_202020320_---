const mainBall = document.querySelector(".circle--1");
const followBall = document.querySelector(".circle--2");

const lerp = (from, to, ease) => (1 - ease) * from + ease * to;

let currentX = window.innerWidth / 1;
let currentY = window.innerHeight / 1;

let mainCircle = {
  lastX: currentX,
  lastY: currentY,
  size: mainBall.getBoundingClientRect(),
};

let followCircle = {
  lastX: currentX,
  lastY: currentY,
  size: followBall.getBoundingClientRect(),
};

window.addEventListener("mousemove", (e) => {
  currentX = e.pageX;
  currentY = e.pageY;
});

const circleMovement = (circle, ease, direction) => {
  if (direction === "x") {
    return lerp(circle.lastX, currentX, ease);
  }
  return lerp(circle.lastY, currentY, ease);
};
const render = () => {
  mainCircle.lastX = circleMovement(mainCircle, 0.8, "x");
  mainCircle.lastY = circleMovement(mainCircle, 0.8, "y");
  mainBall.style.transform = `translate(${
    mainCircle.lastX - mainCircle.size.width / 2
  }px, ${mainCircle.lastY - mainCircle.size.height / 2}px)`;

  followCircle.lastX = circleMovement(followCircle, 0.1, "x");
  followCircle.lastY = circleMovement(followCircle, 0.1, "y");
  followBall.style.transform = `translate(${
    followCircle.lastX - followCircle.size.width / 2
  }px, ${followCircle.lastY - followCircle.size.height / 2}px)`;
  requestAnimationFrame(render);
};

render();
