

function addBtn(){
    const inputBox= document.getElementById("input1");
    console.log(inputBox.value)
    let userData= inputBox.value;
    let getLocalStorage=localStorage.getItem("New Todo");
    if (getLocalStorage == null){
        listArr=[]
    }
    else{
        listArr = JSON.parse(getLocalStorage);
    }
    listArr.push(userData);
    localStorage.setItem("New Todo",JSON.stringify(listArr));
    showTasks();
}

function showTasks(){
    const inputBox= document.getElementById("input1");
    const todoList= document.getElementById("todoList")
    const footer= document.getElementById("footer")
    let getLocalStorage=localStorage.getItem("New Todo");
    console.log(getLocalStorage);
    if (getLocalStorage == null){
        listArr=[]
    }
    else{
        listArr= JSON.parse(getLocalStorage);
    }
    let newTagLi=""
    listArr.forEach((element,index) => {
        newTagLi+= `<li>${element} <button style="color:red;background-color:black ;" onclick="deleteTodo(${index})"><i>X</i></button></li>`
    });
    todoList.innerHTML=newTagLi
    footer.innerHTML=`you have ${listArr.length} tasks`
    inputBox.value="";
}

function clearAll(){
    let getLocalStorage=localStorage.removeItem("New Todo");
    const todoList= document.getElementById("todoList")
    const footer= document.getElementById("footer")
    if (getLocalStorage == null){
        listArr=[]
    }
    else{
        listArr= JSON.parse(getLocalStorage);
    }
    let newTagLi=""
    todoList.innerHTML=newTagLi
    footer.innerHTML=`you have ${listArr.length} tasks`
}

function deleteTodo(index){
    let getLocalStorage=localStorage.getItem("New Todo");
    listArr= JSON.parse(getLocalStorage);
    listArr.splice(index,1);
    localStorage.setItem("New Todo", JSON.stringify(listArr));
    showTasks();
}