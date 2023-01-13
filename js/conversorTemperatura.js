let metricaOrigem, metricaDestino, valor, resultado;
const zeroKelvin = 273.15;

function actionConverterTemperaturas() {
	try {
		let elementoOrigem = document.getElementById("primeiraSelecaoTemperatura");
		let elementoDestino = document.getElementById("segundaSelecaoTemperatura");
		let elementoValor = document.getElementById("valor-digitado-temperatura");
		let elementoResultado = document.getElementById("resultado-temperatura");
		let tOrigem = elementoOrigem.value;
		let tDestino = elementoDestino.value;
		let vConverter = elementoValor.value;
		
		if(!!tOrigem || !!tDestino || !!vConverter){
			setaVariaveisGlobais(tOrigem, tDestino, vConverter);
		} else elementoResultado.value = "SELECIONA OS VALORES AI, ESPERTIN!";
		
		elementoResultado.value = retornaResultado();
	} catch(e) {
		console.log("erro ao tentar converter as temperaturas:" + e);
		alert("erro ao tentar converter as temperaturas:" + e);
	}
}

function actionTrocarValores() {
	try {
		let elementoOrigem = document.getElementById("primeiraSelecaoTemperatura");
		let elementoDestino = document.getElementById("segundaSelecaoTemperatura");
		let tOldOrigem = elementoOrigem.value;
		let tOldDestino = elementoDestino.value;
		elementoOrigem.value = elementoDestino.value;
		elementoDestino.value = tOldOrigem;
	} catch(e) {
		console.log(e);
		alert("erro ao trocar métricas de temperatura:" + e);
	}
}

function setaVariaveisGlobais(origem, destino, val){
	metricaOrigem = origem;
	metricaDestino = destino;
	valor = val;
	verificaMetricasConversao();
}

function retornaResultado(){ return resultado; }

function verificaMetricasConversao() {
	if(metricaOrigem == 'celsius'){
		verificaSegundaMetricaCelsius();
	} else if(metricaOrigem == 'fahrenheit'){
		verificaSegundaMetricaFahrenheit();
	} else if(metricaOrigem == 'kelvin'){
		verificaSegundaMetricaKelvin();
	}
}

function verificaSegundaMetricaCelsius(){
	if(metricaDestino == 'fahrenheit') celsiusToFahrenheit();
	else if (metricaDestino == 'kelvin') celsiusToKelvin();
}

function verificaSegundaMetricaFahrenheit(){
	if(metricaDestino == 'celsius') fahrenheitToCelsius();
	else if (metricaDestino == 'kelvin') fahrenheitToKelvin();
}

function verificaSegundaMetricaKelvin(){
	if(metricaDestino == 'fahrenheit') kelvinToFahrenheit();
	else if (metricaDestino == 'celsius') kelvinToCelsius();
}


function celsiusToKelvin(){
	resultado = valor + zeroKelvin; //temperatura em celsius + constante kelvin
}

function kelvinToCelsius(){
	resultado = valor - zeroKelvin; //temperatura em kelvin - constante kelvin
}

function celsiusToFahrenheit(){
	resultado = (valor * (9/5)) + 32; //valor vezes 9/5 depois + 32
}

function fahrenheitToCelsius(){
	resultado = (valor - 32) * 5/9; //valor - 32 depois vezes 5/9
}

function kelvinToFahrenheit(){
	resultado = (valor * 9/5) - 459.67;
}

function fahrenheitToKelvin(){
	resultado = (valor + 459.67) * 5/9;
}