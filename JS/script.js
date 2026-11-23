// 1. Back-to-Top Button (Existing)
const backToTop = document.getElementById("backToTop");

window.addEventListener("scroll", function () {
    backToTop.style.display = window.scrollY > 200 ? "block" : "none";
});

backToTop.addEventListener("click", function () {
    window.scrollTo({ top: 0, behavior: "smooth" });
});

// 2. Dark Mode / Light Mode Toggle
const themeToggleBtn = document.getElementById("theme-toggle");
themeToggleBtn.textContent = "Light Mode"; // Since default theme is dark

themeToggleBtn.addEventListener("click", function () {
    document.body.classList.toggle("light-mode");
    themeToggleBtn.textContent = document.body.classList.contains("light-mode")
        ? "Dark Mode"
        : "Light Mode";
});

// 3. Show / Hide "Read More" Content
const toggleBioBtn = document.getElementById("toggle-bio-btn");
const extraBio = document.getElementById("extra-bio");

toggleBioBtn.addEventListener("click", function () {
    const isHidden = extraBio.style.display === "none";
    extraBio.style.display = isHidden ? "block" : "none";
    toggleBioBtn.textContent = isHidden ? "Read Less" : "Read More";
});

// 4. Add Table Rows Dynamically
const addSkillBtn = document.getElementById("add-skill-btn");
const skillsBody = document.getElementById("skills-body");

addSkillBtn.addEventListener("click", function () {
    const skillInput = document.getElementById("new-skill");
    const levelInput = document.getElementById("new-level");
    const expInput = document.getElementById("new-exp");

    if (!skillInput.value.trim() || !levelInput.value.trim() || !expInput.value.trim()) {
        alert("Please fill in Technology, Proficiency, and Experience.");
        return;
    }

    const newRow = document.createElement("tr");
    newRow.innerHTML = `
        <td>${skillInput.value}</td>
        <td>${levelInput.value}</td>
        <td>${expInput.value}</td>
    `;

    skillsBody.appendChild(newRow);

    skillInput.value = "";
    levelInput.value = "";
    expInput.value = "";
});

// 5. Real-Time Character Counter for Textare
const messageInput = document.getElementById("message");
const charCount = document.getElementById("char-count");
const maxChars = 200;

messageInput.addEventListener("input", function () {
    const remaining = maxChars - messageInput.value.length;
    charCount.textContent = `${remaining} characters remaining`;
});

// 6. Get & Display Form Values + Open Email Client
const contactForm = document.getElementById("contact-form");
const formOutput = document.getElementById("form-output");

contactForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = messageInput.value;

    // Display confirmation on the webpage
    formOutput.innerHTML = `
        <div class="submission-banner">
            <p><strong>Message prepared for ${name}</strong> (${email})</p>
            <p><em>"${message}"</em></p>
        </div>
    `;

    // Trigger email client
    const subject = encodeURIComponent("Website message from " + name);
    const body = encodeURIComponent("From: " + name + " (" + email + ")\n\n" + message);
    window.location.href = "mailto:me@gmail.com?subject=" + subject + "&body=" + body;

    contactForm.reset();
    charCount.textContent = `${maxChars} characters remaining`;
});

// 7. Live Digital Clock & Dynamic Copyright Year
function updateClock() {
    const now = new Date();
    document.getElementById("live-clock").textContent = `Local Time: ${now.toLocaleTimeString()}`;
    document.getElementById("current-year").textContent = now.getFullYear();
}

setInterval(updateClock, 1000);
updateClock();a