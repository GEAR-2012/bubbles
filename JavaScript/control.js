/*
 */
// control panel itself
$("#controls").hide();
$("#btn-ctrl-open").click(() => $("#controls").fadeIn());
$("#btn-ctrl-close").click(() => $("#controls").fadeOut());

// SETTINGS
const amountSpec = { min: 1, max: 3000, value: 220 };
const hueSpec = { min: 0, max: 360, values: [0, 360] };
const radSpec = { min: 1, max: 160, values: [1, 16] };
const velSpec = { min: 0, max: 30, step: 0.1, values: [1.4, 8.6] };
const opsSpec = { ops1: true, ops2: true };
const animate = true;

// setting variables for 'animation.js'
amount = amountSpec.value; // amount of balls
minMaxHue = { min: hueSpec.values[0], max: hueSpec.values[1] }; // for making random ball color
ballOps = {
  minR: radSpec.values[0],
  maxR: radSpec.values[1],
  minV: velSpec.values[0],
  maxV: velSpec.values[1],
}; // for making random balls
trail = opsSpec.ops1;
stroke = opsSpec.ops2;

// SET WIDGETS
// amount of bubbles
$("#spinner-bubbles-1").spinner(amountSpec);
$("#slider-bubbles").slider(amountSpec);
$("#spinner-bubbles-1").val(amountSpec.value);
// hue range of bubbles
$("#spinner-hue-1").spinner(hueSpec);
$("#spinner-hue-2").spinner(hueSpec);
$("#slider-range-hue").slider(hueSpec);
$("#spinner-hue-1").val(hueSpec.values[0]);
$("#spinner-hue-2").val(hueSpec.values[1]);
// rad range of bubbles
$("#spinner-rad-1").spinner(radSpec);
$("#spinner-rad-2").spinner(radSpec);
$("#slider-range-rad").slider(radSpec);
$("#spinner-rad-1").val(radSpec.values[0]);
$("#spinner-rad-2").val(radSpec.values[1]);
// vel range of bubbles
$("#spinner-vel-1").spinner(velSpec);
$("#spinner-vel-2").spinner(velSpec);
$("#slider-range-vel").slider(velSpec);
$("#spinner-vel-1").val(velSpec.values[0]);
$("#spinner-vel-2").val(velSpec.values[1]);

// options
$("input[type='checkbox']").click(function () {
  if (this.id === "checkbox-1") {
    trail = this.checked;
  } else if (this.id === "checkbox-2") {
    stroke = this.checked;
  }
  this.blur();
});
$("#checkbox-1").prop("checked", opsSpec.ops1);
$("#checkbox-2").prop("checked", opsSpec.ops2);
$("input[type='checkbox']").checkboxradio(
  "option",
  "classes.ui-checkboxradio",
  "highlight"
);

// start - stop
if (animate) {
  $("#radio-1").prop("checked", true);
  start();
} else {
  $("#radio-2").prop("checked", true);
}
$("#radio-1").click(start);
$("#radio-2").click(stop);
$("input[type='radio']").checkboxradio(
  "option",
  "classes.ui-checkboxradio",
  "highlight"
);
