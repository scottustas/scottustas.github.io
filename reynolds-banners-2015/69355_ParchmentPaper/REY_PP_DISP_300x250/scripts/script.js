var adDiv;
var recipeVar = "squash";
var recipeCta = "squash";
var isExpanded = false;

function init() {
  adDiv = document.getElementById("ad");
  var container = document.getElementById("container"); // You may need to add the container element to HTML if it's missing

  container.style.display = "block";

  useInAppCloseButton();
  TweenLite.set("#bg_overlay", { alpha: .5 }); 
  TweenLite.set("#panel", { x: "+300" });   
  TweenLite.set("#recipePanel1", { alpha: 0 });

  intro();
}

function intro() {   
  // Animate elements sequentially with delays
  TweenLite.from("#t1a", .5, { delay: 1, top: "+=25", alpha: 0, ease: Expo.easeOut });
  TweenLite.from("#t1b", .5, { delay: 1.25, top: "+=25", alpha: 0, ease: Expo.easeOut });
  TweenLite.from("#textDeco1", .5, { delay: 1.25, top: "+=25", alpha: 0, ease: Expo.easeOut });
  TweenLite.from("#textDeco2", .5, { delay: 1.25, top: "+=25", alpha: 0, ease: Expo.easeOut });

  TweenLite.from("#rollingPin", .5, { delay: 1.5, top: "+=25", alpha: 0, ease: Expo.easeOut });

  TweenLite.to("#rollingPin", .5, { delay: 2.5, rotation: 90, left: "-=100", scale: .5, ease: Expo.easeIn });

  TweenLite.from("#t2", .5, { delay: 3.25, clip: "rect(0px 0px 19px 0px)", ease: Linear.easeNone });
  TweenLite.to("#rollingPin", .5, { delay: 3.25, left: "+=215", scale: .5, ease: Linear.easeNone });
  TweenLite.to("#rollingPin", .5, { delay: 3.75, left: "+=215", scale: .5, ease: Linear.easeNone });

  TweenLite.to("#t1a", .5, { delay: 5.5, alpha: 0, ease: Expo.easeOut });
  TweenLite.to("#t1b", .5, { delay: 5.5, alpha: 0, ease: Expo.easeOut });
  TweenLite.to("#t2", .5, { delay: 5.5, alpha: 0, ease: Expo.easeOut });
  TweenLite.to("#textDeco1", .5, { delay: 5.5, alpha: 0, ease: Expo.easeOut });
  TweenLite.to("#textDeco2", .5, { delay: 5.5, alpha: 0, ease: Expo.easeOut });

  TweenLite.from("#t3", .5, { delay: 6, top: "+=25", alpha: 0, ease: Expo.easeOut });
  TweenLite.to("#t3", .5, { delay: 9, alpha: 0, ease: Expo.easeOut });

  TweenLite.to("#bg_overlay", 1, { delay: 9, alpha: 0, ease: Expo.easeOut });
  TweenLite.from("#blueRibbon", 1, { delay: 9, left: "-=250", ease: Expo.easeOut });
  TweenLite.from("#ctaBar", 1, { delay: 9.5, top: "+=150", ease: Expo.easeOut, onComplete: addEventListeners });
}

function useInAppCloseButton() {
  // Check if the close button should be customized (you can customize based on other conditions)
  var sdkData = getCustomSDKData();

  if (sdkData !== null && sdkData.SDKType === "MRAID") {
    // Customize for MRAID SDK (This is an example, change it for your needs)
    console.log("Custom Close Button Enabled");
  }
}

function getCustomSDKData() {
  // Placeholder for SDK data, adjust accordingly for your ad system
  return { SDKType: "MRAID" }; // Example SDK data
}

function addEventListeners() {
  // Setup event listeners for ad interactions
  document.getElementById("close-button").addEventListener("click", collapse);
  document.getElementById("clickthrough-button").addEventListener("click", clickthrough);
  document.getElementById("dish1Btn").addEventListener("mouseover", foodClickBanner);
}

function foodClickPanel() {
  // Triggering food panel display on interaction
  TweenLite.set("#recipePanel1", { css: { display: "block" } });
  TweenLite.to("#recipePanel1", .25, { alpha: 1, delay: .2, ease: Expo.easeOut });
}

function foodClickBanner(e) {
  // Handle food banner click event
  document.getElementById("dish1Btn").removeEventListener("mouseover", foodClickBanner);
  expand();
}

function expand() {
  // Simulate the expansion of the ad
  adDiv.classList.remove("collapsed");
  adDiv.classList.add("expanded");

  TweenLite.to("#panel", .5, { delay: .2, x: 0, ease: Expo.easeOut });
  foodClickPanel();
  isExpanded = true;
}

function collapse() {
  // Collapse the ad and reset elements
  TweenLite.set("#recipePanel1", { alpha: 0 });
  TweenLite.set("#panel", { x: "+300" });

  // Re-add event listeners after collapsing
  TweenLite.delayedCall(1, addEventListeners);

  adDiv.classList.remove("expanded");
  adDiv.classList.add("collapsed");
  isExpanded = false;
}

function clickthrough() {
  // Handle clickthrough action
  console.log("Clickthrough triggered!");
  window.open("http://www.reynoldskitchens.com/easy-recipes/recipe-items/homemade-animal-graham-crackers/?order=default&category=5376,1200,1255,1256,5044,1273,5385,5390,7575", "_blank");
}

// Initialize once the window has fully loaded
window.addEventListener("load", init);
