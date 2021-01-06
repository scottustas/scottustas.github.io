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
  replayBtn.addEventListener('click', resetAnimation, false);
  replayBtn.addEventListener('mouseover', replayBtnRollOverHandler, false);

  container.addEventListener('mouseover', ctaRollOverHandler, false);
  container.addEventListener('mouseout', ctaRollOutHandler, false);
}

function startAnimation(){
  TweenMax.from("#text1a", 1.0, { left: "-=800", ease:Expo.easeInOut });
  TweenMax.from("#text1b", 1.0, { delay:1.0, left: "-=800", ease:Expo.easeInOut });
  TweenMax.from("#tomatoes", 1.0, { delay:1.0, left: "-=400", ease:Expo.easeInOut });
  TweenMax.to("#text1a", 1.0, { delay:2.0, opacity: 0, ease:Expo.easeInOut });
  TweenMax.to("#text1b", 1.0, { delay:2.0, opacity: 0, ease:Expo.easeInOut });
  TweenMax.to("#text2a", 1.0, { delay:3.0, opacity: 1, ease:Expo.easeInOut });
  TweenMax.to("#text2b", 1.0, { delay:3.0, opacity: 1, ease:Expo.easeInOut });
  TweenMax.to("#cta", 1.0, { delay:3.0, opacity: 1, ease:Expo.easeInOut });
  TweenMax.fromTo("#glare", .4, {css: {left: -120}}, {css:{left:140}, delay:4.0, onComplete:addListeners});
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

