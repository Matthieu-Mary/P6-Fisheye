function displayModal() {
  const modal = document.getElementById("contact_modal");
  modal.style.display = "flex";
}

function closeModal() {
  const modal = document.getElementById("contact_modal");
  modal.style.display = "none";
}

const contactForm = document.querySelector(".contact-form");

contactForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const firstNameModal = document.getElementById("form-firstname");
  const nameModal = document.getElementById("form-name");
  const emailModal = document.getElementById("form-email");
  const messageModal = document.getElementById("form-message");

  console.log(firstNameModal.value);
  console.log(nameModal.value);
  console.log(emailModal.value);
  console.log(messageModal.value);
  closeModal();
});
