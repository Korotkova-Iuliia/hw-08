import Player from '@vimeo/player';
const throttle = require('lodash.throttle');
const iframe = document.querySelector('#vimeo-player');
const player = new Player(iframe);

let currentTimeStopPlayer = localStorage.getItem('videoplayer-current-time = data.seconds');
console.log(currentTimeStopPlayer);

const onPlaybackPause = function (data) {
  const timeStopPlayer = data.seconds;
  localStorage.setItem('videoplayer-current-time = data.seconds', timeStopPlayer);
};
const onPlaybackPlay = function (data) {
  localStorage.setItem('videoplayer-current-time = data.seconds', data.seconds);
};

player
  .setCurrentTime(currentTimeStopPlayer)
  .then(function (seconds) {
    player.on('pause', onPlaybackPause);
    player.on('timeupdate', throttle(onPlaybackPlay, 1000));
  })
  .catch(function (error) {
    switch (error.name) {
      case 'RangeError':
        // the time was less than 0 or greater than the video’s duration
        break;

      default:
        // some other error occurred
        break;
    }
  });

// const onPlaybackPlay = function (data) {
//   localStorage.setItem('videoplayer-current-time = data.seconds', data.seconds);
// // };
// const throttled = throttle(onPlaybackPlay, 1000);

// Player.on('timeupdate', throttled);
