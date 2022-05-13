//Pirámide de gatos
for(let gato='#'; gato.length<=7; gato=gato + '#'){
    console.log(gato)
}
console.log('-------------------')
//Tablero de ajedréz
let size = 8;
let board = "";

for (let y = 0; y < size; y++) {
  for (let x = 0; x < size; x++) {
    if ((x + y) % 2 == 0) {
      board += " ";
    } 
    else {
      board += "#";
    }
  }
  board += "\n";
}

console.log(board);