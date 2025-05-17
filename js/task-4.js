
const form = document.querySelector('.login-form');

form.addEventListener('submit', onSubmit);

function onSubmit(evt) {
  evt.preventDefault();                   
  const { elements } = evt.target;        

  const email = elements.email.value.trim();
  const password = elements.password.value.trim();

  if (!email || !password) {
    alert('All form fields must be filled in'); 
    return;
  }

  
  const formData = {
    email,
    password,
  };

  console.log(formData);                  
  evt.target.reset();                     
}
