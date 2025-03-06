document.addEventListener("DOMContentLoaded", function () {
    // Smooth scrolling for navigation links
    document.querySelectorAll(".navbar a").forEach(anchor => {
        anchor.addEventListener("click", function (event) {
            event.preventDefault();
            const targetId = this.getAttribute("href").substring(1);
            document.getElementById(targetId).scrollIntoView({
                behavior: "smooth"
            });
        });
    });

    // Active navigation link highlight on scroll
    window.addEventListener("scroll", () => {
        let scrollPos = window.scrollY + 100;
        document.querySelectorAll("section").forEach(section => {
            if (section.offsetTop <= scrollPos && section.offsetTop + section.offsetHeight > scrollPos) {
                document.querySelectorAll(".navbar a").forEach(link => {
                    link.classList.remove("active");
                    if (link.getAttribute("href").substring(1) === section.id) {
                        link.classList.add("active");
                    }
                });
            }
        });
    });

    // Contact form submission
    document.getElementById("contactForm").addEventListener("submit", function (event) {
        event.preventDefault();
        let name = document.getElementById("name").value;
        let email = document.getElementById("email").value;
        let message = document.getElementById("message").value;

        if (name && email && message) {
            document.getElementById("formMessage").innerText = "Thank you for reaching out, " + name + "! I will get back to you soon.";
            document.getElementById("contactForm").reset();
        } else {
            document.getElementById("formMessage").innerText = "Please fill out all fields.";
        }
    });
});
