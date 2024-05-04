// explore.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  const voiceSelect = document.getElementById('voice-select');
  let isSpeaking = false;
  
  // check if user's browser supports speechSynthesis API, else throw error on console
  if ('speechSynthesis' in window) {

    // create speechSynthesis object
    const speechSynth = window.speechSynthesis;

    // update voices list when adding or removing voices in the list
    speechSynth.onvoiceschanged = () => {
      // Clear existing options
      voiceSelect.innerHTML = '<option value="select" disabled selected>Select Voice:</option>';
      
      // Get the list of available voices from the user's browser
      const voices = speechSynth.getVoices();

      // Populate dropdown with voices
      voices.forEach(voice => {
        const option = new Option(`${voice.name} (${voice.lang})`, voice.name);
        voiceSelect.appendChild(option);
      });
    };

    // New objects may not load immediately when the page is loaded, so manually force it
    speechSynth.onvoiceschanged();

    // Event listener for "Press to Talk" button
    const button = document.querySelector('button');
    button.addEventListener('click', () => {
      if (!isSpeaking) {
        const textToSpeak = document.getElementById('text-to-speak').value;
        const selectedVoice = voiceSelect.value;
        console.log(selectedVoice);
        // object stores the text that needs to be spoken
        const toBeSpoken = new SpeechSynthesisUtterance(textToSpeak);
        // find voice in the list that matches selected voice by the user
        const voice = speechSynth.getVoices().find(voice => voice.name === selectedVoice);
        // add voice to the toBeSpoken object
        toBeSpoken.voice = voice;
        isSpeaking = true;
        document.querySelector('img').src = 'assets/images/smiling-open.png';
        // runs  asynchronous so it breaks whenever isSpeaking turns to false!
        toBeSpoken.onend = () => {
          isSpeaking = false;
          document.querySelector('img').src = 'assets/images/smiling.png';
        };
        speechSynth.speak(toBeSpoken);
        //console.log(document.querySelector('img').src)
        //console.log(isSpeaking)
      }
    });
  } 
  else 
    console.error('Error, SpeechSynthesis not supported by your Browser');
  
}
