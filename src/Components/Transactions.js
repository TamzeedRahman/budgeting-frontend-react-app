import React from "react";
import Transaction from "./Transaction";

const Transactions = ({ transactions }) => {
  let total = 1000;
  transactions.forEach((transaction) => {
    total += Number(transaction.amount);
  });

  return (
    <div>
      <h1>Total ${total}</h1>
      {transactions.map((transaction, index) => {
        return <Transaction key={index} transaction={transaction} />;
      })}
    </div>
  );
};

export default Transactions;
