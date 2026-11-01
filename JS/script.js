const year = new Date().getFullYear();
document.querySelector("#current-year").textContent = year;

const contactForm = document.querySelector("#contact-form");

contactForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const formData = new FormData(contactForm);
    const subject = encodeURIComponent(`Website message from ${formData.get("name")}`);
    const body = encodeURIComponent(
        `From: ${formData.get("name")} (${formData.get("email")})\n\n${formData.get("message")}`
    );

    window.location.href = `mailto:me@gmail.com?subject=${subject}&body=${body}`;
});
