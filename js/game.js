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

var xhr = new XMLHttpRequest();

//game1
let grid =
    [[[0, 0, 1, 0, 0, 0, 1, 0],
    [0, 1, 1, 1, 0, 1, 1, 1],
    [0, 0, 1, 0, 0, 0, 1, 0],
    [1, 0, 0, 0, 0, 0, 0, 0],
    [1, 1, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [1, 1, 0, 0, 0, 0, 0, 0],
    [1, 0, 0, 0, 0, 0, 0, 0]],

    [[0, 0, 0, 1, 1, 0, 0, 0],
    [0, 0, 1, 0, 0, 1, 0, 0],
    [0, 0, 0, 1, 1, 1, 0, 0],
    [1, 0, 0, 0, 1, 1, 1, 0],
    [1, 1, 0, 1, 0, 1, 0, 0],
    [1, 0, 1, 1, 1, 0, 0, 0],
    [0, 0, 0, 1, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0]],

    [[0, 1, 0, 0, 1, 1, 1, 0],
    [1, 1, 1, 0, 0, 1, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [1, 1, 1, 1, 0, 1, 0, 0],
    [0, 1, 1, 1, 1, 1, 1, 0],
    [0, 0, 0, 0, 1, 1, 0, 0],
    [0, 0, 0, 0, 0, 1, 1, 0],
    [0, 0, 0, 0, 0, 1, 0, 0]],

    [[0, 0, 1, 0, 0, 1, 0, 0],
    [0, 1, 0, 1, 1, 0, 1, 0],
    [1, 1, 1, 0, 0, 1, 1, 1],
    [0, 1, 0, 0, 0, 0, 1, 0],
    [0, 1, 0, 1, 1, 0, 1, 0],
    [1, 0, 0, 0, 0, 0, 0, 1],
    [0, 0, 1, 1, 1, 1, 0, 0],
    [1, 0, 0, 0, 0, 0, 0, 1]]];
//game3
let g3_grid = [
    [[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]],

    [[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 1, 1, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]],

    [[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 1, 1, 0, 0, 0, 1, 0, 0, 2, 1, 0, 1, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]],

    [[0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0],
    [0, 1, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 1],
    [0, 0, 1, 1, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 1, 0, 0],
    [1, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 2, 0, 0, 1, 1, 0, 1, 1, 0],
    [0, 1, 1, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 1, 1],
    [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 1, 1, 1, 0],
    [0, 0, 1, 1, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 1, 0, 1, 1, 0, 0],
    [0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 1, 0, 0],
    [0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 1, 1, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0]]]
let g3_now_grid = [[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]]

let g3_x = 5, g3_y = 4
let td = document.querySelectorAll('.game1 .gamer td');
let td1 = document.querySelectorAll('.game1 .target td');
let g3_td = document.querySelectorAll('.game3 td');
let option = document.querySelectorAll('.main_game .option');
let options = document.querySelectorAll('.main_game .option div');
let games = document.querySelectorAll('.main_game div[class^=game]');
let rule = document.querySelectorAll('.rule')
let rules = document.querySelector('.rules_father')
let barrier
let home = document.querySelectorAll('.home')
let again = document.querySelectorAll('.again')
let g2_bgc = document.querySelector('.gamer')
let knowledge_card = document.querySelector('.knowledge_card')
let g3_role = document.querySelector('.game3 .role')
let g2_tri = document.querySelectorAll('.g2_rotate .rounded-triangle')
let g2_cir = document.querySelectorAll('.g2_rotate .circle')

let answer = document.querySelectorAll('.g3_tip')
let answer_detail = document.querySelector('.answer_father')

let total_barrier = 1
let is_get = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]

function arrayToNumber(array) {
    let ans = 0
    for (let i = 0; i < array.length; i++) {
        if (array[i] === 1) {
            ans <<= 1
            ans += 1
        }
        else break
    }
    return ans
}
function updateInfo(array, total) {
    xhr.open('POST', 'http://127.0.0.1:3333/updateinfo', false);
    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded')
    xhr.setRequestHeader('Authorization', localStorage.getItem('token'))
    xhr.send(`options=${arrayToNumber(array)}&total=${total}`)
}

xhr.open('GET', 'http://127.0.0.1:3333/login/verify', false)
xhr.setRequestHeader('Authorization', localStorage.getItem('token'))
xhr.send()
let verify = JSON.parse(xhr.responseText)
if (verify.status === 401) window.location.href = '../html/login.html'
else {
    $('.hello span').html(`Welcome, ${verify.username}!`)
    xhr.open('GET', 'http://127.0.0.1:3333/getinfo', false);
    xhr.setRequestHeader('Authorization', localStorage.getItem('token'))
    xhr.send()
    let { options: bit, total } = JSON.parse(xhr.responseText).data
    total_barrier = total
    for (let i = 0; i < 10; i++) {
        if (bit & (1 << i)) {
            is_get[i] = 1
        }
        else break
    }
}

$('.hello a').click(function() {
    localStorage.removeItem('token')
})

for (let i = 0; i < total_barrier; i++) {
    $(options[i]).css('filter', 'saturate(100%)')
}

$(answer).click(function() {
    if (barrier === 4) {
        $(answer_detail).children(".answer").css('width', '35%')
        $(answer_detail).children(".answer").css('backgroundImage', 'url(../images/game-images/game1-solution.png)')
        $(answer_detail).children(".answer").css('border', '1px solid #000')
    }
    else if (barrier === 12) {
        $(answer_detail).children(".answer").css('width', '60%')
        $(answer_detail).children(".answer").css('backgroundImage', 'url(../images/game-images/game3-solution.png)')
        $(answer_detail).children(".answer").css('border', '0px solid #000')
    }
    $(answer_detail).css('display', 'block');
})
$(answer_detail).find("span").click(function() {
    $(answer_detail).css('display', 'none');
})
//package start
let package_enter = document.querySelector('.main_game .package_enter');
let package = document.querySelector('.main_game .package');
let package_back = package.querySelector('.package_back')
let package_next = package.querySelector('.package_next')
let package_li = package.querySelectorAll('.package ul li')
let li_flag = 0


let detail_back = document.querySelector('.card_detail span')
let deatil_p = document.querySelector('.card_detail div')
let card_detail = document.querySelector('.card_detail')
let package_card = package.querySelectorAll('.package .card')
let detail_words = [
    ["[Pichia pastoris is a kind of methanol nutritional yeast, which can use methanol as the only carbon source.]"],
    ["[Escherichia coli is the most widely studied prokaryotic model organism, widely used in experiments of biotechnology and microbiology. Therefore it is the best candidate in DNA recombination process as a host organism. Under favorable conditions, it replicates our target gene every 20 minutes.]"],
    ["[Pichia's favorite kinds of medium are BMGY and BMMY. Peptone and yeast extract in these two mediums provide it with amino acids and carbon sources, while extra methanol in BMMY induces its expression of genes.]"],
    ["[Transfection is the process of introducing foreign DNA, plasmids or oligonucleotides, into cells. After a short incubation on ice, the mixture of chemicals, bacteria and DNA gets a heat shock at 42℃ for 90 seconds and then back to ice for 5 minutes. Then LBL, a lower-salt-concentration media, is added for incubation of cells at 37℃ for 45 min with agitation. After that you'll get the microorganism with vectors you want.]"],
    ["[Agarose gels have a network-like structure, and nucleic acid molecules are resisted when passing through, and larger molecules are subjected to higher resistance when surging. Thus, particles are separated in gel electrophoresis due to the difference in charge and molecular size.]"],
    ["[The promoter region drives transcription of a target gene, largely defining the amount of our target protein to be produced. Some promoters, known as inducible ones, can be regulated by specific chemicals. Here in P. Pastoris, we use a moderated promoter PAOXm, which responses to methanol to turn higher level of transcription of downstream gene, PTS in our case.]"],
    ["[PTS is the gene extracted from plants encoding patchoulolsythase, a rate-limiting enzyme in the synthesis of patchouli alcohol. With this gene we can express patchouli alcohol in microorganism, getting rid of botanical stuff that is hard to operate and has little production.]"],
    ["[Manganese ions can reduce the specificity of the DNA polymerase on the template, which creates many mutants at a certain concentration. After that the best mutants of genes will be chosen to construct the plasmid.]"],
    ["[The polymerase chain reaction(PCR) is a fast and inexpensive technique to amplify small segments of DNA. Our sample is first heated so the DNA denatures into two single-stranded DNA. Next, the Taq polymerase builds two new strands of DNA using the original strands as templates and dNTPs as materials, resulting in two identical replicas of the original one. Each of these strands goes into the next recycle  on and on, until around 30 times, leading to billions of exact copies of the original DNA.]<br/>[PCR is automated and efficient. It is directed by a machine called a thermocycler, which is programmed to alter the temperature of the reaction every few minutes to allow DNA denaturing and synthesis. All we need to do is adding our template into PCR mix buffer, which contains all we need for PCR such as dNTPs, Taq polymerase, primers etc.]"],
    ["[The ORI is the place where DNA replication begins, enabling a plasmid to produce itself as it must to survive within cells. BleoR encodes antibiotic-binding protein, confers resistance to Zeocin. So that other microorganisms without BleoR die in the selective medium. Terminator is to define the end of a gene and release the newly synthesized RNA.]<br/>[Eco721 and NOTI are two restriction enzyme cutting sites of our plasmid. They can create sticky and blunt ends of the PTS gene fragment the same as that in the plasmid vector, so that they can be linked by T4 DNA ligase and form a complete plasmid.]"]
]
$(package_card).each(function(idx) {
    $(this).click(function() {
        let card_no = li_flag * 5 + idx
        if (is_get[card_no]) {
            $(card_detail).children('img').prop('src', '../images/game-images/knowledge-card' + card_no + '.png')
            $(deatil_p).html(detail_words[card_no])
            $(card_detail).css('display', 'block')
            $(package).css('display', 'none')
        }
    })
})
$(detail_back).click(function() {
    $(card_detail).css('display', 'none')
    $(package).css('display', 'block')
})
$(package_enter).click(function() {
    $(option).css('display', 'none')
    $(package).css('display', 'block')
    li_flag = 0
    $(package_li[1]).css('opacity', '.3')
    $(package_li[0]).css('opacity', '1')
    $(package_next).text('→');
    for (let i = 0; i < 5; i++) {
        let card_no = i + li_flag * 5
        if (is_get[card_no])
            $(package_card[i]).html('<img src="../images/game-images/knowledge-card' + card_no + '.png" alt="">')
        else
            $(package_card[i]).html('?')
    }
})
$(package_back).click(function() {
    $(option).css('display', 'block')
    $(package).css('display', 'none')
})
$(package_next).click(function() {
    $(package_li[li_flag]).css('opacity', '.3')
    $(package_li[li_flag ^ 1]).css('opacity', '1')
    if ($(this).text() === '→') {
        $(this).text("←");
    }
    else {
        $(this).text("→");
    }
    li_flag ^= 1
    for (let i = 0; i < 5; i++) {
        let card_no = i + li_flag * 5
        if (is_get[card_no])
            $(package_card[i]).html('<img src="../images/game-images/knowledge-card' + card_no + '.png" alt="">')
        else
            $(package_card[i]).html('?')
    }
})
// package end


let explain = ['Wow, Mr. Yeast has moved into the new culture medium palace. Let’s help him decorate the floor according to the example on the left. Click on any square on the operation panel to change its color. Pay attention that the colors of the four squares next to it (left, right, up, down) will also be changed (The original white turns to black, and the original black turns to white).',
    'Now that the floor of Mr. Yeast\'s new home is well-decorated, let\'s help him sort out his luggage by color. After clicking the start button in the upper right corner, you need to restore the pattern until it’s identical to the left example within 12 minutes (you can pause, but you cannot continue to observe the right pattern after the pause). Each white dot in the game can be clicked to rotate a circle of triangles around it clockwise.',
    'Surprise! A welcoming present from the new home. But only by following certain path colored in black can Mr. Yeast get that present. Come and help him. For each time he can move one step horizontally and two steps vertically, or one step vertically and two steps horizontally, to complete an ‘L’ shape. Remember each step must land on a black square, and the black squares turn to white after being stepped on.'];

$(rule).click(function() {
    $(rules).css('display', 'block');
    $(rules).find('p').text(explain[Math.floor((barrier - 1) / 4)]);
})
$(rules).find("span").click(function() {
    $(rules).css('display', 'none');
})




$(knowledge_card).find("span").click(function() {
    $(knowledge_card).css('display', 'none')
    $(games[Math.floor((barrier - 1) / 4)]).css('display', 'none')
    $(option).css('display', 'block')
})
let g2_target = [[1, 2, 2, 2, 2, 2, 3, 1, 1, 1, 2, 2, 2, 3, 3, 3, 1, 1, 1, 1, 1, 2, 3, 3, 3, 3, 3, 4, 4, 4, 4, 4, 5, 6, 6, 6, 6, 6, 4, 4, 4, 5, 5, 5, 6, 6, 6, 4, 5, 5, 5, 5, 5, 6],
[2, 5, 5, 5, 5, 5, 4, 2, 2, 2, 5, 5, 5, 4, 4, 4, 2, 2, 2, 2, 2, 5, 4, 4, 4, 4, 4, 6, 6, 6, 6, 6, 1, 3, 3, 3, 3, 3, 6, 6, 6, 1, 1, 1, 3, 3, 3, 6, 1, 1, 1, 1, 1, 3],
[1, 1, 2, 2, 2, 5, 5, 1, 1, 3, 3, 3, 3, 3, 5, 5, 1, 1, 3, 3, 2, 2, 2, 3, 3, 5, 5, 1, 1, 4, 4, 2, 2, 2, 4, 4, 5, 5, 1, 6, 4, 4, 4, 4, 4, 6, 5, 6, 6, 6, 6, 6, 6, 6],
[1, 2, 3, 4, 3, 2, 1, 5, 6, 5, 4, 3, 4, 5, 6, 5, 1, 6, 5, 6, 1, 2, 1, 6, 5, 6, 1, 2, 4, 3, 4, 2, 1, 2, 4, 3, 4, 2, 3, 4, 3, 6, 5, 6, 3, 4, 3, 2, 1, 5, 6, 5, 1, 2]]
let g2_test = function() {
    flag = true;
    for (let i = 0; i < g2_arr.length; i++) {
        if ($(g2_tri[i]).css('backgroundColor') === 'rgb(100, 217, 234)') {
            if (g2_target[barrier - 5][i] !== 1) {
                flag = false;
                break;
            }
        }
        else if ($(g2_tri[i]).css('backgroundColor') === 'rgb(239, 82, 51)') {
            if (g2_target[barrier - 5][i] !== 2) {
                flag = false;
                break;
            }
        }
        else if ($(g2_tri[i]).css('backgroundColor') === 'rgb(142, 98, 213)') {
            if (g2_target[barrier - 5][i] !== 3) {
                flag = false;
                break;
            }
        }
        else if ($(g2_tri[i]).css('backgroundColor') === 'rgb(226, 206, 57)') {
            if (g2_target[barrier - 5][i] !== 4) {
                flag = false;
                break;
            }
        }
        else if ($(g2_tri[i]).css('backgroundColor') === 'rgb(44, 119, 234)') {
            if (g2_target[barrier - 5][i] !== 5) {
                flag = false;
                break;
            }
        }
        else {
            if (g2_target[barrier - 5][i] !== 6) {
                flag = false;
                break;
            }
        }
    }
    return flag;
    // return true;
}
let timer
let g2_tar_tri = document.querySelectorAll('.g2_target .rounded-triangle')
$(g2_cir).each(function(idx, ele) {
    let arr
    if (idx < 3) {
        $(this).css('top', '25px')
        $(this).css('left', -65 + (idx % 3) * 50 + 'px')
        arr = [2 * idx, 1 + 2 * idx, 2 + 2 * idx, 10 + 2 * idx, 9 + 2 * idx, 8 + 2 * idx]
    }
    else if (idx < 7) {
        $(this).css('top', '70px')
        $(this).css('left', -90 + ((idx - 3) % 4) * 50 + 'px')
        arr = [1 + 2 * idx, 2 + 2 * idx, 3 + 2 * idx, 13 + 2 * idx, 12 + 2 * idx, 11 + 2 * idx]
    }
    else if (idx < 12) {
        $(this).css('top', '115px')
        $(this).css('left', -115 + ((idx - 7) % 5) * 50 + 'px')
        arr = [2 + 2 * idx, 3 + 2 * idx, 4 + 2 * idx, 15 + 2 * idx, 14 + 2 * idx, 13 + 2 * idx]
    }
    else if (idx < 16) {
        $(this).css('top', '160px')
        $(this).css('left', -90 + ((idx - 12) % 4) * 50 + 'px')
        arr = [4 + 2 * idx, 5 + 2 * idx, 6 + 2 * idx, 16 + 2 * idx, 15 + 2 * idx, 14 + 2 * idx]
    }
    else {
        $(this).css('top', '205px')
        $(this).css('left', -65 + ((idx - 16) % 3) * 50 + 'px')
        arr = [7 + 2 * idx, 8 + 2 * idx, 9 + 2 * idx, 17 + 2 * idx, 16 + 2 * idx, 15 + 2 * idx]
    }
    $(this).click(function() {
        let color = $(g2_tri[arr[5]]).css('backgroundColor')
        for (let i = 5; i > 0; i--) {
            $(g2_tri[arr[i]]).css('backgroundColor', $(g2_tri[arr[i - 1]]).css('backgroundColor'))
        }
        $(g2_tri[arr[0]]).css('backgroundColor', color)
        if (g2_test()) {
            clearInterval(timer)
            $(options[barrier]).css('filter', 'saturate(100%)')
            $(knowledge_card).css('display', 'block')
            $(knowledge_card).find('.card2').css('display', 'none')
            $(knowledge_card).find('.card').css('display', 'block')
            let card_no = barrier - 2
            is_get[card_no] = 1
            total_barrier = Math.max(total_barrier, barrier + 1)
            updateInfo(is_get, total_barrier)
            $(knowledge_card).find('.winner div').html(detail_words[card_no])
            $(knowledge_card).find('img').prop('src', '../images/game-images/knowledge-card' + card_no + '.png')
        }
    })
})
$(g2_tar_tri).each(function(idx, ele) {
    if (idx < 7) {
        $(this).css('top', '5px')
        if (idx % 2 === 0) {
            $(this).css('top', '10px')
            $(this).css('transform', 'rotate(120deg) skewX(-30deg) scale(1, .866)')
        }
        $(this).css('left', -450 + (idx % 7) * 25 + 'px')
    }
    else if (idx < 16) {
        $(this).css('top', '50px')
        if ((idx - 7) % 2 === 0) {
            $(this).css('top', '55px')
            $(this).css('transform', 'rotate(120deg) skewX(-30deg) scale(1, .866)')
        }
        $(this).css('left', -475 + ((idx - 7) % 9) * 25 + 'px')
    }
    else if (idx < 27) {
        $(this).css('top', '95px')
        if ((idx - 16) % 2 === 0) {
            $(this).css('top', '100px')
            $(this).css('transform', 'rotate(120deg) skewX(-30deg) scale(1, .866)')
        }
        $(this).css('left', -500 + ((idx - 16) % 11) * 25 + 'px')
    }
    else if (idx < 38) {
        $(this).css('top', '140px')
        if ((idx - 27) % 2 === 1) {
            $(this).css('top', '145px')
            $(this).css('transform', 'rotate(120deg) skewX(-30deg) scale(1, .866)')
        }
        $(this).css('left', -500 + ((idx - 27) % 11) * 25 + 'px')
    }
    else if (idx < 47) {
        $(this).css('top', '185px')
        if ((idx - 38) % 2 === 1) {
            $(this).css('top', '190px')
            $(this).css('transform', 'rotate(120deg) skewX(-30deg) scale(1, .866)')
        }
        $(this).css('left', -475 + ((idx - 38) % 9) * 25 + 'px')
    }
    else {
        $(this).css('top', '230px')
        if ((idx - 47) % 2 === 1) {
            $(this).css('top', '235px')
            $(this).css('transform', 'rotate(120deg) skewX(-30deg) scale(1, .866)')
        }
        $(this).css('left', -450 + ((idx - 47) % 7) * 25 + 'px')
    }
})
$(g2_tri).each(function(idx, ele) {
    if (idx < 7) {
        $(this).css('top', '5px')
        if (idx % 2 === 0) {
            $(this).css('top', '10px')
            $(this).css('transform', 'rotate(120deg) skewX(-30deg) scale(1, .866)')
        }

        $(this).css('left', -85 + (idx % 7) * 25 + 'px')
    }
    else if (idx < 16) {
        $(this).css('top', '50px')
        if ((idx - 7) % 2 === 0) {
            $(this).css('top', '55px')
            $(this).css('transform', 'rotate(120deg) skewX(-30deg) scale(1, .866)')
        }

        $(this).css('left', -110 + ((idx - 7) % 9) * 25 + 'px')
    }
    else if (idx < 27) {
        $(this).css('top', '95px')
        if ((idx - 16) % 2 === 0) {
            $(this).css('top', '100px')
            $(this).css('transform', 'rotate(120deg) skewX(-30deg) scale(1, .866)')
        }

        $(this).css('left', -135 + ((idx - 16) % 11) * 25 + 'px')
    }
    else if (idx < 38) {
        $(this).css('top', '140px')
        if ((idx - 27) % 2 === 1) {
            $(this).css('top', '145px')
            $(this).css('transform', 'rotate(120deg) skewX(-30deg) scale(1, .866)')
        }

        $(this).css('left', -135 + ((idx - 27) % 11) * 25 + 'px')
    }
    else if (idx < 47) {
        $(this).css('top', '185px')
        if ((idx - 38) % 2 === 1) {
            $(this).css('top', '190px')
            $(this).css('transform', 'rotate(120deg) skewX(-30deg) scale(1, .866)')
        }

        $(this).css('left', -110 + ((idx - 38) % 9) * 25 + 'px')
    }
    else {
        $(this).css('top', '230px')
        if ((idx - 47) % 2 === 1) {
            $(this).css('top', '235px')
            $(this).css('transform', 'rotate(120deg) skewX(-30deg) scale(1, .866)')
        }

        $(this).css('left', -85 + ((idx - 47) % 7) * 25 + 'px')
    }
})

let copy = function(g3_grid, g3_now_grid) {
    for (let i = 0; i < 10; i++) {
        for (let j = 0; j < 20; j++) {
            g3_now_grid[i][j] = g3_grid[i][j]
        }
    }
}

//g2计时
let g2_time_limit = [900, 720, 600, 3600]
let t
let g2_span = document.querySelectorAll('.g1_clock span')
let g2_rotate = document.querySelectorAll('.game2 .g2_rotate')
let g2_timer = function() {
    timer = setInterval(function() {
        if (t === 0) {
            clearInterval(timer)
            let g2_time_pa = document.querySelector('.game2 .g2_time_pa')
            $(g2_time_pa).css('display', 'block')
            setTimeout(function() {
                $(g2_time_pa).fadeTo(3000, 0, function() {
                    $(g2_time_pa).css('display', 'none')
                    $(g2_time_pa).css('opacity', 1)
                })
            }, 2000)
            g2_init()
            return;
        }
        t--;
        $(g2_span[0]).text(Math.floor(t / 60 / 10))
        $(g2_span[1]).text(Math.floor(t / 60 % 10))
        $(g2_span[2]).text(Math.floor(t % 60 / 10))
        $(g2_span[3]).text(Math.floor(t % 10))
    }, 1000)
}

$(home).click(function() {
    if (timer) {
        clearInterval(timer)
    }
    $(games[Math.floor((barrier - 1) / 4)]).css('display', 'none');
    $(option).css('display', 'block');
    if (barrier >= 9) {
        copy(g3_now_grid, g3_grid[barrier - 9])
    }
})
let g2_btn = document.querySelector('.g1_btn')
let g2_flag = false
$(g2_btn).click(function() {
    if (g2_flag === false) {
        $(g2_rotate).css('display', 'block')
        $(g2_btn).children('.rounded-triangle').css('display', 'none')
        $(g2_btn).children('.g1_start').css('display', 'block')
        g2_timer()
    }
    else {
        $(g2_rotate).css('display', 'none')
        $(g2_btn).children('.rounded-triangle').css('display', 'block')
        $(g2_btn).children('.g1_start').css('display', 'none')
        clearInterval(timer)
    }
    g2_flag = !g2_flag
})

let g2_arr = []
let swap = function(a, b) {
    let t = g2_arr[a]
    g2_arr[a] = g2_arr[b]
    g2_arr[b] = t
}
let g2_init = function() {
    $(g2_rotate).css('display', 'none')
    g2_flag = false
    $(g2_btn).children('.rounded-triangle').css('display', 'block')
    $(g2_btn).children('.g1_start').css('display', 'none')
    t = g2_time_limit[barrier - 5]
    $(g2_span[0]).text(Math.floor(t / 60 / 10))
    $(g2_span[1]).text(Math.floor(t / 60 % 10))
    $(g2_span[2]).text(Math.floor(t % 60 / 10))
    $(g2_span[3]).text(Math.floor(t % 10))
    g2_arr = []
    for (let i = 0; i < 9; i++) {
        g2_arr.push(1, 2, 3, 4, 5, 6);
    }

    for (let i = 0; i < g2_arr.length; i++) {
        swap(i, Math.floor(Math.random() * (54 - i)) + i)
    }
    // g2_target[3] = g2_arr
    $(g2_tar_tri).each(function(idx) {
        switch (g2_target[barrier - 5][idx]) {
            case 1:
                $(this).css('backgroundColor', '#64d9ea')
                break;
            case 2:
                $(this).css('backgroundColor', '#ef5233')
                break;
            case 3:
                $(this).css('backgroundColor', '#8e62d5')
                break;
            case 4:
                $(this).css('backgroundColor', '#e2ce39')
                break;
            case 5:
                $(this).css('backgroundColor', '#2c77ea')
                break;
            case 6:
                $(this).css('backgroundColor', '#52972c')
        }
    })
    $(g2_tri).each(function(idx) {
        switch (g2_arr[idx]) {
            case 1:
                $(this).css('backgroundColor', '#64d9ea')
                break;
            case 2:
                $(this).css('backgroundColor', '#ef5233')
                break;
            case 3:
                $(this).css('backgroundColor', '#8e62d5')
                break;
            case 4:
                $(this).css('backgroundColor', '#e2ce39')
                break;
            case 5:
                $(this).css('backgroundColor', '#2c77ea')
                break;
            case 6:
                $(this).css('backgroundColor', '#52972c')
        }
    })
}

let black_grid//计算黑格子数量
let g3_dir = [[1, 2], [2, 1], [-1, 2], [2, -1], [1, -2], [-2, 1], [-1, -2], [-2, -1]]
$(g3_td).each(function(idx, ele) {
    let r = Math.floor(idx / 20), c = idx % 20
    $(this).click(function() {
        for (let i = 0; i < 8; i++) {
            let now_x = g3_x + g3_dir[i][0], now_y = g3_y + g3_dir[i][1]
            if (now_x === r && now_y === c && g3_grid[(barrier - 9) % 4][r][c] === 1) {
                g3_grid[(barrier - 9) % 4][r][c] = 0
                black_grid--;
                $(this).css('backgroundColor', '#fff')
                g3_x = r
                g3_y = c
                let top = 23.5 + 6 * r
                let left = 20.1 + 3 * c
                $(g3_role).css('top', top + '%')
                $(g3_role).css('left', left + '%')
                break;
            }
        }
    })
})
let g3_ending = document.querySelector('.g3_ending')
$(g3_ending).click(function() {
    if (black_grid === 1) {
        for (let i = 0; i < 8; i++) {
            let now_x = g3_x + g3_dir[i][0], now_y = g3_y + g3_dir[i][1]
            if (now_x === 3 && now_y === 11) {
                if (barrier === 9) {
                    $(knowledge_card).find('.card2').css('display', 'block')
                    $(knowledge_card).find('.card').css('display', 'none')
                }
                else {
                    $(knowledge_card).find('.card2').css('display', 'none')
                    $(knowledge_card).find('.card').css('display', 'block')
                    let card_no = barrier - 3
                    is_get[card_no] = 1
                    $(knowledge_card).find('.winner div').html(detail_words[card_no])
                    $(knowledge_card).find('img').prop('src', '../images/game-images/knowledge-card' + card_no + '.png')
                }
                $(knowledge_card).css('display', 'block')
                total_barrier = Math.max(total_barrier, barrier + 1)
                if (total_barrier >= 13) {
                    total_barrier = 12
                }
                updateInfo(is_get, total_barrier)
                if (barrier < 12)
                    $(options[barrier]).css('filter', 'saturate(100%)')
                copy(g3_now_grid, g3_grid[barrier - 9])
                break;
            }
        }
    }
})
let clear_grid = function() {
    for (let i = 0; i < 8; i++) {
        for (let j = 0; j < 8; j++) {
            $(td[i * 8 + j]).css('backgroundColor', '#fff');
        }
    }
}
let g3_init = function() {
    copy(g3_grid[barrier - 9], g3_now_grid)
    g3_x = 5
    g3_y = 4
    black_grid = 1;
    $(g3_role).css('top', 53.5 + '%')
    $(g3_role).css('left', 32.1 + '%')
    for (let i = 0; i < 10; i++) {
        for (let j = 0; j < 20; j++) {
            if (g3_grid[(barrier - 9) % 4][i][j] === 0)
                $(g3_td[i * 20 + j]).css('backgroundColor', '#fff');
            else if (g3_grid[(barrier - 9) % 4][i][j] === 1) {
                $(g3_td[i * 20 + j]).css('backgroundColor', '#000');
                black_grid++;
            }
        }
    }
}
$(again).click(function() {
    if (barrier <= 4) {
        clear_grid();
    }
    else if (barrier >= 9) {
        copy(g3_now_grid, g3_grid[barrier - 9])
        g3_init()
    }
    else {
        $(g2_rotate).css('display', 'none')
        g2_flag = false
        $(g2_btn).children('.rounded-triangle').css('display', 'block')
        $(g2_btn).children('.g1_start').css('display', 'none')
        t = g2_time_limit[barrier - 5]
        $(g2_span[0]).text(Math.floor(t / 60 / 10))
        $(g2_span[1]).text(Math.floor(t / 60 % 10))
        $(g2_span[2]).text(Math.floor(t % 60 / 10))
        $(g2_span[3]).text(Math.floor(t % 10))
        clearInterval(timer)
        $(g2_tri).each(function(idx) {
            switch (g2_arr[idx]) {
                case 1:
                    $(this).css('backgroundColor', '#64d9ea')
                    break;
                case 2:
                    $(this).css('backgroundColor', '#ef5233')
                    break;
                case 3:
                    $(this).css('backgroundColor', '#8e62d5')
                    break;
                case 4:
                    $(this).css('backgroundColor', '#e2ce39')
                    break;
                case 5:
                    $(this).css('backgroundColor', '#2c77ea')
                    break;
                case 6:
                    $(this).css('backgroundColor', '#52972c')
            }
        })
    }
})
let g1_detail_title = ['Solid Medium', 'Lquid Medium', 'Colon Bacillus', 'Yeast']
for (let i = 0; i < options.length; i++) {
    let col = 32 + 10 * (i % 4);
    let row = 24 + 20 * Math.floor(i / 4);
    $(options[i]).css('top', row + '%');
    $(options[i]).css('left', col + '%');
    $(options[i]).click(function() {
        barrier = 1 * $(this).text();
        if ($(options[i]).css('filter') === 'saturate(0)') {
            alert('Please click the colored button. The gray button indicates that it has not been unlocked.')
            return
        }
        $(option).css('display', 'none');
        if (barrier >= 1 && barrier <= 4) {
            let g1_tip = document.querySelector('.game1 .g3_tip')
            if (barrier === 4) {
                $(g1_tip).css('display', 'block');
            }
            else {
                $(g1_tip).css('display', 'none');
            }
            let g1_title = document.querySelector('.game1 .g2_title .level_box')
            $(g1_title).text('Level ' + barrier)
            let g1_title_bottom = document.querySelector('.game1 .g2_title .level_bottom')
            $(g1_title_bottom).text(g1_detail_title[barrier - 1])
            $(games[0]).css('display', 'block');
            let sub_barrier = (barrier - 1) % 4
            $(g2_bgc).css('backgroundImage', 'url(../images/game-images/game2-p' + barrier + '.png)')
            clear_grid()
            for (let i = 0; i < 8; i++) {
                for (let j = 0; j < 8; j++) {
                    let color = '#000';
                    if (grid[sub_barrier][i][j] == 0) {
                        color = '#fff';
                    }
                    $(td1[i * 8 + j]).css('backgroundColor', color);
                }
            }
        }
        else if (barrier >= 5 && barrier <= 8) {
            let g2_title = document.querySelector('.game2 .g1_round')
            let num = barrier - 4
            $(g2_title).text('ROUND ' + num)
            $(games[1]).css('display', 'block');
            g2_init();
        }
        else {
            let g3_tip = document.querySelector('.game3 .g3_tip')
            if (barrier === 12) {
                $(g3_tip).css('display', 'block');
            }
            else {
                $(g3_tip).css('display', 'none');
            }
            let g3_title = document.querySelector('.game3 .title')
            $(g3_title).text(barrier - 8)
            $(games[2]).css('display', 'block');
            g3_init();
        }

        if (barrier === 1 || barrier === 5 || barrier === 9) {
            $(rule[Math.floor(barrier / 4)]).click()
        }
    })
}


//game1
let transform = function(ele) {
    if ($(ele).css('backgroundColor') === 'rgb(255, 255, 255)') {
        $(ele).css('backgroundColor', '#000');
    }
    else {
        $(ele).css('backgroundColor', '#fff');
    }
}
let dir = [[0, 1, 1], [0, -1, -1], [1, 0, 8], [-1, 0, -8]];
$(td).each(function(index, element) {
    $(element).attr('data-index', index);
    $(element).click(function() {
        let idx = $(this).attr('data-index') * 1;
        transform(td[idx]);
        for (let i = 0; i < 4; i++) {
            let row = Math.floor(idx / 8) + dir[i][0], col = idx % 8 + dir[i][1];
            if (row >= 0 && row < 8 && col >= 0 && col < 8) {
                transform(td[idx + dir[i][2]]);
            }
        }
        let flag = true;
        for (let i = 0; i < 8; i++) {
            for (let j = 0; j < 8; j++) {
                if ($(td[i * 8 + j]).css('backgroundColor') !== $(td1[i * 8 + j]).css('backgroundColor')) {
                    flag = false;
                    break;
                }
            }
            if (!flag) {
                break;
            }
        }

        if (flag) {
            $(knowledge_card).css('display', 'block')
            $(options[barrier]).css('filter', 'saturate(100%)')
            total_barrier = Math.max(total_barrier, barrier + 1)
            if (barrier === 3) {
                $(knowledge_card).find('.card2').css('display', 'block')
                $(knowledge_card).find('.card').css('display', 'none')
            }
            else {
                $(knowledge_card).find('.card2').css('display', 'none')
                $(knowledge_card).find('.card').css('display', 'block')
                let card_no = barrier - 1
                if (barrier === 4) {
                    card_no -= 1
                }
                is_get[card_no] = 1

                $(knowledge_card).find('.winner div').html(detail_words[card_no])
                $(knowledge_card).find('img').prop('src', '../images/game-images/knowledge-card' + card_no + '.png')
            }
            updateInfo(is_get, total_barrier)
        }
    })
})
