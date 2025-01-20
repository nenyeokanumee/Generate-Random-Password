const passwordBox = document.getElementById("password");
const copyResult = document.getElementById("copyResult");
const length = 10;

const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const number = "0123456789";
const symbols = "~!@#$%^&*(){}[]|<>/?";

const allChars = upperCase + lowerCase + number + symbols;

function createPassword(){
    let password = "";
    //Below if you want to specify the order of the password
    // password += upperCase[Math.floor(Math.random() * upperCase.length)]; 
    // password += lowerCase[Math.floor(Math.random() * lowerCase.length)]; 
    // password += number[Math.floor(Math.random() * number.length)]; 
    // password += symbols[Math.floor(Math.random() * symbols.length)]; 

    while(length > password.length){
        password += allChars[Math.floor(Math.random() * allChars.length)];
    }
    passwordBox.value = password;
}

function copyToClipboard(text) {
    text.select();
    document.execCommand("copy");
    copyResult.innerHTML = "Copied to clipboard!";
    copyResult.style.display = "block";
    setTimeout(KillCopyReport, 2000);
}


function KillCopyReport(){
    copyResult.style.display = "none";
}


document.getElementById("copyButton").addEventListener("click", () => {
    copyToClipboard(password);
});

// function copyToClipboard(text) {
//     if (navigator.clipboard) {
//         return navigator.clipboard.writeText(text)
//             .then(() => {
//                 // Action to show success, like updating UI
//                 copyResult.innerHTML = "Copied to clipboard!";
//                 copyResult.style.display = "block";
//                 setTimeout(() => {
//                     copyResult.style.display = "none";
//                 }, 3000);
//             })
//             .catch(() => {
//                 // Handle errors silently or inform the user
//                 alert("Failed to copy text. Please try again.");
//             });
//     } else {
//         // Fallback for older browsers
//         text.select();
//         try {
//             document.execCommand("copy");
//             copyResult.innerHTML = "Copied to clipboard!";
//             copyResult.style.display = "block";
//             setTimeout(() => {
//                     copyResult.style.display = "none";
//                 }, 2000);
//         } catch {
//             copyResult.innerHTML = "Failed to copy."
//         }
//     }
// }