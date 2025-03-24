document.addEventListener('DOMContentLoaded', () => {
    let currentPhotoIndex = 0;
    const photos = ['foto1.jpg', 'foto2.jpg', 'foto3.jpg', 'foto4.jpg', 'foto5.jpg'];

    const audio = document.getElementById('audio');
    const currentTimeElement = document.getElementById('current-time');
    const durationElement = document.getElementById('duration');
    const photoElement = document.getElementById('photo');

    // Mostra a duração total da música
    audio.onloadedmetadata = () => durationElement.textContent = formatTime(audio.duration);

    // Atualiza o tempo atual da música
    audio.ontimeupdate = () => currentTimeElement.textContent = formatTime(audio.currentTime);

    // Formata o tempo em minutos e segundos
    function formatTime(seconds) {
        const mins = Math.floor(seconds / 60);
        const secs = Math.floor(seconds % 60);
        return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
    }

    // Muda a foto no carrossel
    window.changePhoto = (direction) => {
        if (direction === 'next') {
            currentPhotoIndex = (currentPhotoIndex + 1) % photos.length;
        } else if (direction === 'prev') {
            currentPhotoIndex = (currentPhotoIndex - 1 + photos.length) % photos.length;
        }
        
        console.log(`Imagem atual: ${photos[currentPhotoIndex]} (Índice: ${currentPhotoIndex})`);
        photoElement.src = photos[currentPhotoIndex];
    };
});
