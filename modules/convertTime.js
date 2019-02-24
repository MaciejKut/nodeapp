function convertTime(arg) {
    var h = Math.floor(arg / 3600);
    var m = Math.floor((arg - h * 3600) / 60);
    var s = (arg - h * 3600) % 60;
    console.log(h + ' godz. ' + m + ' min. ' + s + ' sek.')
}

exports.time = convertTime;