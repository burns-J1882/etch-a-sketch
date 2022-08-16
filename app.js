//make a 16x16 grid of divs in .container with js 
//use grid or flex-box
//make a change color on hover event for each of the new divs
//add a button for user to set grid size

//for let loop to generate divs
//use css on the new divs class for a :hover state to turn them white to black
//use CSS on .container to organize into grid


const myContainer = document.querySelector('.container');
generateGrid();

//makes initial 16x16 grid 
function generateGrid() {
for (c = 0; c < 16; c++) {
    let column = document.createElement('div');
    column.classList.add('column');
    myContainer.appendChild(column);
    for (r = 0; r < 16; r++) {
        let row = document.createElement('div');
        row.classList.add('row');
        column.appendChild(row);
    }
};
clickTrigger();
};

//click button to change grid size
const btn = document.querySelector('.btn');
btn.addEventListener('click', chooseSize);

//delete original grid and replace
function chooseSize() {
    let boxSize = prompt("how wide do you want your grid?", 0);
    if (boxSize < 2 || boxSize === null) {
        alert('Please enter a number larger than 1');
        console.log(boxSize);
    } else if (boxSize > 100){
        alert('Please enter a number less than 100')
    } else{
     //delete the old grid
    const rows = document.querySelectorAll('.row');
    const cols = document.querySelectorAll('.column');
    for (element of rows) {
        element.remove();
    }
    for (element of cols) {
        element.remove();
    }
    //create new grid
    for (c = 0; c < boxSize; c++) {
        let column = document.createElement('div');
        column.classList.add('column');
        myContainer.appendChild(column);
        for (r = 0; r < boxSize; r++) {
            let row = document.createElement('div');
            row.classList.add('row');
            column.appendChild(row);
        };
    };
    clickTrigger();
};
};


//changes color black
function changeColor() {
const boxes = document.querySelectorAll('.row');
    for (const box of boxes) {
        box.addEventListener("mouseover", () => {
            box.setAttribute('style', 'background-color: #422800;');
        });
    }
};
//make change color start after click
function clickTrigger (){
    myContainer.addEventListener('click', changeColor);
    };