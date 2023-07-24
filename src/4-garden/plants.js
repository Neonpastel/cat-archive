function plantPlants() {
    let plants = $(".plant");
    let { availWidth, availHeight } = screen;

    for (let i = 0; i < plants.length; i++) {
        $(plants[i])
            .css("left", random(-10,availWidth + 10) + "px")
            .css("bottom", "-" + random(10, 15) + "px")
            .css("z-index", random(0, 15));
    }
}

// This function gets called in timer.js