const container = document.getElementById("container");



function makeRows(rows, cols) {
    container.style.setProperty('--grid-rows', rows);
    container.style.setProperty('--grind-cols', cols);
    for (c= 0; c <(rows*cols); c++) {
        let cell = document.createElement("div")
        cell.innerText = (c+1);
        container.appendChild(cell).className = "grid-item";
        cell.addEventListener('mouseover', 
    e => e.target.classList.add('my-color-class')
)
    }
}


function numPrompt() {
    var userNum = prompt("Enter a number less than or equal to 100");
    alert(userNum);
    if (userNum > 100) {
        var userNUm = prompt("Ahem.. I said.. LESS.. than 100.");
    } else {
        userInt = parseInt(userNum);
        makeRows(userInt, userInt);
    }
}

document.querySelector('#numButton').addEventListener('click', numPrompt);




