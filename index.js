const gifts = ["teddy bear", "drone", "doll"];

function writeCards(names, events){
const messages = [];
for (let i = 0; i < names.length; i++){
    const thankYou = `Thank you, ${names[i]}, for the wonderful ${events} gift!`;
messages.push(thankYou);
}
return messages;
}

function countDown(){
    let i = 10;
    while (i >= 0){
        console.log(i--);
    }
    return countDown;
}