$(document).ready(function () {
    let div = $('<div></div>');
    let button = $('<button>Nice.</button>');
    $(div).append(button);
    $('body').prepend(div)

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
    let div4 = $('<div></div>')
    $(div4).append(p)
    $('body').append(div4)
    let colors = ['blue', 'red', 'green', 'purple', 'yellow', 'orange', 'cyan', 'pink', 'chartreuse', 'violet', 'gold', 'coral' ]

    p.click(function () {
        $(p).css('color', colors[Math.floor(Math.random() * colors.length)])
    })

    let div5 = $('<div></div>')
    let nameBtn = $('<button>This is my name</button>')
    $(div5).append(nameBtn)
    $('body').append(div5)

    nameBtn.click(function() {
        let span = $('<span>Connor</span>')
        $(div5).append(span)
    })

    let friending = ['Calvin', 'Cecil', 'Darion', 'James', 'Joshua', 'Mariah', 'Mark', 'Michael', 'Ryan', 'Will']
    let friendingBtn = $('#friendingBtn') // button
    let friendingList = $('#friendingList')  // ul
    let f = 0

    friendingBtn.click(function() {
        let liFriending = $('<li>')
        $(liFriending).text(friending[f])
        $(friendingList).append(liFriending)
        f++
        if (f > 10) {
            console.log(';~;')
            $(liFriending).text('You are out of friends')
        }
    })

})
