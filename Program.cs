using System;

class BankAccount {
    private double _balance;
    private string _accountNumber;
    public string AccountNumber => _accountNumber;
    public Guid Id { get; private set; } = Guid.NewGuid();

    public BankAccount(string owner, string accountNumber)
    {
        if (string.IsNullOrEmpty(owner) || owner.Length < 2)
        {
            Console.WriteLine("Invalid owner.");
        }

        if (string.IsNullOrEmpty(accountNumber) || accountNumber.Length < 5)
        {
            Console.WriteLine("Invalid account number.");
        }

        _accountNumber = accountNumber;
    }

    

    public void Deposit(double amount)
    {

        if (amount <= 0)
        {
            Console.WriteLine("The deposit amount must be greater than 0");
        }
        else
        {
            _balance += amount;
        }
    }

    public void Withdraw(double amount)
    {

        if (amount <= 0)
        {
            Console.WriteLine("The withdrawal amount must be greater than 0.");
        }

        else if (amount > _balance)
        {
            Console.WriteLine("Insufficient balance.");
        }

        else
        {
            _balance-= amount;
        }

    }

    public double GetBalance()
    {
        return _balance;
    }
}

class Program
{
    static void Main()
    {
        BankAccount account = new BankAccount("Pedro","ACC-12345");
        
        Console.WriteLine("Id: "+ account.Id);
        Console.WriteLine(account.AccountNumber);

        account.Deposit(100);
        Console.WriteLine("Initial deposit: " + account.GetBalance());

        account.Withdraw(50);
        Console.WriteLine("Real balance: " + account.GetBalance());
    }
}