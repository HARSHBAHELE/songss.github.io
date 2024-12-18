let audioElement = new Audio('1.mp3')
let songIndex = 0;
let songs = [
    {songsName:"Namo Namo ji Shankara",filePath:"1.mp3"},
    {songsName:"Ujjain Me Pahochu Too",filePath:"2.mp3"},
    {songsName:"Mahakal Ki Gulami",filePath:"3.mp3"},
    {songsName:"Jai kal Mahakal",filePath:"4.mp3"},
    {songsName:"Diwana Hu Mahakal ka",filePath:"5.mp3"},
    {songsName:"Bhala",filePath:"6.mp3"},
    {songsName:"Shish Nawata hu",filePath:"7.mp3"},
    {songsName:"Shiv Sama Rahe",filePath:"8.mp3"},
    {songsName:"Devo k Dev",filePath:"9.mp3"},
    {songsName:"Parvati Boli Shankar se",filePath:"10.mp3"},
    {songsName:"Bagad Bam Bam",filePath:"11.mp3"},
];
let preivious = document.getElementById("preivios")
let next = document.getElementById("next")
let masterplay = document.getElementById("masterplay");
let myProgersbar = document.getElementById("myProgressBar")
let songItems = Array.from(document.querySelector(".songItem"));
let songnaa = document.querySelector('.songnamee');

masterplay.addEventListener('click',()=> {
    if(audioElement.paused || audioElement.currentTime<=0) {
        audioElement.play();
        songnaa.innerText="Namo Namo ji Shankara"
        masterplay.classList.remove('bx-play-circle');
        masterplay.classList.add('bx-pause-circle');
        console.log("bpookm")
    } else {
        audioElement.pause();
        masterplay.classList.remove('bx-pause-circle');
        masterplay.classList.add('bx-play-circle');
    }
})
songItems.forEach((element,i)=> {
   
})
audioElement.addEventListener("timeupdate",()=> {
    let progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
    myProgersbar.value = progress;
});
myProgersbar.addEventListener("change",()=> {
    audioElement.currentTime = myProgersbar.value*audioElement.duration/100;
})
const makeAllplays=()=> {
    Array.from(document.getElementsByClassName('songItemplay')).forEach((element)=> {
        element.classList.remove('bx-pause-circle')
        element.classList.add('bx-play-circle')
})
}
Array.from(document.getElementsByClassName('songItemplay')).forEach((element)=> {
    element.addEventListener("click",(e)=> {
        makeAllplays();
        songIndex = parseInt(e.target.id)
        e.target.classList.remove('bx-play-circle');
        e.target.classList.add('bx-pause-circle');
        audioElement.src=`${songIndex+1}.mp3`;
        songnaa.innerText=songs[songIndex].songsName;
        audioElement.currentTime = 0;
        audioElement.play();
        masterplay.classList.remove('bx-play-circle');
        masterplay.classList.add('bx-pause-circle');
    })
})
next.addEventListener("click",()=> {
    if(songIndex>=10) {
        songIndex=0;
    } else {
        songIndex+=1;
    }
    audioElement.src=`${songIndex+1}.mp3`;
    songnaa.innerText=songs[songIndex].songsName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterplay.classList.remove('bx-play-circle');
    masterplay.classList.add('bx-pause-circle');
})
preivious.addEventListener('click',()=> {
    if(songIndex<=0) {
        songIndex=10;
    } else {
        songIndex-=1;
    }
    audioElement.src=`${songIndex+1}.mp3`;
    songnaa.innerText= songs[songIndex].songsName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterplay.classList.remove('bx-play-circle');
    masterplay.classList.add('bx-pause-circle');
})