var open_dubi = [ '18–19', '18–19', '18–19', '18–19', '18–19', '18–19', 'Zavřeno'  ];
var open_duchcov = [ '9–11 14–16', '9–11 14–16:30', '9–11 14–16', '9–11 14–16:30', '9–11 14–16', 'Zavřeno', 'Zavřeno' ];
var cz_week = ['pondělí', 'úterý', 'středa', 'čtvrtek', 'pátek', 'sobota', 'neděle'];
var actual_day = new Date().getDay();
document.getElementById("Dubi-today").innerHTML = open_dubi[actual_day-1];
document.getElementById("Duchcov-today").innerHTML = open_duchcov[actual_day-1];

var open_dubi = [ '18-16', '18-16', '18-16', '18-16', '18-19', '18-16', '18-16' ];
var open_duchcov = [ '18-16', '18-16', '18-16', '18-16', '18-19', '18-16', '18-16' ];
var cz_week = ['pondělí', 'úterý', 'středa', 'čtvrtek', 'pátek', 'sobota', 'neděle'];
var actual_day = new Date().getDay();
document.getElementById("Dubi-today").innerHTML = open_dubi[actual_day-1];
document.getElementById("Duchcov-today").innerHTML = open_duchcov[actual_day-1];

function generateWeekOpeningHoursTable(nameVet) {
    var result = "<table>";
    for(i = 0; i < cz_week.length; i++) {
    	result += '<tr><td>' + cz_week[i] + '</td>' + '<td>' + nameVet[i] + '</td></tr>';
    }
    return result += "</table>";
}
document.getElementById("dubi-week").innerHTML = generateWeekOpeningHoursTable(open_dubi);
document.getElementById("duchcov-week").innerHTML = generateWeekOpeningHoursTable(open_duchcov);