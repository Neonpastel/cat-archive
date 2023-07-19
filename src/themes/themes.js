
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

            const imageUrl = $(".skies").css("background-image").replace("url(\"", "").replace("\")", "");
            
            if (window.extractColors) {
                window.extractColors(imageUrl , {distance: 0}).then((values) => {
                    console.log(values);
                    $(".themed").css({
                        color: values[0].hex,
                        backgroundColor: values[1].hex
                    });
                });
                
            } else {
                console.log("Awaiting extract");
                setTimeout(function(){
                    applyThemes(hours)
                }, 100)
            }

        }
    }
}

// These functions get called in timer.js