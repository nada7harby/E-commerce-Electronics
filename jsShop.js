var swiper = new Swiper(".mySwiper", {
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + (index + 1) + "</span>";
    },
  },
});

var tabs = document.querySelectorAll(".tabs li");
var tabAraay = Array.from(tabs);
var cont = document.querySelectorAll(".contents .cont");
var contAraay = Array.from(cont);

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

var parent_fav = document.querySelectorAll(".parant");
var parent_fav_array = Array.from(parent_fav);
var Remove_btn = document.querySelectorAll(".Remove");
var Remove_btn_array = Array.from(Remove_btn);

Remove_btn_array.forEach((btn) => {
  btn.addEventListener("click", () => {
    // console.log(Remove_btn_array.indexOf(btn));
    parent_fav_array[Remove_btn_array.indexOf(btn)].remove();
  });
});

var price_cart_product = document.querySelectorAll(".price_cart_pr");
var array_price_product = Array.from(price_cart_product);
var Total_price = document.getElementById("Total-price");
var total = 0;
// array_price_product.forEach((ele) => {
//   ele = parseInt(array_price_product[i].innerText);
//   total += ele;
// });
for (var i = 0; i < array_price_product.length; i++) {
  console.log(array_price_product[i].innerText);
  ele = parseInt(array_price_product[i].innerText);
  total += ele;
}
Total_price.innerText = total;
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
