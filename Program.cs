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
        Transaction transaction = new Transaction(amount, TransactionType._deposit);
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
        Transaction transaction = new Transaction(-amount, TransactionType._withdraw);
        _transactions.Add(transaction);
        

    }

    public void Transfer(BankAccount destination, decimal amount)
    {
        if (destination == null)
        {
            throw new ArgumentNullException(nameof(destination));

        }
        if (destination == this)
        {
            throw new ArgumentException("Cannot transfer to the same account");
        }
        if ( amount <= 0)
        {
            throw new ArgumentException("Transfer must be greater than 0");

        }
        if ( amount > _balance)
        {
            throw new ArgumentException("Insufficient balance.");
        }
        _balance -= amount;
        destination._balance += amount;

        _transactions.Add(
            new Transaction(-amount, TransactionType._transfer)
        );

        destination._transactions.Add(
            new Transaction(amount, TransactionType._transfer)
        );
    }

    public decimal GetBalance()
    {
        return _balance;
    }
}

    public enum TransactionType
    {
        _deposit,
        _withdraw,
        _transfer
    }

class Transaction
{
    public decimal _amount{get;}
    public TransactionType _type {get;}
    public DateTime _date {get;}

    public Transaction(decimal amount, TransactionType type)
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
        BankAccount pedro = new BankAccount("Pedro","ACC-12345");
        BankAccount john = new BankAccount("John", "ACC-67890");
        
        Console.WriteLine("\nAccount number: " + pedro.AccountNumber);
        Console.WriteLine("Owner: "+ pedro.Owner);
    
        pedro.Deposit(100);
        Console.WriteLine("Initial deposit: " + pedro.GetBalance());

        pedro.Withdraw(50);
        pedro.Transfer(john, 40);
        Console.WriteLine("Real balance: " + pedro.GetBalance());

        Console.WriteLine("\nAccount number: " + john.AccountNumber);
        Console.WriteLine("Owner: " + john.Owner);
        Console.WriteLine("Real balance: " + john.GetBalance());


        Console.WriteLine("\nTransactions:");

        foreach (Transaction transaction in pedro.Transactions)
        {
            Console.WriteLine(
                $"{transaction._date} - {transaction._type}: {transaction._amount}"
            );
        }
    }
}