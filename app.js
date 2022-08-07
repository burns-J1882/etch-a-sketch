console.log('hello world');

//make a 16x16 grid of divs in .container with js 
    //use grid or flex-box
//make a change color on hover event for each of the new divs
//add a button for user to set grid size

//for let loop to generate divs
    //use css on the new divs class for a :hover state to turn them white to black
//use CSS on .container to organize into grid

const myContainer = document.querySelector('.container');

for (i=0; i<16; i++){
    let grid = document.createElement('div');
    grid.classList.add('grid');
    grid.textContent = `js div ${i + 1}`;
    myContainer.appendChild(grid);
    console.log(i)
}
