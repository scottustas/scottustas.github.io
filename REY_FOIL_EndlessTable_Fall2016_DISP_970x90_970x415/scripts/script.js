var adDiv;
var isExpanded = false;

function initAd() {
  adDiv = document.getElementById("ad");

  container = document.getElementById('container');
  container.style.display = "block";

  intro();
}

function intro(){   
  // Animate the initial entrance of the elements
  TweenMax.from("#bannerBckg", 1.5, {delay:.5, alpha:0, onStart:addEventListeners});
  TweenMax.from("#text1", 1.5, {delay:.5, alpha:0});
  TweenMax.from("#ctaText", 1.5, {delay:1.5, alpha:0});
  TweenMax.from("#ctaArrows", .5, {delay:2, alpha:0, ease:Expo.easeInOut});
  TweenMax.to("#ctaArrows", .75, {delay:2.5, alpha:.5, ease:Expo.easeInOut, yoyo:true, repeat:-1});
}

function addEventListeners() {
  // Add event listeners to elements for interactivity
  const expandBtn = document.getElementById("expandBtn");
  const clickthroughButton = document.getElementById("clickthroughButton");

  if (expandBtn) {
    expandBtn.addEventListener("mouseover", bannerOver);
    expandBtn.addEventListener("mouseout", bannerOut);
  }
  if (clickthroughButton) {
    clickthroughButton.addEventListener("click", clickthrough);
  }
}

function clickPanel() {
  // Show recipe panel when expanding the ad
  TweenLite.set("#recipePanel1", {css:{display: "block"}});

  if (isExpanded) {
    TweenLite.set("#recipePanel1", {alpha:1});
  } else {
    TweenLite.to("#recipePanel1", .75, {delay:.5, alpha:1});
  }

  TweenLite.to("#clickthroughButton", .5, {delay:.5, alpha:1, ease:Expo.easeOut});
}

function bannerOver(event) {
  // Handle hover effect on the banner (if needed)
}

function bannerOut(event) {
  // Handle hover out effect on the banner (if needed)
}

function expand() {
  // Expand the ad content
  adDiv.classList.remove("collapsed");
  adDiv.classList.add("expanded");
  clickPanel();
  isExpanded = true;
}

function collapse() {
  // Collapse the ad content (if you need a collapse function)
  adDiv.classList.remove("expanded");
  adDiv.classList.add("collapsed");
  isExpanded = false;
}

function clickthrough() {
  console.log("click");
  // Handle clickthrough action (use your own URL)
  window.open("http://www.reynoldskitchens.com/recipes/coffee-dusted-pear-galette/", "_blank");
}

// Initialize the ad when window loads
window.addEventListener("load", initAd);
