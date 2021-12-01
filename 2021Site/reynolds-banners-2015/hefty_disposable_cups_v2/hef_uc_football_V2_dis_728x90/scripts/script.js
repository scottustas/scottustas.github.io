var items = {};
var adDiv;
var maxBannerAnimationTime = 15;
var count = 0;
var timerCount = {};
var delay = 250;
var bannerTimer = setInterval(function()
{
  count += delay / 1000;
//   var bannerTimerEvent = new CustomEvent("TIMER", {detail:{timerCount:count}});
  var bannerTimerEvent = document.createEvent("Event");
  bannerTimerEvent.initEvent("TIMER", true, false);
  document.dispatchEvent(bannerTimerEvent);
  timerCount = count;
  if (count >= maxBannerAnimationTime)
  {
    clearInterval(bannerTimer);
    console.log("Banner Animation Ended = " + count + " seconds elapsed");
    timerCount = count;
//     var bannerTimerCompletedEvent = new CustomEvent("TIMER_COMPLETE", {detail:{timerCount:count}});
    var bannerTimerCompletedEvent = document.createEvent("Event");
    bannerTimerCompletedEvent.initEvent("TIMER_COMPLETE", true, false);
    document.dispatchEvent(bannerTimerCompletedEvent);
    return;
  }
  if (count % 1 == 0) console.log("Banner Animation Current Time Elapsed = " + count + " seconds");
}, delay);

function initEB() {
  if (!EB.isInitialized()) {
    EB.addEventListener(EBG.EventName.EB_INITIALIZED, startAd);
  } else {
    startAd();
  }
}

function startAd() {
  initElements();
  addEventListeners();
}

function initElements()
{
  adDiv = document.getElementById("ad");
  items = {
    cta : document.querySelector("img[src*='cta']"),
    text1 : document.querySelector("img[src*='text1']"),
    text2 : document.querySelector("img[src*='text2']"),
    footballBlurred : document.querySelector("img[src*='football_blurred']"),
    football : document.querySelector("img[src*='football.']"),
    cup : document.querySelector("img[src*='cup']"),
    logoCrackResistant : document.querySelector("img[src*='logo-crack_resistant']"),
    logoHefty : document.querySelector("img[src*='logo-hefty']"),
  };
}

function addEventListeners() {
  document.addEventListener("TIMER", timerEventListener);
  document.addEventListener("TIMER_COMPLETE", stopBannerAnimations);
  document.getElementById("clickthrough-button").addEventListener("click", clickthrough);
  adDiv.addEventListener("mouseover", mouseEventHandler);
  adDiv.addEventListener("mouseout", mouseEventHandler);
}

function mouseEventHandler(e)
{
  if (items.cta.style.transform == "") return;
  
  switch (e.type)
  {
    case "mouseover":
      
      TweenMax.to(items.cta, .5, {scale: 1.15, ease: Elastic.easeOut});
      
      break;
    
    case "mouseout":
      
      TweenMax.to(items.cta, .5, {scale: 1, ease: Elastic.easeOut});
      
      break;
    
    default:
      break;
  }
}

function clickthrough() {
  EB.clickthrough();
  console.log("click");
}

function timerEventListener(e)
{
  switch (timerCount)
  {
    // Frame 1
    case .5:
      
      console.log("/// -- Frame 1");
      
      TweenMax.to([items.football, items.footballBlurred], 1.5, {ease: Expo.easeOut, left: 178});
      TweenMax.to(items.footballBlurred, 1.5, {autoAlpha:0, ease: Quad.easeOut});
      TweenMax.to(items.text1, .8, {delay: .15, clip:"rect(0px, 297px, 41px, 0px)", ease:Quint.easeOut});
      
      break;
    
    // Frame 2
    case 3:
      
      console.log("/// -- Frame 2");
      
      TweenMax.to(items.cta, .5, {scale: 1, ease:Back.easeOut});
      
      break;
    
    // Frame 3
    case 3.5:
      
      console.log("/// -- Frame 4");
      
      TweenMax.to(items.logoCrackResistant, .5, {scale: 1, ease:Quart.easeOut, onComplete:
        function()
        {
          TweenMax.to(items.logoCrackResistant, .35, {scale:1.15, ease:Quad.easeInOut, yoyo:true, repeat:5});
        }
      });
      
      break;
    
    
    
    default: break;
  }
}

function stopBannerAnimations(e)
{
  console.log("Timer Complete Event Captured");
  console.log("e.timerCount = " + timerCount);
  TweenMax.killAll();
}

window.addEventListener("load", initEB);
