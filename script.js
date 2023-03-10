console.log("Welcome to Euphoria Music");



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
    audioElement7.pause();
    masterPlay7.classList.remove('fa-pause-circle');
    masterPlay7.classList.add('fa-play-circle');
    gif7.style.opacity = 0;
    audioElement8.pause();
    masterPlay8.classList.remove('fa-pause-circle');
    masterPlay8.classList.add('fa-play-circle');
    gif8.style.opacity = 0;
    audioElement9.pause();
    masterPlay9.classList.remove('fa-pause-circle');
    masterPlay9.classList.add('fa-play-circle');
    gif9.style.opacity = 0;
    audioElement10.pause();
    masterPlay10.classList.remove('fa-pause-circle');
    masterPlay10.classList.add('fa-play-circle');
    gif10.style.opacity = 0;
    audioElement11.pause();
    masterPlay11.classList.remove('fa-pause-circle');
    masterPlay11.classList.add('fa-play-circle');
    gif11.style.opacity = 0;
    audioElement12.pause();
    masterPlay12.classList.remove('fa-pause-circle');
    masterPlay12.classList.add('fa-play-circle');
    gif12.style.opacity = 0;

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


// For AutoPlay Of Next Song

audioElement.addEventListener('ended', ()=>{
    //pause Current Song
    audioElement.pause();
    masterPlay.classList.remove('fa-pause-circle');
    masterPlay.classList.add('fa-play-circle');
    gif.style.opacity = 0;
    //Play Next Song 
    audioElement5.play();
    masterPlay5.classList.add('fa-pause-circle');
    masterPlay5.classList.remove('fa-play-circle');
    gif5.style.opacity = 1;
})

// ***************************************************************************************************
//For Song 2(Mast Nazro se)

let audioElement2 = new Audio('song2.mp3');
let masterPlay2= document.getElementById('masterPlay2')
let myProgressBar2 = document.getElementById('myProgressBar2');
let gif2= document.getElementById('gif2')

//handle play/pause *2
masterPlay2.addEventListener('click',()=>{

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
    audioElement6.pause();
    masterPlay6.classList.remove('fa-pause-circle');
    masterPlay6.classList.add('fa-play-circle');
    gif6.style.opacity = 0;
    audioElement7.pause();
    masterPlay7.classList.remove('fa-pause-circle');
    masterPlay7.classList.add('fa-play-circle');
    gif7.style.opacity = 0;
    audioElement8.pause();
    masterPlay8.classList.remove('fa-pause-circle');
    masterPlay8.classList.add('fa-play-circle');
    gif8.style.opacity = 0;
    audioElement9.pause();
    masterPlay9.classList.remove('fa-pause-circle');
    masterPlay9.classList.add('fa-play-circle');
    gif9.style.opacity = 0;
    audioElement10.pause();
    masterPlay10.classList.remove('fa-pause-circle');
    masterPlay10.classList.add('fa-play-circle');
    gif10.style.opacity = 0;
    audioElement11.pause();
    masterPlay11.classList.remove('fa-pause-circle');
    masterPlay11.classList.add('fa-play-circle');
    gif11.style.opacity = 0;
    audioElement12.pause();
    masterPlay12.classList.remove('fa-pause-circle');
    masterPlay12.classList.add('fa-play-circle');
    gif12.style.opacity = 0;
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

// For Autoplay of Next Song 

audioElement2.addEventListener('ended', ()=>{
    //pause Current Song
    audioElement2.pause();
    masterPlay2.classList.remove('fa-pause-circle');
    masterPlay2.classList.add('fa-play-circle');
    gif2.style.opacity = 0;
    //Play Next Song 
    audioElement3.play();
    masterPlay3.classList.add('fa-pause-circle');
    masterPlay3.classList.remove('fa-play-circle');
    gif3.style.opacity = 1;
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
    audioElement7.pause();
    masterPlay7.classList.remove('fa-pause-circle');
    masterPlay7.classList.add('fa-play-circle');
    gif7.style.opacity = 0;
    audioElement8.pause();
    masterPlay8.classList.remove('fa-pause-circle');
    masterPlay8.classList.add('fa-play-circle');
    gif8.style.opacity = 0;
    audioElement9.pause();
    masterPlay9.classList.remove('fa-pause-circle');
    masterPlay9.classList.add('fa-play-circle');
    gif9.style.opacity = 0;
    audioElement10.pause();
    masterPlay10.classList.remove('fa-pause-circle');
    masterPlay10.classList.add('fa-play-circle');
    gif10.style.opacity = 0;
    audioElement11.pause();
    masterPlay11.classList.remove('fa-pause-circle');
    masterPlay11.classList.add('fa-play-circle');
    gif11.style.opacity = 0;
    audioElement12.pause();
    masterPlay12.classList.remove('fa-pause-circle');
    masterPlay12.classList.add('fa-play-circle');
    gif12.style.opacity = 0;

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


// For Autoplay of Next Song 

audioElement3.addEventListener('ended', ()=>{
    //pause Current Song
    audioElement3.pause();
    masterPlay3.classList.remove('fa-pause-circle');
    masterPlay3.classList.add('fa-play-circle');
    gif3.style.opacity = 0;
    //Play Next Song 
    audioElement.play();
    masterPlay.classList.add('fa-pause-circle');
    masterPlay.classList.remove('fa-play-circle');
    gif.style.opacity = 1;
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
    audioElement7.pause();
    masterPlay7.classList.remove('fa-pause-circle');
    masterPlay7.classList.add('fa-play-circle');
    gif7.style.opacity = 0;
    audioElement8.pause();
    masterPlay8.classList.remove('fa-pause-circle');
    masterPlay8.classList.add('fa-play-circle');
    gif8.style.opacity = 0;
    audioElement9.pause();
    masterPlay9.classList.remove('fa-pause-circle');
    masterPlay9.classList.add('fa-play-circle');
    gif9.style.opacity = 0;
    audioElement10.pause();
    masterPlay10.classList.remove('fa-pause-circle');
    masterPlay10.classList.add('fa-play-circle');
    gif10.style.opacity = 0;
    audioElement11.pause();
    masterPlay11.classList.remove('fa-pause-circle');
    masterPlay11.classList.add('fa-play-circle');
    gif11.style.opacity = 0;
    audioElement12.pause();
    masterPlay12.classList.remove('fa-pause-circle');
    masterPlay12.classList.add('fa-play-circle');
    gif12.style.opacity = 0;

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


// For Autoplay of Next Song 

audioElement4.addEventListener('ended', ()=>{
    //pause Current Song
    audioElement4.pause();
    masterPlay4.classList.remove('fa-pause-circle');
    masterPlay4.classList.add('fa-play-circle');
    gif4.style.opacity = 0;
    //Play Next Song 
    audioElement2.play();
    masterPlay2.classList.add('fa-pause-circle');
    masterPlay2.classList.remove('fa-play-circle');
    gif2.style.opacity = 1;
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
    audioElement7.pause();
    masterPlay7.classList.remove('fa-pause-circle');
    masterPlay7.classList.add('fa-play-circle');
    gif7.style.opacity = 0;
    audioElement8.pause();
    masterPlay8.classList.remove('fa-pause-circle');
    masterPlay8.classList.add('fa-play-circle');
    gif8.style.opacity = 0;
    audioElement9.pause();
    masterPlay9.classList.remove('fa-pause-circle');
    masterPlay9.classList.add('fa-play-circle');
    gif9.style.opacity = 0;
    audioElement10.pause();
    masterPlay10.classList.remove('fa-pause-circle');
    masterPlay10.classList.add('fa-play-circle');
    gif10.style.opacity = 0;
    audioElement11.pause();
    masterPlay11.classList.remove('fa-pause-circle');
    masterPlay11.classList.add('fa-play-circle');
    gif11.style.opacity = 0;
    audioElement12.pause();
    masterPlay12.classList.remove('fa-pause-circle');
    masterPlay12.classList.add('fa-play-circle');
    gif12.style.opacity = 0;

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


// For Autoplay of Next Song 

audioElement5.addEventListener('ended', ()=>{
    //pause Current Song
    audioElement5.pause();
    masterPlay5.classList.remove('fa-pause-circle');
    masterPlay5.classList.add('fa-play-circle');
    gif5.style.opacity = 0;
    //Play Next Song 
    audioElement6.play();
    masterPlay6.classList.add('fa-pause-circle');
    masterPlay6.classList.remove('fa-play-circle');
    gif6.style.opacity = 1;
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
    audioElement7.pause();
    masterPlay7.classList.remove('fa-pause-circle');
    masterPlay7.classList.add('fa-play-circle');
    gif7.style.opacity = 0;
    audioElement8.pause();
    masterPlay8.classList.remove('fa-pause-circle');
    masterPlay8.classList.add('fa-play-circle');
    gif8.style.opacity = 0;
    audioElement9.pause();
    masterPlay9.classList.remove('fa-pause-circle');
    masterPlay9.classList.add('fa-play-circle');
    gif9.style.opacity = 0;
    audioElement10.pause();
    masterPlay10.classList.remove('fa-pause-circle');
    masterPlay10.classList.add('fa-play-circle');
    gif10.style.opacity = 0;
    audioElement11.pause();
    masterPlay11.classList.remove('fa-pause-circle');
    masterPlay11.classList.add('fa-play-circle');
    gif11.style.opacity = 0;
    audioElement12.pause();
    masterPlay12.classList.remove('fa-pause-circle');
    masterPlay12.classList.add('fa-play-circle');
    gif12.style.opacity = 0;

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

// For Autoplay of Next Song 

audioElement6.addEventListener('ended', ()=>{
    //pause Current Song
    audioElement6.pause();
    masterPlay6.classList.remove('fa-pause-circle');
    masterPlay6.classList.add('fa-play-circle');
    gif6.style.opacity = 0;
    //Play Next Song 
    audioElement7.play();
    masterPlay7.classList.add('fa-pause-circle');
    masterPlay7.classList.remove('fa-play-circle');
    gif7.style.opacity = 1;
})


//******************************************************************************************************* */
//    For Song 7(Mann Mera reprise (JalRaj))
let audioElement7 = new Audio('song7.mp3');
let masterPlay7= document.getElementById('masterPlay7')
let myProgressBar7 = document.getElementById('myProgressBar7');
let gif7= document.getElementById('gif7')

//Play pause handle 

masterPlay7.addEventListener('click',()=>{
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
    audioElement6.pause();
    masterPlay6.classList.remove('fa-pause-circle');
    masterPlay6.classList.add('fa-play-circle');
    gif6.style.opacity = 0;  audioElement12.pause();
    masterPlay12.classList.remove('fa-pause-circle');
    masterPlay12.classList.add('fa-play-circle');
    gif12.style.opacity = 0;
    audioElement8.pause();
    masterPlay8.classList.remove('fa-pause-circle');
    masterPlay8.classList.add('fa-play-circle');
    gif8.style.opacity = 0;
    audioElement9.pause();
    masterPlay9.classList.remove('fa-pause-circle');
    masterPlay9.classList.add('fa-play-circle');
    gif9.style.opacity = 0;
    audioElement10.pause();
    masterPlay10.classList.remove('fa-pause-circle');
    masterPlay10.classList.add('fa-play-circle');
    gif10.style.opacity = 0;
    audioElement11.pause();
    masterPlay11.classList.remove('fa-pause-circle');
    masterPlay11.classList.add('fa-play-circle');
    gif11.style.opacity = 0;
    
    if(audioElement7.paused || audioElement7.currentTime<=0){
        audioElement7.play();
        masterPlay7.classList.remove('fa-play-circle');
        masterPlay7.classList.add('fa-pause-circle');
        gif7.style.opacity = 1;
    }
    else{
        audioElement7.pause();
        masterPlay7.classList.remove('fa-pause-circle');
        masterPlay7.classList.add('fa-play-circle');
        gif7.style.opacity = 0;
    }
})
//listen event
audioElement7.addEventListener('timeupdate', ()=>{ 
    // Update Seekbar
    progress = parseInt((audioElement7.currentTime/audioElement7.duration)* 100); 
    myProgressBar7.value = progress;
})

myProgressBar7.addEventListener('change', ()=>{
    audioElement7.currentTime = myProgressBar7.value * audioElement7.duration/100;
})


// For Autoplay of Next Song 

audioElement7.addEventListener('ended', ()=>{
    //pause Current Song
    audioElement7.pause();
    masterPlay7.classList.remove('fa-pause-circle');
    masterPlay7.classList.add('fa-play-circle');
    gif7.style.opacity = 0;
    //Play Next Song 
    audioElement8.play();
    masterPlay8.classList.add('fa-pause-circle');
    masterPlay8.classList.remove('fa-play-circle');
    gif8.style.opacity = 1;
})

// *******************************************************************************************************

//For Song 8 (Toh Fir Aao)

let audioElement8 = new Audio('song8.mp3');
let masterPlay8= document.getElementById('masterPlay8')
let myProgressBar8 = document.getElementById('myProgressBar8');
let gif8= document.getElementById('gif8')

//Play pause handle 

masterPlay8.addEventListener('click',()=>{
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
    audioElement6.pause();
    masterPlay6.classList.remove('fa-pause-circle');
    masterPlay6.classList.add('fa-play-circle');
    gif6.style.opacity = 0;
    audioElement7.pause();
    masterPlay7.classList.remove('fa-pause-circle');
    masterPlay7.classList.add('fa-play-circle');
    gif7.style.opacity = 0;  audioElement12.pause();
    masterPlay12.classList.remove('fa-pause-circle');
    masterPlay12.classList.add('fa-play-circle');
    gif12.style.opacity = 0;
    audioElement9.pause();
    masterPlay9.classList.remove('fa-pause-circle');
    masterPlay9.classList.add('fa-play-circle');
    gif9.style.opacity = 0;
    audioElement10.pause();
    masterPlay10.classList.remove('fa-pause-circle');
    masterPlay10.classList.add('fa-play-circle');
    gif10.style.opacity = 0;
    audioElement11.pause();
    masterPlay11.classList.remove('fa-pause-circle');
    masterPlay11.classList.add('fa-play-circle');
    gif11.style.opacity = 0;

    if(audioElement8.paused || audioElement8.currentTime<=0){
        audioElement8.play();
        masterPlay8.classList.remove('fa-play-circle');
        masterPlay8.classList.add('fa-pause-circle');
        gif8.style.opacity = 1;
    }
    else{
        audioElement8.pause();
        masterPlay8.classList.remove('fa-pause-circle');
        masterPlay8.classList.add('fa-play-circle');
        gif8.style.opacity = 0;
    }
})
//listen event
audioElement8.addEventListener('timeupdate', ()=>{ 
    // Update Seekbar
    progress = parseInt((audioElement8.currentTime/audioElement8.duration)* 100); 
    myProgressBar8.value = progress;
})

myProgressBar8.addEventListener('change', ()=>{
    audioElement8.currentTime = myProgressBar8.value * audioElement8.duration/100;
})


// For Autoplay of Next Song 

audioElement8.addEventListener('ended', ()=>{
    //pause Current Song
    audioElement8.pause();
    masterPlay8.classList.remove('fa-pause-circle');
    masterPlay8.classList.add('fa-play-circle');
    gif8.style.opacity = 0;
    //Play Next Song 
    audioElement9.play();
    masterPlay9.classList.add('fa-pause-circle');
    masterPlay9.classList.remove('fa-play-circle');
    gif9.style.opacity = 1;
})

// *************************************************************************************************

//For Song 9 (Gale Lag Ja )
let audioElement9= new Audio('song9.mp3');
let masterPlay9= document.getElementById('masterPlay9')
let myProgressBar9 = document.getElementById('myProgressBar9');
let gif9= document.getElementById('gif9')

//Play pause handle 

masterPlay9.addEventListener('click',()=>{
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
    audioElement6.pause();
    masterPlay6.classList.remove('fa-pause-circle');
    masterPlay6.classList.add('fa-play-circle');
    gif6.style.opacity = 0;
    audioElement7.pause();
    masterPlay7.classList.remove('fa-pause-circle');
    masterPlay7.classList.add('fa-play-circle');
    gif7.style.opacity = 0;
    audioElement8.pause();
    masterPlay8.classList.remove('fa-pause-circle');
    masterPlay8.classList.add('fa-play-circle');
    gif8.style.opacity = 0;  audioElement12.pause();
    audioElement10.pause();
    masterPlay10.classList.remove('fa-pause-circle');
    masterPlay10.classList.add('fa-play-circle');
    gif10.style.opacity = 0;  audioElement12.pause();
    audioElement11.pause();
    masterPlay11.classList.remove('fa-pause-circle');
    masterPlay11.classList.add('fa-play-circle');
    gif11.style.opacity = 0;  audioElement12.pause();
    masterPlay12.classList.remove('fa-pause-circle');
    masterPlay12.classList.add('fa-play-circle');
    gif12.style.opacity = 0;

    if(audioElement9.paused || audioElement9.currentTime<=0){
        audioElement9.play();
        masterPlay9.classList.remove('fa-play-circle');
        masterPlay9.classList.add('fa-pause-circle');
        gif9.style.opacity = 1;
    }
    else{
        audioElement9.pause();
        masterPlay9.classList.remove('fa-pause-circle');
        masterPlay9.classList.add('fa-play-circle');
        gif9.style.opacity = 0;
    }
})
//listen event
audioElement9.addEventListener('timeupdate', ()=>{ 
    // Update Seekbar
    progress = parseInt((audioElement9.currentTime/audioElement9.duration)* 100); 
    myProgressBar9.value = progress;
})

myProgressBar9.addEventListener('change', ()=>{
    audioElement9.currentTime = myProgressBar9.value * audioElement9.duration/100;
})


// For Autoplay of Next Song 

audioElement9.addEventListener('ended', ()=>{
    //pause Current Song
    audioElement9.pause();
    masterPlay9.classList.remove('fa-pause-circle');
    masterPlay9.classList.add('fa-play-circle');
    gif9.style.opacity = 0;
    //Play Next Song 
    audioElement10.play();
    masterPlay10.classList.add('fa-pause-circle');
    masterPlay10.classList.remove('fa-play-circle');
    gif10.style.opacity = 1;
})

// **********************************************************************************************\

//For Song 10 (Saajna X Aadat)

let audioElement10= new Audio('song10.mp3');
let masterPlay10= document.getElementById('masterPlay10')
let myProgressBar10 = document.getElementById('myProgressBar10');
let gif910= document.getElementById('gif10')

//Play pause handle 

masterPlay10.addEventListener('click',()=>{
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
    audioElement6.pause();
    masterPlay6.classList.remove('fa-pause-circle');
    masterPlay6.classList.add('fa-play-circle');
    gif6.style.opacity = 0;
    audioElement7.pause();
    masterPlay7.classList.remove('fa-pause-circle');
    masterPlay7.classList.add('fa-play-circle');
    gif7.style.opacity = 0;
    audioElement8.pause();
    masterPlay8.classList.remove('fa-pause-circle');
    masterPlay8.classList.add('fa-play-circle');
    gif8.style.opacity = 0;
    audioElement9.pause();
    masterPlay9.classList.remove('fa-pause-circle');
    masterPlay9.classList.add('fa-play-circle');
    gif9.style.opacity = 0; 
     audioElement12.pause();
    masterPlay12.classList.remove('fa-pause-circle');
    masterPlay12.classList.add('fa-play-circle');
    gif12.style.opacity = 0;
     audioElement11.pause();
    masterPlay11.classList.remove('fa-pause-circle');
    masterPlay11.classList.add('fa-play-circle');
    gif11.style.opacity = 0;

    if(audioElement10.paused || audioElement10.currentTime<=0){
        audioElement10.play();
        masterPlay10.classList.remove('fa-play-circle');
        masterPlay10.classList.add('fa-pause-circle');
        gif10.style.opacity = 1;
    }
    else{
        audioElement10.pause();
        masterPlay10.classList.remove('fa-pause-circle');
        masterPlay10.classList.add('fa-play-circle');
        gif10.style.opacity = 0;
    }
})
//listen event
audioElement10.addEventListener('timeupdate', ()=>{ 
    // Update Seekbar
    progress = parseInt((audioElement10.currentTime/audioElement10.duration)* 100); 
    myProgressBar10.value = progress;
})

myProgressBar10.addEventListener('change', ()=>{
    audioElement10.currentTime = myProgressBar10.value * audioElement10.duration/100;
})


// For Autoplay of Next Song 

audioElement10.addEventListener('ended', ()=>{
    //pause Current Song
    audioElement10.pause();
    masterPlay10.classList.remove('fa-pause-circle');
    masterPlay10.classList.add('fa-play-circle');
    gif10.style.opacity = 0;
    //Play Next Song 
    audioElement11.play();
    masterPlay11.classList.add('fa-pause-circle');
    masterPlay11.classList.remove('fa-play-circle');
    gif11.style.opacity = 1;
})

// ************************************************************************************************

// For song 11 (Uska Hi Bana)

let audioElement11= new Audio('song11.mp3');
let masterPlay11= document.getElementById('masterPlay11')
let myProgressBar11= document.getElementById('myProgressBar11');
let gif11= document.getElementById('gif11')

//Play pause handle 

masterPlay11.addEventListener('click',()=>{
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
    audioElement6.pause();
    masterPlay6.classList.remove('fa-pause-circle');
    masterPlay6.classList.add('fa-play-circle');
    gif6.style.opacity = 0;
    audioElement7.pause();
    masterPlay7.classList.remove('fa-pause-circle');
    masterPlay7.classList.add('fa-play-circle');
    gif7.style.opacity = 0;
    audioElement8.pause();
    masterPlay8.classList.remove('fa-pause-circle');
    masterPlay8.classList.add('fa-play-circle');
    gif8.style.opacity = 0;
    audioElement9.pause();
    masterPlay9.classList.remove('fa-pause-circle');
    masterPlay9.classList.add('fa-play-circle');
    gif9.style.opacity = 0;
    audioElement10.pause();
    masterPlay10.classList.remove('fa-pause-circle');
    masterPlay10.classList.add('fa-play-circle');
    gif10.style.opacity = 0;  audioElement12.pause();
    masterPlay12.classList.remove('fa-pause-circle');
    masterPlay12.classList.add('fa-play-circle');
    gif12.style.opacity = 0;

    if(audioElement11.paused || audioElement11.currentTime<=0){
        audioElement11.play();
        masterPlay11.classList.remove('fa-play-circle');
        masterPlay11.classList.add('fa-pause-circle');
        gif11.style.opacity = 1;
    }
    else{
        audioElement11.pause();
        masterPlay11.classList.remove('fa-pause-circle');
        masterPlay11.classList.add('fa-play-circle');
        gif11.style.opacity = 0;
    }
})
//listen event
audioElement11.addEventListener('timeupdate', ()=>{ 
    // Update Seekbar
    progress = parseInt((audioElement11.currentTime/audioElement11.duration)* 100); 
    myProgressBar11.value = progress;
})

myProgressBar11.addEventListener('change', ()=>{
    audioElement11.currentTime = myProgressBar11.value * audioElement11.duration/100;
})


// For Autoplay of Next Song 

audioElement11.addEventListener('ended', ()=>{
    //pause Current Song
    audioElement11.pause();
    masterPlay11.classList.remove('fa-pause-circle');
    masterPlay11.classList.add('fa-play-circle');
    gif11.style.opacity = 0;
    //Play Next Song 
    audioElement12.play();
    masterPlay12.classList.add('fa-pause-circle');
    masterPlay12.classList.remove('fa-play-circle');
    gif12.style.opacity = 1;
})


// ***********************************************************************************************************
// For Song Song 12(Zara Zara)

let audioElement12= new Audio('song12.mp3');
let masterPlay12= document.getElementById('masterPlay12')
let myProgressBar12 = document.getElementById('myProgressBar12');
let gif12= document.getElementById('gif12')

//Play pause handle 

masterPlay12.addEventListener('click',()=>{
   
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
    audioElement6.pause();
    masterPlay6.classList.remove('fa-pause-circle');
    masterPlay6.classList.add('fa-play-circle');
    gif6.style.opacity = 0;
    audioElement7.pause();
    masterPlay7.classList.remove('fa-pause-circle');
    masterPlay7.classList.add('fa-play-circle');
    gif7.style.opacity = 0;
    audioElement8.pause();
    masterPlay8.classList.remove('fa-pause-circle');
    masterPlay8.classList.add('fa-play-circle');
    gif8.style.opacity = 0;
    audioElement9.pause();
    masterPlay9.classList.remove('fa-pause-circle');
    masterPlay9.classList.add('fa-play-circle');
    gif9.style.opacity = 0;
    audioElement10.pause();
    masterPlay10.classList.remove('fa-pause-circle');
    masterPlay10.classList.add('fa-play-circle');
    gif10.style.opacity = 0;
    audioElement11.pause();
    masterPlay11.classList.remove('fa-pause-circle');
    masterPlay11.classList.add('fa-play-circle');
    gif11.style.opacity = 0;

    if(audioElement12.paused || audioElement12.currentTime<=0){
        audioElement12.play();
        masterPlay12.classList.remove('fa-play-circle');
        masterPlay12.classList.add('fa-pause-circle');
        gif12.style.opacity = 1;
    }
    else{
        audioElement12.pause();
        masterPlay12.classList.remove('fa-pause-circle');
        masterPlay12.classList.add('fa-play-circle');
        gif12.style.opacity = 0;
    }
})
//listen event
audioElement12.addEventListener('timeupdate', ()=>{ 
    // Update Seekbar
    progress = parseInt((audioElement12.currentTime/audioElement12.duration)* 100); 
    myProgressBar12.value = progress;
})

myProgressBar12.addEventListener('change', ()=>{
    audioElement12.currentTime = myProgressBar12.value * audioElement12.duration/100;
})

// Pause After Song Ended

audioElement12.addEventListener('ended', ()=>{
    //pause Current Song
    audioElement12.pause();
    masterPlay12.classList.remove('fa-pause-circle');
    masterPlay12.classList.add('fa-play-circle');
    gif12.style.opacity = 0;
   
})

// ****************************************************************************************
//For Playlist

