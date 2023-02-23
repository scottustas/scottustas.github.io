var container;
var content;
//Math.random() * (max - min) + min;
 tl = new TimelineMax();

function init(){
 container = document.getElementById('container');
 content = document.getElementById('content');
 container.style.display = "block";
 content.style.display = "block";  
 startAnimation();
 TweenMax.set("#replayBtn", {rotation:45});
 //addListeners();
}

function addListeners() {
 container.addEventListener('mouseover', ctaRollOverHandler, false);
 container.addEventListener('mouseout', ctaRollOutHandler, false);
 //replayBtn.addEventListener('mouseover', replayBtnRollOverHandler, false);
 //replayBtn.addEventListener('click', replayAnimation, false);


//tl.staggerFrom(".text2", .75, {left:55, alpha:0, ease:Back.easeOut.config(1.7)}, .125, '-=.75');

}

function startAnimation(){

tl.timeScale( 1.3 );

tl.from(["#card", "#cta"], 2, {y:+100, ease: Power2.easeInOut})

// tl.from("#text1a", 2, {x:-300, ease: Power2.easeInOut},'-=2')
// tl.from("#text1b", 2, {x:-300, ease: Power2.easeInOut},'-=1.8')

tl.from("#background2",2, {delay:1.5, x:-300, ease: Power2.easeInOut})

// tl.to("#text1a",1, {scale:.65, top:-25, left:-47, ease: Power2.easeInOut},'-=2')
// tl.to("#text1b",1, {scale:.65, top:-24, left:-47, ease: Power2.easeInOut},'-=2')





// tl.from("#text2a", 1.25, {x:-300, ease: Power2.easeInOut},'-=1.25')
// tl.from("#text2b", 1.25, {x:-300, ease: Power2.easeInOut},'-=1.05')
// tl.from("#text2c", 1.25, {x:-300, ease: Power2.easeInOut},'-=.85')


tl.to(["#background1","#background2", "#text1a",  "#text1", "#text1b", "#text2a", "#text2b","#text2c","#introLogo"],2, {delay:2, x:+300, ease: Power2.easeInOut})
tl.from(["#cardText","#logo"], 2, {x:-300,  ease: Power2.easeInOut},'-=2')

tl.from("#plane", 1.25, { delay:.5, top:60, left:-285,  ease:Linear.easeNone},'-=.75')

tl.from("#text3a", 1.25, {x:-285, ease: Power2.easeInOut,},'-=1.65')
tl.from("#text3b", 1.25, {x:-285, ease: Power2.easeInOut,},'-=1.45')

tl.to("#text3a",1.25, {delay:1.75, x:+300, ease: Power2.easeInOut})
tl.to("#text3b",1.25, {x:+300, ease: Power2.easeInOut},'-=1.2')

tl.from("#text4a", 1.25, {x:-300, ease: Power2.easeInOut},'-=1.25')
tl.from("#text4b", 1.25, {x:-300, ease: Power2.easeInOut},'-=1.05')

tl.to("#text4a",1.25, {delay:2, x:+300, ease: Power2.easeInOut})
tl.to("#text4b",1.25, {x:+300, ease: Power2.easeInOut},'-=1.2')

tl.from("#text5a", 1.25, {x:-300, ease: Power2.easeInOut},'-=1.25')
tl.from("#text5b", 1.25, {x:-300, ease: Power2.easeInOut},'-=1.05')
tl.from("#text5c", 1.25, {x:-300, ease: Power2.easeInOut},'-=.85')

tl.to("#text5a",1.25, {delay:2, x:+300, ease: Power2.easeInOut})
tl.to("#text5b",1.25, { x:+300, ease: Power2.easeInOut},'-=1.2')
tl.to("#text5c",1.25, { x:+300, ease: Power2.easeInOut},'-=1.05')

tl.from("#plane2", 1.25, { delay:.5, top:60, left:-285,  ease:Linear.easeNone},'-=.75')

tl.from("#text6a", 1.25, {x:-285, ease: Power2.easeInOut, onComplete:addListeners},'-=1.65')
tl.from("#text6b", 1.25, {x:-285, ease: Power2.easeInOut, onComplete:addListeners},'-=1.45')
tl.from("#text6c", 1.25, {x:-285, ease: Power2.easeInOut, onComplete:addListeners},'-=1.25')


}

window.onload = function(e) {
 init();
};

function ctaRollOverHandler(){
 TweenMax.set("#cta", {scale:1.05, overwrite:true, ease:Expo.easeOut});
 TweenMax.fromTo("#glare", 1, {css: {left: -200}}, {css:{left:200}} );
}

function ctaRollOutHandler(){
  TweenMax.set("#cta", {scale:1.01, overwrite:false, ease:Expo.easeOut});
}

function replayAnimation(){
 container.removeEventListener('mouseover', ctaRollOverHandler, false);
 container.removeEventListener('mouseout', ctaRollOutHandler, false);
 tl.restart();
} 

function replayBtnRollOverHandler(){
  TweenMax.to("#replayBtn", 1.5, {rotation:"-=360", ease:Expo.easeOut});
}

