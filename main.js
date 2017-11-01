$(document).ready(function() {
    console.log('document loaded'),
    setBackground()
});

function initializeApp() {
    
}

var background_images = [
    '/Users/francescasinocruz/Desktop/LFZ/memory_match/images/Maps/dorado.jpg',
    '/Users/francescasinocruz/Desktop/LFZ/memory_match/images/Maps/eichenwalde.jpg',
    '/Users/francescasinocruz/Desktop/LFZ/memory_match/images/Maps/hanamura.jpg',
    '/Users/francescasinocruz/Desktop/LFZ/memory_match/images/Maps/hollywood.jpg',
    '/Users/francescasinocruz/Desktop/LFZ/memory_match/images/Maps/horizon_lunar_colony.jpg',
    '/Users/francescasinocruz/Desktop/LFZ/memory_match/images/Maps/ilios.jpg',
    '/Users/francescasinocruz/Desktop/LFZ/memory_match/images/Maps/junkertown.jpg',
    '/Users/francescasinocruz/Desktop/LFZ/memory_match/images/Maps/kings_row.jpg',
    '/Users/francescasinocruz/Desktop/LFZ/memory_match/images/Maps/lijiang_tower.jpeg',
    '/Users/francescasinocruz/Desktop/LFZ/memory_match/images/Maps/nepal.jpg',
    '/Users/francescasinocruz/Desktop/LFZ/memory_match/images/Maps/numbani.jpg',
    '/Users/francescasinocruz/Desktop/LFZ/memory_match/images/Maps/oasis.jpg',
    '/Users/francescasinocruz/Desktop/LFZ/memory_match/images/Maps/route_66.jpg',
    '/Users/francescasinocruz/Desktop/LFZ/memory_match/images/Maps/temple_of_anubis.jpg',
    '/Users/francescasinocruz/Desktop/LFZ/memory_match/images/Maps/volskaya_industries.jpg',
    '/Users/francescasinocruz/Desktop/LFZ/memory_match/images/Maps/watchpoint_gibraltar.jpg'
]

var audio = new Audio(),
i = 0;
var playlist = new Array(
    '/Users/francescasinocruz/Desktop/LFZ/memory_match/music/637.mp3', 
    '/Users/francescasinocruz/Desktop/LFZ/memory_match/music/1211.mp3',
    '/Users/francescasinocruz/Desktop/LFZ/memory_match/music/4732.mp3'
);

//Code regarding audio is copied and pasted,
//I do not know how the code is working. Will inquire...
audio.addEventListener('ended', function () {
i = ++i < playlist.length ? i : 0;
console.log(i)
audio.src = playlist[i];
audio.play();
}, true);
audio.volume = 0.3;
audio.loop = false;
audio.src = playlist[0];
audio.play();

function setBackground() {
    console.log('function setBackground is being called');
    var randomImgNum = Math.floor(Math.random()*16);
    $('body').css('background-image', 'url(' + background_images[randomImgNum] + ')');
}

