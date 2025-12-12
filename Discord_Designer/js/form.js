// Inizializza EmailJS
(function () {
  emailjs.init("qRDLgmFIeWbAnb6fI"); // Public Key
})();

// Elementi
const form = document.getElementById("contact-form");
const successMsg = document.getElementById("form-success");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  emailjs.sendForm(
    "service_vxw4npe",      // Service ID
    "template_93yxv9l",     // Template ID
    this
  )
  .then(() => {
    // Reset form
    form.reset();

    // Messaggio successo
    successMsg.classList.remove("hidden");

    // Torna in alto al form
    successMsg.scrollIntoView({ behavior: "smooth" });
  })
  .catch((error) => {
    console.error("EmailJS error:", error);
    alert("❌ Errore durante l'invio. Riprova.");
  });
});
