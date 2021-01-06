var container;
var content;
var endFrameReached;

var ids = [

];

// function initEB() {
//   if (!EB.isInitialized()) {
//     EB.addEventListener(EBG.EventName.EB_INITIALIZED, init);
//   } else {
//     init();
//   }
// }

function init(){
  container = document.getElementById('container');
  content = document.getElementById('content');
  
  container.style.display = "block";
  content.style.display = "block";  
  startAnimation();
}

function addListeners() {
  //replayBtn.addEventListener('click', resetAnimation, false);
  //replayBtn.addEventListener('mouseover', replayBtnRollOverHandler, false);5
  container.addEventListener('mouseover', ctaRollOverHandler, false);
  container.addEventListener('mouseout', ctaRollOutHandler, false);

}

function startAnimation(){

  //TweenMax.from("#logo", .5, {delay:1, top:72, ease:Sine.easeOut});
  TweenMax.to("#background", 15, { x:"+=150", transformOrigin:"right", ease: Linear.easeNone});
  // TweenMax.to("#sol", .75, {delay: 1, scale:0.42, x:"+=5", y:"+=180", transformOrigin:"right", ease: Linear.easeNone});
  TweenMax.to("#sol", .75, {delay: 1, scale:0.57, x:"+=17", y:"+=196", transformOrigin:"right", ease: Linear.easeNone});
  TweenMax.to("#text", .25, {delay: 2, left:15, top:110, transformOrigin:"right", ease: Linear.easeNone});
  TweenMax.to("#cta", .25, {delay: 2, left:15, top:240, transformOrigin:"right", ease: Linear.easeNone,  onComplete:addListeners});
  TweenMax.to(".glare", 5.5, { delay:2.5, left:580, ease:Expo.easeOut});

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
  TweenMax.fromTo(".glare", 1, {css: {left: -105}}, {css:{left:355}, ease:Linear.easeNone} );
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