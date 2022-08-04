const container = document.getElementById("container");



function makeRows(userNum) {
    container.style.setProperty('--grid-rows', userNum);
    container.style.setProperty('--grind-cols', userNum);
    document.documentElement.style.setProperty('--grid-rows', userNum)
    document.documentElement.style.setProperty('--grid-cols', userNum)
    for (c= 0; c <(userNum*userNum); c++) {
        let cell = document.createElement("div")
        cell.style.width = `${960/userNum}px`
        cell.style.height = `${960/userNum}px`
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
        makeRows(userInt);
    }
}

document.querySelector('#numButton').addEventListener('click', numPrompt);
