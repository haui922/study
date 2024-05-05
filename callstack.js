function takeShower() {
    return "Showering";
}

function cookFood(){
    let items=["oatmeal","egg","protein Shake"];
    return items[Math.floor(Math.random()*items.length)];
}

function BreakFast(){
    let meal=cookFood();
    return `Eeating ${meal}`;
}

function WakeUp(){
    takeShower();
    BreakFast();
    console.log("ready to go to work");
}

WakeUp();