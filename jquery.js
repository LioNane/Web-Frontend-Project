$(document).ready(function() {
    $('.btn-outline-primary').filter('[href="#"]').click(function(event) {
        event.preventDefault();
        
        $('#article-alert').fadeIn();
        
        setTimeout(function() {
            $('#article-alert').fadeOut();
        }, 3000);
    });

    $('#article-alert .btn-close').click(function() {
        $('#article-alert').fadeOut();
    });
});