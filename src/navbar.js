import homePage from "./home";
import footerPage from "./footer";
import menuPage from "./menu";
import contactPage from "./contact";

const menuNav = () => {
  const container = document.getElementById("content");
  const navbar = document.createElement("nav");
  navbar.classList.add("navbar");

  const ul = document.createElement("ul");
  ul.classList.add("ulnav");

  const li1 = document.createElement("li");
  li1.textContent = "Home";

  const li2 = document.createElement("li");
  li2.textContent = "Menu";

  const li3 = document.createElement("li");
  li3.textContent = "About";

  ul.appendChild(li1);
  ul.appendChild(li2);
  ul.appendChild(li3);
  navbar.appendChild(ul);
  container.appendChild(navbar);

  li1.addEventListener("click", () => {
    container.innerHTML = "";
    menuNav();
    homePage();
    footerPage();
  });

  li2.addEventListener("click", () => {
    container.innerHTML = "";
    menuNav();
    menuPage();
    footerPage();
  });

  li3.addEventListener("click", () => {
    container.innerHTML = "";
    menuNav();
    contactPage();
    footerPage();
  });
};

export default menuNav;
