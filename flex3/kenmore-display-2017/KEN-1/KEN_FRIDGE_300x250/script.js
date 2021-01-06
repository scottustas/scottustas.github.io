var container;
var content;

var ids = [
  "#parachuteFridge1","#parachuteFridge2","#parachutePenguin1","#parachutePenguin2","#parachutePenguin3",
  "#parachuteCube1","#parachuteCube2","#parachuteCube3",'#jill2','#jill3','#sunglasses','#glassesLogo1', '#glassesLogo2','#text1', '#text2','#text3','#btmLogos','#btmBar'
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
tl2 = new TimelineMax();
iconsAnimate = new TimelineMax({repeat:3});

TweenMax.set('#icon1',  {alpha:1});
tl.pause();
tl2.pause();
tl.timeScale(1.1);

tl.seek(0);
tl2.seek(0);

tl.set(['#parachuteFridge1','#parachuteFridge2','#parachutePenguin1','#parachutePenguin2','#parachutePenguin3','#parachuteCube1','#parachuteCube2','#parachuteCube3'],  {y:-150});

tl.play();

addListeners();

tl.set(['#waterLeft1','#waterLeft2','#waterLeft3','#waterLeft4','#waterRight1','#waterRight2','#waterRight3','#waterRight4',,'#waterRight5','#waterRight6',,'#waterLeft5','#waterLeft6'],  {alpha:0});

tl.set('#waterLeft1',  {delay:1.5, alpha:1});
tl.set('#waterRight1',  {delay:.125, alpha:1});

tl.set('#waterLeft2',  {delay:.125, alpha:1});
tl.set('#waterLeft1',  { alpha:0});

tl.set('#waterRight2',  {delay:.125, alpha:1});
tl.set('#waterRight1',  {alpha:0});

tl.set('#waterLeft3',  {delay:.125, alpha:1});
tl.set('#waterLeft2',  {alpha:0});

tl.set('#waterRight3',  {delay:.125, alpha:1});
tl.set('#waterRight2',  {alpha:0});

tl.set('#waterLeft4',  {delay:.125, alpha:1});
tl.set('#waterLeft3',  {alpha:0});

tl.set('#waterRight4',  {delay:.125, alpha:1});
tl.set('#waterRight3',  {alpha:0});

tl.set('#waterLeft1',  {delay:.125, alpha:1});
tl.set('#waterRight1',  {delay:.125, alpha:1});

tl.set('#waterLeft2',  {delay:.125, alpha:1});
tl.set('#waterLeft1',  { alpha:0});

tl.set('#waterRight2',  {delay:.125, alpha:1});
tl.set('#waterRight1',  {alpha:0});

tl.set('#waterLeft3',  {delay:.125, alpha:1});
tl.set('#waterLeft2',  {alpha:0});

tl.set('#waterRight3',  {delay:.125, alpha:1});
tl.set('#waterRight2',  {alpha:0});

tl.set('#waterLeft4',  {delay:.125, alpha:1});
tl.set('#waterLeft3',  {alpha:0});

tl.set('#waterRight4',  {delay:.125, alpha:1});
tl.set('#waterRight3',  {alpha:0});

tl.set('#waterLeft5',  {delay:.125, alpha:1});
tl.set('#waterLeft4',  {alpha:0});

tl.set('#waterRight5',  {delay:.125, alpha:1});
tl.set('#waterRight4',  {alpha:0});

tl.set('#waterLeft6',  {delay:.125, alpha:1});
tl.set('#waterLeft5',  {alpha:0});

tl.set('#waterRight6',  {delay:.125, alpha:1});
tl.set('#waterRight5',  {alpha:0});

tl.set('#waterLeft6',  {delay:.125, alpha:0});
tl.set('#waterRight6',  {delay:.125, alpha:0, onComplete:playTL2});

tl2.from(['#jill2','#text2'], .25, {delay:.5, alpha:0});
tl2.to('#text1', .25, {alpha:0},'-=.25');

tl2.from('#sunglasses', .25, {delay:.25, scale:0, transformOrigin:"146px 91px", ease:Back.easeOut.config(1.7), onComplete:parachuteFall });
tl2.from('#glassesLogo1', .5, {delay:.5, scale:0, transformOrigin:"127px 91px", ease:Back.easeOut.config(20) });
tl2.from('#glassesLogo2', .5, {scale:0, transformOrigin:"166px 91px", ease:Back.easeOut.config(20) });

tl2.from(['#jill3','#text3'], .25, {delay:2.25, alpha:0});
tl2.to(['#text2','#sunglasses','#glassesLogo1','#glassesLogo2'], .25, {alpha:0},'-=.25');

tl2.from(['#background2','#puddle'], .25, {delay:2, alpha:0, onComplete:cycleIcons});

tl2.from('#penguin', 1.5, {left:'+=390'} );
tl2.from('#text4Mask', 1.5, { left:"+=310"},'-=1.5');
tl2.from('#text4', 1.5, { left:"-=310"},'-=1.5');

iconsAnimate.set(['#icon2','#icon3','#icon4','#icon5','#icon6'],  {alpha:0});

tl2.from('#replayBtn', .25, { left:"-=40", rotation:-360});

}

function playTL2(){
 tl2.play();
}

function parachuteFall(){

TweenMax.to('#parachuteFridge1', 6.7, {delay:0, y:20, ease:Linear.easeNone});
TweenMax.to('#parachuteFridge2', 6.9, {delay:.2, y:20, ease:Linear.easeNone});
TweenMax.to('#parachutePenguin1', 5.8, {delay:.4, y:20, ease:Linear.easeNone});
TweenMax.to('#parachutePenguin2', 6.6, {delay:.6, y:20, ease:Linear.easeNone});
TweenMax.to('#parachutePenguin3', 6.5, {delay:.7, y:20, ease:Linear.easeNone});
TweenMax.to('#parachuteCube1', 7, {delay:.5, y:20, ease:Linear.easeNone});
TweenMax.to('#parachuteCube2', 6.8, {delay:.3, y:20, ease:Linear.easeNone});
TweenMax.to('#parachuteCube3', 6.3, {delay:.1, y:20, ease:Linear.easeNone});

TweenMax.fromTo('#parachuteFridge1', 1.5, { transformOrigin:"50% 0%", rotation:-3.5,}, {rotation:3.5, repeat: 3, yoyo: true, ease:Linear.easeNone});
TweenMax.fromTo('#parachuteFridge2', 1.4, { transformOrigin:"50% 0%", rotation:-3.5,}, {rotation:3.5, repeat: 3, yoyo: true, ease:Linear.easeNone});
TweenMax.fromTo('#parachutePenguin1', 1.6, { transformOrigin:"50% 0%", rotation:-3.5,}, {rotation:3.5, repeat: 3, yoyo: true, ease:Linear.easeNone});
TweenMax.fromTo('#parachutePenguin2', 1.4, { transformOrigin:"50% 0%", rotation:-3.5,}, {rotation:3.5, repeat: 3, yoyo: true, ease:Linear.easeNone});
TweenMax.fromTo('#parachutePenguin3', 1.45, { transformOrigin:"50% 0%", rotation:-3.5,}, {rotation:3.5, repeat: 3, yoyo: true, ease:Linear.easeNone});
TweenMax.fromTo('#parachuteCube1', 1.45, { transformOrigin:"50% 0%", rotation:-3.5,}, {rotation:3.5, repeat: 3, yoyo: true, ease:Linear.easeNone});
TweenMax.fromTo('#parachuteCube2', 1, { transformOrigin:"50% 0%", rotation:-3.5,}, {rotation:3.5, repeat: 3, yoyo: true, ease:Linear.easeNone});
TweenMax.fromTo('#parachuteCube3', 1.5, { transformOrigin:"50% 0%", rotation:-3.5,}, {rotation:3.5, repeat: 3, yoyo: true, ease:Linear.easeNone});

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
 tl2.pause();
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