import { pageObject } from ".";


function makeProject() {
    let projects = [];
    const pageObj = pageObject();
    const newPjForm = document.createElement('form');
    const newPjBtn = document.createElement('button');
    newPjForm.innerHTML = `
    <label for="title">New project title:<input type="text" id="title" required></label>
    <button type="submit" id="addBtn">Add</button><button id="cancelBtn">Cancel</button>`;
    newPjForm.id = 'newPjForm';
    pageObj.sideBarEl.append(newPjForm);
    newPjForm.addEventListener('submit', event => {
        event.preventDefault();
        const inputVal = document.getElementById('title').value;
        newPjBtn.innerHTML = inputVal;
        const pjBtnEl = document.createElement('div');
        const deletePjBtn = document.createElement('button');
        deletePjBtn.innerHTML = `<span id="delete" class="material-symbols-outlined">
        delete
        </span>`;
        pjBtnEl.appendChild(newPjBtn);
        pjBtnEl.appendChild(deletePjBtn);
        pageObj.sideBarEl.append(pjBtnEl);
        pjBtnEl.classList.add('taskContainer');
        newPjForm.remove();
        deletePjBtn.addEventListener('click', () => {
            pjBtnEl.remove();
            pageObj.bodyEl.innerHTML = 'PROJECT DELETED';
        })
        projects.push(pageObj.SamplePjBtn);
        let toDoArray = [];
        newPjBtn.addEventListener('click', (e)=> {
            const pageObj = pageObject();
            projects.push(e.target);
            console.log(projects);
            pageObj.bodyEl.innerHTML = 
            `<h3>${inputVal} Tasks</h3>
            <ul id="list">
                        <li class="taskContainer">
                            
                        </li>
                    </ul>
                    <button id="addTask"><span class="material-symbols-outlined">
                        add
                    </span>Add task</button>`;
                    const ulEl = document.getElementById('list');
                    for (let i = 0; i < toDoArray.length; i++) {
                        const taskDivEl = document.createElement('li');
                        const checkBoxEl = document.createElement('input');
                        const titleP = document.createElement('p');
                        const dateP = document.createElement('p');
                        const editSpanEl = document.createElement('span');
                        const deleteSpanEl = document.createElement('span');
                        editSpanEl.id = 'edit';
                        editSpanEl.className = 'material-symbols-outlined';
                        editSpanEl.innerHTML = 'edit';
                        deleteSpanEl.id = 'delete';
                        deleteSpanEl.className = 'material-symbols-outlined';
                        deleteSpanEl.innerHTML = 'delete';
                        if (toDoArray[i].name != null) {
                            titleP.innerHTML = toDoArray[i].name;
                        dateP.innerHTML = `Due: ${toDoArray[i].date}`;
                        checkBoxEl.type = 'checkbox';
                        checkBoxEl.id = 'firstDo';
                        taskDivEl.append(checkBoxEl);
                        taskDivEl.append(titleP);
                        taskDivEl.append(dateP);
                        taskDivEl.append(editSpanEl);
                        taskDivEl.append(deleteSpanEl);
                        taskDivEl.classList.add('taskContainer');
                        ulEl.appendChild(taskDivEl);
                        editSpanEl.addEventListener('click', () => {
                            const taskForm = document.createElement('form');
                            taskForm.id = 'taskForm';
                            taskForm.innerHTML = `
                            <label for="name">Task:<input type="text" id="name"></label>
                            <label for="date">Due date:<input type="date" id="date"></label>
                            <button type="submit">Add</button><button id="cancelTask">Cancel</button>`;
                            taskForm.id = 'taskForm';
                            pageObj.bodyEl.append(taskForm);
                            taskForm.addEventListener('submit', (e) => {
                                e.preventDefault();
                                const editedTask = document.getElementById('name').value;
                                const editedDate = document.getElementById('date').value;
                                titleP.innerHTML = editedTask;
                                dateP.innerHTML = editedDate;
                                taskForm.remove();
                            })
                            const cancelTaskForm = document.getElementById('cancelTask');
                            cancelTaskForm.addEventListener('click', () => {
                            taskForm.remove();
                        })
                        })
                        deleteSpanEl.addEventListener('click', () => {
                            taskDivEl.remove();
                            toDoArray[i] = null;
                        })
                        }
                        
                    };
                    const addTaskBtn = document.getElementById('addTask');
                    addTaskBtn.addEventListener('click', () => {
                        const taskForm = document.createElement('form');
                        taskForm.id = 'taskForm';
                        taskForm.innerHTML = `
                        <label for="name">Task:<input type="text" id="name"></label>
                        <label for="date">Due date:<input type="date" id="date"></label>
                        <button type="submit">Add</button><button id="cancelTask">Cancel</button>`;
                        taskForm.id = 'taskForm';
                        pageObj.bodyEl.append(taskForm);
                        taskForm.addEventListener('submit', event => {
                            event.preventDefault();
                            const taskContainer = document.createElement('li');
                            const checkBox = document.createElement('input');
                            checkBox.type = 'checkbox';
                            checkBox.id = 'firstDo';
                            const editBtn = document.createElement('button');
                            editBtn.innerHTML = `<span id="edit" class="material-symbols-outlined">
                            edit
                            </span>`;
                            const deleteBtn = document.createElement('button');
                            deleteBtn.innerHTML = `<span id="delete" class="material-symbols-outlined">
                            delete
                            </span>`;
                            const nameVal = document.getElementById('name').value;
                            const dateVal = document.getElementById('date').value;
                            let taskObj = {
                                name: nameVal,
                                date: dateVal,
                            };
                            toDoArray.push(taskObj);
                            taskContainer.append(checkBox);
                            const taskTextEl = document.createElement('p');
                            taskTextEl.innerHTML = nameVal;
                            taskContainer.append(taskTextEl);
                            const dateTxtEl = document.createElement('p');
                            dateTxtEl.innerHTML = `Due:${dateVal}`;
                            taskContainer.append(dateTxtEl);
                            taskContainer.append(editBtn);
                            taskContainer.append(deleteBtn);
                            taskContainer.classList.add('taskContainer');
                            ulEl.appendChild(taskContainer);
                            taskForm.remove();
                            editBtn.addEventListener('click', () => {
                                const taskForm = document.createElement('form');
                                taskForm.id = 'taskForm';
                                taskForm.innerHTML = `
                                <label for="name">Task:<input type="text" id="name"></label>
                                <label for="date">Due date:<input type="date" id="date"></label>
                                <button type="submit">Add</button><button id="cancelTask">Cancel</button>`;
                                taskForm.id = 'taskForm';
                                pageObj.bodyEl.append(taskForm);
                                taskForm.addEventListener('submit', (e) => {
                                e.preventDefault();
                                const editedTask = document.getElementById('name').value;
                                const editedDate = document.getElementById('date').value;
                                taskTextEl.innerHTML = editedTask;
                                dateTxtEl.innerHTML = editedDate;
                                taskForm.remove();
                            })});
                            deleteBtn.addEventListener('click', () => {
                            taskContainer.remove();
                            taskObj.name = null;
                            taskObj.date = null;
                            
                        })
                        });
                        
                        const cancelTaskForm = document.getElementById('cancelTask');
                        cancelTaskForm.addEventListener('click', () => {
                            taskForm.remove();
                        })
                    } )
        });
    });
    const cancelPjBtn = document.getElementById('cancelBtn');
    cancelPjBtn.addEventListener('click', ()=> {
        newPjForm.remove();
    })
};

export { makeProject };