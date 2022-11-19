const tabs = document.querySelectorAll('.tab ul li[id^=li]')
const schools = document.querySelectorAll('div[id^=tab0]')
let activeTab = 0

tabs.forEach((ele, idx) => {
  ele.addEventListener('click', () => {
    $(tabs[activeTab]).css({ 'font-size': '24px', 'color': 'rgb(113, 112, 113)' });
    $(schools[activeTab]).css('display', 'none');
    activeTab = idx
    $(tabs[activeTab]).css({ 'font-size': '28px', 'color': 'rgb(187, 94, 109)' });
    $(schools[activeTab]).css('display', 'block');
    scroll_function()
  })
})