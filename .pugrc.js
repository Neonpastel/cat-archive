// Import wasn't supported
const fs = require("fs");
const srcDir = "src/";

function collectFiles(dir, read=false, includePath=true) {
    const array = []
    fs.readdirSync(dir).forEach((filename) => {
        const filepath = dir + filename;

        if (!read) {
            if (includePath) array.push(filepath.replace(srcDir, ""));
            else array.push(filename);
        } else {
            array.push(fs.readFileSync(filepath, {encoding: "utf-8"}));
        }
    });
    return array;
}

const navs = collectFiles(srcDir + "nav/", read=true);
const plants = collectFiles(srcDir + "plants/img/", read=false);
const songs = collectFiles(srcDir + "music/songs/", read=false, includePath=false);


module.exports = {
    locals: {
        navs,
        plants,
        songs
    }
}
