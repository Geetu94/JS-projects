
function changeColor(){
    let divElement= document.getElementById("container1");
    let inputElement= document.getElementById("input1");
    divElement.style.backgroundColor = inputElement.value
    inputElement.value=""
}

// function changeRGB(){
//     let divElement= document.getElementById("container2");
//     let inputElement2= document.getElementById("input2");
//     let inputElement3= document.getElementById("input3");
//     let inputElement4= document.getElementById("input4");
//     console.log(inputElement2.value,inputElement3.value,inputElement4.value);
//     divElement.style.backgroundColor = `rgb(${inputElement2.value},${inputElement3.value},${inputElement4.value})`
//     inputElement2.value=""
//     inputElement3.value=""
//     inputElement4.value=""
// }
