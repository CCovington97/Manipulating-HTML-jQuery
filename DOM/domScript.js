document.addEventListener('DOMContentLoaded', function() {
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
})