$(document).ready(function() {
    var cube_face = 1;
    var panel = '';
    $('#now').click(function() {
        cube_face++;
        switch(cube_face) {
            case 1:
                $("#cube").toggleClass("show-front"); 
                $("#cube").removeClass(panel); 
                panel="show-front"; 
                break;
            case 2:
                $("#cube").toggleClass("show-left"); 
                $("#cube").removeClass(panel); 
                panel="show-left"; 
                break;
            case 3:
                $("#cube").toggleClass("show-right"); 
                $("#cube").removeClass(panel); 
                panel="show-right"; 
                break;
            case 4:
                $("#cube").toggleClass("show-back"); 
                $("#cube").removeClass(panel); 
                panel="show-back"; 
                break;
            case 5:
                $("#cube").toggleClass("show-top"); 
                $("#cube").removeClass(panel); 
                panel="show-top"; 
                break;
            case 6:
                $("#cube").toggleClass("show-bottom"); 
                $("#cube").removeClass(panel); 
                panel="show-bottom"; 
                cube_face = 0;
                break;
        }
    })
    console.log('document loaded'),
    setBackground(),
    initializeApp()
});

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

var character_audio = new Audio();
var audio = new Audio(),
i = 0;
var playlist = new Array(
    'music/637.mp3', 
    'music/1211.mp3',
    'music/4732.mp3'
);

var can_click = true;
var first_card_clicked = null;
var second_card_clicked = null;
total_possible_matches = 1;
match_counter = 0;


//Code regarding audio is copied and pasted,
//I do not know how the code is working. Will inquire...
audio.addEventListener('ended', function () {
i = ++i < playlist.length ? i : 0;
console.log(i)
audio.src = playlist[i];
audio.play();
}, true);
audio.volume = 0.1;
audio.loop = false;
audio.src = playlist[0];
audio.play();

function setBackground() {
    console.log('function setBackground called');
    var randomImgNum = Math.floor(Math.random()*16);
    $('body').css('background-image', 'url(' + background_images[randomImgNum] + ')');
}

function initializeApp() {
    console.log('function initializeApp called');
    createCards();
    $('.card').click(clickHandler);
}

function shuffledCards(char_array) {
    var i = 0;
    var j = 0;
    var temp = null;

    for (i=char_array.length-1; i>=0; i-=1) {
        j = Math.floor(Math.random() * (i + 1));
        temp = char_array[i];
        char_array[i] = char_array[j];
        char_array[j] = temp;
    }
    return char_array;
}

function createCards() {
    for (var j=0; j<2; j++) {
        var deck = shuffledCards(characters);
        // for (var i=0; i<deck.length; i++) {
        for (var i=0; i<8; i++) {
            //create card divs
            var card_div = $('<div>').addClass('card');
            var front_div = $('<div>').addClass('front');
            var back_div = $('<div>').addClass('back');
            //add images to card divs
            $(front_div).prepend($('<img>', {src:characters[i].photo}));
            $(back_div).prepend($('<img>', {src:'images/card_back1.jpg'}));
            $(card_div).append(front_div).append(back_div);
            //place cards with images into game area
            $('#game-area').append(card_div);
        }
    }
} 

function clickHandler() {
    if(can_click === true) {
        $(this).toggleClass('reveal');
        var the_card = $(this);
        var string = the_card.find('img').attr('src');
        
        //finding character object in order to play their unique mp3 phrase
        function findCharObject(key, array) {
            for (var i=0; i<array.length; i++) {
                if(array[i].photo === string) {
                    return array[i];
                }
            }
        }
        var resultOfFindCharObject = findCharObject(string, characters);
        character_audio.src = resultOfFindCharObject.sound;
        character_audio.play();
        
        //when a card is clicked
        if(first_card_clicked === null) {
            console.log('first card has been clicked');
            first_card_clicked = $(this); 
        } else {
            console.log('second card has been clicked');
            can_click = false;
            second_card_clicked = $(this);

            if(first_card_clicked.find('img').attr('src') === second_card_clicked.find('img').attr('src')) {
                match_counter++;
                console.log(match_counter);
                console.log('The cards are a match!');
                setTimeout(function() {
                    first_card_clicked.css('opacity', '0');
                    first_card_clicked = null;
                    can_click = true;
                }, 2000);
                setTimeout(function() {
                    second_card_clicked.css('opacity', '0');
                    second_card_clicked = null;
                    can_click = true;
                }, 2000);
                if (match_counter === total_possible_matches) {
                    console.log('You have won the game!');
                    var next_round_div = $('<div>').attr('id', 'go');
                    var next_round_button = $('<button>').text('Click for Next Round').attr('id', 'now');
                    $(next_round_div).append(next_round_button)
                    $('#game-rounds-area').append(next_round_div);
                }
            } else {
                console.log('The cards DO NOT match');
                setTimeout(function() {
                    first_card_clicked.toggleClass('reveal');
                    first_card_clicked = null;
                    can_click = true;
                }, 2000);
                setTimeout(function() {
                    second_card_clicked.toggleClass('reveal');
                    second_card_clicked = null;
                    can_click = true;
                },2000);
            }
        }
    }
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
        sound: 'character_sounds/announcer_sound2.mp3',
        photo: 'characters/ana.png'
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
        sound: 'character_sounds/bastion_phrase.mp3',
        photo: 'characters/bastion.png'
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
        sound: 'character_sounds/announcer_sound2.mp3',
        photo: 'characters/doomfist.png'
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
        sound: 'character_sounds/dva_phrase.mp3',
        photo: 'characters/dva.png'
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
        sound: 'character_sounds/genji_phrase.mp3',
        photo: 'characters/genji.png'
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
        sound: 'character_sounds/hanzo_phrase.mp3',
        photo: 'characters/hanzo.png'
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
        sound: 'character_sounds/junkrat_phrase.mp3',
        photo: 'characters/junkrat.png'
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
        sound: 'character_sounds/lucio_phrase.mp3',
        photo: 'characters/lucio.png'
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
        sound: 'character_sounds/mccree_phrase.mp3',
        photo: 'characters/mccree.png'
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
        sound: 'character_sounds/mei_phrase.mp3',
        photo: 'characters/mei.png'
    },
    {
        gameName: 'Mercy',
        fullName: 'Angela Ziegler',
        role: 'Support',
        difficulty: 1,
        abilities: ['Caduceus Staff', 'Caduceus Blaster', 'Guardian Angel', 'Angelic Descent', 'Resurrect'],
        age: 37,
        occupation: 'Field Medic, First Responder',
        baseOfOperations: 'Zürich, Switzerland',
        affiliation: 'Overwatch (formerly)',
        sound: 'character_sounds/mercy_phrase.mp3',
        photo: 'characters/mercy.png'
    },
    {
        gameName: 'Orisa',
        fullName: 'Orisa',
        role: 'Tank',
        difficulty: 2,
        abilities: ['Fusion Driver', 'Fortify', 'Halt!', 'Protective Barrier', 'Supercharger'],
        age: 0,
        occupation: 'Guardian Robot',
        baseOfOperations: 'Numbani',
        affiliation: 'None',
        sound: 'character_sounds/announcer_sound1.mp3',
        photo: 'characters/orisa.png'
    },
    {
        gameName: 'Pharah',
        fullName: 'Fareeha Amari',
        role: 'Offense',
        difficulty: 1,
        abilities: ['Rocket Launcher', 'Jump Set', 'Concussive Blast', 'Barrage'],
        age: 32,
        occupation: 'Security Chief',
        baseOfOperations: 'Giza, Egypt',
        affiliation: 'Helix Security International',
        sound: 'character_sounds/pharah_phrase.mp3',
        photo: 'characters/pharah.png'
    },
    {
        gameName: 'Reaper',
        fullName: 'Unknown',
        role: 'Offense',
        difficulty: 1,
        abilities: ['Hellfire Shotguns', 'Wraith Form', 'Shadow Step', 'Death Blossom'],
        age: 0,
        occupation: 'Mercenary',
        baseOfOperations: 'Unknown',
        affiliation: 'Unknown',
        sound: 'character_sounds/reaper_phrase.mp3',
        photo: 'characters/reaper.png'
    },
    {
        gameName: 'Reinhardt',
        fullName: 'Reinhardt Wilhelm',
        role: 'Tank',
        difficulty: 1,
        abilities: ['Rocket Hammer', 'Barrier Field', 'Charge', 'Fire Strike', 'Earthshatter'],
        age: 61,
        occupation: 'Adventurer',
        baseOfOperations: 'Stuttgart, Germany',
        affiliation: 'Overwatch (formerly)',
        sound: 'character_sounds/reinhardt_phrase.mp3',
        photo: 'characters/reinhardt.png'
    },
    {
        gameName: 'Roadhog',
        fullName: 'Mako Rutledge',
        role: 'Tank',
        difficulty: 1,
        abilities: ['Scrap Gun', 'Take a Breather', 'Chain Hook', 'Whole Hog'],
        age: 48,
        occupation: 'Enforcer (formerly), Bodyguard',
        baseOfOperations: 'Junkertown, Australia (formerly)',
        affiliation: 'Junkers (formerly)',
        sound: 'character_sounds/roadhog_phrase.mp3',
        photo: 'characters/roadhog.png'
    },
    {
        gameName: 'Soldier 76',
        fullName: 'Unknown',
        role: 'Offense',
        difficulty: 1,
        abilities: ['Heavy Pulse Rifle', 'Helix Rockets', 'Sprint', 'Biotic Field', 'Tactical Visor'],
        age: 0,
        occupation: 'Vigilante',
        baseOfOperations: 'Unknown',
        affiliation: 'Overwatch (formerly)',
        sound: 'character_sounds/soldier76_phrase.mp3',
        photo: 'characters/soldier76.png'
    },
    {
        gameName: 'Sombra',
        fullName: 'Olivia Colomar',
        role: 'Offense',
        difficulty: 0,
        abilities: ['Opportunist', 'Machine Pistol', 'Hack', 'Thermoptic Camo', 'Translocator', 'EMP'],
        age: 30,
        occupation: 'Hacker',
        baseOfOperations: 'Dorado, Mexico',
        affiliation: 'Los Muertos (formerly)',
        sound: 'character_sounds/announcer_sound2.mp3',
        photo: 'characters/sombra.png'
    },
    {
        gameName: 'Symmetra',
        fullName: 'Satya Vaswani',
        role: 'Support',
        difficulty: 2,
        abilities: ['Photon Projector', 'Sentry Turret', 'Photon Barrier', 'Teleporter', 'Shield Generator'],
        age: 28,
        occupation: 'Architech',
        baseOfOperations: 'Utopaea, India',
        affiliation: 'Vishkar Corporation',
        sound: 'character_sounds/symmetra_phrase.mp3',
        photo: 'characters/symmetra.png'
    },
    {
        gameName: 'Torbjörn',
        fullName: 'Torbjörn Lindholm',
        role: 'Defense',
        difficulty: 2,
        abilities: ['Rivet Gun', 'Forge Hammer', 'Build Turret', 'Armor Pack', 'Molten Core'],
        age: 57,
        occupation: 'Weapons Designer',
        baseOfOperations: 'Gothenburg, Sweden',
        affiliation: 'Overwatch (formerly)',
        sound: 'character_sounds/torbjorn_phrase.mp3',
        photo: 'characters/torbjorn.png'
    },
    {
        gameName: 'Tracer',
        fullName: 'Lena Oxton',
        role: 'Offense',
        difficulty: 2,
        abilities: ['Pulse Pistols', 'Blink', 'Recall', 'Pulse Bomb'],
        age: 26,
        occupation: 'Adventurer',
        baseOfOperations: 'London, England',
        affiliation: 'Overwatch (formerly)',
        sound: 'character_sounds/tracer_phrase.mp3',
        photo: 'characters/tracer.png'
    },
    {
        gameName: 'Widowmaker',
        fullName: 'Amélie Lacroix',
        role: 'Defense',
        difficulty: 3,
        abilities: ['Widow\'s Kiss', 'Grappling Hook', 'Venom Mine', 'Infra-sight'],
        age: 33,
        occupation: 'Assassin',
        baseOfOperations: 'Annecy, France',
        affiliation: 'Talon',
        sound: 'character_sounds/widowmaker_phrase.mp3',
        photo: 'characters/widowmaker.png'
    },
    {
        gameName: 'Winston',
        fullName: 'Winston',
        role: 'Tank',
        difficulty: 2,
        abilities: ['Tesla Cannon', 'Jump Pack', 'Barrier Projector', 'Primal Rage'],
        age: 29,
        occupation: 'Scientist, Adventurer',
        baseOfOperations: 'Horizon Lunar Colony (formerly)',
        affiliation: 'Overwatch (formerly)',
        sound: 'character_sounds/winston_phrase.mp3',
        photo: 'characters/winston.png'
    },
    {
        gameName: 'Zarya',
        fullName: 'Aleksandra Zaryanova',
        role: 'Tank',
        difficulty: 3,
        abilities: ['Particle Cannon', 'Particle Barrier', 'Projected Barrier', 'Gravitation Surge'],
        age: 28,
        occupation: 'Soldier',
        baseOfOperations: 'Krasnoyarsk Front, Russia',
        affiliation: 'Russian Defense Forces',
        sound: 'character_sounds/zarya_phrase.mp3',
        photo: 'characters/zarya.png'
    },
    {
        gameName: 'Zenyatta',
        fullName: 'Tekhartha Zenyatta',
        role: 'Support',
        difficulty: 3,
        abilities: ['Orb of Destruction', 'Orb of Harmony', 'Orb of Discord', 'Transcendence'],
        age: 20,
        occupation: 'Wandering Guru, Adventurer',
        baseOfOperations: 'Shambali Monastery, Nepal (formerly)',
        affiliation: 'The Shambali (formerly)',
        sound: 'character_sounds/zenyatta_phrase.mp3',
        photo: 'characters/zenyatta.png'
    }
]