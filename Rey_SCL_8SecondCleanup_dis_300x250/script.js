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
  addListeners();
}

function addListeners() {
  container.addEventListener('mouseover', ctaRollOverHandler, false);
  container.addEventListener('mouseout', ctaRollOutHandler, false);
}

function startAnimation(){

  container.addEventListener('click', clickthrough, false);

  TweenMax.from("#circle2", .5, {delay:1, alpha:0, scaleY:0, ease:Expo.easeIn});
  TweenMax.from("#circle", .5, {delay:1, alpha:0, ease:Expo.easeIn});

  TweenMax.to("#text1", .5, {delay:.85, alpha:0, ease:Expo.easeIn});

  TweenMax.to("#scl_f1", .25, {delay:2, alpha:0, ease:Linear.easeNone});
  TweenMax.to("#circle2", .25, {delay:2, rotation:70, transformOrigin: "152px 125px", ease:Linear.easeNone});

  TweenMax.to("#scl_f2", .25, {delay:2.25, alpha:0, ease:Linear.easeNone});
  TweenMax.to("#circle2", .25, {delay:2.25, rotation:250, ease:Linear.easeNone});

  TweenMax.to("#scl_f3", .25, {delay:2.5, alpha:0, ease:Linear.easeNone});
  TweenMax.to("#circle2", .25, {delay:2.5, rotation:360, ease:Linear.easeNone});

  TweenMax.to("#scl_f4", .25, {delay:3, alpha:0, ease:Expo.easeIn});
  TweenMax.to("#circle", .25, {delay:3, alpha:0, ease:Expo.easeIn});
  TweenMax.to("#circle2", .25, {delay:3, scaleY:0, alpha:0, ease:Expo.easeIn});
  TweenMax.from("#text2", .25, {delay:3, alpha:0, ease:Expo.easeIn});

  TweenMax.to("#scl_f5", .25, {delay:5, alpha:0, ease:Expo.easeOut});
  TweenMax.to("#text2", .25, {delay:5, alpha:0, ease:Expo.easeOut});
  TweenMax.from("#stopWatch", .25, {delay:5, scale:0, ease:Back.easeOut});
  TweenMax.from("#logo2", .25, {delay:5, alpha:0, top:"+=25", ease:Expo.easeOut});
  TweenMax.to("#logo", .25, {delay:5, alpha:0, ease:Expo.easeOut});

  TweenMax.to("#stopWatch", .25, {delay:7, scale:2, alpha:0, ease:Back.easeIn});
  TweenMax.from("#scl_box", .25, {delay:7.25, scale:0, ease:Expo.easeOut});

}

function clickthrough() {
  EB.clickthrough();
  console.log("Sizmek Click");
}

function resetAnimation(){
  TweenMax.set(ids, {clearProps:"all"});
  TweenMax.delayedCall(.01, init);
} 

function replayBtnRollOverHandler(){
  //TweenMax.to("#replayBtn", 1, {rotation:"+=360", overwrite:true, ease:Expo.easeOut});
}

function ctaRollOverHandler(){
  TweenMax.set("#cta", {scale:1.1, overwrite:true, ease:Expo.easeOut});
  //TweenMax.fromTo("#glare", .5, {css: {left: -200}}, {css:{left:200}} );
}

function ctaRollOutHandler(){
  TweenMax.set("#cta", {scale:1, overwrite:false, ease:Expo.easeOut});
}

// wait until DOM is ready
document.addEventListener("DOMContentLoaded", function(event) {

  // wait until window, stylesheets, images, links, and other media assets are loaded
  window.onload = function() {

      // add code here
      initEB();
  };

});