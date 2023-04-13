
let number = 10
let fib = [ 0, 1]

function fibonacci(number){
    for(let i = 0; i < number; i++) {
         fib.push(fib[fib.length -1] + fib[fib.length -2])  
    }
    if(fib.includes(number)){
        console.log(`O número ${number} pertence a sequência.`)
    }else{
        console.log(`O número ${number} não pertence a sequência.`)	
    }
}

fibonacci(number)

