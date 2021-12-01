// JavaScript Document
//HTML5 Ad Template JS from DoubleClick by Google

var ecid;
var action;
var collapsedPanel;
var expandedPanel;
var expandBtn;
var exitBtn;
var closeBtn;
var container;


initAd = function(){

	container = document.getElementById('container_dc');

	collapsedPanel = document.getElementById('collapsed');
	expandedPanel = document.getElementById('expanded');
	expandBtn = document.getElementById('expand_btn');
	exitBtn = document.getElementById('exit_btn');
	closeBtn = document.getElementById('close_btn');

	box1Btn = document.getElementById('box1Btn');

	//boxCloseBtn = document.getElementById('boxCloseBtn');
	//ecid = Enabler.getDartCreativeId();

	addListeners();

	//if(checkState("get",ecid)) {
	// Stay collapsed show expand button
	container.style.display = "block";
	expandBtn.style.display = "block";
	startCollapsedAnimation();
		
	//}else {
	//	onExpandHandler(); // Auto expand
	//}

	TweenLite.set("#benefitBox",  {alpha:0});
	TweenLite.set("#b1t1",  {autoAlpha:0});
	TweenLite.set("#b2t1",  {autoAlpha:0});
	TweenLite.set("#b3t1",  {autoAlpha:0});
	TweenLite.set("#b4t1",  {autoAlpha:0});

}

function startCollapsedAnimation()
{

	TweenLite.from("#t1", 2, {autoAlpha:0, top:"+=50", delay:.5, ease:Expo.easeOut});
	TweenLite.to("#t1", 1, { top:"-=20", delay:2.5});

	TweenLite.from("#t2", 1, {autoAlpha:0, top:"+=50", delay:3, ease:Expo.easeOut});
	TweenLite.to("#t2", 1, {autoAlpha:0, top:"+=50", delay:5, ease:Expo.easeOut});

	TweenLite.from("#t3", 1, {autoAlpha:0, top:"+=50", delay:5.5, ease:Expo.easeOut});
	TweenLite.to("#t3", 1, {autoAlpha:0, top:"+=50", delay:7.5, ease:Expo.easeOut});

	TweenLite.from("#t4", 1, {autoAlpha:0, top:"+=50", delay:8, ease:Expo.easeOut});
	TweenLite.to("#t4", 1, {autoAlpha:0, top:"+=50", delay:10, ease:Expo.easeOut});

	TweenLite.from("#t5", 1, {autoAlpha:0, top:"+=50", delay:11, ease:Expo.easeOut});
	TweenLite.to("#t5", 1, {autoAlpha:0, top:"+=50", delay:13, ease:Expo.easeOut});

	TweenLite.from("#t6a", 1, {autoAlpha:0, top:"+=50", delay:13.5, ease:Expo.easeOut});
	TweenLite.from("#t6b", 1, {autoAlpha:0, top:"+=50", delay:13.6, ease:Expo.easeOut});
	TweenLite.from("#t6c", 1, {autoAlpha:0, top:"+=50", delay:13.7, ease:Expo.easeOut});
	TweenLite.from("#t6d", 1, {autoAlpha:0, top:"+=50", delay:13.8, ease:Expo.easeOut});

   	TweenLite.set(".glare", {left:-280, overwrite:true, delay:14.95, ease:Expo.easeOut});

	TweenLite.to(".glare", 1.5, {left:220, delay:15, ease:Expo.easeOut});
    TweenLite.to(".glare", .01, {left:-280, delay:16.5, ease:Expo.easeOut});


}

function startExpandedAnimation()
{

	TweenLite.from("#expandYourWorldText", 2.5, {autoAlpha:0, top:"+=50", delay:0, ease:Expo.easeOut});

	TweenLite.from("#box1", 1, {autoAlpha:0, top:"+=150", delay:0, ease:Expo.easeOut});
	TweenLite.from("#box2", 1, {autoAlpha:0, top:"+=150", delay:.2, ease:Expo.easeOut});
	TweenLite.from("#box3", 1, {autoAlpha:0, top:"+=150", delay:.4, ease:Expo.easeOut});
	TweenLite.from("#box4", 1, {autoAlpha:0, top:"+=150", delay:.6, ease:Expo.easeOut});

	TweenLite.from("#boxBar1", .1, {autoAlpha:0, delay:1.5, ease:Expo.easeOut});
	TweenLite.from("#boxBar2", .1, {autoAlpha:0, delay:1.5, ease:Expo.easeOut});
	TweenLite.from("#boxBar3", .1, {autoAlpha:0, delay:1.5, ease:Expo.easeOut});
	TweenLite.from("#boxBar4", .1, {autoAlpha:0, delay:1.5, ease:Expo.easeOut});

	TweenLite.from("#card", 1, { left:"+=350",  delay:1, ease:Expo.easeOut});
	TweenLite.from("#cta", 1, { autoAlpha:0, left:"+=350",  delay:1, ease:Expo.easeOut});
	TweenLite.from("#mcLogo", 1, { left:"+=350",  delay:1, ease:Expo.easeOut});
	TweenLite.from("#cardText", 1, { left:"+=350",  delay:1, ease:Expo.easeOut});
   	TweenLite.set(".cardGlare", {left:-280, overwrite:true, ease:Expo.easeOut});
  	TweenLite.to(".cardGlare", 3.5, {left:220, delay:1.5, overwrite:true, ease:Expo.easeOut});

  	 TweenLite.delayedCall(3, box1BtnClick);	
}

addListeners = function (){

	collapsed.addEventListener('click', onExpandHandler, false);
	//exitBtn.addEventListener('click', onExitHandler, false);
	closeBtn.addEventListener('click', onCloseHandler, false);
	Enabler.addEventListener( studio.events.StudioEvent.EXPAND_START, expandStartHandler);
	Enabler.addEventListener(studio.events.StudioEvent.COLLAPSE_START, collapseStartHandler);

	box1Btn.addEventListener('click', box1BtnClick, false);
	box2Btn.addEventListener('click', box2BtnClick, false);
	box3Btn.addEventListener('click', box3BtnClick, false);
	box4Btn.addEventListener('click', box4BtnClick, false);
	boxCloseBtn1.addEventListener('click', boxCloseBtnClick, false);
	boxCloseBtn2.addEventListener('click', boxCloseBtnClick, false);
	boxCloseBtn3.addEventListener('click', boxCloseBtnClick, false);
	boxCloseBtn4.addEventListener('click', boxCloseBtnClick, false);

	collapsed.addEventListener('mouseover', ctaRollOverHandler, false);
	collapsed.addEventListener('mouseout', ctaRollOutHandler, false);

	cta.addEventListener('mouseover', ctaRollOverHandler, false);
	cta.addEventListener('mouseout', ctaRollOutHandler, false);

	t1a.addEventListener('mouseover', t1aOverHandler, false);
	t1b.addEventListener('mouseover', t1bOverHandler, false);
	t1c.addEventListener('mouseover', t1cOverHandler, false);

	t1a.addEventListener('mouseout', t1aOutHandler, false);
	t1b.addEventListener('mouseout', t1bOutHandler, false);
	t1c.addEventListener('mouseout', t1cOutHandler, false);

	t2a.addEventListener('mouseover', t2aOverHandler, false);
	t2b.addEventListener('mouseover', t2bOverHandler, false);
	t2c.addEventListener('mouseover', t2cOverHandler, false);

	t2a.addEventListener('mouseout', t2aOutHandler, false);
	t2b.addEventListener('mouseout', t2bOutHandler, false);
	t2c.addEventListener('mouseout', t2cOutHandler, false);

	t3a.addEventListener('mouseover', t3aOverHandler, false);
	t3b.addEventListener('mouseover', t3bOverHandler, false);
	t3c.addEventListener('mouseover', t3cOverHandler, false);
	t3d.addEventListener('mouseover', t3dOverHandler, false);

	t3a.addEventListener('mouseout', t3aOutHandler, false);
	t3b.addEventListener('mouseout', t3bOutHandler, false);
	t3c.addEventListener('mouseout', t3cOutHandler, false);
	t3d.addEventListener('mouseout', t3dOutHandler, false);

	t4a.addEventListener('mouseover', t4aOverHandler, false);
	t4a.addEventListener('mouseout', t4aOutHandler, false);

	t1a.addEventListener('click', onExitHandler, false);
	t1b.addEventListener('click', onExitHandler, false);
	t1c.addEventListener('click', onExitHandler, false);

	t2a.addEventListener('click', onExitHandler, false);
	t2b.addEventListener('click', onExitHandler, false);
	t2c.addEventListener('click', onExitHandler, false);

	t3a.addEventListener('click', onExitHandler, false);
	t3b.addEventListener('click', onExitHandler, false);
	t3c.addEventListener('click', onExitHandler, false);
	t3d.addEventListener('click', onExitHandler, false);

	t4a.addEventListener('click', onExitHandler, false);

	cta.addEventListener('click', onExitHandler, false);


}

box1BtnClick = function(){

	TweenLite.to("#box1", 1, {backgroundColor:"#8a8c8c", top:473, ease:Expo.easeOut});
	TweenLite.to("#box2", 1, {backgroundColor:"#005f97", top:488, ease:Expo.easeOut});
	TweenLite.to("#box3", 1, {backgroundColor:"#005f97", top:488, ease:Expo.easeOut});
	TweenLite.to("#box4", 1, {backgroundColor:"#005f97", top:488, ease:Expo.easeOut});
	TweenLite.to("#benefitBox", 1, {alpha:1, ease:Expo.easeOut});

	TweenLite.set("#box1Btn", {autoAlpha:0});
	TweenLite.set("#box2Btn", {autoAlpha:1});
	TweenLite.set("#box3Btn", {autoAlpha:1});
	TweenLite.set("#box4Btn", {autoAlpha:1});

	TweenLite.set("#boxCloseBtn1", {backgroundPosition:'25px 0px', ease:Expo.easeOut});
	TweenLite.set(["#boxCloseBtn2", "#boxCloseBtn3", "#boxCloseBtn4"], {backgroundPosition:'0px 0px', ease:Expo.easeOut});

	TweenLite.to("#b1t1",  .5, {autoAlpha:1, ease:Expo.easeOut});
	TweenLite.to("#b2t1",  .5, {autoAlpha:0, ease:Expo.easeOut});
	TweenLite.to("#b3t1",  .5, {autoAlpha:0, ease:Expo.easeOut});
	TweenLite.to("#b4t1",  .5, {autoAlpha:0, ease:Expo.easeOut});
}

box2BtnClick = function(){

	TweenLite.killTweensOf(box1BtnClick);

	TweenLite.to("#box2", 1, {backgroundColor:"#8a8c8c", top:473, ease:Expo.easeOut});
	TweenLite.to("#box1", 1, {backgroundColor:"#005f97", top:488, ease:Expo.easeOut});
	TweenLite.to("#box3", 1, {backgroundColor:"#005f97", top:488, ease:Expo.easeOut});
	TweenLite.to("#box4", 1, {backgroundColor:"#005f97", top:488, ease:Expo.easeOut});
	TweenLite.to("#benefitBox", 1, {alpha:1, ease:Expo.easeOut});

	TweenLite.set("#box2Btn", {autoAlpha:0});
	TweenLite.set("#box1Btn", {autoAlpha:1});
	TweenLite.set("#box3Btn", {autoAlpha:1});
	TweenLite.set("#box4Btn", {autoAlpha:1});

	TweenLite.set("#boxCloseBtn2", {backgroundPosition:'25px 0px', ease:Expo.easeOut});
	TweenLite.set(["#boxCloseBtn1", "#boxCloseBtn3", "#boxCloseBtn4"], {backgroundPosition:'0px 0px', ease:Expo.easeOut});

	TweenLite.to("#b1t1",  .5, {autoAlpha:0, ease:Expo.easeOut});
	TweenLite.to("#b2t1",  .5, {autoAlpha:1, ease:Expo.easeOut});
	TweenLite.to("#b3t1",  .5, {autoAlpha:0, ease:Expo.easeOut});
	TweenLite.to("#b4t1",  .5, {autoAlpha:0, ease:Expo.easeOut});
}

box3BtnClick = function(){

	TweenLite.killTweensOf(box1BtnClick);

	TweenLite.to("#box3", 1, {backgroundColor:"#8a8c8c", top:473, ease:Expo.easeOut});
	TweenLite.to("#box2", 1, {backgroundColor:"#005f97", top:488, ease:Expo.easeOut});
	TweenLite.to("#box1", 1, {backgroundColor:"#005f97", top:488, ease:Expo.easeOut});
	TweenLite.to("#box4", 1, {backgroundColor:"#005f97", top:488, ease:Expo.easeOut});
	TweenLite.to("#benefitBox", 1, {alpha:1, ease:Expo.easeOut});

	TweenLite.set("#box3Btn", {autoAlpha:0});
	TweenLite.set("#box2Btn", {autoAlpha:1});
	TweenLite.set("#box1Btn", {autoAlpha:1});
	TweenLite.set("#box4Btn", {autoAlpha:1});

	TweenLite.set("#boxCloseBtn3", {backgroundPosition:'25px 0px', ease:Expo.easeOut});
	TweenLite.set(["#boxCloseBtn1", "#boxCloseBtn2", "#boxCloseBtn4"], {backgroundPosition:'0px 0px', ease:Expo.easeOut});

	TweenLite.to("#b1t1",  .5, {autoAlpha:0, ease:Expo.easeOut});
	TweenLite.to("#b2t1",  .5, {autoAlpha:0, ease:Expo.easeOut});
	TweenLite.to("#b3t1",  .5, {autoAlpha:1, ease:Expo.easeOut});
	TweenLite.to("#b4t1",  .5, {autoAlpha:0, ease:Expo.easeOut});
}

box4BtnClick = function(){

	TweenLite.killTweensOf(box1BtnClick);

	TweenLite.to("#box4", 1, {backgroundColor:"#8a8c8c", top:473, ease:Expo.easeOut});
	TweenLite.to("#box2", 1, {backgroundColor:"#005f97", top:488, ease:Expo.easeOut});
	TweenLite.to("#box3", 1, {backgroundColor:"#005f97", top:488, ease:Expo.easeOut});
	TweenLite.to("#box1", 1, {backgroundColor:"#005f97", top:488, ease:Expo.easeOut});
	TweenLite.to("#benefitBox", 1, {alpha:1, ease:Expo.easeOut});

	TweenLite.set("#box4Btn", {autoAlpha:0});
	TweenLite.set("#box2Btn", {autoAlpha:1});
	TweenLite.set("#box3Btn", {autoAlpha:1});
	TweenLite.set("#box1Btn", {autoAlpha:1});

	TweenLite.set("#boxCloseBtn4", {backgroundPosition:'25px 0px', ease:Expo.easeOut});
	TweenLite.set(["#boxCloseBtn1", "#boxCloseBtn2", "#boxCloseBtn3"], {backgroundPosition:'0px 0px', ease:Expo.easeOut});

	TweenLite.to("#b1t1",  .5, {autoAlpha:0, ease:Expo.easeOut});
	TweenLite.to("#b2t1",  .5, {autoAlpha:0, ease:Expo.easeOut});
	TweenLite.to("#b3t1",  .5, {autoAlpha:0, ease:Expo.easeOut});
	TweenLite.to("#b4t1",  .5, {autoAlpha:1, ease:Expo.easeOut});
}

boxCloseBtnClick = function(){
	TweenLite.set("#box1Btn", {autoAlpha:1});
	TweenLite.set("#box2Btn", {autoAlpha:1});
	TweenLite.set("#box3Btn", {autoAlpha:1});
	TweenLite.set("#box4Btn", {autoAlpha:1});
	TweenLite.to("#box1", 1, {backgroundColor:"#005f97", top:488, ease:Expo.easeOut});
	TweenLite.to("#box2", 1, {backgroundColor:"#005f97", top:488, ease:Expo.easeOut});
	TweenLite.to("#box3", 1, {backgroundColor:"#005f97", top:488, ease:Expo.easeOut});
	TweenLite.to("#box4", 1, {backgroundColor:"#005f97", top:488, ease:Expo.easeOut});
	TweenLite.to("#benefitBox", 1, {alpha:0, ease:Expo.easeOut});

	TweenLite.set(["#boxCloseBtn1", "#boxCloseBtn2", "#boxCloseBtn3", "#boxCloseBtn4"], {backgroundPosition:'0px 0px', ease:Expo.easeOut});

	TweenLite.to("#b1t1",  .5, {autoAlpha:0, ease:Expo.easeOut});
	TweenLite.to("#b2t1",  .5, {autoAlpha:0, ease:Expo.easeOut});
	TweenLite.to("#b3t1",  .5, {autoAlpha:0, ease:Expo.easeOut});
	TweenLite.to("#b4t1",  .5, {autoAlpha:0, ease:Expo.easeOut});

}

function ctaRollOverHandler() {
 	TweenLite.to("#cta", .125, {scale:1.1, overwrite:true, ease:Expo.easeOut});
 	TweenLite.to("#expand_btn", .125, {scale:1.1, overwrite:true, ease:Expo.easeOut});
  	TweenLite.to(".glare", 1.5, {left:220,  ease:Expo.easeOut});
  	//TweenLite.to(".cardGlare", 3.5, {left:220, overwrite:true, ease:Expo.easeOut});

}

function ctaRollOutHandler() {
 	TweenLite.to("#cta", .25, {scale:1, overwrite:false, ease:Expo.easeOut});
    TweenLite.to(".glare", .01, {left:-280, ease:Expo.easeOut});
 	TweenLite.to("#expand_btn", .125, {scale:1, overwrite:true, ease:Expo.easeOut});

}


t1aOverHandler = function(){

	TweenLite.set("#t1a",  {borderBottomWidth:1, overwrite:false});

}

t1aOutHandler = function(){

	TweenLite.set("#t1a",  {borderBottomWidth:0, overwrite:false});

}

t1bOverHandler = function(){

	TweenLite.set("#t1b",  {borderBottomWidth:1, overwrite:false});

}

t1bOutHandler = function(){

	TweenLite.set("#t1b",  {borderBottomWidth:0, overwrite:false});

}

t1cOverHandler = function(){

	TweenLite.set("#t1c",  {borderBottomWidth:1, overwrite:false});

}

t1cOutHandler = function(){

	TweenLite.set("#t1c",  {borderBottomWidth:0, overwrite:false});

}

t2aOverHandler = function(){

	TweenLite.set("#t2a",  {borderBottomWidth:1, overwrite:false});

}

t2aOutHandler = function(){

	TweenLite.set("#t2a",  {borderBottomWidth:0, overwrite:false});

}

t2bOverHandler = function(){

	TweenLite.set("#t2b",  {borderBottomWidth:1, overwrite:false});

}

t2bOutHandler = function(){

	TweenLite.set("#t2b",  {borderBottomWidth:0, overwrite:false});

}

t2cOverHandler = function(){

	TweenLite.set("#t2c",  {borderBottomWidth:1, overwrite:false});

}

t2cOutHandler = function(){

	TweenLite.set("#t2c",  {borderBottomWidth:0, overwrite:false});

}

t3aOverHandler = function(){

	TweenLite.set("#t3a",  {borderBottomWidth:1, overwrite:false});
}

t3aOutHandler = function(){

	TweenLite.set("#t3a",  {borderBottomWidth:0, overwrite:false});
}

t3bOverHandler = function(){

	TweenLite.set("#t3b",  {borderBottomWidth:1, overwrite:false});
}

t3bOutHandler = function(){

	TweenLite.set("#t3b",  {borderBottomWidth:0, overwrite:false});
}

t3cOverHandler = function(){

	TweenLite.set("#t3c",  {borderBottomWidth:1, overwrite:false});
}

t3cOutHandler = function(){

	TweenLite.set("#t3c",  {borderBottomWidth:0, overwrite:false});
}

t3dOverHandler = function(){

	TweenLite.set("#t3d",  {borderBottomWidth:1, overwrite:false});
}

t3dOutHandler = function(){

	TweenLite.set("#t3d",  {borderBottomWidth:0, overwrite:false});
}

t4aOverHandler = function(){

	TweenLite.set("#t4a",  {borderBottomWidth:1, overwrite:false});
}

t4aOutHandler = function(){

	TweenLite.set("#t4a",  {borderBottomWidth:0, overwrite:false});
}

onExpandHandler = function(e){
	Enabler.requestExpand();
	collapsedPanel.style.display = "none";
	expandedPanel.style.display = "block";
	startExpandedAnimation();
}

onExitHandler = function(e){
	Enabler.exit('HTML5 Clickthrough');
}

onCloseHandler = function(e){
	Enabler.counter('Rich Media collapsed', true);
	closeAd();
	//setCapping();
	boxCloseBtnClick();
}

closeAd = function(){
	Enabler.requestCollapse();
	Enabler.reportManualClose();
	expandedPanel.style.display = "none";
	expandBtn.style.display = "block";
	collapsedPanel.style.display = "block";
}

collapseStartHandler = function(e) {
	Enabler.finishCollapse();
}

expandStartHandler = function(e) {
	Enabler.finishExpand();
}

// setCapping = function() {
// 	checkState("set",ecid);
// }

// checkState = function(actionType) {
// 	action = actionType;

// 	if(Enabler.isServingInLiveEnvironment()) {
// 		if(typeof checkSetCapping === 'function') {
// 			if(checkSetCapping(action,ecid)) {
// 				return true;
// 			}
// 		}
// 	}
// 	return false;
// }
