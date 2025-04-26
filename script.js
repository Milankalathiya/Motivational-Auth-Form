// Dark Mode Toggle
document.addEventListener('DOMContentLoaded', function() {
  const toggle = document.getElementById('darkModeToggle');
  toggle.addEventListener('change', function() {
    document.body.classList.toggle('dark-mode');
  });
});

// Quotes Array
const quotes = [
  "Believe you can and you're halfway there.",
  "Dream big. Work hard. Stay focused.",
  "Don't watch the clock; do what it does. Keep going.",
  "Success doesn't just find you. You have to go out and get it.",
  "The harder you work for something, the greater you’ll feel when you achieve it.",
  "Don’t limit your challenges, challenge your limits.",
  "Great things never come from comfort zones."
];

// Show Random Quote
function showRandomQuote() {
  const quoteText = document.getElementById('quoteText');
  if (!quoteText) return; // In case no quote container (safety)

  const randomIndex = Math.floor(Math.random() * quotes.length);
  quoteText.innerText = quotes[randomIndex];
}

// Change quote every 5 seconds
setInterval(showRandomQuote, 5000);

// Show first quote immediately on load
document.addEventListener('DOMContentLoaded', showRandomQuote);


// Validate Login
function validateLogin() {
  let username = document.getElementById('loginUsername').value.trim();
  let password = document.getElementById('loginPassword').value.trim();
  let isValid = true;

  document.getElementById('loginUsernameError').innerText = "";
  document.getElementById('loginPasswordError').innerText = "";

  if (username === "") {
    document.getElementById('loginUsernameError').innerText = "Username is required.";
    isValid = false;
  }

  if (password === "") {
    document.getElementById('loginPasswordError').innerText = "Password is required.";
    isValid = false;
  }

  if (isValid) {
    alert("Login Successful! Welcome " + username);
  }
  return isValid;
}

// Validate Register
function validateRegister() {
  let name = document.getElementById('regName').value.trim();
  let email = document.getElementById('regEmail').value.trim();
  let phone = document.getElementById('regPhone').value.trim();
  let country = document.getElementById('regCountry').value;
  let terms = document.getElementById('terms').checked;
  let isValid = true;

  document.getElementById('regNameError').innerText = "";
  document.getElementById('regEmailError').innerText = "";
  document.getElementById('regPhoneError').innerText = "";
  document.getElementById('regCountryError').innerText = "";
  document.getElementById('regTermsError').innerText = "";

  if (name === "") {
    document.getElementById('regNameError').innerText = "Name is required.";
    isValid = false;
  }

  if (email === "") {
    document.getElementById('regEmailError').innerText = "Email is required.";
    isValid = false;
  } else if (!email.includes("@") || !email.includes(".")) {
    document.getElementById('regEmailError').innerText = "Enter a valid email.";
    isValid = false;
  }

  if (phone === "") {
    document.getElementById('regPhoneError').innerText = "Phone is required.";
    isValid = false;
  } else if (phone.length < 10) {
    document.getElementById('regPhoneError').innerText = "Enter a valid phone number.";
    isValid = false;
  }

  if (country === "") {
    document.getElementById('regCountryError').innerText = "Select a country.";
    isValid = false;
  }

  if (!terms) {
    document.getElementById('regTermsError').innerText = "You must agree to the terms.";
    isValid = false;
  }

  if (isValid) {
    alert("Registration Successful! Welcome " + name);
  }
  return isValid;
}
