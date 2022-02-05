

let isgameOver = false;
let turn = 'X';

const changeTurn = () => {
  if (turn === "X") {
    return "O";
  } else {
    return "X";
  }
};



    


const checkWin = () => {
  let boxtext = document.getElementsByClassName('boxtext');
  let wins = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  wins.forEach(e => {
    if ((boxtext[e[0]].innerText === boxtext[e[1]].innerText) &&(boxtext[e[1]].innerText === boxtext[e[2]].innerText) &&  (boxtext[e[0]].innerText !== "")) {
      document.querySelector(".info").innerText =   boxtext[e[0]].innerText + "  Won";
      
        isgameOver = true;
        
        


      
    }
    
  });
};



    

let boxes = document.getElementsByClassName("box");

Array.from(boxes).forEach((element) => {

  let boxtext = element.querySelector(".boxtext");

  element.addEventListener("click", () => {
    if (boxtext.innerText === '') {
        boxtext.innerText = turn;
      turn = changeTurn();
      checkWin();
      if (!isgameOver) {
        document.getElementsByClassName("info")[0].innerText =
          "turn for " + turn;

      }
      else if(isgameOver===true){
          boxtext.innerText = " ";

      }

      
    }
  });
});



let reset = document.getElementById('reset');

reset.addEventListener("click",()=>{
    location.reload()
})


