var container;
var content;

// Initialize the animation and elements when the page is ready
window.onload = function() {
    console.log("Ad Loaded, Initializing...");
    init();
};

function init() {
    // Select container and content
    container = document.getElementById('container');
    content = document.getElementById('content');

    // Show the content after initialization
    container.style.display = "block";
    content.style.display = "block";  

    // Start the animation and add event listeners
    startAnimation();
    addListeners();
}

function addListeners() {
    // Add event listeners for mouse hover and click actions
    container.addEventListener('mouseover', ctaRollOverHandler, false);
    container.addEventListener('mouseout', ctaRollOutHandler, false);
    container.addEventListener('click', clickthrough, false);  // Handles clickthrough
}

function startAnimation() {
    // Animation sequences using GSAP
    TweenMax.from("#circle2", .5, {delay: 1, alpha: 0, scaleY: 0, ease: Expo.easeIn});
    TweenMax.from("#circle", .5, {delay: 1, alpha: 0, ease: Expo.easeIn});
    TweenMax.to("#text1", .5, {delay: .85, alpha: 0, ease: Expo.easeIn});

    TweenMax.to("#scl_f1", .25, {delay: 2, alpha: 0, ease: Linear.easeNone});
    TweenMax.to("#circle2", .25, {delay: 2, rotation: 70, transformOrigin: "152px 125px", ease: Linear.easeNone});

    TweenMax.to("#scl_f2", .25, {delay: 2.25, alpha: 0, ease: Linear.easeNone});
    TweenMax.to("#circle2", .25, {delay: 2.25, rotation: 250, ease: Linear.easeNone});

    TweenMax.to("#scl_f3", .25, {delay: 2.5, alpha: 0, ease: Linear.easeNone});
    TweenMax.to("#circle2", .25, {delay: 2.5, rotation: 360, ease: Linear.easeNone});

    TweenMax.to("#scl_f4", .25, {delay: 3, alpha: 0, ease: Expo.easeIn});
    TweenMax.to("#circle", .25, {delay: 3, alpha: 0, ease: Expo.easeIn});
    TweenMax.to("#circle2", .25, {delay: 3, scaleY: 0, alpha: 0, ease: Expo.easeIn});
    TweenMax.from("#text2", .25, {delay: 3, alpha: 0, ease: Expo.easeIn});

    TweenMax.to("#scl_f5", .25, {delay: 5, alpha: 0, ease: Expo.easeOut});
    TweenMax.to("#text2", .25, {delay: 5, alpha: 0, ease: Expo.easeOut});
    TweenMax.from("#stopWatch", .25, {delay: 5, scale: 0, ease: Back.easeOut});
    TweenMax.from("#logo2", .25, {delay: 5, alpha: 0, top: "+=25", ease: Expo.easeOut});
    TweenMax.to("#logo", .25, {delay: 5, alpha: 0, ease: Expo.easeOut});

    TweenMax.to("#stopWatch", .25, {delay: 7, scale: 2, alpha: 0, ease: Back.easeIn});
    TweenMax.from("#scl_box", .25, {delay: 7.25, scale: 0, ease: Expo.easeOut});
}

function clickthrough() {
    // Handles clickthrough action for tracking or redirection
    console.log("Clickthrough triggered!");
    // Here you can place your custom logic for handling clickthrough
    window.location.href = "https://www.example.com";  // Example redirection URL
}

function resetAnimation() {
    // Reset the animation to its initial state and restart if necessary
    TweenMax.set(ids, {clearProps: "all"});
    TweenMax.delayedCall(0.01, init);
}

function ctaRollOverHandler() {
    // Handle the hover-over effect for the CTA button
    TweenMax.set("#cta", {scale: 1.1, overwrite: true, ease: Expo.easeOut});
}

function ctaRollOutHandler() {
    // Handle the hover-out effect for the CTA button
    TweenMax.set("#cta", {scale: 1, overwrite: false, ease: Expo.easeOut});
}
