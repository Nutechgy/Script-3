function generatePassword() {
   function generatePassword() {
            const length = prompt("Enter the length of the password (between 8 and 128 characters):");
            if (length < 8 || length > 128 || isNaN(length)) {
                alert("Please enter a valid password length between 8 and 128 characters.");
                return;
            }

            const includeLowercase = confirm("Include lowercase characters?");
            const includeUppercase = confirm("Include uppercase characters?");
            const includeNumeric = confirm("Include numeric characters?");
            const includeSpecial = confirm("Include special characters?");

            if (!(includeLowercase || includeUppercase || includeNumeric || includeSpecial)) {
                alert("At least one character type should be selected.");
                return;
            }

            const password = generateRandomPassword(length, includeLowercase, includeUppercase, includeNumeric, includeSpecial);

            document.getElementById("password").innerText = "Generated Password: " + password;
        }

        function generateRandomPassword(length, includeLowercase, includeUppercase, includeNumeric, includeSpecial) {
            let charset = "";
            if (includeLowercase) charset += "abcdefghijklmnopqrstuvwxyz";
            if (includeUppercase) charset += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
            if (includeNumeric) charset += "0123456789";
            if (includeSpecial) charset += "!@#$%^&*()_+~`|}{[]:;?><,./-=";

            let password = "";
            for (let i = 0; i < length; i++) {
                const randomIndex = Math.floor(Math.random() * charset.length);
                password += charset.charAt(randomIndex);
            }

            return password; 
