var iframe = document.querySelector('iframe');
var player = new Vimeo.Player(iframe);
// import Player
// const iframe = document.querySelector('#vimeo-player');
// const player = new Player(iframe);
// console.log('iframe');
// console.log(player);

// iframe.addEventListener('timeupdate', event => {
//   console.log('The currentTime attribute has been updated. Again.');
// });
// player.on('play', function () {
//   console.log('played the video!');
// });
// const Player = require('@vimeo/player');

// const iframe = document.querySelector('#vimeo-player');
// console.log(iframe);

// const player = new Vimeo.Player(iframe);
// console.log(Vimeo.Player);
// console.log(player);
// let timeCurrentPlayer = 'videoplayer-current-time';

// player.on('timeupdate', function (data) {
//   console.log(e.target);
//   const timeStopPlayer = data.seconds;
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
//   console.log(this);
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
//   //   iframe[this.name] = this.value;
//   // console.log(iframe[data.seconds]);
//   console.log(e.target);
//   // console.log(data.seconds);
// };
// // player.on('play', onPlay);
// player.on('input', onPlayInput);
// // player.on('pause', onPause);
// // player.off('play', onPlay);

// function skip() {
//   video.currentTime += Number(this.dataset.skip)
// }
// function scrab(event) {
//   const scrabTime = (event.offsetX / progress.offsetWidth) * video.duration
//   video.currentTime = scrabTime
// }
//   .catch(function (error) {
//     switch (error.name) {
//       case 'RangeError':
//         data.seconds > data.duration;
//         break;

//       default:
//         // data.seconds === 0;
//         break;
//     }
//   });
// duration: 571.563;
// percent: 0.113;
// seconds: 64.533;
