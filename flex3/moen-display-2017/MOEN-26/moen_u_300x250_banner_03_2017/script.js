var container;
var content;
var tl = new TimelineMax({delay:0.5, repeat:0, repeatDelay:0, });

function init(){
  container = document.getElementById('container');
  content = document.getElementById('content');
  container.style.display = "block";
  content.style.display = "block";  
  startAnimation();
}

function addListeners() {
  //container.addEventListener('mouseover', ctaRollOverHandler, false);
  //container.addEventListener('mouseout', ctaRollOutHandler, false);
  replayBtn.addEventListener('mouseover', replayBtnRollOverHandler, false);
  replayBtn.addEventListener('click', replayAnimation, false);
}

function startAnimation(){
  tl.timeScale(1.2);
  tl.staggerFrom(["#text1a","#text1b"],  1, { alpha:0}, 0.2)
  .to(["#background1","#text1a","#text1b"], .75, {delay:3, alpha:0})
  .from(["#background2","#moenU","#numbers","#cta1"], .75,  {alpha:0, onComplete:coolCount},"-=.75")
  .staggerFrom(["#text2a","#text2b"], 1, {delay:0,  alpha:0}, 0.2)
  .to(["#background2", "#text2a", "#text2b"], .75, {delay:3, alpha:0})
  .from("#background3", .75,  {alpha:0, onComplete:warmCount},"-=.75")
  .staggerFrom(["#text3a","#text3b"],  1, {delay:0,  alpha:0}, 0.2)
  .to(["#moenU","#text3a","#text3b","#logo", "#numbers"], .75, {delay:3.75, alpha:0})
  .staggerFrom(["#phone","#text4","#logo2"],  2, {alpha:0}, 0.1)
  .from('#replayBtn', .5, {  left:"+=25", alpha:0, ease:Expo.easeOut, onComplete:addListeners},"-=.5")

}

function ctaRollOverHandler(){
  TweenMax.set("#cta", {scale:1.05, overwrite:true});
  TweenMax.fromTo("#glare", .25, {css: {left: -100}}, {css:{left:150}} );
  TweenMax.fromTo("#glare2", .25, {css: {left: -70}}, {css:{left:30}} );
}

function ctaRollOutHandler(){
 TweenMax.set("#cta",  {scale:1.01, overwrite:false, ease:Expo.easeOut});
}

window.onload = function(e) {
      init();
};

function replayAnimation(){
  tl.restart();
  document.getElementById('numbers').innerHTML = 100 + "&#176;";
} 

function replayBtnRollOverHandler(){
  TweenMax.to("#replayBtn", 1, {rotation:"+=360", ease:Expo.easeOut});
}

function coolCount() {
    var counter = 100;
    var i = setInterval(function() {
        document.getElementById('numbers').innerHTML = parseInt(counter--) + "&#176;";
        if (counter === 98) {
            TweenMax.set("#numbers", {left:"+=8px"});
        }
        else if (counter === 94) {
            clearInterval(i);
        }
    }, 250);
};

function warmCount() {
    var counter = 95;
    var i = setInterval(function() {
        document.getElementById('numbers').innerHTML = parseInt(counter++) + "&#176;";
        if (counter === 101) {
            TweenMax.set("#numbers", {left:"-=10px"});
        }
        else if (counter === 103) {
            clearInterval(i);
        }
    }, 250);

};






