import Transaction from "./Transaction";

class UserAccount {
  private cpf: string;
  private name: string;
  private age: number;
  private balance: number = 0;
  private transactions: Transaction[] = [];

  constructor(
    cpf: string,
    name: string,
    age: number,
  ) {
    console.log("Chamando o construtor da classe UserAccount")
    this.cpf = cpf;
    this.name = name;
    this.age = age;
  }

  public getCpf(): string {
    return this.cpf;
  }

  public getName(): string {
    return this.name;
  }

  public getAge(): number {
    return this.age;
  }

  public getBalance(): number {
    return this.balance;
  }

  public getTransactions(): Transaction[] {
    return this.transactions;
  }

  public setTransaction(transaction: Transaction): void {
    this.transactions.push(transaction);

    this.balance += transaction.getValue();
  }
}

export default UserAccount;