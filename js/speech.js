const synth = window.speechSynthesis;

function speak(btn) {
    if (synth.speaking) {
        console.error("speechSynthesis.speaking");
        return;
    }

    let callsign = $(btn).val();
    const utterThis = new SpeechSynthesisUtterance(callsign);
    synth.speak(utterThis);
}