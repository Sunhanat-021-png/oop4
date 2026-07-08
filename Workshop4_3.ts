class BankAccount {
    ownerName: string;
    balance: number;

    constructor(ownerName: string, balance: number) {
        this.ownerName = ownerName;
        this.balance = balance;
    }

    displayBalance(): void {
        console.log(`Account: ${this.ownerName}, Balance: $${this.balance}`);
    }

    deposit(amount: number): void {
        this.balance += amount;
        console.log(`Deposit: $${amount}`);
    }

    withdraw(amount: number): void {
        if (amount > this.balance) {
            console.log("Insufficient funds");
        } else {
            this.balance -= amount;
            console.log(`Withdraw: $${amount}`);
        }
    }
}

// Test
let bank1 = new BankAccount("Mix", 500);

bank1.displayBalance();

bank1.deposit(200);
bank1.displayBalance();

bank1.withdraw(1000);
bank1.displayBalance();