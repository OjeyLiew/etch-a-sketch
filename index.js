const body = document.querySelector("body");


// Ask user with prompt the size of the grid
const newGrid = document.createElement("button");
newGrid.textContent = "New Grid";
newGrid.addEventListener("click", (event) => {
	let gridSize = -1;
	do {
		gridSize = parseInt(prompt("Enter the size of the grid: ", -1));
	} while(gridSize < 0 || gridSize > 100);
	const grid = document.querySelector(".grid");
	grid.remove();
	createGrid(gridSize);
})

body.appendChild(newGrid);
createGrid(16);

// Create new grid
function createGrid(size) {
	const grid = document.createElement("div");
	grid.classList.add("grid");
	for (let i = 0; i < size*size; i++) {
		const square = document.createElement("div");
		square.classList.add("square");
		calcSize = window.innerWidth/size;
		square.style.width = `${calcSize}px`;
		square.style.height = `${calcSize}px`;
		square.addEventListener("mouseover", (event) => {
			square.style.backgroundColor = "red";
		})
		grid.appendChild(square);
	}
	body.appendChild(grid);
}

console.log(window.innerWidth);
