
import gtts from "better-node-gtts";

function SpeakText(text) {

    console.log('Starting work');

    var filepath = './Hello_World-bgtts.wav';

    var toSpeak = text;

    gtts.save(filepath, 'Hello World. Programmed to speak and not to feel. Not even sure that this is real.', function() {
        console.log('save done');
    })

    var voice = new Audio("Hello_World-bgtts.wav");

    voice.play();

}

export {SpeakText}