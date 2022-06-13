export type statement = {
  value: number,
  date: Date,
  description: string
}

export type Account = {
  name: string,
  cpf: string,
  birthDate: Date,
  balance: number,
  statement: statement[]
}

export const accounts: Account[] = [
  {
    name: "Tchumi",
    cpf: "00000000001",
    birthDate: new Date("10/13/2014"),
    balance: 0,
    statement: [
      {
        value: 100,
        date: new Date("01/13/2022"),
        description: "depósito inicial"
      },
      {
        value: -50,
        date: new Date("01/13/2022"),
        description: "pgto conta luz"
      },
    ]
  },
  {
    name: "Mia",
    cpf: "00000000002",
    birthDate: new Date("03/01/2020"),
    balance: 0,
    statement: [
      {
        value: 300,
        date: new Date("01/01/2022"),
        description: "depósito inicial"
      },
      {
        value: -150,
        date: new Date("05/22/2022"),
        description: "compra MAC Cosmetics"
      },
    ]
  },
];