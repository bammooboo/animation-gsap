'use strict';

document.addEventListener("DOMContentLoaded", function () {
  setTimeout(function () {
    document.body.setAttribute('class', 'loaded');
    stopPetalsAnimation();
    pageLoaded();
  }, 3200);
});

var tlPetals = new TimelineMax();

TweenMax.to('.preLoader__inner', 6, {
  rotation: 360,
  repeat: 5,
  ease: Linear.easeNone
});

tlPetals.to('.petalsCenter', 0.4, {
  animation: 'petalAnimation 0.5s',
  opacity: 1
}).to('.petalsOne', 0.4, {
  animation: 'petalAnimation 1s',
  opacity: 1
}).to('.petalsTwo', 0.4, {
  animation: 'petalAnimation 1s',
  opacity: 1
}).to('.petalsThree', 0.4, {
  animation: 'petalAnimation 1s',
  opacity: 1
}).to('.petalsFour', 0.4, {
  animation: 'petalAnimation 1s',
  opacity: 1
}).to('petalsFive', 0.4, {
  animation: 'petalAnimation 1s',
  opacity: 1
}).to('petalsSix', 0.4, {
  animation: 'petalAnimation 1s',
  opacity: 1
});

function stopPetalsAnimation() {
  TweenMax.killTweensOf('.preLoader__inner');
}

function pageLoaded() {
  TweenMax.to('.preLoader__inner', 0.5, {
    opacity: 0
  });
  TweenMax.to('.loaded .preLoader', 1, {
    opacity: 0,
    delay: 0.5
  });
  setTimeout(function () {
    document.querySelector('.preLoader__inner').setAttribute('class', '.preLoader__inner hidden');
    document.querySelector('.preLoader').setAttribute('class', 'preLoader hidden');
  }, 1000);
}