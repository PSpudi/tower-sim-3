let letterCode1 = [
    'ALPHA', 'BRAVO', 'CHARLIE', 'DELTA', 'ECHO', 'FOXTROT', 'GOLF', 'HOTEL', 'INDIA',
];
let letterCode2 = [
    'JULIET', 'KILO', 'LIMA', 'MIKE', 'NOVEMBER', 'OSCAR', 'PAPA', 'QUEBEC', 'ROMEO'
];
let letterCode3 = [
    'SIERRA', 'TANGO', 'UNIFORM', 'VICTOR', 'WHISKEY', 'X-RAY', 'YANKEE', 'ZULU',
];

$(document).ready(function() {
    let html1 = '';
    letterCode1.forEach((letterCode) => {
        html1 += '<tr><td class="badge bg-primary-subtle border border-primary-subtle text-primary-emphasis rounded-pill w-100">' + Array.from(letterCode)[0] + '</td>' +
            '<td class="px-1">' + letterCode + '</td></tr>';
    })
    $('#first-col-letter-code tbody').html(html1);

    let html2 = '';
    letterCode2.forEach((letterCode) => {
        html2 += '<tr><td class="badge bg-warning-subtle border border-warning-subtle text-warning-emphasis rounded-pill w-100">' + Array.from(letterCode)[0] + '</td>' +
            '<td class="px-1">' + letterCode + '</td></tr>';
    })
    $('#second-col-letter-code tbody').html(html2);

    let html3 = '';
    letterCode3.forEach((letterCode) => {
        html3 += '<tr><td class="badge bg-info-subtle border border-info-subtle text-info-emphasis rounded-pill w-100">' + Array.from(letterCode)[0] + '</td>' +
            '<td class="px-1">' + letterCode + '</td></tr>';
    })
    $('#third-col-letter-code tbody').html(html3);
});