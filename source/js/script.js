var navMain = document.querySelector(".page-nav");
var navToggle = document.querySelector(".page-nav__toggle");

navMain.classList.remove("page-nav--nojs");

navToggle.addEventListener("click", function () {
  if (navMain.classList.contains("page-nav--closed")) {
    navMain.classList.remove("page-nav--closed");
    navMain.classList.add("page-nav--opened");
  } else {
    navMain.classList.add("page-nav--closed");
    navMain.classList.remove("page-nav--opened");
  }
});
var map;

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: {
      lat: 59.938754,
      lng: 30.320047
    },
    zoom: 15
  });
  var marker = new google.maps.Marker({
    position: {
      lat: 59.938888,
      lng: 30.323015
    },
    map: map,
    title: "Магазин Cat Energy",
    icon: "img/map-pin.png"
  });
}
