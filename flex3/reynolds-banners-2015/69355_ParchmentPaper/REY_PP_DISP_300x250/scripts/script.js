
var adDiv;
var recipeVar = "squash";
var recipeCta = "squash";
var isExpanded = false;

function initEB() {
    if (!EB.isInitialized()) {
        EB.addEventListener(EBG.EventName.EB_INITIALIZED, startAd);
    } else {
        startAd();
    }
}

function startAd() {

  adDiv = document.getElementById("ad");
  container.style.display = "block";

  useInAppCloseButton();
  TweenLite.set("#bg_overlay", {alpha:.5}); 
  TweenLite.set("#panel", {x:"+300"});   
  TweenLite.set("#recipePanel1", {alpha:0});
  
  intro();
  
}

function intro(){   

  TweenLite.from("#t1a", .5, {delay:1, top:"+=25", alpha:0, ease:Expo.easeOut});
  TweenLite.from("#t1b", .5, {delay:1.25, top:"+=25", alpha:0, ease:Expo.easeOut});
  TweenLite.from("#textDeco1", .5, {delay:1.25, top:"+=25", alpha:0, ease:Expo.easeOut});
  TweenLite.from("#textDeco2", .5, {delay:1.25, top:"+=25", alpha:0, ease:Expo.easeOut});

  TweenLite.from("#rollingPin", .5, {delay:1.5, top:"+=25", alpha:0, ease:Expo.easeOut});

  TweenLite.to("#rollingPin", .5, {delay:2.5, rotation:90, left:"-=100", scale:.5, ease:Expo.easeIn});

  TweenLite.from("#t2", .5, {delay:3.25, clip:"rect(0px 0px 19px 0px)", ease:Linear.easeNone});
  TweenLite.to("#rollingPin", .5, {delay:3.25, left:"+=215", scale:.5, ease:Linear.easeNone});
  TweenLite.to("#rollingPin", .5, {delay:3.75, left:"+=215", scale:.5, ease:Linear.easeNone});

  TweenLite.to("#t1a", .5, {delay:5.5, alpha:0, ease:Expo.easeOut});
  TweenLite.to("#t1b", .5, {delay:5.5, alpha:0, ease:Expo.easeOut});
  TweenLite.to("#t2", .5, {delay:5.5, alpha:0, ease:Expo.easeOut});
  TweenLite.to("#textDeco1", .5, {delay:5.5, alpha:0, ease:Expo.easeOut});
  TweenLite.to("#textDeco2", .5, {delay:5.5, alpha:0, ease:Expo.easeOut});

  TweenLite.from("#t3", .5, {delay:6, top:"+=25", alpha:0, ease:Expo.easeOut});
  TweenLite.to("#t3", .5, {delay:9, alpha:0, ease:Expo.easeOut});

  TweenLite.to("#bg_overlay", 1, {delay:9, alpha:0, ease:Expo.easeOut});
  TweenLite.from("#blueRibbon", 1, {delay:9, left:"-=250", ease:Expo.easeOut});
  TweenLite.from("#ctaBar", 1, {delay:9.5, top:"+=150", ease:Expo.easeOut, onComplete:addEventListeners});

}

function useInAppCloseButton() {
    var sdkData = EB.getSDKData();

    if (sdkData !== null) {
        if (sdkData.SDKType === "MRAID") {
            // set sdk to use custom close button
            EB.setExpandProperties({
                useCustomClose: true
            });
        }
    }
}

function addEventListeners() {
  //document.getElementById("expand-button").addEventListener("click", expand);
  document.getElementById("close-button").addEventListener("click", collapse);
  document.getElementById("clickthrough-button").addEventListener("click", clickthrough);
  //document.getElementById("user-action-button").addEventListener("click", userActionCounter);
  dish1Btn.addEventListener("mouseover", foodClickBanner);

}

function foodClickPanel() {
  TweenLite.set("#recipePanel1", {css:{display: "block"}});
  TweenLite.to("#recipePanel1", .25,  {alpha:1, delay:.2, ease:Expo.easeOut});
}

function foodClickBanner(e) {
  dish1Btn.removeEventListener("mouseover", foodClickBanner);
  expand();
}

//----------------------------------------

function expand() {
  EB.expand();
  adDiv.classList.remove("collapsed");
  adDiv.classList.add("expanded");
  
  TweenLite.to("#panel", .5, {delay:.2, x:0, ease:Expo.easeOut});
  foodClickPanel();
  isExpanded = true;
}

function collapse() {
  TweenLite.set("#recipePanel1", {alpha:0});
  TweenLite.set("#panel", {x:"+300"});

  TweenLite.delayedCall(1, addEventListeners);

  adDiv.classList.remove("expanded");
  adDiv.classList.add("collapsed");
  EB.collapse();
  isExpanded = false;
}

function clickthrough() {
  EB.userActionCounter("Graham Crackers");
  EB.clickthrough("Graham Crackers Click", "http://www.reynoldskitchens.com/easy-recipes/recipe-items/homemade-animal-graham-crackers/?order=default&category=5376,1200,1255,1256,5044,1273,5385,5390,7575");
}

window.addEventListener("load", initEB);
