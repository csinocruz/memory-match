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

var characters = [
    {
        gameName: 'Ana',
        fullName: 'Ana Amari',
        role: 'Support',
        difficulty: 3,
        abilities: ['Biotic Rifle', 'Sleep Dart', 'Biotic Grenade', 'Nano Boost'],
        age: 60,
        occupation: 'Bounty Hunter',
        baseOfOperations: 'Cairo, Egypt',
        affiliation: 'Overwatch (formerly)',
        sound: '',
        photo: ''
    },
    {
        gameName: 'Bastion',
        fullName: 'SST Laboratories Siege Automaton E54, “Bastion"',
        role: 'Defense',
        difficulty: 1,
        abilities: ['Configuration: Recon', 'Configuration: Sentry', 'Reconfigure', 'Self-repair', 'Configuration: Tank'],
        age: 30,
        occupation: 'Battle Automaton',
        baseOfOperations: 'Unknown',
        affiliation: 'None',
        sound: '',
        photo: ''
    },
    {
        gameName: 'Doomfist',
        fullName: 'Akande Ogundimu',
        role: 'Offense',
        difficulty: 3,
        abilities: ['Hand Cannon', 'Seismic Slam', 'Rising Uppercut', 'Rocket Punch', 'The Best Defense...', 'Meteor Strike'],
        age: 45,
        occupation: 'Mercenary',
        baseOfOperations: 'Oyo, Nigeria',
        affiliation: 'Talon',
        sound: '',
        photo: ''
    },
    {
        gameName: 'D.Va',
        fullName: 'Hana Song',
        role: 'Tank',
        difficulty: 3,
        abilities: ['Fusion Cannons', 'Light Gun', 'Boosters', 'Defense Matrix', 'Self-destruct', 'Call Mech'],
        age: 19,
        occupation: 'Pro Gamer (formerly), Mech Pilot',
        baseOfOperations: 'Busan, South Korea',
        affiliation: 'Mobile Exo-Force of the Korean Army',
        sound: '',
        photo: ''
    },
    {
        gameName: 'Genji',
        fullName: 'Genji Shimada',
        role: 'Offense',
        difficulty: 3,
        abilities: ['Shuriken', 'Deflect', 'Swift Strike', 'Dragonblade'],
        age: 35,
        occupation: 'Adventurer',
        baseOfOperations: 'Shambali Monastery, Nepal',
        affiliation: 'Shimada Clan (formerly), Overwatch (formerly)',
        sound: '',
        photo: ''
    },
    {
        gameName: 'Hanzo',
        fullName: 'Hanzo Shimada',
        role: 'Defense',
        difficulty: 3,
        abilities: ['Storm Bow', 'Sonic Arrow', 'Scatter Arrow', 'Dragonstrike'],
        age: 38,
        occupation: 'Mercenary, Assassin',
        baseOfOperations: 'Hanamura, Japan (formerly)',
        affiliation: 'Shimada Clan',
        sound: '',
        photo: ''
    },
    {
        gameName: 'Junkrat',
        fullName: 'Jamison Fawkes',
        role: 'Defense',
        difficulty: 2,
        abilities: ['Frag Launcher', 'Concussion Mine', 'Steel Trap', 'Total Mayhem', 'Rip-tire'],
        age: 25,
        occupation: 'Anarchist, Thief, Demolitionist, Mercenary, Scavenger',
        baseOfOperations: 'Junkertown, Australia (formerly)',
        affiliation: 'Junkers (formerly)',
        sound: '',
        photo: ''
    },
    {
        gameName: 'Lucio',
        fullName: 'Lúcio Correia dos Santos',
        role: 'Support',
        difficulty: 2,
        abilities: ['Sonic Amplifier', 'Crossfade', 'Amp It Up', 'Sound Barrier'],
        age: 26,
        occupation: 'DJ, Freedom Fighter',
        baseOfOperations: 'Rio de Janeiro, Brazil',
        affiliation: 'None',
        sound: '',
        photo: ''
    },
    {
        gameName: 'McCree',
        fullName: 'Jesse McCree',
        role: 'Offense',
        difficulty: 2,
        abilities: ['Peacekeeper', 'Combat Role', 'Flashbang', 'Deadeye'],
        age: 37,
        occupation: 'Bounty Hunter',
        baseOfOperations: 'Santa Fe, New Mexico, USA',
        affiliation: 'Overwatch (formerly)',
        sound: '',
        photo: ''
    },
    {
        gameName: 'Mei',
        fullName: 'Mei-Ling Zhou',
        role: 'Defense',
        difficulty: 3,
        abilities: ['Endothermic Blaster', 'Cryo-freeze', 'Ice-wall', 'Blizzard'],
        age: 31,
        occupation: 'Climatologist, Adventurer',
        baseOfOperations: 'Xi’an, China (formerly)',
        affiliation: 'Overwatch (formerly)',
        sound: '',
        photo: ''
    },
    {
        gameName: '',
        fullName: '',
        role: '',
        difficulty: 3,
        abilities: ['', '', '', ''],
        age: ,
        occupation: '',
        baseOfOperations: '',
        affiliation: '',
        sound: '',
        photo: ''
    },
    {
        gameName: '',
        fullName: '',
        role: '',
        difficulty: 3,
        abilities: ['', '', '', ''],
        age: ,
        occupation: '',
        baseOfOperations: '',
        affiliation: '',
        sound: '',
        photo: ''
    },
    {
        gameName: '',
        fullName: '',
        role: '',
        difficulty: 3,
        abilities: ['', '', '', ''],
        age: ,
        occupation: '',
        baseOfOperations: '',
        affiliation: '',
        sound: '',
        photo: ''
    },
    {
        gameName: '',
        fullName: '',
        role: '',
        difficulty: 3,
        abilities: ['', '', '', ''],
        age: ,
        occupation: '',
        baseOfOperations: '',
        affiliation: '',
        sound: '',
        photo: ''
    },
    {
        gameName: '',
        fullName: '',
        role: '',
        difficulty: 3,
        abilities: ['', '', '', ''],
        age: ,
        occupation: '',
        baseOfOperations: '',
        affiliation: '',
        sound: '',
        photo: ''
    },
    {
        gameName: '',
        fullName: '',
        role: '',
        difficulty: 3,
        abilities: ['', '', '', ''],
        age: ,
        occupation: '',
        baseOfOperations: '',
        affiliation: '',
        sound: '',
        photo: ''
    },
]