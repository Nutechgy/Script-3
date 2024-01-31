function generatePassword() {
    const length = document.getElementById('password-length').value;
    const includeLowercase = document.getElementById('include-lowercase').checked;
    const includeUppercase = document.getElementById('include-uppercase').checked;
    const includeNumeric = document.getElementById('include-numeric').checked;
    const includeSpecial = document.getElementById('include-special').checked;

    if (length < 8 || length > 128) {
        alert('Please choose a password length between 8 and 128 characters.');
        return;
    }

    if (!(includeLowercase || includeUppercase || includeNumeric || includeSpecial)) {
        alert('Please select at least one character type.');
        return;
    }

    const lowercaseChars = 'abcdefghijklmnopqrstuvwxyz';
    const uppercaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const numericChars = '0123456789';
    const specialChars = '!@#$%^&*()_-+=<>?/{}';

    let allChars = '';
    if (includeLowercase) allChars += lowercaseChars;
    if (includeUppercase) allChars += uppercaseChars;
    if (includeNumeric) allChars += numericChars;
    if (includeSpecial) allChars += specialChars;

    let password = '';
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * allChars.length);
        password += allChars.charAt(randomIndex);
    }

    document.getElementById('password-display').innerText = 'Your Password: ' + password;
}
