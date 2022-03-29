//DOM get element by id
const video = document.getElementById("video");
const play = document.getElementById("play");
const stops = document.querySelector("#stop");
const progress = document.querySelector("#progress");
const timestamp = document.getElementById("timestamp");

// Event listener for play/pause
video.addEventListener("click", toggleVideoStatus);
video.addEventListener("pause", updatePlayIcon);
video.addEventListener("play", updatePlayIcon);
video.addEventListener("timeupdate", updateProgress);

play.addEventListener("click", toggleVideoStatus);
stops.addEventListener("click", stopVideo);
progress.addEventListener("change", updateVideoProgress);

// Play and Pause video
function toggleVideoStatus() {
  if (video.paused) {
    video.play();
  } else {
    video.pause();
  }
}

// Stop video
function stopVideo() {
  video.currentTime = 0;
  video.pause();
}

// Update play and pause icon
function updatePlayIcon() {
  const icon = this.paused ? "fa fa-play fa-2x" : "fa fa-pause fa-2x";
  play.innerHTML = `<i class="${icon}"></i>`;
}

// Update video Progress
function updateVideoProgress() {
  video.currentTime = (+progress.value * video.duration) / 100;
}

// Update progress bar and timestamp
function updateProgress() {
  progress.value = (video.currentTime / video.duration) * 100;

  // Get minutes
  let mins = Math.floor(video.currentTime / 60);
  if (mins < 10) {
    mins = "0" + String(mins);
  }

  let secs = Math.floor(video.currentTime % 60);
  if (secs < 10) {
    secs = "0" + String(secs);
  }

  timestamp.innerText = `${mins}:${secs}`;
}
