const nomeHeroi = "Guilherme"
let xpHeroi = 2340
let nivel = ""

if (xpHeroi <= 1000) {
    nivel = "Ferro"
    console.log("O herói está precisando treinar mais para melhorar suas habilidades")
} else if (xpHeroi <= 2000) {
    nivel = "Bronze"
    console.log("O herói melhorou, mas ainda está precisando treinar mais para melhorar suas habilidades")
} else if (xpHeroi <= 5000) {
    nivel = "Prata"
    console.log("O herói está tomando um bom caminho! Logo chegará no seu objetivo")
} else if (xpHeroi <= 7000) {
    nivel = "Ouro"
    console.log("O herói está quase lá!")
} else if (xpHeroi <= 8000) {
    nivel = "Platina"
    console.log("Suas habilidades já estão incríveis")
} else if (xpHeroi <= 9000) {
    nivel = "Ascendente"
    console.log("Você já é um herói de elite!")
} else if (xpHeroi <= 10000) {
    nivel = "Imortal"
    console.log("Você já é um herói de elite e já pode liderar sua própria equipe!")
} else {
    nivel = "Radiante"
    console.log("Você se tornou o melhor herói que temos!")
}

const statusHeroi = {
    Nome: nomeHeroi,
    Experiencia: xpHeroi,
    Nivel: nivel,
};

console.table(statusHeroi);