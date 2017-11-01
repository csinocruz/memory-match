$(document).ready(function() {
    console.log('document loaded'),
    setBackground()
});

function initializeApp() {
    
}

var background_images = [
    'images/Maps/dorado.jpg',
    'images/Maps/eichenwalde.jpg',
    'images/Maps/hanamura.jpg',
    'images/Maps/hollywood.jpg',
    'images/Maps/horizon_lunar_colony.jpg',
    'images/Maps/ilios.jpg',
    'images/Maps/junkertown.jpg',
    'images/Maps/kings_row.jpg',
    'images/Maps/lijiang_tower.jpeg',
    'images/Maps/nepal.jpg',
    'images/Maps/numbani.jpg',
    'images/Maps/oasis.jpg',
    'images/Maps/route_66.jpg',
    'images/Maps/temple_of_anubis.jpg',
    'images/Maps/volskaya_industries.jpg',
    'images/Maps/watchpoint_gibraltar.jpg'
]

var audio = new Audio(),
i = 0;
var playlist = new Array(
    'music/637.mp3', 
    'music/1211.mp3',
    'music/4732.mp3'
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

function createCards() {
    $('div')
}