const skiesElement = $("header");
const backgrounds = [
    [0, 5, "first"],
    [6, 10, "second"],
    [11, 13, "third"],
    [14, 16, "fourth"],
    [17, 18, "fifth"],
    [19, 21, "sixth"],
    [22, 23, "seventh"],
];

function clearSkies(hours) {
    for (let i=0; i < backgrounds.length; i++) {
        let botMargin, topMargin, className;
        [botMargin, topMargin, className] = backgrounds[i];
        if (botMargin <= hours && hours <= topMargin) {
            skiesElement.attr("class", className);
        }
    }
}

// These functions get called in timer.js