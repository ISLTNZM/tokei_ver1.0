function clock() {

    var getNowTime = new Date(),
        ye = getNowTime.getFullYear(),
        mo = getNowTime.getMonth(),
        da = getNowTime.getDate(),
        wdArr = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
        wd = wdArr[getNowTime.getDay()],

        hh = dispTime(getNowTime.getHours()),
        mm = dispTime(getNowTime.getMinutes()),
        ss = dispTime(getNowTime.getSeconds())

        printTime = hh + ":" + mm + ":" + ss,
        printCal = ye + "/" + (mo + 1) + "/" + da + "/" + wd;

    document.getElementById('dispClock').innerHTML = printTime;
    document.getElementById('dispCal').innerHTML = printCal;

}

function dispTime(num) {
    if (num <= 9) {
        num = "0" + num;
    }
    return num;
}

setInterval(function () {
    clock();
}, 1000);