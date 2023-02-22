
var adDiv;
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
  useInAppCloseButton();

  container = document.getElementById('container');
  container.style.display = "block";

  intro();
 
}

function intro(){   

  TweenMax.from("#bannerBckg", 1.5, {delay:.5, alpha:0,  onStart:addEventListeners});
  TweenMax.from("#text1", 1.5, {delay:.5, alpha:0});
  TweenMax.from("#ctaText", 1.5, {delay:1.5, alpha:0});
  TweenMax.from("#ctaArrows", .5, {delay:2, alpha:0, ease:Expo.easeInOut});
  TweenMax.to("#ctaArrows", .75, {delay:2.5, alpha:.5, ease:Expo.easeInOut, yoyo:true, repeat:-1});

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

  expandBtn.addEventListener("mouseover", bannerOver);
  expandBtn.addEventListener("mouseout", bannerOut);
  clickthroughButton.addEventListener("click", clickthrough);

}

function clickPanel() {

  TweenLite.set("#recipePanel1", {css:{display: "block"}});

    if(isExpanded){
        TweenLite.set("#recipePanel1", {alpha:1});
      } else {
        TweenLite.to("#recipePanel1", .75,{delay:.5, alpha:1});
      };

  TweenLite.to("#clickthroughButton", .5, {delay:.5, alpha:1, ease:Expo.easeOut});

}

function bannerOver(event) {

}

function bannerOut(event) {

}

function expand() {
  EB.expand();
  adDiv.classList.remove("collapsed");
  adDiv.classList.add("expanded");        
  clickPanel();
  isExpanded = true;
  
}

function clickthrough() {
 console.log("click");
  EB.userActionCounter("ctaClickthrough");
  EB.clickthrough("ctaClickthrough", "http://www.reynoldskitchens.com/recipes/coffee-dusted-pear-galette/");

}

window.addEventListener("load", initEB);
