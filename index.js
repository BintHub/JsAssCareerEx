
// assign new employee and modal popup
document.querySelector('.press .btn1').addEventListener('click', function(){
    document.querySelector('.main-modal').style.display ='flex';
})
document.querySelector('.custom').addEventListener('click', function(){
  document.querySelector('.main-modal').style.display ='none';
})

// let delExit = document.querySelector('.exit');
// delExit.addEventListener('click',(e)=> {
//   if((e.target.className).includes('custom')){
//     assignModal()
//     }
//   })
// function assignModal(){
// let modal = document.querySelector('.modal');
// modal.style.display = 'none';
// }

//serach
let searchInput = document.querySelector('.form-group input');

let allTasks = document.querySelectorAll('.info .info-table');
console.log(allTasks.textContent)

// searchInput.addEventListener('keyup',(e)=> {
//   let lowerInputText = String(searchInput.value).toLowerCase();

//   allTasks.forEach(tr=> {
//    let  lowerTasksText = String(tr.firstElementChild.textContent).toLowerCase() 
//       if(lowerTasksText.includes(lowerInputText)) {
//         tr.style.display = 'flex';
//       }else{
//         tr.style.display = 'none';
//       }
//   })
// })

//to add employee
document.querySelector('.press1 #addEmployee').addEventListener('click', function(){
  document.querySelector('.main-modal').style.display ='flex';
})

// let form =document.getElementById('userForm'),
// name = document.getElementById('name'),
// employeeid = document.getElementById('emp'),
// role = document.getElementById('rol'),
// status = document.getElementById('status'),
// teams = document.getElementById('teams'),
// submitbtn = document.getElementById('sbtn'),
// userdata = document.getElementById('datta');

// let isData = false,editid

// function showInfo(){
//   getData.forEach((element,index) => {
//     let createElement =`<tr class="employeeDetails">
//     <td>${index+1}</td>
//     <td>${element.name}</td>
//     <td>${element.employeeid}</td>
//     <td>${element.role}</td>
//     <td>${element.status}</td>
//     <td>${element.teams}</td>
//     </tr>`
//   })
// }
// form.addEventListener('submit',(e)=>{
//   e.preventDefault()
// const information = {
//   employeeName: name.value,
//   employeeId: emp.value,
//   employeeRole: role.value,
//   employeeStatus: staus.value,
//   employeeTeams: teams.value,
// }
// if(!isEdit){
//   getData.push(information)
// }else{
//   isEdit = false
//   getData[editid]=information
// }
// submitbtn.innerText ='submit'
// showInfo()
// form.reset()
// })
let addTaskForm = document.querySelector('.sbtn');
let addTaskInput = addTaskForm.firstElementChild;
let valueCount = 8;

addTaskForm.addEventListener('click',(e)=> {
  e.preventDefault();
  // create element
  let td = document.createElement('name');
  let td1 = document.createElement('employeeid');
  let td2 = document.createElement('role');
  let td3 = document.createElement('staus');
  let td4 = document.createElement('teams');
  
  // add text
  td.textContent = addTaskInput.value;
  td1.textContent = addTaskInput.value;
  td2.textContent = addTaskInput.value;
  td3.textContent = addTaskInput.value;
  td4.textContent = addTaskInput.value;


  // rearragne
  td.append(td);
  td1.append(td1);
  td2.append(td2);
  td3.append(td3);
  td4.append(td4);
 
   if(String(addTaskInput.value).length > 2) {
     // add to dom
     sbtn.append(td);
     // reset form
     addTaskForm.reset();}
})

