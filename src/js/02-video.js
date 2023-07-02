import Vimeo from '@vimeo/player';
import { throttle } from 'lodash.throttle';
var throttle = require('lodash.throttle');


const playerElement = document.getElementById('vimeo-player');
const player = new Vimeo(playerElement);

player.on('timeupdate', throttle(() => {
  player.getCurrentTime().then(currentTime => {
    localStorage.setItem('videoplayer-current-time', currentTime);
  });
}, 1000));

const savedPlaybackTime = localStorage.getItem('videoplayer-current-time');
if (savedPlaybackTime) {
  player.setCurrentTime(parseFloat(savedPlaybackTime));
}
