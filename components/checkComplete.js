const checkComplete = (id)=>{

  const i = document.createElement('i');
  i.classList.add('far','fa-check-square','icon');
  i.addEventListener('click',(event)=> compleTask(event,id));
  return i;
}

const compleTask = (event,id)=>{
const element = event.target;
element.classList.toggle('fas');
element.classList.toggle('completeIcon');
element.classList.toggle('far');
console.log('check id',id);
const tasks = JSON.parse(localStorage.getItem('tasks'));
const index = tasks.findIndex((item)=>item.id ===id);
tasks[index]['complete'] = !tasks[index]['complete'];
localStorage.setItem('tasks',JSON.stringify(tasks));

}

export default checkComplete;