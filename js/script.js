function toggleMenu() {
      document.getElementById('navLinks').classList.toggle('active');
}
  
  // document.getElementById('whatsappForm').addEventListener('submit', function (e) {
  //   e.preventDefault();

  //   const name = document.getElementById('name').value.trim();
  //   const email = document.getElementById('email').value.trim();
  //   const phone = document.getElementById('phone').value.trim();
  //   const standard = document.getElementById('standard').value;
  //   const message = document.getElementById('message').value.trim();

  //   const whatsappNumber = "919619454671"; // Founder’s WhatsApp number (with country code, no +)

  //   const url = `https://wa.me/${whatsappNumber}?text=` +
  //     encodeURIComponent(
  //       `👋 Hello Vertex Academy!\n\n📌 Name: ${name}\n📧 Email: ${email}\n📱 Phone: ${phone}\n🏫 Standard: ${standard}\n📝 Message: ${message}`
  //     );

  //   window.open(url, '_blank');
  //   const successMsg = document.getElementById("successMessage");
  //   successMsg.style.display = "none"; // hide again
  //   document.getElementById("successMessage").style.display = "block";

  // // Optional: Reset form
  // document.getElementById("whatsappForm").reset();
  // });
document.getElementById('whatsappForm').addEventListener('submit', function (e) {
  e.preventDefault();

  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const phone = document.getElementById('phone').value.trim();
  const standard = document.getElementById('standard').value;
  const message = document.getElementById('message').value.trim();

  const whatsappNumber = "919619454671"; // Founder’s WhatsApp number (with country code)

  const url = `https://wa.me/${whatsappNumber}?text=` +
    encodeURIComponent(
      `👋 Hello Vertex Academy!\n\n📌 Name: ${name}\n📧 Email: ${email}\n📱 Phone: ${phone}\n🏫 Standard: ${standard}\n📝 Message: ${message}`
    );

  const submitBtn = this.querySelector("button[type='submit']");
  const successMsg = document.getElementById("successMessage");

  // Show loading state
  submitBtn.disabled = true;
  submitBtn.textContent = "Sending...";

  // Simulate processing delay
  setTimeout(() => {
    window.open(url, '_blank');

    // Show success message
    successMsg.style.display = "block";

    // Reset form
    document.getElementById("whatsappForm").reset();

    // Restore button state
    submitBtn.disabled = false;
    submitBtn.textContent = "Send via WhatsApp";

  }, 1500); // 1.5 second delay
});
