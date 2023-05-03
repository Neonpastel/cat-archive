import { MusicBeatDetector, MusicBeatScheduler } from "music-beat-detector";
import { analyze } from "web-audio-beat-detector";

import BeatBeat from "beat-beat-js";

const sound = new BeatBeat(
    new AudioContext(),
    "audio.mp3"
)


let gif = new SuperGif({ gif: document.getElementById("gif") });
gif.load()

const scheduler = new MusicBeatScheduler(post => {
    console.log(pos)
})


const detector = new MusicBeatDetector({
    scheduler: scheduler.getScheduler()
})


gif.pause();
sound.load();
let gifElem = gif.get_canvas()

let play = false;
let deg = 0;
let interval;
$("#start").click(async()=> { 
    interval = setInterval(()=> {
        gif.move_relative(1)

    }, 10);
    sound.play(async() => {
        //gif.move_relative(1)
        /*
        if (play) {
            gif.play(); 
            setTimeout(() => {
                gif.pause();
                play = true;

            }, 1000)
            play = false
        }
        else {

        }
        */
       deg+=10;
       $(gifElem).css("rotate", deg + "deg");

        /*
        clearInterval(interval);
        setTimeout(()=> {
            interval = setInterval(()=> {
                gif.move_relative(1)
        
            }, 10);
        }, 100)
        */

        //gif.move_relative(1)
        
        if (play) {
            //clearInterval(interval);
            //gif.play();
        } else {
            //gif.pause()
            /*
            interval = setInterval(()=> {
                gif.move_relative(1)

            }, 10);
            */
        }
        
        play = !play;
        //gif.move_relative(1)
    })

    /*
    return;
    console.log("start")
    const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    let source;
    function getData() {
    source = audioCtx.createBufferSource();
    const request = new XMLHttpRequest();
  
    request.open("GET", "audio.mp3", true);
  
    request.responseType = "arraybuffer";
  
    request.onload = () => {
      const audioData = request.response;
  
      audioCtx.decodeAudioData(
        audioData,
        (buffer) => {
          source.buffer = buffer;
          console.log(buffer)
          
          
            analyze(buffer).then((tempo) => {
                console.log(tempo)
            })
          source.connect(audioCtx.destination);
          source.loop = true;
        },
  
        (err) => console.error(`Error with decoding audio data: ${err.err}`)
      );
    };
  
    request.send();
  }
  getData();
  */

});


console.log("ee")


scheduler.start()