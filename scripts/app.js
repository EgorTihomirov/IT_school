document.addEventListener('DOMContentLoaded', function() {

    const buttons = document.querySelectorAll('nav button');

    function loadContent(url) {
        fetch(url)
            .then(response => response.text())
            .then(data => {
                document.getElementById('content').innerHTML = data;
            })
            .catch(error => console.error('Ошибка при загрузке:', error));
    }

    buttons.forEach(button => {
        button.addEventListener('click', function(event) {
            event.preventDefault();
            const targetUrl = this.dataset.target;
            loadContent(targetUrl);
        });
    });


    if (buttons.length > 0) {
        loadContent(buttons[0].dataset.target); 
    }
});