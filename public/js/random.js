var interval = 5000;

//get current time
var starttime = new Date().getTime();

//function to assign lane to incoming car
function GetLane() {
    var i = 0;
    var c = 0;
    var lane = Math.floor(Math.random() * 89234879092);
    lane = lane % 3;
    if (lane == 0) {
        c = 10;
    } else if (lane == 1) {
        c = 0;
    } else {
        c = -10;
    }
    var pos = ["-100 0 " + c, "0 0 " + c, "50 0 " + c];
    return pos;
};

//this function is used to call incoming car
function callbackCar() {
    console.log('callback!');
    var pos = GetLane();
    var curve1 = document.getElementById('curve1');
    curve1.setAttribute("position", pos[0]);
    var curve2 = document.getElementById('curve2');
    curve2.setAttribute("position", pos[1]);
    var curve3 = document.getElementById('curve3');
    curve3.setAttribute("position", pos[2]);
    console.log(starttime);
    updatetime = new Date().getTime();
    console.log(updatetime);
    interval = 200+4000 * (Math.pow(0.55, ((updatetime - starttime) / 30000)));
    console.log("interval" + interval);
    loopdur = document.getElementById("moving-car");
    loopdur.setAttribute("alongpath", "curve: #track1; loop:true; triggerRadius:8; delay:0; dur:" + interval + ";");
    setTimeout(callbackCar, interval);
}

//used to generate coin
function callbackCoin() {
    console.log('callback coin!');
    var pos = GetLane();
    var curve1 = document.getElementById('coin1');
    curve1.setAttribute("position", pos[0]);
    var curve2 = document.getElementById('coin2');
    curve2.setAttribute("position", pos[1]);
    var curve3 = document.getElementById('coin3');
    curve3.setAttribute("position", pos[2]);
    loopdur = document.getElementById("coin");
    loopdur.setAttribute("alongpath", "curve: #track3; loop:true; triggerRadius:8; delay:0; dur:5000;");
    setTimeout(callbackCoin, 5000);
}

setTimeout(callbackCar, interval);
setTimeout(callbackCoin, 5000);
