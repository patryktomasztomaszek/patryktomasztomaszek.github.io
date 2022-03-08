(() => {
  const menuBtnRef = document.querySelector("[data-menu-open]");
  const mobileMenuRef = document.querySelector("[data-menu]");
  const mobileBtnClose = document.querySelector("[data-menu-close]");

  menuBtnRef.addEventListener("click", () => {
    mobileMenuRef.classList.toggle("menu-open");
  })

  mobileBtnClose.addEventListener('click', () => {
    mobileMenuRef.classList.toggle("menu-open");
  });
})()