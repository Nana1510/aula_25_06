class Produto{
    constructor(nome, preco) {
        this.nome = nome ;
        this.preco = preco ;
    }


exibirProduto() {
       console.log (`Produto: ${this.nome} | Preço: ${this.preco}`);

    }
}
const morango = new Produto ("Morango", 10.00);
morango.exibirProduto();


const cereja = new Produto ("Cereja", 4.00);
cereja.exibirProduto();