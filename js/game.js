'use strict'

const MINE = '💩'
const MARKED = '✅'
const COVERD = '🟨'

const EASY = {size:4, mines:2}
const MED = {size:8, mines:14}
const HARD = {size:12, mines:32}



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

    gBoard = buildBoard(EASY.size)
    renderBoard(gBoard, ".board-container")
}


function buildBoard(Size, mines) {
    var board = []

    for (var i = 0; i < Size; i++) {
        board[i] = []
        for (var j = 0; j < Size; j++) {
            board[i][j] = {
                i:i, j:j,
                minesAroundCount: 0,
                isCovered: true,
                isMine: false,
                isMarked: false
            }
        }
    }
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

            strHTML += `<td class="${className}">
                                    ${cell.isCovered ? COVERD : cell.isMarked ? MARKED : cell.isMine ? MINE : cell.minesAroundCount}
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


function setMinesNegsCount(board){

    var minesCount = 0
    for (var i = cellI - 1; i <= cellI + 1; i++) {
        if (i < 0 || i >= mat.length) continue
        for (var j = cellJ - 1; j <= cellJ + 1; j++) {
            if (i === cellI && j === cellJ) continue
            if (j < 0 || j >= mat[i].length) continue
            if (mat[i][j] === gBoard.isMine) minesCount++
        }
    }
    return minesCount
}

function onCellClicked(elCell, i, j){

    // var elCell = `cell-${i}-${j}`

}

function onCellMarked(elCell){

}

function checkGameOver(){

}

function expandUncover(board, elCell, i, j) {

}


