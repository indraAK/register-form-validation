const form = document.getElementById('form');
const agree = document.getElementById('agree');

form.addEventListener('submit', (e) => {
   e.preventDefault();

   // get form elements
   const name = form['name'];
   const email = form['email'];
   const password = form['password'];
   const password2 = form['confirm-password'];
   const agree = form['agree'];

   // get input values
   const nameValue = name.value;
   const emailValue = email.value;
   const passwordValue = password.value;
   const password2Value = password2.value;

   // cek name
   if (nameValue.trim() === '') {
      showErrorFor(name, 'Full name cannot be empty');
   } else {
      setValidFor(name);
   }

   // cek email
   if (emailValue.trim() === '') {
      showErrorFor(email, 'Email cannot be empty');
   } else if (!isValidEmail(emailValue)) {
      showErrorFor(email, 'Email is not valid');
   } else {
      setValidFor(email);
   }

   // cek password
   if (passwordValue.trim() === '') {
      showErrorFor(password, 'Password cannot be empty');
   } else if (passwordValue.length < 5) {
      showErrorFor(password, 'Password min 5 characters');
   } else {
      setValidFor(password);
   }

   // cek confirm password
   if (password2Value.trim() === '') {
      showErrorFor(password2, 'Confirm password cannot be empty');
   } else if (password2Value !== passwordValue) {
      showErrorFor(password2, 'Confirm password do not match');
   } else {
      setValidFor(password2);
   }

   // cek agree
   if (!agree.checked) {
      showErrorFor(agree, 'You must agree before submitting.');
   }
});

agree.addEventListener('change', (e) => {
   if (e.target.checked) {
      setValidFor(agree);
   }
});

// show error
function showErrorFor(field, message) {
   if (field.classList.contains('form__input')) {
      field.className = 'form__input invalid';
   }

   const smallElement = field.parentElement.lastElementChild;
   smallElement.innerText = message;
}

// set valid
function setValidFor(field) {
   if (field.classList.contains('form__input')) {
      field.className = 'form__input valid';
   }

   const smallElement = field.parentElement.lastElementChild;
   smallElement.innerText = '';
}

// cek email valid
function isValidEmail(email) {
   const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
   return re.test(String(email).toLowerCase());
}