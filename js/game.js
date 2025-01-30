'use strict'

const MINE = '💩'
const MARKED = '✅'
const COVERD = '🟨'

const EASY = { size: 4, mines: 2 }
const MED = { size: 8, mines: 14 }
const HARD = { size: 12, mines: 32 }




// const OTHER = +prompt
// const elBoard = document.querySelector("div.board-container")

var isDark = true
var gBoard
var isOn


var gGame = {
    isOn: false,
    coveredCount: 0,
    markedCount: 0,
    secsPassed: 0
}

function onInit() {

    gBoard = buildBoard(EASY.size, EASY.mines)
    renderBoard(gBoard, ".board-container")
}


function buildBoard(size, mineCount) {
    var board = []

    for (var i = 0; i < size; i++) {
        board[i] = []
        for (var j = 0; j < size; j++) {
            board[i][j] = {
                i: i, j: j,
                minesAroundCount: 0,
                isCovered: true,
                isMine: false,
                isMarked: false
            }
        }
    }

    placeMines(board, mineCount)
    setMinesNegsCount(board)

    console.log(board)
    return board
}


function renderBoard(mat, selector) {

    var strHTML = '<table><tbody>'
    for (var i = 0; i < mat.length; i++) {

        strHTML += '<tr>'
        for (var j = 0; j < mat[0].length; j++) {

            const cell = mat[i][j]
            const className = `cell cell-${i}-${j}`

            strHTML += `<td class="${className}" onclick="onCellClicked(this, ${i}, ${j})">
${cell.isCovered 
    ? COVERD
    : cell.isMarked
    ? MARKED 
    : cell.isMine 
    ? MINE 
    : cell.minesAroundCount}
</td>`
        }
        strHTML += '</tr>'
    }
    strHTML += '</tbody></table>'
    console.log(strHTML)

    const elContainer = document.querySelector(selector)
    // if (!elContainer) console.log('no container',selector)
    elContainer.innerHTML = strHTML

}

function placeMines(board, mineCount) {
    var size = board.length
    var minesPlaced = 0
    while (minesPlaced < mineCount) {
        var i = getRandomIntInclusive()
        var j = getRandomIntInclusive()
        if (!board[i][j].isMine) {
            board[i][j].isMine = true
            minesPlaced++
        }
    }
}

function setMinesNegsCount(board) {

    var minesCount = 0
    for (var i = cellI - 1; i <= cellI + 1; i++) {
        if (i < 0 || i >= board.length) continue
        for (var j = cellJ - 1; j <= cellJ + 1; j++) {
            if (i === cellI && j === cellJ) continue
            if (j < 0 || j >= board[i].length) continue
            if (mat[i][j] === gBoard.isMine) minesCount++
        }
    }
    return minesCount
}

function onCellClicked(elCell, i, j) {
    if (!gGame.isOn || !gBoard[i][j].isCovered) return

    gBoard[i][j].isCovered = false
    renderBoard(gBoard, ".board-container")

    console.log('Cell clicked:', i, j)

}


function onCellMarked(elCell) {

}

function checkGameOver() {

}

function expandUncover(board, elCell, i, j) {

}

// var elCell = document.querySelector(`.cell-${gBoard.i}-${gBoard.j}`)
// elCell.addEventListener("mousedown", () =>
//     console.log('cell', i, j))


