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
});