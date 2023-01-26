const size = 4;
let board = "";

for (let y = 0; y < size; y++) {
    for (let x = 0; x < size; x++) { // Но для лучшего вида я бы сделал - for (let x = 0; x < size * 2; x++) 
        if ((x + y) % 2 == 0)
            board += "*";
        else
            board += " ";
    }

    board += "\n";
}

console.log(board);