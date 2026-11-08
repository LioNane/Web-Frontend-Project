document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('registrationForm');

    if (form) {
        form.addEventListener('submit', (event) => {
            event.preventDefault();
            event.stopPropagation();

            const password = document.getElementById('password');
            const confirmPassword = document.getElementById('confirmPassword');

            if (password.value !== confirmPassword.value) {
                confirmPassword.setCustomValidity("Passwords do not match.");
            } else {
                confirmPassword.setCustomValidity("");
            }

            if (form.checkValidity()) {
                const firstName = document.getElementById('firstName').value;
                alert(`Welcome to the Grand Line, ${firstName}! Your registration is successful.`);
                
                form.reset();
                form.classList.remove('was-validated');
            } else {
                form.classList.add('was-validated');
            }
        }, false);
        
        form.addEventListener('reset', () => {
            form.classList.remove('was-validated');
            document.getElementById('confirmPassword').setCustomValidity("");
        });
    }
});

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

    $('#submitTopicBtn').on('click', function(e) {
        e.preventDefault();
        
        const title = $('#topicTitle').val();
        const category = $('#topicCategory').val();
        const content = $('#topicContent').val();

        if (title.trim() !== '' && category !== null && content.trim() !== '') {
            const newTopic = `
                <a href="#" class="list-group-item list-group-item-action d-flex justify-content-between align-items-center py-3" style="display: none;">
                    <div>
                        <h6 class="mb-1 text-primary">${title}</h6>
                        <small class="text-muted">Started by <strong>You</strong> · Just now</small>
                    </div>
                    <span class="badge bg-secondary rounded-pill">0</span>
                </a>
            `;

            $('.list-group').first().prepend(newTopic);
            
            $('.list-group').first().children().first().slideDown('slow');

            $('#newTopicModal').modal('hide');
            
            $('#newTopicForm')[0].reset();
            $('#newTopicForm').removeClass('was-validated');
        } else {
            $('#newTopicForm').addClass('was-validated');
        }
    });

    $('.accordion-header').on('click', function() {
        const content = $(this).next('.accordion-content');
        const icon = $(this).find('.toggle-icon');

        if (content.is(':visible')) {
            content.slideUp(300);
            icon.text('+');
        } else {
            $('.accordion-content').slideUp(300);
            $('.toggle-icon').text('+');

            content.slideDown(300);
            icon.text('-');
        }
    });
});

    const accordionHeaders = document.querySelectorAll('.accordion-header');

    accordionHeaders.forEach(header => {
        header.addEventListener('click', function() {
            const content = this.nextElementSibling;
            const icon = this.querySelector('.toggle-icon');

            const isOpen = content.style.display === 'block';

            document.querySelectorAll('.accordion-content').forEach(item => {
                item.style.display = 'none';
            });
            document.querySelectorAll('.toggle-icon').forEach(itemIcon => {
                itemIcon.textContent = '+';
            });

            if (!isOpen) {
                content.style.display = 'block';
                icon.textContent = '-';
            }
        });
    });