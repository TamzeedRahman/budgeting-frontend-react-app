import React from "react";

const Transaction = ({ transaction, index }) => {
  return (
    <div>
      <div>{index}</div>
      <div>{transaction.date}</div>
      <div>
        <div>{transaction.name}</div>
        <div>{transaction.amount}</div>
      </div>
      <div>{transaction.from}</div>
    </div>
  );
};

export default Transaction;
