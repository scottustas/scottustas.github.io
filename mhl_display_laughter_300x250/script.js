var container;
var content;
var tl = new TimelineMax({delay:0.5, repeat:0, repeatDelay:0, });
var tl2 = new TimelineMax({delay:0.5, repeat:0, repeatDelay:0, });

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
  replayBtn.addEventListener('mouseover', replayBtnRollOverHandler, false);
  replayBtn.addEventListener('click', replayAnimation, false);
}

function startAnimation(){

  tl2.to("#light", 15, {rotation:720, ease:Linear.easeNone});

  tl.from(["#bottle"], .5, {delay:0, y:+250})
  .from("#light", .5, {delay:0, alpha:0, y:+250},"-=.5")
  .from("#text1", .5, {delay:0, y:-150, ease:Back.easeOut})
  .from("#text2", .5, {delay:.5, x:-150, ease:Back.easeOut})
  .from(["#cta","#legal"], .5, {delay:.25, alpha:0, onComplete:ctaRollOverHandler})
  .set("#ctaOut",{onComplete:ctaRollOutHandler,delay:.5} )
  .from('#replayBtn',   .75, {  left:"+=25", rotation:"-=360", alpha:0, ease:Expo.easeOut,onComplete:addListeners},"-=.5")
}

window.onload = function(e) {
  init();
};

function ctaRollOverHandler(){
  TweenMax.to("#ctaImage", .5, {alpha:0, overwrite:true, ease:Expo.easeOut});
  TweenMax.to("#ctaImage2", .5, {alpha:1, overwrite:true, ease:Expo.easeOut});
  TweenMax.fromTo("#glare", 1.25, {css: {left: -100}}, {css:{left:150}} );
}

function ctaRollOutHandler(){
  TweenMax.to("#ctaImage", .5, {alpha:1, overwrite:true, ease:Expo.easeOut});
  TweenMax.to("#ctaImage2", .5, {alpha:0, overwrite:true, ease:Expo.easeOut});
}

function replayAnimation(){
  tl.restart();
  tl2.restart();
} 

function replayBtnRollOverHandler(){
  TweenMax.to("#replayBtn", 1, {rotation:"+=360", ease:Expo.easeOut});
}