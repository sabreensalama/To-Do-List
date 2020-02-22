var addTask = document.getElementById("add-task");
var toDoList = document.getElementById("tdl-list");

function getTodos() {
    var todos = [];
    var todos_str = localStorage.getItem('todos');
    if (todos_str != null) {
        todos = JSON.parse(todos_str)
    }
    return todos
}
function showToDoList() {
    var todos=getTodos();
    var str=''
    for(i=0;i<todos.length;i++)
    {
   str+='<li>' + todos[i] + '<button class="remove" id="' + i  + '">x</button></li>';

    }
    toDoList.innerHTML=str;

    var buttons = document.getElementsByClassName('remove');
    for (var i=0; i < buttons.length; i++) {
        buttons[i].addEventListener('click', remove);
    };

}
function add() {

    var todos = getTodos();
    var input1 = document.getElementById("new-task").value;
    todos.push(input1);
    localStorage.setItem('todos', JSON.stringify(todos));
    //to update to do list
  
    showToDoList();
    console.log("add")
    return false
}

function remove() {
    var id = this.getAttribute('id');
    var todos = getTodos();
    todos.splice(id, 1);
    localStorage.setItem('todos', JSON.stringify(todos));

    showToDoList();

    return false;
}
function search()
{
    var inputNode=document.createElement("input")
     var attribute=document.createAttribute()
    var buttonNode=document.createElement("button")
    var node = document.createTextNode("search");
    buttonNode.append(node)
    toDoList.prepend(inputNode,buttonNode)

}

addTask.addEventListener('click',add);

showToDoList();

