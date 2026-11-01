
const backToTop = document.getElementById("backToTop");
const contactForm = document.getElementById("contact-form");

window.addEventListener("scroll", function () {
    backToTop.style.display = window.scrollY > 200 ? "block" : "none";
});

backToTop.addEventListener("click", function () {
    window.scrollTo({ top: 0, behavior: "smooth" });
});

contactForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;
    const subject = encodeURIComponent("Website message from " + name);
    const body = encodeURIComponent("From: " + name + " (" + email + ")\n\n" + message);

    window.location.href = "mailto:me@gmail.com?subject=" + subject + "&body=" + body;
});