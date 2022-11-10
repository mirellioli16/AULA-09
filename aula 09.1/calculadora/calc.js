// criando uma calculadora
function calculadora(){
    //definindo as operações e pegando valor de entrada do usuário
    //usaremos o "\n"
    const operacao = Number(prompt('Escolha uma opção:\n 1 - soma (+)\n 2 - subtração (-)\n 3 - multiplicação (*)\n 4 - divisão real (/)\n 5 - divisão inteira (%)\n 6 - potenciação (**)'));



    //verificando se a operação é válida
    if (!operacao || operacao >=7) {
        alert('erro - operação Inválida!');
        calculadora();
    } else{
    //definifo variáveis - todas as entradas devem ser tipo Number
     let n1 = Number(prompt('Insira o primeiro valor: '));
     let n2 = Number(prompt('Insira p segundo valor: '));
     let resultado;
    //verificando se as variáveis são válidas
    if (!n || !n2) {
        alert('erro - parâmetros inválidas!');
        calculadora();

    } else {
        //definindo as funções 
        function soma() {
            resultado = n1 + n2;
            //mostrando o resultado usando template strings
            alert(`${n1}) + ${n2} = ${resultado}`);
            //dando a opção de chamar uma nova operação
            novaOperacao();
        }
        function subtração() {
            resultado = n1 + n2;
            // mostrando o resultado usando template strings
            alert(`${n1} - ${n2} = ${resultado}`);
            // dando a opção de chamar uma nova operação 
            novaOperacao();
        }
        function multiplicação() {
            resultado = n1 * n2;
            // mostrando o resultado usando template strings
            alert(`${n1} - ${n2} = ${resultado}`);
            // dando a opção de chamar uma nova operação
            novaOperacao();
        }
        function divisãoReal(){
            resultado = n1 / n2;
            //mostrando o resultado usando template strings
            alert(`${n1} / ${n2} = ${resultado}`);
            // dando a opção de chamar uma nova operação

        }
        function divisãoInteira() {
            resultado = n1 % n2;
            // mostrando o resultado usando template strings
            alert(`o resto da divisao entre ${n1} e % ${n2} é igual $`);
            // dando a opção de chamar uma nova operação
            novaOperacao();
        }
        function potenciacao() {
            resultado = n1 ** n2;[]
            // mostrando o resultado usando template strings
            alert(`${n1} elevado à ${n2} ª potêcia é ${resultado}`);
            // dando a opção de chamar uma nova operação
            novaOperacao();
             }
             // nova operação
             function novaOperacao (){
                let opcao = prompt(`Deseja fazer outra operação?/n 1 - sim/n 2 - não`);
                if (opcao == 1) {
                    calculadora();
                
                }else if (opcao == 2){
                    alert('até mais!')
                
                }else {
                    alert('digite uma opção válida!');
                    novaOperacao();
                }
             }
        }
    }

// escolhendo uma operação
// usando if && else
if (operando == 1) {
    soma();
}else if  (operacao == 2) {
    subtracao () ;

}else if  (operacao == 3 ){
     multiplicação();
}else if  (operacao == 4) {
    divisaoReal ();
}else if  (operacao == 5) {
    divisãoInteira();
}else if  (operacao == 6) {
    potenciacao();

}
 
// usando switch case como alternativa (comentar um dos dois)
/*
switch (operacao){
case1:
    soma()
    break;

case2
   subtração();
   breack;
case3 
   multiplicaçao();
case4
   divisaoReal()
   break;
case5
   divisaoInteira()
   break;
case6
   potenciacao();
   break;
} */

}
calculadora();
