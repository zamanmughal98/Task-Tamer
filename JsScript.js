const TODAYS_TASK = [
  'take out the trash',
  'buy groceries',
  'finish coding project',
  'water the plants',
  'call mom',
  'clean the room',
  'go for a walk',
];
const taskContainer = document.getElementById('taskContainer');

const toTitleCase = (task) => {
  return task.toLocaleLowerCase().replace(/\b\w/g, function (char) {
    return char.toUpperCase();
  });
};
const populateTodaysTasks = () => {
  TODAYS_TASK.forEach((task, index) => {
    addTaskToDOM(toTitleCase(task), index);
  });
};

const addTaskToDOM = (task, index) => {
  const li = document.createElement('li');
  const checkbox = document.createElement('input');
  const button = document.createElement('button');

  checkbox.type = 'checkbox';
  li.innerHTML = `${index + 1}. ${task}`;
  button.innerHTML = 'Done';

  button.id = 'doneButtons';
  button.onclick = () => {
    li.style.textDecoration = 'line-through';
    button.disabled = true;
    li.style.pointerEvents = 'none';
    button.style.pointerEvents = 'none';
    checkbox.disabled = true;
  };

  checkbox.onchange = () => {
    if (checkbox.checked) {
      button.disabled = false;
      button.style.pointerEvents = 'auto';
    } else {
      button.disabled = true;
      button.style.pointerEvents = 'none';
    }
  };

  if (!checkbox.checked) {
    button.disabled = true;
    button.style.pointerEvents = 'none';
  }

  li.prepend(checkbox);
  taskContainer.appendChild(li);
  li.appendChild(button);
};

const addTaskButton = document.getElementById('addTaskButton');
const newTaskInput = document.getElementById('newTaskInput');

const isDuplicateTask = (task) => {
  return TODAYS_TASK.some(
    (existingTask) => existingTask.toLowerCase() === task.toLowerCase(),
  );
};

addTaskButton.addEventListener('click', () => {
  const newTask = newTaskInput.value.trim();
  if (newTask) {
    if (isDuplicateTask(newTask)) {
      alert('Task already exists.');
    } else {
      const Task_titleCase = toTitleCase(newTask);

      addTaskToDOM(Task_titleCase, TODAYS_TASK.length);
      TODAYS_TASK.push(Task_titleCase);
      newTaskInput.value = '';
    }
  }
});

document.addEventListener('DOMContentLoaded', populateTodaysTasks);
