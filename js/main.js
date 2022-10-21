const cells = document.querySelectorAll('.cell')
const score = document.querySelector('#score')
const timeLeft = document.querySelector('#timeLeft')
const starter = document.querySelector('.starter')
const stop = document.querySelector('.stop')

let position
let timer = null
let currentScore = 0

starter.addEventListener('click', ()=>{
    timer = 30
})
stop.addEventListener('click', ()=>{
    timer = 0
    timeLeft.innerHTML = timer
    score.innerHTML = 0
})

cells.forEach(cell=>{
    cell.addEventListener('mousedown', ()=>{
        if (cell.id === position){
            currentScore++
            score.innerHTML = currentScore
            position = null
            cell.classList.remove('chrisRock')
        }
    })
})

function randomlySpawnChris(){
    if (!timer) return

    cells.forEach(cell=>{cell.classList.remove('chrisRock')})

    let randomCell = cells[Math.floor(Math.random()*9)]
    randomCell.classList.add('chrisRock')

    position = randomCell.id //id de la cellule qui affiche chris
}


function countdown(){
    if (!timer) return
    timer--
    timeLeft.innerHTML = `${timer} seconds`
    if (timer === 0){
        alert(`Game Over your score is : ${currentScore}`)
        currentScore = 0
    }
}
countdown()

let mooveChris = setInterval(randomlySpawnChris, 700)
let startCoundown = setInterval(countdown, 1000)
