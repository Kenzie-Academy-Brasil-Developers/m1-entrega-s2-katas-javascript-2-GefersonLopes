function add(x,y){
    return x+y;
};
//console.log(add(2,4))

function multiply(a,b){
    let valor=0;
    for(let i=0;i<b;i++){
      valor=add(a,valor);  
    }
    return valor;
}
//console.log(multiply(6,8))

function power(x,n){
    let saida=1;
    for(let i=0;i<n;i++){
        saida=multiply(x,saida);
    }
    return saida;
}
//console.log(power(2,8))

function factorial(g){
    let fatorial=1;
    for(let i=g;i>0;i--){
        fatorial=multiply(i,fatorial);
    }
    return fatorial;
}
//console.log(factorial(4))

function fibonacci(numero){
    return numero<1? 0: numero<=2?1:add(fibonacci(numero-1),fibonacci(numero-2));
}
//console.log(fibonacci(4))