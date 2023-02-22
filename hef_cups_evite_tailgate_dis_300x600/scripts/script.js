var container;
var content;

function initEB() {
  if (!EB.isInitialized()) {
    EB.addEventListener(EBG.EventName.EB_INITIALIZED, init);
  } else {
    init();
  }
}

function init(){
  container = document.getElementById('container');
  content = document.getElementById('content');

  container.style.display = "block";
  content.style.display = "block";
  startAnimation();
}

function addListeners() {

  container.addEventListener('mouseover', ctaRollOverHandler, false);
  container.addEventListener('mouseout', ctaRollOutHandler, false);

}

function startAnimation(){

  TweenMax.set("#boxShadow", {scaleX:.9});

  container.addEventListener('click', clickthrough, false);


  TweenMax.from("#text1", .3, {delay:1, left:-300, ease:Expo.easeIn});
  TweenMax.from("#text2", .3, {delay:2, left:-300, ease:Expo.easeIn});
  TweenMax.from("#cta", .3, {delay:3, left:-300, ease:Expo.easeIn});
}

function clickthrough() {
  EB.clickthrough();
  console.log("Sizmek Click");
}

function resetAnimation(){
  TweenMax.delayedCall(.01, init);
}

function resetBox(){
  TweenMax.set("#heftyBox", {top:-185, left:37, alpha:1, rotation:22});
  TweenMax.set("#boxShadow", {top:145, left:0, alpha:0, scaleX:1, scale:1.25});
}

function replayBtnRollOverHandler(){

}

function ctaRollOverHandler(){
  // TweenMax.fromTo("#glare", .5, {css: {left: -200}}, {css:{left:200}} );
}

function ctaRollOutHandler(){
}

// wait until DOM is ready
document.addEventListener("DOMContentLoaded", function(event) {

  // wait until window, stylesheets, images, links, and other media assets are loaded
  window.onload = function() {

      // add code here
      initEB();
  };

});
