document.addEventListener("DOMContentLoaded", function(e) {
    //存放图片路径的数组
    var imgSrcArr = [
        './images/main-images/bgc.png'
    ];

    var imgWrap = [];

    function preloadImg(arr) {
        for (var i = 0; i < arr.length; i++) {
            imgWrap[i] = new Image();
            imgWrap[i].src = arr[i];
        }
    }

    preloadImg(imgSrcArr);


    //正文
    let jump = document.querySelector('.jump img');
    let jump_flag = true;
    let span = $(jump).siblings('span');
    let chart_1 = document.querySelector('.chart div h1');
    let chart_2 = $(chart_1).siblings('h2');
    let chart_flag = true;
    let chart_n = 1;
    let process_hover = document.querySelectorAll('.process .summary span');
    let process_img = document.querySelectorAll('.process .summary img');
    let process_hover_flag = true;
    let process_hover_width = [11, 11, 9, 12, 10, 4];
    let process_hover_left = [1.8, 20, 40, 56, 75, 68];
    let cloud_flag = true;
    let cloud_hover = document.querySelector('.cloud .cloud_hover');
    let silk_img1 = document.querySelector('.bdsilk img');
    let silk_img2 = $(silk_img1).siblings('img');
    let arrow = $(silk_img1).siblings('span');
    let silk_flag = true;
    let light_flag = true;
    let light_img = document.querySelector('.light span img');
    let light_p = document.querySelector('.light p');
    let zhou_flag = true;
    let zhou_img = document.querySelectorAll('.zhou ul li .zhou_body');
    let zhou_show_time = document.querySelector('.useless');
    let page6_flag = true
    $(window).scroll(function() {
        if (page6_flag && $(document).scrollTop() >= $('#page6').offset().top + $('#page6').height() / 2 - $(window).height()) {
            page6_flag = false
            $('#page6_00').css('animation', 'fadeOut 5s forwards');
            $('#page6_01').css('animation', 'fadeIn 5s forwards');
        }
        if (zhou_flag && $(document).scrollTop() >= ($(zhou_show_time).offset().top + $(zhou_img[0]).offset().top) / 2 - $(window).height()) {
            zhou_flag = false;
            $(zhou_img).each(function(index, elem) {
                $(elem).css('animation', 'zhou 2s ' + index * 1 + 's forwards');
                (function(temp, index) {
                    setTimeout(function() {
                        $(elem).siblings('em').fadeTo(1000, 1);
                    }, 1000 * index);
                })($(elem).siblings('em'), index + 1);
            });
        }
        if (light_flag && $(document).scrollTop() > $(light_p).offset().top + $(light_p).height() - $(window).height()) {
            light_flag = false;
            $(light_img).css('animation', 'light 3s');
        }
        if (silk_flag && $(document).scrollTop() > $(arrow).offset().top + $(arrow).height() - $(window).height()) {
            silk_flag = false;
            $(silk_img1).fadeTo(2000, 1.0, function() {
                $(arrow).fadeTo(1000, 1.0, function() {
                    $(silk_img2).fadeTo(2000, 1.0);
                });
            });
        }
        if (cloud_flag && $(document).scrollTop() > $(cloud_hover).offset().top + $(cloud_hover).height() - $(window).height()) {
            cloud_flag = false;
            $(cloud_hover).css("animation", "cloud_hover 5s forwards");
        }
        if (jump_flag && $(document).scrollTop() > $(span).offset().top - $(window).height()) {
            jump_flag = false;
            $(jump).css("animation", "jump 40s ease-in-out forwards");
        }
        if (chart_flag && $(document).scrollTop() > $(chart_2).offset().top - $(window).height()) {
            chart_flag = false;
            let chart_timer = setInterval(function() {
                if (chart_n > 70) {
                    clearInterval(chart_timer);
                    return;
                }
                $(chart_2).prop("innerHTML", chart_n + "%");
                $(chart_1).prop("innerHTML", Math.ceil(900.0 * chart_n / 70) + "kt");
                chart_n += 1;
            }, 30);
        }
        if (process_hover_flag && $(document).scrollTop() > $(process_img).offset().top + $(process_img).height() - $(window).height()) {
            process_hover_flag = false;
            let i = 0;
            let process_hover_timer = setInterval(function() {
                process_hover_width[i] -= 0.1;
                if (process_hover_width[i] < 0) {
                    i++;
                    if (i === 6) {
                        clearInterval(process_hover_timer);
                        return;
                    }
                    process_hover_width[i] -= 0.1;
                }
                process_hover_left[i] += 0.1;
                $(process_hover[i]).css("width", process_hover_width[i] + "%");
                $(process_hover[i]).css("left", process_hover_left[i] + "%");
            }, 10);
        }
    })

    let zhou_li = document.querySelectorAll('.zhou ul li');
    $(zhou_li).mouseover(function() {
        $(this).css('transform', 'scale(1.2)');
    });
    $(zhou_li).mouseleave(function() {
        $(this).css('transform', 'scale(1)');
    })
})
