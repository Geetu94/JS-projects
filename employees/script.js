//  topics covering
//     using filter here to filter the name user is asking
//     and includes too
//     using tolowercase()
//     desturcturizing an object

function getInputData(){
    const input1=document.getElementById("input1")
    search=input1.value;
    showListOfData(search)
}

var employeesList=[
    {
        name:"kumar nayak",
        id:1,
        state:"Andhra Pradesh",
        currently:"bangalore",
        level:1
    },
    {
        name:"Rahit",id:2, state:"Delhi",currently:"Dharamshala",level:1
    },
    {
        name:"Praveen kumar",id:3, state:"Mumbai",currently:"pune",level:2
    }
]


function showListOfData(search){
    let newTagTr=""
    const listOfData= document.getElementById("listOfData")
    const input1=document.getElementById("input1")

    newTagTr+= `
                <tr>
                    <td>name</td>
                    <td>state</td>
                    <td>currently</td>
                    <td>See salary</td>
                </tr>
             `
    employeesList.filter((element,index) => {
        const { name } = element; // desturcturizing an object
        if (name.toLowerCase().includes(search.toLowerCase())){
            element["showSalary"]=true
            const name=element.name;
            newTagTr+= `
                <tr>
                    <td>${element.name}</td>
                    <td>${element.state}</td>
                    <td>${element.currently}</td>
                    <td><button onclick="showSalary(${element.level})">show salary</button></td>
                </tr>
             `
             return element;
        }
        else{
            element["showSalary"]=false;
            return element;
        }
        });
    listOfData.innerHTML=newTagTr
    input1.value="";
    const title=document.getElementById("title")
    title.innerHTML=`These many ${search}'s are there in the company`
}

// create an arrow function
const showSalary = (level) => {
    switch (level){
        case 1:
            alert(`His salry is 1 lakh per annum`);
            break;
        case 2:
            alert(`His salry is 2 lakh per annum`);
            break;
    }

}


