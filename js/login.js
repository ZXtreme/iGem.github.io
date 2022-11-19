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
  let val0 = $(inputs[0]).val()
  let val1 = $(inputs[1]).val()
  let val2 = $(checkbox).prop('checked')
  if (!(val0.length >= 3 && val0.length <= 20 && val1.length >= 6 && val1.length <= 16)) {
    if (!(val0.length >= 3 && val0.length <= 20)) {
      $('#cond11').css('display', 'inline-block')
      $('#cond12').css('display', 'none')
      $('.text1').css('color', 'red').text('length must be between 3 and 20')
    } else {
      $('#cond12').css('display', 'inline-block')
      $('#cond11').css('display', 'none')
      $('.text1').css('color', 'green').text('correct')
    }

    if (!(val1.length >= 6 && val1.length <= 16)) {
      $('#cond21').css('display', 'inline-block')
      $('#cond22').css('display', 'none')
      $('.text2').css('color', 'red').text('length must be between 6 and 16')
    } else {
      $('#cond22').css('display', 'inline-block')
      $('#cond21').css('display', 'none')
      $('.text2').css('color', 'green').text('correct')
    }
    return;
  }
  xhr.open('POST', 'http://127.0.0.1:3333/login', false);
  xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded')
  xhr.send(`username=${val0}&password=${val1}&register=${val2}`)
  let { status, msg, token, type } = JSON.parse(xhr.responseText);
  if (status === 200) {
    localStorage.setItem('token', token)
    window.location.href = '../html/game.html'
  }
  else if (status === 201) {
    if (type === 1 || type === 3) {
      $('#cond12').css('display', 'none')
      $('#cond11').css('display', 'inline-block')
      $('.text1').css('color', 'red').text(msg)
      $('#cond21').css('display', 'none')
      $('#cond22').css('display', 'inline-block')
      $('.text2').css('color', 'green').text('correct')
    }
    else if (type === 2) {
      $('#cond22').css('display', 'none')
      $('#cond21').css('display', 'inline-block')
      $('.text2').css('color', 'red').text(msg)
      $('#cond11').css('display', 'none')
      $('#cond12').css('display', 'inline-block')
      $('.text1').css('color', 'green').text('correct')
    }
  }
})



