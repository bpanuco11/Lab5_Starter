window.addEventListener('DOMContentLoaded', init);

function init() {
  const hornSelect = document.getElementById('horn-select');
  const hornImage = document.querySelector('#expose img');
  const audioElement = document.querySelector('audio');
  const volumeControl = document.getElementById('volume');
  const volumeIcon = document.querySelector('#volume-controls img');
  const playButton = document.querySelector('button');

  hornSelect.addEventListener('change', function() {
    const selectedHorn = hornSelect.value;
    /*determines what horn was selected by the user and initializes corresponding image and audio*/
    switch (selectedHorn) {
      case 'air-horn':
        hornImage.src = 'assets/images/air-horn.svg';
        audioElement.src = 'assets/audio/air-horn.mp3';
        break;
      case 'car-horn':
        hornImage.src = 'assets/images/car-horn.svg';
        audioElement.src = 'assets/audio/car-horn.mp3';
        break;
      case 'party-horn':
        hornImage.src = 'assets/images/party-horn.svg';
        audioElement.src = 'assets/audio/party-horn.mp3';
        break;
      /*If no item was selected, then keep the default image with no audio*/
      default:
        hornImage.src = 'assets/images/no-image.png';
        audioElement.src = '';
    }
  });

  volumeControl.addEventListener('input', function() {
    const volume = parseFloat(volumeControl.value) / 100;
    audioElement.volume = volume;

    /*Divide volume into levels with their respective image*/
    if (volume === 0) 
      volumeIcon.src = 'assets/icons/volume-level-0.svg';
    else if (volume < 0.33) 
      volumeIcon.src = 'assets/icons/volume-level-1.svg';
    else if (volume < 0.67) 
      volumeIcon.src = 'assets/icons/volume-level-2.svg';
    else 
      volumeIcon.src = 'assets/icons/volume-level-3.svg';
    
    console.log('Volume level:', volume);
  });

  /*Pops confetti when clicking on the party horn aside from the sound*/
  playButton.addEventListener('click', function() {
    if (hornSelect.value === 'party-horn') {
      const jsConfetti = new JSConfetti();
      jsConfetti.addConfetti({
        emojis: ['🌈', '⚡️', '💥', '✨', '💫', '🌸'],
     });

    }
    audioElement.play();
  });
}
