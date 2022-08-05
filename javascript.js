const container = document.getElementById("container");

var color;

function makeRows(rowNum) {
    container.replaceChildren()
    container.style.setProperty('--grid-rows', rowNum);
    container.style.setProperty('--grind-cols', rowNum);
    document.documentElement.style.setProperty('--grid-rows', rowNum);
    document.documentElement.style.setProperty('--grid-cols', rowNum);
    for (c= 0; c <(rowNum*rowNum); c++) {
        let cell = document.createElement("div")
        cell.style.setProperty= ('width', `${500/rowNum}px`);
        cell.style.setProperty= ('height', `${500/rowNum}px`);
        cell.addEventListener('click', changeColor)
        container.appendChild(cell).className = "grid-item";

    }
}

function changeColor(e) {
    Object.assign(e.target.style, {
        background : color,
    });
}

function choose(choice){
    color = choice;
}

function numPrompt() {
    var userNum = prompt("Enter a number less than or equal to 100");
    alert(userNum);
    if (userNum > 100) {
        alert("Ahem.. I said.. LESS.. than 100.");
        numPrompt()
    } else if (parseInt(userNum) !== parseInt(userNum)) {
        alert("Uh.. I said a number..?")
        numPrompt()
    } else {
        userInt = parseInt(userNum);
        makeRows(userInt);
    }
}

document.querySelector('#numButton').addEventListener('click', numPrompt);


