// Daily Planner Script (Script.js)
// Created by Bruno Valente
// References:
// - MDN Web Docs: https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Introduction
// - W3Schools: https://www.w3schools.com/howto/howto_js_todolist.asp
// - YouTube Tutorial: https://www.youtube.com/watch?v=G0jO8kUrg-I



// Here, I'm ensuring that the DOM (which means Document Object Model) is completely loaded before running the script
document.addEventListener('DOMContentLoaded', () => {
   
    const taskEntryForm = document.getElementById('task-entry');
    const taskInputField = document.getElementById('task-text');
    const taskContainer = document.getElementById('task-container');

    // I created this function to create and insert a task
    const addNewTask = (taskContent) => {
        // I creat a list item for the new task
        const taskElement = document.createElement('li');
        taskElement.classList.add('task-item');

        // I add this part so the user is able to see the text they added 
        const textSpan = document.createElement('span');
        textSpan.textContent = taskContent;

        // I added a button to mark tasks as completed
        const markCompleteBtn = document.createElement('button');
        markCompleteBtn.textContent = '✔ Done';
        markCompleteBtn.classList.add('complete-button');
        markCompleteBtn.addEventListener('click', () => {
            taskElement.classList.toggle('finished-task');
        });

        // I added a button to remove the task
        const removeTaskBtn = document.createElement('button');
        removeTaskBtn.textContent = '❌ Remove';
        removeTaskBtn.classList.add('remove-button');
        removeTaskBtn.addEventListener('click', () => {
            taskContainer.removeChild(taskElement);
        });

        // I append elements to the task item
        taskElement.appendChild(textSpan);
        taskElement.appendChild(markCompleteBtn);
        taskElement.appendChild(removeTaskBtn);

        // I am add the task to the task list
        taskContainer.appendChild(taskElement);
    };

    // I am handling form submission
    taskEntryForm.addEventListener('submit', (event) => {
        event.preventDefault(); // With this line, I am preventing the page from refreshing on submit
        const taskContent = taskInputField.value.trim(); // I clean the input text
        if (taskContent !== '') {
            addNewTask(taskContent); // I call the function to create a task
            taskInputField.value = ''; // I clear the input field after submission
        }
    });
});
