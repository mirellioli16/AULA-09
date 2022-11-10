// tipos de funçoes
// função declarativa
/* deve ser declarada usando a palavra reservada fuction seguida
do nome da função, parênteses "()" e chaves "{}"
*/
function nomeDaFuncao() {
       alert('Sou uma função declarativa');
}
// devemos chamar a função para ver o resultado
nomeDaFuncao();

// expressão de função - são funções atribuídas à expressões
// a nomeação é opcional

// com nomeação
var nomeDaFuncao = function nomeDaFuncao() {
    alert('Sou uma expressão de função nomeada!');

}
// arrow function 
/*função de expressão de sintaxe curta, sempre anônima,
não pode ser nomeada - deve ser declarada com parênteses "()",
seguido de "=>" e depois "{}" 
*/
var funcao = () => {
     alert('Sou uma função anônima!');
}

nomeDaFuncao();
nomeDefuncao2();
funcao();
