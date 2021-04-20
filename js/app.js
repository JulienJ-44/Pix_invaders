// ton code ici

// créer une variable contenant le nombre de case en largeur (= longueur car carré) => nbCase
var nbCase = 8
var selectedColor = '#d2dae2'
var pixelSize = 25;
var borderColor

// Pour i = 1 à i = nbCase
// Pour j = 1 à j = nbCase
// Créer l'élement de base de la grille (un carré de x pixels de coté)
// Création d'une div : et lui attribuer la classe 'square' 

createGrid(8)

function createGrid(pNbCell, pPixelSize) {
    for (i = 0; i != pNbCell; i++) {
        var row = document.createElement('div');
        row.className = 'line';
        row.id = i
        document.getElementById('invader').appendChild(row);

        for (j = 0; j != pNbCell; j++) {
            var cell = document.createElement('div');
            cell.className = 'cell';
            document.getElementById(i).appendChild(cell);
            cell.addEventListener('click', switchColor);
            cell.style.width = `${pPixelSize}px`;
            row.style.height = `${pPixelSize}px`;
            cell.style.height = `${pPixelSize}px`;
        }
    }

}

function emptyDiv(divId) {
    //je cible l'élément à vider à partir de son id fourni en argument
    var target = document.getElementById(divId);
    //je vide la div en mettant sa propriété innerHTML à chaine vide
    target.innerHTML = '';
}


function switchColor(event) {
    var clicked_cell = event.target;
    var currentColor = clicked_cell.style.backgroundColor
    // curent_color = clicked_cell.backgroundColor

    if (currentColor !== selectedColor) {
        clicked_cell.style.backgroundColor = selectedColor;
        clicked_cell.style.borderColor = borderColor;
    }
    // else{
    //     clicked_cell.style.backgroundColor = classColor;
    // }   
}

function size(event) {
    emptyDiv('invader');
    event.preventDefault();
    nbCase = document.getElementById("inputGridSize").value;
    pixelSize = document.getElementById("inputCellSize").value;
    createGrid(nbCase, pixelSize);
    classeCell = document.querySelectorAll('.cell');

}

var gridSize = document.createElement('input');
gridSize.className = "input";
gridSize.id = "inputGridSize";
gridSize.setAttribute('type', 'text');
gridSize.placeholder = "Taille de la grille";
document.querySelector(".configuration").appendChild(gridSize);

var cellSize = document.createElement('input');
cellSize.className = "input";
cellSize.id = "inputCellSize";
cellSize.setAttribute('type', 'text');
cellSize.placeholder = "Taille des pixels";
document.querySelector(".configuration").appendChild(cellSize);

var submitButton = document.createElement('input');
submitButton.className = "submitButton";
submitButton.setAttribute('type', 'submit');
submitButton.value = "Valider"
document.querySelector(".configuration").appendChild(submitButton);

submitButton.addEventListener('click', size);

var colorButton = document.querySelectorAll('.color_button');
console.log(colorButton, colorButton.length);


for (var i = 0; i < colorButton.length; i++) {
    var buttonEnCours = colorButton[i];
    console.log(colorButton[i])
    buttonEnCours.addEventListener('click', function (event) {

        var button_color_class = event.target.className;

        switch (button_color_class) {
            case "color_button color_button--plain":
                selectedColor = "#d2dae2";
                borderColor = "#aab1b8";
                break;
            case "color_button color_button--empty":
                selectedColor = "#485460";
                borderColor = "#374049";
                break;
            case "color_button color_button--light":
                selectedColor = "#fbc048";
                borderColor = "#ad8330";
                break;
            case "color_button color_button--highlight":
                selectedColor = "#79ea83";
                borderColor = "#529e58";
                break;
        }


        console.log("selectedColor :" + selectedColor)
    });
}