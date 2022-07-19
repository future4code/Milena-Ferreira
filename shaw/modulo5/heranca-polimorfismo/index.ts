import Customer from "./Customer";
import User from "./src/User";

// Exercício 1

// const user1 = new User("1", "tonico@gmail.com", "Tonico", "123456");
// console.log(user1);
// console.log("password", user1.password)

// a) *Seria possível imprimir a senha (`password`) atrelada a essa instância?*
// Não é possível imprimir user1.password, porque é uma propriedade privada. No entanto, quando imprimo o objeto inteiro, ela aparece.

// b) *Quantas vezes a mensagem `"Chamando o construtor da classe User"` foi impressa no terminal?*
// Uma vez


// Exercício 2
const customer1 = new Customer("2", "mia@gmail.com", "Mia", "654321", "1234567890");
// console.log(customer1);

// a) *Quantas vezes a mensagem `"Chamando o construtor da classe Customer"` foi impressa no terminal?*
// Uma vez

// b) *Quantas vezes a mensagem `"Chamando o construtor da classe User"` foi impressa no terminal? Por quê?*
// Uma vez, porque ela é chamada através do superconstrutor.

// Exercício 3

console.log(customer1.getId());
console.log(customer1.getEmail());
console.log(customer1.getName());
console.log(customer1.purchaseTotal);
console.log(customer1.getCreditCard());

// a) Seria possível imprimir a senha (password) atrelada a essa instância? Por quê?
// Não, porque é um atributo privado da classe e não existe getter para ele.
console.log(customer1.introduceYourself());