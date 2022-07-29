var numBoxes = 16

var arrayDiv = new Array()
for (i=0; i < numBoxes; i++) {
    arrayDiv[i] = document.createElement('div');
    arrayDiv[i].id = 'box' + i;
    arrayDiv[i].style.backgroundColor = 'green';
    arrayDiv[i].className = 'box' + i;
    arrayDiv[i].textContent = i
    document.body.appendChild(arrayDiv[i])
}

arrayDiv.stlye.display = 'flex'
arrayDiv.style.flexdirection = 'column'