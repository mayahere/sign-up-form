const form = document.getElementById('signup-form');

const btn = document.querySelector("button");
const password = document.querySelector("#password");
const confirmPassword = document.querySelector("#confirm_password");

btn.addEventListener('click', (e) => {
  e.preventDefault();

  if (password.value !== confirmPassword.value || password.value.trim() === "" || confirmPassword.value.trim() === "") {
    password.classList.add("invalid");
    confirmPassword.classList.add("invalid");
    console.log("Password is not matched!");
  } else {
    password.classList.remove("invalid");
    confirmPassword.classList.remove("invalid");
    console.log("Password Matched!");

    const formData = new FormData(form);
    const data = Object.fromEntries(formData);
    console.log('Form submitted:', data);

    alert('Account created successfully!');
    form.reset();
  }
})