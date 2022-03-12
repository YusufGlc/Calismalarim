// Tüm elemntleri seçme
const form = document.querySelector("#todo-form");
const todoInput = document.querySelector("#todo");
const todoList = document.querySelector(".list-group");
const firstCardBody = document.querySelectorAll(".card-body")[0];
const secondCardBody = document.querySelectorAll(".card-body")[1];
const filter = document.querySelector("#filter");
const clearButton = document.querySelector("#clear-todos");

eventListeners();

function eventListeners() { // Tüm event listenerlar
    form.addEventListener("submit", addTodo);
    document.addEventListener("DOMContentLoaded",LoadAllTodosToUI);
    secondCardBody.addEventListener("click",deleteOrEditTodo);
    filter.addEventListener("keyup",filterTodos);
    clearButton.addEventListener("click",clearAllTodos);
}

function clearAllTodos() {
    
    if (confirm("Tümünü Silmek İstediğinize Emin misiniz ?")) {
        
        todoList.replaceChildren();
        localStorage.removeItem("todos");
    }

}

function filterTodos(e) {
    
    const filterValue = e.target.value.toLowerCase();
    const listItems = document.querySelectorAll(".list-group-item")

    listItems.forEach(function(listItem) {
        const text = listItem.textContent.toLowerCase()
        if (text.indexOf(filterValue) === -1) {
            
            listItem.setAttribute("style","display : none !important");

        }
        else {
            listItem.setAttribute("style","display : flex !important");
        } 
    })

}

function deleteOrEditTodo(e) {

    if (e.target.className === "fa-solid fa-pencil") {
        let newTodo = prompt("Yeni Todo ismi giriniz.")
        if (newTodo != null) {
            editTodoFromStorage(e.target.parentElement.parentElement.parentElement.textContent,newTodo);
            LoadAllTodosToUI();
        }

    }
    else if (e.target.className === "fa fa-remove") {

        if (confirm("Silmek İstediğinize Emin misiniz ?")) {
            e.target.parentElement.parentElement.parentElement.remove();
            deleteTodoFromStorage(e.target.parentElement.parentElement.parentElement.textContent);
            showAlert("success","Todo başarıyla silindi...");
        }
        
    }
   
}

function editTodoFromStorage(editTodo,newTodo) {
    let todos = getTodosFromStorage();

    todos.forEach(function(todo,index){
        if (todo === editTodo) {
            todos[index]=newTodo;
        }

    });

    localStorage.setItem("todos",JSON.stringify(todos));

}

function deleteTodoFromStorage(deletetodo) {
    let todos = getTodosFromStorage();

    todos.forEach(function(todo,index){
        if (todo === deletetodo) {
            todos.splice(index,1);
        }

    });

    localStorage.setItem("todos",JSON.stringify(todos));

}

function LoadAllTodosToUI() {
    let todos = getTodosFromStorage();

    todoList.replaceChildren();

    todos.forEach(function(todo) {
        addTodoToUI(todo);

    });
}

function addTodo(e) {

    const newTodo = todoInput.value.trim();

    if (newTodo === "") {
        showAlert("danger", "Lütfen bir Todo girin...");
    } else {
        if (controlTodo(newTodo)) {
            addTodoToUI(newTodo);
            addTodoToStorage(newTodo);
            showAlert("success", "Todo başarıyla eklendi...");
        }
        
    }

    e.preventDefault();
}

function controlTodo(newTodo) {
    let todos = getTodosFromStorage();

    if (todos.includes(newTodo)===false) {
        return true;
    }
    else {
        showAlert("danger","Birden fazla Aynı isimli Todo Eklenemez...");
        return false;
    }

}

function getTodosFromStorage() {
    let todos;

    if (localStorage.getItem("todos")=== null) {
        todos = [];
    }
    else {
        todos = JSON.parse(localStorage.getItem("todos"));
    }

    return todos;
}
function addTodoToStorage(newTodo) {

    let todos = getTodosFromStorage();

    todos.push(newTodo);

    localStorage.setItem("todos",JSON.stringify(todos));

}

function showAlert(type,message) {
    const alert =document.createElement("div");

    alert.className = `alert alert-${type}`;

    alert.textContent = message

    firstCardBody.appendChild(alert);
    
    setTimeout(function(){
        alert.remove();
    },5000)
}

function addTodoToUI(newTodo) {

    

    // Link Oluşturma
    const link = document.createElement("a");

    link.href = "#";
    link.className = "delete-item"
    link.innerHTML = "<i class = 'fa fa-remove' style='margin-right: 30px'></i>";

    // Link-2 Oluşturma
    const link2 = document.createElement("a");

    link2.href = "#";
    link2.className = "edit-item"
    link2.innerHTML = "<i class='fa-solid fa-pencil'></i>";

    const div = document.createElement("div");

    div.appendChild(link);
    div.appendChild(link2);

    // List Item Oluşturma
    const listItem = document.createElement("li");

    listItem.className = "list-group-item d-flex justify-content-between";

    //Text Node Ekleme

    listItem.appendChild(document.createTextNode(newTodo))
    listItem.appendChild(div);

    // Todo List'e List Item ekleme

    todoList.appendChild(listItem);

}
