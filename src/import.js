import { extractColors } from "extract-colors";
import { Howl } from "howler";

window.songs = []

JSON.parse($("#music").attr("data-songs")).forEach((path) => {
    console.log(path)
    songs.push(new URL("./" + path, import.meta.url));
});

window.extractColors = extractColors;
window.Howl = Howl;
