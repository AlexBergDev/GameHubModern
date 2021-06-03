const burger = document.querySelector(".burger");
const nav = document.querySelector(".nav-links");
const navLinks = document.querySelectorAll(".nav-links li");

function navigation() {

    burger.addEventListener("click", function()  {

        nav.classList.toggle("nav-active");

        navLinks.forEach( function(link, index) {

            if (link.style.animation) {
                link.style.animation = "";
            } 
            
            else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 10 + 0.1}s`;
            }

        });

        burger.classList.toggle("toggle");

    });
}

navigation();