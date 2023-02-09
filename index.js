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
let song = new Audio("./Songs/m1.mpeg");
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