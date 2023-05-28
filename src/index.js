function random(min, max) {
    return Math.floor(Math.random() * (max - min) ) + min;
}

function plantPlants() {
    let plants = $(".plant");
    for (let i = 0; i < plants.length; i++) {
        $(plants[i])
            .css("left", random(-10,110) + "%")
            .css("bottom", "-" + random(10, 15) + "px")
            .css("z-index", random(0, 15));
    }
}

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
            document.body.className = className;
        }
    }
}


let date = new Date();
const timeElement = $("#time");


let currentHour = -1;  // Set invalid hour so that hourChange can run once
function hoursChanged() {
    currentHour = date.getHours();
    clearSkies(currentHour);
}

function secondTimer() {
    timeElement.text(`${date.getHours()}:${String(date.getMinutes()).padStart(2, 0)}`);
    
    if (currentHour != date.getHours()) {
        hoursChanged();
    }
}

timeElement.on("mousedown", (e) => {
    let startX = e.originalEvent.x;
    function dragTime(e) {
        console.log(e);
        const newX = e.originalEvent.x;
        let difference = newX - startX;

        // Modify it so the time moves more accurately
        difference /= 3;

        date.setMinutes(date.getMinutes() + difference)

        startX = newX;
    }

    let body = $(document.body);
    body.on("mousemove", dragTime);
    body.on("mouseup", () => {
        body.off("mousemove", dragTime)
    })
})

hoursChanged();
plantPlants();
setInterval(secondTimer, 100);
