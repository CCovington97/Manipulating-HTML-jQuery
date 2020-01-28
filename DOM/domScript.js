document.addEventListener('DOMContentLoaded', function () {
    let div = document.createElement('div')
    div.classList.add('container')
    let button = document.createElement('button')
    let btnText = document.createTextNode('Nice.')
    button.classList.add('nice')
    button.appendChild(btnText)
    div.appendChild(button)
    document.body.appendChild(div)

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
})