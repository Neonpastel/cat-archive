// Import wasn't supported
const fs = require("fs");

const plantDir = "src/plants/img/";



function PlacePlant(filename) {
    const src = plantDir.replace("src/", "") + filename;
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
