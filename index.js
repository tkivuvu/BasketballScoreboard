let counter1 = 0 
let counter2 = 0

let scoreOne = document.getElementById("score-one")
let scoreTwo = document.getElementById("score-two")

function resetGame() {
    counter1 = 0
    counter2 = 0
    scoreOne.textContent = counter1
    scoreTwo.textContent = counter2
}

function addOne1() {
    counter1 += 1
    scoreOne.textContent = counter1
}
function addTwo1() {
    counter1 += 2
    scoreOne.textContent = counter1
}
function addThree1() {
    counter1 += 3
    scoreOne.textContent = counter1
}
function addOne2() {
    counter2 += 1
    scoreTwo.textContent = counter2
}
function addTwo2() {
    counter2 += 2
    scoreTwo.textContent = counter2
}
function addThree2() {
    counter2 += 3
    scoreTwo.textContent = counter2
}






