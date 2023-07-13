let todoList=[];

function showTodo(){
    let list=' ';
    for( let i=0; i<todoList.length; i++){
        let value = todoList[i];
        let html = `<p>${value}</p>`
        list += html; 
    }
   document.querySelector(".showTodoList").innerHTML = list;
}

function addTodo(){
    
    let inputElement= document.querySelector("#todo");
    let name= inputElement.value;
    console.log(name);
    todoList.push(name);
    console.log(todoList);
    inputElement.value = '';
    showTodo();
}