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
})
