import { makeProject } from "./project";
import { makeTodo } from "./toDo";

function makePage() {
    let tOrF = false;
    const menuBtn = document.getElementById('menu');
    menuBtn.addEventListener('click', () => {
        if (tOrF == false) {
            document.getElementById('sidebar').style.width = '16rem';
            return tOrF = true;
        } else {
            document.getElementById('sidebar').style.width = '0rem';
            return tOrF = false;
        }
    })
};


function pageObject() {
    const SamplePjBtn = document.getElementById('sample');
    const sideBarEl = document.getElementById('sidebar');
    const bodyEl = document.getElementById('body');
    const contentEl = document.getElementById('content');
    const checkBox = document.getElementById('firstDo');
    const addTaskBtn = document.getElementById('addTask');
    const ulEl = document.getElementById('list');
    const deleteSample = document.getElementById('delete');
    const sampleContainer = document.querySelector('[data-sample-pj]');
    return { SamplePjBtn, sideBarEl, bodyEl, checkBox, addTaskBtn, contentEl, ulEl, deleteSample, sampleContainer};
};
window.onload=function() {
    const pageObj = pageObject();
    pageObj.SamplePjBtn.click();
}

const addProjectBtn = document.getElementById('addProject');
addProjectBtn.addEventListener('click', makeProject);
makePage();
pageObject();
makeTodo();


export { pageObject };


