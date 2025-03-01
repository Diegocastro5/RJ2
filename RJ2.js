function Cliente (nome, telefoneCelular, email, endereco) { //funcao construtora para cliente
    this.nome = nome;
    this.telefoneCelular = telefoneCelular;
    this.email = email;
    this.endereco = endereco;

    this.getNome = function() {
        return this.nome;
    }
    this.setNome = function(nome) {
        this.nome = nome;
    }
    this.getNomeMaiusculo = function() {
        return this.nome.toUpperCase();
    }
    this.getNomeMinusculo = function() {
        return this.nome.toLowerCase();
    }
    this.getDescricao = function() {
        return `----------\nInformaçãoes do Cliente:\n${this.nome}\n-----------------\nTelefone:\nDDD: ${this.telefoneCelular.getDDD()}\nNúmero: ${this.telefoneCelular.getNumero()}\n--------------------\nEndereco:\n${this.endereco.getDescricao()}`;

    }
}
function TelefoneCelular(ddd, numero) { //funcao construtora para telefone celular
    this.ddd = ddd;
    this.numero = numero;

    this.getDDD = function() {
        return this.ddd;
    }
    this.setDDD = function(ddd) {
        this.ddd = ddd;
    }
    this.getNumero = function(){
        return this.numero;
    }
    this.setNumero = function(numero) {
        this.numero = numero;
    }
}

function Endereco(estado, cidade, rua, numero) { // funcao construtora para endereco
    this.estado = estado;
    this.cidade = cidade;
    this.rua = rua;
    this.numero = numero;

    this.getDescricao = function() {
        return `Rua: ${this.rua}\nNúmero: ${this.numero}\nCidade: ${this.cidade}\nEstado: ${this.estado}`;
    }
}

   //criando instancias de objetos
let telefone1 = new TelefoneCelular('11', '999999999');
let endereco1 = new Endereco('SP', 'São Paulo', 'Av. Paulista', '987');
let cliente1 = new Cliente('Carlos Conrado Heinz', telefone1, 'carlos.conrado@app.com', endereco1);

console.log(cliente1.getDescricao());

   //funcao para ordenar clientes por nome
function ordenarClientes(clientes) {
    return clientes.sort((a, b) => a.getNome().localeCompare(b.getNome()));
}


let telefone2 = new TelefoneCelular('21', '9777777777');
let endereco2 = new Endereco('RJ', 'Rio de Janeiro', 'Rua Ipanema', '666');
let cliente2 = new Cliente('Maria Paula Santos', telefone2, 'maria.paula@app.com', endereco2);
console.log(cliente2.getDescricao());


let telefone3 = new TelefoneCelular('31', '966666666');
let endereco3 = new Endereco('PR', 'Santo Antonio do Pinhao', 'Rua Curitiba', '123');
let cliente3= new Cliente('Joao Fonseca', telefone3, 'joao.pe@app.com', endereco3);
console.log(cliente3.getDescricao());


let telefone4 = new TelefoneCelular('41', '955555555');
let endereco4 = new Endereco('MS', 'Cuiaba', 'Rua Mato Pequeno', '3333');
let cliente4 = new Cliente('Luan da Mata', telefone4, 'luan.matao@app.com', endereco4);
console.log(cliente4.getDescricao());


let listaClientes = [cliente1, cliente2, cliente3, cliente4];
let clientesOrdenados = ordenarClientes(listaClientes);

console.log(clientesOrdenados.map(cliente => cliente.getNome()));
