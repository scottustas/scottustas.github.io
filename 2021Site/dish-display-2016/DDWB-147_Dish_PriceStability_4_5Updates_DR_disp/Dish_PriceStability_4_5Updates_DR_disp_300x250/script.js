var container;
var content;
var endFrameReached;

var ids = [
"#text1","#text2","#text3","#cta1","#cta2","#glare","#hand1","#hand2","#hand3","#cta","#replayBtn","#disclaimer","#text4","#text5","#text6","#text7"
];

function init(){

  container = document.getElementById('container');
  content = document.getElementById('content');
  
  addListeners();
  container.style.display = "block";
  content.style.display = "block";  
  startAnimation();
  endFrameReached = false;

}

function addListeners() {

  replayBtn.addEventListener('click', resetAnimation, false);
  replayBtn.addEventListener('mouseover', replayBtnRollOverHandler, false);

  container.addEventListener('mouseover', ctaRollOverHandler, false);
  container.addEventListener('mouseout', ctaRollOutHandler, false);

  disclaimer.addEventListener('mouseover', disclaimerRollOverHandler, false);
  disclaimer.addEventListener('mouseout', disclaimerRollOutHandler, false);
}

function startAnimation(){

  TweenMax.to("#text1", 1, {delay:2, top:"-=250", ease:Expo.easeOut});
  TweenMax.from("#hand1", .35, {delay:2, alpha:0, top:"+=250",  ease:Expo.easeOut});
  TweenMax.from("#hand2", .35, {delay:2.1, alpha:0, top:"+=250",  ease:Expo.easeOut});
  TweenMax.from("#hand3", .35, {delay:2.2, alpha:0, top:"+=250",  ease:Expo.easeOut});

  TweenMax.to("#hand1", 1, {delay:3.5, left:"-=350", ease:Expo.easeInOut});
  TweenMax.to("#hand2", 1, {delay:3.5, left:"-=350", ease:Expo.easeInOut});
  TweenMax.to("#hand3", 1, {delay:3.5, left:"-=350", ease:Expo.easeInOut});
  TweenMax.from("#text2", 1, {delay:3.5, left:"+=350", ease:Expo.easeInOut});

  TweenMax.to("#text2", 1, {delay:6, left:"-=300", ease:Expo.easeInOut});
  TweenMax.from("#text3", 1, {delay:6, left:"+=300", ease:Expo.easeInOut});

  TweenMax.to("#text3", 1, {delay:8, top:"+=300", ease:Expo.easeInOut});
  TweenMax.from("#text4", 1, {delay:8, scale:0, ease:Expo.easeInOut});

  //TweenMax.to("#text4", 1, {delay:9, scale:1.1, ease:Linear.easeNone});

  TweenMax.to("#text4", 1, {delay:9, top:"+=300", alpha:0, ease:Expo.easeInOut});
  TweenMax.from("#text5", 1, {delay:9, scale:0, ease:Expo.easeInOut});

  TweenMax.to("#text5", 1, {delay:11.75,  top:"+=300", alpha:0, ease:Expo.easeInOut});
  TweenMax.from("#text6", 1, {delay:11.75, scale:0, ease:Expo.easeInOut});

  TweenMax.to("#text6", 1, {delay:13.75, left:"-=300", ease:Expo.easeInOut});
  TweenMax.from("#text7", 1, {delay:13.75, left:"+=300", ease:Expo.easeInOut});

  TweenMax.to("#cta", .35, {delay:14.75, scale:1.05, ease:Expo.easeOut, onComplete:function()
     {
        TweenMax.to("#cta", .35, {scale:1, ease:Expo.easeOut});
        TweenMax.to("#glare", .35, {left:117, ease:Quad.easeOut, yoyo:false, repeat:1, overwrite:"all"});
        endFrame();
     }
  });

  TweenMax.from("#disclaimer", .5, {delay:14.5, top:"+=25", ease:Expo.easeOut});
  TweenLite.from("#replayBtn", .5, {delay:14.75, autoAlpha:0, rotation:-360, ease:Expo.easeOut});
}

function resetAnimation(){
  TweenLite.set(ids, {clearProps:"all"});
  TweenLite.delayedCall(.01, init);
} 

function ctaRollOverHandler(){
 // if (endFrameReached) TweenLite.to("#cta", .125, {scale:1.1, overwrite:true, ease:Expo.easeOut});
  if (endFrameReached) TweenLite.fromTo("#glare", .5, {css: {left: -120}}, {css:{left:125}} );
}

function ctaRollOutHandler(){
  if (endFrameReached) TweenLite.to("#cta", .25, {scale:1.01, overwrite:false, ease:Expo.easeOut});
}

function endFrame(){
  endFrameReached = true;
}

function replayBtnRollOverHandler() {
  TweenMax.to("#replayBtn", 1, {rotation:"+=360", overwrite:true, ease:Expo.easeOut});
}

function disclaimerRollOverHandler() {
  TweenMax.to("#disclaimer", .25, {top:180, overwrite:true, ease:Expo.easeOut});
}

function disclaimerRollOutHandler() {
  TweenMax.to("#disclaimer", .25, {top:207, overwrite:true, ease:Expo.easeOut});
}

// wait until DOM is ready
document.addEventListener("DOMContentLoaded", function(event) {

  // wait until window, stylesheets, images, links, and other media assets are loaded
  window.onload = function() {

      // add code here
      init();
  };

});