var cells = document.querySelectorAll('.cell');
var turn = document.querySelector('.turn .player')
var symbol = document.querySelector('.symbol')

var count = 0;
cells.forEach(cell => {
  cell.setAttribute('onclick', 'play(' + count + ')');
  count++;
});

var k = 0;

function play(n){
  if(k % 2 == 0){
    cells[n].style.backgroundImage = 'url(images/x.png)';
    cells[n].setAttribute('name', 'x');
    turn.innerHTML = 'Player 2';
    turn.style.background = 'linear-gradient(80deg, #F25700 1.80%, #FFA800 100%)';
    turn.style.webkitBackgroundClip = 'text';
    symbol.style.backgroundImage = 'url(images/o.png)';
  }else{
    cells[n].style.backgroundImage = 'url(images/o.png)'
    cells[n].setAttribute('name', 'o');;
    turn.innerHTML = 'Player 1';
    turn.style.background = 'linear-gradient(80deg, #306DA6 1.80%, #0094E8 100%)';
    turn.style.webkitBackgroundClip = 'text';
    symbol.style.backgroundImage = 'url(images/x.png)';
  }
  k++;

  if(cells[0].getAttribute('name') == 'x' && cells[1].getAttribute('name') == 'x' && cells[2].getAttribute('name') == 'x'){
    alert('Player 1 wins!');
  }else{
    console.log('sium');
  }
}