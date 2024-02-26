import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
// import "./Withdrawal.css"; // Import your custom CSS for advanced styles

const Withdrawal = () => {
  const [balance, setBalance] = useState(1500);
  const [withdrawalAmount, setWithdrawalAmount] = useState('');
  const [isWithdrawn, setIsWithdrawn] = useState(false);

  const handleWithdrawal = () => {
    if (isNaN(withdrawalAmount) || withdrawalAmount <= 0) {
      alert('Please enter a valid withdrawal amount.');
      return;
    }

    if (parseFloat(withdrawalAmount) > balance) {
      alert('Insufficient balance for withdrawal.');
      return;
    }

    const newBalance = balance - parseFloat(withdrawalAmount);
    setBalance(newBalance);
    setIsWithdrawn(true);
  };

  return (
    <div className="container withdrawal-container my-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card withdrawal-card">
            <div className="card-body">
              <h2 className="card-title text-center withdrawal-heading">Withdrawl</h2>
              <div className="mb-4">
                <p>Your Current Balance:</p>
                <h3>Rs. {balance.toFixed(2)}</h3>
                {isWithdrawn && (
                  <div className="withdrawal-transaction-details">
                    <p>
                      Withdrawn: Rs. {parseFloat(withdrawalAmount).toFixed(2)}
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
                  className="form-control withdrawal-input"
                  placeholder="Enter withdrawal amount"
                  value={withdrawalAmount}
                  onChange={(e) => setWithdrawalAmount(e.target.value)}
                />
              </div>
              <div className="text-center">
                <button
                  className="btn btn-primary withdrawal-button"
                  onClick={handleWithdrawal}
                >
                  Withdraw
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Withdrawal;
