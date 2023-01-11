"use strict";
const thongTincaNhanshowel = document.querySelector(".thongtincanhanshow");
const khungEmail = document.querySelector(".khungemail");
const emailDienvao = document.getElementById("exampleFormControlInput1");
thongTincaNhanshowel.classList.add("hide");
function checkEmail() {
  let email = document.getElementById("exampleFormControlInput1");
  let filter =
    /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
  if (!filter.test(email.value)) {
    alert("Hãy nhập địa chỉ email hợp lệ.\nExample@gmail.com");
    email.focus;
    return false;
  } else {
    thongTincaNhanshowel.classList.remove("hide");
    khungEmail.classList.add("hide");
  }
}

const listMore = document.querySelectorAll(".khungviewmore");
const listLess = document.querySelectorAll(".khungviewless");
const info = document.querySelectorAll(".noi-dung-ky-nang");
const hover = document.querySelectorAll(".job-kinh-nghiem");
for (let i = 0; i < listMore.length; i++) {
  listMore[i].addEventListener("click", function () {
    //click xem them
    info[i].classList.remove("hide"); //hien thong tin
    listMore[i].classList.add("hide"); // ẩn xem thêm
    listLess[i].classList.remove("hide"); //hiện view less
    hover[i].classList.add("hover");
  });
}
for (let j = 0; j < listLess.length; j++) {
  listLess[j].addEventListener("click", function () {
    //click xem them
    info[j].classList.add("hide"); //hien thong tin
    listMore[j].classList.remove("hide"); // ẩn xem thêm
    listLess[j].classList.add("hide"); //hiện view less
    hover[j].classList.remove("hover");
  });
}
