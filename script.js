document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        document.getElementById(targetId).scrollIntoView({ behavior: 'smooth' });
    });
});

window.onload = function() {
    const greeting = document.createElement('p');
    const hours = new Date().getHours();
    if (hours < 12) {
        greeting.textContent = "Good morning!";
    } else if (hours < 18) {
        greeting.textContent = "Good afternoon!";
    } else {
        greeting.textContent = "Good evening!";
    }
    document.querySelector('header').appendChild(greeting);
};
