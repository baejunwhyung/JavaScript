const age = parseInt(prompt("당신은 몇살 입니까?"));

if(isNaN(age)){
    console.log("숫자가 아닙니다 다시 입력해 주세요. ");
}else if(age < 20){
    console.log("아직 어리시네요 신분에 집중하세요!");
}else if(age >20 && age <= 50){
    console.log("술을 마셔도 되나, 건강을 위해 적당히 드시길 바랍니다.");
}else if(age >50 && age <= 70){
    console.log("건강만 합시다!");
}else if(age === 100){
    console.log("대단하시네요! 하지만 건강이 우선입니다!");
}else if(age >70){
    console.log("금주 하세요!");
}

