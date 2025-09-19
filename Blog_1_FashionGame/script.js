let topImages = ["T1.png", "T2.png", "T3.png", "T4.png", "T5.png", "T6.png", "T7.png", "T8.png", "T9.png"];
let bottomImages = ["B0.png", "B1.png", "B2.png", "B3.png", "B4.png"];
let topIndex = 0, bottomIndex = 0;

function prevImage(position) {
    if (position === 'top') {
        topIndex = (topIndex - 1 + topImages.length) % topImages.length;
        document.getElementById("topImage").src = topImages[topIndex];
    } else {
        bottomIndex = (bottomIndex - 1 + bottomImages.length) % bottomImages.length;
        document.getElementById("bottomImage").src = bottomImages[bottomIndex];
    }
}

function nextImage(position) {
    if (position === 'top') {
        topIndex = (topIndex + 1) % topImages.length;
        document.getElementById("topImage").src = topImages[topIndex];
    } else {
        bottomIndex = (bottomIndex + 1) % bottomImages.length;
        document.getElementById("bottomImage").src = bottomImages[bottomIndex];
    }
}