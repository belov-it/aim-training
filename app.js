const startBtn = document.querySelector('#startBtn')
const screens = document.querySelectorAll('.screen')
const timeBtnList = document.querySelector('.time-list')
const timeGame = document.querySelector('#time')
const board = document.querySelector('.board')
// console.log(timeBtn)
 let time = 0
 let scoreCount = 0

 const colors = ['#3f82ce','#11ee74',
 '#99ee11','#18be87t','#e7802b','#ce07d4','#29d407','#d40707','#d4c607']

startBtn.addEventListener('click',(event)=>{
    event.preventDefault()
    screens[0].classList.add('up') //у этого класса margin-top = -100vh
})

timeBtnList.addEventListener('click', (event) => {
    if (event.target.classList.contains('time-btn')){
        time = parseInt(event.target.getAttribute('data-time'))
        screens[1].classList.add('up')
        startGame()
    }
    
})

board.addEventListener('click',(event) => {
    if (event.target.classList.contains('circle')){
        scoreCount++
        event.target.remove()
        createCircle()
    }
})

function startGame(){
        timeGame.innerHTML = `00:${time}`
        setInterval(decreaseTime,1000)
        createCircle()
        
}

function decreaseTime(){
    if (time===0){
        finishGame()
    }
    else{
        let currentTime = --time
        timeGame.innerHTML = `00:${currentTime}`
        if (time<10){
            timeGame.innerHTML = `00:0${currentTime}`
        }
    }
}

function finishGame(){
    timeGame.parentNode.classList.add('hide')//скрываем заголовок 
    board.innerHTML = `<h1>Счет: ${scoreCount}</h1>`
    
}

function createCircle(){
    let circle = document.createElement('div')
    circle.classList.add('circle')
    let size = getRandomNumber(15,45)
    const {width,height} = board.getBoundingClientRect()
    let x = getRandomNumber(size,width-size)
    let y = getRandomNumber(size,height-size)
    

    circle.style.width = `${size}px`
    circle.style.height = `${size}px`
    circle.style.top = `${y}px`
    circle.style.left =`${x}px`
    circle.style.background = setRandomColor()
    board.append(circle)
}

function getRandomNumber(min,max){
    //СЛучаное число от min до max не включ
    let randomNubmer = Math.round((Math.random() * (max - min) + min))
    return randomNubmer
}

function setRandomColor(){
    colorIdx = getRandomNumber(0,colors.length)
    return colors[colorIdx]
}



