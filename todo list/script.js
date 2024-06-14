
function addTask() {
    var taskInput = document.getElementById("taskInput");
    var taskList = document.getElementById("taskList");
    
    if (taskInput.value === "") {
      alert("Please enter a task!");
      return;
    }
  
    var li = document.createElement("li");
    li.textContent = taskInput.value;
    
    var removeBtn = document.createElement("button");
    removeBtn.textContent = "Remove";
    removeBtn.className = "remove-btn";
    removeBtn.addEventListener("click", function(event) {
      event.stopPropagation(); 
      taskList.removeChild(li);
      showPopup();
      checkCompletion();
    });
  
    li.appendChild(removeBtn);
    taskList.appendChild(li);
    
    taskInput.value = "";
  }
  
  document.getElementById("taskInput").addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
      addTask();
    }
  });
  
  function showPopup() {
    var popup = document.getElementById("popup");
    popup.style.display = "block";
    setTimeout(function() {
      popup.style.display = "none";
    }, 2000);
  }

  function checkCompletion() {
    var taskList = document.getElementById("taskList");
    if (taskList.children.length === 0) {
      var completionPopup = document.getElementById("completionPopup");
      completionPopup.style.display = "block";
      setTimeout(function() {
        completionPopup.style.display = "none";
      }, 2000);
    }
    if (taskList.children.length === 1) { 
      var completionPopup = document.getElementById("completionPopup");
      completionPopup.style.display = "none"; 
    }
  }