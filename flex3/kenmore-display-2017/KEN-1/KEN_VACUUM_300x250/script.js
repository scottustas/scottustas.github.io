var container;
var content;

var ids = ['#nose','#text1','#text2','#text3','#sunglasses','#glassesLogo1','#glassesLogo2','#ears','#leftTear','#rightTear','#penguin',
'#cat1','#cat2','#cat3','#cat4','#cat5','#cat6'

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

tl.from('#ears', .5, {scale:0, ease:Back.easeOut});
tl.from('#nose', .5, {scale:0, ease:Back.easeOut});

tl.from(['#leftTear','#rightTear'], .25, {scale:0, ease:Back.easeOut});

tl.to('#leftTear', .75, {alpha:0, transformOrigin:"128px 92px", x:-200, y:300, repeat:3, ease:Power1.easeInOut},'-=.25');
tl.to('#rightTear', .75, {alpha:0, transformOrigin:"158px 89px", x:+200, y:300, repeat:3, ease:Power1.easeInOut},'-=2.75');

tl.from(['#dan2','#text2'], .25, {delay:0, alpha:0});
tl.to(['#text1','#ears','#nose','#leftTear','#rightTear'], .25, {alpha:0},'-=.25');

tl.from('#sunglasses', .25, {delay:.25, scale:0, transformOrigin:"146px 91px", ease:Back.easeOut.config(1.7) });
tl.from('#glassesLogo1', .5, {delay:.5, scale:0, transformOrigin:"127px 91px", ease:Back.easeOut.config(20) });
tl.from('#glassesLogo2', .5, {scale:0, transformOrigin:"166px 91px", ease:Back.easeOut.config(20) });

tl.from(['#dan3','#text3','#danShoulder'], .25, {delay:1.5, alpha:0});
tl.to(['#text2','#sunglasses','#glassesLogo1','#glassesLogo2'], .25, {alpha:0, onComplete:rotateCats},'-=.25');

tl.from('#cat3', .25, {transformOrigin:"151px 16px", scale:0, ease:Back.easeOut});
tl.from('#cat1', .25, {transformOrigin:"39px 122px", scale:0, ease:Back.easeOut});
tl.from('#cat2', .25, {transformOrigin:"57px 31px", scale:0, ease:Back.easeOut});
tl.from('#cat5', .25, {transformOrigin:"254px 116px", scale:0, ease:Back.easeOut});
tl.from('#cat4', .25, {transformOrigin:"236px 34px", scale:0, ease:Back.easeOut});
tl.from('#cat6', .25, {transformOrigin:"206px 167px", scale:0, ease:Back.easeOut});

tl.from('#heart6', .25, { scale:0, ease:Back.easeOut},'-=.75');
tl.from('#heart3', .25, { scale:0, ease:Back.easeOut},'-=.5');
tl.from('#heart4', .25, { scale:0, ease:Back.easeOut},'-=.3');
tl.from('#heart2', .25, { scale:0, ease:Back.easeOut},'-=.2');
tl.from('#heart1', .25, { scale:0, ease:Back.easeOut},'-=0');
tl.from('#heart5', .25, { scale:0, ease:Back.easeOut},'-=.6');

tl.from('#background2', .25, {delay:3, alpha:0, onComplete:cycleIcons});

tl.from('#penguin', 1.5, {left:'-=390'},'-=.5' );

tl.from('#text4Mask', 1.5, { left:"-=310"},'-=1.5');
tl.from('#text4', 1.5, { left:"+=310"},'-=1.5');
tl.to('#penguin', 1.5, {alpha:0},'-=.5' );

iconsAnimate.set(['#icon2','#icon3','#icon4','#icon5','#icon6'],  {alpha:0});

tl.from('#replayBtn', .25, { left:"-=40", rotation:-360});

}

function rotateCats(){
 TweenMax.to('#cat1', 2, {rotation:15, transformOrigin:"39px 122px", yoyo:true, repeat:2.5, ease:Linear.easeNone});
 TweenMax.to('#cat2', 2.15, {rotation:20, transformOrigin:"57px 31px", yoyo:true, repeat:2.5, ease:Linear.easeNone});
 TweenMax.to('#cat3', 1.75, {rotation:-15, transformOrigin:"151px 16px", yoyo:true, repeat:2.5, ease:Linear.easeNone});
 TweenMax.to('#cat4', 2.25, {rotation:13, transformOrigin:"236px 34px", yoyo:true, repeat:2.5, ease:Linear.easeNone});
 TweenMax.to('#cat5', 2.25, {rotation:-10, transformOrigin:"254px 116px", yoyo:true, repeat:2.5, ease:Linear.easeNone});
 TweenMax.to('#cat6', 2, {rotation:8, transformOrigin:"206px 167px", yoyo:true, repeat:2.5, ease:Linear.easeNone});

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