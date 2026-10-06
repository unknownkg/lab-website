const menuBtn = document.querySelector(".menu-btn");
const nav = document.querySelector(".nav");
const form = document.getElementById("contactForm");
const formStatus = document.getElementById("formStatus");

menuBtn.addEventListener("click", () => {
  const opened = nav.classList.toggle("open");
  menuBtn.setAttribute("aria-expanded", String(opened));
});

nav.querySelectorAll("a").forEach(link => {
  link.addEventListener("click", () => {
    nav.classList.remove("open");
    menuBtn.setAttribute("aria-expanded", "false");
  });
});

form.addEventListener("submit", event => {
  event.preventDefault();
  const data = new FormData(form);
  const name = data.get("name").trim();

  formStatus.textContent = name
    ? `Спасибо, ${name}! Заявка принята в демонстрационном режиме.`
    : "Заявка принята в демонстрационном режиме.";

  form.reset();
});
