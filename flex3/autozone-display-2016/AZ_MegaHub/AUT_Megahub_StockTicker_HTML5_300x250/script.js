var container;
var content;
var endFrameReached;

var ids = [

];

function init(){

  container = document.getElementById('container');
  content = document.getElementById('content');
  
  addListeners();
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

  TweenLite.from("#speedBar", .5, {delay:0, left:"-=300", ease:Expo.easeOut});
  TweenLite.from("#logo", .5, {delay:0, top:"+=50", ease:Expo.easeOut});
  TweenLite.from("#btmBar", .5, {delay:0, top:"+=50", ease:Expo.easeOut});
  TweenLite.from("#cta", .25, {delay:.5, scale:0, ease:Back.easeOut});
  TweenLite.to("#glare", .4, {delay:.75, left:125});

  TweenLite.fromTo("#text1", 8, {css: {left: 5}}, {css:{left:-1380}, delay:1, ease: Linear.easeNone });

  TweenLite.to("#textContainer", 4, {delay:2, left:"-=1000", ease:Expo.easeIn});
  TweenLite.to("#textBlur", 2, {delay:4, left:"-=1650",ease: Circ.easeIn });

  TweenLite.from("#text2a", .25, {delay:6.75, left:"+=300", ease:Expo.easeOut});
  TweenLite.from("#text2b", .25, {delay:7.5, left:"+=300", ease:Expo.easeOut});

  TweenLite.to("#text2a", .25, {delay:9.75, left:"-=300", ease:Expo.easeIn});
  TweenLite.to("#text2b", .25, {delay:9.75, left:"-=300", ease:Expo.easeIn});

  TweenLite.from("#text3a", .25, {delay:10, left:"+=300", ease:Expo.easeOut});
  TweenLite.from("#text3b", .25, {delay:10.75, left:"+=300", ease:Expo.easeOut, onComplete:ctaRollOverHandler});
  TweenLite.delayedCall(11.9, ctaRollOutHandler);
  //TweenLite.from("#replayBtn", .5, {delay:5, autoAlpha:0, rotation:-360, ease:Expo.easeOut});

}

function resetAnimation(){

  TweenLite.set(ids, {clearProps:"all"});
  TweenLite.delayedCall(.01, init);
} 

function replayBtnRollOverHandler(){

  //TweenLite.to("#replayBtn", 1, {rotation:"+=360", overwrite:true, ease:Expo.easeOut});
}

function ctaRollOverHandler(){

  TweenLite.set("#cta", {scale:1.05, overwrite:true, ease:Expo.easeOut});
  TweenLite.fromTo("#glare", .4, {css: {left: -120}}, {css:{left:125}} );
}

function ctaRollOutHandler(){
  TweenLite.set("#cta", {scale:1.01, overwrite:false, ease:Expo.easeOut});
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