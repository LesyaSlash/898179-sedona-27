var popup = document.querySelector(".popup-booking-wrapper");
var button = document.querySelector(".btn-popup");
var arrive = popup.querySelector("[name=date-of-arrive]");
var departure = popup.querySelector("[name=date-of-departure]");
var adults = popup.querySelector("[name=adults]");
var children = popup.querySelector("[name=children]");

var isStorageSupport = true;
var storage = "";

try {
   storage = localStorage.getItem("adults");
   storage = localStorage.getItem("children");
} catch (err) {
   isStorageSupport = false;
}

popup.classList.add("popup-hide");

button.addEventListener("click", function (evt) {
   evt.preventDefault();
   if (popup.classList.contains("popup-hide") || popup.classList.contains("popup-close")) {
     popup.classList.remove("popup-hide");
     popup.classList.remove("popup-close");
   } else {
     popup.classList.remove("popup-error");
     popup.classList.add("popup-close");
   }
});

popup.addEventListener("submit", function (evt) {
    if (!arrive.value || !departure.value || !adults.value) {
      evt.preventDefault();
      popup.classList.remove("popup-error");
      popup.offsetWidth = popup.offsetWidth;
      popup.classList.add("popup-error");
   } else {
     if (isStorageSupport) {
       localStorage.setItem("adults", adults.value);
       localStorage.setItem("children", children.value);
    }
  }
});
