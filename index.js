
const numberAndEmailField = document.querySelector(".number-email");

const numberAndEmailLabel = document.querySelector(".number-email-label");

const passwordField = document.querySelector(".password");

const passwordLabel = document.querySelector(".password-label");

const rememberMeButton = document.querySelector(".remember");

const forgotButton = document.querySelector(".forgot");

const loginButton = document.querySelector(".login");

// Custom Messages for Empty Fields:

loginButton.disabled = true;


loginButton.addEventListener("click", (event) => {
    if(numberAndEmailField.value == ""){
        numberAndEmailLabel.style.color = "#dc2f02";
        numberAndEmailField.style.borderColor = "#dc2f02";
        event.preventDefault();
    }else{
        numberAndEmailLabel.style.color = "grey";
        numberAndEmailField.style.borderColor = "grey";
        // buttonAnimation();        
    }
    if(passwordField.value == ""){
        passwordField.style.borderColor = "#dc2f02";
        passwordLabel.style.color = "#dc2f02";
        event.preventDefault();
    }else{
        passwordField.style.borderColor = "grey";
        passwordLabel.style.color = "grey";
        // buttonAnimation();
    }
})

// const buttonAnimation = () => {
// loginButton.addEventListener("mouseenter", () => {
//     loginButton.style.boxShadow = "3px 3px 5px rgba(0, 0, 0, 0.4)";
//     // loginButton.style.background = "linear-gradient(45deg, rgba(164, 80, 139, 0.9) 0%, rgba(95,10,135,0.9) 90%)";
// });

// loginButton.addEventListener("mouseleave", () => {
//     loginButton.style.boxShadow = "none";
//     // loginButton.style.background = "initial"; // Or set it back to its original value
// });

// loginButton.addEventListener("mousedown", () => {
//     loginButton.style.transform = "scale(0.95)";
// });

// loginButton.addEventListener("mouseup", () => {
//     loginButton.style.transform = "scale(1)";
// });
// }

// Form Validation

// a. Email Check


const svgNamespace = "http://www.w3.org/2000/svg";
const check = document.createElementNS(svgNamespace, "svg");
check.setAttribute("xmlns", svgNamespace);
check.setAttribute("width", "16");
check.setAttribute("height", "16");
check.setAttribute("fill", "#2b9348");
check.setAttribute("class", "check-circle-fill");
check.setAttribute("viewBox", "0 0 16 16");

const path = document.createElementNS(svgNamespace, "path");
path.setAttribute("d", "M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z");

check.appendChild(path);

const inputBox = document.querySelector(".input-box");

inputBox.appendChild(check);

check.style.display = "none";

numberAndEmailField.addEventListener("input", (e) => {
    console.log(e.target);
    if (numberAndEmailField.value.includes("@") && numberAndEmailField.value.includes(".com")) {
        check.style.display = "block";
        loginButton.disabled = false;
        // buttonAnimation();
    }else{
        check.style.display = "none";
        loginButton.disabled = true;
    }
})

// b. Password Check

const upperCaseAlpha = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L',
    'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

const lowerCaseAlpha = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l',
    'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];


const numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
  
const specialCharacters = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '-', '_',
    '=', '+', '[', ']', '{', '', ';', ':', '"', "'", '<', '>', ',', '.', '/', '?','|',
    '\\', '`', '~'];

// const randomPassword = [...lowerCaseAlpha,...upperCaseAlpha,...specialCharacters,...numbers];

passwordField.addEventListener("input", (e) => {
        
        console.log(passwordField.value)


        if (passwordField.value.length > 0){
            let hasUpperCase = false;
            let hasLowerCase = false;
            let hasNumber = false;
            let hasSpecialCharacter = false;
        
            for (let i = 0; i < passwordField.value.length; i++) {
                if(upperCaseAlpha.includes(passwordField.value[i])){
                    hasUpperCase = true;
                }
                else if(lowerCaseAlpha.includes(passwordField.value[i])){
                    hasLowerCase = true;
                }
                else if (numbers.includes(passwordField.value[i])) {
                    hasNumber = true;
                } 
                else if (specialCharacters.includes(passwordField.value[i])) {
                    hasSpecialCharacter = true;
                }
                
            }
            
            const message = document.querySelector(".message");

            if (!hasUpperCase) {
                message.innerHTML = `You should add an uppercase letter.`
            }

            else if (!hasLowerCase) {
                message.innerHTML = `You should add an lowercase letter.`
            }

            else if (!hasNumber) {
                message.innerHTML = `You should add an number letter.`
            }

            else if (!hasSpecialCharacter) {
                message.innerHTML = `You should add an special character letter.`
            }
            else{
                message.innerHTML = ``
            }
    }
})


// Toggle Password Visibility:

const openEye = document.querySelector(".open-eye");
const password = document.querySelector(".password");

openEye.addEventListener("click", () => {
    if (password.type == "password") {
        password.type = "text";
        openEye.innerHTML = `<path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8M1.173 8a13 13 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5s3.879 1.168 5.168 2.457A13 13 0 0 1 14.828 8q-.086.13-.195.288c-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5s-3.879-1.168-5.168-2.457A13 13 0 0 1 1.172 8z"/>
  <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5M4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0"/>`
    } else{
        password.type = "password";
        openEye.innerHTML = `<path d="M13.359 11.238C15.06 9.72 16 8 16 8s-3-5.5-8-5.5a7 7 0 0 0-2.79.588l.77.771A6 6 0 0 1 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13 13 0 0 1 14.828 8q-.086.13-.195.288c-.335.48-.83 1.12-1.465 1.755q-.247.248-.517.486z"/>
  <path d="M11.297 9.176a3.5 3.5 0 0 0-4.474-4.474l.823.823a2.5 2.5 0 0 1 2.829 2.829zm-2.943 1.299.822.822a3.5 3.5 0 0 1-4.474-4.474l.823.823a2.5 2.5 0 0 0 2.829 2.829"/>
  <path d="M3.35 5.47q-.27.24-.518.487A13 13 0 0 0 1.172 8l.195.288c.335.48.83 1.12 1.465 1.755C4.121 11.332 5.881 12.5 8 12.5c.716 0 1.39-.133 2.02-.36l.77.772A7 7 0 0 1 8 13.5C3 13.5 0 8 0 8s.939-1.721 2.641-3.238l.708.709zm10.296 8.884-12-12 .708-.708 12 12z"/>`    }
})

// 

// Dark Mode

const modeChangeButton = document.querySelector(".modeChange");

const navigationColor = document.querySelector(".navigation-bar");
const bodyColor = document.querySelector("body");

let mode = "light";

modeChangeButton.addEventListener("click", () => {
    if (mode == "light") {
        mode = "dark";
        modeChangeButton.style.transform = 'rotate(0deg)';

        modeChangeButton.innerHTML =`<path
        d="M12 8a4 4 0 1 1-8 0 4 4 0 0 1 8 0M8.5 2.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0m0 11a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0m5-5a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1m-11 0a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1m9.743-4.036a.5.5 0 1 1-.707-.707.5.5 0 0 1 .707.707m-7.779 7.779a.5.5 0 1 1-.707-.707.5.5 0 0 1 .707.707m7.072 0a.5.5 0 1 1 .707-.707.5.5 0 0 1-.707.707M3.757 4.464a.5.5 0 1 1 .707-.707.5.5 0 0 1-.707.707"
    />`

        navigationColor.style.backgroundColor = "#212529";
        navigationColor.style.color = "#f8f9fa";

        bodyColor.style.backgroundColor = "#343a40";
        
    } else{
        mode = "light";
    modeChangeButton.style.transform = 'rotate(360deg)';

        modeChangeButton.innerHTML = `<path d="M12 8a4 4 0 1 1-8 0 4 4 0 0 1 8 0M8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0m0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13m8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5M3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8m10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0m-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0m9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707M4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708"/>`

        navigationColor.style.backgroundColor = "#6c757d";
        navigationColor.style.color = "black";

        bodyColor.style.backgroundColor = "#f8f9fa";
        navigationColor.style.color = "#212529";
    }
})


