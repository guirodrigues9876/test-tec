
//captura o JSON
const dados = await fetch("./dados.json")
.then(response => {
    return response.json();
})

let menorFat = {dia: " ", valor: dados[0].valor}
let maiorFat = {dia: " ", valor: dados[0].valor}
let faturamentoTotal = 0
let diasUteis = 0    

Object.keys(dados).forEach(function(item) {

    const smaller = dados[item].valor < menorFat.valor && dados[item].valor != 0
	const bigger = dados[item].valor > maiorFat.valor 

    //verifica quantos dias com valor diferente de zero
	if(dados[item].valor != 0){
		faturamentoTotal += dados[item].valor
		diasUteis ++
	}

	//verifica qual o dia com menor faturamento
	if(smaller){
		menorFat.valor = dados[item].valor
		menorFat.dia = dados[item].dia	
	}

	//verifica qual o dia com maior faturamento
	if(bigger){
		maiorFat.valor = dados[item].valor
		maiorFat.dia = dados[item].dia	
	}

})

const media = faturamentoTotal / diasUteis
let dias = 0

// Número de dias no mês em que o valor de faturamento diário foi superior à média mensal.
Object.keys(dados).forEach(function(item){
	if(dados[item].valor > media){
		dias ++
	}
});


// formatando valores para real
 menorFat.valor = menorFat.valor.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});
 maiorFat.valor = maiorFat.valor.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});


console.log(`O menor faturamento foi no dia ${menorFat.dia} no valor de: ${menorFat.valor}`);
console.log(`O maior faturamento foi no dia ${maiorFat.dia} no valor de: ${maiorFat.valor}`);
console.log(`Em ${dias} dias o faturamento foi maior do que a média mensal`)