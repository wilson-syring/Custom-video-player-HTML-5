//element selectors
const player = document.querySelector('.player');
const toggle = player.querySelector('.toggle');
const ranges = player.querySelectorAll('.player__slider');
const progress = player.querySelector('.progress');
const progressBar = player.querySelector('.progress__filled');
const video = player.querySelector('.viewer');
const skipButtons = player.querySelectorAll('[data-skip]');

//function for toggling the play and pause on click
function togglePlay() {
    if (video.paused) {
        video.play();
    } else {
        video.pause();
    }
}

//function for toggling play and puse icons on click
function updateButton() {
    const icon = this.paused ? '►' : '❚ ❚';
    toggle.textContent = icon;
}

//function for skipping
function skip() {
    console.log(this.dataset.skip);
    video.currentTime += parseFloat(this.dataset.skip);
}

//function for the range selectors
function rangeUpdate() {
    video[this.name] = this.value;
}

//function for handling the progress bar
function handleProgress(){
const percent = (video.currentTime / video.duration) * 100;
progressBar.style.flexBasis = `${percent}%`;
}

//function for changing video time index to match the click event on the progress bar
function scrub(e){
const scrubTime = (e.offsetX / progress.offsetWidth) * video.duration;
video.currentTime = scrubTime;
}

//event listeners
video.addEventListener('click', togglePlay);
video.addEventListener('play', updateButton);
video.addEventListener('pause', updateButton);
video.addEventListener('timeupdate',handleProgress);
toggle.addEventListener('click', togglePlay);
skipButtons.forEach(button => button.addEventListener('click', skip));
ranges.forEach(range => range.addEventListener('change', rangeUpdate));
ranges.forEach(range => range.addEventListener('mousemove', rangeUpdate));
let mousedown = false;
progress.addEventListener('click', scrub);
progress.addEventListener('mousemove', (e) => mousedown && scrub(e));
progress.addEventListener('mousedown', ()=> mousedown = true);
progress.addEventListener('mouseup', ()=> mousedown = false);