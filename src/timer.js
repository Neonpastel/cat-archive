let date = new Date();
const timeElement = $("#time");


let currentHour = -1;  // Set invalid hour so that hourChange can run once
function hoursChanged() {
    currentHour = date.getHours();
    applyThemes(currentHour);
}

function secondTimer() {
    timeElement.text(`${String(date.getHours()).padStart(2, 0)}:${String(date.getMinutes()).padStart(2, 0)}`);
    
    if (currentHour != date.getHours()) {
        hoursChanged();
    }
}

timeElement.on("mousedown", (e) => {
    let startX = e.originalEvent.x;
    function dragTime(e) {
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
