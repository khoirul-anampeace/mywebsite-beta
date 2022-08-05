// Navbar
const toggleButton = document.getElementsByClassName('navbar-toggle')[0];
const navbarLinks = document.getElementById('navbar-links');


toggleButton.addEventListener("click", () => {
    // for (let i = 0; i < navbarLinks.length; i++) {
    //     navbarLinks[i].classList.toggle('active')
    // }
    navbarLinks.classList.toggle("active")
    console.info('berhasil')
});


document.addEventListener("mousemove", parallax);

function parallax(e) {
    document.querySelectorAll(".object").forEach(function (move) {

        var moving_value = move.getAttribute("data-value");
        var x = (e.clientX * moving_value) / 250;
        var y = (e.clientY * moving_value) / 250;

        move.style.transform = "translateX(" + x + "px) translateY(" + y + "px)";
    });
}