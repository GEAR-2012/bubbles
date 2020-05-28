// user variables initial values
amount = 220; // amount of balls
minMaxHue = { min: 0, max: 360 }; // for making random ball color
ballOps = { minR: 1, maxR: 16, minV: 1.4, maxV: 8.6 }; // for making random balls
trail = true;
stroke = true;

// input elements
const getAmount = document.querySelector("#amount");
const getHueMin = document.querySelector("#hue-min");
const getHueMax = document.querySelector("#hue-max");
const getRadMin = document.querySelector("#rad-min");
const getRadMax = document.querySelector("#rad-max");
const getVelMin = document.querySelector("#vel-min");
const getVelMax = document.querySelector("#vel-max");
const getTrail = document.querySelector("#trail");
const getStroke = document.querySelector("#stroke");

// output elements
const amountOut = document.querySelector("#amount-out");
const hueMinOut = document.querySelector("#hue-min-out");
const hueMaxOut = document.querySelector("#hue-max-out");
const radMinOut = document.querySelector("#rad-min-out");
const radMaxOut = document.querySelector("#rad-max-out");
const velMinOut = document.querySelector("#vel-min-out");
const velMaxOut = document.querySelector("#vel-max-out");

// // set input elements
getAmount.value = amount;
getHueMin.value = minMaxHue.min;
getHueMax.value = minMaxHue.max;
getRadMin.value = ballOps.minR;
getRadMax.value = ballOps.maxR;
getVelMin.value = ballOps.minV;
getVelMax.value = ballOps.maxV;
getTrail.checked = trail;
getStroke.checked = stroke;

// set outputs
amountOut.textContent = amount;
hueMinOut.textContent = minMaxHue.min;
hueMaxOut.textContent = minMaxHue.max;
radMinOut.textContent = ballOps.minR;
radMaxOut.textContent = ballOps.maxR;
velMinOut.textContent = ballOps.minV;
velMaxOut.textContent = ballOps.maxV;

function toogleCtrl() {
  $(".control").slideToggle("slow");
}

$(".control").hide();

function changeAmount(val) {
  amount = parseInt(val, 10);
  amountOut.textContent = amount;
}

function changeHue(caller) {
  if (parseInt(getHueMin.value, 10) > parseInt(getHueMax.value, 10)) {
    if (caller.id === "hue-min") {
      getHueMax.value = getHueMin.value;
    }
    if (caller.id === "hue-max") {
      getHueMin.value = getHueMax.value;
    }
  }
  minMaxHue.min = parseInt(getHueMin.value, 10);
  minMaxHue.max = parseInt(getHueMax.value, 10);
  hueMinOut.textContent = minMaxHue.min;
  hueMaxOut.textContent = minMaxHue.max;
}

function changeRad(caller) {
  if (parseInt(getRadMin.value, 10) > parseInt(getRadMax.value, 10)) {
    if (caller.id === "rad-min") {
      getRadMax.value = getRadMin.value;
    }
    if (caller.id === "rad-max") {
      getRadMin.value = getRadMax.value;
    }
  }
  ballOps.minR = parseInt(getRadMin.value, 10);
  ballOps.maxR = parseInt(getRadMax.value, 10);
  radMinOut.textContent = ballOps.minR;
  radMaxOut.textContent = ballOps.maxR;
}

function changeVel(caller) {
  if (parseFloat(getVelMin.value, 10) > parseFloat(getVelMax.value, 10)) {
    if (caller.id === "vel-min") {
      getVelMax.value = getVelMin.value;
    }
    if (caller.id === "vel-max") {
      getVelMin.value = getVelMax.value;
    }
  }
  ballOps.minV = parseFloat(getVelMin.value, 10);
  ballOps.maxV = parseFloat(getVelMax.value, 10);
  velMinOut.textContent = ballOps.minV;
  velMaxOut.textContent = ballOps.maxV;
}

function changeTrail(caller) {
  trail = caller.checked;
}

function changeStroke(caller) {
  stroke = caller.checked;
}
