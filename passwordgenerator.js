// make a programme capable of generating a password which contains at least one lowercase one uppercase and one special characters create a password class to achieve the same
// class password{
//     constructor(){
//         console.log("welcome")
//         this.pass=""
//     }
//     generatePassword(len){
//      let chars = "abcdefghijklmnopqrstuvwxyz"
//      let caps = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
//      let numbers="1234567890"
//      let specialChars = "!@#$%^&*()_+"
//         if(len<3){
//             "password should be atleast 8 characters"
//         }
//         else{
//             let i=0;
//             while(i<len){
//                 this.pass +=chars[Math.floor(Math.random()*chars.length)]
//                 this.pass +=caps[Math.floor(Math.random()*chars.length)]
//                 this.pass +=numbers[Math.floor(Math.random()*chars.length)]
//                 this.pass +=specialChars[Math.floor(Math.random()*chars.length)]
//                 i+=4;
//             }
//             this.pass =this.pass.substr(0,len);
//             return this.pass;
//         }
//     }
// }
// let p = new password();
// console.log(p.generatePassword(5));
function generatePassword() {
    let len = document.getElementById('pass-length').value;
    let useUppercase = document.getElementById('uppercase').checked;
    let useLowercase = document.getElementById('lowercase').checked;
    let useNumbers = document.getElementById('numbers').checked;
    let useSymbols = document.getElementById('symbols').checked;
    let customSymbols = document.getElementById('custom-symbols').value || "!@#$%^&*()_+";

    let chars ='';
    let password ='';
    if (useUppercase) chars +='ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    if (useLowercase) chars +='abcdefghijklmnopqrstuvwxyz'
    if (useNumbers) chars += '0123456789';
    if (useSymbols) chars += '!@#$%^&*()_+';

    if (chars.length ===0){
        document.getElementById('pass-display').value ='please select character sets';
        return;
    }

    for (let i=0; i<len;i++){
        password += chars[Math.floor(Math.random() * chars.length)];
    }
    document.getElementById('pass-display').value =password;
}
function updateLengthDisplay() {
    document.getElementById('len-display').innerText = document.getElementById('pass-length').value;
}
function copyToClipboard(){
    const password = document.getElementById('pass-display');
    password.select();
    document.execCommand('copy');
    alert('password copied.!')
}