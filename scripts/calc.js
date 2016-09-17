var whiteGloveBase = 150;

function calc() {


}

function delArea() {
    if (delArea.localeCompare("yard") == 0) {
        return 0;
    } else if(delArea.localeCompare("house") == 0) {
        return 100;
    } else {
        return 200;
    }
}
