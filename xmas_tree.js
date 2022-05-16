function printTopStars(noOfStars) {
    var star = "   ";
    for (var i = 0; i < noOfStars; i++) {
        if (noOfStars % 2 == 0) {
            star += "* ";
        } else {
            star += " *";
        }

    }
    console.log(star);
}

function printBodyStars(noOfStars) {
    var star = " ";
    for (var i = 0; i < noOfStars; i++) {
        if (noOfStars % 2 == 0) {
            star += "* ";
        } else {
            star += " *";
        }
    }
    console.log(star);
}

function printBottomStars(noOfStars) {
    var star = "  ";
    for (var i = 0; i < noOfStars; i++) {
        if (noOfStars % 2 == 0) {
            star += " *";
        } else {
            star += "* ";
        }
    }
    console.log(star);
}

function topOfTree(startLine, endLine) {
    for (var i = startLine; i <= endLine; i++) {
        printTopStars(i);
    }
}

function bodyOfTree(startLine, endLine) {
    for (var i = startLine; i <= endLine; i++) {
        printBodyStars(i);
    }
}


function bottomOfTree(startLine, endLine) {
    for (var i = startLine; i >= endLine; i--) {
        printBottomStars(i);
    }
    printBottomStars(2);
}

function xmasTree() {
    topOfTree(1, 2);
    bodyOfTree(3, 4);
    bottomOfTree(3, 2);
}

xmasTree()
