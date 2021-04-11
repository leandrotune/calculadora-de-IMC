// algoritmo calcular IMC

const botaoCalcular = document.querySelector("#botao-calcular");

botaoCalcular.addEventListener("click", function(event){
    event.preventDefault();

    const nome = document.querySelector("#nome").value;
    const altura = document.querySelector("#altura").value;
    const peso = document.querySelector("#peso").value;
    
    const resultado = peso / (altura * altura);

    const magreza = resultado < 18.5
    const normal = resultado >= 18.5 && resultado < 24.9
    const sobrepeso = resultado >= 25.0 && resultado < 29.9
    const obesidade = resultado >= 30.0 && resultado < 39.9
    const obesidadeGrave = resultado > 40.0
    
    const resultadoTexto = document.querySelector("#resultado-texto");

    if(magreza){
        resultadoTexto.textContent = `${nome} seu IMC é ${resultado.toFixed(2)} e você está abaixo do peso`
    }else if(normal){
        resultadoTexto.textContent =`${nome} seu IMC é ${resultado.toFixed(2)} e você está com o peso ideal`
    }else if(sobrepeso){
        resultadoTexto.textContent = `${nome} seu IMC é ${resultado.toFixed(2)} e você está com sobrepeso`
    }else if(obesidade){
        resultadoTexto.textContent = `${nome} seu IMC é ${resultado.toFixed(2)} e você está com obesidade`
    }else if(obesidadeGrave){
        resultadoTexto.textContent = `${nome} seu IMC é ${resultado.toFixed(2)} e você está com obesidade grave`
    }
})

// ${nome} seu IMC é ${resultado.toFixed(2)} e você está abaixo do peso`