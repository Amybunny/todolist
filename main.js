let button = document.getElementById('button');
let contents = document.getElementById('contents');
let key;

let list = [];
let i = 0;
let keys = Object.keys(localStorage);

keys.forEach(element=>{
  key = element;
  Number(key);
  list[key] = localStorage.getItem(key);
})

for(i in list){
  let data = localStorage.getItem(i);
  let li = document.createElement('li');
  let span = document.createElement('span');
  let removeBtn = document.createElement('i');
  span.textContent = i;
  li.textContent = data;
  contents.appendChild(li);
  li.appendChild(span);
  li.appendChild(removeBtn);
  removeBtn.classList.add('fa');
  removeBtn.classList.add('fa-trash-alt');
  removeBtn.addEventListener('click',function(){
    const targetTask = removeBtn.closest('li');
    const targetKey = removeBtn.previousElementSibling.textContent;
    targetTask.remove();
    localStorage.removeItem(targetKey);
  })
}

i++;

button.addEventListener('click',function(){
  let mydata = document.getElementById('mydata');
  localStorage.setItem(i,mydata.value);

  let li = document.createElement('li');
  let span = document.createElement('span');
  let removeBtn = document.createElement('i');
  span.textContent = i;
  li.textContent = mydata.value;
  contents.appendChild(li);
  li.appendChild(span);
  li.appendChild(removeBtn);
  removeBtn.classList.add('fa');
  removeBtn.classList.add('fa-trash-alt');
  mydata.value = '';
  i++;

  removeBtn.addEventListener('click',function(){
    const targetTask = removeBtn.closest('li');
    const targetKey = removeBtn.previousElementSibling.textContent;
    targetTask.remove();
    localStorage.removeItem(targetKey);
  })
});