let namestabtn = document.querySelector('button');
namestabtn.addEventListener('click',showMsg);

function showMsg(){
   let name = prompt('enter a name of student');
   namestabtn.textContent = 'Roll No.1:' + name;

}
