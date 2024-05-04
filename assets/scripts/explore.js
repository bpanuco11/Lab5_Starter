// explore.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  const voiceSelect = document.getElementById('voice-select');
  
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
  } 
  else 
    console.error('Error, SpeechSynthesis not supported by your Browser');
  
}
