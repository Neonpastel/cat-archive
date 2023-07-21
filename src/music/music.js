const play = $("#play");
const volume = $("#volume");
const nowPlaying = $("#nowPlaying");
const songName = $("#songName");

let songIndex;
let sound;
const songs = [];
JSON.parse($("#music").attr("data-songs")).forEach((path) => {
    songs.push(path);
});

function random(min, max) {
    // See https://www.w3schools.com/JS/js_random.asp
    return Math.floor(Math.random() * (max - min) ) + min;
}



// Playlist functionality based on https://github.com/goldfire/howler.js/issues/191
function playSong() {
    if (songIndex >= songs.length) {
        songIndex = 0;
    } else if (songIndex < 0) {
        songIndex = songs.length - 1;
    }

    let file = songs[songIndex];
    let artist = file.substring(0, file.indexOf("-") - 1)
    let track = file.substring(file.indexOf("-") + 1, file.lastIndexOf("."))

    songName.text(`${track} by ${artist}`);
    nowPlaying.attr("title", file);

    return new window.Howl({
        src: file,
        volume: volume.val() / 100,
        onplay: () => {
            play.text("pause");
        },
        onpause: () => {
            play.text("play");
        },
        onend: nextSong
    });
}

function nextSong() {
    songIndex++;
    sound.unload();
    sound = playSong();
    sound.play();
}

function prevSong() {
    songIndex--;
    sound.unload();
    sound = playSong();
    sound.play();
}


volume.on("change", (event) => {
    sound.volume(event.target.value/100);
});

play.on("click", () => {
    if(sound.playing()) {
        sound.pause();
    } else {
        sound.play();
    }
});

$("#prev").on("click", prevSong);
$("#next").on("click", nextSong);

function init() {
    console.log("waiting for howler...")
    if (window.Howl) {
        console.log("Loaded!")
        console.log(window.songs)
        songIndex  = random(0, songs.length);
        sound = playSong();
    }
    else {
        console.log("Timeout...") 
        setTimeout(init, 100);
    }
}
init();
