const infoIcons = document.querySelectorAll(".form__label-radio");
const modal = document.querySelector(".modal");

for (let i=0; i<infoIcons.length; i++) {
  infoIcons[i].addEventListener("mouseover", () => {
    modal.classList.remove("visually-hidden");
  });
};

for (let i=0; i<infoIcons.length; i++) {
    infoIcons[i].addEventListener("mouseout", () => {
      modal.classList.add("visually-hidden");
    });
  };
