var container;
var content;
var endFrameReached;

var ids = [

];

function init(){
  container = document.getElementById('container');
  content = document.getElementById('content');
  
  container.style.display = "block";
  content.style.display = "block";  
  startAnimation();
}

function addListeners() {
  //replayBtn.addEventListener('click', resetAnimation, false);
  //replayBtn.addEventListener('mouseover', replayBtnRollOverHandler, false);

  container.addEventListener('mouseover', ctaRollOverHandler, false);
  container.addEventListener('mouseout', ctaRollOutHandler, false);

}

function startAnimation(){

 // TweenMax.from("#logo", .5, {delay:1, top:72, ease:Sine.easeOut});

  TweenMax.to("#car", 2, {delay:1, left:300, ease:Linear.easeNone});
  TweenMax.to("#leftWheel", 2, {delay:1, rotation:1180, ease:Linear.easeNone});
  TweenMax.to("#rightWheel", 2, {delay:1, rotation:1180, ease:Linear.easeNone});

  TweenMax.to("#textMask", 1.15, {delay:1.65, width:300, ease:Linear.easeNone});

  TweenMax.to("#textShineMask", .25, {delay:2.35, alpha:1});
  TweenMax.to("#textShine", .25, {delay:2.35, alpha:1});

  TweenMax.to("#textShine", 1, {delay:3.1, left:235, ease:Linear.easeNone});

  TweenMax.from("#cta", 1.5, {delay:2.3, alpha:0, ease:Expo.easeOut,  onComplete:addListeners});

}

function resetAnimation(){
  TweenMax.set(ids, {clearProps:"all"});
  TweenMax.delayedCall(.01, init);
} 

function replayBtnRollOverHandler(){
  //TweenMax.to("#replayBtn", 1, {rotation:"+=360", overwrite:true, ease:Expo.easeOut});
}

function ctaRollOverHandler(){
  //TweenMax.set("#cta", {scale:1.05, overwrite:true, ease:Expo.easeOut});
  TweenMax.fromTo("#textShine", 1, {css: {left: -255}}, {css:{left:235}, ease:Linear.easeNone} );
}

function ctaRollOutHandler(){
  //TweenMax.set("#cta", {scale:1.01, overwrite:false, ease:Expo.easeOut});
}

function endFrame(){
  endFrameReached = true;
}

// wait until DOM is ready
document.addEventListener("DOMContentLoaded", function(event) {

  // wait until window, stylesheets, images, links, and other media assets are loaded
  window.onload = function() {

      // add code here
      init();
  };

});