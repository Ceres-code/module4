// Wrap the entire contents of SpeakGoodBye.js inside of an IIFE
(function (window) {
  var byeSpeaker = {}; // Create an object

  var speakWord = "Good Bye"; // Do not attach speakWord to byeSpeaker

  // Attach the speak method to byeSpeaker
  byeSpeaker.speak = function (name) {
    console.log(speakWord + " " + name);
  };

  // Expose byeSpeaker to the global scope
  window.byeSpeaker = byeSpeaker;
})(window);
