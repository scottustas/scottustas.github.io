
var container;
var content;

function init(){

	container = document.getElementById('container');
	content = document.getElementById('content');
	
	container.style.display = "block";
	content.style.display = "block";	
	startAnimation();

}

function addListeners() {

	// replayBtn.addEventListener('click', resetAnimation, false);
	// replayBtn.addEventListener('mouseover', replayBtnRollOverHandler, false);

	container.addEventListener('mouseover', ctaRollOverHandler, false);
	container.addEventListener('mouseout', ctaRollOutHandler, false);
}

function startAnimation()
{

	TweenLite.from("#t1", 1, {autoAlpha:0, top:"+=50", delay:0, ease:Expo.easeOut});
	TweenLite.to("#t1", 1, {autoAlpha:0, top:"+=50", delay:3});

	TweenLite.from("#t2", 2, {autoAlpha:0, top:"+=50", delay:4, ease:Expo.easeOut});
	TweenLite.from("#card", 2, {top:"+=80", delay:4, ease:Expo.easeOut});
	TweenLite.from("#mcLogo", 2, {top:"+=80", delay:4, ease:Expo.easeOut});
	TweenLite.to("#bottomBar", 2, {top:241, delay:4, ease:Expo.easeOut});

	TweenLite.to("#t2", 1, {autoAlpha:0, top:"+=50", delay:7.5});

	TweenLite.from("#t3", 2, {autoAlpha:0, top:"+=50", delay:8.5, ease:Expo.easeOut});
	TweenLite.to("#t3", 1, {autoAlpha:0, top:"+=50", delay:11.5});

	TweenLite.from("#americanPassportLogo", 2, {autoAlpha:0, top:"+=50", delay:12.5, ease:Expo.easeOut});
  
  TweenLite.to("#americanPassportLogo", 1, { alpha:0, delay:15, ease:Expo.easeOut});
  
  TweenLite.to("#card", 1, {top:155, left:15, width:92, height:64, delay:15.5, ease:Expo.easeOut});
	TweenLite.to("#mcLogo", 1, {top:183, left:112, width:23, height:13, delay:15.5, ease:Expo.easeOut});
	TweenLite.from("#typeShadow", 1, {scale:.9, alpha:0, delay:15.5});
	TweenLite.to("#bottomBar", 1, {top:200, delay:15.5, ease:Expo.easeOut});
	TweenLite.from("#t4", 1, {top:"+=200", delay:15.5, ease:Expo.easeOut});
	TweenLite.to("#background", 1, {top:-50, delay:15.5, ease:Expo.easeOut});
	TweenLite.from("#cta", 1, {top:"+=103", delay:15.5, ease:Expo.easeOut, onComplete:addListeners});

}

function ctaReposition(){

	TweenLite.set("#card", {top:102, left:184});
	TweenLite.set("#mcLogo", {top:137, left:150, scale:.9});

	TweenLite.from("#card", 1, {left:"+=250",delay:.1, ease:Expo.easeOut});
	TweenLite.from("#mcLogo", 1, {left:"+=250",delay:.1, ease:Expo.easeOut});

}

function resetAnimation(){

	// TweenLite.delayedCall(.01, init);

} 

function replayBtnRollOverHandler() {

 	TweenLite.to("#replayBtn", 1, {rotation:"+=360", overwrite:true, ease:Expo.easeOut});
}

function ctaRollOverHandler() {
 	TweenLite.to("#cta", .125, {scale:1.1, overwrite:true, ease:Expo.easeOut});
  	TweenLite.to(".glare", 1.5, {left:120, overwrite:true, ease:Expo.easeOut});
}

function ctaRollOutHandler() {
 	TweenLite.to("#cta", .25, {scale:1.01, overwrite:false, ease:Expo.easeOut});
    TweenLite.to(".glare", .01, {left:-180, overwrite:true, ease:Expo.easeOut});

}
