const form = document.getElementById("registrationForm");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  let isValid = true;

  // Clear previous error messages
  document
    .querySelectorAll(".error-message")
    .forEach((el) => (el.textContent = ""));
  document
    .querySelectorAll("input")
    .forEach((el) => el.classList.remove("error"));

  const name = document.getElementById("name");
  const email = document.getElementById("email");
  const password = document.getElementById("password");
  const confirmPassword = document.getElementById("confirmPassword");

  // Name validation
  if (name.value.trim().length < 3) {
    isValid = false;
    name.classList.add("error");
    document.getElementById("nameError").textContent =
      "Name must be at least 3 characters long";
  }

  // Email validation
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email.value.trim())) {
    isValid = false;
    email.classList.add("error");
    document.getElementById("emailError").textContent = "Invalid email format";
  }

  // Password validation
  if (password.value.length < 6) {
    isValid = false;
    password.classList.add("error");
    document.getElementById("passwordError").textContent =
      "Password must be at least 6 characters long";
  }

  // Confirm password validation
  if (confirmPassword.value !== password.value) {
    isValid = false;
    confirmPassword.classList.add("error");
    document.getElementById("confirmPasswordError").textContent =
      "Passwords do not match";
  }

  if (isValid) {
    alert("Registration successful");
  }
});
