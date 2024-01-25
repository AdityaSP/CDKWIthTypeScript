export function goodMorning(){
    console.log("Morning");
}


export class Account {
  accName: string;
  balance: number;

  constructor(fullname: string, bal: number = 0) {
    console.log("Called this");
    this.accName = fullname;
    this.balance = bal;
  }

  print() {
    console.log("*****************");
    console.log("Holder: " + this.accName);
    console.log("Has Balance" + this.balance);
    console.log("*****************");
  }

  debit(money: number) {
    this.balance = this.balance - money;
  }

  credit(money: number) {
    this.balance = this.balance + money;
  }

  add(other: Account) {
    this.balance = this.balance + other.balance;
    other.balance = 0;
  }
}

export class SavingsAccount extends Account {

}
export class CurrentAccount extends Account {}