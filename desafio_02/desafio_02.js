function eloDoJogador(vitorias, derrotas) {
    let saldoJogador = vitorias - derrotas
    let elo = ""
    let situacao = ""

    if (saldoJogador < 10) {
        elo = "Ferro"
    } else if (saldoJogador < 20) {
        elo = "Bronze"
    } else if (saldoJogador < 50) {
        elo = "Prata"
    } else if (saldoJogador < 80) {
        elo = "Ouro"
    } else if (saldoJogador < 90) {
        elo = "Diamante"
    } else if (saldoJogador < 100) {
        elo = "Lendário"
    } else {
        elo = "Imortal"
    }

    if (saldoJogador === 0) {
        situacao = "neutro"
    } else if (saldoJogador > 0) {
        situacao = "vitória(s)"
    } else {
        situacao = "derrota(s)"
    }

   const kdaHeroi = {
        Saldo: `${saldoJogador} ${situacao}`, 
        Elo: elo
    };
    
    return console.table(kdaHeroi)
}

eloDoJogador(30, 6)
