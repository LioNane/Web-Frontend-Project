$(document).ready(function() {
    $('a[href="#"]').on('click', function(event) {
        event.preventDefault();
        
        const $toast = $('#custom-toast');
        
        $toast.fadeIn(300);
        
        setTimeout(function() {
            $toast.fadeOut(400);
        }, 3000);
    });

    const regForm = document.getElementById('registrationForm');
    
    if (regForm) {
        regForm.addEventListener('submit', function(event) {
            const password = document.getElementById('password');
            const confirmPassword = document.getElementById('confirmPassword');
            
            if (password.value !== confirmPassword.value) {
                confirmPassword.setCustomValidity('Passwords do not match!');
            } else {
                confirmPassword.setCustomValidity('');
            }

            if (!regForm.checkValidity()) {
                event.preventDefault();
                event.stopPropagation();
            } else {
                event.preventDefault();
                alert('Welcome to Grand Line! Registration is finished.');
                regForm.reset();
                regForm.classList.remove('was-validated');
                return;
            }
            regForm.classList.add('was-validated');
        }, false);
    }

    $(".accordion-header").click(function() {
        const $icon = $(this).find('.toggle-icon');
        const $content = $(this).next(".accordion-content");
        
        if ($(this).hasClass("active")) {
            $(this).removeClass("active");
            $content.slideUp(300);
            $icon.text('+');
        } else {
            $(".accordion-header").removeClass("active");
            $(".accordion-content").slideUp(300);
            $(".toggle-icon").text('+');
            
            $(this).addClass("active");
            $content.slideDown(300);
            $icon.text('-');
        }
    });
});