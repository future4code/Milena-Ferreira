import UserAccount from "./data/UserAccount";
import Transaction from "./data/Transaction";

// Exercício 1

// a)
// O construtor serve para que atributos privados possam ser modificados de fora da
// classe. Garante que determinados atributos sejam obrigatoriamente preenchidos
// para que o objeto seja criado.

// b) A mensagem é impressa uma vez
const user1 = new UserAccount("12345678977", "Baguera", 2);

// c) com métodos getters e setters

// Exercício 2
const transaction1 = new Transaction("depósito", 100, "11/07/2022");

user1.setTransaction(transaction1);

console.log("linha 21", user1.getTransactions());

const transaction2 = new Transaction("saque", 50, "11/07/2022");

user1.setTransaction(transaction2);

console.log("linha 27", user1.getTransactions());