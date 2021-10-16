const playBtn = document.querySelector('#play');
const nextBtn = document.querySelector('#next');
const prevBtn = document.querySelector('#prev');
const audio = document.querySelector('#audio');
const coverImg = document.querySelector('.cover');
const artistName = document.querySelector('#artist-name');
const songName = document.querySelector('#song-name');
const progress = document.querySelector('.progress');
const musicContainer = document.querySelector('.music-container');
const progressBar = document.querySelector('.progress-bar');



let songs = ['All-that-matters', 'Onaga', 'Obinasom', 'Running-to-you', 'Fem', 'Essence', 'Atofarati-Bi-Oke', 'Nara', 'Roju', 'Hello'];

let artistNames = ['GUC', 'Timgodfrey ft JJ Hariston', 'Mercy Chinwo', 'Chike ft Simi', 'Davido', 'Wizkid ft Tems', 'Mr M & Revelation', 'Timgodfrey', 'Chike', 'Adele'];


let songNumber = 0;

function playSongs(song){
    coverImg.src = `images/${song}.jpg`;
    audio.src = `music/${song}.mp3`;
    artistName.textContent = artistNames[songNumber];
    songName.textContent = song;
}

playSongs(songs[songNumber]);



function nextSong(){
    songNumber++;
    if(songNumber > songs.length - 1){
        songNumber = 0;
    }

    playSongs(songs[songNumber]);

    const playing = musicContainer.classList.contains('play');
    if(playing){
        audio.play()
    }
}


function prevSongs(){
    songNumber--;
    if(songNumber < 0){
        songNumber = songs.length - 1;
    }
    playSongs(songs[songNumber])


    const playing = musicContainer.classList.contains('play');
    if(playing){
        audio.play()
    }
}



function play(){
    musicContainer.classList.add('play');
    playBtn.querySelector('i.fa').classList.add('fa-pause')


    audio.play()
}

function pauseSong(){
    musicContainer.classList.remove('play');
    playBtn.querySelector('i.fa').classList.remove('fa-pause');
    playBtn.querySelector('i.fa').classList.add('fa-play');


    audio.pause()
    
}

// event Listeners
playBtn.addEventListener('click', () =>{
    const isPlaying = musicContainer.classList.contains('play');
    
    if(isPlaying){
        pauseSong()
    }

    else{
        play()
    }
});

nextBtn.addEventListener('click', () => {
    nextSong()
});

prevBtn.addEventListener('click', () =>{
    prevSongs()
});

function updateProgress(e){
   const {currentTime,duration} = e.srcElement;
   const audioTime = currentTime / duration * 100;

   progress.style.width = `${audioTime}%`;

}


function setProgress(e){
    const width = this.clientWidth;
    const clickX = e.offsetX;
    const duration = audio.duration;

    audio.currentTime = (clickX / width) * duration;
}

audio.addEventListener('timeupdate', updateProgress);
progressBar.addEventListener('click', setProgress);


audio.addEventListener('ended', nextSong)








