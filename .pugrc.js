// Import wasn't supported
const fs = require("fs");
const srcDir = "src/";

function collectFiles(dir, read=false) {
    const array = []
    fs.readdirSync(dir).forEach((filename) => {
        const filepath = dir + filename;

        if (!read) {
            array.push(filepath.replace(srcDir, ""));
        } else {
            array.push(fs.readFileSync(filepath, {encoding: "utf-8"}));
        }
    });
    return array;
}

const navs = collectFiles(srcDir + "nav/", read=true);
const plants = collectFiles(srcDir + "plants/img/", read=false);


module.exports = {
    locals: {
        navs: navs,
        plants: plants
    }
}
