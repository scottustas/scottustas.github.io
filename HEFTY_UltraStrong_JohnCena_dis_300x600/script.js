var container;
var content;

var ids = [
  "#oneDollar","#fiveDollar","#tenDollar","#twentyDollar","#fiftyDollar",
  "#oneDollar2","#fiveDollar2","#tenDollar2","#twentyDollar2","#fiftyDollar2",
  "#oneDollar3","#fiveDollar3","#tenDollar3","#twentyDollar3","#fiftyDollar3",
  "#oneDollar4","#fiveDollar4","#tenDollar4","#twentyDollar4","#fiftyDollar4",
  "#oneDollar5","#fiveDollar5","#tenDollar5","#twentyDollar5","#fiftyDollar5",
];

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

}

function addListeners() {
  //replayBtn.addEventListener('click', resetAnimation, false);
  //replayBtn.addEventListener('mouseover', replayBtnRollOverHandler, false);

  container.addEventListener('mouseover', ctaRollOverHandler, false);
  container.addEventListener('mouseout', ctaRollOutHandler, false);

}

function startAnimation(){

  moneySet();

  container.addEventListener('click', clickthrough, false);

  TweenMax.set(ids,  { scale:.8 });

  TweenMax.set("#cenaRipGroup",  { scale:1.24 });

  TweenMax.to("#startframeBackground", .2, {delay:1, alpha:0, ease:Expo.easeOut});

  TweenMax.to("#container", .5, {delay:1.25, backgroundColor:"#ff7500"});
  TweenMax.from("#rip1", .5, {delay:1, scale:.25, ease:Expo.easeOut});
  TweenMax.from("#handsGroup", .5, {delay:1, alpha:0,scale:0, top:"+=45", transformOrigin:"50% 44%", ease:Expo.easeOut});

  TweenMax.to("#rip1", .5, {delay:1.75, scale:1.5, ease:Linear.easeNone});
  TweenMax.to("#rightHand", .5, {delay:1.75, top:95, left:58, ease:Linear.easeNone});
  TweenMax.to("#leftHand", .5, {delay:1.75, top:114, left:190, ease:Linear.easeNone});

  TweenMax.to("#rip1", .5, {delay:2.25, scale:2, ease:Expo.easeOut});
  TweenMax.to("#rightHand", .5, {delay:2.25, top:90, left:33, ease:Expo.easeOut});
  TweenMax.to("#leftHand", .5, {delay:2.25, left:210, top:124, ease:Expo.easeOut});

  TweenMax.from("#cenaEndframe", .5, {delay:4, scale:1.5, alpha:0, transformOrigin:"50% 44%", ease:Expo.easeOut});
  TweenMax.from("#endframeBackground", .5, {delay:4, alpha:0, ease:Expo.easeOut});

  TweenMax.from("#text1", .25, {delay:4.25, scale:2, transformOrigin:"50% 20%", alpha:0, ease:Expo.easeOut});

  TweenMax.to("#text1", .25, {delay:6.25, scale:2, transformOrigin:"50% 20%", alpha:0, ease:Expo.easeOut});

  TweenMax.from("#text2", .25, {delay:6.5, scale:2, transformOrigin:"50% 20%", alpha:0, ease:Expo.easeOut});
  TweenMax.delayedCall(6.5, moneyShot);
  TweenMax.to("#moneyGroup", 1.45, {delay:8.5, alpha:0});

  TweenMax.to("#text2", .25, {delay:9, scale:2, transformOrigin:"50% 20%", alpha:0, ease:Expo.easeOut});
  TweenMax.from("#buttonTear", .5, {delay:9.25,  top:"+=75", left:"+=75", ease:Expo.easeOut});
  TweenMax.from("#text4", .125, {delay:9.44, alpha:0, ease:Expo.easeOut});

  TweenMax.from("#text3", .25, {delay:9.5, scale:2, transformOrigin:"50% 20%", alpha:0, ease:Expo.easeOut});

}

function clickthrough() {
  EB.clickthrough();
  console.log("Sizmek Click");
}

function resetAnimation(){
  TweenMax.set(ids, {clearProps:"all"});
  TweenMax.delayedCall(.01, init);
} 

function moneySet(){
  var i = 0;
  var length = ids.length;
  for (i; i < length; i++)
  {
    TweenMax.set(ids[i],  {rotation:Math.random() * (360 - -360) + -360, scale:.9});
  } 
}

function moneyShot(){
  var i = 0;
  var length = ids.length;
  for (i; i < length; i++)
  {
    TweenMax.to(ids[i], 4, {
    top:Math.random() * (360 - -360) + 360, 
    left:Math.random() * (180 - -180) + 180,
    // rotationY:Math.random() * (300 - -300) + -300,
    // rotationX:Math.random() * (300 - -300) + -300,
    rotation:Math.random() * (360 - -360) + -360,
    //alpha:1,
    ease:Sine.easeOut});
  } 
}

function replayBtnRollOverHandler(){
  //TweenMax.to("#replayBtn", 1, {rotation:"+=360", overwrite:true, ease:Expo.easeOut});
}

function ctaRollOverHandler(){
  //TweenMax.set("#cta", {scale:1.05, overwrite:true, ease:Expo.easeOut});
  TweenMax.fromTo("#glare", .5, {css: {left: -200}}, {css:{left:200}} );
}

function ctaRollOutHandler(){
  //TweenMax.set("#cta", {scale:1.01, overwrite:false, ease:Expo.easeOut});
}

// wait until DOM is ready
document.addEventListener("DOMContentLoaded", function(event) {

  // wait until window, stylesheets, images, links, and other media assets are loaded
  window.onload = function() {

      // add code here
    init();
  };

});