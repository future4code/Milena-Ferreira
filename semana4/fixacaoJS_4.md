```
function contaOcorrencias(arrayDeNumeros, numeroEscolhido) {
  if (arrayDeNumeros.includes(numeroEscolhido)) {
    let contador = 0;
    for (numero of arrayDeNumeros) {
      if (numero === numeroEscolhido)
        contador++;
    }
    return `O número ${numeroEscolhido} aparece ${contador}x`;
  } else {
    return "Número não encontrado";
  }
}
```