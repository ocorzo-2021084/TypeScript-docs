"use strict";
(() => {
    // Your code here
    let audioLevel;
    (function (audioLevel) {
        audioLevel[audioLevel["min"] = 1] = "min";
        audioLevel[audioLevel["medium"] = 5] = "medium";
        audioLevel[audioLevel["max"] = 10] = "max";
    })(audioLevel || (audioLevel = {}));
    let currentAudio = audioLevel.medium;
    console.log(currentAudio);
    console.log(audioLevel);
})();
