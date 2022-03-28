//DOM get element by id
const video = document.getElementById("video");
const play = document.getElementById("play");
const stops = document.querySelector("#stop");
const progress = document.getElementById("progress");
const timestamp = document.getElementById("timestamp");

// Event listener for play/pause
video.addEventListener("click", toggleVideoStatus);
video.addEventListener("pause", updatePlayIcon);
video.addEventListener("play", updatePlayIcon);
video.addEventListener("click", toggleVideoStatus);

play.addEventListener("click", toggleVideoStatus);
stops.addEventListener("click", stopVideo);
// timestamp.addEventListener("timeupdate", updateProgress);
// progress.addEventListener("change", updateVideoProgress);

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

// function updatePlayIcon() {
//   if (video.paused) {
//     console.log("pause");
//     play.innerHTML = `<i class="fa fa-play fa-2x"></i>`;
//   } else {
//     console.log("play");
//     play.innerHTML = `<i class="fa fa-pause fa-2x"></i>`;
//   }
// }
function updatePlayIcon() {
  const icon = this.paused ? "fa fa-play fa-2x" : "fa fa-pause fa-2x";
  play.innerHTML = `<i class="${icon}"></i>`;
}
