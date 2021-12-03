// pre-história: 100.000 AC
// idade antiga: 4000 AC
// idade média: 476 DC
// idade moderna: 1463 DC
// idade contemporânea: 1789 DC

function determinaPeriodo(ano: number, era?: string): string {
    let sigla = era === "AD" ? "AD" : "DC";
    let periodo: Periodo;
    if (ano < 0) return "O ano deve ser positivo. Caso queira se referir a um período anterior a 0 DC, usar a sigla \"AD\".";
    if (ano > 100000 && era === "AD") return "Período inválido."
    if (ano > 4000 && era === "AD") periodo = Periodo.PREHISTORIA;
    else if (era === "AD" || ano < 476) periodo = Periodo.ANTIGA;
    else if (ano < 1462) periodo = Periodo.MEDIA;
    else if (ano < 1789) periodo = Periodo.MODERNA;
    else periodo = Periodo.CONTEMPORANEA;
    return `O ano de ${ano} ${sigla} pertence ao período da ${periodo}.`
}

enum Periodo {
    PREHISTORIA = "pré-história",
    ANTIGA = "idade antiga",
    MEDIA = "idade média",
    MODERNA = "idade moderna",
    CONTEMPORANEA = "idade contemporânea"
}

// testes
console.log(determinaPeriodo(100000, "AD")); // pre-hist
console.log(determinaPeriodo(100001, "AD")); // erro
console.log(determinaPeriodo(4001, "AD")); // pre-hist
console.log(determinaPeriodo(-4001, "AD")); // erro
console.log(determinaPeriodo(4000, "AD")); // antig
console.log(determinaPeriodo(3999, "AD")); // antig
console.log(determinaPeriodo(0, "DC")); // antig
console.log(determinaPeriodo(0)); // antig
console.log(determinaPeriodo(1, "DC")); // antig
console.log(determinaPeriodo(1)); // antig
console.log(determinaPeriodo(475, "DC")); // antig
console.log(determinaPeriodo(476, "DC")); // media
console.log(determinaPeriodo(477, "DC")); // media
console.log(determinaPeriodo(1462, "DC")); // media
console.log(determinaPeriodo(1463, "DC")); // moderna
console.log(determinaPeriodo(1463)); // moderna
console.log(determinaPeriodo(1788, "DC")); // moderna
console.log(determinaPeriodo(1788)); // moderna
console.log(determinaPeriodo(1789, "DC")); // contemp
console.log(determinaPeriodo(1789)); // contemp
console.log(determinaPeriodo(2021, "DC")); // contemp
console.log(determinaPeriodo(2021)); // contemp