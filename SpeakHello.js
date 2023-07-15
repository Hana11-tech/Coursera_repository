
(
  function(window){
    var helloSpeaker = {};
    helloSpeaker.name=name;
    var speakWord = "Hello ";
    helloSpeaker.speak = function ()
     {
      console.log(speakWord + " " + name);
    }


    window.helloSpeaker = helloSpeaker;}
)(window);





