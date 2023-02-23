var container;
var content;
//Math.random() * (max - min) + min;

var tl = new TimelineMax({repeat:2});


function init(){
 container = document.getElementById('container');
 content = document.getElementById('content');
 container.style.display = "block";
 content.style.display = "block";  
 startAnimation();
 addListeners();
}

function addListeners() {
 container.addEventListener('mouseover', ctaRollOverHandler, false);
 container.addEventListener('mouseout', ctaRollOutHandler, false);
}

function startAnimation(){

tl.to("#leftBottle", {delay:1.5, duration: 1, x: 0, y:0, rotation:22,});
tl.to("#rightBottle", {duration: 1, x: -0, y:0, rotation:-22},'-=1');
tl.to("#leftBottle", {duration: 1, x: 5, y:0},'-=.5');
tl.to("#rightBottle", {duration: 1, x: -5, y:0},'-=1');
tl.to("#leftBottle", {duration: 1, x: 0, rotation:0},'-=.5');
tl.to("#rightBottle", {duration: 1, x: 0, y:0, rotation:0, onComplete:resetAnimation},'-=1');
  
}

window.onload = function(e) {
 init();
};

function resetAnimation(){
//tl2.play();
}


function ctaRollOverHandler(){
 //TweenMax.set("#ctaImage2", {alpha:1, overwrite:true, ease:Expo.easeOut});
}

function ctaRollOutHandler(){
 //TweenMax.set("#ctaImage2", {alpha:0, overwrite:false, ease:Expo.easeOut});
}

function replayAnimation(){
 container.removeEventListener('mouseover', ctaRollOverHandler, false);
 container.removeEventListener('mouseout', ctaRollOutHandler, false);
 tl.restart();
} 

function replayBtnRollOverHandler(){
 TweenMax.to("#replayBtn", 1.5, {rotation:"-=360", ease:Expo.easeOut});
}

