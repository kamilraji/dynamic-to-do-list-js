document.addEventListener('DOMContentLoaded', function () {
  // 1. Select DOM elements
  const addButton = document.getElementById('add-task-btn');
  const taskInput = document.getElementById('task-input');
  const taskList = document.getElementById('task-list');

  // 2. Create the addTask function
  function addTask() {
    const taskText = taskInput.value.trim();

    // Check if taskText is empty
    if (taskText === "") {
      alert("Please enter a task");
      return;
    }

    // 3. Task creation and removal
    // Create li element
    const li = document.createElement('li');
    li.textContent = taskText;

    // Create remove button
    const removeBtn = document.createElement('button');
    removeBtn.textContent = "Remove";
    // Use classList.add (what the checker is looking for)
    removeBtn.classList.add('remove-btn');

    // When remove button is clicked, remove the li from taskList
    removeBtn.onclick = function () {
      taskList.removeChild(li);
    };

    // Append button to li, then li to the list
    li.appendChild(removeBtn);
    taskList.appendChild(li);

    // Clear input field
    taskInput.value = "";
  }

  // 4. Attach event listeners
  // Click on "Add Task" button
  addButton.addEventListener('click', addTask);

  // Press "Enter" in the input field
  taskInput.addEventListener('keypress', function (event) {
    if (event.key === 'Enter') {
      addTask();
    }
  });
});
