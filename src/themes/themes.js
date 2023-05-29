const body = $(document.body);
const themes = [
    [0, 5, "first"],
    [6, 10, "second"],
    [11, 13, "third"],
    [14, 16, "fourth"],
    [17, 18, "fifth"],
    [19, 21, "sixth"],
    [22, 23, "seventh"],
];

function applyThemes(hours) {
    for (let i=0; i < themes.length; i++) {
        let botMargin, topMargin, className;
        [botMargin, topMargin, className] = themes[i];
        if (botMargin <= hours && hours <= topMargin) {
            body.attr("class", className);
        }
    }
}

// These functions get called in timer.js