var container;
var content;
var ids = ['#background1','#background2', '#background3', '#background4', '#background5', '#background6','#textShadow', '#text1',
'#text2', '#text3', '#text4', '#logo', '#cta'

];
function init(){
 container = document.getElementById('container');
 content = document.getElementById('content');
 container.style.display = "block";
 content.style.display = "block";  
 startAnimation();
 addListeners();
}

function addListeners() {
  container.addEventListener('mouseover', ctaRollOverHandler, false);
  container.addEventListener('mouseout', ctaRollOutHandler, false);
  replayBtn.addEventListener('click', resetAnimation, false);
  replayBtn.addEventListener('mouseover', replayBtnRollOverHandler, false);
}

function startAnimation(){

TweenMax.set(['#background2','#background3','#background4'], { z:.1,  rotationZ: 0.01, scaleX:1.08, scaleY:1.08, force3D:true});

TweenMax.from('#background1', 3, {delay:0, scale:1.25, z: .1, rotationZ: 0.01, ease:Linear.easeNone});
TweenMax.from('#text1', 12, {scale:.65,  z: 0.1,  rotationZ: 0.01, rotationZ: 0.01, ease:Linear.easeNone});

TweenMax.to('#background2', .25, {delay:2, alpha:1, ease:Linear.easeNone});
TweenMax.to('#background2', 3, {delay:2.05, scale:1, ease:Linear.easeNone});

TweenMax.to('#background3', .25, {delay:4.5, alpha:1, ease:Linear.easeNone});
TweenMax.to('#background3', 3, {delay:4.505, scale:1, ease:Linear.easeNone});

TweenMax.from(['#background4','#textShadow'], .25, {delay:7, alpha:0, ease:Linear.easeNone});
TweenMax.to('#background4', 3, {delay:7.05, scale:1, ease:Linear.easeNone});

TweenMax.to('#background5', .25, {delay:9, alpha:1, ease:Linear.easeNone});
TweenMax.to('#logo',  .25, {delay:9, alpha:0, ease:Linear.easeNone});
TweenMax.to(['#text1','#textShadow'], .25, {delay:9, alpha:0, ease:Linear.easeNone});

TweenMax.to('#text2',  .25, {delay:9.15, alpha:1});
TweenMax.to('#text3',  .25, {delay:9.15, alpha:1});

TweenMax.to('#text2', .5, {delay:11, alpha:0});
TweenMax.from(['#text4','#background6'], .5, {delay:11.5, alpha:0});

TweenMax.from('#cta', 1, {delay:11.25, x:+300, ease: Power3.easeOut});
TweenMax.from('#replayBtn', 1, {delay:11.5, x:+30, ease: Power3.easeOut});

}

window.onload = function(e) {
 init();
};


function ctaRollOverHandler(){
// TweenMax.set("#cta", {scale:1.05, overwrite:true, ease:Expo.easeOut});
// TweenMax.fromTo("#glare", .5, {css: {left: -150}}, {css:{left:150}} );
}

function ctaRollOutHandler(){
// TweenMax.set("#cta", {scale:1.01, overwrite:false, ease:Expo.easeOut});
}

function resetAnimation(){
  TweenMax.set(ids, {clearProps:"all"});
  TweenMax.delayedCall(.01, startAnimation);
} 

function replayBtnRollOverHandler(){
  TweenMax.to("#replayBtn", 1, {rotation:"+=360", overwrite:true, ease:Expo.easeOut});
  console.log("test")
}