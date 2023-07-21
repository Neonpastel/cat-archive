
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

// Hide until theme is applied
$(".themed").css({
    visibility: "hidden"
});

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

                    const mainColour = new Color(values[0].hex);
                    let secondaryColour;
                    let secondaryColourContrast = 0;  // Higher is better
                    let tertiaryColour;
                    for (let i = 1; i < values.length; i++) {
                        let colour = new Color(values[i].hex);
                        let contrast = mainColour.contrast(colour, "WCAG21");
                        console.log(`${contrast} > ${secondaryColourContrast}`)
                        if (contrast > secondaryColourContrast) {
                            [ secondaryColour, secondaryColourContrast] = [ colour, contrast];
                        } else {
                            tertiaryColour = colour;
                        }
                    }

                    $(".themed, .themed a:link").css({
                        visibility: "initial",
                        color: mainColour,
                        "background-color": secondaryColour,
                        "accent-color": tertiaryColour,
                        "border-color": tertiaryColour,
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