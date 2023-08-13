
function writeCards(names, saying) {
    let messages = []
    for (let i =0; i < names.length ; i++) {
        messages.push(`Thank you, ${names[i]}, for the wonderful ${saying} gift!`)
    console.log(messages);

}
return messages; 
//console.log(writeCards(names, "surprise"))
}



function countDown(number) {
while (number >= 0) {
    console.log(number--);
}

}
