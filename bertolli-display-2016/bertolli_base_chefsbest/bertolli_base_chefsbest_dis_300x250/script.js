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

  replayBtn.addEventListener('click', resetAnimation, false);
  replayBtn.addEventListener('mouseover', replayBtnRollOverHandler, false);

  container.addEventListener('mouseover', ctaRollOverHandler, false);
  container.addEventListener('mouseout', ctaRollOutHandler, false);

}

function startAnimation(){

  TweenLite.from("#text1", .5, {delay:0, top:"+=15", autoAlpha:0, ease:Expo.easeOut});

  TweenLite.to("#cheeseSauce", .75, {delay:3, left:"+=45", ease:Expo.easeOut});
  TweenLite.set("#alfredoSauce", {delay:3, alpha:1});
  TweenLite.from("#alfredoSauce", 1, {delay:3, left:99, ease:Expo.easeOut});

  TweenLite.to("#text1", .5, {delay:3, autoAlpha:0, ease:Expo.easeOut});
  TweenLite.from("#text2", .5, {delay:3, top:"+=15", autoAlpha:0, ease:Expo.easeOut});

  TweenLite.to("#text2", .5, {delay:4.5, left:"-=250", autoAlpha:0, ease:Expo.easeInOut});
  TweenLite.to("#cheeseSauce", .5, {delay:4.5, left:"-=250", autoAlpha:0, ease:Expo.easeInOut});
  TweenLite.to("#alfredoSauce", .5, {delay:4.5, left:"-=250", autoAlpha:0, ease:Expo.easeInOut});
  TweenLite.from("#text3", .5, {delay:4.5, left:"+=250", autoAlpha:0, ease:Expo.easeInOut});
  TweenLite.from("#jarLockup", .5, {delay:4.5, left:"+=250", autoAlpha:0, ease:Expo.easeInOut});

  TweenLite.to("#text3", .5, {delay:7.5, left:"-=250", autoAlpha:0, ease:Expo.easeInOut});
  TweenLite.from("#text4", .5, {delay:7.5, left:"+=250", autoAlpha:0, ease:Expo.easeInOut});
  TweenLite.to("#jarLockup", .5, {delay:7.5, top:"-=24", ease:Expo.easeInOut});

  TweenLite.from("#cta", .25, {delay:8, scale:0, ease:Back.easeOut, onComplete:endFrame});
  TweenLite.to("#glare", .5, {delay:8.25, left:125});

  TweenLite.set("#replayBtn", {rotation:0});
  TweenLite.from("#replayBtn", .5, {delay:8.5, autoAlpha:0, rotation:-360, ease:Expo.easeOut});

}

function resetAnimation(){

  TweenLite.set(ids, {clearProps:"all"});
  TweenLite.delayedCall(.01, init);
} 

function replayBtnRollOverHandler(){

  TweenLite.to("#replayBtn", 1, {rotation:"+=360", ease:Expo.easeOut});
}

function ctaRollOverHandler(){

  if (endFrameReached) TweenLite.set("#cta", {scale:1.1, overwrite:true});
  if (endFrameReached) TweenLite.fromTo("#glare", .5, {css: {left: -120}}, {css:{left:125}} );
}

function ctaRollOutHandler(){
  if (endFrameReached) TweenLite.to("#cta", .25, {scale:1.01, overwrite:false, ease:Expo.easeOut});
}

function legalRollOverHandler(){

  TweenLite.to("#legal", .25, {top:121, overwrite:true, ease:Expo.easeOut});
}

function legalRollOutHandler(){

  TweenLite.to("#legal", .25, {top:249, overwrite:true, ease:Expo.easeOut});
}

function endFrame(){
  endFrameReached = true;
}