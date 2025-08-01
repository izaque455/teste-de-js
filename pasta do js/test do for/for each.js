// ele tem como usar o intem, index, arry
// não sei onde vai usar mas parece bem legal vou deixa uma estrutura aqui em baixo

const users = [
    {name: 'izaque', age: 33, number: '11 90090-1906'},    
    {name: 'Eduardo', age: 43, number: '11 90806-2006'},
    {name: 'Maria', age: 19, number: '11 47909-6585'},
    {name: 'João', age: 66, number: '71 98654-2236'}
]

users.forEach( function (item, index){  // a function precisa ser colocada
    console.log(` ${index + 1})  Nome:${item.name}, Idade: ${item.age}, Telefone: ${item.number}`) // da um ctrl alt n para vc ver como fico bonito
    //console.log(item) //o item pega tudo
   // console.log(i)    // o i sig index que ele mostra os numeros de cada linha
    //console.log(array)// o array sig ele mostra que tem dentro do array tu que está la dentro
});
// ele é bem top parece né