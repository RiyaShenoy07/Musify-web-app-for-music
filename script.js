console.log("Welcome to Riyafy")
let songIndex = 0;
let audioElement = new Audio('songs/schoolbirds.mp3');
let masterPlay = document.getElementById('masterPlay');
let masterSongName = document.getElementById('masterSongName');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let songItems = Array.from(document.getElementsByClassName('songItem'));

let songs=[
    {songName : "School rooftop - (Hisohkah)", filePath: "songs/schoolbirds.mp3", coverPath:"school1.jpg"},
    {songName : "90s Fav- Call me", filePath: "songs/callme.mp3", coverPath:"call.jpg"},
    {songName : "Instupendo- Comfort chain", filePath: "songs/chain.mp3", coverPath:"comfort.jpg"},
    {songName : "NCS- disco", filePath: "songs/ncs.mp3", coverPath:"disco.jpg"},
    {songName : "Apki nazro- (Anpad)", filePath: "songs/nazro.mp3", coverPath:"apki.jpg"},
    {songName : "Tera jana- (Anari)", filePath: "songs/tera.mp3", coverPath:"anari.jpg"},
    {songName : "Ajib dasta hai yeh", filePath: "songs/ajib.mp3", coverPath:"dil.jpg"},
    {songName : "Jaane jaan o meri jane jaan", filePath: "songs/jaan.mp3", coverPath:"sanam.jpg"}
          ]
   
songItems.forEach((element, i)=>{
    //console.log(element, i);
    element.getElementsByTagName("img")[0].src=songs[i].coverPath;
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName;
})




   masterPlay.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity = 1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity = 0;
    }
   })
   //listen to event
   audioElement.addEventListener('timeupdate', ()=>{
    console.log('timeupdate');
    progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
    console.log(progress);
    myProgressBar.value = progress;
    })
myProgressBar.addEventListener('change', ()=>{
    audioElement.currentTime= myProgressBar.value*audioElement.duration/100;
})

const makeAllPlays = ()=>{
    //e.target.classList.add('fa-pause-circle');
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');
    })
}

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element) => {
    element.addEventListener('click', (e) => {
        makeAllPlays();
        songIndex = parseInt(e.target.id) - 1; // Match array index (assuming IDs are 1-based)
        masterSongName.innerText=songs[songIndex].songName;
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');

        // Use the filePath from the songs array
        audioElement.src = songs[songIndex].filePath;

        audioElement.currentTime = 0;
        audioElement.play();
        gif.style.opacity = 1;
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
    });
});

document.getElementById('next').addEventListener('click', ()=>{
if(songIndex>=8){
songIndex = 0;
}
else{
    songIndex+=1;
}
audioElement.src = songs[songIndex].filePath;
masterSongName.innerText=songs[songIndex].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
})
document.getElementById('previous').addEventListener('click', ()=>{
    if(songIndex<0){
    songIndex = 0;
    }
    else{
        songIndex-=1;
    }
    audioElement.src = songs[songIndex].filePath;
    masterSongName.innerText=songs[songIndex].songName;
            audioElement.currentTime = 0;
            audioElement.play();
            masterPlay.classList.remove('fa-play-circle');
            masterPlay.classList.add('fa-pause-circle');
    })







