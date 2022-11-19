const labels = document.querySelectorAll('.form-control label');
const inputs = document.querySelectorAll('.form-control input');
labels.forEach((label, idx) => {
  $(label).click(function() {
    $(inputs[idx]).focus()
  })
})


$('.form-control input').focus(function() {
  $(this).css('border-bottom-color', 'lightblue')
  $(this).siblings('label').find('span').css({ 'color': 'lightblue', 'transform': 'translateY(-30px)' })
}).blur(function() {
  if ($(this).val() === '') {
    $(this).css('border-bottom-color', 'white')
    $(this).siblings('label').find('span').css({ 'color': 'white', 'transform': 'translateY(0px)' })
  }
})


var xhr = new XMLHttpRequest();
const btn = document.querySelector('.login .btn')
const checkbox = document.querySelector('.login .check input')

$(btn).click(function(e) {
  e.preventDefault()
  window.location.href = '../html/game.html'
})



