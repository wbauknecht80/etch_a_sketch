const container = document.getElementById("container");



function makeRows(rows, cols) {
    container.style.setProperty('--grid-rows', rows);
    container.style.setProperty('--grind-cols', cols);
    for (c= 0; c <(rows*cols); c++) {
        let cell = document.createElement("div")
        cell.innerText = (c+1);
        container.appendChild(cell).className = "grid-item";
        
    }
}

/**function randomColor() {
    r = Math.random() * 255;
    g = Math.random() * 255;
    b = Math.random() * 225;
}**/

makeRows(16, 16);

