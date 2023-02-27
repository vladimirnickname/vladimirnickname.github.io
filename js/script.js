const hamburger = document.querySelector(".hamburger"),
    menu = document.querySelector(".menu"),
    closeElem = document.querySelector(".menu__close");

hamburger.addEventListener("click", () => {
    menu.classList.add("active");
});

closeElem.addEventListener("click", () => {
    menu.classList.remove("active");
});

const counters = document.querySelectorAll('.skills__ratings-counter'),
    lines = document.querySelectorAll('.skills__ratings-line span');

counters.forEach((item, i) => {
    lines[i].style.width = item.innerHTML;
});

//console.log(counters);

document.addEventListener('DOMContentLoaded', function () {
    const elems = document.querySelectorAll('.carousel');
});

// Or with jQuery

$(document).ready(function () {
    $('.carousel').carousel({
        indicators: false
    });
    setInterval(function () {
        $('.carousel').carousel('next')
    }, 2000);
});


validateForms("#contacts__form");

$("form").submit(function (e) {
    e.preventDefault();
    $.ajax({
        type: "POST",
        url: "mailer/smart.php",
        data: $(this).serialize(),
    }).done(function () {
        $(this).find("input").val("");
        $("form").trigger("reset");
    });
    return false;
});






