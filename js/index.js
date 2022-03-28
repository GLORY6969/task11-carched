let signin = document.getElementById("btn");
let fristform = document.getElementById("frist-form");
let scndform = document.getElementById("scnd-form");
let thirdform = document.getElementById("third-form");
let fourthform = document.getElementById("fourth-form");
let next1 = document.getElementById("next");
let prev1 = document.getElementById("prev-1");
let next2 = document.getElementById("submit");
let prev2 = document.getElementById("prev-2");
signin.addEventListener("click", function () {
  fristform.style.display = "none";
  scndform.style.display = "block";
});
next1.addEventListener("click", function () {
  scndform.style.display = "none";
  thirdform.style.display = "block";
});
prev1.addEventListener("click", function () {
  scndform.style.display = "none";
  fristform.style.display = "block";
});
next1.addEventListener("click", function () {
  scndform.style.display = "none";
  thirdform.style.display = "block";
});
prev1.addEventListener("click", function () {
  scndform.style.display = "none";
  fristform.style.display = "block";
});
next2.addEventListener("click", function () {
  thirdform.style.display = "none";
  fourthform.style.display = "block";
});
prev2.addEventListener("click", function () {
  scndform.style.display = "block";
  thirdform.style.display = "none";
});
