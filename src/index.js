document.querySelector("#id-list").addEventListener("click", (event) => 
  {
    document.getElementById("create-task-form").innerHTML += "Sorry! preventDefault!";
    event.preventDefault();
  }, false);