document.addEventListener("DOMContentLoaded", function() {
    
    const accordionHeaders = document.querySelectorAll('.accordion-header');

    if (accordionHeaders.length > 0) {
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
    }

    const notReadyButtons = document.querySelectorAll('a[href="#"]');
    
    notReadyButtons.forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.preventDefault();
            alert("Oops! This article is not available now!");
        });
    });

});