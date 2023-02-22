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
 window.addEventListener("mousemove", masterTrials, false);
}

function startAnimation(){

TweenMax.to("#drink1", 1, {delay:0, y:300, ease:Expo.easeIn})
TweenMax.to("#drink2", 1, {delay:.25, y:300, ease:Expo.easeIn});
TweenMax.from("#card", 1, {delay:1, y:-300, ease:Expo.easeOut})
TweenMax.from("#text1", 1, {delay:1.1, y:-300, ease:Expo.easeOut})
TweenMax.from("#text2", 1, {delay:1.1, y:+300, ease:Expo.easeOut})
TweenMax.from("#text3", 1, {delay:1.3, y:+300, ease:Expo.easeOut})
TweenMax.from("#cta", 1, {delay:1.5, y:+300, ease:Expo.easeOut})
TweenMax.from("#text4", 1, {delay:1.8, y:+100, ease:Expo.easeOut})

/*first set of stars - left*/
TweenMax.from("#star17", 5, {delay:1.2,rotation: 270, x:-170, ease:Expo.easeOut})
TweenMax.from("#star18", 5, {delay:1.4,rotation: 270, x:-170, y: -30, ease:Expo.easeOut})
TweenMax.from("#star19", 5, {delay:1.6,rotation: 180, x:-170, y: -25, ease:Expo.easeOut})
TweenMax.from("#star20", 5, {delay:1.2,rotation: 360, x:-170, y: -45, ease:Expo.easeOut})
TweenMax.from("#star21", 5.5, {delay:1.6,rotation: 180, x:-170, y: -8, ease:Expo.easeOut})

/*first set of stars - right*/
TweenMax.from("#star23", 5.5, {delay:1.2,rotation: 270, x:194, ease:Expo.easeOut})
TweenMax.from("#star24", 5.5, {delay:1.4,rotation: 270, x:194, y: -30, ease:Expo.easeOut})
TweenMax.from("#star25", 5.5, {delay:1.6,rotation: 180, x:194, y: -25, ease:Expo.easeOut})
TweenMax.from("#star26", 5.5, {delay:1.2,rotation: 360, x:194, y: -45, ease:Expo.easeOut})
TweenMax.from("#star27", 6, {delay:1.6,rotation: 180, x:194, y: -8, ease:Expo.easeOut})

/*second set - left*/
TweenMax.from("#star4", 2, {delay:2.2, x:-20, scale:0, ease:Expo.easeOut})
TweenMax.from("#star3", 2, {delay:2.4, x:-20, scale:0, ease:Expo.easeOut})
TweenMax.from("#star2", 2, {delay:2.6, x:-20, scale:0, ease:Expo.easeOut})
TweenMax.from("#star1", 2, {delay:2.8, x:-20, scale:0, ease:Expo.easeOut})
TweenMax.from("#star5", 2, {delay:2.2, x:-20, scale:0, ease:Expo.easeOut})
TweenMax.from("#star6", 2, {delay:2.4, x:-20, scale:0, ease:Expo.easeOut})
TweenMax.from("#star7", 2, {delay:2.8, x:-20, scale:0, ease:Expo.easeOut})

/*second set - right*/
TweenMax.from("#star8", 2, {delay:1.4, x:320, scale:0, ease:Expo.easeOut})
TweenMax.from("#star9", 2, {delay:1.6, x:320, scale:0, ease:Expo.easeOut})
TweenMax.from("#star10", 2, {delay:1.8, x:320, scale:0, ease:Expo.easeOut})
TweenMax.from("#star11", 2, {delay:2, x:320, scale:0, ease:Expo.easeOut})
TweenMax.from("#star12", 2, {delay:1.4, x:320, scale:0, ease:Expo.easeOut})
TweenMax.from("#star13", 2, {delay:1.6, x:320, scale:0, ease:Expo.easeOut})
TweenMax.from("#star14", 2, {delay:2, x:320, scale:0, ease:Expo.easeOut})
TweenMax.from("#star15", 2, {delay:1.8, x:320, scale:0, ease:Expo.easeOut})
TweenMax.from("#star16", 2, {delay:1.6, x:320, scale:0, ease:Expo.easeOut})

TweenMax.fromTo("#glare", 2, {css: {left: -280}}, {css:{left:280}, delay:2.5, ease: Power2.easeInOut} );
TweenMax.delayedCall(1.5, addListeners)

TweenMax.fromTo("#glare", 2, {css: {left: -280}}, {css:{left:280}, delay:5, ease: Power2.easeInOut} );

TweenMax.to("#container2", 1, {autoAlpha:0, delay:5, onComplete:removeStars})
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
    TweenMax.set(snowflakeDiv, {attr: {class: type + size}, x: 0, y: R(100,50)});
    container2.appendChild(snowflakeDiv);
    snowing(snowflakeDiv);
  }
          
  function snowing(element) {
    TweenMax.to(element, R(3,8), {y:100, x:150, ease: Linear.easeNone, repeat:10, delay: -15});
    TweenMax.to(element, R(2,6), {rotation: R(0,360), repeat:10, yoyo: true, ease:Sine.easeInOut, delay: -5});
  };


  function R(min,max) {
   return min + Math.random() * (max-min)
  };
};

function masterStarsRight(){

  for (var i = 0; i < snowflakes; i++) {
    var snowflakeDivRight = document.createElement('div');
    var sizeIndex = Math.ceil(Math.random() * 3) -1; //get random number between 0 and 2
    var size = sizes[sizeIndex]; //get random size
    var typeIndex = Math.ceil(Math.random() * 5) -1;
    var type = types[typeIndex];
    TweenMax.set(snowflakeDivRight, {attr: {class: type + size}, x: 300, y: R(100,50)});
    container2.appendChild(snowflakeDivRight);
    snowingRight(snowflakeDivRight);
  }
          
  function snowingRight(element) {
    TweenMax.to(element, R(3,8), {y:100, x:150, ease: Linear.easeNone, repeat:10, delay: -15});
    TweenMax.to(element, R(2,6), {rotation: R(0,360), repeat:10, yoyo: true, ease:Sine.easeInOut, delay: -5});
  };


  function R(min,max) {
   return min + Math.random() * (max-min)
  };
};