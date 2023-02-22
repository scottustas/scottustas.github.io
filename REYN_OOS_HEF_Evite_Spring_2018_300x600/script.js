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

//tl = new TimelineLite();
TweenMax.from(".swirl", 7, {delay:0, drawSVG:"100% 100%", ease:Linear.easeNone})
//TweenMax.to("#swirl", .5, {alpha:1, delay:2})

//INTRO
//TweenMax.from("#dots", 5.75, {delay:2, alpha:0, ease:Linear.easeNone})
TweenMax.from("#plateMask", .5, {delay:0, left:-300, rotation:-360, ease:Expo.easeOut})
TweenMax.from('#cup', .5, { delay:.5, y:-600, ease:CustomEase.create("custom", "M0,0 C0,0 0.354,0.963 0.362,1 0.37,0.985 0.385,0.97 0.46,0.97 0.504,0.97 0.637,0.981 0.644,0.998 0.67,0.998 1,1 1,1")})
TweenMax.from("#text1", .5, {delay:1, left:-300, ease:Expo.easeOut})
TweenMax.from("#text2", .5, {delay:1.25, left:-300, ease:Expo.easeOut})
TweenMax.from("#text3", .5, {delay:1.5, left:-300, ease:Expo.easeOut})
TweenMax.from("#text4", .5, {delay:1.75, left:-300, ease:Expo.easeOut})
TweenMax.from("#text5", .5, {delay:2, left:-300, ease:Expo.easeOut})

TweenMax.from("#cta", .5, {delay:2.5, scale:2, alpha:0, transformOrigin:"50% 50%", ease:CustomEase.create("custom", "M0,0 C0,0 0.354,0.963 0.362,1 0.37,0.985 0.385,0.97 0.46,0.97 0.504,0.97 0.637,0.981 0.644,0.998 0.67,0.998 1,1 1,1")})
TweenMax.to("#cta", .125, {delay:3, scale:1.25, yoyo:true, repeat:3, onComplete:addListeners})

TweenMax.from("#partyHat", .25, {delay:R(0,3), scale:0, transformOrigin:"30px 40px",ease:Expo.easeOut})
TweenMax.from("#car", .5, {delay:R(0,3), left:-300, ease:Expo.easeOut})
TweenMax.from("#partyTextBubble", .25, {delay:R(0,3), scale:0, transformOrigin:"48px 118px", ease:Back.easeOut})
TweenMax.from("#partyText", .25, {delay:R(0,3), scale:0, transformOrigin:"35px 94px",ease:Expo.easeOut})
TweenMax.from(".star2", 1, {delay:R(0,3), drawSVG:"100% 100%"})
TweenMax.from(".star3", 1, {delay:R(0,3), drawSVG:"100% 100%"})
TweenMax.from("#star1", .5, {delay:R(0,3), left:+100, top:-100, ease:Expo.easeOut})
TweenMax.from("#exclamationBubble", .25, {delay:R(0,3), scale:0, transformOrigin:"213px 171px",ease:Expo.easeOut})
TweenMax.from("#bird", .5, {delay:R(0,3),left:-100,ease:Expo.easeOut})

TweenMax.from("#butterfly", .5, {delay:R(0,3),left:+100,ease:Expo.easeOut})


TweenMax.from(".arrow1", .5, {delay:R(0,3), drawSVG:"100% 100%"})
TweenMax.from(".arrow2", .5, {delay:R(0,3), drawSVG:"100% 100%"})
TweenMax.from(".arrow3", .5, {delay:R(0,3), drawSVG:"100% 100%"})
TweenMax.from(".arrow4", .5, {delay:R(0,3), drawSVG:"100% 100%"})
TweenMax.from(".arrow5", .5, {delay:R(0,3), drawSVG:"100% 100%"})
//TweenMax.from("#flower3", .25, {delay:R(0,3), alpha:0})
//TweenMax.from("#flower4", .25, {delay:R(0,3), alpha:0})
TweenMax.from(".flower3", 2, {delay:R(0,3), drawSVG:"100% 100%"})
TweenMax.from(".flower4", 2, {delay:R(0,3), drawSVG:"100% 100%"})
TweenMax.from("#arrowsGroup", .5, {delay:R(0,3), alpha:0, left:-30, top:+30, ease:Expo.easeOut})
TweenMax.from("#arrow", .75, {delay:R(0,3), left:+100, top:-25, ease:Back.easeOut})
TweenMax.from("#snail", .5, {delay:R(0,3), left:-150, top:-150,  ease:Expo.easeOut})
TweenMax.from("#airplane", .5, {delay:R(0,3), left:+300, top:+300,  ease:Expo.easeOut})

}

window.onload = function(e) {
 init();
};

function R(min,max) {
 return min + Math.random() * (max-min)
};

function ctaRollOverHandler(){
 TweenMax.set("#cta", {scale:1.05, overwrite:true, ease:Expo.easeOut});
 TweenMax.fromTo("#glare", 1, {css: {left: -150}}, {css:{left:150}} );
}

function ctaRollOutHandler(){
 TweenMax.set("#cta", {scale:1, overwrite:true, ease:Expo.easeOut});
}

function replayBtnRollOverHandler(){
 TweenMax.to("#replayBtn", 1, {rotation:"-=360", overwrite:false});
}

function resetAnimation(){
 removeListeners();
 tl.restart();
}