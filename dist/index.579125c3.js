function random(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}
let plants = $(".plant");
for(let i = 0; i < plants.length; i++)$(plants[i]).css("left", random(-10, 110) + "%").css("bottom", "-" + random(10, 15) + "px").css("z-index", random(0, 15));
let date = new Date();
let hours = date.getHours();
const backgrounds = [
    [
        1,
        5,
        "first"
    ],
    [
        6,
        10,
        "second"
    ],
    [
        11,
        13,
        "third"
    ],
    [
        14,
        16,
        "fourth"
    ],
    [
        17,
        18,
        "fifth"
    ],
    [
        19,
        21,
        "sixth"
    ],
    [
        22,
        24,
        "seventh"
    ]
];
for(let i = 0; i < backgrounds.length; i++){
    let botMargin, topMargin, className;
    [botMargin, topMargin, className] = backgrounds[i];
    console.log(botMargin);
    if (botMargin <= hours && hours <= topMargin) document.body.className += className;
}
console.log(date.getHours());

//# sourceMappingURL=index.579125c3.js.map
