// Cria as características dos personagens
class Heroi {
    constructor(nomeHeroi, idadeHeroi, tipoHeroi) {
        this.nomeHeroi = nomeHeroi;
        this.idadeHeroi = idadeHeroi;
        this.tipoHeroi = tipoHeroi;
    }

    // Adiciona um método toString para formatar a representação da string
    escrever() {
        return `Nome: ${this.nomeHeroi}\nIdade: ${this.idadeHeroi}\nTipo: ${this.tipoHeroi}`;
    }
}

// Cria os 4 personagens
let doutorEstranho = new Heroi("Doutor Estranho", 46, "mago");
let mulherMaravilha = new Heroi("Mulher Maravilha", 25, "guerreiro");
let buda = new Heroi("Buda", 60, "monge");
let naruto = new Heroi("Naruto", 28, "ninja");

console.log("=========HEROIS=========");
console.log(doutorEstranho.escrever());
console.log("------------------------");
console.log(mulherMaravilha.escrever());
console.log("------------------------");
console.log(buda.escrever());
console.log("------------------------");
console.log(naruto.escrever());


// Cria as classes dos heróis
class Mago {
    constructor(classeHeroi, ataqueHeroi){
        this.classeHeroi = classeHeroi;
        this.ataqueHeroi = ataqueHeroi;
    }

    // Adiciona um método toString para formatar a representação da string
    escrever() {
        return `\n- ${this.classeHeroi} atacou usando ${this.ataqueHeroi}`;
    }
}

// Cria os parâmetros do Mago
let magia = "magia"; // Assumi que 'magia' é uma string válida
let mago = new Mago("Mago", magia);

console.log(mago.escrever()); // Adicionei parênteses para chamar o método

class Guerreiro {
    constructor(classeHeroi, ataqueHeroi){
        this.classeHeroi = classeHeroi;
        this.ataqueHeroi = ataqueHeroi;
    }

    // Adiciona um método toString para formatar a representação da string
    escrever() {
        return `\n- ${this.classeHeroi} atacou usando ${this.ataqueHeroi}`;
    }
}

// Cria os parâmetros do Guerreiro
let espada = "espada"; //string válida
let guerreiro = new Guerreiro("Guerreiro", espada);

console.log(guerreiro.escrever()); // Parênteses para chamar o método

class Monge {
    constructor(classeHeroi, ataqueHeroi){
        this.classeHeroi = classeHeroi;
        this.ataqueHeroi = ataqueHeroi;
    }

    // Adiciona um método toString para formatar a representação da string
    escrever() {
        return `\n- ${this.classeHeroi} atacou usando ${this.ataqueHeroi}`;
    }
}

// Cria os parâmetros do Monge
let artesMarciais = "artes marciais"; //string válida
let monge = new Monge("Monge", artesMarciais);

console.log(monge.escrever()); // Parênteses para chamar o método

class Ninja {
    constructor(classeHeroi, ataqueHeroi){
        this.classeHeroi = classeHeroi;
        this.ataqueHeroi = ataqueHeroi;
    }

    // Adiciona um método toString para formatar a representação da string
    escrever() {
        return `\n- ${this.classeHeroi} atacou usando ${this.ataqueHeroi}`;
    }
}

// Cria os parâmetros do Ninja
let shuriken = "shuriken"; //string válida
let ninja = new Ninja("Ninja", shuriken);

console.log(ninja.escrever()); // Parênteses para chamar o método
