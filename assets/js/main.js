var typed = new Typed(".text", {
    strings: ["Frontend Developer", "Frontend Designer", "Web Developer", "Graphics Designer"],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});



document.addEventListener("DOMContentLoaded", function () {
    const sidebarActiveCheckbox = document.getElementById('sidebar-active');
    const links = document.querySelectorAll('#links-container a');

    links.forEach(link => {
        link.addEventListener('click', function () {
            sidebarActiveCheckbox.checked = false;
        });
    });
});

