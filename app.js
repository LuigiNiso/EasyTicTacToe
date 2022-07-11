var cells = document.querySelectorAll('.cell');
var turn = document.querySelector('.turn .player')
var symbol = document.querySelector('.symbol')

var panel = document.querySelector('.panel')
var winner = document.querySelector('.winner')
var restart = document.querySelector('.panel button')


//set onclick function for each cell
var count = 0;
cells.forEach(cell => {
    cell.setAttribute('onclick', 'play(' + count + ')');
    count++;
});

//variable to manage the turn
var k = 0;

//get the cell number and fill it with the symbol of the current player and check if the player wins
function play(n) {
    if (cells[n].style.backgroundImage == '') {
        if (k % 2 == 0) {
            cells[n].style.backgroundImage = 'url(images/x.png)';
            cells[n].setAttribute('name', 'x');
            turn.innerHTML = 'Player 2';
            turn.style.background = 'linear-gradient(80deg, #F25700 1.80%, #FFA800 100%)';
            turn.style.webkitBackgroundClip = 'text';
            symbol.style.backgroundImage = 'url(images/o.png)';
        } else {
            cells[n].style.backgroundImage = 'url(images/o.png)'
            cells[n].setAttribute('name', 'o');
            turn.innerHTML = 'Player 1';
            turn.style.background = 'linear-gradient(80deg, #306DA6 1.80%, #0094E8 100%)';
            turn.style.webkitBackgroundClip = 'text';
            symbol.style.backgroundImage = 'url(images/x.png)';
        }
        k++;
    }

    //create the winning combinations array and check if the player wins
    patterns = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];

    var p1win = false;
    var p2win = false;

    //check if player 1 has won
    for (let i = 0; i < patterns.length; i++) {
        for (let j = 0; j < patterns[i].length; j++) {
            if (cells[patterns[i][j]].getAttribute('name') != 'x') {
                p1win = false;
                break;
            } else {
                p1win = true;
            }
        }
        if (p1win == true) {
            player1Wins();
        }
    }

    //check if player 2 has won
    for (let i = 0; i < patterns.length; i++) {
        for (let j = 0; j < patterns[i].length; j++) {
            if (cells[patterns[i][j]].getAttribute('name') == 'o') {
                p2win = true;
            } else {
                p2win = false;
                break;
            }
        }
        if (p2win == true) {
            player2Wins();
        }
    }
    if ((p1win == false && p2win == false) && k > 8) {
        draw();
    }
}

//make the panel visible when the player wins
function player1Wins() {
    panel.style.display = 'flex';
    panel.style.border = 'solid 4px #306DA6';
    winner.innerHTML = 'Player 1 wins!';
    winner.style.background = 'linear-gradient(45deg, #306DA6 1.80%, #42A4FF 100%)'
    restart.style.background = 'linear-gradient(45deg, #306DA6 1.80%, #42A4FF 100%)';
    winner.style.webkitBackgroundClip = 'text';
}

//make the panel visible when the player wins
function player2Wins() {
    panel.style.display = 'flex';
    winner.innerHTML = 'Player 2 wins!';
    winner.style.background = 'linear-gradient(80deg, #F25700 1.80%, #FFA800 100%)'
    restart.style.background = 'linear-gradient(80deg, #F25700 1.80%, #FFA800 100%)';
    winner.style.webkitBackgroundClip = 'text';
    panel.style.border = 'solid 4px #F25700';
}


//make the panel visible when the player draws
function draw() {
    panel.style.display = 'flex';
    winner.innerHTML = 'Draw!';
    winner.style.background = 'linear-gradient(80deg, #F25700 1.80%, #306DA6 100%)'
    restart.style.background = 'linear-gradient(80deg, #F25700 1.80%, #306DA6 100%)';
    winner.style.webkitBackgroundClip = 'text';
    panel.style.border = 'solid 4px #306DA6';
}

//restart the game
function playAgain() {
    k = 0;
    turn.innerHTML = 'Player 1';
    turn.style.background = 'linear-gradient(80deg, #306DA6 1.80%, #0094E8 100%)';
    turn.style.webkitBackgroundClip = 'text';
    symbol.style.backgroundImage = 'url(images/x.png)';
    panel.style.display = 'none';

    cells.forEach(cell => {
        cell.style.backgroundImage = '';
        cell.setAttribute('name', '');
    });
}