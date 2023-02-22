var container;
var content;
var endFrameReached;

//var bags = [ "#bag1","#bag2","#bag3","#bag4","#bag5",];

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

  TweenMax.to("#text1", .15, {delay:.25, scale:1.25, repeat:1, yoyo:true});

  TweenMax.set("#bag2",  {rotation:"+=10"});
  TweenMax.set("#bag3",  {rotation:"+=20"});
  TweenMax.set("#bag5",  {rotation:"+=23"});

  TweenMax.from("#bag1", .75, {delay:1, top:"-=325", rotation:-15, ease:Expo.easeIn});
  TweenMax.from("#bag2", .75, {delay:1.1, top:"-=325", rotation:13, ease:Expo.easeIn});
  TweenMax.from("#bag3", .75, {delay:1.2, top:"-=325", rotation:17, ease:Expo.easeIn});
  TweenMax.from("#bag5", .75, {delay:1.3,  top:"-=325",rotation:-13, ease:Expo.easeIn});
  TweenMax.from("#bag4", .75, {delay:1.4, top:"-=325", rotation:12, ease:Expo.easeIn});

  TweenMax.to("#text1", .75, {delay:1.5, alpha:0, ease:Expo.easeOut});

  TweenMax.from("#text2", .5, {delay:3.25,  scale:0, ease:Expo.easeOut});
  TweenMax.to("#bag1", .5, {delay:3.35, left:"+=250", top:"+=150", scale:2, rotation:-15, ease:Expo.easeOut});
  TweenMax.to("#bag2", .5, {delay:3.35,left:"-=350", top:"-=0",  scale:2, rotation:13, ease:Expo.easeOut});
  TweenMax.to("#bag3", .5, {delay:3.35, left:"+=350", top:"-=0", scale:2, rotation:17, ease:Expo.easeOut});
  TweenMax.to("#bag5", .5, {delay:3.35, left:"-=0", top:"-=350",scale:2, rotation:-13, ease:Expo.easeOut});
  TweenMax.to("#bag4", .5, {delay:3.35, left:"-=250", top:"-=250", scale:2, rotation:12, ease:Expo.easeOut});

  TweenMax.to("#text2", .25, {delay:6,  scale:2, alpha:0, ease:Back.easeIn});

  TweenMax.from("#text3", .25, {delay:6.25,  scale:0, ease:Expo.easeOut});
  TweenMax.from("#products", .25, {delay:6.25,  left:"+=250", ease:Expo.easeOut});

  TweenMax.from("#buttonTear", .5, {delay:7,  top:"+=65", left:"+=75", ease:Expo.easeOut});
  TweenMax.from("#text4", .225, {delay:7.15, alpha:0, ease:Expo.easeOut});

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

