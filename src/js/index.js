import "../scss/style.scss";

const infoIcons = document.querySelectorAll(".form__label-radio");
const modal = document.querySelector(".modal");

for (let i=0; i<infoIcons.length; i++) {
  infoIcons[i].addEventListener("mouseover", (evt) => {
    modal.classList.remove("visually-hidden");

    if (document.body.clientWidth < 500) {
      modal.style.right='8%';

      if(evt.target.id === 'ind') {
        modal.style.bottom='25%';
      }

      if(evt.target.id === "bus") {
        modal.style.bottom="22%";
      }

      if(evt.target.id === "inv") {
        modal.style.bottom="19%";
      }

      if(evt.target.id === "tr") {
        modal.style.bottom="16%";
      }
      
    } 
    else if(document.body.clientWidth >= 500 && document.body.clientWidth < 1130) {
      modal.style.bottom="17%";
     
      if(evt.target.id === "ind") {
        modal.style.right="65%";
      }
     
      if(evt.target.id === "bus") {
        modal.style.right="37%";
      }
  
      if(evt.target.id === "inv") {
        modal.style.right="16%";
      }
  
      if(evt.target.id === "tr") {
        modal.style.right="2%";
      }
    } else {
      modal.style.bottom="25%"

      if(evt.target.id === "ind") {
        modal.style.right="66%";
      }
     
      if(evt.target.id === "bus") {
        modal.style.right="38%";
      }
  
      if(evt.target.id === "inv") {
        modal.style.right="17%";
      }
  
      if(evt.target.id === "tr") {
        modal.style.right="3%";
      }
    }

    
  });
};

for (let i=0; i<infoIcons.length; i++) {
    infoIcons[i].addEventListener("mouseout", () => {
      modal.classList.add("visually-hidden");
    });
  };
