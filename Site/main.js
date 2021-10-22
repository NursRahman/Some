// ======== HEADER ========
const header = document.createElement('header')
const div_head = document.createElement('div')
const div_logo = document.createElement('div')
const foto_logo = document.createElement('img')
const div_slogan = document.createElement('div')
const h1 = document.createElement('h1')
const div_spisok = document.createElement('div')


div_head.className = 'head'
div_logo.className = 'logo'
foto_logo.src ='./image/logo.png'
div_slogan.className = 'slogan'
h1.className = 'slog'
h1.textContent = 'SLOGAN SLOGAN SLOGAN'
div_spisok.className = 'spisok'
div_spisok.innerHTML = `
        <ol class="items">
        <li class="i">Home</li>
        <li class="i">About</li>
        <li class="i">Projects</li>
        <li class="i">Download</li>
        <li class="i">Contacts</li>
        </ol>
    `
document.body.append(header)
header.append(div_head, div_spisok)
div_head.append(div_logo, div_slogan)
div_logo.append(foto_logo)
div_slogan.append(h1)


// ======== SECTION ========
const sectionn = document.createElement('section')
const div_section = document.createElement('div')
div_section.className = 'section'
div_section.innerHTML = `
        <div class="sitems">
        <h2 class="tekst">Часто ли вы опадываете на работу?</h2>
        </div>
        <div class="sitems">
        <h2 class="tekst">Часто ли вы опадываете на работу?</h2>
        </div>
        <div class="sitems">
        <h2 class="tekst">Часто ли вы опадываете на работу?</h2>
        </div>
    ` 

sectionn.append(div_section)
document.body.append(sectionn)


// ======== SECTION1 ========

const section1 = document.createElement('section')
const div_section1 = document.createElement('div')
div_section1.className = 'section1'
const div_tema = document.createElement('div')
const h2_tema = document.createElement('h2')
h2_tema.className = 'tema'
h2_tema.textContent = 'About application'
const div_nout = document.createElement('div')
div_nout.className = 'nout'
const img_nout = document.createElement('img') 
img_nout.src = './image/nout.png'
const div_play = document.createElement('div')
div_play.className = 'play'
const img_play = document.createElement('img') 
img_play.src = './image/play-button.png'

section1.append(div_section1)
div_section1.append(div_tema, div_nout, div_play)
div_tema.append(h2_tema)
div_nout.append(img_nout)
div_play.append(img_play)
document.body.append(section1)


// ======== SECTION2 ========

const section2 = document.createElement('section')
const div_section2 = document.createElement('div')
div_section2.className = 'section3'
div_section2.innerHTML = `
        <div class="question" id="q1"><img src="./image/question.png" alt="img"></div>
        <div class="question" id="q2"><img src="./image/question.png" alt="img"></div>
        <div class="question" id="q3"><img src="./image/question.png" alt="img"></div>
        <div class="question" id="q4"><img src="./image/question.png" alt="img"></div>
        <div class="question" id="q5"><img src="./image/question.png" alt="img"></div>
    `
section2.append(div_section2)
document.body.append(section2)


//======== Section About==========

const sectionab = document.createElement('section')
sectionab.innerHTML = `
    <div class="section2">
    <div>
        <h2 class="tema">About project</h2>
    </div>
    <div>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Libero molestiae consequatur ipsum laborum
            tempora dignissimos recusandae, repudiandae omnis illo aut quasi placeat expedita quaerat rerum
            quibusdam nemo est mollitia suscipit.</p>
    </div>
    </div>
`
document.body.append(sectionab)


// ======== SECTION3 ========

const section3 = document.createElement('section')
const div_section3 = document.createElement('div')
div_section3.className = 'section2'
const div_tema2 = document.createElement('div')
const h2_tema2 = document.createElement('h2')
h2_tema2.className = 'tema'
h2_tema2.textContent = 'Download'
const div_down = document.createElement('div')
div_down.className = 'download'
div_down.innerHTML = `
    <div><img src="./image/android.png" alt="android"></div>
    <div><img src="./image/icon.png" alt="icon"></div>
`
const div_tek = document.createElement('div')
const p_tek = document.createElement('p')
p_tek.className = 'tek'
p_tek.textContent=`Lorem, ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, optio. Quis a,
eveniet id labore in, laboriosam veniam vero provident quibusdam tempora at autem, nihil molestias
quod saepe? Similique, amet!`

section3.append(div_tema2, div_down, div_tek)
div_tema2.append(h2_tema2)
div_tek.append(p_tek)
document.body.append(section3)



// ========== FOOTER ==========

const footer = document.createElement('footer')
const div_foot = document.createElement('div')
const h2_foot = document.createElement('h2')
h2_foot.className = 'foot'
h2_foot.textContent = `SOME`
const div_footimg = document.createElement('div')
div_footimg.className = 'footerimg'
div_footimg.innerHTML = `
    <img class="fimg" src="./image/vk.png" alt="vk">
    <img class="fimg" src="./image/insta.png" alt="in">
    <img class="fimg" src="./image/facebook.png" alt="fb">
`
const div_footext = document.createElement('div')
div_footext.className = 'footext'
div_footext.innerHTML = `
            <div class="fotiv">
                <h3>Contacts</h3>
                <h5>Tel: +996(312)900000<br> Fax: +996(555)555555</h5>
            </div>

            <div class="fotiv">
                <h3>Address</h3>
                <h5>American Univercity of Central Asia <br>7/6 Aaly Tokombaev street <br> Bishkek, Kyrgyz Republic
                    720060</h5>
            </div>
            <div class="fotiv">
                <h3>Help</h3>
                <h5>Help <br>Help me<br>Help us</h5>
            </div>
`

footer.append(div_foot, div_footimg, div_footext)
div_foot.append(h2_foot)
document.body.append(footer)