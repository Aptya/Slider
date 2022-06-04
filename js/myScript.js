let myCounter
function startMove01() {
    if (myCounter) {
        return;
    }
    myCounter = setInterval(movePicture01, 1);
}

function startMove02() {
    if (myCounter) {
        return;
    }
    myCounter = setInterval(movePicture02, 1);
}

function startMove03() {
    if (myCounter) {
        return;
    }
    myCounter = setInterval(movePicture03, 1);
}

function startMove04() {
    if (myCounter) {
        return;
    }
    myCounter = setInterval(movePicture04, 1);
}

let i = 0;
function movePicture01() {
    if (i < 0) {
        document.getElementById("mainBoxImage").style.left = i + "px";
        i = i + 1;
    } else {
        clearInterval(myCounter);
        myCounter = null;
    }
}

function movePicture02() {
    if (i <= 0 && i > -500) {
        document.getElementById("mainBoxImage").style.left = i + "px";
        i = i - 1;
    } else if (i >= -1500 && i < -500) {
        document.getElementById("mainBoxImage").style.left = i + "px";
        i = i + 1;
    } else {
        clearInterval(myCounter);
        myCounter = null;
    }
}

function movePicture03() {
    if (i > -1000) {
        document.getElementById("mainBoxImage").style.left = i + "px";
        i = i - 1;
    } else if (i < -1000) {
        document.getElementById("mainBoxImage").style.left = i + "px";
        i = i + 1;
    } else {
        clearInterval(myCounter);
        myCounter = null;
    }
}

function movePicture04() {
    if (i > -1500) {
        document.getElementById("mainBoxImage").style.left = i + "px";
        i = i - 1;
    } else {
        clearInterval(myCounter);
        myCounter = null;
    }
}