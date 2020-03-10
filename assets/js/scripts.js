const screenWidth = (window.innerWidth > 0) ? window.innerWidth : self.innerWidth;
let animate_In, animate_Out, mode_Slider, mouse_Drag;


function hero() {
  const carouselHero = document.getElementById('hero');
  
  if (screenWidth >= 1178) {
    animate_In = 'tns-fadeIn';
    animate_Out = 'tns-fadeOut';
    mode_Slider = 'gallery';
    mouse_Drag = 'false';
  } else {
    animate_In = 'tns-normal';
    animate_Out = 'tns-normal';
    mode_Slider = 'carousel';
    mouse_Drag = 'true';
  }

  if (carouselHero != null) {
    const carousel = tns({
      container: carouselHero,
      loop: true,
      controls: false,
      nav: false,
      autoplay: true,
      autoplayTimeout: 5000,
      speed: 600,
      autoplayButton: false,
      autoplayButtonOutput: false,
      gutter: 0,
      touch: false,
      items: 1,
      preventActionWhenRunning: false,
      preventScrollOnTouch: 'auto',
      animateIn: animate_In,
      animateOut: animate_Out,
      mode: mode_Slider,
      mouseDrag: mouse_Drag,
      responsive: {
        0: {
          touch: true
        },
        1178: {
          touch: false
        }
      }
    });
  }
}

hero();


function carousel() {
  const carouselImg = document.getElementById('carousel');

  if (carouselImg != null) {
    const carousel = tns({
      container: carouselImg,
      loop: true,
      controls: false,
      nav: false,
      autoplay: true,
      autoplayTimeout: 5000,
      speed: 600,
      autoplayButton: false,
      autoplayButtonOutput: false,
      gutter: 0,
      touch: true,
      items: 1,
      preventActionWhenRunning: false,
      mouseDrag: true
    });
  }
}

carousel();