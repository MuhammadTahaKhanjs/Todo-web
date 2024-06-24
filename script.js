let addInpTodo = document.querySelectorAll(".inptodo")[0]
let divTodolist = document.querySelectorAll(".todo-list")
let databases = []
function addlist(){
    let inpTodoValue = addInpTodo.value
    databases.push(inpTodoValue)
    InpTodolist()
}
function InpTodolist(){
    divTodolist[0].innerHTML = ''
    for(let i = 0; i < databases.length; i++){
        divTodolist[0].innerHTML += `
        <p>
        ${databases[i]}
        <button onclick='editTodo(${i})'>Eidth</button>
        <button onclick='deleteitem(${i})'>Delete</button>
        </p>`
    }
    console.log(databases)
    addInpTodo.value = ''
}
function deleteitem(index){
    databases.splice(index,1,)
    InpTodolist()

}
let addTodoDiv = document.querySelectorAll('#add-todo-list')[0]
let editTodoDiv= document.querySelectorAll('#eidth-todo-list')[0]
let editValue = document.querySelectorAll('.eidth-value')[0]
let eidtIndex
function editTodo(index){
    if(isEidting){
        errorMsg()
    }
    else{
        eidtIndex = index
        toggleTodoForm()
        editTodoDiv.value = databases[index]

    }

} 
function updateTodo(){
    toggleTodoForm()
    databases.splice(eidtIndex, 1 ,editValue.value)
    InpTodolist()
}
 

let isEidting = false
function toggleTodoForm(){
    if(!isEidting){
        addTodoDiv.className += ' hide';
        editTodoDiv.className = '';

    }
    else{
        addTodoDiv.className = '';
        editTodoDiv.className += ' hide';

    }
    isEidting = !isEidting ;
}
let errorMsgDiv = document.querySelectorAll('.error-msg')[0]
function errorMsg(){
    errorMsgDiv.innerHTML ='First save you change then change another things'
    setTimeout(function errorMsg(){
        errorMsgDiv.innerHTML = ''

    },3000)

}