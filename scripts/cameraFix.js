

var cameraFix = (function(){
  
  // // // // // // // Methods // // // // //
  var run = function(){
    
    var video = getVideoEle()
    
    if ( video != null ) {
      
      navigator.mediaDevices.getUserMedia(constraints)
        .then(function (stream) {
          streamSuccess(stream, video)
        })
        .catch(streamFailure); 
    }
    
  }
  
  // // // // // Private methods and properties // // // // //
  
  var constraints = {
      audio: false,
      video: {
          // Prefer the rear camera
          facingMode: "environment"
      }
  }
  
  var streamSuccess = function(stream, video){
    self.videoPlaying = false;

    video.setAttribute('autoplay', '');
    video.setAttribute('muted', '');
    // This is critical for iOS or the video initially goes fullscreen
    video.setAttribute('playsinline', '');
    video.srcObject = stream;

    video.addEventListener('resize', function () {
        // really do nothing here
    });


    // Only play the video when it's actually ready
    video.addEventListener('canplay', function () {
        // Is this useful for us
    });
  }
  
  var streamFailure = function(error) {
    console.log("ERROR: Unable to acquire camera stream");
  }
  
  // Returns the video element used in the app
  var getVideoEle = function() {
  
    var video = document.getElementsByTagName("video")
     
    if (video.length > 0) {
       return video[0];
    }
    
    return null;
  }
  
  
  // exposed methods
  
  return {
     run: run
  }
  
})()

// we will have to run this on a timer as the video element does not exist early enough. the A-frame camera has a delay within it.
document.addEventListener("DOMContentLoaded", function(event) { 
  cameraFix.run()
});