let commands = [
    {desc: 'Pushback with runway info', 'call': "<code>#callsign</code> <b>PUSHBACK APPROVED EXPECT RUNWAY</b> <code>#runway</code>"},
]
$(document).ready(function() {
    let html = '';

    commands.forEach((command) => {
        html += '<tr><td>' + command.desc + '</td><td>' + command.call + '</td></tr>'
    });

    $('#commands tbody').html(html);
});