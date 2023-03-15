//element selectors
const player = document.querySelector('.player');
const toggle = player.querySelector('.toggle');
const ranges = player.querySelector('.player__slider');
const progress = player.querySelector('.progress');
const progressBar = player.querySelector('.progress__filled');
const video = player.querySelector('.viewer');
const skipButtons = player.querySelectorAll('[data-skip]');

//function for toggling the play and pause on click
function togglePlay(){
    if (video.paused){
        video.play();
    } else {
        video.pause();
    }
}

//function for toggling play and puse icons on click
function updateButton(){
    const icon = this.paused ? '►' : '❚ ❚';
    toggle.textContent = icon;
}
//function for skipping
function skip(){
    console.log(this.dataset.skip);
    video.currentTime += parseFloat(this.dataset.skip);
}

//event listeners
video.addEventListener('click', togglePlay);
video.addEventListener('play', updateButton);
video.addEventListener('pause', updateButton);
toggle.addEventListener('click',togglePlay);
skipButtons.forEach(button => button.addEventListener('click',skip));