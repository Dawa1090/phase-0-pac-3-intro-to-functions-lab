function shout(msg) {
    let final = msg.toUpperCase();
    return final;   
}


function whisper(end) {
    let final = end.toLowerCase();
    return final;
}


function logShout(string) {
    let final = string.toUpperCase();
    console.log (final);
}

function  logWhisper(hype){
    let final = hype.toLowerCase();
    console.log (final);

}

function sayHiToHeadphonedRoommate(string){
    // string = Hi
    // final = hi
    // upper = HI
    let lower = string.toLowerCase();
    let upper = string.toUpperCase();
    let dinner = "Let's have dinner together!";
    if (string === lower) { 
        return "I can't hear you!"; 
    } else if (string === upper) {
        return "YES INDEED!";
    }else if (string === dinner){
        return "I would love to!";
    }
    
}
