var timer = 60;
var score = 0;
var hitrn = 0;
// loop for multiple bubbles

function makeBubbles() {
  let clutter = " ";

  for (let i = 1; i <= 169; i++) {
    random = Math.floor(Math.random() * 10);

    clutter += `<div class="bubble">${random}</div>`;
  }

  document.querySelector(".pbottom").innerHTML = clutter;
}

// Making a timer function  of 60sec

function runtime() {
  var timervalue = setInterval(function () {
    if (timer > 0) {
      timer--;
      document.querySelector("#timerval").textContent = timer;
    } else {
      clearInterval(timervalue);
      document.querySelector(".pbottom").innerHTML = `<h1>Time's Up<h1/>`;
    }
  }, 1000);
}

// Random Hit Numbers
function hit() {
  hitrn = Math.floor(Math.random() * 10);
  document.querySelector("#hit").textContent = hitrn;
}

// incresing score by 10

function scoreInc() {
  score += 10;
  document.querySelector("#scoreval").textContent = score;
}

// Concept of Event-Bubbling

document.querySelector(".pbottom").addEventListener("click", function (dets) {
  var clickedNumber = Number(dets.target.textContent);
  // adding Everything

  if (clickedNumber === hitrn) {
    scoreInc();
    hit();
    makeBubbles();
  }
});

makeBubbles();
runtime();
hit();
// scoreInc();
