const sidebar=document.getElementById("sidebarID")

document.getElementById("hamburgerID").addEventListener("click",()=>{
    
    sidebar.style.display="flex"
})

document.getElementById("close_sidebarID").addEventListener("click",()=>{
    sidebar.style.display="none"
})

const sidebar_links=document.querySelectorAll("#sidebarID ul a")

sidebar_links.forEach(element => {
   element.addEventListener("click",()=>{
      sidebar.style.display="none"
   })
});

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

document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const studentName = document.getElementById("studentName").value;
  const parentName = document.getElementById("parentName").value;
  const phone = document.getElementById("phone").value;
  const address = document.getElementById("address").value;
  const school = document.getElementById("school").value;
  const standard = document.getElementById("standard").value;
  const board = document.getElementById("board").value;
  const message = document.getElementById("message").value;

  const fullMessage = `*Vertex Academy Enquiry*\n\n` +
                      `👦 *Student Name:* ${studentName}\n` +
                      `👨‍👩‍👧 *Parent Name:* ${parentName}\n` +
                      `📞 *Phone:* ${phone}\n` +
                      `🏠 *Address:* ${address}\n` +
                      `🏫 *School:* ${school}\n` +
                      `🎓 *Standard:* ${standard}\n` +
                      `📘 *Board:* ${board}\n` +
                      `📝 *Message:* ${message}`;

  // ✅ Replace this with your WhatsApp number
  const whatsappURL = `https://wa.me/919619454671?text=${encodeURIComponent(fullMessage)}`;

  // Show success message before redirect
  document.getElementById("successMessage").style.display = "block";
  setTimeout(() => {
    window.open(whatsappURL, "_blank");
  }, 1000);
});
;
