using System;

class BankAccount {
    private double Balance;

    public void Deposit(double amount){

        if (amount <= 0)
        {
            Console.WriteLine("The deposit amount must be greater than 0");
        }
        else
        {
            Balance += amount;
        }
    }

    public void Withdraw(double amount)
    {

        if (amount <= 0)
        {
            Console.WriteLine("The withdrawal amount must be greater than 0.");
        }

        else if (amount > Balance)
        {
            Console.WriteLine("Insufficient balance.");
        }

        else
        {
            Balance-= amount;
        }

    }

    public double GetBalance()
    {
        return Balance;
    }
}

class Program
{
    static void Main()
    {
        BankAccount account = new BankAccount();

        account.Deposit(100);
        Console.WriteLine(account.GetBalance());

        account.Withdraw(50);
        Console.WriteLine(account.GetBalance());
    }
}