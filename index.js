const grid = document.createElement("div");
const body = document.querySelector("body");
grid.classList.add("grid");
for (let i = 0; i < 16*16; i++) {
	const square = document.createElement("div");
	square.classList.add("square");
	grid.appendChild(square);
}
body.appendChild(grid);
