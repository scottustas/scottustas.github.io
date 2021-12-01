var container;
var content;
var endFrameReached;

var ids = ["#text1","#text2","#text3","#text4","#text5a","#text5b","#text6a","#text6b","#legal","#bill","#glare",

];

function init(){

  container = document.getElementById('container');
  content = document.getElementById('content');
  
  container.style.display = "block";
  content.style.display = "block";  

  addListeners();
  startAnimation();
}

function addListeners() {
  replayBtn.addEventListener('click', resetAnimation, false);
  replayBtn.addEventListener('mouseover', replayBtnRollOverHandler, false);

  container.addEventListener('mouseover', ctaRollOverHandler, false);
  container.addEventListener('mouseout', ctaRollOutHandler, false);

  legalRollover.addEventListener('mouseover', legalRollOverHandler, false);
  legalRollover.addEventListener('mouseout', legalRollOutHandler, false);

}

function startAnimation(){

  TweenMax.set("#replayBtn",  {rotation:45});

  TweenMax.from("#bill", 1, {delay:3.5, top:503, ease:Linear.easeNone});
  TweenMax.to("#text1", .2, {delay:4.5, alpha:0, ease:Expo.easeOut});

  TweenMax.from("#text2", .75, {delay:4.5, top:"-=500", ease:Expo.easeOut});
  TweenMax.to("#bill", .45, {delay:4.69, top:237, ease:Expo.easeOut});

  TweenMax.from("#text3", .75, {delay:5.75, top:"-=500", ease:Expo.easeOut});
  TweenMax.to("#bill", .5, {delay:5.95, top:355, ease:Expo.easeOut});
  TweenMax.to("#text2", .75, {delay:5.9, top:"+=500", ease:Expo.easeOut});

  TweenMax.from("#text4", .75, {delay:7, top:"-=500", ease:Expo.easeOut});
  TweenMax.to("#bill", .5, {delay:7.16, top:498, ease:Expo.easeOut});
  TweenMax.to("#text3", .75, {delay:7.15, top:"+=500", ease:Expo.easeOut});

  TweenMax.to("#bill", .25, {delay:8.75, left:"-300", ease:Expo.easeIn});
  TweenMax.to("#text4", .25, {delay:8.75, left:"-=300", ease:Expo.easeIn});

  TweenMax.from("#text5a", .25, {delay:9, left:"-=300", ease:Expo.easeOut});
  TweenMax.from("#text5b", .25, {delay:9, left:"+=300", ease:Expo.easeOut});

  TweenMax.to("#text5a", .25, {delay:14, left:"+=300", ease:Expo.easeIn});
  TweenMax.to("#text5b", .25, {delay:14, left:"-=300", ease:Expo.easeIn});

  TweenMax.from("#text6a", .25, {delay:14.25, left:"-=300", ease:Expo.easeOut});
  TweenMax.from("#text6b", .25, {delay:14.25, left:"+=300", ease:Expo.easeOut});

  TweenMax.fromTo("#glare", .4, {css: {left: -250}}, {css:{left:250}, delay:14.25});
  TweenMax.from("#legal", .25, {delay:14.25, top:"+=25", ease:Expo.easeOut});
  TweenMax.from("#legalRollover", .25, {delay:14.25, left:"+=100", ease:Expo.easeOut});

  TweenMax.from("#replayBtn", .5, {delay:14.25, left:"+=25", rotation:"+=360", ease:Expo.easeOut});

}

function resetAnimation(){
  TweenMax.set(ids, {clearProps:"all"});
  TweenMax.delayedCall(.01, init);
} 

function replayBtnRollOverHandler(){
  TweenMax.to("#replayBtn", 1, {rotation:"-=360", overwrite:true, ease:Expo.easeOut});
}

function ctaRollOverHandler(){
  TweenMax.set("#cta", {scale:1.05, overwrite:true, ease:Expo.easeOut});
  TweenMax.fromTo("#glare", .4, {css: {left: -250}}, {css:{left:250}} );
}

function ctaRollOutHandler(){
  TweenMax.set("#cta", {scale:1.01, overwrite:false, ease:Expo.easeOut});
}

function legalRollOverHandler(){
  TweenMax.to("#legal", .25, {top:497, overwrite:true, ease:Expo.easeOut});
}

function legalRollOutHandler(){
  TweenMax.to("#legal", .25, {top:541, overwrite:false, ease:Expo.easeOut});
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