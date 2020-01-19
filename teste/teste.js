function diceRoller(dado){
    let rand = Math.random();
    const upper = Number(dado.slice(1))
    return Math.round(rand * (upper - 1) + 1);
}

for(i=0; i <= 10; i++){
    console.log(diceRoller('d2'))
}
