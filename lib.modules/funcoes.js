exports.mostrarTela = (valor) => {
    console.log(valor)
}

exports.imcresults = (p, a) => {
    let peso = p
    let altura = a / 100

    return (peso / (altura * altura)).toFixed(2)
}

exports.verificador = (valor) => {


    if(valor < 16){
       return ("Baixo peso (Grau 1)") // Valor 1
    }
    else if(valor >= 16 && valor <= 16.99){
        return("Baixo peso (Grau 2)") // Valor 2
    }
    else if(valor >= 17 && valor <= 18.49){
        return("Baixo peso (Grau 3)") // Valor 3
    }
    else if(valor >= 18.50 && valor <= 24.99){
        return("Peso adequeado") // Peso adequado
    }
    else if(valor >= 25 && valor <= 29.99){
        return("Sobrepeso") // Sobrepeso
    }
    else if(valor >= 30 && valor <= 34.99){
        return("Obesidade (Grau 1)") // Obesidade Grau 1
    }
    else if(valor >= 35 && valor <= 39.99){
        return("Obesidade (Grau 2)") // Obesidade Grau 2

    } else{
        return("Obesidade (Grau 3)") } // Obesidade Grau 3
}

exports.verificador2 = (valor) => {

    switch(valor){  // Laço de repetição Switch Case

        case valor < 16:
            return ("Baixo peso (Grau 1)")
        break;
        
        case valor >= 16 && valor <= 16.99:
            return ("Baixo peso (Grau 2)")
        break;

        case valor >= 17 && valor <= 18.49:
            return ("Baixo peso (Grau 3)")
        break;

        case valor >= 18.50 && valor <= 24.99:
            return ("Peso adequeado")
        break;

        case valor >= 25 && valor <= 29.99:
            return ("Sobrepeso")
        break;

        case valor >= 30 && valor <= 34.99:
            return ("Obesidade (Grau 1)")
        break;

        case valor >= 35 && valor <= 39.99:
            return ("Obesidade (Grau 2)")
        break;

        default:
            return ("Obesidade (Grau 3)")
        break
} 
}
