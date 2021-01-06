var container;
var content;

var ids = ['#cloudGroup','#text1','#text2','#text3','#sunglasses','#glassesLogo1','#glassesLogo2','#panda','#unicorn','#ballon','#purpleDude','#rainbowClouds','#cloud1','#cloud2'

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

tl = new TimelineMax();

iconsAnimate = new TimelineMax({repeat:3});

TweenMax.set('#icon1',  {alpha:1});
tl.pause();

tl.timeScale(1.1);

tl.seek(0);

tl.play();

addListeners();

tl.from('#rain', 4.75, {y:-175, ease:Linear.easeNone});
tl.to('#cloudGroup', .75, {y:"+=1", x:"+=2", repeat:5, yoyo:true, ease:Linear.easeNone},'-=4.75');

tl.to('#cloudGroup', .5, {y:-100, ease:Back.easeOut});

tl.from(['#beth2','#text2'], .25, {alpha:0});
tl.to('#text1', .25, {alpha:0},'-=.25');

tl.from('#sunglasses', .25, {delay:.25, scale:0, transformOrigin:"146px 91px", ease:Back.easeOut.config(1.7) });
tl.from('#glassesLogo1', .5, {delay:.5, scale:0, transformOrigin:"127px 91px", ease:Back.easeOut.config(20) });
tl.from('#glassesLogo2', .5, {scale:0, transformOrigin:"166px 91px", ease:Back.easeOut.config(20) });

tl.from(['#beth3','#text3','#bethShoulder'], .25, {delay:1.75, alpha:0});
tl.to(['#text2','#sunglasses','#glassesLogo1','#glassesLogo2'], .25, {alpha:0},'-=.25');

tl.from('#cloud1', .5, {x:'-=300'});
tl.from('#cloud2', .5, {x:'-=300'},'-=.25');
tl.from('#sun', .5, {y:+5, alpha:0},'-=.25');

tl.to('#cloud1', 3, {x:+10});
tl.to('#cloud2', 3, {x:+10},'-=3');
tl.to('#sun', 3, {x:+10},'-=3');

tl.from('#rainbowMask', 2, {width:0},'-=4');
tl.from('#rainbowClouds', .25, {alpha:0},'-=3.5');
tl.from('#mixer1', .25, {y:-150},'-=3.5');
tl.from('#mixer2', .25, {y:-150},'-=3.25');

tl.from('#ballon', .5, {y:+150},'-=3.25');
tl.to('#ballon', 3, {y:-10},'-=2.75');

tl.from('#panda', .5, {x:+10, y:+10, alpha:0},'-=3.25');
tl.from('#purpleDude', 3, {x:+150},'-=4.5');
tl.from('#unicorn',2, {x:+150},'-=3.75');

tl.from('#background2', .25, {alpha:0, onComplete:cycleIcons},'-=.5');

tl.from('#penguin', 1.5, {left:'+=390'} );
tl.from('#text4Mask', 1.5, { left:"+=310"},'-=1.5');
tl.from('#text4', 1.5, { left:"-=310"},'-=1.5');

iconsAnimate.set(['#icon2','#icon3','#icon4','#icon5','#icon6'],  {alpha:0});

tl.from('#replayBtn', .25, { left:"-=40", rotation:-360});

}

function cycleIcons(){

iconsAnimate.seek(0);
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
 TweenMax.set(ids, {clearProps:"all"});
 tl.pause();
 iconsAnimate.pause();
 startAnimation();
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