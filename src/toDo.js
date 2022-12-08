import { pageObject } from ".";

function makeTodo() {
    const pageObj = pageObject();
    let toDoArray = [
        { 
            name: 'Get rich or die trying',
            date: 'today'
        }
    ];
    pageObj.deleteSample.addEventListener('click', () => {
        pageObj.sampleContainer.remove();
        pageObj.bodyEl.innerHTML = 'PROJECT DELETED';
    })
    pageObj.SamplePjBtn.addEventListener('click', () => {
        pageObj.bodyEl.innerHTML = `
        <h3>Sample Project Tasks</h3>
        <ul id="list">
        </ul>
        <button id="addTask"><span class="material-symbols-outlined">
            add
        </span>Add task</button>`;
        for ( let i = 0; i <toDoArray.length; i++) {
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
                        if (toDoArray[i] != null) {
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
                        const ulEl = document.getElementById('list');
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
                        taskForm.classList.add('taskForm');
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
                            const ulEl = document.getElementById('list');
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
                        })
                        });
                        
                        const cancelTaskForm = document.getElementById('cancelTask');
                        cancelTaskForm.addEventListener('click', () => {
                            taskForm.remove();
                        })
                    } )
        });
    };
    // const cancelPjBtn = document.getElementById('cancelBtn');
    // cancelPjBtn.addEventListener('click', ()=> {
    // //     newPjForm.remove();
    // })

export { makeTodo };