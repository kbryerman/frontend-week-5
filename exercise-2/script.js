function addTodoItem(event) {
  event.preventDefault(); // necessary to prevent the submitting of a form
  var todolist    = document.getElementById("todolist");
  var item        = document.getElementById("item");

  var li          = document.createElement("li");
  var label       = document.createElement("label");
  var checkbox    = document.createElement("input");
  var deleteButton = document.createElement("button")
  deleteButton.innerText = "Delete"
  checkbox.type   = "checkbox";
  label.appendChild(checkbox);
  label.appendChild(document.createTextNode(item.value));
  li.appendChild(label);
  todolist.appendChild(li)
  li.appendChild(deleteButton);
  item.value = "";
}

form = document.getElementById("the-form");
form.addEventListener("submit", addTodoItem);

