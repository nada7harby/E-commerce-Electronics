var btn_select = document.getElementById("select");
var options_select = document.getElementById("options");
var banner = document.getElementById("banner");
var tabs = document.querySelectorAll(".tabs li");
var tabAraay = Array.from(tabs);
var cont = document.querySelectorAll(".contents .cont");
var contAraay = Array.from(cont);

btn_select.addEventListener("click", () => {
  options_select.style.display = "block";
});

tabAraay.forEach((ele) => {
  ele.addEventListener("click", function (e) {
    tabAraay.forEach((tab) => {
      tab.classList.remove("active");
    });
    contAraay.forEach((con) => {
      con.style.display = "none";
    });
    ele.classList.add("active");
    var a = document.querySelector(e.currentTarget.dataset.cont);
    a.style.display = "block";
    // console.log(e.currentTarget.dataset.cont);
  });
});
var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

let sections = document.querySelectorAll("section");
window.onscroll = () => {
  sections.forEach((sec) => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 400;
    let height = sec.offsetHeight;
    if (top >= offset && top < offset + height) {
      sec.classList.add("show");
    }
    //     else {
    //       sec.classList.remove("show");
    //     }
  });
};
var cart = document.getElementById("cart");
var car_btn_show = document.getElementById("car-btn-show");
var car_btn2_show = document.getElementById("car-btn2-show");
var close_cart = document.getElementById("close-cart");
car_btn_show.addEventListener("click", () => {
  cart.classList.add("showed");
});
car_btn2_show.addEventListener("click", () => {
  cart.classList.add("showed");
});
close_cart.addEventListener("click", () => {
  cart.classList.remove("showed");
});
