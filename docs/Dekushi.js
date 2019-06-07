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
    var mapType = google.maps.MapTypeId.ROADMAP;
    var lat = 35.939759, lng = 139.435767, zoom = 3;
    var mapOptions = {
        center: new google.maps.LatLng(lat, lng),  //地图的中心点
        zoom: zoom,               　　　　　　　　　　//地图缩放比例
        mapTypeId: mapType,       　　　　　　　　　　//指定地图展示类型：卫星图像、普通道路
        scrollwheel: true          　　　　　　　　　 //是否允许滚轮滑动进行缩放
    };
    var map = new google.maps.Map(document.getElementById("map"), mapOptions); //创建谷歌地图
}