const faturamento = [
    {
    estado: "SP",
    valor: 67836.43,
    },
    {
    estado: "RJ",
    valor: 36678.66,
    },
    {
    estado: "MG",
    valor: 29229.88,
    },
    {
    estado: "ES",
    valor: 27165.48,
    },
    {
    estado: "Outros",
    valor: 19849.53,  
    }
]

let faturamentoTotal = 0

// Calcula faturamento Total
Object.keys(faturamento).forEach(function(item){
    
    faturamentoTotal += faturamento[item].valor
    
})  

// Calcula porcentagem por estado
Object.keys(faturamento).forEach(function(item) {
    
    let faturamentoPercEstado = (100 * faturamento[item].valor) / faturamentoTotal
    
    console.log(`${faturamento[item].estado} - ${faturamentoPercEstado.toFixed(2)}% do faturamento total`)
    
})    

// Formata faturamento total para real
faturamentoTotal = faturamentoTotal.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });


console.log(`Faturamento total: ${faturamentoTotal}`)
