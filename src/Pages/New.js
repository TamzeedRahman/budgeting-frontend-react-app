import React from "react";
import NewTransactionForm from "../Components/NewTransactionForm";

function New({ addTransaction }) {
  return (
    <div>
      <NewTransactionForm addTransaction={addTransaction} />
    </div>
  );
}

export default New;
