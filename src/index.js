const  { mostrarTela, imcresults, verificador, verificador2 } = require("../lib.modules/funcoes")
const { nomes } = require("../dados/nomes")

exports.playapp = () => { 

mostrarTela("-----------------------------------------")

for (let i = 0; i < nomes.length; i++){
    
    console.log (`[${nomes[i].id}] Nome: ${nomes[i].nome} | Peso: ${nomes[i].peso} | Altura: ${nomes[i].altura}`)
    console.log (`IMC: ${imcresults(nomes[i].peso, nomes[i].altura)}`)
    console.log (`${verificador2(imcresults(nomes[i].peso, nomes[i].altura))}`)
    console.log ("-----------------------------------------")
} }