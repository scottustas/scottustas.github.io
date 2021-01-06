var tl, hotspot, container, ctaPlaying = false;

window.onload = function() {
  hotspot     = document.getElementById('hotspot');
  container   = document.getElementById('container_dc');

  showBanner();
  startAnimation();
  addListeners();
}

showBanner = function() {
  container.style.display = 'block'
}

startAnimation = function() {
  tl = new TimelineMax();

  var easeIn  = Back.easeOut.config(0.55),
      easeOut = Back.easeIn.config(0.45);

  tl.from('#txt1', .65, { y: -150, ease: easeIn })
  tl.to('#txt1',   .65, { delay: 1.75, y: 150,  ease: easeOut })

  tl.from('#txt2', .65, { y: -150, ease: easeIn })
  tl.to('#txt2',   .65, { delay: 1.75, y: 150,  ease: easeOut })

  tl.add('cta');
  tl.from('#cta_txt', .65, { y: -150, ease: easeIn }, 'cta');
  tl.from('#cta', .65, { alpha: 0, ease: easeIn });

  tl.add( function() {
    ctaRollAni();
  })
};

addListeners = function() {
  hotspot.addEventListener("click", clickHandler, false);
  hotspot.addEventListener("mouseenter", ctaRollHandler, false);
};

clickHandler = function(e) {
  switch(e.currentTarget.id) {
    case "hotspot":
      window.open(window.clickTag,'_blank');
      break;
  }
};

ctaRollHandler = function(e) {
  if(e.type == "mouseenter") {
    ctaRollAni();
  }
}


ctaRollAni = function(){
  if(ctaPlaying != true){
    ctaPlaying = true;
    TweenMax.killTweensOf('#shine');

    TweenMax.set('#shine', { opacity: 0.25 });
    TweenMax.to('#shine', 0.75, { opacity:0.7, x:195, ease:Power2.easeIn, onComplete: function() {
      TweenMax.to('#shine', 0.45, { opacity:0.45, x:0, ease:Power2.easeIn, onComplete: function() {
        TweenMax.set('#shine', { x:0 });
        ctaPlaying =false;
      }});
    }});
  }
}
