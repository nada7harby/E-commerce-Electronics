var mins = document.getElementById("mins");
var Quantity = document.getElementById("count");
var plus = document.getElementById("plus");
var counter = 0;

mins.addEventListener("click", function () {
  if (counter > 0) {
    counter -= 1;
  }
  Quantity.textContent = counter; // Use textContent instead of innerHTML
});

plus.addEventListener("click", () => {
  counter += 1;
  Quantity.textContent = counter; // Use textContent instead of innerHTML
});
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
