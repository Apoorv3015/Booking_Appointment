const myform = document.querySelector('#my-form');

myform.addEventListener('submit',addUser);

function addUser(e){
  e.preventDefault();
  const name = e.target.name.value;
  const email = e.target.email.value;
  localStorage.setItem('name',name);
  localStorage.setItem('email',email);  
}