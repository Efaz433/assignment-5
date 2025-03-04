
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

    // to in activity section
    const h2 = document.createElement("h2");
    h2.style.backgroundColor = "slategray";
    // h2.style.textAlign = "center";
    h2.style.padding = "2px"
    h2.innerText = `you have completed the ${taskName} task on ${new Date().toLocaleString()}`;
    document.getElementById("history").appendChild(h2);


}
