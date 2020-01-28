$(document).ready(function () {
    let div = $('<div></div>');
    let button = $('<button>Nice.</button>');
    $(div).append(button);
    $('body').append(div)

    button.click(function() {
        alert('69')
    })

    let txtButton = $('#txtButton')
    let txtBox = $('#txtBox')

    txtButton.click(function () {
        alert(txtBox.val())
    })

    let div3 = $('#black')
    $(div3).mouseover(function() {
        $(div3).css('background-color', 'blue')
    })
    $(div3).mouseleave(function() {
        $(div3).css('background-color', 'black')
    })

    let p = $('<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque nostrum amet, eveniet repellat ea id enim quae. Perferendis a necessitatibus quas omnis! Eius eveniet, nobis itaque repudiandae provident minima totam!</p>');
    $(div).append(p)
    let colors = ['blue', 'red', 'green', 'purple', 'yellow', 'orange', 'cyan', 'pink', 'chartreuse', 'violet', 'gold', 'coral' ]

    p.click(function () {
        $(p).css('color', colors[Math.floor(Math.random() * colors.length)])
    })

    
})
