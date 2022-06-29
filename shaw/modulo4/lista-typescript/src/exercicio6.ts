type cliente = {
  cliente: string,
  saldoTotal: number,
  debitos: number[]
}

function buscaClientesNegativados(clientes: cliente[]): cliente[] {
  clientes.forEach((cliente) => {
    cliente.saldoTotal -= cliente.debitos.reduce((a, b) => a + b, 0);
    cliente.debitos = []
  })

  return clientes.filter((cliente) => cliente.saldoTotal < 0);
}

console.log(buscaClientesNegativados([
  { cliente: "João", saldoTotal: 1000, debitos: [100, 200, 300] },
  { cliente: "Paula", saldoTotal: 7500, debitos: [200, 1040] },
  { cliente: "Pedro", saldoTotal: 10000, debitos: [5140, 6100, 100, 2000] },
  { cliente: "Luciano", saldoTotal: 100, debitos: [100, 200, 1700] },
  { cliente: "Artur", saldoTotal: 1800, debitos: [200, 300] },
  { cliente: "Soter", saldoTotal: 1200, debitos: [] }
]));