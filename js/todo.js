// 1. (v)할일 입력 - text가 있으면 todoList에 추가, 비었으면 alert
// 2. (v)할일 보이기 - 추가되면 바로 보이게하기, todo마다 delete버튼
// 3. (v)할일 삭제 - todo마다 존재하는 delete 버튼 누르면 바로 삭제
const todoForm = document.querySelector(".js-todoForm");
const todoInput = todoForm.querySelector("input");
const todoList = document.querySelector(".js-todoList");

const deleteTodo = (todo) => {
  let todos = JSON.parse(localStorage.getItem("todoList"));
  let newTodos = todos.filter((t) => t !== todo);
  localStorage.setItem("todoList", JSON.stringify(newTodos));
  loadTodo();
};

const handleDeleteClick = (e) => {
  const p = e.target.parentElement;
  const todoText = p.innerText;

  todoList.innerHTML = "";
  deleteTodo(todoText.slice(0, todoText.length - 2));
};

const showTodos = (localTodo) => {
  if (localTodo !== null) {
    todoList.innerHTML = "";
    localTodo.forEach((todo) => {
      const p = document.createElement("p");
      const deleteButton = document.createElement("button");
      deleteButton.append("X");
      deleteButton.onclick = function (e) {
        handleDeleteClick(e);
      };
      p.append(todo, deleteButton);
      todoList.appendChild(p);
    });
  }
  // localTodo === null ? console.log("X") : console.log(localTodo);
};

const handleTodoSubmit = (e) => {
  e.preventDefault();
  let todos = JSON.parse(localStorage.getItem("todoList"));
  const value = todoInput.value;
  if (value === "") alert("할 일을 적어주세요!");
  else {
    todos === null ? (todos = [value]) : todos.push(value);
    localStorage.setItem("todoList", JSON.stringify(todos));
    loadTodo();
    todoInput.value = "";
  }
};

const loadTodo = () => {
  const localTodo = JSON.parse(localStorage.getItem("todoList"));
  showTodos(localTodo);
};

loadTodo();
todoForm.addEventListener("submit", handleTodoSubmit);
