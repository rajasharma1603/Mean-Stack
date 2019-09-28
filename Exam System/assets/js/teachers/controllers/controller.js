window.addEventListener('load', init);

function init() {
    updateCounts();
    bindEvents();
}

function bindEvents() {
    document.querySelector('#add').addEventListener('click', addQuestion);
    // document.querySelector('#delete').addEventListener('click',decrementID);
    document.querySelector("#selectAll").addEventListener('click', enableDisableCheckbox);
    document.querySelector("#delete").addEventListener('click', deleteMarked);

}

function addQuestion() {
    var questionObject = new Question();
    for (let key in questionObject) {
        if (key=='isMarked'){
            continue;
        }
        questionObject[key] = document.querySelector('#' + key).value;
    }
    questionsOperations.add(questionObject);
    printQuestion(questionObject);
    incrementID();
    updateCounts();
    console.log('THIS IS ', questionsOperations.questions);
}

function printQuestion(questionObject) {
    var tbody = document.querySelector('#printedQuestions');
    var tr = tbody.insertRow();
    var index = 0;
    // var rownumber=0;
    for (let key in questionObject) {
        if (key == 'isMarked') {
            continue;
        }
        let td = tr.insertCell(index);
        td.innerText = questionObject[key];
        index++;
    }
    // for(let key in questionsOperations.questions){
    //     tr.id="qcrow_" + rownumber;
    //     rownumber++;
    // }
    let td = tr.insertCell(index++);
    let id = questionObject.id;
    td.appendChild(createIcon("fa fa-trash"));
    td.appendChild(createIcon("fa fa-pencil-alt"));
    let ta = tr.insertCell(index);
    ta.appendChild(createCheckbox(id));
}

function updateCounts() {
    document.querySelector('#total').innerText = questionsOperations.questions.length;
    document.querySelector('#marked').innerText = questionsOperations.countMarked();
    document.querySelector('#unmarked').innerText = questionsOperations.questions.length - questionsOperations.countMarked();
}

function toggleMarked() {
    let id = this.getAttribute('qcdelete');
    questionsOperations.toggleMarked(id);
    let tr = this.parentNode.parentNode;
    tr.classList.toggle('alert-danger');
    updateCounts();
}

function createIcon(className) {
    var icon = document.createElement('i');
    icon.className = className + " padding-right";
    return icon;
}

function createCheckbox(id) {
    var checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.setAttribute('qcdelete', id);
    checkbox.className = "checked"
    checkbox.addEventListener('click',toggleMarked);
    return checkbox;

}

function enableDisableCheckbox() {
    // console.log("This is check box");
    var checked = document.querySelectorAll(".checked");
    console.log(checked);
    // for (let ele in checked){
    //     console.log(ele);
    // }

}

function incrementID() {
    let id = document.querySelector('#id').value++;
    console.log('This is', id);
}

function decrementID() {
    let id = document.querySelector('#id').value--;
}

function deleteMarked() {
    var arr = questionsOperations.delete();
    printTable(arr);
}

function printTable(arr) {
    document.querySelector('#printedQuestions').innerHTML = '';
    arr.forEach(printQuestion);
    updateCounts();
}