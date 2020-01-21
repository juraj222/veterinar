var open_dubi = ['Zavřeno', '18–19', '18–19', '18–19', '18–19', '18–19', '18–19' ];
var open_duchcov = ['Zavřeno', '9–11, 14–16', '9–11, 14–16:30', '9–11, 14–16', '9–11, 14–16:30', '9–11, 14–16', 'Zavřeno' ];
var cz_week = ['neděle', 'pondělí', 'úterý', 'středa', 'čtvrtek', 'pátek', 'sobota'];
var actual_day = new Date().getDay();
document.getElementById("Dubi-today").innerHTML = open_dubi[actual_day];
document.getElementById("Duchcov-today").innerHTML = open_duchcov[actual_day];

function generateWeekOpeningHoursTable(nameVet) {
    var result = "<table>";
    for(i = 1; i < cz_week.length; i++) {
    	result += '<tr><td>' + cz_week[i] + '</td>' + '<td>' + nameVet[i] + '</td></tr>';
    }
    result += '<tr><td>' + cz_week[0] + '</td>' + '<td>' + nameVet[0] + '</td></tr>';
    return result += "</table>";
}
document.getElementById("dubi-week").innerHTML = generateWeekOpeningHoursTable(open_dubi);
document.getElementById("duchcov-week").innerHTML = generateWeekOpeningHoursTable(open_duchcov);