using System;
using System.Collections.Generic;

class BankAccount {
    public Guid Id { get; private set; } = Guid.NewGuid();
    private decimal _balance;
    private string _accountNumber;
    public string AccountNumber => _accountNumber;
    private string _owner;
    public string Owner => _owner;
    private List<Transaction> _transactions = new List<Transaction>();
    public IReadOnlyList<Transaction> Transactions => _transactions;

    public BankAccount(string owner, string accountNumber)
    {
        if (string.IsNullOrEmpty(owner) || owner.Length < 2)
        {
            throw new ArgumentException($"{owner} is not a valid name", nameof(owner));
        }

        if (string.IsNullOrEmpty(accountNumber) || accountNumber.Length < 5)
        {
            throw new ArgumentException($"{accountNumber} is not a valid account number", nameof(accountNumber));
        }
        
        _owner = owner;
        _accountNumber = accountNumber;
    }

    public void Deposit(decimal amount)
    {

        if (amount <= 0)
        {
            throw new ArgumentException("The amount must be greater than 0.");
        }

        _balance += amount;
        Transaction transaction = new Transaction(amount, "Deposit");
        _transactions.Add(transaction);
    }

    public void Withdraw(decimal amount)
    {

        if (amount <= 0)
        {
            throw new ArgumentException("The withdrawal amount must be greater than 0.");
        }

        if (amount > _balance)
        {
            throw new ArgumentException("Insufficient balance.");
        }

        _balance -= amount;
        Transaction transaction = new Transaction(-amount, "Withdrawal");
        _transactions.Add(transaction);
        

    }

    public decimal GetBalance()
    {
        return _balance;
    }
}

class Transaction
{
    public decimal _amount{get;}
    public string _type {get;}
    public DateTime _date {get;}

    public Transaction(decimal amount, string type)
    {
        _amount = amount;
        _type = type;
        _date = DateTime.Now;
    }
}

class Program
{
    static void Main()
    {
        BankAccount account = new BankAccount("Pedro","ACC-12345");
        
        Console.WriteLine("Id: "+ account.Id);
        Console.WriteLine("Owner: "+ account.Owner);
        Console.WriteLine("Account number: " + account.AccountNumber);

        account.Deposit(100);
        Console.WriteLine("Initial deposit: " + account.GetBalance());

        account.Withdraw(50);
        Console.WriteLine("Real balance: " + account.GetBalance());
        Console.WriteLine("\nTransactions:");

        foreach (Transaction transaction in account.Transactions)
        {
            Console.WriteLine(
                $"{transaction._date} - {transaction._type}: {transaction._amount}"
            );
        }
    }
}