using System;

class BankAccount {
    private double _balance;

    public Guid Id { get; private set; } = Guid.NewGuid();
    public string OwnerName { get; private set; }


    public BankAccount(string ownerName)
    {
        OwnerName = ownerName;
    }

    public void Deposit(double amount){

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
        BankAccount account = new BankAccount("Pedro");

        Console.WriteLine("Id: "+ account.Id);
        Console.WriteLine("Name: " + account.OwnerName);

        account.Deposit(100);
        Console.WriteLine("Initial deposit: " + account.GetBalance());

        account.Withdraw(50);
        Console.WriteLine("Real balance: " + account.GetBalance());
    }
}