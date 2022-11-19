const tabs = document.querySelectorAll('.tab-month img')
const month_title = document.querySelector('.month p')
const details = document.querySelectorAll('div[class^=detail-month]')
let selected = 0;
(function() {
  tabs.forEach((ele, idx) => {
    if (idx === selected) {
      $(ele).css('display', 'block')
      $(details[idx]).css('display', 'block')
    }
    else {
      $(ele).css('display', 'none')
      $(details[idx]).css('display', 'none')
    }
  })
})()

const tab = document.querySelector('.tab')
const title = ['October', 'November', 'December', 'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September']
const circles = document.querySelectorAll('.tab-month .bigcircle')
function animation(scroll) {
  let origin = tab.scrollLeft
  let dist = scroll - origin
  var timer = setInterval(() => {
    if (Math.abs(tab.scrollLeft - scroll) < 20) {
      clearInterval(timer)
      return
    }
    tab.scrollLeft += dist / 20
  }, 20)
}
circles.forEach((ele, idx) => {
  ele.addEventListener('click', (e) => {
    $(details[selected]).css('display', 'none')
    $(tabs[selected]).css('display', 'none')
    selected = idx
    $(details[selected]).css('display', 'block')
    $(tabs[selected]).css('display', 'block')
    $(month_title).text(title[selected])
    scroll_function()
    let scroll = 190 * idx + 95 - tab.offsetWidth / 2
    if (scroll <= 0) scroll = 0
    if (scroll + tab.offsetWidth >= 2280) scroll = 2280 - tab.offsetWidth
    animation(scroll)
  })
})