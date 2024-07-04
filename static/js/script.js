function addTask() {
    const task = document.getElementById('taskInput').value;
    if (task) {
        fetch('/add', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: `task=${task}`
        })
        .then(response => response.json())
        .then(data => {
            updateTaskList(data.tasks);
            document.getElementById('taskInput').value = '';
        });
    }
}

function removeTask() {
    const task = document.getElementById('taskInput').value;
    if (task) {
        fetch('/remove', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: `task=${task}`
        })
        .then(response => response.json())
        .then(data => {
            updateTaskList(data.tasks);
            document.getElementById('taskInput').value = '';
        });
    }
}

function updateTaskList(tasks) {
    const taskList = document.getElementById('taskList');
    taskList.innerHTML = '';
    tasks.forEach(task => {
        const li = document.createElement('li');
        li.textContent = task;
        taskList.appendChild(li);
    });
}
