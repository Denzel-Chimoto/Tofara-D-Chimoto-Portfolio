document.addEventListener('DOMContentLoaded', function() {

    function loadComponent(elementId, path){
        fetch(path).then(response => response.text()).then(html => {document.getElementById(elementId).innerHTML=html;

        }).catch(err => console.error(`Error Loading ${path}:`, err));

    }

    loadComponent('header', './components/header.html')
    loadComponent('cards','/components/cards.html')
    loadComponent('footer','/components/footer.html')
});