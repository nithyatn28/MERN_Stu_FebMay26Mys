const out = document.getElementById("out");
function explain(code){
    if(code === 1) return "Permission denied";
    if(code === 2) return "Permission unavailable";
    if(code === 3) return "Request Timed out";
    return "unknown error";
}
document.getElementById("locationBtn").addEventListener("click",function(){
    if(!navigator.geolocation){
        "Geolocation is not supported in this browser"
    }
    out.textContent = "Requesting current location...";
    navigator.geolocation.getCurrentPosition(
        function(position){
            const data = {
                latitude: position.coords.latitude,
                longitude: position.coords.longitude,
                accuracy: position.coords.accuracy
            };
            console.log(data);
            out.textContent = JSON.stringify(data,null,2);
        },
        function(error){
            out.textContent = "error code: "+error.code+explain(error.code)+"message"+error.message;
        },
        {enableHighAccuracy:true,timeout:1000,maximumAge:0}
    );
});