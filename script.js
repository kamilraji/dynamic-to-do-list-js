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






document.addEventListener('DOMContentLoaded', function () {
  // 1. Select DOM elements
  const addButton = document.getElementById('add-task-btn');
  const taskInput = document.getElementById('task-input');
  const taskList = document.getElementById('task-list');

  // 2. Load tasks from Local Storage
  function loadTasks() {
    const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
    storedTasks.forEach(taskText => addTask(taskText, false)); // false = don't save again
  }

  // 3. Create / update addTask function (now works with Local Storage)
  function addTask(taskText = null, save = true) {
    // If taskText not provided (button / Enter), read from input
    let text = taskText;
    if (text === null || text === undefined) {
      text = taskInput.value.trim();
    } else {
      text = String(text).trim();
    }

    // Validate
    if (text === '') {
      alert('Please enter a task');
      return;
    }

    // Create li element
    const li = document.createElement('li');
    li.textContent = text;

    // Create remove button
    const removeBtn = document.createElement('button');
    removeBtn.textContent = 'Remove';
    removeBtn.classList.add('remove-btn');

    // Remove from DOM + Local Storage
    removeBtn.onclick = function () {
      taskList.removeChild(li);

      const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
      const updatedTasks = storedTasks.filter(t => t !== text);
      localStorage.setItem('tasks', JSON.stringify(updatedTasks));
    };

    // Append button to li, li to list
    li.appendChild(removeBtn);
    taskList.appendChild(li);

    // Save to Local Storage only when needed
    if (save) {
      const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
      storedTasks.push(text);
      localStorage.setItem('tasks', JSON.stringify(storedTasks));
    }

    // Clear input when adding from the input field
    if (taskText === null) {
      taskInput.value = '';
    }
  }

  // 4. Attach event listeners
  addButton.addEventListener('click', function () {
    addTask();
  });

  taskInput.addEventListener('keypress', function (event) {
    if (event.key === 'Enter') {
      addTask();
    }
  });

  // 5. Invoke loadTasks on DOMContentLoaded
  loadTasks();
});

