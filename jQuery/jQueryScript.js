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

})
