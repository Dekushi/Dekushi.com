function TagClick(Type){
    SetDivHidden();
    var objDiv 
    if(Type == 1){
        objDiv = document.getElementById("div1");
    }else if(Type == 2){
        objDiv = document.getElementById("div2");
    }
    objDiv.style.display = "block";
}

function SetDivHidden(){
    document.getElementById("div1").style.display = "none";
    document.getElementById("div2").style.display = "none";
}