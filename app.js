//make a 16x16 grid of divs in .container with js 
    //use grid or flex-box
//make a change color on hover event for each of the new divs
//add a button for user to set grid size

//for let loop to generate divs
    //use css on the new divs class for a :hover state to turn them white to black
//use CSS on .container to organize into grid


const myContainer = document.querySelector('.container');

//this makes one row or column 
for (c = 0; c < 16; c++){
    let column = document.createElement('div');
    column.classList.add('column');
    myContainer.appendChild(column);
    for (r = 0; r < 16; r++){
    let row = document.createElement('div');
    row.classList.add('row');
    column.appendChild(row);
    }
}

const boxes = document.querySelectorAll('.row');

for (const box of boxes) {
    box.addEventListener("mouseover", () => {
       // let hovEvent = document.getElementsByClassName('row');
        box.setAttribute('style', 'background-color: black');
    });
}