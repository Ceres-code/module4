// Wrap the entire contents of SpeakHello.js inside of an IIFE
(function (window) {
  var helloSpeaker = {}; // Create an object

  var speakWord = "Hello"; // Do not attach speakWord to helloSpeaker

  // Attach the speak method to helloSpeaker
  helloSpeaker.speak = function (name) {
    console.log(speakWord + " " + name);
  };

  // Expose helloSpeaker to the global scope
  window.helloSpeaker = helloSpeaker;
})(window);

