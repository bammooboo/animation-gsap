document.addEventListener("DOMContentLoaded", function() {
  setTimeout(function() {
    document.body.setAttribute('class', 'loaded');
    stopPetalsAnimation();
    pageLoaded();
    startTextAnimation();
  }, 3200);
});

// Pre-loader flower animation

const tlPetals = new TimelineMax();

TweenMax.to('.preLoader__inner', 6, {
  rotation: 360,
  repeat: 5,
  ease: Linear.easeNone
});

tlPetals.to('.petalsCenter', 0.4, {
  animation: 'petalAnimation 0.5s',
  opacity: 1
})
.to('.petalsOne', 0.4, {
  animation: 'petalAnimation 1s',
  opacity: 1,
})
.to('.petalsTwo', 0.4, {
  animation: 'petalAnimation 1s',
  opacity: 1
})
.to('.petalsThree', 0.4, {
  animation: 'petalAnimation 1s',
  opacity: 1
})
.to('.petalsFour', 0.4, {
  animation: 'petalAnimation 1s',
  opacity: 1
})
.to('petalsFive', 0.4, {
  animation: 'petalAnimation 1s',
  opacity: 1
})
.to('petalsSix', 0.4, {
  animation: 'petalAnimation 1s',
  opacity: 1
});

//Stop petal animation 

function stopPetalsAnimation() {
  TweenMax.killTweensOf('.preLoader__inner');
}

// Hide pre-loader element completely when page is loaded

function pageLoaded() {
  TweenMax.to('.preLoader__inner', 0.5, {
    opacity: 0
  });
  TweenMax.to('.loaded .preLoader', 1, {
    opacity: 0,
    delay: 0.5
  });
  setTimeout(function() {
    document.querySelector('.preLoader__inner').setAttribute('class', '.preLoader__inner hidden');
    document.querySelector('.preLoader').setAttribute('class', 'preLoader hidden');
  }, 1000);
}

//Start text animation when page loaded

function startTextAnimation() {
  const tlText = new TimelineMax();

  tlText.from('.hero__title', 1.5, {
    y: -100,
    opacity: 0
  })
  .from('.hero__text', 0.8, {
    y: -50,
    opacity: 0
  })
  .from('.button--bee-trigger', 0.8, {
    y: -20,
    opacity: 0
  })
}

//Hamburger menu animation on hover

document.querySelector('.header__menu-icon').addEventListener("mouseover", function() {
  TweenMax.to('.burger-line:first-child', 0.2, {
    x: 4
  });
  TweenMax.to('.burger-line:last-child', 0.2, {
    x: -4
  });
});

document.querySelector('.header__menu-icon').addEventListener("mouseleave", function() {
  TweenMax.to('.burger-line:first-child', 0.2, {
    x: 0
  });
  TweenMax.to('.burger-line:last-child', 0.2, {
    x:0
  });
});

const tlMenu = new TimelineMax({paused: true});

tlMenu.to('nav', 0.3, {
  autoAlpha: 1
})
.staggerFromTo('nav li', 0.5, {
  y: 100,
  opacity: 0
}, {
  y: 0,
  opacity: 1
}, 0.1);

//Open nav menu

document.querySelector('.header__menu-icon').addEventListener("click", function() {
  tlMenu.play(0);
});

//Close nav menu

document.querySelector('.nav__close').addEventListener("click", function() {
  tlMenu.reverse(0);
});

//Hero section - bees animations

const tlBeesLeft = new TimelineMax({repeat: -1, ease: Linear.easeNone});
const tlBeesRight = new TimelineMax({repeat: -1, ease: Linear.easeNone, delay: 0.3});

//shaking effect on beehive
TweenMax.fromTo('.beehive', 0.1, {
  x: -0.3
}, {
  x: 0.3,
  ease: RoughEase.ease,
  repeat: -1
});

// Bees hovering around beehive
tlBeesLeft.fromTo('.leftBee', 0.7, {
  y: -1
}, {
  y: 1
})
.fromTo('.leftBee', 0.7, {
  y: 1
}, {
  y: -1
})

tlBeesRight.fromTo('.rightBee', 0.7, {
  y: -1
}, {
  y: 1
})
.fromTo('.rightBee', 0.7, {
  y: 1
}, {
  y: -1
});

//Logo bee drop animation

document.querySelector('.button--bee-trigger').addEventListener("click", function() {
  const tlBeeDrop = new TimelineMax();
  const dropPoint = document.querySelector('.dropPoint').getClientRects();
  const targetDrop = dropPoint[0].x-40;

  tlBeeDrop.to('.header__logo', 2, {
    x: targetDrop,
  })
  .to('.header__logo', 3, {
    y: 205,
    rotation: 360,
    ease: Bounce.easeOut
  })
  .staggerTo('.beehive .beehivePiece', 2, {
    y: 100
  }, 0.1)
  .to('.beeEyeRight, .beeEyeLeft', 1, {
    y: 1
  })
});