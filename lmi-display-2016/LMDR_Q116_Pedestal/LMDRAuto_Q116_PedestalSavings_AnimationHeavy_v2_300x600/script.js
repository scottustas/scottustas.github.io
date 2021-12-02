
var container;
var content;
var endFrameReached;

var ids = [
  "#tex1",
  "#yellowGradient",
  "#logo",
  "#cta",
  "#replayBtn",
  "#glare",
  "#statueLogo", 
  "#lightRay", 
  "#lightRay2", 
  "#light", 
];

function init(){

  container = document.getElementById('container');
  content = document.getElementById('content');
  
  addListeners();
  container.style.display = "block";
  content.style.display = "block";  
  startAnimation();
  endFrameReached = false;
  TweenLite.set("#lightRay2", {rotation:10, transformOrigin:"0% 100%"});

}

function addListeners() {

  //replayBtn.addEventListener('click', resetAnimation, false);
  //replayBtn.addEventListener('mouseover', replayBtnRollOverHandler, false);

  container.addEventListener('mouseover', ctaRollOverHandler, false);
  container.addEventListener('mouseout', ctaRollOutHandler, false);

}

function flare(){

 TweenLite.to("#light", .5, {delay:0, alpha:1});
 TweenLite.to("#lightRay", .4, {delay:.6, alpha:.4});
 TweenLite.to("#lightRay2", .4, {delay:.6, alpha:.2});

  TweenLite.to("#light", .8, {
    bezier: {
      type: "soft",
      values:[{x:35, y:-25}, {x:95, y:15}, {x:130, y:2}],  
      },
      ease: Linear.easeNone,
  });

   TweenLite.to("#light", .25, {delay:1, alpha:0});
   TweenLite.to("#lightRay", .25, {delay:1, scale:0, alpha:0, transformOrigin:"0% 100%",});
   TweenLite.to("#lightRay2", .25, {delay:1, scale:0, alpha:0, transformOrigin:"0% 100%",});

}

function startAnimation(){

  TweenLite.to("#logo", 1.5, {delay:0, scale:.9, transformOrigin:"0% 0%", ease:Linear.easeNone});
  TweenLite.delayedCall(0, flare);
  TweenLite.to("#logo", .5, {delay:.5, top:222, left:16, scale:.155, ease:Expo.easeIn});
  TweenLite.to("#handLogo", .5, {delay:.5, top:14, left:4, width:119, height:290, ease:Expo.easeIn});

  TweenLite.set("#statueLogo",  {delay:.95, alpha:1, ease:Expo.easeIn});

  TweenLite.to("#yellowGradient", 1.5, {delay:2, scaleY:.175, transformOrigin:"0% 100%",ease:Expo.easeInOut});
  TweenLite.to("#logo", 1.5, {delay:2, top:508, left:9,ease:Expo.easeInOut});
  TweenLite.to("#logoLine", .5, {delay:2, height:10, ease:Expo.easeIn});

  TweenLite.from("#text1", .5, {delay:3, left:"+=250", ease:Expo.easeOut});
  TweenLite.from("#cta", .5, {delay:3, left:"+=250", ease:Expo.easeOut, onComplete:endFrame});
  TweenLite.to("#glare", .5, {delay:3.25, left:125});
  //TweenLite.from("#replayBtn", .5, {delay:7, autoAlpha:0, rotation:-360, ease:Expo.easeOut});

// // IE HACKS

if(navigator.userAgent.indexOf('MSIE')!==-1
|| navigator.appVersion.indexOf('Trident/') > 0){

  console.log('INTERNET EXPLORER');
  TweenLite.set("#logoLine",  {delay:2.2, height:14, overwrite:"all", ease:Expo.easeIn});

}

// // IE HACKS


}

function resetAnimation(){

  TweenLite.set(ids, {clearProps:"all"});
  TweenLite.delayedCall(.01, init);
} 

function replayBtnRollOverHandler(){

  TweenLite.to("#replayBtn", 1, {rotation:"+=360", overwrite:true, ease:Expo.easeOut});
}

function ctaRollOverHandler(){

  if (endFrameReached) TweenLite.to("#cta", .125, {scale:1.1, overwrite:true, ease:Expo.easeOut});
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