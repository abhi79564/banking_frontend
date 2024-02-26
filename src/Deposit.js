import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
// import "./Deposit.css"; // Import your custom CSS for advanced styles

const Deposit = () => {
  const [balance, setBalance] = useState(1000);
  const [depositAmount, setDepositAmount] = useState('');
  const [isDeposited, setIsDeposited] = useState(false);

  const handleDeposit = () => {
    if (isNaN(depositAmount) || depositAmount <= 0) {
      alert('Please enter a valid deposit amount.');
      return;
    }

    const newBalance = balance + parseFloat(depositAmount);
    setBalance(newBalance);
    setIsDeposited(true);
  };

  return (
    <div className="container deposit-container my-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card deposit-card">
            <div className="card-body">
              <h2 className="card-title text-center deposit-heading">Deposit Money</h2>
              <div className="mb-4 text-center deposit-balance">
                <p>Your Current Balance:</p>
                <h3>Rs. {balance.toFixed(2)}</h3>
                {isDeposited && (
                  <div className="deposit-transaction-details">
                    <p>
                      Deposited: Rs. {parseFloat(depositAmount).toFixed(2)}
                    </p>
                    <p>
                      Your New Balance: Rs. {balance.toFixed(2)}
                    </p>
                  </div>
                )}
              </div>
              <div className="mb-4 text-center">
                <input
                  type="number"
                  className="form-control deposit-input"
                  placeholder="Enter deposit amount"
                  value={depositAmount}
                  onChange={(e) => setDepositAmount(e.target.value)}
                />
              </div>
              <div className="text-center">
                <button
                  className="btn btn-primary deposit-button"
                  onClick={handleDeposit}
                >
                  Deposit
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Deposit;
