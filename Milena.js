var synth = window.speechSynthesis;

function speak(text){
    var utterThis = new SpeechSynthesisUtterance(text);
    utterThis.pitch = 1; //тон
    utterThis.rate = 1; //скорость
    synth.speak(utterThis);
}