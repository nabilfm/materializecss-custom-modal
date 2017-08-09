/**
 * Created by nabil on 8/9/2017.
 */

$(document).ready(function () {
    $('.trigger-open-custom-modal').off('click').on('click',function (e) {
        e.preventDefault();
        customModal.open();
    });
    $('.trigger-close-custom-modal').off('click').on('click',function (e) {
        e.preventDefault();
        customModal.close();
    });
});


var customModal ={
    open: function (content) {
        content= content?
            content :
            "<h1>Custom Modal</h1>" +
            "<p>here's default modal content. if you wish to see your content, fill the parameter with element (string)</p>";
        $('#contentHere').html(content)
        $('#myModal').show();
    },
    close: function () {
        $('#myModal').hide();
    }
};
var modal = $('#myModal');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.hide();
    }
};