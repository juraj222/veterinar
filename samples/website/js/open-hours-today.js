var open_dubi = ['Zavřeno', '18–19', '18–19', '18–19', '18–19', '18–19', '18–19' ];
var open_duchcov = ['Zavřeno', '9–11, 14–16', '9–11, 14–16:30', '9–11, 14–16', '9–11, 14–16:30', '9–11, 14–16', 'Zavřeno' ];
var cz_week = ['neděle', 'pondělí', 'úterý', 'středa', 'čtvrtek', 'pátek', 'sobota'];
var actual_day = new Date().getDay();
document.getElementById("Dubi-today").innerHTML = open_dubi[actual_day];
document.getElementById("Duchcov-today").innerHTML = open_duchcov[actual_day];

function generateWeekOpeningHoursTable(nameVet) {
    var result = "<table border=\"1\">";
    for(i = 1; i < cz_week.length; i++) {
    	result += getTableLine(i, nameVet);
    }
    result += getTableLine(0, nameVet);
    return result += "</table>";
}
function getTableLine(num, nameVet){
    if(nameVet[num].split(",").length > 1){
        return '<tr><td>' + cz_week[num] + '</td><td>' + nameVet[num].split(",")[0] + '</td>' + '<td>' + nameVet[num].split(",")[1] + '</td></tr>';
    }
    return '<tr><td>' + cz_week[num] + '</td>' + '<td colspan="2">' + nameVet[num] + '</td></tr>';
}
document.getElementById("dubi-week").innerHTML = generateWeekOpeningHoursTable(open_dubi);
document.getElementById("duchcov-week").innerHTML = generateWeekOpeningHoursTable(open_duchcov);