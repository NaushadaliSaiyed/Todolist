const myInput = document.getElementById("myInput");
const tbody = document.getElementById("tbody")

function myAdd() {

    const myObjectGet = JSON.parse(localStorage.getItem("myTaskStorage")) || [];

    const myObject = {
        addTask: myInput.value
    }

    myObjectGet.push(myObject)    

    localStorage.setItem("myTaskStorage",JSON.stringify(myObjectGet))
    creathtml()
    reset()
}


function creathtml(){
    const myObjectGet = JSON.parse(localStorage.getItem("myTaskStorage")) || [];

    html = "";

    myObjectGet.forEach(myFun);

    function myFun(val){
        html += "<tr><td>"+val.addTask+"</td></tr>"

        }
        tbody.innerHTML = html;
    
}


function myDel() {

    localStorage.setItem("myTaskStorage", JSON.stringify(""));
    creathtml()
    reset()

}


function reset(){
    myInput.value = "";
}

window.addEventListener("load", creathtml)