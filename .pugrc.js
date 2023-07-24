// Import wasn't supported
const fs = require("fs");
const path = require("path");

function collectFiles(dir, read=false, includePath=true) {
    const array = []
    fs.readdirSync(dir).forEach((filename) => {
        const filepath = dir + filename;
        const relativePath = path.relative("src/", filepath).replaceAll("\\", "/");

        if (!read) {
            if (includePath) array.push(relativePath);
            else array.push(filename);
        } else {
            array.push(fs.readFileSync(filepath, {encoding: "utf-8"}));
        }
    });
    return array;
}

const navs = collectFiles("src/1-nav/", read=true);
const plants = collectFiles("src/4-garden/plants/", read=false);
const songs = collectFiles("static/songs/", read=false, includePath=false);


module.exports = {
    locals: {
        navs,
        plants,
        songs
    }
}
