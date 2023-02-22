var container;
var content;

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
 //replayBtn.addEventListener('click', resetAnimation, false);
 //replayBtn.addEventListener('mouseover', replayBtnRollOverHandler, false);
}

function removeListeners(){
 container.removeEventListener('mouseover', ctaRollOverHandler, false);
 container.removeEventListener('mouseout', ctaRollOutHandler, false);
}

function startAnimation(){

tl = new TimelineLite();

//tl.timeScale(.8);
//TweenMax.set(['#background2','#background3','#background4'], { z:.1,  rotationZ: 0.01, scaleX:1.08, scaleY:1.08, force3D:true});
//TweenMax.to('#background',   5, {rotation:2,  ease:Power2.easeInOut});

tl.from('#text1',   .5, {scale:0,ease: Power4.easeOut});
tl.to('#text1',   .5, {delay:1.5, scale:0,ease: Power4.easeOut});
tl.from(['#text2','#cardMask'],   .5, {scale:2, alpha:0, ease: Power4.easeOut},'-=.25');
tl.to('#cardMask', .75, {scale:1.1, repeat:1, yoyo:true, ease: Power4.easeInOut});
tl.fromTo("#glare2", 1, {css: {left: -150}}, {css:{left:150}} );
tl.to(['#text2','#card'],   .5, {delay:1.5, scale:0,ease: Power4.easeOut});
tl.from(['#text3','#text4','#logo','#cta'],   .5, {alpha:0, ease: Power4.easeOut},'-=.25');
tl.fromTo("#glare", 1, {css: {left: -150}}, {css:{left:150}, onComplete:addListeners} );

}

window.onload = function(e) {
 init();
};

function ctaRollOverHandler(){
 //TweenMax.set(["#cta1","#cta2","#cta3"], {scale:1.05, overwrite:true, ease:Expo.easeOut});
 TweenMax.fromTo("#glare", 1, {css: {left: -150}}, {css:{left:150}} );
}

function ctaRollOutHandler(){
 //TweenMax.set(["#cta1","#cta2","#cta3"], {scale:1, overwrite:false, ease:Expo.easeOut});
}

function replayBtnRollOverHandler(){
 TweenMax.to("#replayBtn", 1, {rotation:"-=360", overwrite:false});
}

function resetAnimation(){
 removeListeners();
 tl.restart();
}