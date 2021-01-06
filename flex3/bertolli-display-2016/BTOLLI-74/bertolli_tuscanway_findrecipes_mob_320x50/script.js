var container;
var content;
var endFrameReached;

var ids = [
  "#text1",
  "#text2",
  "#text3",
  "#text4",
  "#alfredoSauce",
  "#cheeseSauce",
  "#jarLockup",
  "#cta",
  "#glare",
  "#replayBtn",
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

 // replayBtn.addEventListener('click', resetAnimation, false);
 // replayBtn.addEventListener('mouseover', replayBtnRollOverHandler, false);

  container.addEventListener('mouseover', ctaRollOverHandler, false);
  container.addEventListener('mouseout', ctaRollOutHandler, false);

}

function startAnimation(){

  TweenMax.from("#logo", .75, {delay:1, left:99});

  //TweenMax.to("#jar", .75, {delay:1, left:629});
  TweenMax.from("#text1", .75, {delay:1.25, alpha:0});

  TweenMax.to("#logo", .5, {delay:3.5, alpha:0});
  TweenMax.to("#text1", .5, {delay:3.5, alpha:0});

  TweenMax.from("#ingredients",1, {delay:4, alpha:0});
  TweenMax.from("#text2", .5, {delay:4.5, alpha:0});

  TweenMax.to("#ingredients", .5, {delay:6.75, alpha:0});
  TweenMax.to("#text2", .5, {delay:6.75, alpha:0});

  TweenMax.from("#cookingOil", 1, {delay:7.25, alpha:0});
  TweenMax.from("#text3", .75, {delay:7.75, alpha:0});

  TweenMax.to("#cookingOil", .5, {delay:10.5, alpha:0});
  TweenMax.to("#text3", .5, {delay:10.5, alpha:0});

  TweenMax.from("#cookingPot", .75, {delay:11, alpha:0});
  TweenMax.from("#text4", .75, {delay:11.5, alpha:0});

  TweenMax.to("#cookingPot", .5, {delay:13.75, alpha:0});
  TweenMax.to("#text4", .5, {delay:13.75, alpha:0});

  TweenMax.from("#text5", .5, {delay:14.25, alpha:0});
  TweenMax.from("#jar", .5, {delay:14.25, alpha:0});

  TweenMax.from("#cta", .25, {delay:14.5, scale:0, ease:Back.easeOut, onComplete:endFrame});
  TweenMax.to("#glare", .5, {delay:14.75, left:135});

 // TweenMax.set("#replayBtn", {rotation:0});
 // TweenMax.from("#replayBtn", .5, {delay:8.5, autoAlpha:0, rotation:-360});

}

function resetAnimation(){

  TweenMax.set(ids, {clearProps:"all"});
  TweenMax.delayedCall(.01, init);
} 

function replayBtnRollOverHandler(){

  TweenMax.to("#replayBtn", 1, {rotation:"+=360", ease:Expo.easeOut});
}

function ctaRollOverHandler(){

  if (endFrameReached) TweenMax.set("#cta", {scale:1.1, overwrite:true});
  if (endFrameReached) TweenMax.fromTo("#glare", .5, {css: {left: -120}}, {css:{left:135}} );
}

function ctaRollOutHandler(){
  if (endFrameReached) TweenMax.to("#cta", .25, {scale:1.01, overwrite:false, ease:Expo.easeOut});
}

function endFrame(){
  endFrameReached = true;
}