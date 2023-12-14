const cells =document.querySelectorAll('.cell');
let turn = true;
let player1 ={
    symbol : '<i class=" fa fa-close">  </i>' ,
    played : [] ,
    score : 0
}
let player2 ={
    symbol : '<i class=" fa fa-circle">  </i>' ,
    played : [] ,
    score : 0
}
for(let i=0 ; i<9 ;i++){
    cells[i].addEventListener('click', () => {
        if(turn){
            add(player2,i);
            turn =false;
        }
      else {
        add(player1,i);
        turn = true;
      }
    })
}

function add(player, i){
    cells[i].innerHTML =player.symbol;
}