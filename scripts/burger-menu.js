(function () {
  const iconBurger = document.querySelector(".navigation-burger");
  const navigationsBody = document.querySelector(".navigation-wrapper");
  iconBurger.addEventListener("click", function (e) {
    document.body.classList.toggle("lock");
    iconBurger.classList.toggle("active");
    navigationsBody.classList.toggle("active");
  });

  const navLinks = document.querySelectorAll(".navigation__link");
  navLinks.forEach((navLink) => {
    navLink.addEventListener("click", (_) => {
          if (iconBurger.classList.contains("active")) {
              document.body.classList.remove("lock");
              iconBurger.classList.remove("active");
              navigationsBody.classList.remove("active");
          }
        }
    );
  });
})();
