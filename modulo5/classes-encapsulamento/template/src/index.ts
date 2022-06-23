/**
 ==================================Exercício 1=======================================

 a) Atribuir os valores passados às propriedades da classe ao criar uma instância usando essa classe.

 b) Uma vez.

 c) Criando funções públicas.

 */

 class UserAccount {
    private cpf: string;
    private name: string;
    private age: number;
    private balance: number = 0;
    private transactions: Transaction[] = [];

    public getUser(): any{
        return [this.age, this.cpf, this.name, this.transactions]
    }
    public getName(): string{
        return this.name
    }
    public addTransaction(transaction: Transaction){
        this.transactions.push(transaction)
    }
    public setAge(newAge: number) : any{
        return this.age = newAge
    }
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
}

let usuario: UserAccount = new UserAccount("123", "User1", 33)
usuario.setAge(34)


// ==================================Exercício 2======================================= 

class Transaction {
    private description: string;
    private value: number;
    private date: string;
  
    constructor(
      description: string,
      value: number,
      date: string
    ) {
      this.description = description;
      this.value = value;
      this.date = date;
    }
  
    public getDescription(): string {
      return this.description;
    }
  
    public getValue(): number {
      return this.value;
    }
  
    public getDate(): string {
      return this.date;
    }
  }


// ==================================Exercício 3======================================= 

  class Bank {
    private accounts: UserAccount[] = [];
  
    public getAccounts(): UserAccount[] {
      return this.accounts;
    }
  
    public addAccount(account: UserAccount): void {
      this.accounts.push(account);
    }
  }