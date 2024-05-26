// document.addEventListener('DOMContentLoaded', () => {
//     const taskInput = document.getElementById('new-task');
//     const addTaskButton = document.getElementById('add-task-button');
//     const taskList = document.getElementById('task-list');

//     addTaskButton.addEventListener('click', addTask);
//     taskInput.addEventListener('keypress', (e) => {
//         if (e.key === 'Enter') {
//             addTask();
//         }
//     });

//     function addTask() {
//         const taskText = taskInput.value.trim();
//         if (taskText === '') {
//             return;
//         }

//         const listItem = document.createElement('li');
//         listItem.innerHTML = `
//             <span>${taskText}</span>
//             <div>
//                 <button class="complete-task">Complete</button>
//                 <button class="delete-task">Delete</button>
//             </div>
//         `;

//         taskList.appendChild(listItem);
//         taskInput.value = '';

//         const completeTaskButton = listItem.querySelector('.complete-task');
//         const deleteTaskButton = listItem.querySelector('.delete-task');

//         completeTaskButton.addEventListener('click', () => {
//             listItem.classList.toggle('completed');
//         });

//         deleteTaskButton.addEventListener('click', () => {
//             taskList.removeChild(listItem);
//         });
//     }
// });


document.addEventListener('DOMContentLoaded', () => {
    const taskInput = document.getElementById('new-task');
    const addTaskButton = document.getElementById('add-task-button');
    const taskList = document.getElementById('task-list');

    addTaskButton.addEventListener('click', addTask);
    taskInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            addTask();
        }
    });

    function addTask() {
        const taskText = taskInput.value.trim();
        if (taskText === '') {
            return;
        }

        const listItem = document.createElement('li');
        listItem.innerHTML = `
            <span>${taskText}</span>
            <div>
                <button class="complete-task">Completed</button>
                <button class="delete-task">Delete</button>
            </div>
        `;

        taskList.appendChild(listItem);
        taskInput.value = '';

        const completeTaskButton = listItem.querySelector('.complete-task');
        const deleteTaskButton = listItem.querySelector('.delete-task');

        completeTaskButton.addEventListener('click', () => {
            listItem.classList.toggle('completed');
        });

        deleteTaskButton.addEventListener('click', () => {
            taskList.removeChild(listItem);
        });
    }
});

