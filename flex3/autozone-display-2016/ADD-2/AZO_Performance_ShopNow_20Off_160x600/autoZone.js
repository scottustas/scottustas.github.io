var container, content, hotspot, cta, ctaPlaying = false;
var isWebkit;

window.onload = function() {
    buildAd();
};

buildAd = function() {
    container = document.getElementById("container_dc");
    content = document.getElementById("content_dc");
    cta = document.getElementById('cta');
    hotspot = document.getElementById('hotspot');

    // i.e. --->  subHead = document.getElementById("subHead");
    isWebkit = navigator.userAgent.indexOf('AppleWebKit') != -1;

    addListeners();
    startingValues();
};

addListeners = function() {
    hotspot.addEventListener("click", clickHandler, false);
    hotspot.addEventListener("mouseenter", ctaRollHandler, false);
};

clickHandler = function(e) {
    //console.log("CLICK ON ", e.currentTarget.id);
    switch(e.currentTarget.id) {
        case "hotspot":
            window.open(window.clickTag,'_blank');
            break;
    }
};

ctaRollHandler = function(e){
    if(e.type == "mouseenter"){
        ctaRollAni("#shine");
    }
}

ctaRollAni = function(target1){
   if(ctaPlaying != true){
       ctaPlaying = true;
       TweenMax.killTweensOf(target1);
       //dropShadow - slope :0.45


       TweenMax.set(target1, {opacity:0.25});
       TweenMax.to("#dropShadow",0.75, {attr:{slope:0.8}, ease:Power2.easeIn});
       TweenMax.to(target1, 0.75, {opacity:0.7, x:165, ease:Power2.easeIn, onComplete: function(){
            TweenMax.to(target1, 0.45, {opacity:0.45, x:0, ease:Power2.easeIn, onComplete: function(){
               TweenMax.set(target1, {x:0});
               ctaPlaying =false;
            }});
            TweenMax.to("#dropShadow", 0.45, {attr:{slope:0.45}, ease:Power2.easeIn});
       }});
    }
}

var txt1APaths, blurGroup1;

startingValues = function(){
    //TweenMax.set(".shine", {xPercent:-100});
    content.style.visibility = "visible";

    txt1APaths = [].slice.call(document.getElementById('txt1A').getElementsByTagName('g')[0].getElementsByTagName('path'), 0).reverse();

    //reorder required for this 160x600
    txt1APaths = [txt1APaths[5], txt1APaths[6], txt1APaths[7], txt1APaths[8], txt1APaths[9], txt1APaths[0], txt1APaths[1], txt1APaths[2], txt1APaths[3], txt1APaths[4]]

    //blurGroup1 = makeBlurGroup(txt1APaths, 0.75);

    startAnimation();
}

startAnimation = function() {
    console.log('startAni\n\n\n')
    var frame1Blur = [newBlurObj(0, document.getElementById('txt1A'), false), newBlurObj(0, document.getElementById('txt1B'), false)];
    var adTl = new TimelineLite();
    adTl.add("startAd")

        .from('#txt1A', .65, { x: -245, ease: Back.easeOut.config( 0.55) })

        .add("txt1B", "+=0.45")
        .from(txt1B, 0.85,{xPercent:-100, ease: Back.easeOut.config( 0.55)},"txt1B")
        .to(txt1B, 0.85,{opacity:1, ease: Power4.easeOut},"txt1B")


        .add("f1Out", "+=1.75")
        .to([txt1A, txt1B], 0.65,{x:160, ease: Back.easeIn.config( 0.45)},"f1Out")
        .to([txt1A, txt1B], 0.65,{opacity:0, ease: Power3.easeOut},"f1Out+=0.25")
        .to(frame1Blur[0],1.5,{a:2, onUpdate:applyBlur, ease: Power4.easeOut, onUpdateParams: ["{self}"]},"f1Out+=0.2")
        .to(frame1Blur[1],1.5,{a:2, onUpdate:applyBlur, ease: Power4.easeOut, onUpdateParams: ["{self}"]},"f1Out+=0.2")


        .add("txt2A", "-=0.95")
        .from(txt2A, 0.85,{xPercent:-100, ease: Back.easeOut.config( 0.45)},"txt2A")
        .to(txt2A, 0.85,{opacity:1, ease: Power4.easeOut},"txt2A")

        .add("txt2B", "+=0.35")
        .from(txt2B, 0.85,{xPercent:-120, ease: Back.easeOut.config( 0.45)},"txt2B")
        .to(txt2B, 0.85,{opacity:1, ease: Power4.easeOut},"txt1B")

        .add("endFrame", "endFrame+=0.1")
        .set(cta, {display: "block"}, "endFrame")
        .to(cta, 0.65,{opacity:1, ease: Power4.easeOut},"endFrame+=0.0")
        .to(legal, 0.8,{opacity:1, ease: Power4.easeOut},"endFrame+=0.1")

        .add(function(){
            ctaRollAni("#shine");
        })
};

newBlurObj= function(startVal, elm, setState){
    //console.log(startVal, elm, setState)
    var newBlur = {a:startVal, element: elm};
    if(setState) {TweenMax.set(newBlur, {a:startVal, onUpdate:applyBlur, onUpdateParams: ["{self}"]})}
    return newBlur;
}

makeBlurGroup = function(arrSource, startVal){
    var blurGroup = [];
    for (i = 0; i < arrSource.length; i++) {
        blurGroup.push(newBlurObj(startVal, arrSource[i], true));
    }
    return blurGroup;
}

randomNum = function(i, sourceArry, min, max){
        //if i is closer to one than put in larger -num
        //else number is closer to 9 then smaller number closer to -45

        var percent = ((i / (sourceArry.length - 1) ) * 100).toFixed(3);
        var weightedNum = calcPoint(min, max, percent);
        var randomX = Math.randomBetween(min,weightedNum).toFixed(3);
        //console.log(i, percent, weightedNum, randomX)
        return randomX;
}

calcPoint = function(x, y, p){
        var point = x + ((p * y)/100) - ((p * x)/100);
        return point;
}

Math.randomBetween = function (a, b) {
     //return Math.floor(Math.random() * (b - a + 1) + a);
    return Math.random() * (b - a + 1) + a;
};


function applyBlur(tl)
{
    var blurElement = tl.target;
    if(!isWebkit){
        cssFilter = {filter:"blur(" + blurElement.a + "px)"};
        TweenMax.set(blurElement.element, cssFilter);
    }else{
        //cssFilter = {'-webkit-filter':"blur(" + blurElement.a + "px)"};
    }
    //TweenMax.set(blurElement.element, cssFilter);
};

////////////////////////////////////////
///////////// HELPER FUNCTIONS
////////////////////////////////////////
/*Array.prototype.shuffle = function() {
  var i = this.length, j, temp;
  if ( i == 0 ) return this;
  while ( --i ) {
     j = Math.floor( Math.random() * ( i + 1 ) );
     temp = this[i];
     this[i] = this[j];
     this[j] = temp;
  }
  return this;
}*/
