document.addEventListener('DOMContentLoaded', function () {
    let div = document.createElement('div')
    div.classList.add('container')
    let button = document.createElement('button')
    let btnText = document.createTextNode('Nice.')
    button.classList.add('nice')
    button.appendChild(btnText)
    div.appendChild(button)
    document.body.prepend(div)

    button.addEventListener('click', function () {
        niceBtn();
    })

    function niceBtn() {
        alert('69')
    }

    let txtButton = document.getElementById('txtButton')
    let txtBox = document.getElementById('txtBox')

    txtButton.addEventListener('click', function () {
        txtBoxAlert()
    })

    function txtBoxAlert() {
        alert(txtBox.value)
    }

    let div3 = document.getElementById('black')
    div3.onmouseover = function () { mouseOver() };
    div3.onmouseout = function () { mouseOut() };

    function mouseOver() {
        div3.style.backgroundColor = "blue";
    }

    function mouseOut() {
        div3.style.backgroundColor = "black";
    }

    let p = document.createElement('p')
    let pText = document.createTextNode('Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro cupiditate vero repudiandae reprehenderit iusto id tenetur iure eligendi. Libero, quos! Odit dolore iste repellat minus distinctio, accusantium nesciunt dicta similique.')
    let div4 = document.createElement('div')
    p.appendChild(pText)
    div4.appendChild(p)
    document.body.appendChild(div4)
    let colors = ["blue", "red", "yellow", "green", "purple", "orange", "turquoise", "chartreuse"]

    p.addEventListener('click', function () {
        p.style.color = colors[Math.floor(Math.random() * colors.length)];
    })

    let nameBtn = document.createElement('button')
    let nameBtnText = document.createTextNode('This is my name')
    let div5 = document.createElement('div')
    nameBtn.appendChild(nameBtnText)
    div5.appendChild(nameBtn)
    document.body.appendChild(div5)

    nameBtn.addEventListener('click', function () {
        giveName()
    })

    function giveName() {
        let span = document.createElement('span')
        let name = document.createTextNode('Connor')
        span.appendChild(name)
        div5.appendChild(span)
    }

    let friending = ['Calvin', 'Cecil', 'Darion', 'James', 'Joshua', 'Mariah', 'Mark', 'Michael', 'Ryan', 'Will']
    let friendingBtn = document.getElementById('friendingBtn')
    let friendingList = document.getElementById('friendingList')
    let div6 = document.getElementById('div6')
    let f = 0

    friendingBtn.addEventListener('click', function () {
        addFriending()
    })

    function addFriending() {
        let liFriending= document.createElement('li')
        liFriending.innerText = friending[f]
        friendingList.appendChild(liFriending)
        f++
        if (f > 10) {
            console.log(';~;')
            liFriending.innerText = "You are out of friends"
        }
    }
})