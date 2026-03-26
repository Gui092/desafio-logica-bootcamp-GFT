class infoHeroi {
    constructor(nome, idade, sexo, tipo, apelido) {
        this.nome = nome
        this.idade = idade
        this.sexo = sexo
        this.tipo = tipo
        this.apelido = apelido
    }

    atacar() {
        let ataque

        if (this.tipo === "Mago") {
            ataque = "magia"
        } else if (this.tipo === "Guerreiro") {
            ataque = "espada"
        } else if (this.tipo === "Monge") {
            ataque = "artes marciais"
        } else if (this.tipo === "Ninja") {
            ataque = "shuriken"
        }

    console.log(`O herói ${this.nome}, idade ${this.idade}, sexo ${this.sexo} ` + 
            `e classe ${this.tipo}. Atacou usando ${ataque}`);
    }
}

const jarno = new infoHeroi("Jarno Trulli", 34, "M", "Ninja", "Bruxo")

console.table(jarno)

jarno.atacar()