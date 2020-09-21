let grid = [
    [2, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 3],
];

function toggleCell(x, y) {
    if (grid[x][y] == 0) {
        grid[x][y] = 1;
    } else {
        grid[x][y] = 0;
    }
}

function drawGrid() {
    // Remove existing grid
    let existingTable = document.getElementsByTagName("table")[0];
    if (existingTable) existingTable.remove();

    // Draw new grid
    let table = document.createElement("table");
    table.style.height = "500px";
    table.style.width = "500px";
    for (let i = 0; i < 10; i++) {
        let row = table.insertRow(i);
        for (let j = 0; j < 10; j++) {
            let cell = row.insertCell(j);
            if (grid[i][j] == 1) {
                cell.style.backgroundColor = "black";
            } else if (grid[i][j] == 2) {
                cell.style.backgroundColor = "red";
            } else if (grid[i][j] == 3) {
                cell.style.backgroundColor = "green";
            }
            cell.addEventListener("click", event => {
                toggleCell(i, j);
                drawGrid();
            });
        }
    }
    document.body.appendChild(table);
}

function main() {
    drawGrid();
}

main();
