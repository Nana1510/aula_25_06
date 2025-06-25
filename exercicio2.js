function Aluno (nome, matricula){
    this.nome = nome
    this.matricula = matricula
}
Aluno.prototype.mostrarDados = function(){
    console.log (`aluno: ${this.nome} | matrícula: ${this.matricula}`);
};
const nana = new Aluno ("nana", 1134567)
nana.mostrarDados();

const Ygor = new Aluno ("Ygor", 1321345)
Ygor.mostrarDados();