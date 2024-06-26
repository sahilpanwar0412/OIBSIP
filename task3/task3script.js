document.addEventListener('DOMContentLoaded', function() {
    const todoForm = document.getElementById('todo-form');
    const todoInput = document.getElementById('todo-input');
    const pendingTasks = document.getElementById('pending-tasks');
    const completedTasks = document.getElementById('completed-tasks');

    todoForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const taskText = todoInput.value.trim();
        if (taskText !== '') {
            addTask(taskText);
            todoInput.value = '';
        }
    });

    function addTask(taskText) {
        const li = document.createElement('li');
        const timestamp = new Date().toLocaleString();
        li.innerHTML = `
            <span>${taskText}</span>
            <span class="timestamp">Added: ${timestamp}</span>
            <button class="edit-button">Edit</button>
            <button class="complete-button">Complete</button>
            <button class="delete-button">Delete</button>
        `;

        const completeButton = li.querySelector('.complete-button');
        completeButton.addEventListener('click', function() {
            completeTask(li);
        });

        const deleteButton = li.querySelector('.delete-button');
        deleteButton.addEventListener('click', function() {
            deleteTask(li);
        });

        pendingTasks.appendChild(li);
    }

    function completeTask(task) {
        const timestamp = new Date().toLocaleString();
        task.classList.add('complete');
        task.querySelector('.timestamp').textContent = `Completed: ${timestamp}`;
        completedTasks.appendChild(task);
        task.querySelector('.edit-button').remove(); // Remove the edit button once completed
        task.querySelector('.complete-button').remove(); // Remove the complete button once completed
    }

    function deleteTask(task) {
        task.remove();
    }
});
