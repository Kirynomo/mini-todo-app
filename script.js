const todoList = [{
  name: 'make dinner',
  dueDate: '2025-09-12'
}, { 
  name: 'wash dishes',
  dueDate: '2025-09-12'
}, {
  name: 'learn javascript',
  dueDate: '2025-09-12'
}];
// The below function call puts existing things in our todo list on the page when reloaded
renderTodoList();

/*
This function creates and displays a todo list on a webpage.
It starts with an empty HTML string, then loops through each todo item in the todoList array. For each todo, it extracts the name and due date using destructuring, then creates HTML showing the todo name, due date, and a delete button. The delete button uses splice() to remove that specific todo from the array and calls renderTodoList() again to refresh the display. Finally, it combines all the individual todo HTML pieces into one complete HTML string that represents the entire todo list ready to be displayed on the webpage.
*/
function renderTodoList() {
  let todoListHTML = '';

  todoList.forEach((todoObject, index) => {
    const { name,dueDate } = todoObject;
    const html = `
      <div>${name}</div>
      <div>${dueDate}</div>
      <button
      //onclick attribute removed, used addEventListener instead below
          class="delete-button js-delete-todo-button">
          Delete
        </button>
    `;
    todoListHTML += html;
  });
  document.querySelector('.js-todo-list').innerHTML = todoListHTML;

  document.querySelectorAll('.js-delete-todo-button').forEach((deleteButton, index) => {
      deleteButton.addEventListener('click', () => {
        todoList.splice(index, 1);
        renderTodoList();
      });
  });

  /*
  for(let i = 0; i < todoList.length; i++) {
    const todoObject = todoList[i];
    // const name = todoObject.name;
    // const dueDate = todoObject.dueDate; 
    const { name,dueDate } = todoObject;
    const todo = todoList[i];
    const html = `
      <div>${name}</div>
      <div>${dueDate}</div>
      <button onclick="
          todoList.splice(${i}, 1);
          renderTodoList();
        "
        class="delete-button"
        >Delete</button>
    `;
    todoListHTML += html;
  }
  console.log(todoListHTML);
  */
}

document.querySelector('.js-add-todo-button').addEventListener('click', () => {
  addTodo();
});

function addTodo() {
  const inputElement = document.querySelector('.js-name-input');

  const name = inputElement.value;

  const dateInputElement = document.querySelector('.js-due-date-input');
  const dueDate = dateInputElement.value;
  
  todoList.push({
    // name: name,      can be written as just name (shorthand property)
    // dueDate: dueDate
    name,
    dueDate
  });
  console.log(todoList);

  inputElement.value = '';

  renderTodoList();
}



