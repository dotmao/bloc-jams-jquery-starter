// it defines Helper class then instantiates it and stores the instance in a const.
class Helper {
  playPauseAndUpdate (song) {
    player.playPause(song);
    const duration = player.currentlyPlaying.duration;
    $('#time-control .total-time').text(duration);
  }
//   prettyTime(timeInSeconds){
//     const min = math.floor( duration / 60 );
//     const sec = math.floor( duration - min * 60);
//   }
}
const helper = new Helper();
