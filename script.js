const contactBtn = document.querySelector(".contact");
const contactInfo = document.querySelector(".contact_info");

const showContact = () => {
  contactInfo.classList.toggle("active");
};

contactBtn.addEventListener("click", showContact);
