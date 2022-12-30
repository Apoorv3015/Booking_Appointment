const myform = document.querySelector('#my-form');
const items = document.querySelector('#users');

myform.addEventListener('submit',addUser);
items.addEventListener('click',removeItem);
items.addEventListener('click',editItem);

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
  
  //if exists in the local storage then remove it from the screen's list
  if(localStorage.getItem(email) !== null){
    removeElement(email);
  }

  addElement(userDetails);

  e.target.name.value = "";
  e.target.email.value = "";
}

window.addEventListener('DOMContentLoaded',()=>{
  Object.keys(localStorage).forEach((key)=>{
    const obj =JSON.parse(localStorage.getItem(key));
    
    addElement(obj);
  });
});


function addElement(obj){
  const ul = document.querySelector('#users');
  const new_li = document.createElement('li');
  new_li.className = "item";
  new_li.id=obj.email;
  new_li.appendChild(document.createTextNode(`${obj.name} : ${obj.email}`));

  const deletebtn = document.createElement('button');
  deletebtn.className='btn-delete';
  deletebtn.appendChild(document.createTextNode('Delete'));
  //appendChild deletebtn to li
  new_li.appendChild(deletebtn);

  const editbtn = document.createElement('button');
  editbtn.className='btn-edit';
  editbtn.appendChild(document.createTextNode('Edit'));
  //appendChild deletebtn to li
  new_li.appendChild(editbtn);

  ul.appendChild(new_li);
}

function removeElement(email){
  const ul = document.querySelector('#users');
  const li = document.getElementById(email);
  if(li){
    ul.removeChild(li);
  }
}

function removeItem(e){
  if(e.target.className === 'btn-delete'){
      if(confirm("Are you sure?")){
          const li = e.target.parentElement;
          localStorage.removeItem(li.id);
          items.removeChild(li);
      }
  }
}

function editItem(e){
  if(e.target.className === 'btn-edit'){
      const li = e.target.parentElement;
      const obj = JSON.parse(localStorage.getItem(li.id));
      //populate the input field with current value
      const nameInput = document.querySelector('#name');
      nameInput.value = obj.name;
      const emailInput = document.querySelector('#email');
      emailInput.value = obj.email;

      //Delete from localStorage and remove from screen
      localStorage.removeItem(li.id);
      items.removeChild(li);
  }
}