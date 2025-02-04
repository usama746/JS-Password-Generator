const letters =
  "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()";

function uppercase() {
  const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let password = "";
  let passwordLength = +prompt("Enter the length of Password");

  if (passwordLength <= 0 || isNaN(passwordLength)) {
    alert("Invalid input! Please enter a positive number ");
  } else {
    for (let i = 0; i < passwordLength; i++) {
      password += letters.charAt(Math.floor(Math.random() * letters.length));
    }

    document.getElementById("password").innerText =
      "Generated Password: " + password;
  }
}

function lowercase() {
  const letters = "abcdefghijklmnopqrstuvwxyz";
  let password = "";
  let passwordLength = +prompt("Enter the length of Password");

  if (passwordLength <= 0 || isNaN(passwordLength)) {
    alert("Invalid input! Please enter a positive number ");
  } else {
    for (let i = 0; i < passwordLength; i++) {
      // password.push(String.fromCharCode(Math.floor(Math.random() * 26) + 97));
      password += letters.charAt(Math.floor(Math.random() * letters.length));
    }

    document.getElementById("password").innerText =
      "Generated Password: " + password;
  }
}

function numbers() {
  const letters = "0123456789!@#$%^&*()";
  let password = "";
  let passwordLength = +prompt("Enter the length of Password");

  if (passwordLength <= 0 || isNaN(passwordLength)) {
    alert("Invalid input! Please enter a positive number ");
  } else {
    for (let i = 0; i < passwordLength; i++) {
      // password.push(Math.floor(Math.random() * 10));
      password += letters.charAt(Math.floor(Math.random() * letters.length));
    }

    document.getElementById("password").innerText =
      "Generated Password: " + password;
  }
}

function mix() {
  const letters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()";
  let password = "";
  let passwordLength = +prompt("Enter the length of Password");

  if (passwordLength <= 0 || isNaN(passwordLength)) {
    alert("Invalid input! Please enter a positive number ");
  } else {
    for (let i = 0; i < passwordLength; i++) {
      // password.push(Math.floor(Math.random() * 10));
      password += letters.charAt(Math.floor(Math.random() * letters.length));
    }

    document.getElementById("password").innerText =
      "Generated Password: " + password;
  }
}
