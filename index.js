let songs = [
  {
    songName: "Believer",
    logoPath: "./Images/img1",
    songPath: "Songs/m1.mpeg"
  },
  {
    songName: "Let Me Love You",
    logoPath: "./Images/img2",
    songPath: "Songs/m2.mpeg"
  },
  {
    songName: "Unstoppable",
    logoPath: "./Images/img3",
    songPath: "Songs/m3.mpeg"
  },
  {
    songName: "Memories",
    logoPath: "./Images/img4",
    songPath: "Songs/m4.mpeg"
  },
  {
    songName: "Bella Ciao",
    logoPath: "./Images/img5",
    songPath: "Songs/m5.mpeg"
  },
];

let indexOfSong = 0;
let song = new Audio("./Songs/m5.mpeg");
// song.play();
let songProgressBar = document.getElementById("song-progress-bar");
let bottomPlayPauseBtn = document.getElementById("bottomBtn");
let gif = document.getElementById("gif");

bottomPlayPauseBtn.addEventListener("click", () => {
  if (song.paused == true || song.duration <= 0) {
    song.play();
    bottomPlayPauseBtn.classList.remove("fa-play");
    bottomPlayPauseBtn.classList.add("fa-pause");
    gif.style.opacity = 1;
  }
  else {
    song.pause();
    bottomPlayPauseBtn.classList.remove("fa-pause");
    bottomPlayPauseBtn.classList.add("fa-play");
    gif.style.opacity = 0;
  }
});

song.addEventListener("timeupdate", () => {
  // console.log(song.currentTime);
  // Now we'll check , how much percentage song was played out of 100.
  // formula for that - progressInPercent = currentTime/duration*100
  let songProgress = parseInt((song.currentTime / song.duration) * 100);
  // console.log(songProgress);
  songProgressBar.value = songProgress;
});


// we'll add change event on progressbar, so If we move progress bar the song will play from there.
// for that , 1st we have a time of song played in percent , but we don't want in percent, so we'll convert it again.
// formula - currentTime = (progressBarValue * durationOfSong) /100
songProgressBar.addEventListener('change', () => {
  song.currentTime = (songProgressBar.value * song.duration) / 100;
})