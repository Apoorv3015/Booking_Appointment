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
  localStorage.setItem(email,userDetails_serialized);
  //deserializing
  //console.log(JSON.parse(localStorage.getItem('userDetails')));

  addElement(userDetails);
}

Object.keys(localStorage).forEach((key)=>{
  const obj =JSON.parse(localStorage.getItem(key));

  addElement(obj);
});

function addElement(obj){
  const ul = document.querySelector('#users');
  const new_li = document.createElement('li');
  new_li.className = "item";
  new_li.appendChild(document.createTextNode(`${obj.name} : ${obj.email}`));
  ul.appendChild(new_li);
}