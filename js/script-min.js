var popup=document.querySelector(".popup-booking-wrapper"),button=document.querySelector(".btn-popup"),arrive=popup.querySelector("[name=date-of-arrive]"),departure=popup.querySelector("[name=date-of-departure]"),adults=popup.querySelector("[name=adults]"),children=popup.querySelector("[name=children]"),isStorageSupport=!0,storage="";try{storage=localStorage.getItem("adults"),storage=localStorage.getItem("children")}catch(p){isStorageSupport=!1}popup.classList.add("popup-hide"),button.addEventListener("click",function(p){p.preventDefault(),popup.classList.contains("popup-hide")||popup.classList.contains("popup-close")?(popup.classList.remove("popup-hide"),popup.classList.remove("popup-close")):(popup.classList.remove("popup-error"),popup.classList.add("popup-close"))}),popup.addEventListener("submit",function(p){arrive.value&&departure.value&&adults.value?isStorageSupport&&(localStorage.setItem("adults",adults.value),localStorage.setItem("children",children.value)):(p.preventDefault(),popup.classList.remove("popup-error"),popup.offsetWidth=popup.offsetWidth,popup.classList.add("popup-error"))});