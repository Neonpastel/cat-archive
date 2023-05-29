import {Howl, Howler} from 'howler';


function getAudio(trackId) {
    request(
        "https://api.soundcloud.com/tracks/" + trackId + "/stream",
        [
            "accept", "application/json; chatset=utf-8"
        ], (response) => {
            console.log(response);
        }
    );
}


getAudio("youknowlimbo/airplanemode");


function playAudio() {
    
}