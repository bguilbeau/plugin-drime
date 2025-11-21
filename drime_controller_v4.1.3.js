let lottieLoadingDrime = document.querySelector('#loading-anim-drime');
let animLoadingDrime = bodymovin.loadAnimation({ container: lottieLoadingDrime, renderer: 'svg', loop: true, autoplay: true, path: 'https://drime-player.s3.eu-west-3.amazonaws.com/lotties/loading.json' });

function closeLoadingDrime(){
  document.querySelector("#loading-container-drime").style.opacity = "0";
  setTimeout(function() {document.querySelector("#loading-container-drime").style.display = "none";}, 200);
}

function openLoadingDrime(){
  document.querySelector("#loading-container-drime").style.display = "block";
  document.querySelector("#loading-container-drime").style.opacity = "1";
}


function changePageZindex(){
  document.querySelectorAll('body *').forEach(function (elt) {
    if (document.querySelector('.drime-container').contains(elt) === false && elt.tagName != 'SCRIPT') {
      if (elt.classList.contains("drime-negative-zindex") === true ){
        elt.classList.remove("drime-negative-zindex");
      } else {
        elt.classList.add("drime-negative-zindex")
      }
    }
  });
}

//***------------- LANGUAGE BUTTON -------------***//
let clickBlockDrime = false;

function blockBtnsDrime(){
  let picto = document.querySelector("#lang-picto-drime");
  if (clickBlockDrime === true){
    picto.addEventListener("click", (evt) => {event.preventDefault();});
    setTimeout(function(){ clickBlockDrime = false; },400);
  }
}

//*** MENU LANGUAGE ICON ***//
function changeLangDrime(){
  let picto = document.querySelector("#lang-picto-drime img");
  let wrapper = document.querySelector(".lang-wrapper-drime");
  if (clickBlockDrime === false){
    if (picto.src.indexOf("language") === -1){
      picto.style.transform = "";
      picto.src = "https://drime-player.s3.eu-west-3.amazonaws.com/images/language_white.svg";
      wrapper.style.opacity = "0";
      setTimeout(function () { wrapper.style.display = ""; }, 400);
    } else {
      picto.style.transform = "rotate(45deg)";
      picto.src = "https://drime-player.s3.eu-west-3.amazonaws.com/images/close_lang_iframe.svg";
      wrapper.style.display = "block";
      setTimeout(function () { wrapper.style.opacity = "1" }, 100);
      if (videoDrime.paused === true){} else {pauseVideoDrime();}
    }
    clickBlockDrime = true;
    blockBtnsDrime();
  }
}

// Behaviours if click outside or click on other menu
function closeLangDrime(_callback){
  const langMenu = document.querySelector(".lang-wrapper-drime");
  document.querySelector("#lang-picto-drime img").style.transform = "";
  langMenu.style.opacity = "0";
  setTimeout(function () { langMenu.style.display = ""; }, 400);
  document.querySelector("#lang-picto-drime img").src = "https://drime-player.s3.eu-west-3.amazonaws.com/images/language_white.svg";
  if (_callback === "Switch_Lang"){
    langMenu.style.display == "";
  } else{
    if (langMenu.style.display == "block" && videoDrime.paused === true){ unpauseVideoDrime(); }
  }
}

//*** MENU LANGUE OVERFLOW : Display arrow if scroll content for languages ***//
function isLangOverflowDrime(){
  const langWrapper = document.querySelector(".lang-wrapper-drime");
  const langList = document.querySelector(".is-overflow-drime");
  const overflowArrow = document.querySelector(".overflow-arrow-drime");
  if (langWrapper.offsetHeight < langList.offsetHeight){
    overflowArrow.style.display = "flex";
  } else {
    overflowArrow.style.display = "none";
  }
}
//*** ONSCROLL ***//
function getMaxAndMinScrollLangDrime(){
  const langWrapper = document.querySelector(".lang-wrapper-drime");
  const overflowMaxArrow = document.querySelector(".overflow-arrow-drime");
  const overflowMinArrow = document.querySelector(".overflow-arrow-min-drime");
  let maxScrollDown = langWrapper.scrollHeight - langWrapper.clientHeight;
  if (maxScrollDown === langWrapper.scrollTop){
    overflowMaxArrow.style.display = "";
    overflowMinArrow.style.display= "flex";
  } else {
    overflowMaxArrow.style.display = "flex";
    overflowMinArrow.style.display= "";
  }
}

document.addEventListener("click", (evt) => {
  let targetDrime = evt.target; //clicked element
  let switchLangCallback = "";
  if (targetDrime.nodeName === "IMG" && targetDrime.classList.contains("flags-drime") || targetDrime.nodeName === "DIV" && targetDrime.classList.contains("drime-player") || targetDrime.nodeName === "P" || evt.target.classList.contains("drime-player") ){targetDrime = "Switch_Lang"};
  if (targetDrime === "Switch_Lang"){switchLangCallback = targetDrime;}
    do {
      if (targetDrime == document.querySelector("#lang-picto-drime") || targetDrime == document.querySelector(".lang-wrapper-drime") || targetDrime == document.querySelector("#lang-name") ){ // This is a click inside. Do and return.
        return
      }
      targetDrime = targetDrime.parentNode; //Go up the DOM
    } while (targetDrime);
    if (document.querySelector(".lang-wrapper-drime").style.display == "block"){
     closeLangDrime(switchLangCallback);
     }// This is a click outside.
 });

var delayDrime = ( function() {
  var timer = 0;
  return function(callback, ms) {
    clearTimeout (timer);
    timer = setTimeout(callback, ms);
  };
})();

//****** BUTTONS AND NATURE SETUP ******//
function hidenatureDrime(nature) {
  var naturetohide = document.querySelectorAll(`.${nature}`);
  naturetohide.forEach(function (element) { element.style.visibility = "hidden"; });
};

function dispnatureDrime(nature) {
  var naturetodisp = document.querySelectorAll(`.${nature}`);
  naturetodisp.forEach(function (element) { element.style.visibility= "visible"; });

  if( /iPhone|iPad|iPod/i.test(navigator.userAgent) ) {
    var sounddisp = document.querySelectorAll('.sound-ic');
    sounddisp.forEach(function (element) { element.style.visibility= "hidden"; });
  };
};

//****** VARAIBLE INIT ******//
var paramsDrime = (new URL(document.location)).searchParams;
var loopDrime = paramsDrime.get('loop');
const videosDrime = document.getElementById("videos-drime");
var videoDrime = document.getElementById("myVideo-drime");
var audioDrime = document.getElementById("myAudio-drime");
const bodyDrime = document.documentElement;
var sourceDrime = document.createElement('source');
const ps_btn = document.getElementById("BtnPs-drime");
const pl_btn = document.getElementById("BtnPl-drime");
const sbtdivDrime = document.getElementById("sbt-drime");
const sbtdivPDrime = document.querySelector("#sbt-drime p");
const logovdDrime = document.getElementById("logovd-drime");
const vdcontainerDrime = document.getElementById("vdcontainer-drime");
//*** POST-PROD-TITLES ***//
let tutoIdDrime = 0;
let titleCloseTimeDrime = 0;
var voiceoverDrime = 0;
let changeLangIndicatorDrime = 0;
var sbttDrime = [];
var sbtsDrime = [];
var logoDrime = 0;
var logoinitDrime = 0;
var tDrime = 0;
var stDrime = 0;
var soundDrime = 0;
var actionCurrentTimeDrime = 0;
let currentResponsiveIndexDrime = 0;
let responsiveTesterDrime = 0;
let startTesterDrime = -1;
let mp3Array = [];
let mp3SonoramaLoop = false;
let videoTimerCurrentTime = 0;
let videoDurationSonorama = 0;
let LastestCurrentTimeDrime = 0;
let testlagDrime = 0;
let intervalLoopMp3Timer;
let isSonorama = false;


function getVideoDurationSonorama(playvideoduration){
  let videoDurationLoopMp3 = playvideoduration.split(':');
  let seconds = (+videoDurationLoopMp3[0]) * 60 * 60 + (+videoDurationLoopMp3[1]) * 60 + (+videoDurationLoopMp3[2]);
  videoDurationSonorama = seconds * 1000;
}


function audioSetUp(){
  audioDrime.setAttribute('src', voiceoverDrime );
  if (!!audioDrime) {
    if (navigator.userAgent.search("Safari") >= 0 && navigator.userAgent.search("Chrome") < 0)
    {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      const audioCtx = new AudioContext();
    };
    audioDrime.load();
  } else {
    voiceoverDrime = 0;
  };
}


//****** PLAY PLAYER ******//
function playVideoDrime(){
  document.querySelector("body").classList.add('body-noscroll-drime');
  ps_btn.style.visibility = "visible";
  titlesAdvancedSetupDrime(arguments[6]);
  sonoramaSetup(arguments[6]);
  fetchJsonDrime(document.querySelectorAll(".drime-player")[arguments[6]].getAttribute('src'), arguments[6])
  changePageZindex();
  openLoadingDrime();
  document.querySelector("#player-wrapper").style.display = "";
  vdcontainerDrime.classList.add("bg-video-player");
  vdcontainerDrime.style.marginLeft = "0";

  sbttDrime = arguments[5];
  let subts = subtitlesDrime;
  sbtsDrime = subts[arguments[6]];
  logoinitDrime = arguments[7];
  voiceoverDrime = arguments[8];
  stDrime = 1;
  tutoIdDrime = arguments[6];
  let videoadress = arguments[0];
  let playvideoduration = arguments[11];

  if (arguments[2][0] === 1){
    subtitlesDrime[tutoIdDrime].forEach (function (sbttHash, mp3Index) { mp3Array.push(`${voiceoverDrime}/${mp3Index + 1}.mp3`); });
    mp3SonoramaLoop = true;
    isSonorama = true;
    voiceoverDrime = mp3Array[0];
  }


  sourceDrime.setAttribute('src', videoadress );
  videoDrime.appendChild(sourceDrime);
  videoDrime.load();

  if (voiceoverDrime == 0 ) { } else { audioSetUp() };//|| arguments[2][0] === 1

  getVideoDurationSonorama(playvideoduration);
  setTimeout(function () { startVideoDrime(); }, 900);
};


//***** START *****//
function startVideoDrime() {
  let videoWidth = document.querySelector("#myVideo-drime").clientWidth;
  if (responsiveArrayDrime.length > 0){ responsiveResetDrime(); };
  if(document.querySelector("#title-div")){resetDynamicTitlesDrime()};

  hidenatureDrime("allnatures");
  dispnatureDrime("nature2");

  if (sbttDrime == 0) {
    sbtdivDrime.style.visibility= "hidden";
    hidenatureDrime("subcontrols");
  } else  {
    sbtdivDrime.style.visibility= "visible";
    dispnatureDrime("subcontrols");
  };

  // if (String(videoDurationSonorama).slice(0, 2) === String(videoDrime.duration).slice(0, 2)){
  //   document.querySelector("#myVideo-drime").setAttribute("loop", "false")
  // } else {
  //   document.querySelector("#myVideo-drime").setAttribute("loop", "true")
  // }
  if (mp3SonoramaLoop === true){
    document.querySelector("#myVideo-drime").setAttribute("loop", "true")
  } else {
    document.querySelector("#myVideo-drime").setAttribute("loop", "false")
  }

  logoDrime = 1;
  soundDrime = 0;
  videoDrime.currentTime = 0;
  videoTimerCurrentTime = 0;
  LastestCurrentTimeDrime = 0;
  testlagDrime = 0;

  videoDrime.volume = 1; //for fade out music
  videoDrime.play();
  tDrime = 0; //for subtitles
  sbtdivPDrime.innerHTML = "";
  clearInterval(intervalLoopMp3Timer);
  intervalLoopMp3Timer = null;
  intervalLoopMp3Timer = setInterval(videoTimeUpdateDrime, 200);


  setTimeout(function() {document.querySelector("#player-buttons").style.display = "";}, 500);
  ps_btn.style.zIndex = pl_btn.style.zIndex = "210";
  pl_btn.style.visibility = "hidden";
  logovdDrime.style.zIndex = "205";
  vdcontainerDrime.style.zIndex = "200";
  sbtdivDrime.style.zIndex = "210";
  vdcontainerDrime.style.cursor = "auto";
  vdcontainerDrime.style.opacity = 1;

  if(sonoramaImages[tutoIdDrime] != [] && sonoramaImages[tutoIdDrime].length != 0 ){
    resetSonorama();
    dynamicSonorama();
  };

};

let oneVoiceOverInit = false;

function videoTimeUpdateDrime(){
  if (isSonorama === false){
    if (((videoDrime.currentTime + 0.2)* 1000) <= videoDurationSonorama){
      if (videoDrime.paused === true){
        // DO NOTHING
      } else {
        testLagDrimeFunction();

        if (videoDrime.currentTime == 0) {
          if (voiceoverDrime == 0 || mp3Array.length > 0) {} else { audioDrime.pause()};
        } else {
          if (videoDrime.currentTime > 0) {
            initVoiceOverDrime();
            setUpVoiceOverDrime();
            setUpLogoDrime();
            if(postProdTitlesDrime != undefined && postProdTitlesDrime.length != 0 ){dynamicPostProdDrime();};
            if(sonoramaImages[tutoIdDrime] != [] && sonoramaImages[tutoIdDrime].length != 0 ){dynamicSonorama();};
            if (responsiveArrayDrime != []){responsivePostProdDrime();}
          }
        };
        ;
          videoTimerCurrentTime = videoDrime.currentTime;
        //console.log("+0.2") //Useful for testing
      }
    } else {
      closeVideoDrime();
    }


  } else {
    if (videoTimerCurrentTime * 1000 <= videoDurationSonorama){
      if (videoDrime.paused === true){
        // DO NOTHING
      } else {
        testLagDrimeFunction();
        if (videoTimerCurrentTime == 0) {
          if (voiceoverDrime == 0 || mp3Array.length > 0) {} else { audioDrime.pause()};
        } else {
          if (videoTimerCurrentTime > 0) {
            initVoiceOverDrime();
            setUpVoiceOverDrime();
            setUpLogoDrime();
            if(postProdTitlesDrime != undefined && postProdTitlesDrime.length != 0 ){dynamicPostProdDrime();};
            if(sonoramaImages[tutoIdDrime] != [] && sonoramaImages[tutoIdDrime].length != 0 ){dynamicSonorama();};
            if (responsiveArrayDrime != []){responsivePostProdDrime();}
          }
        }
          videoTimerCurrentTime = videoTimerCurrentTime + 0.2;
        //console.log("+0.2") //Useful for testing
        if (videoTimerCurrentTime * 1000 >= videoDurationSonorama - 3000){
          videoDrime.volume = videoDrime.volume * 0.8; //fade out music
        }
      }
    } else {
      closeVideoDrime();
    }
  }
}

function testLagDrimeFunction(){
  if (isSonorama === false){
    if ((LastestCurrentTimeDrime > 0 && LastestCurrentTimeDrime == videoDrime.currentTime) || videoDrime.paused ){
      if (document.querySelector("#loading-container-drime").style.display === "none"){
        openLoadingDrime();
        if (voiceoverDrime == 0) {} else {
          audioDrime.pause();
          soundDrime = 0;
        };
      }
      testlagDrime = 0;
    } else {
      if (document.querySelector("#loading-container-drime").style.display === "block"){
        closeLoadingDrime();
        audioDrime.currentTime = videoTimerCurrentTime = videoDrime.currentTime ;
        audioDrime.play();
      }
       testlagDrime = 1;
    };
    LastestCurrentTimeDrime = videoDrime.currentTime;

   } else {
    if (LastestCurrentTimeDrime > 0 && LastestCurrentTimeDrime == videoTimerCurrentTime ){
      openLoadingDrime();
      testlagDrime = 0;
      if (voiceoverDrime == 0) {} else {
        audioDrime.pause();
        soundDrime = 0;
      };
    } else {
      closeLoadingDrime();
      testlagDrime = 1;
    };
    LastestCurrentTimeDrime = videoTimerCurrentTime;
  }
}

function initVoiceOverDrime(){
  if (voiceoverDrime == 0 || mp3Array.length > 0) {} else {
    if (soundDrime == 0) { soundDrime = 1;};
    if (soundDrime == 1) {
      if (isSonorama === false){
        audioDrime.currentTime = videoDrime.currentTime;
        //oneVoiceOverInit = true;
        audioDrime.play();
        soundDrime = 2;
      } else if (isSonorama === true){
        audioDrime.currentTime = videoTimerCurrentTime;
        audioDrime.play();
        soundDrime = 2;
      }
    ;}
  };
}

function setUpVoiceOverDrime(){
  if (videoTimerCurrentTime > sbttDrime[tDrime]) {
    if (videoTimerCurrentTime >= 0) {
      sbtdivPDrime.innerHTML = sbtsDrime[tDrime];
      if (mp3Array.length > 0 && ((tDrime + 1) <= mp3Array.length)){
        voiceoverDrime = mp3Array[tDrime];
        audioSetUp();
        audioDrime.play();
       };
    };
    tDrime = tDrime + 1;
  };
  if (isSonorama === false){ audioDrime.play();}
}

function setUpLogoDrime(){
  if (logoDrime == 0) {} else {
    logovdDrime.style.visibility = "visible";
    if (videoTimerCurrentTime > 2.7){
      logovdDrime.style.visibility = "hidden";
      logoDrime = 0;
    };
  };
}

//****** CLOSE PLAYER ******//
function closeVideoDrime() {
  document.querySelector("body").classList.remove('body-noscroll-drime');
  if(sonoramaImages[tutoIdDrime] != [] && sonoramaImages[tutoIdDrime].length != 0 ){resetSonorama()};

  document.querySelector("#loading-container-drime").style.display = "none";
  LastestCurrentTimeDrime = 0;
  vdcontainerDrime.style.opacity = "0";
  sourceDrime.removeAttribute('src');//empty source
  videoDrime.load();
  changePageZindex();
  document.querySelector("#player-buttons").style.display = document.querySelector("#player-wrapper").style.display = "none";
  vdcontainerDrime.classList.remove("bg-video-player");

  var alltimeouts = window.setTimeout(function() {}, 0);
  while (alltimeouts--) { window.clearTimeout(alltimeouts); };
  hidenatureDrime("allnatures");

  if (voiceoverDrime == 0) {} else {
    voiceoverDrime = 0;
    audioDrime.removeAttribute('src');
    audioDrime.load();
  };

  logoDrime = 0;
  logovdDrime.style.zIndex = "205";
  logovdDrime.style.visibility = sbtdivDrime.style.visibility = "hidden";
  resetDynamicTitlesDrime();
  if (document.querySelector("#sonorama-sbt")){
    document.querySelector("#sonorama-sbt").style.cssText = document.querySelector("#sonorama-sbt p").style.cssText = document.querySelector("#sonorama-sbtt-background").style.cssText = "";
    document.querySelector("#sonorama-sbt p").innerText = "";
  }
  mp3Array = [];
  videoTimerCurrentTime = 0;
  mp3SonoramaLoop = false;
  clearInterval(intervalLoopMp3Timer);
  intervalLoopMp3Timer = null;
};


//****** PAUSE ******//
function pauseVideoDrime(_callback) {
  videoDrime.pause();
  if (document.querySelector("#sonorama-video-wrapper video")){document.querySelector("#sonorama-video-wrapper video").pause()};
  if (voiceoverDrime == 0) {} else { audioDrime.pause(); };
  ps_btn.style.visibility = "hidden";
  pl_btn.style.visibility = "visible";
  clearInterval(intervalLoopMp3Timer);
  intervalLoopMp3Timer = null;
  //console.log("paused")
};

function unpauseVideoDrime(_callback) {
  pl_btn.style.visibility = "hidden";
  ps_btn.style.visibility = "visible";
  if (changeLangIndicatorDrime == 1) {
    setTimeout(function() {videoDrime.play();}, 1000);
    changeLangIndicatorDrime = 0;
    } else {
    videoDrime.play();
  };
  videoDrime.play();

  if (document.querySelector("#sonorama-video-wrapper video")){document.querySelector("#sonorama-video-wrapper video").play()};
  if (voiceoverDrime == 0) {
    // DO NOTHING
  } else if (mp3SonoramaLoop === true){
    let voiceoverTimeline = sbttDrime[tDrime - 1] + audioDrime.duration;
    if (videoTimerCurrentTime < voiceoverTimeline){ audioDrime.play() }
  } else if (mp3SonoramaLoop === false){
    if (videoDrime.currentTime < audioDrime.duration) { audioDrime.play() }
  }
  if (_callback === undefined){
    clearInterval(intervalLoopMp3Timer);
    intervalLoopMp3Timer = null;
    intervalLoopMp3Timer = setInterval(videoTimeUpdateDrime, 200);
  };
};


//****** RESPONSIVE VIDEO ******//
let videoEltDrime = document.querySelector("#myVideo-drime");

function responsivePostProdDrime(){
  if (currentResponsiveIndexDrime < responsiveArrayDrime.length) {
    if (videoTimerCurrentTime >= responsiveArrayDrime[currentResponsiveIndexDrime][0]) {
      responsivePositionsDrime(responsiveArrayDrime[currentResponsiveIndexDrime]);
      currentResponsiveIndexDrime += 1;
    };
  };
};

function responsiveResetDrime(){
  currentResponsiveIndexDrime = 0;
  responsivePositionsDrime([0,3,0]);
};

function resetResponsiveArrayDrime(){
  responsiveArrayDrime = [];
  if(responsiveArrayDrime.length > 0) {responsiveResetDrime()};
}

function responsivePositionsDrime(responsive_elt){
  videoWidth = document.querySelector("#myVideo-drime").clientWidth;
  containerWidth = vdcontainerDrime.clientWidth;

  if (videoWidth > containerWidth){
    if (responsive_elt[1] === 1){
      animTranslationDrime(responsive_elt[2], `${(videoWidth - containerWidth) / 2}px`);
    };
    if (responsive_elt[1] === 2){
      animTranslationDrime(responsive_elt[2], `${Math.min( (0.17 * videoWidth), (videoWidth - containerWidth) / 2 )}px`);
    };
    if (responsive_elt[1] === 3){
      animTranslationDrime(responsive_elt[2], `${0}px`);
    };
    if (responsive_elt[1] === 4){
      animTranslationDrime(responsive_elt[2], `${-Math.min( (0.17 * videoWidth), (videoWidth - containerWidth) / 2 )}px`);
    };
    if (responsive_elt[1] === 5){
      animTranslationDrime(responsive_elt[2], `${-(videoWidth - containerWidth) / 2}px`);
    };
  };
};


function animTranslationDrime(animDuration, marginValue){
  let responsiveAnim = anime({
    targets: vdcontainerDrime,
    marginLeft: marginValue,
    autoplay: true,
    duration: animDuration * 1000 + 0.00000000001,
    easing: 'easeInOutQuad'
  });
  document.querySelector('#BtnPs-drime').addEventListener('click', function() { responsiveAnim.pause(); });
  document.querySelector('#lang-picto-drime').addEventListener('click', function() {responsiveAnim.pause(); });
  document.querySelector('#lang-name').addEventListener('click', function() { responsiveAnim.pause(); });
  document.querySelector('#BtnPl-drime').addEventListener('click', function() {
    if (responsiveAnim.currentTime < responsiveAnim.duration){ responsiveAnim.play(); };
  });
  clickOutsideMenus(responsiveAnim);
};


//****** DYNAMIC SONORAMA ******//
let currentSonoramaImg = "";
let imgIndexCounter = 0;
let sonoramaAnimDuration = 8000;
let sonoramaAnimValue = 15;
let startValue = 0;
let endValue = 0;
//******* TIMER FOR TRANSITIONS *******//
let Timer = function(callback, delayDrime) {
  let timerId, start, remaining = delayDrime;
  this.pause = function() {
      window.clearTimeout(timerId);
      timerId = null;
      remaining -= Date.now() - start;
  };
  this.resume = function() {
    if (timerId) { return; }
    start = Date.now();
    timerId = window.setTimeout(callback, remaining);
  };
  this.resume();
};
let deleteTimer = undefined;


function dynamicSonorama(){
  sonoramaImages[tutoIdDrime].forEach(function(image, image_index){

    closeTimeSetUp(image_index, sonoramaImages[tutoIdDrime].length, sonoramaTimecodes[tutoIdDrime]);
      if (videoTimerCurrentTime >= sonoramaTimecodes[tutoIdDrime][image_index] && videoTimerCurrentTime < parseFloat(imageCloseTime - 0.2) && (image != currentSonoramaImg)) {
        if (document.querySelector(".sonorama-current-elt")){ sonoramaTransitionAnim(image_index);}
        //*************** CURRENT MEDIA ****************//
        if (image.includes(".mp4")){
          currentVideoSetUp(image);
        } else {
          currentImgSetUp(image);
        }
        //*************** NEXT MEDIA ****************//
        nextMediaSetUp(sonoramaImages[tutoIdDrime][image_index + 1]);
        if (document.querySelector(".drime-container #img-wrapper")){
          document.querySelectorAll(".drime-container #img-wrapper").forEach(function(imgWrapper){imgWrapper.style.width = `${document.querySelector("#myVideo-drime").clientWidth}px`;})
        };
        if (document.querySelector(".drime-container #sonorama-video-wrapper")){
          document.querySelectorAll(".drime-container #sonorama-video-wrapper").forEach(function(videoWrapper){videoWrapper.style.width = `${document.querySelector("#myVideo-drime").clientWidth}px`;})
        }
        currentSonoramaImg = image;
        //*************** DYNAMIC PARAMS ****************//
        if (sonoramaParams[tutoIdDrime][image_index] !== undefined ){
          if (sonoramaParams[tutoIdDrime][image_index][0] !== undefined){ sonoramaAnimDuration = sonoramaParams[tutoIdDrime][image_index][0]};
          if (sonoramaParams[tutoIdDrime][image_index][1] !== undefined){ sonoramaAnimValue = sonoramaParams[tutoIdDrime][image_index][1] };
        };
        //*************** RESPONSIVE SONORAMA ****************//
        if (sonoramaResponsive[tutoIdDrime][image_index] !== undefined && document.querySelector("#myVideo-drime").clientWidth > vdcontainerDrime.clientWidth){
          responsiveSonoramaMarginValues(sonoramaResponsive[tutoIdDrime][image_index][1], sonoramaResponsive[tutoIdDrime][image_index][2], sonoramaResponsive[tutoIdDrime][image_index][0], "play_js")
        }
        //*************** LAUNCH SONORAMA ****************//
        eval(sonoramaAnimJs[tutoIdDrime][image_index]);
        imgIndexCounter = image_index;
        onClickBehaviour(animation, "");
      };
  });
};


function closeTimeSetUp(image_index, arrayLength, timecode){
  if (image_index + 1 === arrayLength){
      imageCloseTime = videoDurationSonorama / 1000;
  } else {
    imageCloseTime = parseFloat(timecode[image_index]) + (parseFloat(timecode[image_index + 1]) - parseFloat(timecode[image_index]))
  }
}

function createVideoNode(image, mediaClassName, wrapperClassName){
  let videoWrapperNode = document.createElement('div');
  videoWrapperNode.setAttribute('id', "sonorama-video-wrapper");
  videoWrapperNode.setAttribute('class', wrapperClassName);
  vdcontainerDrime.appendChild(videoWrapperNode);
  let videoNode = document.createElement('video');
  videoNode.setAttribute('class', mediaClassName);
  videoNode.setAttribute('autoplay', 'autoplay');
  videoNode.setAttribute('loop', 'loop');
  videoNode.setAttribute('playsinline', 'playsinline');
  videoNode.muted = "muted";
  videoNode.innerHTML = `<source src="${image}" type="video/mp4">`;
  videoNode.style.zIndex = videoWrapperNode.style.zIndex = 2;
  videoWrapperNode.appendChild(videoNode);
}

function currentVideoSetUp(image){
  //*************** CURRENT VIDEO ****************//
  if (document.querySelector("#sonorama-video-wrapper") === null){
    createVideoNode(image, 'sonorama-current-elt', 'sonorama-current-wrapper');
  } else {
    document.querySelector(".sonorama-next-elt").setAttribute('class', 'sonorama-current-elt');
    document.querySelector(".sonorama-next-wrapper").setAttribute('class', 'sonorama-current-wrapper');
    document.querySelector(".sonorama-current-elt").classList.remove('sonorama-next-elt');
    document.querySelector(".sonorama-current-wrapper").classList.remove('sonorama-next-wrapper');

    document.querySelector(".sonorama-current-elt").style.zIndex = document.querySelector(".sonorama-current-wrapper").style.zIndex  = 2;
    document.querySelector(".sonorama-current-elt").play();
  }

  vdcontainerDrime.querySelectorAll('.drime-container #sonorama-video-wrapper video').forEach(function(video_balise){
    if (video_balise.classList.contains("sonorama-transition") === false){
     video_balise.style.transform = 'scale(1)';
   };
    onClickBehaviour(video_balise, "");
  });
  document.querySelector("#sonorama-video-wrapper .sonorama-current-elt").style.objectFit = "cover";
  document.querySelector("#sonorama-video-wrapper .sonorama-current-elt").style.width = "100%";
  document.querySelector("#sonorama-video-wrapper .sonorama-current-elt").currentTime = 0;
}

async function createImgNode(image, mediaClassName, wrapperClassName ){
  let imgWrapperNode = document.createElement('div');
  imgWrapperNode.setAttribute('id', "img-wrapper");
  imgWrapperNode.setAttribute('class', wrapperClassName);
  vdcontainerDrime.appendChild(imgWrapperNode);
  let imgNode = document.createElement('img');
  imgNode.setAttribute('src', image);
  imgNode.setAttribute('class', mediaClassName);
  imgNode.style.zIndex = imgWrapperNode.style.zIndex = 2;
  imgWrapperNode.appendChild(imgNode);
}

 function currentImgSetUp(image){
  //*************** CURRENT IMAGE ****************//
  if (document.querySelector(".drime-container #img-wrapper") === null ){
    createImgNode(image, 'sonorama-current-elt', 'sonorama-current-wrapper')
  } else {
    document.querySelector(".sonorama-next-elt").setAttribute('class', 'sonorama-current-elt');
    document.querySelector(".sonorama-next-wrapper").setAttribute('class', 'sonorama-current-wrapper');

    document.querySelector(".sonorama-current-elt").classList.remove('sonorama-next-elt');
    document.querySelector(".sonorama-current-wrapper").classList.remove('sonorama-next-wrapper');

    document.querySelector(".sonorama-current-elt").style.zIndex = 2;
    document.querySelector('.sonorama-current-wrapper').style.zIndex = 2;
  }
  vdcontainerDrime.querySelectorAll('.drime-container #img-wrapper img').forEach(function(img_balise){
    if (img_balise.classList.contains("sonorama-transition") === false){ img_balise.style.transform = 'scale(1)'};
  });
}

function nextMediaSetUp(next_media){
  if (next_media != undefined){
    if (next_media.includes(".mp4")){
      createVideoNode(next_media, "sonorama-next-elt", "sonorama-next-wrapper");
      document.querySelector('#sonorama-video-wrapper video.sonorama-next-elt').pause();
      document.querySelector('#sonorama-video-wrapper video.sonorama-next-elt').style.zIndex = 1;
      document.querySelector('.sonorama-next-wrapper').style.zIndex = 1;
    } else {
      createImgNode(next_media, 'sonorama-next-elt', 'sonorama-next-wrapper')
      document.querySelector('.sonorama-next-elt').style.zIndex = 1;
      document.querySelector('.sonorama-next-wrapper').style.zIndex = 1;
    }
  }
};


function responsiveSonoramaMarginValues(elt_start, elt_end, elt_duration, _callback){
  let deltaSonoramaMargin = ((document.querySelector(".sonorama-current-elt").clientWidth - vdcontainerDrime.clientWidth) * 100) / vdcontainerDrime.clientWidth;
  startValue = elt_start;
  endValue = elt_end;
  let isStartValueNegative = false;
  let isEndValueNegative = false;

  if (startValue < 0){startValue = Math.abs(startValue); isStartValueNegative = true}; // removing "-" from negative values
  if (endValue < 0){endValue = Math.abs(endValue); isEndValueNegative = true};

  if (startValue > (deltaSonoramaMargin / 2)){startValue = deltaSonoramaMargin / 2}
  if (endValue > (deltaSonoramaMargin / 2)){endValue = deltaSonoramaMargin / 2}

  if (isStartValueNegative === true){startValue = `-${startValue}`}
  if (isEndValueNegative === true){endValue = `-${endValue}`}
  if (elt_duration !== [] && elt_duration !== undefined){ responsiveSonoramaSetUp(elt_duration, startValue, endValue) }
 }

function responsiveSonoramaSetUp(elt_duration, elt_start, elt_end){
  let responsiveSonoramaAnim = anime.timeline({loop: false});
  responsiveSonoramaAnim.add({
    targets: vdcontainerDrime.querySelector(".sonorama-current-wrapper"),
    autoplay: true,
    duration: elt_duration,
    translateX: [`${elt_start}vw`, `${elt_end}vw`],
    easing: 'easeInOutQuad'
  });
  onClickBehaviour(responsiveSonoramaAnim, "")
}

function sonoramaTransitionAnim(image_index){
  document.querySelector(".sonorama-current-elt").classList.add('sonorama-transition');
  document.querySelector(".sonorama-transition").classList.remove('sonorama-current-elt');
  document.querySelector(".sonorama-current-wrapper").classList.add('sonorama-transition-wrapper');
  document.querySelector(".sonorama-transition-wrapper").classList.remove('sonorama-current-wrapper');
  //*************** SONORAMA TRANSITIONS ****************//
  let deleteTimer = new Timer(function() {
    if(document.querySelector('.sonorama-transition-wrapper')){document.querySelector('.sonorama-transition-wrapper').remove() }
  }, 1000);

  vdcontainerDrime.querySelector('.sonorama-transition').style.zIndex = document.querySelector('.sonorama-transition-wrapper').style.zIndex = 3;
  if (sonoramaTransitions[tutoIdDrime][image_index] !== undefined ){ eval(sonoramaTransitionJs[tutoIdDrime][image_index - 1]);}
  onClickBehaviour(animTransiton, deleteTimer);
}

function resetSonorama(){
  if (document.querySelector(".sonorama-current-wrapper")){document.querySelector(".sonorama-current-wrapper").remove()};
  if (document.querySelector(".sonorama-next-wrapper")){ document.querySelector(".sonorama-next-wrapper").remove()};
  if (document.querySelector(".sonorama-transition-wrapper")){ document.querySelector(".sonorama-transition-wrapper").remove()};
  currentSonoramaImg = "";
}


//****** ONCLICK BEHAVUOURS ******//
function onClickBehaviour(animation, timer){
  document.querySelector('#BtnPs-drime').addEventListener('click', function() { animation.pause();});
  document.querySelector('#BtnPl-drime').addEventListener('click', function() { animation.play();});
  document.querySelector('#lang-picto-drime').addEventListener('click', function() { sonoaramOnclickLang(animation, timer) });
  document.querySelector('#lang-name').addEventListener('click', function() { sonoaramOnclickLang(animation, timer) });
  clickOutsideMenus(animation);
}

function sonoaramOnclickLang(anim, deleteTimer){
  if (document.querySelector('#lang-picto-drime img').src.includes('close_lang_iframe')){
    anim.pause();
    if(deleteTimer != ""){deleteTimer.pause();}
  }else if (document.querySelector('#lang-picto-drime img').src.includes('language_white')){
     anim.play();
     if(deleteTimer != ""){deleteTimer.resume();}
  }
}

function clickOutsideMenus(animName){
  document.addEventListener('click', (evt) => {
    let targetDrime = evt.target;
    let switchLangCallback = '';
    if (targetDrime.nodeName === 'IMG' && targetDrime.classList.contains('flags-drime') || targetDrime.nodeName === 'DIV' && targetDrime.classList.contains('drime-player') || targetDrime.nodeName === 'P' || targetDrime.classList.contains('drime-player')){targetDrime = 'Switch_Lang'};
      if (targetDrime === 'Switch_Lang'){switchLangCallback = targetDrime;}
      //console.log("clickOutsideMenu")
        do {
          if (targetDrime == document.querySelector('#lang-picto-drime') || targetDrime == document.querySelector('.lang-wrapper-drime') || targetDrime == document.querySelector('#lang-name')){ return }
      targetDrime = targetDrime.parentNode;
    } while (targetDrime);
      if (document.querySelector('.lang-wrapper-drime').style.display == 'block' && switchLangCallback.length === 0 ){animName.play(); }
  });
}

//****** DYNAMIC TITLES ******//
function dynamicPostProdDrime(){
  postProdTitlesDrime[tutoIdDrime].forEach(function(title, title_index){
    titleCloseTimeDrime = parseFloat(postProdTimecodesDrime[tutoIdDrime][title_index]) + parseFloat(postProdDurationsDrime[tutoIdDrime][title_index])
      // if (videoDrime.currentTime >= postProdTimecodesDrime[tutoIdDrime][title_index] && videoDrime.currentTime < parseFloat(titleCloseTimeDrime - 0.2) && (document.querySelector(`.title-container.index-${title_index} #title-div`) === null) ) {
        if (videoTimerCurrentTime >= postProdTimecodesDrime[tutoIdDrime][title_index] &&  videoTimerCurrentTime < parseFloat(titleCloseTimeDrime - 0.2) && (document.querySelector(`.title-container.index-${title_index} #title-div`) === null) ) {
        postProdAnimsSetUpDrime(title, title_index);
        postProdFontSizeSetUpDrime(title, title_index);
        postProdPositionsSetUpDrime(title, title_index);
        postProdColorAndBgSetUpDrime(title, title_index);
      };

      // if (videoDrime.currentTime >= titleCloseTimeDrime  && document.querySelector(`.title-container.index-${title_index} #title-div`)) {
      if (videoTimerCurrentTime >= titleCloseTimeDrime  && document.querySelector(`.title-container.index-${title_index} #title-div`)) {
        document.querySelector(`.title-container.index-${title_index}`).remove();
      };
  });
};

function resetDynamicTitlesDrime(){
  document.querySelectorAll(".title-container").forEach(function(currentDiv, index){
    currentDiv.querySelector("#title-div").innerHTML = "";
    currentDiv.remove();
  });
};


function postProdFontSizeSetUpDrime(title, title_index){
  let currentClass = `.title-container.index-${title_index}`;
  if (parseInt(postProdSizesDrime[tutoIdDrime][title_index]) === 1){
    document.querySelector(currentClass).classList.add("font-size-title");
    document.querySelector(currentClass).classList.remove("font-size-subtitle", "font-size-paragraph", "font-size-small", "font-size-verysmall");
  } else if (parseInt(postProdSizesDrime[tutoIdDrime][title_index]) === 2){
    document.querySelector(currentClass).classList.add("font-size-subtitle");
    document.querySelector(currentClass).classList.remove("font-size-title", "font-size-paragraph", "font-size-small", "font-size-verysmall");
  } else if (parseInt(postProdSizesDrime[tutoIdDrime][title_index]) === 3){
    document.querySelector(currentClass).classList.add("font-size-paragraph");
    document.querySelector(currentClass).classList.remove("font-size-subtitle", "font-size-title", "font-size-small", "font-size-verysmall");
  } else if (parseInt(postProdSizesDrime[tutoIdDrime][title_index]) === 4){
    document.querySelector(currentClass).classList.add("font-size-small");
    document.querySelector(currentClass).classList.remove("font-size-subtitle", "font-size-title", "font-size-paragraph", "font-size-verysmall");
  } else if (parseInt(postProdSizesDrime[tutoIdDrime][title_index]) === 5){
    document.querySelector(currentClass).classList.add("font-size-verysmall");
    document.querySelector(currentClass).classList.remove("font-size-subtitle", "font-size-title", "font-size-paragraph", "font-size-small");
  };
};

function postProdPositionsSetUpDrime(title, title_index){
    let currentClass = `.title-container.index-${title_index}`;
     //*** POSITION X
    if (Math.floor(postProdPositionxDrime[tutoIdDrime][title_index]) === 1){
      document.querySelector(currentClass).style.justifyContent = "flex-start";
      document.querySelector(currentClass).style.textAlign = "left";
      if (document.querySelector(`${currentClass} .letters`)){
        document.querySelector(`${currentClass} .letters`).style.display = "flex";
        document.querySelector(`${currentClass} .letters`).style.justifyContent = "flex-start";
      }
    } else if (Math.floor(postProdPositionxDrime[tutoIdDrime][title_index]) === 2){
      document.querySelector(currentClass).style.justifyContent = "center";
      document.querySelector(currentClass).style.textAlign = "center";
      if (document.querySelector(`${currentClass} .letters`)){
        document.querySelector(`${currentClass} .letters`).style.display = "flex";
      document.querySelector(`${currentClass} .letters`).style.justifyContent = "center";
      }
    } else if (Math.floor(postProdPositionxDrime[tutoIdDrime][title_index]) === 3){
      document.querySelector(currentClass).style.justifyContent = "flex-end";
      document.querySelector(currentClass).style.textAlign = "right";
      if (document.querySelector(`${currentClass} .letters`)){
        document.querySelector(`${currentClass} .letters`).style.display = "flex";
        document.querySelector(`${currentClass} .letters`).style.justifyContent = "flex-end";
      }
    }
    //*** POSITION Y
    let divHeight = document.querySelector(currentClass).offsetHeight;
    let previousTitle = document.querySelector(`.title-container.index-${title_index - 1} #title-div`);
    let getMarginTop = 0;

    if (previousTitle && postProdPositionyDrime[tutoIdDrime][title_index] == postProdPositionyDrime[tutoIdDrime][title_index - 1] ){

      if (parseInt(postProdSizesDrime[tutoIdDrime][title_index -1]) === 1){
        getMarginTop = "calc(min(5vw, 8.9vh) * 2.6)";
      } else if (parseInt(postProdSizesDrime[tutoIdDrime][title_index - 1]) === 2){
        getMarginTop = "calc(min(3.5vw, 6.2vh) * 2.8)";
      } else if (parseInt(postProdSizesDrime[tutoIdDrime][title_index - 1]) === 3){
        getMarginTop = "calc(min(2.5vw, 4.5vh) * 3)";
      } else if (parseInt(postProdSizesDrime[tutoIdDrime][title_index - 1]) === 4){
        getMarginTop = "calc(min(1.5vw, 2.7vh) * 3.2)";
      } else if (parseInt(postProdSizesDrime[tutoIdDrime][title_index - 1]) === 5){
        getMarginTop = "calc(min(0.8vw, 1.5vh) * 3.4)";
      }

      document.querySelector(currentClass).style.top = `calc(${document.querySelector(`.title-container.index-${title_index - 1}`).style.top} + ${getMarginTop})`;

    } else{
      document.querySelector(currentClass).style.top = `calc(${postProdPositionyDrime[tutoIdDrime][title_index]}% - ${divHeight / 2}px)`;
    };
};


function postProdColorAndBgSetUpDrime(title, title_index){
  let currentClass = `.title-container.index-${title_index} #title-div`;
  let lineClass = `.title-container.index-${title_index} .line`;

  document.querySelector(currentClass).style.color = postProdColorsDrime[tutoIdDrime][title_index];
  document.querySelector(currentClass).style.background = postProdBackgroundsDrime[tutoIdDrime][title_index];
  if (document.querySelector(lineClass)){
    document.querySelectorAll(lineClass).forEach((element) => {element.style.background = postProdColorsDrime[tutoIdDrime][title_index];})
  }
};

function postProdAnimsSetUpDrime(title, title_index){
  //*** HTML ***//
  let newNodeHtml2 = document.createElement('div');
  let titlesHtml = titlesAnimHtmlDrime;
  let titleFont = postProdFontsDrime[tutoIdDrime][title_index]

  newNodeHtml2.setAttribute('class', `title-container index-${title_index}`);
  document.getElementById('titles-wrapper-drime').appendChild(newNodeHtml2);
  newNodeHtml2.innerHTML = titlesHtml[tutoIdDrime][title_index];
  if (typeof(title) === 'string'){
    document.querySelector(`.title-container.index-${title_index} #title-div`).innerHTML = title;
  }
  if (titleFont != "" && titleFont != undefined){ document.querySelector(`.title-container.index-${title_index} #title-div`).style.fontFamily = titleFont; }

  //*** JS ***//
  eval(titlesAnimJsDrime[tutoIdDrime][title_index]);
  onClickBehaviour(animation, "");
};


//****** CONTROLLER JS ******//
let languageDrime = window.navigator.userLanguage || window.navigator.language;
let paramslgDrime = document.querySelector(".drime-player").getAttribute('lg');
const drimeServerApi = 'https://drime-player.s3.eu-west-3.amazonaws.com';
let versionDrime = "";
const drimeVideosApi = document.querySelectorAll(".drime-player");
let versionLgDrime = [];
//*******------ LANGUAGE ------*******//
if(paramslgDrime){
  languageDrime = paramslgDrime
} else if (languageDrime == null || languageDrime == undefined){
  languageDrime = "zz"
} else {
  languageDrime = languageDrime.substring(0, 2);
}
versionDrime = languageDrime;
drimeVideosApi.forEach(function (element) { element.setAttribute("lg", versionDrime)});


let getJsonDatasDrime = [];
const subtitlesDrime = {};
const subttTimecodesDrime = {};

resetSbtt(tutoIdDrime);
function resetSbtt(video_index){
  subtitlesDrime[video_index] = [];
  subttTimecodesDrime[video_index] = [];
}

//*******------ TITLES SETUP ------*******//
let postProdTitlesDrime = {};
let postProdFontsDrime = {};
let postProdTimecodesDrime = {};
let postProdDurationsDrime = {};
let postProdPositionxDrime = {};
let postProdPositionyDrime = {};
let postProdAnimationsDrime = {};
let postProdSizesDrime = {};
let postProdColorsDrime = {};
let postProdBackgroundsDrime = {};

let titlesAnimHtmlDrime = {};
//let titlesAnimCssDrime = {};
//let allCssClassDrime = [];
let allCssContentDrime = [];
let titlesAnimJsDrime = {};

let videoDurationDrime = [];


//*******------ TITLES ADVANCED SETUP ------*******//
function titlesAdvancedSetupDrime(video_index){
  postProdTitlesDrime[video_index] = [];
  postProdFontsDrime[video_index] = [];
  postProdTimecodesDrime[video_index] = [];
  postProdDurationsDrime[video_index] = [];
  postProdPositionxDrime[video_index] = [];
  postProdPositionyDrime[video_index] = [];
  postProdAnimationsDrime[video_index] = [];
  postProdSizesDrime[video_index] = [];
  postProdColorsDrime[video_index] = [];
  postProdBackgroundsDrime[video_index] = [];

  titlesAnimHtmlDrime[video_index] = [];
  allCssContentDrime[video_index] = [];
  titlesAnimJsDrime[video_index] = [];
};

//*******------ SONORAMA SETUP ------*******//
let sonoramaImages = {};
let sonoramaTimecodes = {};
let sonoramaParams = {};
let sonoramaResponsive = {};
let sonoramaAnims = {};
let sonoramaAnimJs = {};
let sonoramaTransitions = {};
let sonoramaTransitionJs = {};

function sonoramaSetup(video_index){
  sonoramaImages[video_index] = [];
  sonoramaTimecodes[video_index] = [];
  sonoramaParams[video_index] = [];
  sonoramaResponsive[video_index] = [];
  sonoramaAnims[video_index] = [];
  sonoramaAnimJs[video_index] = [];
  sonoramaTransitions[video_index] = [];
  sonoramaTransitionJs[video_index] = [];
}

let responsiveArrayDrime = [];

var style_baliseDrime = document.createElement('style');
style_baliseDrime.setAttribute('id', 'titles-css');
document.head.appendChild(style_baliseDrime);


function versionSetUpDrime(versions, video_index){
  const versionsDiv = document.querySelector("ul.is-overflow-drime");
  versionsDiv.querySelectorAll("li").forEach(function (element) {element.remove();});
  if (drimeVideosApi[video_index].getAttribute("lg")){versionDrime = drimeVideosApi[video_index].getAttribute("lg") }
  if (versions.filter(e => e.language === versionDrime).length === 0) { versionDrime = versions[0].language; }
  versions.forEach(function (element) {
    if (versionsDiv.querySelectorAll("li").length < versions.length){
      let listNode = document.createElement('li');
      if (element.language == versionDrime){
        versionLgDrime = element;
        listNode.setAttribute('class', "active");
        document.querySelector("#lang-name").innerText = element.language.toUpperCase();
      } else {
        listNode.classList.remove("active");
      }
      versionsDiv.appendChild(listNode);
      listNode.innerHTML =`<a href="#" alt="language ${element.language}" onclick="switchVideoDrime('${element.language}', ${video_index})" ontouchstart="switchVideoDrime('${element.language}', ${video_index})"><span><p>${element.language.toUpperCase()}</p><img src="${drimeServerApi}/images/flags/${element.language}.svg", class='flags-drime', alt="languages flag ${element.language}"></span></a>`;
    } else if (element.language == versionDrime){
      versionLgDrime = element;
      document.querySelector("#lang-name").innerText = element.language.toUpperCase();
    }
  });
};


drimeVideosApi.forEach(function(current_video, video_index){
  titlesAdvancedSetupDrime(video_index);
  sonoramaSetup(video_index);
  fillPlayBtn(drimeVideosApi[video_index].getAttribute('src'), video_index, "meta-datas");
})

async function fillPlayBtn(url, video_index, _callback){
  fetch(url)
  .then(response => response.text() )
  .then(data => {
    const parsed_json = JSON.parse(data);
    //*******------ POSTER ------*******//
    const posterImage = parsed_json.poster;
    //*******------ LOGO ------*******//
    const logoVideo = parsed_json.logo;
    //*******------ VERSION SETUP ------*******//
    const versions = [];
    parsed_json.versions.forEach(function (element) { versions.push(element)});
    versionSetUpDrime(versions, video_index);
    //*******------ VIDEO ------*******//
    const videoadress = versionLgDrime.video_url;
    //*******------ AUDIO ------*******//
    if (versionLgDrime.audio_url === ""){ versionLgDrime.audio_url = 0 }
    const audioadress = versionLgDrime.audio_url;
    //*******------ VIDEO ------*******//
    const playvideoduration = versionLgDrime.video_duration;
    //*******------ STEPS ------*******//
    const steps = versionLgDrime.steps;
    const total_steps = versionLgDrime.steps.length - 1;
    //*******------ FILL SUBTITLES ------*******//
    subtitlesDrime[video_index] = [];
    subttTimecodesDrime[video_index] = [];

    if (versionLgDrime['subtitles']){
      versionLgDrime['subtitles'].forEach (function (sbttHash) {
        subtitlesDrime[video_index].push(sbttHash['sentence']);
        subttTimecodesDrime[video_index].push(sbttHash['timecode']);
      });
    }
    //*******------ FILL TITLES ------*******//
    if (versionLgDrime.titles){
      versionLgDrime['titles'].forEach(function (titleHash) { postProdTitlesDrime[video_index].push(titleHash['title']); });
    } else {
      postProdTitlesDrime[video_index] = "";
    }
    //*******------ FILL PLAY BTN DATAS ------*******//
    const playButton = drimeVideosApi[video_index];
    playButton.setAttribute("ontouchstart",  `playVideoDrime('${videoadress}', '${total_steps}', [${steps}], 'infos', '', [${subttTimecodesDrime[video_index]}], '${video_index}', '${logoVideo}', '${audioadress}', 0, '${posterImage}', '${playvideoduration}')`);
    playButton.setAttribute("onclick",  `playVideoDrime('${videoadress}', '${total_steps}', [${steps}], 'infos', '', [${subttTimecodesDrime[video_index]}], '${video_index}', '${logoVideo}', '${audioadress}', 0, '${posterImage}', '${playvideoduration}')`);

    if (_callback === "switch Lang"){clickVideo(versionLgDrime.language, video_index);};
    if (_callback === "meta-datas"){fillMetaData(drimeVideosApi[video_index].getAttribute('src'), video_index );}
  });

};

const allFonts = [];
 async function fillMetaData(url, video_index){
  fetch(url)
  .then(response => response.text() )
  .then(data => {

      const parsed_json = JSON.parse(data);
      //*******------ POSTER ------*******//
      const posterImage = parsed_json.poster;
      //*******------ VERSION SETUP ------*******//
      const versions = [];
      parsed_json.versions.forEach(function (element) { versions.push(element)});
      versionSetUpDrime(versions, video_index);
      //*******------ NAME ------*******//
      const videoName = versionLgDrime.name;

      //*******------ INFOS ------*******//
      const infosVideo = versionLgDrime.infos;

      videoDurationDrime.push(versionLgDrime.video_duration);

      //*******------ FILL SUBTITLES ------*******//
      // subtitlesDrime[video_index] = [];
      // subttTimecodesDrime[video_index] = [];

      // if (versionLgDrime['subtitles']){
      //   //versionLgDrime['subtitles'].forEach (function (sbttHash) { subtitlesDrime[video_index].push(sbttHash['sentence']); });
      //   versionLgDrime['subtitles'].forEach (function (sbttHash) {
      //     subtitlesDrime[video_index].push(sbttHash['sentence']);
      //   });


      // } else {
      //   subtitlesDrime[video_index] = "";
      // }
      // //*******------ FILL TITLES ------*******//
      if (versionLgDrime.titles){
        versionLgDrime['titles'].forEach(function (titleHash) { postProdTitlesDrime[video_index].push(titleHash['title']); });
      } else {
        postProdTitlesDrime[video_index] = "";
      }
      //*******------ FONTS ------*******//
      parsed_json.fonts.forEach(function (oneFont) { allFonts.push([oneFont["fontname"], oneFont["font-css"], oneFont["fonturl"] ])});
      //*******------ LOAD FONTS FOR TITLES ------*******//
      allFonts.forEach(function(oneFont){
        var junction_font = new FontFace(oneFont[0], `url(${oneFont[2]})`);
        junction_font.load().then(function(loaded_face) {
          document.fonts.add(loaded_face);
        }).catch(function(error) {
          console.log('Failed to load font');
        });
      });
      //*******------ FILL VIDEO OBJECT METADATAS ------*******//
      let metaDataTitle = "";
      let metaDataDescription = "";
      let creatingDate = "";
      let videoDuration = [];
      const isoLetters = ["H", "M", "S"];
      let videoObectDatas = {};
      if (document.querySelector(`#drime-${video_index}`) != null){ document.querySelector(`#drime-${video_index}`).remove(); };

      video_metadatas_setup(video_index);


    function video_metadatas_setup(video_index){

      metaDataTitle = `DRIME video player - ${videoName}`;
      metaDataDescription = `${infosVideo.replace(/<\/?[^>]+>/, '').replace(/<br\/>/, '\n')} \n ${subtitlesDrime[video_index].join(" ")}\n ${postProdTitlesDrime[video_index].join(" | ")}`;
      creatingDate = new Date(versionLgDrime.last_update).toISOString();
      // GET ISO FORMAT FOR DURATION
      getIso8601Duration();
      videoDuration = `PT${videoDuration.join("")}`;
      fillVideoObject(metaDataTitle, metaDataDescription, creatingDate, videoDuration, video_index);
    };

    function getIso8601Duration(){
      const splitDuration = versionLgDrime.video_duration.split(':');
      splitDuration.forEach(function(stringNumber, index){
        if (stringNumber[0] == "0"){ stringNumber = stringNumber.substring(1); } // Delete first zero
        videoDuration.push(`${stringNumber.toString()}${isoLetters[index]}`);
      });
    };
    //*******------ GENERATE VIDEO OBJECT SCRIPT ------*******//
    function fillVideoObject(metaDataTitle, metaDataDescription, creatingDate, videoDuration, video_index){
      videoObectDatas = {
        "@context": "https://schema.org/",
        "@type": "VideoObject",
        "name": metaDataTitle,
        "description": metaDataDescription,
        "thumbnailUrl": posterImage,
        "uploadDate": creatingDate,
        "duration": videoDuration,
        "contentUrl":`https://drime-player.s3.eu-west-3.amazonaws.com/html/single_sonorama.html?src=${drimeVideosApi[video_index].getAttribute('src')}`
      };

      let videoObjectScript = document.createElement('script');
      videoObjectScript.type = "application/ld+json";
      videoObjectScript.setAttribute('id', `drime-${video_index}`);
      videoObjectScript.innerHTML = JSON.stringify(videoObectDatas);
      document.head.appendChild(videoObjectScript);
    };

    //*******------ FILL SINGLE PAGE BG IMAGE + METAS ------*******//
    if (document.querySelector(".drime-player.single-page") != null){
      document.querySelector(".drime-player.single-page").style.backgroundImage = `url(${posterImage})`;
      document.querySelector('meta[property="og:image"]').content = `DRIME - ${posterImage}`;
      document.querySelector('meta[name="twitter:image"]').content = `DRIME - ${posterImage}`;

      document.title = `DRIME - ${videoName}`;
      document.querySelector('meta[property="og:title"]').content = `DRIME - ${versionLgDrime.name}`;
      document.querySelector('meta[name="twitter:title"]').content = `DRIME - ${versionLgDrime.name}`;

      $('meta[name=description]').attr('content', `${infosVideo.replace(/<\/?[^>]+>/, '').replace(/<br\/>/, '\n').substring(0,157)}...`);
      document.querySelector('meta[property="og:description"]').content = `${infosVideo.replace(/<\/?[^>]+>/, '').replace(/<br\/>/, '\n').substring(0,157)}...`;
      document.querySelector('meta[name="twitter:description"]').content = `${infosVideo.replace(/<\/?[^>]+>/, '').replace(/<br\/>/, '\n').substring(0,157)}...`;

      document.querySelector('meta[property="og:url"]').content = `${document.location}`;
    };
  })
};

function fetchJsonDrime(url, video_index){
  //******* DATA PARSING AND VARAIBLES SETUP *******//
  fetch(url)
  .then(response => response.text() )
  .then(data => {
    //*******------ GENERAL SETUP ------*******//
    const parsed_json = JSON.parse(data);
    //*******------ POSTER ------*******//
    const posterImage = parsed_json.poster;
    //*******------ LOGO ------*******//
    const logoVideo = parsed_json.logo;
    //*******------ COLORS ------*******//
    const colorsHash = {};
    parsed_json['colors'].forEach(function (color) { colorsHash[color['color-name']] = color['color-code']});
    //*******------ ANIMATIONS ------*******//
    const jsonAnimsArray = [];
    parsed_json['animations'].forEach(function (jsonAnim) { jsonAnimsArray.push([jsonAnim['animation-name'], jsonAnim['animation-file'], jsonAnim['animation-url']])});
    //*******------ RESPONSIVE ------*******//
    if (parsed_json['responsive'] === undefined){
      responsiveArrayDrime = [];
    } else {
      parsed_json['responsive'].forEach(function (responsive) { responsiveArrayDrime.push([responsive['timecode'], responsive['position'], responsive['transition']]) });
    }
    //*******------ VERSIONS ------*******//
    const versions = [];
    parsed_json.versions.forEach(function (element) { versions.push(element)});
    if (versions.filter(e => e.language === versionDrime).length === 0) { versionDrime = versions[0].language; }
    //*******------ VERSION SETUP ------*******//
    versionSetUpDrime(versions, video_index);
    //*******------ NAME ------*******//
    const videoName = versionLgDrime.name;
    //*******------ VIDEO ------*******//
    const videoadress = versionLgDrime.video_url;
    //*******------ INFOS ------*******//
    const infosVideo = versionLgDrime.infos;
    //*******------ FILL SONORAMA ------*******//
    const sonorama = [];
    if (parsed_json.sonorama){
      parsed_json.sonorama.forEach (function (sonorama) {
        sonoramaTimecodes[video_index].push(sonorama['timecode']);
        sonoramaAnims[video_index].push(sonorama['anim']);
        sonoramaParams[video_index].push(sonorama['params']);
        sonoramaResponsive[video_index].push(sonorama['responsive']);
        sonoramaTransitions[video_index].push(sonorama['transition']);
      });
      sonoramaImages[video_index] = versionLgDrime['images'];
    }
    //*******------ FILL SUBTITLES ------*******//
    subtitlesDrime[video_index] = [];
    subttTimecodesDrime[video_index] = [];

    if (versionLgDrime['subtitles']){
      versionLgDrime['subtitles'].forEach (function (sbttHash) {
        subtitlesDrime[video_index].push(sbttHash['sentence']);
        subttTimecodesDrime[video_index].push(sbttHash['timecode']);
      });
    }
    //*******------ FILL TITLES ------*******//
    if (versionLgDrime.titles){
      versionLgDrime['titles'].forEach(function (titleHash) {
        postProdTitlesDrime[video_index].push(titleHash['title']);
        postProdTimecodesDrime[video_index].push(titleHash['timecode']);
        postProdDurationsDrime[video_index].push(titleHash['duration']);
        postProdPositionxDrime[video_index].push(titleHash['positionx']);
        postProdPositionyDrime[video_index].push(titleHash['positiony']);
        postProdSizesDrime[video_index].push(titleHash['size']);
        postProdColorsDrime[video_index].push(colorsHash[titleHash['color']]);
        postProdBackgroundsDrime[video_index].push(colorsHash[titleHash['background']]);

        if (titleHash['font'] === ''){
          selectedFont = ' ';
        } else {
          selectedFont = allFonts.find(element => element[0] == titleHash['font']);
        }
        postProdFontsDrime[video_index].push(selectedFont[0]);
        postProdAnimationsDrime[video_index].push(titleHash['animation']);
      });
      //*******------ FILL LOGO ------*******//
      if (logoVideo != null && logoVideo != "" ){
        logovdDrime.innerHTML = `<img src=${logoVideo} alt='logo'>`;
      } else {
        logovdDrime.innerHTML = "";
      }
    }

    //*******------ JSON ANIMS ------*******//
    let jsonAnims = [];
    parseJsonAnim(jsonAnimsArray, video_index, jsonAnims);
  });

};

function parseJsonAnim(jsonAnimsArray, video_index, jsonAnims){
  Object.values(jsonAnimsArray).forEach(function (oneAnim){
    fetch(oneAnim[2])
     .then(response => response.text() )
     .then(data => {
      const playerAnim = JSON.parse(data);
        if (allCssContentDrime[video_index].indexOf(playerAnim['animcss']) === -1){
          allCssContentDrime[video_index].push(playerAnim['animcss']);
          style_baliseDrime.innerText = allCssContentDrime[video_index].join(" ");
        }

        let jsonAnimsPromise = new Promise(resolve => {
          jsonAnims.push(playerAnim);
          resolve(jsonAnims);
        });

        jsonAnimsPromise.then(arr => {
          if (jsonAnims.length === jsonAnimsArray.length  ) {

            postProdAnimationsDrime[video_index].forEach(function (titleAnim){
              let filteredAnim = jsonAnims.filter(animObject => animObject.name === titleAnim);
              titlesAnimHtmlDrime[video_index].push(filteredAnim[0]['animhtml']);
              titlesAnimJsDrime[video_index].push(filteredAnim[0]['animjs']);
            });

            sonoramaAnims[video_index].forEach(function (sonoramaAnim){
              let filteredAnim2 = jsonAnims.filter(animObject => animObject.name === sonoramaAnim);
              sonoramaAnimJs[video_index].push(filteredAnim2[0]['animjs']);
            });

            sonoramaTransitions[video_index].forEach(function (sonoramaTransition){
              let filteredTransition = jsonAnims.filter(animObject => animObject.name === sonoramaTransition);
              if (filteredTransition.length > 0){sonoramaTransitionJs[video_index].push(filteredTransition[0]['animjs']);}

            });
          }
        });
    });
  });
};

function resizeScreenDrime(){
  if (responsiveArrayDrime.length > 0 && currentResponsiveIndexDrime > 0 && (document.querySelector("#myVideo-drime").clientWidth > vdcontainerDrime.clientWidth)) {
    responsivePositionsDrime([responsiveArrayDrime[currentResponsiveIndexDrime-1][0],responsiveArrayDrime[currentResponsiveIndexDrime-1][1],0]);
    if (document.querySelector("#img-wrapper")){document.querySelector("#img-wrapper").style.width =  `${myVideo.clientWidth}px`;}
    if (document.querySelector("#sonorama-video-wrapper")){document.querySelector("#sonorama-video-wrapper").style.width =  `${myVideo.clientWidth}px`;}
  } else if (document.querySelector("#myVideo-drime").clientWidth < vdcontainerDrime.clientWidth){
    vdcontainerDrime.style.marginLeft = "";
    if (document.querySelector("#img-wrapper")){document.querySelector("#img-wrapper").style.width =  `${myVideo.clientWidth}px`;}
    if (document.querySelector("#sonorama-video-wrapper")){document.querySelector("#sonorama-video-wrapper").style.width =  `${myVideo.clientWidth}px`;}
  };
  if (sonoramaResponsive[tutoIdDrime][imgIndexCounter] !== undefined && document.querySelector("#myVideo-drime").clientWidth > vdcontainerDrime.clientWidth){
      responsiveSonoramaMarginValues(sonoramaResponsive[tutoIdDrime][imgIndexCounter][1], sonoramaResponsive[tutoIdDrime][imgIndexCounter][2], sonoramaResponsive[tutoIdDrime][imgIndexCounter][0])
    }
}

window.addEventListener("resize", function(event) {
  resizeScreenDrime();
}, false);


function checkOrientationDrime(){ if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) && window.matchMedia("(orientation: landscape)").matches) { vdcontainerDrime.style.marginLeft = "";} }
window.addEventListener("orientationchange", event => {if (responsiveArrayDrime.lenght > 0){checkOrientationDrime}});
setInterval(checkOrientationDrime, 1000);


function switchLanguageDrime(){

  if (document.querySelector(".lang-wrapper-drime").style.display == "block"){ unpauseVideoDrime();}
  changeLangDrime();
}

function switchVideoDrime(lang, video_index){
  clearInterval(intervalLoopMp3Timer);
  intervalLoopMp3Timer = null;
  mp3Array = [];
  videoTimerCurrentTime = 0;
  if (isSonorama === false){ audioDrime.currentTime = 0 }
  mp3SonoramaLoop = false;
  if (document.querySelector("#sonorama-sbt")){
    document.querySelector("#sonorama-sbt").style.cssText = document.querySelector("#sonorama-sbt p").style.cssText = document.querySelector("#sonorama-sbtt-background").style.cssText = "";
    document.querySelector("#sonorama-sbt p").innerText = "";
  }
  pl_btn.style.visibility = "hidden";
  audioDrime.removeAttribute('src');
  audioDrime.load();
  videoDrime.removeAttribute('src');
  drimeVideosApi[video_index].setAttribute('lg', `${lang}`);
  vdcontainerDrime.style.marginLeft = "";
  resetSbtt();
  titlesAdvancedSetupDrime(video_index);
  resetResponsiveArrayDrime();
  fillPlayBtn(drimeVideosApi[video_index].getAttribute('src'), video_index, "switch Lang");
  changeLangIndicatorDrime = 1;
};


function clickVideo(lang, video_index){
  drimeVideosApi[video_index].click();
  changePageZindex();
}
