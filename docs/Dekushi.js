function TagClick(Type){
    SetDivHidden();
    var DivID = "div" + Type;
    if(Type == 4){
        mkMap();
    }
    var objDiv = document.getElementById(DivID);
    objDiv.style.display = "block";
}

function SetDivHidden(){
    document.getElementById("div1").style.display = "none";
    document.getElementById("div2").style.display = "none";
    document.getElementById("div3").style.display = "none";
    document.getElementById("div4").style.display = "none";
}

function mkMap(){
    var lat = 35.9396259, lng = 139.4352337, zoom = 19;
    var ymap = new Y.Map("map");
    ymap.drawMap(new Y.LatLng(lat, lng), zoom, Y.LayerSetId.NORMAL);
}