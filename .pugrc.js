// Import wasn't supported
const fs = require("fs");

const plantDir = "assets/plants/";



function PlacePlant(filename) {
    const src = "../" + plantDir + filename;
    return `<img src="${src}" class="plant" />`;
}

module.exports = {
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