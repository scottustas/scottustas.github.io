
var container;
var content;
var ids = [
  "#background",
  "#t1",
  "#bookLeft",
  "#bookLeft2",
  "#bookLeft3",
  "#bookRight",
  "#bookRight2",
  "#raguBottle",
  "#cta",
  "#simmeredText",
  "#replayBtn",
  "#borders",
  "#raguLogo",
  "#pastaBowl",
  "#endframeCorner1",
  "#endframeCorner2",
  "#endframeCorner3",
  "#endframeCorner4",

];

var ie = (function(){
 
    var undef,
        v = 3,
        div = document.createElement('div'),
        all = div.getElementsByTagName('i');
    
    while (
        div.innerHTML = '<!--[if gt IE ' + (++v) + ']><i></i>< ![endif]-->',
        all[0]
    );
    
    return v > 4 ? v : undef;
    
}());



function init(){

	container = document.getElementById('container');
	content = document.getElementById('content');
	
	addListeners();
	container.style.display = "block";
	content.style.display = "block";	
	startAnimation();
	console.log(ie);

}

function addListeners() {

	replayBtn.addEventListener('click', resetAnimation, false);
	replayBtn.addEventListener('mouseover', replayBtnRollOverHandler, false);

	container.addEventListener('mouseover', ctaRollOverHandler, false);
	container.addEventListener('mouseout', ctaRollOutHandler, false);

}

function startAnimation()

{

	TweenLite.set("#bookRight",  {transformPerspective:400});
	TweenLite.set("#bookLeft2",  {transformPerspective:400});
	TweenLite.set("#bookRight2",  {transformPerspective:400});
	TweenLite.set("#bookLeft3",  {transformPerspective:400});

	TweenLite.set("#endframeCorner2",  {rotation:-90});
	TweenLite.set("#endframeCorner3",  {rotation:-180});
	TweenLite.set("#endframeCorner4",  {rotation:-270});

	TweenLite.to("#bookRight", .25, {delay:1.5, rotationY:-90,  transformOrigin:"0% 50%" ,ease:Linear.easeNone});
	TweenLite.from("#bookLeft2", .5, {delay:1.75,  rotationY:90,  transformOrigin:"100% 50%" ,  ease:Expo.easeOut});

	TweenLite.to("#bookRight2", .25, {delay:3.5, rotationY:-90,  transformOrigin:"0% 50%" ,ease:Linear.easeNone});
	TweenLite.from("#bookLeft3", .5, {delay:3.75,  rotationY:90,  transformOrigin:"100% 50%" ,  ease:Expo.easeOut});

	TweenLite.to("#bookLeft3", .5, {delay:4.5,  left:"-=300",   ease:Expo.easeIn});
	TweenLite.to("#bookLeft2", .5, {delay:4.5,  left:"-=300",   ease:Expo.easeIn});
	TweenLite.to("#bookLeft", .5, {delay:4.5,  left:"-=300",   ease:Expo.easeIn});

	TweenLite.from("#pastaBowl", .5, {delay:5.25,  top:"+=300" ,  ease:Expo.easeOut});
	TweenLite.from("#t1", .5, {delay:5.25,  left:"+=300" ,  ease:Expo.easeOut});

	TweenLite.from("#background2", .75, {autoAlpha:0, scale:4, delay:7.25,  ease:Expo.easeOut});
	TweenLite.from("#endframeCorner1", .75, {autoAlpha:0,  delay:7.25,  ease:Expo.easeOut});
	TweenLite.from("#endframeCorner2", .75, {autoAlpha:0,  delay:7.25,  ease:Expo.easeOut});
	TweenLite.from("#endframeCorner3", .75, {autoAlpha:0,  delay:7.25,  ease:Expo.easeOut});
	TweenLite.from("#endframeCorner4", .75, {autoAlpha:0,  delay:7.25,  ease:Expo.easeOut});

	TweenLite.from("#simmeredText", .5, {delay:7.7, top:"+=25", autoAlpha:0, ease:Expo.easeOut});
	TweenLite.from("#raguBottle", .75, {delay:7.7, top:"+=25", autoAlpha:0, ease:Expo.easeOut});

	TweenLite.from("#cta", .5, {delay:7.9, top:"+=25", autoAlpha:0, ease:Expo.easeOut});
 	TweenLite.to("#cta", .25, {scale:1.1, delay:8.5, ease:Expo.easeOut});
 	TweenLite.to("#cta", .25, {scale:1, delay:8.75, ease:Expo.easeOut});

	TweenLite.from("#replayBtn", .5, {delay:9.5, autoAlpha:0, rotation:-360, ease:Expo.easeOut});

	if (ie === 9) {

		TweenLite.set("#bookHolder",  {autoAlpha:0});

	};

}

function resetAnimation(){

 	TweenLite.set(ids, {clearProps:"all"});
	TweenLite.delayedCall(.01, init);
} 

function replayBtnRollOverHandler() {

 	TweenLite.to("#replayBtn", 1, {rotation:"+=360", overwrite:true, ease:Expo.easeOut});
}

function ctaRollOverHandler() {
 	TweenLite.set("#cta",  {scale:1.1});
}

function ctaRollOutHandler() {
 	TweenLite.set("#cta",  {scale:1});
}

