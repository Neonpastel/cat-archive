// Import wasn't supported
const fs = require("fs");
//const  = require("jstransformer-markdown-it")
//var md = require('jstransformer')(require('jstransformer-markdown-it'));
const plantDir = "src/plants/img/";

const navs = [];

fs.readdirSync("src/nav/").forEach((file) => {
    navs.push(fs.readFileSync("src/nav/" + file, {encoding: "utf-8"}));
});


function PlacePlant(filename) {
    const src = plantDir.replace("src/", "") + filename;
    return `<img src="${src}" class="plant" />`;
}

module.exports = {
    locals: {
        navs: navs
    },
    filters: {
        flowers: function () {
            let filenames = fs.readdirSync(plantDir);
            let plants = "";
            filenames.forEach((filename) => {
                plants += PlacePlant(filename);
            })
            return plants;
        }
    }
}
