const btn = document.querySelector("button");
const password = document.querySelector("#password");
const confirmPassword = document.querySelector("#confirm_password");

btn.addEventListener('click', () => {
  if (password.value !== confirmPassword.value || password.value.trim() === "" || confirmPassword.value.trim() === "") {
    password.classList.add("invalid");
    confirmPassword.classList.add("invalid");
    console.log("Password is not matched!");
  } else {
    password.classList.remove("invalid");
    confirmPassword.classList.remove("invalid");
    console.log("Password Matched!");
  }
})