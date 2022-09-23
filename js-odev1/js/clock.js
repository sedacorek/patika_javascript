
let userName = prompt("Lütfen adınızı girin.")
document.getElementById("myName").innerHTML = userName

setInterval(showTime, 1000);
function showTime() {
    let time = new Date();
    let hour = time.getHours();
    let min = time.getMinutes();
    let sec = time.getSeconds();
    let weekday = [ 'Pazar', 'Pazartesi', 'Salı', 'Çarşamba', 'Perşembe', 'Cuma', 'Cumartesi']
    [new Date().getDay()]
    
  
    hour = hour < 10 ? "0" + hour : hour;
    min = min < 10 ? "0" + min : min;
    sec = sec < 10 ? "0" + sec : sec;
  
    let currentTime = hour + ":" 
            + min + ":" + sec + " " + weekday; 
  
    document.getElementById("myClock")
            .innerHTML = currentTime;
}
showTime();
