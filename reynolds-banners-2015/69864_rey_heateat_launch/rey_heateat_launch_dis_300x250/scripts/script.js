var adDiv;

function initEB() {
  // if (!EB.isInitialized()) {
  //   EB.addEventListener(EBG.EventName.EB_INITIALIZED, startAd);
  // } else {
    startAd();
  // }
}

function startAd() {

  banner = document.getElementById('banner');
  banner.style.display = "block";  
  adDiv = document.getElementById("ad");
  addEventListeners();

  TweenLite.set(".glare",  {alpha:.5});
  TweenLite.from("#bckg", .75, {alpha:0, delay:0, ease:Expo.easeOut});
  TweenLite.from("#foodContainer", .75, {left:"+=300", delay:.5, ease:Expo.easeOut});
  TweenLite.from("#headlineBckg", .75, {left:"-=300", delay:1.5, ease:Expo.easeOut});
  TweenLite.from("#logo", .75, {left:"-=300", delay:1.5, ease:Expo.easeOut});

  TweenLite.to("#headlineBckg", .75, {left:"-=300", delay:4, ease:Expo.easeIn});

  TweenLite.from("#headlineBckg2", .75, {left:"-=300", delay:5, ease:Expo.easeOut});
  TweenLite.from("#product", .75, {top:"+=300", delay:5.5, ease:Expo.easeOut});
  TweenLite.from("#endframeText", .75, {top:"+=300", delay:5.5, ease:Expo.easeOut});
  TweenLite.from("#cta", .75, {left:"+=300", delay:5.75, ease:Expo.easeOut});
  TweenLite.to(".glare", 1.5, {left:120, delay:6.5, ease:Expo.easeOut, onComplete:ctaRollOutHandler});

}

function addEventListeners() {
  document.getElementById("clickthrough-button").addEventListener("click", clickthrough);
  document.getElementById("clickthrough-button").addEventListener('mouseover', ctaRollOverHandler, false);
  document.getElementById("clickthrough-button").addEventListener('mouseout', ctaRollOutHandler, false);
}

function clickthrough() {
  EB.clickthrough();
  console.log("click");
}

function ctaRollOverHandler() {
  TweenLite.set("#cta",  {scale:1.1});
  TweenLite.to(".glare", 1.5, {left:120, alpha:.5, delay:.01, ease:Expo.easeOut});
}

function ctaRollOutHandler() {
  TweenLite.set("#cta",  {scale:1});
  TweenLite.set(".glare", {left:-180, ease:Expo.easeOut});
}

window.addEventListener("load", initEB);
