const calculator = {
    add: function(a, b){
        return (a + b);
   
    },
    minus: function(a, b){
        return (a - b);
     
    },
    div : function(a,b){
        return (a/b);
    },
    power: function(a,b){
        return (a**b); 
    },
    mul: function(a,b){
        return (a*b);
    },
};

const addResult = calculator.add(20,3);
const minusResult = calculator.minus(addResult, 5);
const divResult = calculator.div(minusResult, 10);
const powerResult = calculator.power(divResult, 50);
const mulResult = calculator.mul(powerResult, 20);