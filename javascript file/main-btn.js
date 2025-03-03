// document.getElementById("main-btn-1")   
//     .addEventListener("click",function(){
//         alert("Board Updated successfully")
//         document.getElementById("main-btn-1").disabled = true;
//         document.getElementById("main-btn-1").style.backgroundColor = "white";
//         document.getElementById("main-btn-1").style.color = "black";
        
        
//         const taskNum = document.getElementById("task-number").innerText;
//         const taskLeft = taskNum - 1 ;
//         document.getElementById("task-number").innerText = taskLeft ;



//         const willIncrease = document.getElementById("will-increase").innerText;
//         const convertedIncrease = parseInt(willIncrease);
//         const increment = convertedIncrease + 1 ;
//         document.getElementById("will-increase").innerText = increment ;


// });






document.getElementById("main-btn-1")
    .addEventListener("click",function(){
         alertFunction("main-btn-1")
});
document.getElementById("main-btn-2")
    .addEventListener("click",function(){
         alertFunction("main-btn-2")
});
document.getElementById("main-btn-3")
    .addEventListener("click",function(){
         alertFunction("main-btn-3")
});
document.getElementById("main-btn-4")
    .addEventListener("click",function(){
         alertFunction("main-btn-4")
});
document.getElementById("main-btn-5")
    .addEventListener("click",function(){
         alertFunction("main-btn-5")
});
document.getElementById("main-btn-6")
    .addEventListener("click",function(){
         alertFunction("main-btn-6")
});

function alertFunction(id){
    // to give alert message
    alert("Board Updated successfully")
    document.getElementById(id).disabled = true;
    document.getElementById(id).style.backgroundColor = "white";
    document.getElementById(id).style.color = "black";
    // to decrease the task number
    const taskNum = document.getElementById("task-number").innerText;
    const taskLeft = taskNum - 1 ;
    document.getElementById("task-number").innerText = taskLeft ;
    // to add the number
    const willIncrease = document.getElementById("will-increase").innerText;
    const convertedIncrease = parseInt(willIncrease);
    const increment = convertedIncrease + 1 ;
    document.getElementById("will-increase").innerText = increment ;
}