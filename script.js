let name = prompt("Welcome to GC mini golf! What is your name?");
let holes = prompt(`Hi, ${name}! Would you like to play 3 or 6 holes today`);
let total = 0;
let par = holes * 3; 

if ((holes < 3) || (holes > 6)) {
    alert ("Please choose 3 or 6");
} else if ((holes > 3) && (holes <6)) {
    alert ("Please choose 3 or 6");
} else {
    
    for (var i = 0; i < holes; i++) {
        let score = (prompt(`How many putts for hole ${i + 1}? (par is 3)`));
        total += parseInt(score);
    }
    
}

if (total > par) {
    console.log(`Nice try, ${name}... Your total par was: ${total - par}.`);
} else if (total < par) {
    console.log(`Great job, ${name}! Your total par was: ${total - par}.`);
} else {
    console.log(`Good game, ${name}. Your total par was: 0.`);
}
