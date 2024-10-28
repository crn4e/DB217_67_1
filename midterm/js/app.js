let mark = [
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
  ];
  let black = 0;
  
  function summary() {
    // เพิ่มคำสั่งที่นี่
    const blackElement = document.getElementById('black');
    blackElement.innerHTML = black;
    const whiteElement = document.getElementById('white');
    whiteElement.innerHTML = white;
    
  }
  
  function flip(pawn) {
    let i = pawn.dataset.i;
    let j = pawn.dataset.j;
    if (mark[i][j] == 0) {
      pawn.classList.add("black");
      mark[i][j] = 1;
      black++;
      summary();
      setTimeout(function () {
        pawn.classList.remove("black");
        mark[i][j] = 0;
        black--;
        summary();
      }, 3000);
    }
  }
  
  function main() {
    // เพิ่มคำสั่งที่นี //
    const pawns = document.getElementsByClassName('pawn');
    for (let pawn of pawns) {
      pawn.addEventListener('click', function (){

      });
    }

  
    summary();
  }
  
  main();

