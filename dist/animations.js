'use strict';

(function () {
  document.addEventListener("DOMContentLoaded", function () {
    setTimeout(function () {
      document.body.setAttribute('class', 'loaded');
      stopPetalsAnimation();
      pageLoaded();
      startTextAnimation();
      startPopUpAnimation();
    }, 3200);
    startBees();
  });

  // Pre-loader flower animation

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
    setTimeout(function () {
      document.querySelector('.preLoader__inner').setAttribute('class', '.preLoader__inner hidden');
      document.querySelector('.preLoader').setAttribute('class', 'preLoader hidden');
      flowerAnimation();
      catAnimations();
    }, 1000);
  }

  function startBees() {
    particlesJS('beehive', {
      particles: {
        number: {
          value: 200,
          density: {
            enable: true,
            value_area: 800
          }
        },
        shape: {
          type: 'image',
          image: {
            src: 'images/bee.png',
            width: 100,
            height: 100
          },
          stroke: {
            width: 0,
            color: '#fff'
          },
          polygon: {
            nb_sides: 5
          }
        },
        size: {
          value: 20,
          random: true
        },
        line_linked: {
          enable: false
        },
        move: {
          enable: true,
          speed: 2,
          direction: 'none',
          random: false,
          straight: false,
          out_mode: 'out',
          bounce: false,
          attract: {
            enable: true,
            rotateX: 3000,
            rotateY: 3000
          }
        }
      },
      interactivity: {
        detect_on: 'canvas',
        events: {
          onhover: {
            enable: true,
            mode: 'bubble'
            // mode: 'repulse'
            // mode: 'grab'
          },
          onclick: {
            enable: true,
            mode: 'push'
          },
          resize: true
        },
        modes: {
          push: {
            particles_nb: 4
          },
          repulse: {
            distance: 50
          },
          bubble: {
            distance: 100,
            size: 30,
            opacity: 1,
            duration: 10
          }
        }
      }
    });
  }

  //Start text animation when page loaded

  function startTextAnimation() {
    var tlText = new TimelineMax();

    tlText.from('.hero__title', 1.5, {
      y: -100,
      opacity: 0
    }).from('.hero__text', 0.8, {
      y: -50,
      opacity: 0
    }).from('.button--bee-trigger', 0.8, {
      y: -20,
      opacity: 0
    });
  }

  //Hamburger menu animation on hover

  document.querySelector('.header__menu-icon').addEventListener("mouseover", function () {
    TweenMax.to('.burger-line:first-child', 0.2, {
      x: 4
    });
    TweenMax.to('.burger-line:last-child', 0.2, {
      x: -4
    });
    TweenMax.to('.beeEyeLeft, .beeEyeRight', 1, {
      x: 0.5,
      y: -0.5
    });
  });

  document.querySelector('.header__menu-icon').addEventListener("mouseleave", function () {
    TweenMax.to('.burger-line:first-child', 0.2, {
      x: 0
    });
    TweenMax.to('.burger-line:last-child', 0.2, {
      x: 0
    });
    TweenMax.to('.beeEyeLeft, .beeEyeRight', 1, {
      x: 0,
      y: 0
    });
  });

  var tlMenu = new TimelineMax({ paused: true });

  tlMenu.to('nav', 0.3, {
    autoAlpha: 1
  }).staggerFromTo('nav li', 0.5, {
    y: 100,
    opacity: 0
  }, {
    y: 0,
    opacity: 1
  }, 0.1);

  //Open nav menu

  document.querySelector('.header__menu-icon').addEventListener("click", function () {
    tlMenu.play(0);
  });

  //Close nav menu

  document.querySelector('.nav__close').addEventListener("click", function () {
    tlMenu.reverse(0);
  });

  //Hero section - bees animations

  var tlBeesLeft = new TimelineMax({ repeat: -1, ease: Linear.easeNone });
  var tlBeesRight = new TimelineMax({ repeat: -1, ease: Linear.easeNone, delay: 0.3 });

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
  }).fromTo('.leftBee', 0.7, {
    y: 1
  }, {
    y: -1
  });

  tlBeesRight.fromTo('.rightBee', 0.7, {
    y: -1
  }, {
    y: 1
  }).fromTo('.rightBee', 0.7, {
    y: 1
  }, {
    y: -1
  });

  //Logo bee drop animation

  var tlLogoBee = new TimelineMax({ repeat: -1, ease: Linear.easeNone, delay: 0, paused: true });
  var tlBeeDrop = new TimelineMax({ paused: true });
  var dropPoint = document.querySelector('.dropPoint').getClientRects();
  var targetDrop = dropPoint[0].x - 40;

  tlBeeDrop.to('.header__logo', 3, {
    x: targetDrop
  }).to('.header__logo', 3, {
    y: 205,
    rotation: 360,
    ease: Bounce.easeOut
  }).staggerTo('.beehive .beehivePiece', 2, {
    y: 100
  }, 0.1).to('.beeEyeRight, .beeEyeLeft', 1, {
    y: 1
  });
  // .to('.header__logo, .beehive, .beehivePiece', 2, {
  //   clearProps: 'all'
  // })

  var beeTrigger = document.querySelector('.button--bee-trigger');

  beeTrigger.addEventListener("click", function () {
    if (beeTrigger.classList.contains('active')) {
      beeTrigger.classList.remove('active');
      tlBeeDrop.reverse();
    } else {
      beeTrigger.classList.add('active');
      tlLogoBee.play();
      tlBeeDrop.play();
    }
  });

  //Bee pop up animation

  function startPopUpAnimation() {
    var tlBeePopup = new TimelineMax({ delay: 3 });

    tlBeePopup.to('.full-image__bee', 0.4, {
      ease: Back.easeOut.config(2.4),
      y: -150
    });

    TweenMax.fromTo('#bee-wing', 0.1, {
      rotation: 5,
      transformOrigin: 'right bottom'
    }, {
      rotation: -5,
      ease: RoughEase.ease,
      repeat: -1,
      transformOrigin: 'right bottom'
    });
  }

  function flowerAnimation() {
    var tlFlower = new TimelineMax();

    TweenMax.to('.burnt-flower__outer', 6, {
      rotation: 360,
      repeat: -1,
      ease: Linear.easeNone
    });

    tlFlower.to('.flower-center', 1, {
      animation: 'petalAnimation 0.5s',
      opacity: 1
    }).to('.flower-one', 1, {
      animation: 'petalAnimation 1s',
      opacity: 1
    }).to('.flower-two', 1, {
      animation: 'petalAnimation 1s',
      opacity: 1
    }).to('.flower-three', 1, {
      animation: 'petalAnimation 1s',
      opacity: 1
    }).to('.flower-four', 1, {
      animation: 'petalAnimation 1s',
      opacity: 1
    });
  }

  function catAnimations() {
    TweenMax.fromTo('.cat-tail', 2, {
      rotation: 5,
      transformOrigin: 'left bottom'
    }, {
      rotation: -5,
      delay: 0,
      repeat: -1,
      repeatDelay: 0.1,
      yoyo: true,
      immediateRender: false,
      transformOrigin: 'left bottom'
    });

    var tlCat = new TimelineMax({ repeat: 5, repeatDelay: 5 });

    tlCat.fromTo('.left-ear', 0.2, {
      rotation: 4,
      transformOrigin: 'right bottom'
    }, {
      rotation: -4,
      ease: RoughEase.ease,
      transformOrigin: 'right bottom'
    });
  }
})();