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
         alertFunction("main-btn-1", document.getElementById("card-1-title").innerText)
});
document.getElementById("main-btn-2")
    .addEventListener("click",function(){
         alertFunction("main-btn-2", document.getElementById("card-2-title").innerText)
});
document.getElementById("main-btn-3")
    .addEventListener("click",function(){
         alertFunction("main-btn-3", document.getElementById("card-3-title").innerText)
});
document.getElementById("main-btn-4")
    .addEventListener("click",function(){
         alertFunction("main-btn-4", document.getElementById("card-4-title").innerText)
});
document.getElementById("main-btn-5")
    .addEventListener("click",function(){
         alertFunction("main-btn-5", document.getElementById("card-5-title").innerText)
});
document.getElementById("main-btn-6")
    .addEventListener("click",function(){
         alertFunction("main-btn-6", document.getElementById("card-6-title").innerText)
});

function alertFunction(id,taskName){
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

    // for history
    const historyContainer = document.getElementById("history-container");
    const div = document.createElement("div");
    div.innerHTML = `
    <h2 class = "bg-slate-100">you have completed ${taskName} task </h2>`
    historyContainer.appendChild(div);
}