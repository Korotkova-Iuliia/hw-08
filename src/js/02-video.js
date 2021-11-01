import Player from '@vimeo/player';
// var throttle = require('lodash.throttle');
const iframe = document.querySelector('#vimeo-player');
const player = new Player(iframe);
console.log(player);
// _.throttle(func, [(wait = 0)], [(options = {})]);
// var throttled = _.throttle(renewToken, 300000, { trailing: false });
// jQuery(element).on('click', throttled);
// player.on('eventName', function (data) {
//   // data is an object containing properties specific to that event
// });
// ?????????????????????????????????????????????????
let currentTimeStopPlayer = localStorage.getItem('videoplayer-current-time = data.seconds');
console.log(currentTimeStopPlayer);

const callback = function (data) {
  const timeStopPlayer = data.seconds;
  currentTimeStopPlayer = localStorage.setItem(
    'videoplayer-current-time = data.seconds',
    timeStopPlayer,
  );
  console.log(timeStopPlayer);
  //   player.setCurrentTime(timeStopPlayer).then(function (timeupdate) {
  //     console.log(timeupdate);
  //   });
};
const onPlay = function (data) {
  console.log(data);
  timeOnPlayer = data.seconds;
  console.log(timeOnPlayer);
};

const onPlayInput = function () {
  //   iframe[this.name] = this.value;
  console.log(iframe[data.seconds]);
  console.log(data.seconds);
};
player.on('play', onPlay);
player.on('input', onPlayInput);

player.off('play', onPlay);
player.on('pause', callback);

player
  .setCurrentTime(currentTimeStopPlayer)
  .then(function (seconds) {
    // seconds = the actual time that the player seeked to
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

// ?????????????????????????????????????????????????

// // // // // // // // // // // // // // // //
// var throttle = require('lodash.throttle');

// player.on('timeupdate', throttle(function (timeObj) {
//     localStorage.setItem("videoplayer-current-time", JSON.stringify(timeObj.seconds));
//     // console.log("timeUpdateFunc:", timeObj.seconds);
// }, 1000));
// // // // // // // // // // // // // // // // // // // // //
// duration: 571.563;
// percent: 0.113;
// seconds: 64.533;
// iframe.addEventListener('timeupdate', event => {
//   console.log('The currentTime attribute has been updated. Again.');
// });
// player.on('play', function () {
//   console.log('played the video!');
// });

// const player = new Vimeo.Player(iframe);
// console.log(Vimeo.Player);
//
// let timeCurrentPlayer = 'videoplayer-current-time';

// player.on('timeupdate', function (data) {
//   console.log(e.target);

//   console.log(timeStopPlayer);
// });
// player
//   .getCurrentTime()
//   .then(function (seconds) {
//     // seconds = the current playback position
//   })
//   .catch(function (error) {
//     // an error occurred
//   });

// const onPause = function (data) {
//   const timeStopPlayer = data.seconds;
//   console.log(timeStopPlayer);
//   console.log(player.setCurrentTime);
//   player.setCurrentTime(timeStopPlayer).then(function (timeupdate) {
//     console.log(timeupdate);
//     console.log(player.setCurrentTime);
//   });
// };
// const onPlay = function (data) {
//   console.log(data);
//   timeOnPlayer = data.seconds;
//   console.log(timeOnPlayer);
// };

// const onPlayInput = function (e) {
//   //   //   iframe[this.name] = this.value;
//   //   // console.log(iframe[data.seconds]);
//   //   console.log(e.target);
//   console.log(data.seconds);
// };
