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
  TweenMax.from("#text1", .5, {delay:.25, left:"+=300", ease:Expo.easeOut});
  TweenMax.from("#text1Shadow", .5, {delay:.25, left:"+=300", ease:Expo.easeOut});
  TweenMax.to("#f1Holder", .25, {delay:2, rotationX:90,  ease:Linear.easeNone});
  TweenMax.from("#f2Holder", .5, {delay:2.25, rotationX:-90,  ease:Expo.easeOut});
  TweenMax.to("#f2Holder", .25, {delay:4.25, rotationX:90,  ease:Linear.easeNone});
  TweenMax.from("#f3Holder", .5, {delay:4.5, rotationX:-90,  ease:Expo.easeOut});
  TweenMax.to("#f3Holder", .25, {delay:8, rotationX:90,  ease:Linear.easeNone});
  TweenMax.from("#f4Holder", .5, {delay:8.25, rotationX:-90,  ease:Expo.easeOut});
  TweenMax.from("#cta", .25, {delay:8.75, alpha:0, ease:Expo.easeOuts});
  TweenMax.fromTo("#glare", .4, {css: {left: -120}}, {css:{left:125}, delay:9, onComplete:addListeners});
}

function resetAnimation(){
  TweenMax.set(ids, {clearProps:"all"});
  TweenMax.delayedCall(.01, init);
} 

function replayBtnRollOverHandler(){
  //TweenMax.to("#replayBtn", 1, {rotation:"+=360", overwrite:true, ease:Expo.easeOut});
}

function ctaRollOverHandler(){
  TweenMax.set("#cta", {scale:1.05, overwrite:true, ease:Expo.easeOut});
  TweenMax.fromTo("#glare", .4, {css: {left: -120}}, {css:{left:125}} );
}

function ctaRollOutHandler(){
  TweenMax.set("#cta", {scale:1.01, overwrite:false, ease:Expo.easeOut});
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