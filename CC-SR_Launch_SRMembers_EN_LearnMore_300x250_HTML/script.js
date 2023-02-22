var container;
var content;

var w = 300 , h = 250,
  sizes = ["Small", "Medium", "Large"],
  types = ["round", "star", "real", "sharp", "ring"],
  snowflakes = 20;

//Math.random() * (max - min) + min;
enableHandler = false;

timer = window.setInterval(function(){
    enableHandler = true;
}, 25);

function init(){
 container = document.getElementById('container');
 container2 = document.getElementById("container2"),
 content = document.getElementById('content');
 container.style.display = "block";
 content.style.display = "block";  
 startAnimation();
}

function addListeners() {
 container.addEventListener('mouseover', ctaRollOverHandler, false);
 container.addEventListener('mouseout', ctaRollOutHandler, false);
 //replayBtn.addEventListener('mouseover', replayBtnRollOverHandler, false);
 //replayBtn.addEventListener('click', replayAnimation, false);
 window.addEventListener("mousemove", masterTrials, false);
}

function startAnimation(){

masterStars();

TweenMax.from("#card", 1, {delay:.25, y:300, ease:Expo.easeOut})
TweenMax.from("#text1", 1, {delay:.5, y:-300, ease:Expo.easeOut})
TweenMax.from("#text2", 1, {delay:.6, y:+300, ease:Expo.easeOut})
TweenMax.from("#text3", 1, {delay:.7, y:+300, ease:Expo.easeOut})
TweenMax.from("#cta", 1, {delay:.9,y:+300, ease:Expo.easeOut})

TweenMax.fromTo("#glare", 2, {css: {left: -280}}, {css:{left:280}, delay:1, ease: Power2.easeInOut} );
TweenMax.delayedCall(1.5, addListeners)

TweenMax.fromTo("#glare", 2, {css: {left: -280}}, {css:{left:280}, delay:5, ease: Power2.easeInOut} );

TweenMax.from("#star4", .5, {delay:11.2, scale:0, rotation:-75, ease: CustomEase.create("custom", "M0,0 C0.128,0.572 0.239,1.212 0.494,1.286 0.654,1.332 0.838,1 1,1")})
TweenMax.from("#star3", .5, {delay:11.4, scale:0, rotation:-25, ease: CustomEase.create("custom", "M0,0 C0.128,0.572 0.239,1.212 0.494,1.286 0.654,1.332 0.838,1 1,1")})
TweenMax.from("#star2", .5, {delay:11.6, scale:0, rotation:-45, ease: CustomEase.create("custom", "M0,0 C0.128,0.572 0.239,1.212 0.494,1.286 0.654,1.332 0.838,1 1,1")})
TweenMax.from("#star1", .5, {delay:11.8, scale:0, rotation:-125, ease: CustomEase.create("custom", "M0,0 C0.128,0.572 0.239,1.212 0.494,1.286 0.654,1.332 0.838,1 1,1")})

TweenMax.to("#container2", 1, {autoAlpha:0, delay:11, onComplete:removeStars})
TweenMax.fromTo("#glare", 2, {css: {left: -280}}, {css:{left:280}, delay:12, ease: Power2.easeInOut} );


}

window.onload = function(e) {
 init();
};

function removeStars(){
  var el = document.getElementById( 'container2' );
  el.parentNode.removeChild( el );
}

function ctaRollOverHandler(){
 TweenMax.to("#ctaFill", .5, {alpha:1});
 //TweenMax.fromTo("#glare", 1.5, {css: {left: -670}}, {css:{left:120}} );
}

function ctaRollOutHandler(){
 TweenMax.to("#ctaFill", .5, {alpha:0});
}

function replayAnimation(){
 container.removeEventListener('mouseover', ctaRollOverHandler, false);
 container.removeEventListener('mouseout', ctaRollOutHandler, false);
 tl.restart();
} 

function replayBtnRollOverHandler(){
  TweenMax.to("#replayBtn", 1.5, {rotation:"+=360", ease:Expo.easeOut});
}

function masterTrials(e) {

 if (enableHandler) {
         
 var to_append = document.getElementsByClassName('loader-container')[0];
 var all = document.getElementsByClassName('loader-container');

 var parent_div = document.createElement('div');
 parent_div.className = "loader-container";
 var inner_div = document.createElement('div');
 inner_div.className = "loader";
 parent_div.appendChild(inner_div)
 var d = document.getElementById('container').appendChild(parent_div);

 parent_div.style.left = (e.clientX - 0)+'px';
 parent_div.style.top = (e.clientY - 0)+'px';

 if(document.getElementsByClassName('loader-container').length > 150) {
  document.getElementById('container').removeChild(to_append)
}

 enableHandler = false;

 }};

function masterStars(){

for (var i = 0; i < snowflakes; i++) {
  var snowflakeDiv = document.createElement('div');
  var sizeIndex = Math.ceil(Math.random() * 3) -1; //get random number between 0 and 2
  var size = sizes[sizeIndex]; //get random size
  var typeIndex = Math.ceil(Math.random() * 5) -1;
  var type = types[typeIndex];
  TweenMax.set(snowflakeDiv, {attr: {class: type + size}, x: R(0,w), y: R(-200,-150) });
  container2.appendChild(snowflakeDiv);
  snowing(snowflakeDiv);
}
        
function snowing(element) {
  TweenMax.to(element, R(3,8), {y:100, ease: Linear.easeNone, repeat:10, delay: -15});
  //TweenMax.to(element, R(4,8), {x: '+=10', repeat: -1, yoyo: true, ase: Sine.easeInOut});
  TweenMax.to(element, R(2,6), {rotation: R(0,360), repeat:10, yoyo: true, ease:Sine.easeInOut, delay: -5});
};

function R(min,max) {
 return min + Math.random() * (max-min)
};


};








