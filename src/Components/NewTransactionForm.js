import React from "react";
import { useState } from "react";
import { withRouter } from "react-router-dom";
import InputGroup from "react-bootstrap/InputGroup";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";

function NewTransactionForm(props) {
  const [transaction, setTransaction] = useState({
    date: "",
    name: "",
    amount: 0,
    from: "",
  });

  const changeStuff = (e) => {
    setTransaction({
      ...transaction,
      [e.target.id]: e.target.value,
    });
  };

  const submitStuff = (e) => {
    e.preventDefault();
    props.addTransaction(transaction);
    props.history.push("/transactions");
  };

  return (
    <Container>
      <Form onSubmit={submitStuff}>
        <Form.Group controlId="date">
          <Form.Control
            value={transaction.date}
            type="date"
            onChange={changeStuff}
          />
        </Form.Group>
        <Form.Group controlId="name">
          <Form.Control
            value={transaction.name}
            type="text"
            onChange={changeStuff}
            placeholder="Name"
          />
        </Form.Group>

        <InputGroup>
          <Form.Control
            id="amount"
            value={transaction.amount}
            type="number"
            onChange={changeStuff}
          />
        </InputGroup>
        <Form.Group controlId="from">
          <Form.Control
            value={transaction.from}
            type="text"
            onChange={changeStuff}
            placeholder="From"
          />
        </Form.Group>
        <button type="submit">submit</button>
      </Form>
    </Container>
  );
}

export default withRouter(NewTransactionForm);
