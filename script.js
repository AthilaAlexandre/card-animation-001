const img1 = document.getElementById('img1')
const img2 = document.getElementById('img2')

const setaRight = document.getElementById('right')
const setaLeft = document.getElementById('left')

setaLeft.addEventListener('click', () => {
    img1.style.left = '65px'
    img2.style.left = '650px'
})

setaRight.addEventListener('click', () => {
    img1.style.left = '650px'
    img2.style.left = '65px'
})