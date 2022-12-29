const myform = document.querySelector('#my-form');

myform.addEventListener('submit',addUser);

function addUser(e){
  e.preventDefault();
  const name = e.target.name.value;
  const email = e.target.email.value;
  // localStorage.setItem('name',name);
  // localStorage.setItem('email',email); 
  const userDetails = {
    name:name,
    email : email
  }
  //serialized the object and convert it into string
  const userDetails_serialized = JSON.stringify(userDetails);
  localStorage.setItem('userDetails',userDetails_serialized);
  //deserializing
  console.log(JSON.parse(localStorage.getItem('userDetails')));
}