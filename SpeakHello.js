(function () {

  // STEP 3: Create an object, called 'helloSpeaker'
  var helloSpeaker = {};

  // DO NOT attach the speakWord variable to the 'helloSpeaker' object.
  var speakWord = "Hello";

  // STEP 4: Rewrite the 'speak' function to be attached to the 'helloSpeaker' object
  helloSpeaker.speak = function(name) {
    console.log(speakWord + " " + name);
  };

  // STEP 5: Expose the 'helloSpeaker' object to the global scope
  window.helloSpeaker = helloSpeaker;

})();
