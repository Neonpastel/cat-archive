function random(min, max) {
  return Math.floor(Math.random() * (max - min + 1) ) + min;
}

document.getElementById("background").style.left = "100vw";
document.getElementById("background").style.transform = "rotate(500deg)";


//$("#background").style("left", "100vw");