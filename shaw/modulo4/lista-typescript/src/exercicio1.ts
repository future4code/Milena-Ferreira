function createsMessage (name: string, birthDate: string) : string  {
    const splitBirthDate : string[] = birthDate.split("/")
    const day : string = splitBirthDate[0];
    let month : string = splitBirthDate[1];
    const year : string = splitBirthDate[2];

    switch(month) {
        case '01':
            month = 'janeiro';
            break;
        case '02':
            month = 'fevereiro';
            break;
        case '03':
            month = 'março';
            break;
        case '04':
            month = 'abril';
            break;
        case '05':
            month = 'maio';
            break;
        case '06':
            month = 'junho';
            break;
        case '07':
            month = 'julho';
            break;
        case '08':
            month = 'agosto';
            break;
        case '09':
            month = 'setembro';
            break;
        case '10':
            month = 'outubro';
            break;
        case '11':
            month = 'novembro';
            break;
        case '12':
            month = 'dezembro';
            break;
        default:
            month = 'error'
    }

    return `Olá me chamo ${name}, nasci no dia ${day} do mês de ${month} do ano de ${year}`  
}

console.log(createsMessage("Milena", "06/08/1992"));