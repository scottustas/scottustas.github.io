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

  //TweenMax.from("#logo", .5, {delay:1, top:72, ease:Sine.easeOut});
  TweenMax.to("#background", 15, { x:"+=150",ease: Linear.easeNone});
  // TweenMax.to("#sol", 1, {delay: 1, scale:0.35, x:"+=137", y:"+=8",ease: Linear.easeNone});
  TweenMax.to("#sol", 1, {delay: 1, scale:0.3, x:"+=158", y:"+=1",ease: Linear.easeNone});



  // TweenMax.to("#text", .5, {delay: 0, scale:0.31});
  TweenMax.to("#text", 1, {delay: 1, left:0,  ease: Linear.easeNone});
  TweenMax.to("#cta", 1, {delay: 1, left:18, top:194,ease: Linear.easeNone,  onComplete:addListeners});
  TweenMax.to(".glare", 1, { delay: 2.5, left:355, ease:Linear.easeNone});



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
  TweenMax.fromTo(".glare", 1, {css: {left: -75}}, {css:{left:355}, ease:Linear.easeNone} );
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