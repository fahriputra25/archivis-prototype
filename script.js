function show(pageId){
    document.querySelectorAll(".page").forEach(p=>{
        p.classList.remove("active");
    });
    document.getElementById(pageId).classList.add("active");
}

function goAI(){
    show("aiPage");
}

/* CHART */
let ctx = document.getElementById("chart");

if(ctx){
    new Chart(ctx,{
        type:"doughnut",
        data:{
            labels:["Low","Med","High"],
            datasets:[{
                data:[70,20,10],
                backgroundColor:["#06b6d4","#fbbf24","#ef4444"]
            }]
        }
    });
}