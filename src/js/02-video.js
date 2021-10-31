import Player from '@vimeo/player';

const iframe = document.querySelector('iframe');
const player = new Vimeo.Player(iframe);
// const player = new Player(iframeEl);
// let timeOnPlayer = 0;
const onPlay = function (data) {
  console.log(data);
  timeOnPlayer = data.seconds;
  console.log(timeOnPlayer);
};
const callback = function (data) {
  const timeStopPlayer = data.seconds;
  console.log(timeStopPlayer);
  console.log(player.setCurrentTime);
  player.setCurrentTime(timeStopPlayer).then(function (timeupdate) {
    console.log(timeupdate);
    console.log(player.setCurrentTime);
  });
};
const onPlayInput = function () {
  //   iframe[this.name] = this.value;
  console.log(iframe[data.seconds]);
  console.log(data.seconds);
};
player.on('play', onPlay);
player.on('input', onPlayInput);
player.on('pause', callback);
// player.off('play', onPlay);

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
