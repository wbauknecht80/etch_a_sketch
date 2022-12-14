const container = document.getElementById("container");

var color;


let mouseDown = false;
document.body.onmousedown = () => (mouseDown = true);
document.body.onmouseup = () => (mouseDown = false)

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
        cell.addEventListener('mouseover', changeColor)
        cell.addEventListener('mousedown', changeColor)
        container.appendChild(cell).className = "grid-item";

    }
}

function changeColor(e) {
    if (e.type === 'mouseover' && !mouseDown) {
        return
    } else { 
    Object.assign(e.target.style, {
        background : color,
    })};
}

function choose(choice){
    color = choice;
}

makeRows(16);
var color = 'black';

function numPrompt() {
    var userNum = prompt("Enter a number less than or equal to 100");
    alert(userNum);
    if (userNum > 100) {
        alert("Ahem.. I said.. LESS.. than 100.");
        numPrompt()
    } else if (userNum === null){
        return;
    } else if (parseInt(userNum) !== parseInt(userNum)) {
        alert("Uh.. I said a number..?")
        numPrompt()
    } else {
        userInt = parseInt(userNum);
        makeRows(userInt);
    }
}

document.querySelector('#numButton').addEventListener('click', numPrompt);



