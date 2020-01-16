let navMain = document.querySelector(".page-nav");
let navToggle = document.querySelector(".page-nav__toggle");
let beforeButton = document.querySelector(".example__button-before");
let afterButton = document.querySelector(".example__button-after");
let beforePage = document.querySelector(".example__photo-before");
let afterPage = document.querySelector(".example__photo-after");
let scale = document.querySelector(".example__scale");
let map;

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

beforeButton.addEventListener("click", function () {
  if (beforePage.classList.contains("example__photo-closed")) {
    beforePage.classList.remove("example__photo-closed");
    beforePage.classList.add("example__photo-opened");
    afterPage.classList.remove("example__photo-opened");
    afterPage.classList.add("example__photo-closed");
    scale.classList.remove("example__scale-after");
  }
});

afterButton.addEventListener("click", function () {
  if (afterPage.classList.contains("example__photo-closed")) {
    afterPage.classList.remove("example__photo-closed");
    afterPage.classList.add("example__photo-opened");
    beforePage.classList.remove("example__photo-opened");
    beforePage.classList.add("example__photo-closed");
    scale.classList.add("example__scale-after");
  }
});

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
