var imgSrcArr = [
    '../images/attributions-images/mainbgc.jpg',
    '../images/attributions-images/center.png'
];

var imgWrap = [];

function preloadImg(arr) {
    for (var i = 0; i < arr.length; i++) {
        imgWrap[i] = new Image();
        imgWrap[i].src = arr[i];
    }
}

preloadImg(imgSrcArr);

const data = ['Yijia Li', 'Hanlin Li', 'Zhuohan Li', 'Yifan Wang', 'Yanxuan Wu', 'Zhenshen Xie', 'Zhuoxuan Yu', 'Yirui Li', 'Zilin Hu', 'Ruicheng Zheng', 'Jiating Zhang', 'Yuhang Yao', 'Yuting Jiang', 'Junluo Chen', 'Shenghao Liu']
const img = [0, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 0, 0, 1,
    0, 1, 0, 1, 1, 1, 1, 1, 0, 0, 1, 0, 0, 1,
    0, 1, 0, 1, 1, 0, 1, 1, 0, 0, 0, 0, 0, 0,
    0, 1, 1, 1, 1, 0, 1, 1, 0, 0, 0, 0, 0, 0,
    0, 1, 0, 1, 1, 0, 1, 1, 0, 0, 0, 0, 0, 0,
    0, 1, 1, 1, 1, 0, 1, 1, 0, 0, 0, 0, 0, 0,
    0, 1, 0, 1, 1, 0, 1, 1, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 1, 0,
    0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 1, 0,
    0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 1, 0]
let td = document.querySelectorAll('tbody td')
for (let i = 0; i < 210; i++) {
    if (img[i]) {
        $(td[i]).html('<img src="../images/main-images/main1.png" alt="">')
    }
    if (i % 14 === 0) {
        $(td[i]).text(data[i / 14])
    }
}

