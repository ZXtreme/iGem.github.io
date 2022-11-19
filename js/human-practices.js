idx = 0
let steps = document.querySelectorAll('.steps h4')
let border = document.querySelector('article').offsetTop - 200
let opacity
// init
if ($(document).scrollTop() >= border) {
  $('.steps').css('opacity', 1)
  opacity = 1
}
else if ($(document).scrollTop() < border) {
  $('.steps').css('opacity', 0)
  opacity = 0
}

$(window).scroll(() => {
  if ($(document).scrollTop() >= border && opacity === 0) {
    $('.steps').css('opacity', 1)
    opacity = 1
  }
  else if ($(document).scrollTop() < border && opacity === 1) {
    $('.steps').css('opacity', 0)
    opacity = 0
  }
})
$(steps[0]).css({ 'color': 'rgb(0,0,0)', 'font-weight': 'bold' })

function click_step(e) {
  if ($('.steps').css('opacity') !== '1') return false;
  $(steps[idx]).css({ 'color': 'rgb(158,158,159)', 'font-weight': 'normal' })
  $(`.iframe${idx}`).css('display', 'none')
  idx = e.data

  $(steps[idx]).css({ 'color': 'rgb(0,0,0)', 'font-weight': 'bold' })
  $(`.iframe${idx}`).css('display', 'block')
  window.scrollTo(0, border + 100)
  scroll_function()
}

$(steps).each((idx, element) => {
  $(element).click(idx, click_step)
})

