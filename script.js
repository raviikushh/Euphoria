console.log("Welcome to Musixx");


let songs = [
    {songName:"Punjabiyan di dhee" ,filePath: "song1.mp3", coverPath: "cover1.jpg"},
    {songName:"Mast Nazro se" ,filePath: "song2.mp3", coverPath: "cover2.jpg"},
    {songName:"Tu hi das de" ,filePath: "song3.mp3", coverPath: "cover3.jpg"},
]


// audioElement.play(); For Song 1 (Pubjabiyan di dhee)
let songIndex=0;
let audioElement = new Audio('song1.mp3');
let masterPlay= document.getElementById('masterPlay')
let myProgressBar = document.getElementById('myProgressBar');
let gif= document.getElementById('gif')

//handle play/pause
masterPlay.addEventListener('click',()=>{

    audioElement2.pause();
    masterPlay2.classList.remove('fa-pause-circle');
    masterPlay2.classList.add('fa-play-circle');
    gif2.style.opacity = 0;
    audioElement3.pause();
    masterPlay3.classList.remove('fa-pause-circle');
    masterPlay3.classList.add('fa-play-circle');
    gif3.style.opacity = 0;
    audioElement4.pause();
    masterPlay4.classList.remove('fa-pause-circle');
    masterPlay4.classList.add('fa-play-circle');
    gif4.style.opacity = 0;
    audioElement5.pause();
    masterPlay5.classList.remove('fa-pause-circle');
    masterPlay5.classList.add('fa-play-circle');
    gif5.style.opacity = 0;
    audioElement6.pause();
    masterPlay6.classList.remove('fa-pause-circle');
    masterPlay6.classList.add('fa-play-circle');
    gif6.style.opacity = 0;

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
//listen event
audioElement.addEventListener('timeupdate', ()=>{ 
    // Update Seekbar
    progress = parseInt((audioElement.currentTime/audioElement.duration)* 100); 
    myProgressBar.value = progress;
})

myProgressBar.addEventListener('change', ()=>{
    audioElement.currentTime = myProgressBar.value * audioElement.duration/100;
})


// ***************************************************************************************************
//For Song 2(Mast Nazro se)

let audioElement2 = new Audio('song2.mp3');
let masterPlay2= document.getElementById('masterPlay2')
let myProgressBar2 = document.getElementById('myProgressBar2');
let gif2= document.getElementById('gif2')

//handle play/pause *2
masterPlay2.addEventListener('click',()=>{

    audioElement3.pause();
    masterPlay3.classList.remove('fa-pause-circle');
    masterPlay3.classList.add('fa-play-circle');
    gif3.style.opacity = 0;
    audioElement.pause();
    masterPlay.classList.remove('fa-pause-circle');
    masterPlay.classList.add('fa-play-circle');
    gif.style.opacity = 0;
    audioElement4.pause();
    masterPlay4.classList.remove('fa-pause-circle');
    masterPlay4.classList.add('fa-play-circle');
    gif4.style.opacity = 0;
    audioElement5.pause();
    masterPlay5.classList.remove('fa-pause-circle');
    masterPlay5.classList.add('fa-play-circle');
    gif5.style.opacity = 0;
    audioElement6.pause();
    masterPlay6.classList.remove('fa-pause-circle');
    masterPlay6.classList.add('fa-play-circle');
    gif6.style.opacity = 0;
    
    if(audioElement2.paused || audioElement2.currentTime<=0){
        audioElement2.play();
        masterPlay2.classList.remove('fa-play-circle');
        masterPlay2.classList.add('fa-pause-circle');
        gif2.style.opacity = 1;
    }
    else{
        audioElement2.pause();
        masterPlay2.classList.remove('fa-pause-circle');
        masterPlay2.classList.add('fa-play-circle');
        gif2.style.opacity = 0;
    }
})
//listen event
audioElement2.addEventListener('timeupdate', ()=>{ 
    // Update Seekbar
    progress = parseInt((audioElement2.currentTime/audioElement2.duration)* 100); 
    myProgressBar2.value = progress;
})

myProgressBar2.addEventListener('change', ()=>{
    audioElement2.currentTime = myProgressBar2.value * audioElement2.duration/100;
})


// ***********************************************************************************************
//For Song 3(Tu hi das de)
let audioElement3 = new Audio('song3.mp3');
let masterPlay3= document.getElementById('masterPlay3')
let myProgressBar3 = document.getElementById('myProgressBar3');
let gif3= document.getElementById('gif3')

//Play pause handle 

masterPlay3.addEventListener('click',()=>{
    audioElement2.pause();
    masterPlay2.classList.remove('fa-pause-circle');
    masterPlay2.classList.add('fa-play-circle');
    gif2.style.opacity = 0;
    audioElement.pause();
    masterPlay.classList.remove('fa-pause-circle');
    masterPlay.classList.add('fa-play-circle');
    gif.style.opacity = 0;
    audioElement4.pause();
    masterPlay4.classList.remove('fa-pause-circle');
    masterPlay4.classList.add('fa-play-circle');
    gif4.style.opacity = 0;
    audioElement5.pause();
    masterPlay5.classList.remove('fa-pause-circle');
    masterPlay5.classList.add('fa-play-circle');
    gif5.style.opacity = 0;
    audioElement6.pause();
    masterPlay6.classList.remove('fa-pause-circle');
    masterPlay6.classList.add('fa-play-circle');
    gif6.style.opacity = 0;

    if(audioElement3.paused || audioElement3.currentTime<=0){
        audioElement3.play();
        masterPlay3.classList.remove('fa-play-circle');
        masterPlay3.classList.add('fa-pause-circle');
        gif3.style.opacity = 1;
    }
    else{
        audioElement3.pause();
        masterPlay3.classList.remove('fa-pause-circle');
        masterPlay3.classList.add('fa-play-circle');
        gif3.style.opacity = 0;
    }
})
//listen event
audioElement3.addEventListener('timeupdate', ()=>{ 
    // Update Seekbar
    progress = parseInt((audioElement3.currentTime/audioElement3.duration)* 100); 
    myProgressBar3.value = progress;
})

myProgressBar3.addEventListener('change', ()=>{
    audioElement3.currentTime = myProgressBar3.value * audioElement3.duration/100;
})



//*************************************************************************************** *
//For Song 4 (Har Har Sambhu)
let audioElement4 = new Audio('song4.mp3');
let masterPlay4= document.getElementById('masterPlay4')
let myProgressBar4 = document.getElementById('myProgressBar4');
let gif4= document.getElementById('gif4')

//Play pause handle 

masterPlay4.addEventListener('click',()=>{
    audioElement2.pause();
    masterPlay2.classList.remove('fa-pause-circle');
    masterPlay2.classList.add('fa-play-circle');
    gif2.style.opacity = 0;
    audioElement.pause();
    masterPlay.classList.remove('fa-pause-circle');
    masterPlay.classList.add('fa-play-circle');
    gif.style.opacity = 0;
    audioElement3.pause();
    masterPlay3.classList.remove('fa-pause-circle');
    masterPlay3.classList.add('fa-play-circle');
    gif3.style.opacity = 0;
    audioElement5.pause();
    masterPlay5.classList.remove('fa-pause-circle');
    masterPlay5.classList.add('fa-play-circle');
    gif5.style.opacity = 0;
    audioElement6.pause();
    masterPlay6.classList.remove('fa-pause-circle');
    masterPlay6.classList.add('fa-play-circle');
    gif6.style.opacity = 0;

    if(audioElement4.paused || audioElement4.currentTime<=0){
        audioElement4.play();
        masterPlay4.classList.remove('fa-play-circle');
        masterPlay4.classList.add('fa-pause-circle');
        gif4.style.opacity = 1;
    }
    else{
        audioElement4.pause();
        masterPlay4.classList.remove('fa-pause-circle');
        masterPlay4.classList.add('fa-play-circle');
        gif4.style.opacity = 0;
    }
})
//listen event
audioElement4.addEventListener('timeupdate', ()=>{ 
    // Update Seekbar
    progress = parseInt((audioElement4.currentTime/audioElement4.duration)* 100); 
    myProgressBar4.value = progress;
})

myProgressBar4.addEventListener('change', ()=>{
    audioElement4.currentTime = myProgressBar4.value * audioElement4.duration/100;
})


//***************************************************************************************** */
//For Song 5(Harleys in Hawaii)
let audioElement5 = new Audio('song5.mp3');
let masterPlay5= document.getElementById('masterPlay5')
let myProgressBar5 = document.getElementById('myProgressBar5');
let gif5= document.getElementById('gif5')

//Play pause handle 

masterPlay5.addEventListener('click',()=>{
    audioElement2.pause();
    masterPlay2.classList.remove('fa-pause-circle');
    masterPlay2.classList.add('fa-play-circle');
    gif2.style.opacity = 0;
    audioElement.pause();
    masterPlay.classList.remove('fa-pause-circle');
    masterPlay.classList.add('fa-play-circle');
    gif.style.opacity = 0;
    audioElement3.pause();
    masterPlay3.classList.remove('fa-pause-circle');
    masterPlay3.classList.add('fa-play-circle');
    gif3.style.opacity = 0;
    audioElement4.pause();
    masterPlay4.classList.remove('fa-pause-circle');
    masterPlay4.classList.add('fa-play-circle');
    gif4.style.opacity = 0;
    audioElement6.pause();
    masterPlay6.classList.remove('fa-pause-circle');
    masterPlay6.classList.add('fa-play-circle');
    gif6.style.opacity = 0;

    if(audioElement5.paused || audioElement5.currentTime<=0){
        audioElement5.play();
        masterPlay5.classList.remove('fa-play-circle');
        masterPlay5.classList.add('fa-pause-circle');
        gif5.style.opacity = 1;
    }
    else{
        audioElement5.pause();
        masterPlay5.classList.remove('fa-pause-circle');
        masterPlay5.classList.add('fa-play-circle');
        gif5.style.opacity = 0;
    }
})
//listen event
audioElement5.addEventListener('timeupdate', ()=>{ 
    // Update Seekbar
    progress = parseInt((audioElement5.currentTime/audioElement5.duration)* 100); 
    myProgressBar5.value = progress;
})

myProgressBar5.addEventListener('change', ()=>{
    audioElement5.currentTime = myProgressBar5.value * audioElement5.duration/100;
})


// *********************************************************************************************
//For Song 6(Closer)
let audioElement6 = new Audio('song6.mp3');
let masterPlay6= document.getElementById('masterPlay6')
let myProgressBar6 = document.getElementById('myProgressBar6');
let gif6= document.getElementById('gif6')

//Play pause handle 

masterPlay6.addEventListener('click',()=>{
    audioElement2.pause();
    masterPlay2.classList.remove('fa-pause-circle');
    masterPlay2.classList.add('fa-play-circle');
    gif2.style.opacity = 0;
    audioElement.pause();
    masterPlay.classList.remove('fa-pause-circle');
    masterPlay.classList.add('fa-play-circle');
    gif.style.opacity = 0;
    audioElement3.pause();
    masterPlay3.classList.remove('fa-pause-circle');
    masterPlay3.classList.add('fa-play-circle');
    gif3.style.opacity = 0;
    audioElement4.pause();
    masterPlay4.classList.remove('fa-pause-circle');
    masterPlay4.classList.add('fa-play-circle');
    gif4.style.opacity = 0;
    audioElement5.pause();
    masterPlay5.classList.remove('fa-pause-circle');
    masterPlay5.classList.add('fa-play-circle');
    gif5.style.opacity = 0;

    if(audioElement6.paused || audioElement6.currentTime<=0){
        audioElement6.play();
        masterPlay6.classList.remove('fa-play-circle');
        masterPlay6.classList.add('fa-pause-circle');
        gif6.style.opacity = 1;
    }
    else{
        audioElement6.pause();
        masterPlay6.classList.remove('fa-pause-circle');
        masterPlay6.classList.add('fa-play-circle');
        gif6.style.opacity = 0;
    }
})
//listen event
audioElement6.addEventListener('timeupdate', ()=>{ 
    // Update Seekbar
    progress = parseInt((audioElement6.currentTime/audioElement6.duration)* 100); 
    myProgressBar6.value = progress;
})

myProgressBar6.addEventListener('change', ()=>{
    audioElement6.currentTime = myProgressBar6.value * audioElement6.duration/100;
})


// ****************************************************************************************
//For Playlist
const makeAllPlays = ()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');
    })
}

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click', (e)=>{ 

        makeAllPlays();
        songIndex = parseInt(e.target.id);
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
audioElement.src = `songs/${songIndex+1}.mp3`;
        masterSongName.innerText = songs[songIndex].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        gif.style.opacity = 1;
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');

    })
})

//next
