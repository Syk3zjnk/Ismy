let currentPhotoIndex = 0;
const photos = ['foto1.jpg', 'foto2.jpg', 'foto3.jpg'];

const audio = document.getElementById('audio');
const currentTimeElement = document.getElementById('current-time');
const durationElement = document.getElementById('duration');
const photoElement = document.getElementById('photo');

audio.onloadedmetadata = () => durationElement.textContent = formatTime(audio.duration);

audio.ontimeupdate = () => currentTimeElement.textContent = formatTime(audio.currentTime);

function formatTime(seconds) {
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
}

function changePhoto(direction) {
    currentPhotoIndex = direction === 'next'
        ? (currentPhotoIndex + 1) % photos.length
        : (currentPhotoIndex - 1 + photos.length) % photos.length;
    
    photoElement.src = photos[currentPhotoIndex];
}
