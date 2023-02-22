var container;
var content;
var tl = new TimelineMax({delay:0.5, repeat:0, repeatDelay:0, });
var tl2 = new TimelineMax( );

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

  tl2.from(blurElement, 2, {a:40, ease:Expo.easeout, onUpdate:applyBlur});

  tl.from("#text1", .5, {delay:0, alpha:0, ease:Back.easeOut})
  .from("#bottle", .5, {delay:0, x:+150, ease:Back.easeOut},"-.25")
  .from("#text2", .5, {delay:1, x:-250, ease:Back.easeOut})
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


//////BLLUUURRR https://codepen.io/joemidi/pen/omsrL

var blurElement = {a:0};//start the blur at 0 pixels


//here you pass the filter to the DOM element
function applyBlur()
{
    TweenMax.set(['.box'], {webkitFilter:"blur(" + blurElement.a + "px)"});  
};