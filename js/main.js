function showHide(element) {
  if (element.nextElementSibling.style.display != "flex") {
    // если блок скрыт
    element.nextElementSibling.style.display = "flex"; // открываем его
  } else {
    // если открыт
    element.nextElementSibling.style.display = "none"; // скрываем
  }
  element.lastElementChild.classList.toggle("rotate");
}
