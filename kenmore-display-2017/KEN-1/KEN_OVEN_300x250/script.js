var container;
var content;

tl = new TimelineMax();
tl2 = new TimelineMax();
iconsAnimate = new TimelineMax({repeat:3});
tlFruit = new TimelineMax({repeat:5});

var ids = [

];

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
 replayBtn.addEventListener('click', resetAnimation, false);
 replayBtn.addEventListener('mouseover', replayBtnRollOverHandler, false);
}

function startAnimation(){

TweenMax.set('#icon1',  {alpha:1});

tl.timeScale(1.1);

tl.seek(0);

addListeners();

tlFruit.to('#fruit1', .75, {x:+100, y:+5, ease: Power1.easeInOut});
tlFruit.set('#steven1', {zIndex:1, ease: Power1.easeInOut});
tlFruit.to('#fruit1', .75, {x:0, y:0, ease: Power1.easeInOut});

tl.to('#fruit1', .25, {delay:4.5, alpha:0});
tl.from(['#steven2','#text2'], .25, {alpha:0});
tl.to('#steven1', .25, {alpha:0},'-=.25');

tl.to('#text1', .25, {alpha:0},'-=.25');

tl.from('#sunglasses', .25, {delay:.25, scale:0, transformOrigin:"146px 88px", ease:Back.easeOut.config(1.7)});
tl.from('#glassesLogo1', .5, {delay:.5, scale:0, transformOrigin:"132px 94px", ease:Back.easeOut.config(20) });
tl.from('#glassesLogo2', .5, {scale:0, transformOrigin:"164px 94px", ease:Back.easeOut.config(20) });

tl.from(['#steven3','#text3'], .25, {delay:2.25, alpha:0});
tl.to('#steven2', .25, {alpha:0},'-=.25');

tl.from(['#cloud1','#cloud2'], .5, { alpha:0});
tl.to('#cloud1', 5, { x:+10});
tl.to('#cloud2', 5, { x:-10},'-=5');

tl.from('#unicornRainbow', .75, { x:-300, y:+30},'-=5');
tl.to('#unicornRainbow', 5, { x:+20, y:-5},'-=4.25');

tl.from('#oven', .75, { x:-300, y:+40},'-=5.25');
tl.to('#oven', 5, { x:+20, y:-5},'-=4.5');

tl.from('#cupcake1', .25, { scale:0, transformOrigin:"58px 29px", ease:Back.easeOut.config(1.7)},'-=5');
tl.from('#cupcake3', .25, { scale:0, transformOrigin:"277px 182px", ease:Back.easeOut.config(1.7)},'-=4.8');
tl.from('#cupcake2', .25, { scale:0, transformOrigin:"232px 99px", ease:Back.easeOut.config(1.7)},'-=4.6');

tl.from('#background2', .25, {delay:2.5, alpha:0, onComplete:cycleIcons},'-=4');

tl.from('#unicorn', 1.5, {left:'-=390'},'-=.5' );
tl.from('#text4Mask', 1.5, { left:"-=310"},'-=1.5');
tl.from('#text4', 1.5, { left:"+=310"},'-=1.5');

iconsAnimate.set(['#icon2','#icon3','#icon4','#icon5','#icon6'],  {alpha:0});

tl.from('#replayBtn', .25, { left:"-=40", rotation:-360});

}

function cycleIcons(){

iconsAnimate.play();

iconsAnimate.set('#icon1',  {delay:.25, alpha:0});

iconsAnimate.set('#icon2',  {delay:0, alpha:1});
iconsAnimate.set('#icon2',  {delay:.25, alpha:0});

iconsAnimate.set('#icon3',  {delay:0, alpha:1});
iconsAnimate.set('#icon3',  {delay:.25, alpha:0});

iconsAnimate.set('#icon4',  {delay:0, alpha:1});
iconsAnimate.set('#icon4',  {delay:.25, alpha:0});

iconsAnimate.set('#icon5',  {delay:0, alpha:1});
iconsAnimate.set('#icon5',  {delay:.25, alpha:0});

iconsAnimate.set('#icon6',  {delay:0, alpha:1});
iconsAnimate.set('#icon6',  {delay:.25, alpha:0});

iconsAnimate.set('#icon1',  {delay:0, alpha:1});
iconsAnimate.set('#icon1',  {delay:.25, alpha:0});

iconsAnimate.set('#icon2',  {delay:0, alpha:1});
iconsAnimate.set('#icon2',  {delay:.25, alpha:0});

iconsAnimate.set('#icon3',  {delay:0, alpha:1});
iconsAnimate.set('#icon3',  {delay:.25, alpha:0});

iconsAnimate.set('#icon4',  {delay:0, alpha:1});
iconsAnimate.set('#icon4',  {delay:.25, alpha:0});

iconsAnimate.set('#icon5',  {delay:0, alpha:1});
iconsAnimate.set('#icon5',  {delay:.25, alpha:0});

iconsAnimate.set('#icon6',  {delay:0, alpha:1});
iconsAnimate.set('#icon6',  {delay:.25, alpha:0});

iconsAnimate.set('#icon1',  {delay:0, alpha:1});

}

function resetAnimation(){
 // TweenMax.set(ids, {clearProps:"all"});
 // tl.pause();
 iconsAnimate.seek(0);
 iconsAnimate.pause();
 // startAnimation();
 tl.restart();
 tlFruit.restart();
} 

function replayBtnRollOverHandler(){
  TweenMax.to("#replayBtn", 1, {rotation:"+=360", overwrite:true, ease:Expo.easeOut});
}

function ctaRollOverHandler(){
 TweenMax.set("#cta", {scale:1.05, overwrite:true, ease:Expo.easeOut});
 TweenMax.fromTo("#glare", .5, {css: {left: -100}}, {css:{left:100}} );
}

function ctaRollOutHandler(){
 TweenMax.set("#cta", {scale:1.01, overwrite:false, ease:Expo.easeOut});
}

window.onload = function(e) {
 init();
};