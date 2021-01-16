function selectCusTypes() {
    var txt = "";
    for(let i in customerTypes){
        txt += "<option value='" + i +"'>" + customerTypes[i]+"</option>";
    }
    document.getElementById("cusTypes").innerHTML = txt;
}
function selectCusServices() {
    var txt = "";
    for(let i in cusServices){
        txt += "<option value='" + i +"'>" + cusServices[i]+"</option>";
    }
    document.getElementById("cusServices").innerHTML = txt;
}
function selectRoomTypes() {
    var txt = "";
    for(let i in roomTypes){
        txt += "<option value='" + i +"'>" + roomTypes[i]+"</option>";
    }
    document.getElementById("roomTypes").innerHTML = txt;
}
function selectAddress() {
    var txt = "";
    for(let i in addressArr){
        txt += "<option value='" + i +"'>" + addressArr[i]+"</option>";
    }
    document.getElementById("address").innerHTML = txt;
}

selectCusTypes();
selectCusServices();
selectRoomTypes();
selectAddress();