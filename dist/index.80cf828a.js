function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
const background = document.getElementById("background");
function createSvgElement(name, attributes) {
    const elem = document.createElementNS("http://www.w3.org/2000/svg", name);
    for(let i = 0; i < attributes.length; i += 2){
        const attribute = attributes[i];
        const value = attributes[i + 1];
        elem.setAttributeNS(null, attribute, value);
    }
    return elem;
}
function randomCircle() {
    let elem = createSvgElement("circle", [
        "cx",
        random(1, 100) + "vh",
        "cy",
        random(1, 20) + "vw",
        "r",
        random(1, 50)
    ]);
    return elem;
}
let shapes = [
    randomCircle
];
function randomSvg() {
    let elem = shapes[random(0, shapes.length)]();
    background.appendChild(elem);
}
randomSvg();

//# sourceMappingURL=index.80cf828a.js.map
