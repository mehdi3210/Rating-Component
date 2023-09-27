const rating = document.querySelectorAll(".rate");
const countainer = document.querySelector(".countainer");
const submitBtn = document.querySelector(".submitBtn");

rating.onclick = () => {
  rate = document.querySelectorAll(".rate").value;
  rate = Number(rate);
  console.log(rate);
};
