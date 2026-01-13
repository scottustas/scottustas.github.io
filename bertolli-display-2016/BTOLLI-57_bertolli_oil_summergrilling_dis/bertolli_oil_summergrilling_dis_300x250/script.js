var container;
var content;

function init() {
    // Select DOM elements
    container = document.getElementById('container');
    content = document.getElementById('content');
  
    // Show the container and content elements
    container.style.display = "block";
    content.style.display = "block";  
    
    // Start the animation
    startAnimation();
}

function addListeners() {
    // You can add event listeners here (for example, hover effects, or click handlers)
    container.addEventListener('mouseover', ctaRollOverHandler, false);
    container.addEventListener('mouseout', ctaRollOutHandler, false);
}

function startAnimation() {
    // Add clickthrough event listener to the container
    container.addEventListener('click', clickthrough, false);

    // Apply initial transforms
    TweenMax.set("#endframeBottleRight", { scale: 1.4 });
    TweenMax.set("#extraVirginFull", { scale: 1.3 });
    TweenMax.set("#pastaTop", {});
    TweenMax.set("#pastaBottom", { rotation: 180 });

    // Start animation sequence
    TweenMax.to("#pastaTop", .5, { delay: .5, top: 0, ease: Expo.easeOut });
    TweenMax.to("#pastaBottom", .5, { delay: .5, top: 94, ease: Expo.easeOut });

    TweenMax.set("#extraVirginLargeContainer", { delay: 1, alpha: 1 });
    TweenMax.set("#text1", { delay: 1, alpha: 0 });

    TweenMax.to("#pastaTop", 1.25, { delay: 1, top: "-=250", ease: Expo.easeOut });
    TweenMax.to("#pastaBottom", 1.25, { delay: 1, top: "+=250", ease: Expo.easeOut });

    TweenMax.to("#extraVirginLargeContainer", .5, { delay: 3, scale: 1.5, alpha: 0, ease: Expo.easeOut });

    TweenMax.from("#kabobTop", .5, { delay: 3, top: "-=250", ease: Expo.easeOut });
    TweenMax.from("#kabobBottom", .5, { delay: 3, top: "+=250", ease: Expo.easeOut });
    TweenMax.from("#text2", .25, { delay: 3, alpha: 0, ease: Expo.easeOut });

    // More animation steps
    TweenMax.to("#kabobTop", .75, { delay: 4, top: "+=75", ease: Expo.easeOut });
    TweenMax.to("#kabobBottom", .75, { delay: 4, top: "-=75", ease: Expo.easeOut });

    TweenMax.to("#bottleZoom", .25, { delay: 4.5, alpha: 1 });
    TweenMax.set("#text2", { delay: 4.5, alpha: 0 });

    TweenMax.to("#kabobTop", 1.75, { delay: 4.5, top: "-=300", ease: Expo.easeOut });
    TweenMax.to("#kabobBottom", 1.75, { delay: 4.5, top: "+=300", ease: Expo.easeOut });

    TweenMax.to("#bottleZoom", .5, { delay: 5.25, scale: .395, top: -185, left: -52, ease: Expo.easeOut });
    TweenMax.from("#text3", .5, { delay: 5.25, alpha: 0, ease: Expo.easeOut });

    TweenMax.to("#bottleZoom", .5, { delay: 7, left: "-=300", ease: Expo.easeOut, onComplete: endframeBottleReset });
    TweenMax.to("#text3", .5, { delay: 7, left: "-=300", ease: Expo.easeOut });

    TweenMax.from("#text4", .5, { delay: 7.5, left: "+=300", ease: Expo.easeOut });
    TweenMax.from("#extraVirginFull", .5, { delay: 7.5, left: "+=300", ease: Expo.easeOut });

    TweenMax.to("#text4", .5, { delay: 10, left: "-=300", ease: Expo.easeOut });
    TweenMax.to("#extraVirginFull", .5, { delay: 10, left: "-=300", ease: Expo.easeOut });

    TweenMax.from("#text5", .5, { delay: 10.5, alpha: 0, ease: Expo.easeOut });
    TweenMax.to("#text5", .5, { delay: 13.25, alpha: 0, ease: Expo.easeOut });

    TweenMax.from("#text6", .5, { delay: 13.5, alpha: 0, ease: Expo.easeOut });
    TweenMax.from("#oliveOilEndframe", .5, { delay: 13.5, top: "+=220", ease: Expo.easeOut });
    TweenMax.to("#endframeBottleRight", .5, { delay: 13.5, top: 29, alpha: 1, ease: Expo.easeOut });

    TweenMax.from("#cta", .5, { delay: 13.5, alpha: 0, ease: Expo.easeOut });

    TweenMax.fromTo("#glare", .5, { css: { left: -100 } }, { css: { left: 100 }, delay: 14, onComplete: addListeners });
}

function clickthrough() {
    EB.clickthrough();
    console.log("Sizmek Click");
}

function resetAnimation() {
    TweenMax.set(ids, { clearProps: "all" });
    TweenMax.delayedCall(.01, init); // Reinitialize animation
}

function endframeBottleReset() {
    TweenMax.set("#bottleZoom", { top: 214, left: -39 });
    TweenMax.set("#bottleZoom", { top: -7, left: 0, scale: .298, alpha: 0, ease: Expo.easeOut });
    TweenMax.set("#endframeBottleRight", { top: 249, left: 7, scale: 1, alpha: 0, ease: Expo.easeOut });
}

function ctaRollOverHandler() {
    TweenMax.fromTo("#glare", .5, { css: { left: -100 } }, { css: { left: 100 } });
}

function ctaRollOutHandler() {
    // You can add any desired animations on mouseout here
}

// wait until DOM is ready
document.addEventListener("DOMContentLoaded", function() {
    // Once the DOM is ready, start the animation
    window.onload = function() {
        init(); // Directly start the animation when everything is loaded
    };
});
