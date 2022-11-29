var calc = document.getElementById("id-calc");
var nome;
var altura;
var peso;
var imc;

calc.addEventListener("click", function() {
    nome = document.getElementById("id-nome").value;
    altura = document.getElementById("id-altura").value;
    peso = document.getElementById("id-peso").value;



    imc = peso / Math.pow(altura, 2);

    console.log(imc);
    result(imc);
});

function result(imcValue) {
    document.getElementById("pesoInf").innerHTML = `Peso: ${peso}`;
    document.getElementById("alturaInf").innerHTML = `Altura: ${altura}`;

    if(imcValue < 18.5){
        document.getElementById("imcRes").innerHTML = "Resultado IMC: "+imcValue.toFixed(1)+". - Abaixo do peso";
        document.getElementById("pesoBaixo").style.display = "block";
    }else if(imcValue >= 18.5 && imcValue < 25 ){
        document.getElementById("imcRes").innerHTML = "Resultado IMC: "+imcValue.toFixed(1)+". - Peso normal";
        document.getElementById("pesoNormal").style.display = "block";
    }else if(imcValue >= 25 && imcValue < 30){
        document.getElementById("imcRes").innerHTML = "Resultado IMC: "+imcValue.toFixed(1)+". - Acima do peso";
        document.getElementById("acimaPeso").style.display = "block";
    }else if(imcValue >= 30 && imcValue < 35){
        document.getElementById("imcRes").innerHTML = "Resultado IMC: "+imcValue.toFixed(1)+". - Obesidade";
        document.getElementById("obesidade").style.display = "block";
    }else{
        document.getElementById("imcRes").innerHTML = "Resultado IMC: "+imcValue.toFixed(1)+". - Obesidade extrema";
        document.getElementById("obesidadeEx").style.display = "block";
    }

    var minIdeal = Math.pow(altura,2) * 18.5;
    var maxIdeal = Math.pow(altura,2) * 24.9;

    document.getElementById("pesoMinIdeal").innerHTML = "Peso Mínimo Ideal para a altura informada: "+minIdeal.toFixed(1)+"."
    document.getElementById("pesoMaxIdeal").innerHTML = "Peso Máximo Ideal para a altura informada: "+maxIdeal.toFixed(1)+"."
}