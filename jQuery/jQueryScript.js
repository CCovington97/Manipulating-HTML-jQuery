$(document).ready(function () {
    console.log('Hello')
    let div = $('<div></div>');
    let button = $('<button>Nice.</button>');
    $(div).append(button);
    $('body').append(div)

    button.click(function() {
        alert('69')
    })



})
