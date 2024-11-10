// {desc: '', 'call': ''}
let commands = [
    {desc: 'Pushback with runway info', 'call': "<code>#callsign</code> PUSHBACK APPROVED EXPECT RUNWAY <code>#runway</code>"},
    {desc: 'Taxi to certain intersection', 'call': '<code>#callsign</code> TAXI AND HOLD AT INTERSECTION <code>#taxiway1</code> AND <code>#taxiway2</code>'},
    {desc: 'Taxi to certain taxiway', 'call': '<code>#callsign</code> HOLD SHORT OF TAXIWAY <code>#taxiway1</code>'},
    {desc: 'Approve for line up after next landing aircraft', 'call': '<code>#callsign</code> RUNWAY <code>#runway</code> LINE UP BEHIND NEXT LANDING AIRCRAFT'},
    {desc: 'Contact departure with takeoff', 'call': '<code>#callsign</code> RUNWAY <code>#runway</code> CLEARED FOR TAKEOFF ON REACHING ALTITUDE <code>#number</code> CONTACT DEPARTURE'},
    {desc: 'Arrival and taxi with taxiways and cross', 'call': '<code>#callsign</code> TAXI TO TERMINAL VIA <code>#taxiway1</code> <code>#taxiway2</code> CROSS RUNWAY <code>#runway</code>'},
]
$(document).ready(function() {
    let html = '';

    commands.forEach((command) => {
        html += '<tr class="py-2"><td>' + command.desc + '</td><td>' + command.call + '</td></tr>'
    });

    $('#commands tbody').html(html);
});