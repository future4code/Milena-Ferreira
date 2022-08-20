import Customer from "./heranca/Customer";
import User from "./heranca/User";
import { Client } from "./polimorfismo/Client";
import { Commerce } from "./polimorfismo/Commerce";
import { Industry } from "./polimorfismo/Industry";
import { Place } from "./polimorfismo/Place";
import { Residence } from "./polimorfismo/Residence";

// EXERCÍCIOS DE HERANÇA

// Exercício 1

// const user1 = new User("1", "tonico@gmail.com", "Tonico", "123456");
// console.log(user1);
// console.log("password", user1.password)

// a) *Seria possível imprimir a senha (`password`) atrelada a essa instância?*
// Não é possível imprimir user1.password, porque é uma propriedade privada. No entanto, quando imprimo o objeto inteiro, ela aparece.

// b) *Quantas vezes a mensagem `"Chamando o construtor da classe User"` foi impressa no terminal?*
// Uma vez


// Exercício 2

// const customer1 = new Customer("2", "mia@gmail.com", "Mia", "654321", "1234567890");
// console.log(customer1);

// a) *Quantas vezes a mensagem `"Chamando o construtor da classe Customer"` foi impressa no terminal?*
// Uma vez

// b) *Quantas vezes a mensagem `"Chamando o construtor da classe User"` foi impressa no terminal? Por quê?*
// Uma vez, porque ela é chamada através do superconstrutor.

// Exercício 3

// console.log(customer1.getId());
// console.log(customer1.getEmail());
// console.log(customer1.getName());
// console.log(customer1.purchaseTotal);
// console.log(customer1.getCreditCard());

// a) Seria possível imprimir a senha (password) atrelada a essa instância? Por quê?
// Não, porque é um atributo privado da classe e não existe getter para ele.

// console.log(customer1.introduceYourself());

// EXERCÍCIOS DE POLIMORFISMO

// Exercício 1
// const client1: Client = {
//   name: "Whiskas",
//   registrationNumber: 123,
//   consumedEnergy: 120,
//   calculateBill: () => {
//     return 2;
//   }
// }

// console.log(client1.name);
// console.log(client1.registrationNumber);
// console.log(client1.consumedEnergy);
// console.log(client1.calculateBill());

// a) Quais propriedades você conseguiu imprimir? Teve alguma que não foi possível? Por que isso aconteceu?
// Consegui imprimir todas poque nenhuma delas foi declarada como "private"

// Exercício 2

// const place1 = new Place;

// a) Mesmo sabendo que não é possível, tente criar uma instância dessa classe (ou seja: new Place(...)). Qual foi o erro que o Typescript gerou?
// Cannot create an instance of an abstract class.

// b) Pense e responda: o que precisaríamos fazer para conseguir efetivamente criar uma instância dessa classe?
// Implementa-la em uma classe e criar uma instância dessa classe filha.

const residence = new Residence(3, "30642400");
console.log(residence.getCep());

const commerce = new Commerce(2, "30642050");
console.log(commerce.getCep());

const industry = new Industry(5, "30642500");
console.log(industry.getCep());