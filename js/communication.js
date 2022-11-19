function addSquares(ele) {
  for (let i = 0; i < 20; i++) {
    ele.insertAdjacentHTML('afterbegin', `<span class="square" style="top:3%;left:${i / 20 * 100 + 2.5}%"></span>`)
    ele.insertAdjacentHTML('beforeend', `<span class="square" style="bottom:3%;left:${i / 20 * 100 + 2.5}%"></span>`)
  }
}

function addCircles(ele) {
  for (let i = 0; i < 20; i++) {
    ele.insertAdjacentHTML('afterbegin', `<span class="circle" style="top:10px;left:${i / 20 * 100 + 2.5}%"></span>`)
  }
}

let blueBar = document.querySelector('.blueBar')
let redBar = document.querySelector('.redBar')
addSquares(redBar)
addSquares(blueBar)

let rightBottom = document.querySelector('.rightBottom')
addCircles(rightBottom)