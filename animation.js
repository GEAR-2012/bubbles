// set the canvas size
const canvasWidth = window.innerWidth * 0.8;
const canvasHeight = window.innerHeight * 0.8;

$("#my-canvas").attr("width", canvasWidth);
$("#my-canvas").attr("height", canvasHeight);
/*
USER VARIABLES
*/
let amount = 0; // amount of balls
let minMaxHue = { min: 0, max: 0 }; // for making random ball color
let ballOps = { minR: 0, maxR: 0, minV: 0, maxV: 0 }; // for making random balls
let trail = false;
let stroke = false;
/*
SYSTEM VARIABLES
*/
const canv = document.getElementById("my-canvas"); // get the canvas
let ctx = canv.getContext("2d"); // get the rendering context
let balls = []; // ball container
let dh = 1; // delta hue
let color; // initial color for all balls
let reqId; // request animation frame ID

function setColor() {
  color = {
    h: rndNumBetw(minMaxHue.min, minMaxHue.max),
    s: "100%",
    l: "50%",
  }; // initial color for all balls
}

$("#start").click(start);
$("#stop").click(stop);

function start() {
  stop();
  initCanv();
  setColor();
  makeBalls(amount);
  reqId = window.requestAnimationFrame(draw);
}

function stop() {
  window.cancelAnimationFrame(reqId);
  ctx.clearRect(0, 0, canvasWidth, canvasHeight); // clear the canvas
  balls = [];
}

function initCanv() {
  // ****** init canvas
  // stroke styles
  ctx.strokeStyle = "black";
  ctx.lineWidth = 0.5;
  ctx.lineCap = "round"; // butt, round, square
  ctx.lineJoin = "miter"; // round, bevel, miter
  ctx.miterLimit = 5;
  // fill style
  ctx.fillStyle = "yellow";
  // go to center of canvas
  ctx.save();
}

function Ball(minR, maxR, minV, maxV) {
  // r => radius
  // minV => minimum velocity
  // maxV => maximum velocity
  this.r = rndNumBetw(minR, maxR); // radius
  this.x = rndNumBetw(this.r, canvasWidth - this.r, true); // initial x coordinate
  this.y = rndNumBetw(this.r, canvasHeight - this.r, true); // initial y coordinate
  this.dx = rndVelocity(); // x velocity
  this.dy = rndVelocity(); // y velocity
  //
  this.lv = Math.pow(this.r, 0.5) / 8; // stroke line width

  this.draw = function () {
    // draw a circle
    // x => x coordinate of center
    // y => y coordinate of center
    // r => radius of circle
    // p => the redering context (pen)
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2);
    ctx.closePath();
    ctx.fill();
    if (stroke) {
      ctx.stroke();
    }
  };

  this.update = function () {
    // position update
    // check for x end points
    if (this.x + this.r >= canvasWidth || this.x - this.r <= 0) {
      this.dx = -this.dx;
    }
    // check for y end points
    if (this.y + this.r >= canvasHeight || this.y - this.r <= 0) {
      this.dy = -this.dy;
    }
    this.x += this.dx; // change x coordinate
    this.y += this.dy; // change y coordinate
    this.draw();
  };

  // get a random velocity between the given parameters
  function rndVelocity() {
    let vel;
    vel = rndNumBetw(minV, maxV);
    if (!rndBool()) {
      vel = -vel;
    }
    return vel;
  }
}

function makeBalls(amount) {
  for (let i = 0; i < amount; i++) {
    balls.push(
      new Ball(ballOps.minR, ballOps.maxR, ballOps.minV, ballOps.maxV)
    );
  }
}

function draw() {
  reqId = window.requestAnimationFrame(draw);
  if (!trail) {
    ctx.clearRect(0, 0, canvasWidth, canvasHeight); // clear the canvas
  }
  ctx.fillStyle = `hsl(${color.h}, ${color.s}, ${color.l})`;

  // position update on all balls
  balls.forEach((ball) => {
    ctx.lineWidth = ball.lv;
    ball.update();
  });

  // change color on all balls
  if (color.h > minMaxHue.max || color.h < minMaxHue.min) {
    dh = -dh;
  }
  color.h += dh;
}

function rndNumBetw(n1 = 0, n2 = 10, int = false) {
  // returns a random number between n1 & n2
  // n1 < n2
  // n1 & n2 are numbers
  // int => boolean, 'true' returns integer, 'false' returns float
  if (typeof n1 == "number" && typeof n2 == "number") {
    if (n1 > n2) {
      let n3 = n1;
      n1 = n2;
      n2 = n3;
    }
    if (n1 === n2) {
      return n1;
    }
    if (n1 < n2) {
      let rnd = Math.random() * (n2 - n1) + n1;
      if (int) {
        rnd = parseInt(rnd.toFixed(0), 10);
      }
      rnd = parseFloat(rnd.toFixed(4), 10);
      return rnd;
    }
  } else {
    console.log("n1 or/and n2 not a valid number");
    return 0;
  }
}

function rndBool() {
  let rb = Math.floor(Math.random() * 2);
  if (rb === 1) {
    return true;
  } else {
    return false;
  }
}
