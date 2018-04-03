{
  //adding click handler that targets play-pause button and call play.playPause() function in pla.js
  $('button#play-pause').on('click', function() {
    // player.playPause();
    helper.playPauseAndUpdate();
//  adding  `playState` attribute to play/pause button then it will trigger css to react accordingly
  $(this).attr('playState', player.playState);
  });

  $('button#next').on('click', function() {
  //check if song is playing first, or else the `next track` button wouldn't work.
  if (player.playState !== 'playing') { return; };
//indexOf() method searches the array Player in player.js for a specific item currentlyPlaying and return its position
  const currentSongIndex = album.songs.indexOf(player.currentlyPlaying);
  const nextSongIndex = currentSongIndex + 1;

  //if there is no more songs left the next Track button wouldn't work
  if (nextSongIndex >= album.songs.length) { return; }

  const nextSong = album.songs[nextSongIndex];
  //apply playPause button to the nextSong
  // player.playPause(nextSong);
  helper.playPauseAndUpdate(nextSong);
});

  $('button#previous').on('click', function() {
    if(player.playState !== 'playing') { return; };
    //we need to define currentSongIndex here again since it is not defined in this block
    const currentSongIndex = album.songs.indexOf(player.currentlyPlaying);
    const previousSongIndex = currentSongIndex - 1;

    if (previousSongIndex < 0) { return; }
    const previousSong = album.songs[previousSongIndex];
    // player.playPause(previousSong);
    helper.playPauseAndUpdate(previousSong);
  });

  $('#time-control input').on('input', function (event) {
    player.skipTo(event.target.value);
  });

  $('#volume-control input').on('input', function (event) {
    player.setVolume(event.target.value);
  });

  setInterval ( () => {
// if the song is not the currentlyPlaying song get out of the function
   if (player.playState !== 'playing') { return; }
   const currentTime = player.getTime();
   const duration = player.getDuration();
   const percent = (currentTime / duration) * 100;
   // const currentSongIndex = album.songs.indexOf(player.currentlyPlaying);
   // const currentSong = album.songs[currentSongIndex];
   // helper.playPauseAndUpdate.currentSong
   // console.log(currentSong);
// time-control is a class from <section>, current-time is an id under time-control
   $('#time-control .current-time').text(currentTime);
   $('#time-control input').val(percent);
   $('#volume-control input').val();
   // $('#time-control .total-time').text(duration);
   // val(); jQuery method is accessing input value of form elements
   // 1000 is the the number of milliseconds between intervals. The callback function will execute once every second.
  }, 1000);

}
