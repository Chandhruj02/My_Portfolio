// NAV-BAR START
document.getElementById('menu-icon').onclick = function() {
    var navLinks = document.getElementById('nav-links');
    if (navLinks.style.display === "flex") {
        navLinks.style.display = "none";
    } else {
        navLinks.style.display = "flex";
    }
};

window.onresize = function() {
    if (window.innerWidth > 768) {
        document.getElementById('nav-links').style.display = "flex";
    } else {
        document.getElementById('nav-links').style.display = "none";
    }
};

// NAV-BAR END

