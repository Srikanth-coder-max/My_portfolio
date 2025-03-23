// Navbar Active Script
let sections = document.querySelectorAll("section");
let navLinks = document.querySelectorAll(".nav-link");

window.onscroll = () => {
  sections.forEach((sec) => {
    if (
      sec.id === "hero-section" ||
      sec.id === "about-section" ||
      sec.id === "services-section" ||
      sec.id === "portfolio" ||
      sec.id === "contact-us"
    ) {
      let top = window.scrollY;
      let offset = sec.offsetTop;
      let height = sec.offsetHeight;
      let sectionId = sec.getAttribute("id");

      if (top >= offset && top < offset + height) {
        navLinks.forEach((link) => link.classList.remove("active"));

        let activeLink = document.querySelector(
          `.nav-link[href="#${sectionId}"]`
        );
        if (activeLink) {
          activeLink.classList.add("active");
        }
      }
    }
  });
};

//Email JS Script

document.getElementById("contact-form").addEventListener("submit", (e) => {
  e.preventDefault();

  emailjs.init("DiVWZc9aSRALdA5O6"); 

  let params = {
    from_name: document.getElementById("full_name").value,
    email_id: document.getElementById("email_id").value,
    message: document.getElementById("message").value,
  };

  emailjs.send("service_ivsh9jg", "template_p7hlzz5", params, "DiVWZc9aSRALdA5O6")
    .then(() => {
      document.querySelector(".thank-you-msg").style.display = "block";
      setTimeout(() => {
        document.querySelector(".thank-you-msg").style.display = "none";
      }, 2500);
    })
    .catch((error) => {
      console.error("EmailJS Error:", error);
    });
});
