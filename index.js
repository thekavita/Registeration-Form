
let firstNameValid = document.getElementById("firstNameValid")
let firstNameInvalid = document.getElementById("firstNameInvalid")
let lastNameValid = document.getElementById("lastNameValid")
let lastNameInvalid = document.getElementById("lastNameInvalid")
let emailValid = document.getElementById("emailValid")
let emailInvalid = document.getElementById("emailInvalid")
let phoneNumberValid = document.getElementById("phoneNumberValid")
let phoneNumberInvalid = document.getElementById("phoneNumberInvalid")

function validate() {
  let firstName = document.getElementById("firstName").value;
  let lastName = document.getElementById("lastName").value;
  let email = document.getElementById("email").value;
  let phoneNumber = document.getElementById("phoneNumber").value;

  if (firstName === '') {
    firstNameInvalid.style.display = 'block'
    firstNameValid.style.display = 'none'
  } else {
    firstNameValid.style.display = 'block'
    firstNameInvalid.style.display = 'none'
  }

  if (lastName === '') {
    lastNameInvalid.style.display = 'block'
    lastNameValid.style.display = 'none'
  } else {
    lastNameValid.style.display = 'block'
    lastNameInvalid.style.display = 'none'
  }

  if (email === '' || !email.includes('@') || !email.includes('.')|| email.startsWith('@') || email.slice(email.lastIndexOf('.') +1).length < 2) {
    emailInvalid.style.display = 'block'
    emailValid.style.display = 'none'
  } else {
    emailValid.style.display = 'block'
    emailInvalid.style.display = 'none'
  }

  if (phoneNumber === '' || !phoneNumber.match(/^[6-9]\d{9}$/g)) {
    phoneNumberInvalid.style.display = 'block'
    phoneNumberValid.style.display = 'none'
  } else {
    phoneNumberValid.style.display = 'block'
    phoneNumberInvalid.style.display = 'none'
  }
}

