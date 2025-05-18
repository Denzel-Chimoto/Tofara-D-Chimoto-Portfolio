export function loadFooter(){
    const footer = ` 
    <footer>
        <p>&copy;2025 My Website. All rights reserved</p>
        <div class="social-links">
            <a href="#">Linked In</a>
            <a href="#">Github</a>
        </div>
    </footer>
    `
    ;
document.getElementById('footer').innerHTML= footer;
}