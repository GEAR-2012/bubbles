/* amount of bubbles */
$("#controlgroup-bubbles").controlgroup();

$("#spinner-bubbles-1").spinner({
  spin: function (e, ui) {
    $("#slider-bubbles").slider("value", ui.value);
    amount = ui.value;
  },
});

$("#slider-bubbles").slider({
  range: "min",
  slide: function (event, ui) {
    $("#spinner-bubbles-1").spinner("value", ui.value);
    amount = ui.value;
  },
});
/* end of amount of bubbles */
/* hue range of bubbles */
$("#controlgroup-hue").controlgroup();

$("#spinner-hue-1").spinner({
  spin: function (e, ui) {
    if ($("#spinner-hue-2").val() < ui.value) {
      $("#spinner-hue-2").val(ui.value);
      $("#slider-range-hue").slider("values", 1, ui.value);
      minMaxHue.max = ui.value;
    }
    $("#spinner-hue-1").val(ui.value);
    $("#slider-range-hue").slider("values", 0, ui.value);
    minMaxHue.min = ui.value;
  },
});

$("#spinner-hue-2").spinner({
  spin: function (e, ui) {
    if ($("#spinner-hue-1").val() > ui.value) {
      $("#spinner-hue-1").val(ui.value);
      $("#slider-range-hue").slider("values", 0, ui.value);
      minMaxHue.min = ui.value;
    }
    $("#spinner-hue-2").val(ui.value);
    $("#slider-range-hue").slider("values", 1, ui.value);
    minMaxHue.max = ui.value;
  },
});

$("#slider-range-hue").slider({
  range: true,
  slide: function (event, ui) {
    $("#slider-range-hue").slider("values", 0, ui.values[0]);
    $("#slider-range-hue").slider("values", 1, ui.values[1]);
    $("#spinner-hue-1").val(ui.values[0]);
    $("#spinner-hue-2").val(ui.values[1]);
    minMaxHue.min = ui.values[0];
    minMaxHue.max = ui.values[1];
  },
});
/* end of hue range of bubbles */

/* rad range of bubbles */
$("#controlgroup-rad").controlgroup();

$("#spinner-rad-1").spinner({
  spin: function (e, ui) {
    if ($("#spinner-rad-2").val() < ui.value) {
      $("#spinner-rad-2").val(ui.value);
      $("#slider-range-rad").slider("values", 1, ui.value);
      ballOps.maxR = ui.value;
    }
    $("#spinner-rad-1").val(ui.value);
    $("#slider-range-rad").slider("values", 0, ui.value);
    ballOps.minR = ui.value;
  },
});

$("#spinner-rad-2").spinner({
  spin: function (e, ui) {
    if ($("#spinner-rad-1").val() > ui.value) {
      $("#spinner-rad-1").val(ui.value);
      $("#slider-range-rad").slider("values", 0, ui.value);
      ballOps.minR = ui.value;
    }
    $("#spinner-rad-2").val(ui.value);
    $("#slider-range-rad").slider("values", 1, ui.value);
    ballOps.maxR = ui.value;
  },
});

$("#slider-range-rad").slider({
  range: true,
  slide: function (event, ui) {
    $("#slider-range-rad").slider("values", 0, ui.values[0]);
    $("#slider-range-rad").slider("values", 1, ui.values[1]);
    $("#spinner-rad-1").val(ui.values[0]);
    $("#spinner-rad-2").val(ui.values[1]);
    ballOps.minR = ui.values[0];
    ballOps.maxR = ui.values[1];
  },
});

/* end of rad range of bubbles */

/* vel range of bubbles */
$("#controlgroup-vel").controlgroup();

$("#spinner-vel-1").spinner({
  spin: function (e, ui) {
    if ($("#spinner-vel-2").val() < ui.value) {
      $("#spinner-vel-2").val(ui.value);
      $("#slider-range-vel").slider("values", 1, ui.value);
      ballOps.maxV = ui.value;
    }
    $("#spinner-vel-1").val(ui.value);
    $("#slider-range-vel").slider("values", 0, ui.value);
    ballOps.minV = ui.value;
  },
});

$("#spinner-vel-2").spinner({
  spin: function (e, ui) {
    if ($("#spinner-vel-1").val() > ui.value) {
      $("#spinner-vel-1").val(ui.value);
      $("#slider-range-vel").slider("values", 0, ui.value);
      ballOps.minV = ui.value;
    }
    $("#spinner-vel-2").val(ui.value);
    $("#slider-range-vel").slider("values", 1, ui.value);
    ballOps.maxV = ui.value;
  },
});

$("#slider-range-vel").slider({
  range: true,
  slide: function (event, ui) {
    $("#slider-range-vel").slider("values", 0, ui.values[0]);
    $("#slider-range-vel").slider("values", 1, ui.values[1]);
    $("#spinner-vel-1").val(ui.values[0]);
    $("#spinner-vel-2").val(ui.values[1]);
    ballOps.minV = ui.values[0];
    ballOps.maxV = ui.values[1];
  },
});

/* end of vel range of bubbles */

$("#controlgroup-ops").controlgroup();

$("input[type='checkbox']").checkboxradio({
  icon: false,
});

$("#controlgroup-start-stop").controlgroup();

$("input[type='radio']").checkboxradio({
  icon: false,
});
