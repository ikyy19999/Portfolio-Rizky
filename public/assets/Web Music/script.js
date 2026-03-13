// Lagu Default
let songs = [
    {
        title: "Apa Mungkin",
        artist: "Bernadya",
        src: "./music/spotifydown.com - Apa Mungkin copy.mp3",
        image: "./image/Apa Mungkin.jpg"
    },
    {
        title: "Berlari",
        artist: "Bernadya",
        src: "./music/spotifydown.com - Berlari.mp3",
        image: "./image/Berlari.jpg"
    },
    {
        title: "Kata Mereka Ini Berlebihan",
        artist: "Bernadya",
        src: "./music/spotifydown.com - Kata Mereka Ini Berlebihan.mp3",
        image: "./image/Kata Mereka Ini Berlebihan.jpg"
    },
    {
        title: "Kini Mereka Tahu",
        artist: "Bernadya",
        src: "./music/spotifydown.com - Kini Mereka Tahu.mp3",
        image: "./image/Kini Mereka Tahu.jpg"
    },
    {
        title: "Lama-Lama",
        artist: "Bernadya",
        src: "./music/spotifydown.com - Lama-Lama.mp3",
        image: "./image/Berlari.jpg"
    },
    {
        title: "Masa Sepi",
        artist: "Bernadya",
        src: "./music/spotifydown.com - Masa Sepi.mp3",
        image: "./image/Apa Mungkin.jpg"
    },
    {
        title: "Satu Bulan",
        artist: "Bernadya",
        src: "./music/spotifydown.com - Satu Bulan.mp3",
        image: "./image/Apa Mungkin.jpg"
    }
];

// Tambahkan lagu kustom dari localStorage
songs = [...songs, ...loadSongsFromLocalStorage()];

const audioPlayer = document.getElementById('audio-player');
const albumImage = document.getElementById('album-image');
const songTitle = document.getElementById('song-title');
const artistName = document.getElementById('artist-name');
const playPauseBtn = document.getElementById('play-pause-btn');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');
const progressSlider = document.getElementById('progress-slider');
const currentTimeEl = document.getElementById('current-time');
const totalTimeEl = document.getElementById('total-time');
const songList = document.getElementById('song-list');
const repeatBtn = document.getElementById('repeat-btn');
const backButton = document.querySelector('.btn-back'); // Tombol kembali

let currentSongIndex = 0;
let isPlaying = false;
let isRepeating = false;

// Fungsi untuk memuat lagu dari localStorage
function loadSongsFromLocalStorage() {
    const storedSongs = localStorage.getItem('customSongs');
    return storedSongs ? JSON.parse(storedSongs) : [];
}

// Fungsi untuk menyimpan lagu ke localStorage
function saveSongsToLocalStorage(songs) {
    localStorage.setItem('customSongs', JSON.stringify(songs));
}

// Fungsi untuk memperbarui playlist di UI
function updatePlaylist() {
    songList.innerHTML = '';
    songs.forEach((song, index) => {
        const li = document.createElement('li');
        li.textContent = `${song.title} - ${song.artist}`;
        li.addEventListener('click', () => playSong(index));
        songList.appendChild(li);
    });
}

// Fungsi untuk memutar lagu
function playSong(index) {
    const song = songs[index];
    audioPlayer.src = song.src;
    albumImage.src = song.image;
    songTitle.textContent = song.title;
    artistName.textContent = song.artist;
    audioPlayer.play();
    isPlaying = true;
    playPauseBtn.innerHTML = '<i class="ri-pause-fill"></i>';
    currentSongIndex = index;
}

// Fungsi untuk toggle play/pause
playPauseBtn.addEventListener('click', () => {
    if (isPlaying) {
        audioPlayer.pause();
        isPlaying = false;
        playPauseBtn.innerHTML = '<i class="ri-play-fill"></i>';
    } else {
        audioPlayer.play();
        isPlaying = true;
        playPauseBtn.innerHTML = '<i class="ri-pause-fill"></i>';
    }
});

// Fungsi untuk memutar lagu sebelumnya
prevBtn.addEventListener('click', () => {
    currentSongIndex = (currentSongIndex - 1 + songs.length) % songs.length;
    playSong(currentSongIndex);
});

// Fungsi untuk memutar lagu berikutnya
nextBtn.addEventListener('click', () => {
    currentSongIndex = (currentSongIndex + 1) % songs.length;
    playSong(currentSongIndex);
});

// Fungsi untuk memperbarui progress slider
audioPlayer.addEventListener('timeupdate', () => {
    const progress = (audioPlayer.currentTime / audioPlayer.duration) * 100;
    progressSlider.value = progress;
    currentTimeEl.textContent = formatTime(audioPlayer.currentTime);
    totalTimeEl.textContent = formatTime(audioPlayer.duration);
});

// Fungsi untuk mengubah waktu berdasarkan slider
progressSlider.addEventListener('input', () => {
    const time = (progressSlider.value / 100) * audioPlayer.duration;
    audioPlayer.currentTime = time;
});

// Fungsi untuk format waktu
function formatTime(time) {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds < 10 ? '0' + seconds : seconds}`;
}

// Fungsi untuk toggle repeat button
repeatBtn.addEventListener('click', () => {
    isRepeating = !isRepeating;
    repeatBtn.classList.toggle('active', isRepeating);
    if (isRepeating) {
        audioPlayer.loop = true;
    } else {
        audioPlayer.loop = false;
    }
});

// Fungsi untuk kembali ke halaman sebelumnya (index.html)
backButton.addEventListener('click', function() {
    window.location.href = '/'; // Ganti dengan path yang sesuai
});

// Inisialisasi playlist dan memulai lagu pertama
updatePlaylist();
playSong(currentSongIndex);
