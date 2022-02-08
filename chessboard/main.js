var chessBoard = document.getElementById("chess-container");

var y = window.prompt("enter the number");
if(y>50){
    chessBoard.style.width = `${y*2}vw`;
}


var x=8;


for (var i=0; i<y; i++){
    var row = chessBoard.appendChild(document.createElement("div"));
    for (var j=0; j<y; j++){
        row.appendChild(document.createElement("span"));
    }
}