const t1 = Date.now();
document.onreadystatechange = function() { //即在加载的过程中执行下面的代码
  var loading = document.querySelector('.loading-out')
  var fadeIn = document.querySelector('.loading-fade-in')
  if (document.readyState == "complete") {
    const t2 = Date.now();
    if (t2 - t1 > 1000) {
      loading.style.display = "none";
      document.body.style.overflow = "visible";
    }
    else {
      setTimeout(() => {
        fadeIn.style.animation = "out .8s ease"
        setTimeout(() => {
          loading.style.display = "none";
          document.body.style.overflow = "visible";
        }, 800)
      }, 1000 - (t2 - t1))
    }
  }
}

function lazyload(images) {

  function onscroll() {
    if (imgs.length === 0) {                          // 如果没有待加载图片,移除监听 
      return window.removeEventListener('scroll', fn)
    }
    imgs = imgs.filter(img => img.classList.contains('lazyload'))   // 清洗数组    
    imgs.forEach(img => {
      if (inViewport(img)) {
        loadImage(img)
      }
    })
  }

  function inViewport(img) {                             // 判断img元素是否在视口内 或 接近视口   
    let { top, right, bottom, left } = img.getBoundingClientRect()
    let vpHeight = document.documentElement.clientHeight + 200
    let vpWidth = document.documentElement.clientWidth + 200
    return (
      (top > 0 && top < vpHeight || bottom > 0 && bottom < vpHeight)
      && (left > 0 && left < vpWidth || right > 0 && right < vpWidth))
  }

  function loadImage(img) {                              // img加载函数,加载后移除lazyload    
    let image = new Image()
    image.src = img.dataset.src
    image.onload = function() {
      img.src = image.src
      img.classList.remove('lazyload')
    }
  }

  let fn

  function throttle(func, wait) {
    let previous, timer
    return fn = () => {
      let current = Date.now()
      let different = current - previous
      if (!previous || different >= wait) {
        func()
        previous = current
      } else if (different < wait) {
        clearTimeout(timer)
        timer = setTimeout(fn, wait - different)
      }
    }
  }

  let imgs = [].slice.call(images)     // 将dom对象变成数组
  window.addEventListener('scroll', throttle(onscroll, 500))         // 添加 scroll 事件监听  
  window.dispatchEvent(new Event('scroll'))     // 因为是监听scroll,所以手动触发保证第一屏的加载
}

lazyload(document.querySelectorAll('.lazyload'))

// 头部
let h_lis = document.querySelectorAll('header ul li');
$(h_lis).mouseover(function() {
  $(this).children('dl').css('display', 'block');
}).mouseleave(function() {
  $(this).children('dl').css('display', 'none');
})
$('header ul li dl').each((idx, ele) => {
  $(ele).css('width', $(ele).siblings('a').innerWidth() + 20 + 'px');
})

//滚动条
let back = document.querySelector('.scrollBar .back');
let bar = document.querySelector('.scrollBar .bar');
let bar_per = bar.querySelector('img');
$(back).click(function() {
  window.scrollTo(0, 0);
})

const scroll_function = function() {
  let n = -13 + $(document).scrollTop() / ($(document).height() - $(window).height()) * 100 * 0.9;
  $(bar_per).css("top", n + "%");
}
$(window).scroll(scroll_function)