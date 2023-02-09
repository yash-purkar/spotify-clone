let songs = [
  {
    songName: "Believer",
    logoPath: "./Images/img1.jpg",
    songPath: "m1.mpeg"
  },
  {
    songName: "Let Me Love You",
    logoPath: "./Images/img2.jpg",
    songPath: "m2.mpeg"
  },
  {
    songName: "Unstoppable",
    logoPath: "./Images/img3.jpg",
    songPath: "m3.mpeg"
  },
  {
    songName: "Memories",
    logoPath: "./Images/img4.jpg",
    songPath: "m4.mpeg"
  },
  {
    songName: "Bella Ciao",
    logoPath: "./Images/img5.jpg",
    songPath: "m5.mpeg"
  },
];

let indexOfSong = 0;
let song = new Audio("./Songs/m1.mpeg");
// song.play();
let songProgressBar = document.getElementById("song-progress-bar");
let bottomPlayPauseBtn = document.getElementById("bottomBtn");
let gif = document.getElementById("gif");
let nextBtn = document.getElementById("next-btn");
let previousBtn = document.getElementById("previous-btn");
let allSongItems = Array.from(document.getElementsByClassName("songItem"));
// We have to make array to it for iterating using foreach() method.
// console.log(allSongItems);
// *******
let allPlayBtns = Array.from(document.getElementsByClassName("song-list-play"));
let bottomSongName = document.getElementById("bottom-song-name");

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
    removePrevPause();

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
});


// Next button
nextBtn.addEventListener("click", () => {
  if (indexOfSong >= 4) {
    indexOfSong = 0;
  }
  else {
    indexOfSong += 1;
  }
  song.src = `Songs/${songs[indexOfSong].songPath}`;
  song.currentTime = 0;
  song.play();
  bottomPlayPauseBtn.classList.remove('fa-play');
  bottomPlayPauseBtn.classList.add('fa-pause');
  bottomSongName.innerText = songs[indexOfSong].songName;
  gif.style.opacity = 1;
  //for handling buttons 
  removePrevPause();
  allPlayBtns[indexOfSong].classList.remove("fa-play");
  allPlayBtns[indexOfSong].classList.add("fa-pause");
});

//Previous button
previousBtn.addEventListener('click', () => {
  if (indexOfSong <= 0) {
    indexOfSong = 0;
  }
  else {
    indexOfSong -= 1;
  }
  song.src = `Songs/${songs[indexOfSong].songPath}`;
  song.currentTime = 0;
  song.play();
  bottomPlayPauseBtn.classList.remove('fa-play');
  bottomPlayPauseBtn.classList.add('fa-pause');
  bottomSongName.innerText = songs[indexOfSong].songName;
  gif.style.opacity = 1;
  // for handling buttons
  removePrevPause();
  allPlayBtns[indexOfSong].classList.remove("fa-play");
  allPlayBtns[indexOfSong].classList.add("fa-pause");
});


// Displaying song logo and song name from an array

allSongItems.forEach((element, i) => {
  element.getElementsByTagName("img")[0].src = songs[i].logoPath;
  element.getElementsByClassName("song-name")[0].innerText = songs[i].songName;
});
// We use [0] that means for selecting 1st img or span tag inside parent.


function removePrevPause() {
  allPlayBtns.forEach((element) => {
    element.classList.remove("fa-pause");
    element.classList.add("fa-play");
  })
}

// For playing the song on clicking on individual song button.
let btn = "play";
let currentIndex;
allPlayBtns.forEach((element, i) => {

  element.addEventListener("click", (e) => {
    // console.log(e.target);
    if (btn === "play") {
      removePrevPause();
      e.target.classList.remove("fa-play");
      e.target.classList.add("fa-pause");
      bottomPlayPauseBtn.classList.remove("fa-play");
      bottomPlayPauseBtn.classList.add("fa-pause")
      song.src = `./Songs/${songs[i].songPath}`
      song.play();
      btn = "pause";
      bottomSongName.innerText = songs[i].songName;
      gif.style.opacity = 1;
      currentIndex = i;
      indexOfSong = i;
    }
    else if (currentIndex !== i) {
      song.src = `./Songs/${songs[i].songPath}`
      removePrevPause();
      song.play();
      e.target.classList.remove("fa-play");
      e.target.classList.add("fa-pause");
      bottomSongName.innerText = songs[i].songName;
      gif.style.opacity = 1;
      indexOfSong = i;
    }

    else {
      e.target.classList.remove("fa-pause");
      e.target.classList.add("fa-play");
      bottomPlayPauseBtn.classList.remove("fa-pause");
      bottomPlayPauseBtn.classList.add("fa-play");
      song.pause();
      btn = "play";
      bottomSongName.innerText = songs[i].songName;
      gif.style.opacity = 0;
      indexOfSong = i;
    }

  });
})