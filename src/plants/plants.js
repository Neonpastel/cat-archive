function plantPlants() {
    let plants = $(".plant");
    for (let i = 0; i < plants.length; i++) {
        $(plants[i])
            .css("left", random(-10,110) + "%")
            .css("bottom", "-" + random(10, 15) + "px")
            .css("z-index", random(0, 15));
    }
}

// This function gets called in timer.js