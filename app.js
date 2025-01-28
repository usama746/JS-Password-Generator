function uppercase() {
   let password = [];
   let passwordLength = +prompt("Enter the length of Password");

   if (passwordLength <= 0 || isNaN(passwordLength)) {
      alert("Invalid input! Please enter a positive number ");
   } else {
      for (let i = 0; i < passwordLength; i++) {
         password.push(
            String.fromCharCode(Math.floor(Math.random() * 26) + 65),
         );
      }
      alert("Generated Password: " + password.join(""));
   }
}

function lowercase() {
   let password = [];
   let passwordLength = +prompt("Enter the length of Password");

   if (passwordLength <= 0 || isNaN(passwordLength)) {
      alert("Invalid input! Please enter a positive number ");
   } else {
      for (let i = 0; i < passwordLength; i++) {
         password.push(
            String.fromCharCode(Math.floor(Math.random() * 26) + 97),
         );
      }
      alert("Generated Password: " + password.join(""));
   }
}

function numbers() {
   let password = [];
   let passwordLength = +prompt("Enter the length of Password");

   if (passwordLength <= 0 || isNaN(passwordLength)) {
      alert("Invalid input! Please enter a positive number ");
   } else {
      for (let i = 0; i < passwordLength; i++) {
         password.push(Math.floor(Math.random() * 10));
      }
      alert("Generated Password: " + password.join(""));
   }
}
