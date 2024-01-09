const leftTop = document.getElementById('lt')
const leftMiddle = document.getElementById('lm')
const leftBottom = document.getElementById('lb')
const middleTop = document.getElementById('mt')
const middleMiddle = document.getElementById('mm')
const middleBottom = document.getElementById('mb')
const rightTop = document.getElementById('rt')
const rightMiddle = document.getElementById('rm')
const rightBottom = document.getElementById('rb')
let turn = 'red'
let moves = 0
let board = {
    lt: {
        for: undefined,
        active:false
    },
    lm: {
        for: undefined,
        active:false
    },
    lb: {
        for: undefined,
        active:false
    },
    mt: {
        for:undefined,
        active:false
    },
    mm: {
        for:undefined,
        active:false
    },
    mb: {
        for:undefined,
        active:false
    },
    rt: {
        for:undefined,
        active:false
    },
    rm: {
        for:undefined,
        active:false
    },
    rb: {
        for:undefined,
        active:false
    }
}
function changeTurn() {
    if (turn === 'red') {
        turn = 'blue'
    } else {
        turn = 'red'
    }
}
function checkWin() {
    if(board.lt.for === 'red' && board.mt.for === 'red' && board.rt.for === 'red') {
        document.getElementById('winner').innerHTML = '<span style="font-weight: bolder; color: red;">Red</span> Has won'
        document.getElementById('playAgainBtn').style.display = 'inline-block'
    } else if (board.lt.for === 'red' && board.mm.for === 'red' && board.rb.for === 'red') {
        document.getElementById('winner').innerHTML = '<span style="font-weight: bolder; color: red;">Red</span> Has won'
        document.getElementById('playAgainBtn').style.display = 'inline-block'
    } else if (board.lt.for === 'red' && board.lm.for === 'red' && board.lb.for === 'red') {
        document.getElementById('winner').innerHTML = '<span style="font-weight: bolder; color: red;">Red</span> Has won'
        document.getElementById('playAgainBtn').style.display = 'inline-block'
    }
    else if (board.rt.for === 'red' && board.rm.for === 'red' && board.rb.for === 'red') {
        document.getElementById('winner').innerHTML = '<span style="font-weight: bolder; color: red;">Red</span> Has won'
        document.getElementById('playAgainBtn').style.display = 'inline-block'
    }
    else if (board.lb.for === 'red' && board.mb.for === 'red' && board.rb.for === 'red') {
        document.getElementById('winner').innerHTML = '<span style="font-weight: bolder; color: red;">Red</span> Has won'
        document.getElementById('playAgainBtn').style.display = 'inline-block'
    }
    else if (board.lm.for === 'red' && board.mm.for === 'red' && board.rm.for === 'red') {
        document.getElementById('winner').innerHTML = '<span style="font-weight: bolder; color: red;">Red</span> Has won'
        document.getElementById('playAgainBtn').style.display = 'inline-block'
    }
    else if (board.mt.for === 'red' && board.mm.for === 'red' && board.mb.for === 'red') {
        document.getElementById('winner').innerHTML = '<span style="font-weight: bolder; color: red;">Red</span> Has won'
        document.getElementById('playAgainBtn').style.display = 'inline-block'
    } else if (board.rt.for === 'red' && board.mm.for === 'red' && board.lb.for === 'red') {
        document.getElementById('winner').innerHTML = '<span style="font-weight: bolder; color: red;">Red</span> Has won'
        document.getElementById('playAgainBtn').style.display = 'inline-block'
    }else if(board.lt.for === 'blue' && board.mt.for === 'blue' && board.rt.for === 'blue') {
        document.getElementById('winner').innerHTML = '<span style="font-weight: bolder; color: blue;">Blue</span> Has won'
        document.getElementById('playAgainBtn').style.display = 'inline-block'
    } else if (board.lt.for === 'blue' && board.mm.for === 'blue' && board.rb.for === 'blue') {
        document.getElementById('winner').innerHTML = '<span style="font-weight: bolder; color: blue;">Blue</span> Has won'
        document.getElementById('playAgainBtn').style.display = 'inline-block'
    } else if (board.lt.for === 'blue' && board.lm.for === 'blue' && board.lb.for === 'blue') {
        document.getElementById('winner').innerHTML = '<span style="font-weight: bolder; color: blue;">Blue</span> Has won'
        document.getElementById('playAgainBtn').style.display = 'inline-block'
    }
    else if (board.rt.for === 'blue' && board.rm.for === 'blue' && board.rb.for === 'blue') {
        document.getElementById('winner').innerHTML = '<span style="font-weight: bolder; color: blue;">Blue</span> Has won'
        document.getElementById('playAgainBtn').style.display = 'inline-block'
    }
    else if (board.lb.for === 'blue' && board.mb.for === 'blue' && board.rb.for === 'blue') {
        document.getElementById('winner').innerHTML = '<span style="font-weight: bolder; color: blue;">Blue</span> Has won'
        document.getElementById('playAgainBtn').style.display = 'inline-block'
    }
    else if (board.lm.for === 'blue' && board.mm.for === 'blue' && board.rm.for === 'blue') {
        document.getElementById('winner').innerHTML = '<span style="font-weight: bolder; color: blue;">Blue</span> Has won'
        document.getElementById('playAgainBtn').style.display = 'inline-block'
    }
    else if (board.mt.for === 'blue' && board.mm.for === 'blue' && board.mb.for === 'blue') {
        document.getElementById('winner').innerHTML = '<span style="font-weight: bolder; color: blue;">Blue</span> Has won'
        document.getElementById('playAgainBtn').style.display = 'inline-block'
    } else if (board.rt.for === 'blue' && board.mm.for === 'blue' && board.lb.for === 'blue') {
        document.getElementById('winner').innerHTML = '<span style="font-weight: bolder; color: blue;">Blue</span> Has won'
        document.getElementById('playAgainBtn').style.display = 'inline-block'
    }
    else if (board.lt.for === 'blue' && board.mm.for === 'blue' && board.rb.for === 'blue') {
        document.getElementById('winner').innerHTML = '<span style="font-weight: bolder; color: blue;">Blue</span> Has won'
        document.getElementById('playAgainBtn').style.display = 'inline-block'
    } else if (moves === 8){
        document.getElementById('winner').textContent = 'It is a tie!'
        document.getElementById('playAgainBtn').style.display = 'inline-block'
    }
}
document.getElementById('playAgainBtn').addEventListener('click', ()=>{
    location.reload()
})
function checkBoard() {
    if (moves >= 4) {
        checkWin()  
    } else {
      console.log('game has not reached possible win position')  
    }
}leftTop.addEventListener('click', function(e) {                                                                                                                                                                                             
    let bg = document.createElement('img')
    bg.src = 'script/' + turn + '.png'
    board.lt.for = turn
    checkBoard()
    changeTurn()
    moves++
    e.target.appendChild(bg)
    bg.style.position = 'absolute'
    bg.style.width = '100px'
    bg.style.left = '10%'
    bg.style.top = '10%'
    bg.style.transform = 'translate(-10%, -10%)'
})
leftMiddle.addEventListener('click', function(e) {
    let bg = document.createElement('img')
    bg.src = 'script/' + turn + '.png'
    board.lm.for = turn
    checkBoard()
    changeTurn()
    moves++
    e.target.appendChild(bg)
    bg.style.position = 'absolute'
    bg.style.width = '100px'
    bg.style.left = '10%'
    bg.style.top = '50%'
    bg.style.transform = 'translate(-10%, -50%)'
})
leftBottom.addEventListener('click', function(e) {
    let bg = document.createElement('img')
    bg.src = 'script/' + turn + '.png'
    board.lb.for = turn
    checkBoard()
    changeTurn()
    moves++
    e.target.appendChild(bg)
    bg.style.position = 'absolute'
    bg.style.width = '100px'
    bg.style.left = '10%'
    bg.style.top = '90%'
    bg.style.transform = 'translate(-10%, -90%)'
})
middleTop.addEventListener('click', function(e) {
    let bg = document.createElement('img')
    bg.src = 'script/' + turn + '.png'
    board.mt.for = turn
    checkBoard()
    changeTurn()
    moves++
    e.target.appendChild(bg)
    bg.style.position = 'absolute'
    bg.style.width = '100px'
    bg.style.left = '50%'
    bg.style.top = '10%'
    bg.style.transform = 'translate(-50%, -10%)'
})
middleMiddle.addEventListener('click', function(e) {
    let bg = document.createElement('img')
    bg.src = 'script/' + turn + '.png'
    board.mm.for = turn
    checkBoard()
    changeTurn()
    moves++
    e.target.appendChild(bg)
    bg.style.position = 'absolute'
    bg.style.width = '100px'
    bg.style.left = '50%'
    bg.style.top = '50%'
    bg.style.transform = 'translate(-50%, -50%)'
})
middleBottom.addEventListener('click', function(e) {
    let bg = document.createElement('img')
    bg.src = 'script/' + turn + '.png'
    board.mb.for = turn
    checkBoard()
    changeTurn()
    moves++
    e.target.appendChild(bg)
    bg.style.position = 'absolute'
    bg.style.width = '100px'
    bg.style.left = '50%'
    bg.style.top = '90%'
    bg.style.transform = 'translate(-50%, -90%)'
})
rightTop.addEventListener('click', function(e) {
    let bg = document.createElement('img')
    bg.src = 'script/' + turn + '.png'
    board.rt.for = turn
    checkBoard()
    changeTurn()
    moves++
    e.target.appendChild(bg)
    bg.style.position = 'absolute'
    bg.style.width = '100px'
    bg.style.left = '90%'
    bg.style.top = '10%'
    bg.style.transform = 'translate(-90%, -10%)'
})
rightMiddle.addEventListener('click', function(e) {
    let bg = document.createElement('img')
    bg.src = 'script/' + turn + '.png'
    board.rm.for = turn
    checkBoard()
    changeTurn()
    moves++
    e.target.appendChild(bg)
    bg.style.position = 'absolute'
    bg.style.width = '100px'
    bg.style.left = '90%'
    bg.style.top = '50%'
    bg.style.transform = 'translate(-90%, -50%)'
})
rightBottom.addEventListener('click', function(e) {
    let bg = document.createElement('img')
    bg.src = 'script/' + turn + '.png'
    board.rb.for = turn
    checkBoard()
    changeTurn()
    moves++
    e.target.appendChild(bg)
    bg.style.position = 'absolute'
    bg.style.width = '100px'
    bg.style.left = '90%'
    bg.style.top = '90%'
    bg.style.transform = 'translate(-90%, -90%)'
})
