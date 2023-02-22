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
}

function startAnimation(){
 TweenMax.set(".items", {scale:0, ease: Sine.easeIn});
 itemAnimate = new TimelineLite();
 tl = new TimelineLite();
 TweenMax.delayedCall(0, introPopulate);

 tl.from('#plate', .5, { delay:1, x:300, ease:Expo.easeOut, rotation:360})
 tl.from('#cup', .5, { y:-600, ease:CustomEase.create("custom", "M0,0 C0,0 0.354,0.963 0.362,1 0.37,0.985 0.385,0.97 0.46,0.97 0.504,0.97 0.637,0.981 0.644,0.998 0.67,0.998 1,1 1,1")})
 tl.from('#partyText', .75, { delay:.5, y:-300,ease:CustomEase.create("custom", "M0,0 C0,0 0.354,0.963 0.362,1 0.37,0.985 0.385,0.97 0.46,0.97 0.504,0.97 0.637,0.981 0.644,0.998 0.67,0.998 1,1 1,1")}, "-=.5")
 tl.from('#cta', .5, { y:-300,ease:CustomEase.create("custom", "M0,0 C0,0 0.354,0.963 0.362,1 0.37,0.985 0.385,0.97 0.46,0.97 0.504,0.97 0.637,0.981 0.644,0.998 0.67,0.998 1,1 1,1")},"-=.25")
 tl.to('#cta', .25, { scale:1.2, yoyo:true, repeat:1})
 tl.fromTo("#glare", .5, {css: {left: -200}}, {css:{left:200}, onComplete:addListeners})

 TweenMax.delayedCall(0, rotateItems);

}

window.onload = function(e) {
 init();
};

function ctaRollOverHandler(){
 TweenMax.set("#cta", {scale:1.1, overwrite:true, ease:Expo.easeOut});
 TweenMax.fromTo("#glare", .5, {css: {left: -200}}, {css:{left:200}} );
}

function ctaRollOutHandler(){
 TweenMax.set("#cta", {scale:1, overwrite:false, ease:Expo.easeOut});
}

function random(min, max) {
  if (max == null) { max = min; min = 0; }
  return Math.random() * (max - min) + min;
}

function introPopulate(){

 itemAnimate.staggerTo(".items", .25, {scale:1, ease: CustomEase.create("custom", "M0,0 C0.128,0.572 0.156,1.116 0.48,1.116 0.728,1.116 0.722,1 1,1")},.1)

//  itemAnimate.staggerTo(".items", .25, {scale:1, ease: Back.easeOut, 
//  cycle:{
//   delay:function() {
//     return Math.random() * 1;
//   }

// // , rotation:[-60, 60]

//  }
//  }); 
}

function rotateItems(){
var time = .3;
var repeatTime = 24;

 TweenMax.to("#gingerbreadman1", time, {rotation:Math.random() * (15 - -15) + -15, yoyo:true, repeat:repeatTime, ease: Linear.easeNone}); 
 TweenMax.to("#gingerbreadman2", time, {rotation:Math.random() * (15 - -15) + -15, yoyo:true, repeat:repeatTime, ease: Linear.easeNone}); 
 TweenMax.to("#gingerbreadman3", time, {rotation:Math.random() * (15 - -15) + -15, yoyo:true, repeat:repeatTime, ease: Linear.easeNone}); 
 TweenMax.to("#gingerbreadman4", time, {rotation:Math.random() * (15 - -15) + -15, yoyo:true, repeat:repeatTime, ease: Linear.easeNone}); 
 TweenMax.to("#gingerbreadman5", time, {rotation:Math.random() * (15 - -15) + -15, yoyo:true, repeat:repeatTime, ease: Linear.easeNone}); 
 TweenMax.to("#gingerbreadman6", time, {rotation:Math.random() * (15 - -15) + -15, yoyo:true, repeat:repeatTime, ease: Linear.easeNone}); 
 TweenMax.to("#gingerbreadman7", time, {rotation:Math.random() * (15 - -15) + -15, yoyo:true, repeat:repeatTime, ease: Linear.easeNone}); 
 TweenMax.to("#gingerbreadman8", time, {rotation:Math.random() * (15 - -15) + -15, yoyo:true, repeat:repeatTime, ease: Linear.easeNone}); 
 TweenMax.to("#gingerbreadman9", time, {rotation:Math.random() * (15 - -15) + -15, yoyo:true, repeat:repeatTime, ease: Linear.easeNone}); 
 TweenMax.to("#gingerbreadman10", time, {rotation:Math.random() * (15 - -15) + -15, yoyo:true, repeat:repeatTime, ease: Linear.easeNone}); 
 TweenMax.to("#gingerbreadman11", time, {rotation:Math.random() * (15 - -15) + -15, yoyo:true, repeat:repeatTime, ease: Linear.easeNone}); 
 TweenMax.to("#gingerbreadman12", time, {rotation:Math.random() * (15 - -15) + -15, yoyo:true, repeat:repeatTime, ease: Linear.easeNone}); 
 TweenMax.to("#gingerbreadman13", time, {rotation:Math.random() * (15 - -15) + -15, yoyo:true, repeat:repeatTime, ease: Linear.easeNone}); 
 TweenMax.to("#gingerbreadman14", time, {rotation:Math.random() * (15 - -15) + -15, yoyo:true, repeat:repeatTime, ease: Linear.easeNone}); 
 TweenMax.to("#gingerbreadman15", time, {rotation:Math.random() * (15 - -15) + -15, yoyo:true, repeat:repeatTime, ease: Linear.easeNone}); 
 TweenMax.to("#gingerbreadman16", time, {rotation:Math.random() * (15 - -15) + -15, yoyo:true, repeat:repeatTime, ease: Linear.easeNone}); 
 TweenMax.to("#gingerbreadman17", time, {rotation:Math.random() * (15 - -15) + -15, yoyo:true, repeat:repeatTime, ease: Linear.easeNone}); 
 TweenMax.to("#gingerbreadman18", time, {rotation:Math.random() * (15 - -15) + -15, yoyo:true, repeat:repeatTime, ease: Linear.easeNone}); 
 TweenMax.to("#gingerbreadman19", time, {rotation:Math.random() * (15 - -15) + -15, yoyo:true, repeat:repeatTime, ease: Linear.easeNone}); 
 TweenMax.to("#gingerbreadman20", time, {rotation:Math.random() * (15 - -15) + -15, yoyo:true, repeat:repeatTime, ease: Linear.easeNone}); 
 TweenMax.to("#gingerbreadman21", time, {rotation:Math.random() * (15 - -15) + -15, yoyo:true, repeat:repeatTime, ease: Linear.easeNone}); 
 TweenMax.to("#gingerbreadman22", time, {rotation:Math.random() * (15 - -15) + -15, yoyo:true, repeat:repeatTime, ease: Linear.easeNone}); 
 TweenMax.to("#sunglasses1", time, {rotation:Math.random() * (15 - -15) + -15, yoyo:true, repeat:repeatTime, ease: Linear.easeNone}); 
 TweenMax.to("#sunglasses2", time, {rotation:Math.random() * (15 - -15) + -15, yoyo:true, repeat:repeatTime, ease: Linear.easeNone}); 
 TweenMax.to("#sunglasses3", time, {rotation:Math.random() * (15 - -15) + -15, yoyo:true, repeat:repeatTime, ease: Linear.easeNone}); 
 TweenMax.to("#sunglasses4", time, {rotation:Math.random() * (15 - -15) + -15, yoyo:true, repeat:repeatTime, ease: Linear.easeNone}); 
 TweenMax.to("#sunglasses5", time, {rotation:Math.random() * (15 - -15) + -15, yoyo:true, repeat:repeatTime, ease: Linear.easeNone}); 
 TweenMax.to("#sunglasses6", time, {rotation:Math.random() * (15 - -15) + -15, yoyo:true, repeat:repeatTime, ease: Linear.easeNone}); 
 TweenMax.to("#sunglasses7", time, {rotation:Math.random() * (15 - -15) + -15, yoyo:true, repeat:repeatTime, ease: Linear.easeNone}); 
 TweenMax.to("#sunglasses8", time, {rotation:Math.random() * (15 - -15) + -15, yoyo:true, repeat:repeatTime, ease: Linear.easeNone}); 
 TweenMax.to("#sunglasses9", time, {rotation:Math.random() * (15 - -15) + -15, yoyo:true, repeat:repeatTime, ease: Linear.easeNone}); 
 TweenMax.to("#sunglasses10", time, {rotation:Math.random() * (15 - -15) + -15, yoyo:true, repeat:repeatTime, ease: Linear.easeNone}); 
 TweenMax.to("#sunglasses11", time, {rotation:Math.random() * (15 - -15) + -15, yoyo:true, repeat:repeatTime, ease: Linear.easeNone}); 
 TweenMax.to("#sunglasses12", time, {rotation:Math.random() * (15 - -15) + -15, yoyo:true, repeat:repeatTime, ease: Linear.easeNone}); 
 TweenMax.to("#sunglasses13", time, {rotation:Math.random() * (15 - -15) + -15, yoyo:true, repeat:repeatTime, ease: Linear.easeNone}); 
 TweenMax.to("#sunglasses14", time, {rotation:Math.random() * (15 - -15) + -15, yoyo:true, repeat:repeatTime, ease: Linear.easeNone}); 
 TweenMax.to("#sunglasses15", time, {rotation:Math.random() * (15 - -15) + -15, yoyo:true, repeat:repeatTime, ease: Linear.easeNone}); 
 TweenMax.to("#sunglasses16", time, {rotation:Math.random() * (15 - -15) + -15, yoyo:true, repeat:repeatTime, ease: Linear.easeNone}); 
 TweenMax.to("#sunglasses17", time, {rotation:Math.random() * (15 - -15) + -15, yoyo:true, repeat:repeatTime, ease: Linear.easeNone}); 
}

function timelineReverse(){
 itemAnimate.reverse();
}