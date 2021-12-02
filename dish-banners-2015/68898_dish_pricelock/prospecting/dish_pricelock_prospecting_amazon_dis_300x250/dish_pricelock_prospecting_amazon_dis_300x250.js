
var container;
var content;

function init(){

	container = document.getElementById('container');
	content = document.getElementById('content');
	
	addListeners();
	container.style.display = "block";
	content.style.display = "block";	
	startAnimation();
}

function addListeners() {

	replayBtn.addEventListener('click', resetAnimation, false);
	replayBtn.addEventListener('mouseover', replayBtnRollOverHandler, false);

	// container.addEventListener('mouseover', ctaRollOverHandler, false);
	// container.addEventListener('mouseout', ctaRollOutHandler, false);

	legal.addEventListener('mouseover', legalRollOverHandler, false);
	legal.addEventListener('mouseout', legalRollOutHandler, false);

 	TweenLite.set("#wreckingBall", { autoAlpha:0, scale:1, delay:0});

 	// TEST LAYOUT FROM PROVIDED GIF
 	// TweenLite.set("#wreckingBall", { top:-309, left:-56, rotation:-10, scale:.7, delay:1});
 	// TweenLite.set("#wreckingBall", { top:-287, left:18, rotation:-10, scale:.45, delay:1.5});
 	// TweenLite.set("#wreckingBall", { top:-302, left:8, rotation:-15, scale:.3, delay:2});
 	// TweenLite.set("#wreckingBall", { top:-316, left:-9, rotation:-15, scale:.2, delay:2.5});
 	// TweenLite.set("#wreckingBall", { top:-327, left:-20, rotation:-15, scale:.125, delay:3});
 	// TweenLite.set("#wreckingBall", { top:-377, left:-60, rotation:-15, scale:.125, delay:3.5});

}

function startAnimation()
{ 

	TweenLite.set("#t2b", {autoAlpha:0, top:"+=12.5", scale:0});
	TweenLite.set("#t2c", {autoAlpha:0, top:"+=12.5", scale:0});
	TweenLite.set("#t2d", {autoAlpha:0, top:"+=25", scale:0});
	TweenLite.set("#t2e", {autoAlpha:0, top:"+=25", scale:0});
	TweenLite.set("#t2f", {autoAlpha:0, top:"+=12.5", scale:0});
	TweenLite.set("#t2g", {autoAlpha:0, top:"+=12.5", scale:0});
	TweenLite.set("#offerGroup", {scale:0.8});
 	TweenLite.set("#t1_largeLetter", {alpha:0});

	TweenLite.from("#text1Group", 2, { autoAlpha:0, top:"+=50", ease:Expo.easeOut});

 	TweenLite.set("#shadow", {alpha:0, scale:3});

	TweenLite.to("#shadow", .5, {alpha:.3, scale:.65, delay:1.75, transformOrigin:"50% 50%",  ease:Linear.easeNone});

 	TweenLite.set("#shadow", {alpha:0, delay:2.25});

 	TweenLite.to("#wreckingBall", .1, {autoAlpha:1, delay:1.99});
	TweenLite.to("#wreckingBall", .125, {  top:-309, left:-56, rotation:-10, scale:.7, delay:2, ease:Linear.easeNone});
	TweenLite.to("#wreckingBall", .125, {  top:-287, left:18, rotation:-10, scale:.45, delay:2.125, ease:Linear.easeNone});
	TweenLite.to("#wreckingBall", .125, {  top:-302, left:8, rotation:-15, scale:.3, delay:2.25, ease:Linear.easeNone});
	TweenLite.to("#wreckingBall", .125, {  top:-316, left:-9, rotation:-15, scale:.2, delay:2.375, ease:Linear.easeNone});
	TweenLite.to("#wreckingBall", .125, {  top:-327, left:-20, rotation:-15, scale:.125, delay:2.5, ease:Linear.easeNone});
	TweenLite.to("#wreckingBall", .125, {  top:-337, left:-30, rotation:-15, scale:.115, delay:2.625, ease:Linear.easeNone});
	TweenLite.to("#wreckingBall", .125, {  top:-347, left:-40, rotation:-15, scale:.105, delay:2.75, ease:Linear.easeNone});
	TweenLite.to("#wreckingBall", .125, {  top:-357, left:-50, rotation:-15, scale:.095, delay:2.875, ease:Linear.easeNone});

	TweenLite.set("#t1_b", {display:'none', delay:2.2});

	TweenLite.to("#t1_t", 1.5, {top:Math.random() * (500 - -500) + -500, left:Math.random() * (500 - -500) + -500, rotationY:Math.random() * (500 - -500) + -500, rotationX:Math.random() * (500 - -500) + -500, scale:3,  delay:2.25, ease:Expo.easeOut, onComplete:removeText1});
	TweenLite.to("#t1_v", 1.5, {top:Math.random() * (500 - -500) + -500, left:Math.random() * (500 - -500) + -500, rotationY:Math.random() * (500 - -500) + -500, rotationX:Math.random() * (500 - -500) + -500, scale:3,  delay:2.25, ease:Expo.easeOut});
 	TweenLite.set("#t1_largeLetter", {alpha:1,delay:2.4});
	TweenLite.to("#t1_largeLetter", .5, {top:"+=50",rotation:90,  scale:50,  delay:2.4});
	TweenLite.to("#t1_i", 1.5, {top:Math.random() * (500 - -500) + -500, left:Math.random() * (500 - -500) + -500, rotationY:Math.random() * (500 - -500) + -500, rotationX:Math.random() * (500 - -500) + -500, scale:3,  delay:2.25, ease:Expo.easeOut});
	TweenLite.to("#t1_l", 1.5, {top:Math.random() * (500 - -500) + -500, left:Math.random() * (500 - -500) + -500, rotationY:Math.random() * (500 - -500) + -500, rotationX:Math.random() * (500 - -500) + -500, scale:3,  delay:2.25, ease:Expo.easeOut});
	TweenLite.to("#t1_l2", 1.5, {top:Math.random() * (500 - -500) + -500, left:Math.random() * (500 - -500) + -500, rotationY:Math.random() * (500 - -500) + -500, rotationX:Math.random() * (500 - -500) + -500, scale:3,  delay:2.25, ease:Expo.easeOut});
	TweenLite.to("#t1_g", 1.5, {top:Math.random() * (500 - -500) + -500, left:Math.random() * (500 - -500) + -500, rotationY:Math.random() * (500 - -500) + -500, rotationX:Math.random() * (500 - -500) + -500, scale:3,  delay:2.25, ease:Expo.easeOut});
	TweenLite.to("#t1_o", 1.5, {top:Math.random() * (500 - -500) + -500, left:Math.random() * (500 - -500) + -500, rotationY:Math.random() * (500 - -500) + -500, rotationX:Math.random() * (500 - -500) + -500, scale:3,  delay:2.25, ease:Expo.easeOut});
	TweenLite.to("#t1_i2", 1.5, {top:Math.random() * (500 - -500) + -500, left:Math.random() * (500 - -500) + -500, rotationY:Math.random() * (500 - -500) + -500, rotationX:Math.random() * (500 - -500) + -500, scale:3,  delay:2.25, ease:Expo.easeOut});
	TweenLite.to("#t1_n", 1.5, {top:Math.random() * (500 - -500) + -500, left:Math.random() * (500 - -500) + -500, rotationY:Math.random() * (500 - -500) + -500, rotationX:Math.random() * (500 - -500) + -500, scale:3,  delay:2.25, ease:Expo.easeOut});
	TweenLite.to("#t1_g2", 1.5, {top:Math.random() * (500 - -500) + -500, left:Math.random() * (500 - -500) + -500, rotationY:Math.random() * (500 - -500) + -500, rotationX:Math.random() * (500 - -500) + -500, scale:3,  delay:2.25, ease:Expo.easeOut});
	TweenLite.to("#t1_u", 1.5, {top:Math.random() * (500 - -500) + -500, left:Math.random() * (500 - -500) + -500, rotationY:Math.random() * (500 - -500) + -500, rotationX:Math.random() * (500 - -500) + -500, scale:3,  delay:2.25, ease:Expo.easeOut});
	TweenLite.to("#t1_p", 1.5, {top:Math.random() * (500 - -500) + -500, left:Math.random() * (500 - -500) + -500, rotationY:Math.random() * (500 - -500) + -500, rotationX:Math.random() * (500 - -500) + -500, scale:3,  delay:2.25, ease:Expo.easeOut});
	TweenLite.to("#t1_question", 1.5, {top:Math.random() * (500 - -500) + -500, left:Math.random() * (500 - -500) + -500, rotationY:Math.random() * (500 - -500) + -500, rotationX:Math.random() * (500 - -500) + -500, scale:3,  delay:2.25, ease:Expo.easeOut});

	TweenLite.from("#gradient1", 2.75, {autoAlpha:0, delay:3, ease:Expo.easeOut, onComplete:removeLargeLetter});

	TweenLite.from("#logo", .5, {top:"-=50", delay:3.5, ease:Expo.easeOut});
	TweenLite.from("#yearPriceLock", .5, {top:"-=350", delay:3.6, ease:Expo.easeOut});

	TweenLite.to("#yearPriceLock", .5, {top:"+=250", delay:5.75, ease:Expo.easeIn});

	TweenLite.from("#gradient2", .5, {autoAlpha:0, delay:5.75, ease:Expo.easeIn});

	TweenLite.from("#t2", .5, {autoAlpha:0, scale:2, delay:6, ease:Expo.easeOut});

	TweenLite.to("#offerGroup", 6, {scale:1, delay:6.5, transformOrigin:"50% 50%", ease:Linear.easeNone});

	TweenLite.from("#t2a", .25, {autoAlpha:0, top:"+=25", scale:0, delay:6.5, ease:Expo.sineInOut});

	TweenLite.to("#t2d", .25, { top:"-=12.5", scale:.5, delay:7.76, ease:Expo.sineInOut});
	TweenLite.to("#t2a", .25, {autoAlpha:0, top:"-=25", scale:2, delay:7.76, ease:Expo.sineInOut});
	TweenLite.to("#t2b", .25, {autoAlpha:1, top:"-=12.5", scale:1, delay:7.76, ease:Expo.sineInOut});

	TweenLite.to("#t2b", .25, {autoAlpha:0, top:"-=25", scale:2, delay:9.36, ease:Expo.sineInOut});
	

	TweenLite.to("#t2", .25, {top:"+=250",  delay:9.62, ease:Expo.easeIn});

	TweenLite.from("#gradient3", .5, {autoAlpha:0, delay:10, ease:Expo.easeIn});

	TweenLite.from("#yearPriceLock2", .5, {top:"-=390", delay:10, ease:Expo.easeOut});

	
	TweenLite.from("#t3", .5, {autoAlpha:0, top:"-=25", delay:10, ease:Expo.easeOut});
	TweenLite.from("#bottomBar", .5, {autoAlpha:0, top:"+=75", delay:10, ease:Expo.easeOut});

	TweenLite.from("#legal", .5, {autoAlpha:0, top:"+=75", delay:10, ease:Expo.easeOut});

	TweenLite.from("#replayBtn", .5, {delay:11, autoAlpha:0, rotation:-360, ease:Expo.easeOut});

}

function removeText1(){
	TweenLite.set("#text1Group", {display:'none'});
}

function removeLargeLetter(){
	TweenLite.set("#t1_largeLetter", {display:'none'});
}

function resetAnimation(){

	TweenLite.set("#text1Group", {autoAlpha:1, display:'block', top:0});

	TweenLite.set("#wreckingBall", {autoAlpha:1, top:-411, left:-151});

	TweenLite.set("#t1_t", {autoAlpha:1, top:84, left:22, scale:1, rotationY:0, rotationX:0});
	TweenLite.set("#t1_v", {autoAlpha:1, top:84, left:66, scale:1, rotationY:0, rotationX:0});
	TweenLite.set("#t1_b", {autoAlpha:1, top:84, left:136, scale:1, rotationY:0, rotationX:0});
	TweenLite.set("#t1_i", {autoAlpha:1, top:83, left:182, scale:1, rotationY:0, rotationX:0});
	TweenLite.set("#t1_l", {autoAlpha:1, top:83, left:206, scale:1, rotationY:0, rotationX:0});
	TweenLite.set("#t1_l2", {autoAlpha:1, top:83, left:244, scale:1, rotationY:0, rotationX:0});
	TweenLite.set("#t1_g", {autoAlpha:1, top:141, left:22, scale:1, rotationY:0, rotationX:0});
	TweenLite.set("#t1_o", {autoAlpha:1, top:141, left:58, scale:1, rotationY:0, rotationX:0});
	TweenLite.set("#t1_i2", {autoAlpha:1, top:142, left:98, scale:1, rotationY:0, rotationX:0});
	TweenLite.set("#t1_n", {autoAlpha:1, top:142, left:114, scale:1, rotationY:0, rotationX:0});
	TweenLite.set("#t1_g2", {autoAlpha:1, top:141, left:147, scale:1, rotationY:0, rotationX:0});
	TweenLite.set("#t1_u", {autoAlpha:1, top:142, left:194, scale:1, rotationY:0, rotationX:0});
	TweenLite.set("#t1_p", {autoAlpha:1, top:142, left:230, scale:1, rotationY:0, rotationX:0});
	TweenLite.set("#t1_question", {autoAlpha:1, top:141, left:255, scale:1, rotationY:0, rotationX:0});
	TweenLite.set("#t1_b", {display:'block'});
	TweenLite.set("#t1_largeLetter", {top:84, left:136, scale:1, display:'block', rotation:0});

	TweenLite.set("#gradient1", {alpha:1});
	TweenLite.set("#t1_b", {alpha:1});
	TweenLite.set("#t1_b", {alpha:1});

	TweenLite.set("#logo", {top:-46});
	TweenLite.set("#yearPriceLock", {top:72});
	TweenLite.set("#yearPriceLock2", {top:49});

	TweenLite.set("#offerGroup", {scale:1});

	TweenLite.set("#t2", {autoAlpha:1, top:78, scale:1});
	TweenLite.set("#t2a", {autoAlpha:1, top:132, scale:1});
	TweenLite.set("#t2b", {autoAlpha:0, top:134 });
	

	TweenLite.delayedCall(.01, init)

} 

function replayBtnRollOverHandler() {

 	TweenLite.to("#replayBtn", 1, {rotation:"+=360", overwrite:true, ease:Expo.easeOut});
}

function ctaRollOverHandler() {
 	TweenLite.to("#cta", .125, {scale:1.1, overwrite:true, ease:Expo.easeOut});
}

function ctaRollOutHandler() {
 	TweenLite.to("#cta", .25, {scale:1.01, overwrite:false, ease:Expo.easeOut});
}

function legalRollOverHandler() {

 	TweenLite.to("#legal", .25, {top:173, overwrite:true, ease:Expo.easeOut});

}

function legalRollOutHandler() {

	 TweenLite.to("#legal", .25, {top:208, overwrite:true, ease:Expo.easeOut});
}


