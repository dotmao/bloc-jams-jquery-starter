// it defines Helper class then instantiates it and stores the instance in a const.
class Helper {
    prettyTime(timeInSeconds){
      const min = Math.floor( timeInSeconds / 60 );
      const sec = Math.floor( timeInSeconds - min * 60);
      return `${min}:${sec}`;
    }

  playPauseAndUpdate (song) {
    player.playPause(song);
    const duration = player.currentlyPlaying.duration;
    $('#time-control .total-time').text(this.prettyTime(duration));
  }


}
const helper = new Helper();
