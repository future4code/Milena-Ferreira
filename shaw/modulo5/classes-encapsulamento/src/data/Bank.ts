import UserAccount from "./UserAccount";

class Bank {
  private accounts: UserAccount[] = [];

  constructor(accounts: UserAccount[]) {
    this.accounts = accounts;
  }

  public getAccounts(): UserAccount[] {
    return this.accounts;
  }

  public setAccounts(newAccount: UserAccount): void {
    this.accounts.push(newAccount);
  }
}

export default Bank;