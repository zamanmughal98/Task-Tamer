const TODAYS_TASK = [
  'Take out the trash',
  'Buy groceries',
  'Finish coding project',
  'Water the plants',
  'Call mom',
  'Clean the room',
  'Go for a walk',
];
const taskContainer = document.getElementById('taskContainer');

const populateTodaysTasks = () => {
  TODAYS_TASK.forEach((task, index) => {
    const li = document.createElement('li');
    const checkbox = document.createElement('input');
    const button = document.createElement('button');

    checkbox.type = 'checkbox';
    li.innerHTML = `${index + 1}. ${task}`;
    button.innerHTML = 'Done';

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
  });
};

document.addEventListener('DOMContentLoaded', populateTodaysTasks);
