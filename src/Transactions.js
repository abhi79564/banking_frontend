import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css'; // Import Bootstrap CSS
// import './Transactions.css'; // Import your custom CSS for advanced styles

function Transactions() {
  const [customers, setCustomers] = useState([
    { id: 1, name: 'Abhijeet', balance: 1000 },
    { id: 2, name: 'Ankush', balance: 1500 },
    { id: 3, name: 'Abhi', balance: 2000 },
    { id: 4, name: 'Dilip', balance: 1200 },
    { id: 5, name: 'Vinayak', balance: 800 },
    { id: 6, name: 'Romil', balance: 2500 },
    { id: 7, name: 'Dhruv', balance: 3000 },
    { id: 8, name: 'Dhruvi', balance: 900 },
    { id: 9, name: 'Lalit', balance: 1800 },
    { id: 10, name: 'Lalita', balance: 2100 },
  ]);

  const [selectedCustomer, setSelectedCustomer] = useState(null);
  const [transactionAmount, setTransactionAmount] = useState('');
  const [recipient, setRecipient] = useState('');

  const handleSelectCustomer = (customer) => {
    setSelectedCustomer(customer);
  };

  const handleTransaction = () => {
    if (!selectedCustomer || !recipient || isNaN(transactionAmount)) {
      return;
    }

    const updatedCustomers = customers.map((customer) => {
      if (customer.id === selectedCustomer.id) {
        return {
          ...customer,
          balance: customer.balance - parseFloat(transactionAmount),
        };
      } else if (customer.name === recipient) {
        return {
          ...customer,
          balance: customer.balance + parseFloat(transactionAmount),
        };
      } else {
        return customer;
      }
    });

    setCustomers(updatedCustomers);
    setSelectedCustomer(null);
    setTransactionAmount('');
    setRecipient('');
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">

          <div className="text-center">
            <h2>Our Customers</h2>
            <div className="card customer-card">
              <ul className="list-group list-group-flush">
                {customers.map((customer) => (
                  <li key={customer.id} className="list-group-item d-flex justify-content-between align-items-center">
                    <span>{customer.name}</span>
                    <span>Balance: {customer.balance}</span>
                    <button
                      className="btn btn-link"
                      onClick={() => handleSelectCustomer(customer)}
                    >
                      Select
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
      {selectedCustomer && (
        <div className="row justify-content-center mt-3">
          <div className="col-md-6">
            <div className="text-center">
              <h2>Transaction</h2>
              <div className="card transaction-card">
                <div className="card-body">
                  <p className="card-text">
                    Transfer funds from {selectedCustomer.name} (Balance:{' '}
                    {selectedCustomer.balance}) to:
                  </p>
                  <input
                    className="form-control mb-2"
                    type="text"
                    placeholder="Recipient's Name"
                    value={recipient}
                    onChange={(e) => setRecipient(e.target.value)}
                  />
                  <input
                    className="form-control mb-2"
                    type="number"
                    placeholder="Enter amount"
                    value={transactionAmount}
                    onChange={(e) => setTransactionAmount(e.target.value)}
                  />
                  <button
                    className="btn btn-primary"
                    onClick={handleTransaction}
                  >
                    Transfer
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Transactions;
