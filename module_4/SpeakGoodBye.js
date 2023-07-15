

// STEP 6: Wrap the entire contents of SpeakGoodBye.js inside of an IIFE

(
  function (window)
  {
    var byeSpeaker = {};
    byeSpeaker.name=name;
    var speakWord = "Good Bye";
    byeSpeaker.speak = function ()
     {
      console.log(speakWord + " " + byeSpeaker.name);
    }

    window.byeSpeaker = byeSpeaker;
  }
)(window);

