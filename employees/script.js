//  topics covering
//     using filter here to filter the name user is asking
//     and includes too
//     using tolowercase()
//     desturcturizing an object

function getInputData(){
    const input1=document.getElementById("input1")
    console.log(input1.value);
}

var employeesList=[
    {
        name:"kumar nayak",id:1, state:"Andhra Pradesh",currently:"bangalore"
    },
    {
        name:"Rahit",id:2, state:"Delhi",currently:"Dharamshala"
    },
    {
        name:"Praveen kumar",id:3, state:"Mumbai",currently:"pune"
    }
]


let readlineSync = require("readline-sync");
var yourName= readlineSync.question("What is your name: ")

afterFiltering=
    // using filter here to filter the name user is asking
    // and includes too
    // using tolowercase()
    // creating a key value pair after filteriing
    employeesList.filter(e => 
        {
            const { name } = e; // desturcturizing an object
            if (name.toLowerCase().includes(yourName.toLowerCase())){
                e["showSalary"]=true
                return e;
            }
            else{
                e["showSalary"]=false;
                return e;
            }
        }
        )

console.log(afterFiltering);

function showTasks(){
    let newTagLi=""

    employeesList.filter((element,index) => {
        const { name } = e; // desturcturizing an object
        if (name.toLowerCase().includes(yourName.toLowerCase())){
            e["showSalary"]=true
            return e;
            newTagLi+= `<li>${element} <button style="color:red;background-color:black ;" onclick="deleteTodo(${index})"><i>X</i></button></li>`
        }
        else{
            e["showSalary"]=false;
            return e;
        }
        });
    todoList.innerHTML=newTagLi
    footer.innerHTML=`you have ${listArr.length} tasks`
    inputBox.value="";
}



