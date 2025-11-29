document.addEventListener('DOMContentLoaded', function () {
  // 2. Select DOM elements
  const addButton = document.getElementById('add-task-btn');
  const taskInput = document.getElementById('task-input');
  const taskList = document.getElementById('task-list');

  // 3. Create the addTask function
  function addTask() {
    const taskText = taskInput.value.trim();

    // Check if input is empty
    if (taskText === '') {
      alert('Please enter a task');
      return;
    }

    // 4. Task creation
    const li = document.createElement('li');
    li.textContent = taskText;

    // Create remove button
    const removeBtn = document.createElement('button');
    removeBtn.textContent = 'Remove';
    removeBtn.className = 'remove-btn';

    // Remove task when button is clicked
    removeBtn.onclick = function () {
      taskList.removeChild(li);
    };

    // Add button to li, then li to list
    li.appendChild(removeBtn);
    taskList.appendChild(li);

    // Clear input
    taskInput.value = '';
    taskInput.focus();
  }

  // 5. Attach event listeners
  addButton.addEventListener('click', addTask);

  taskInput.addEventListener('keypress', function (event) {
    if (event.key === 'Enter') {
      addTask();
    }
  });
});
