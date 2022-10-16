const elCells = document.querySelectorAll("td");
const elHeader = document.querySelector('header')
const elBody = document.querySelector("body")
const elButtonReset = document.querySelector(".reset")

let clicks = 0
let turn = 0;

let p1Score = 0 
let p2Score = 0 

//score Display
let scoreDisplay = document.createElement('p')
scoreDisplay.innerHTML = `<span class="p1">${p1Score}</span> | <span class="p2">${p2Score}</span>`

elHeader.append(scoreDisplay)

//player turn
for (const cell of elCells) {
    cell.addEventListener("click", ()=> {

        if (turn % 2 == 0 && cell.innerHTML === "&nbsp;") {
            cell.innerHTML = 'X'
            cell.classList.add("cellP1")
            turn++
        }
        
        if (turn % 2 == 1 && cell.innerHTML === "&nbsp;") {
            cell.innerHTML = 'O'
            cell.classList.add("cellP2")
            turn++
        }

        wins()
        scoreDisplay.innerHTML = `<span class="p1">${p1Score}</span> | <span class="p2">${p2Score}</span>`
    })
}

elButtonReset.addEventListener("click", () => {
    reset()
})

let voile = document.createElement("div")
voile.classList.add("voile")

let modale = document.createElement('div')
modale.classList.add("modale")

voile.append(modale)

function gameOver (joueur) {
    modale.innerHTML = 
    `
        <h2>La partie est terminé</h2>
        <p>${joueur}</p>
        <button class="restart">Recommencer</button>
    `
    elBody.append(voile)
    
    let restartButton = document.querySelector(".restart")
    restartButton.addEventListener("click", ()=> {
        reset()
        voile.remove()
    })
}

function reset () {
    for (const cell of elCells) {
        cell.innerHTML = '&nbsp;'
        cell.classList.remove("cellP1")
        cell.classList.remove("cellP2")
    }
}

function wins () {
    let winSentence = ""

    //p1 wins
    //horizontal
    if (elCells[0].innerText == 'X' && elCells[1].innerText == 'X' && elCells[2].innerText == 'X' ) {
        p1Score++
        winSentence = ("Le joueur 1 a gagné")
    }
    if (elCells[3].innerText == 'X' && elCells[4].innerText == 'X' && elCells[5].innerText == 'X' ) {
        p1Score++
        winSentence = ("Le joueur 1 a gagné")
    }
    if (elCells[6].innerText == 'X' && elCells[7].innerText == 'X' && elCells[8].innerText == 'X' ) {
        p1Score++
        winSentence = ("Le joueur 1 a gagné")
    }

    //vertical
    if (elCells[0].innerText == 'X' && elCells[3].innerText == 'X' && elCells[6].innerText == 'X' ) {
        p1Score++
        winSentence = ("Le joueur 1 a gagné")
    }
    if (elCells[1].innerText == 'X' && elCells[4].innerText == 'X' && elCells[7].innerText == 'X' ) {
        p1Score++
        winSentence = ("Le joueur 1 a gagné")
    }
    if (elCells[2].innerText == 'X' && elCells[5].innerText == 'X' && elCells[8].innerText == 'X' ) {
        p1Score++
        winSentence = ("Le joueur 1 a gagné")
    }

    //diagonal
    if (elCells[0].innerText == 'X' && elCells[4].innerText == 'X' && elCells[8].innerText == 'X' ) {
        p1Score++
        winSentence = ("Le joueur 1 a gagné")
    }
    if (elCells[2].innerText == 'X' && elCells[4].innerText == 'X' && elCells[6].innerText == 'X' ) {
        p1Score++
        winSentence = ("Le joueur 1 a gagné")
    }
    
    //p2 win
    //horizontal
    if (elCells[0].innerText == 'O' && elCells[1].innerText == 'O' && elCells[2].innerText == 'O' ) {
        p2Score++
        winSentence = ("Le joueur 2 a gagné")
    }
    if (elCells[3].innerText == 'O' && elCells[4].innerText == 'O' && elCells[5].innerText == 'O' ) {
        p2Score++
        winSentence = ("Le joueur 2 a gagné")
    }
    if (elCells[6].innerText == 'O' && elCells[7].innerText == 'O' && elCells[8].innerText == 'O' ) {
        p2Score++
        winSentence = ("Le joueur 2 a gagné")
    }

    //vertical
    if (elCells[0].innerText == 'O' && elCells[3].innerText == 'O' && elCells[6].innerText == 'O' ) {
        p2Score++
        winSentence = ("Le joueur 2 a gagné")
    }
    if (elCells[1].innerText == 'O' && elCells[4].innerText == 'O' && elCells[7].innerText == 'O' ) {
        p2Score++
        winSentence = ("Le joueur 2 a gagné")
    }
    if (elCells[2].innerText == 'O' && elCells[5].innerText == 'O' && elCells[8].innerText == 'O' ) {
        p2Score++
        winSentence = ("Le joueur 2 a gagné")
    }

    //diagonal
    if (elCells[0].innerText == 'O' && elCells[4].innerText == 'O' && elCells[8].innerText == 'O' ) {
        p2Score++
        winSentence = ("Le joueur 2 a gagné")
    }
    if (elCells[2].innerText == 'O' && elCells[4].innerText == 'O' && elCells[6].innerText == 'O' ) {
        p2Score++
        winSentence = ("Le joueur 2 a gagné")
    }

    //Tie
    if (turn >8) {
        gameOver("C'est un match Nul!!")
        turn = 0;
        
    }

    if (winSentence != "") {
        gameOver(winSentence)
        turn = 0
    }
}


