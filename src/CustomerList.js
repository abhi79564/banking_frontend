import React, { useState } from 'react';


const CustomerList = () => {
  const [customers, setCustomers] = useState([
    { id: 1, name: 'Customer 1', balance: 1000 },
    { id: 2, name: 'Customer 2', balance: 1500 },
    { id: 3, name: 'Customer 3', balance: 2000 },
    { id: 4, name: 'Customer 4', balance: 800 },
    { id: 5, name: 'Customer 5', balance: 3000 },
    { id: 6, name: 'Customer 6', balance: 2500 },
    { id: 7, name: 'Customer 7', balance: 1200 },
    { id: 8, name: 'Customer 8', balance: 1800 },
    { id: 9, name: 'Customer 9', balance: 2200 },
    { id: 10, name: 'Customer 10', balance: 900 },
  ]);

  const [mainAccountBalance, setMainAccountBalance] = useState(5000);
  const [transactionAmount, setTransactionAmount] = useState('');
  const [selectedCustomerId, setSelectedCustomerId] = useState(null);

  const handleTransaction = () => {
    if (selectedCustomerId === null) {
      alert('Please select a customer to make a transaction.');
      return;
    }

    const amount = parseFloat(transactionAmount);
    if (isNaN(amount) || amount <= 0) {
      alert('Invalid transaction amount.');
      return;
    }

    const updatedCustomers = customers.map((customer) =>
      customer.id === selectedCustomerId
        ? { ...customer, balance: customer.balance + amount }
        : customer
    );

    setCustomers(updatedCustomers);
    setMainAccountBalance(mainAccountBalance - amount);
    setTransactionAmount('');
    setSelectedCustomerId(null);
    alert('Transaction successful!');
  };

  const handleCustomerSelect = (customerId) => {
    setSelectedCustomerId(customerId);
  };

  return (
    <div className="customer-list-container">
      <h1>Customer List</h1>
      <div>Main Account Balance: ${mainAccountBalance}</div>
      <ul>
        {customers.map((customer) => (
          <li
            key={customer.id}
            onClick={() => handleCustomerSelect(customer.id)}
            className={selectedCustomerId === customer.id ? 'selected' : ''}
          >
            {customer.name} - Balance: ${customer.balance}
          </li>
        ))}
      </ul>
      <div>
        <input
          type="number"
          placeholder="Transaction Amount"
          value={transactionAmount}
          onChange={(e) => setTransactionAmount(e.target.value)}
        />
        <button onClick={handleTransaction}>Make Transaction</button>
      </div>
    </div>
  );
};

export default CustomerList;
