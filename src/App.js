import React from "react";
import { useState, useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import axios from "axios";
import { apiURL } from "./util/apiURL";
import Index from "./Pages/Index";
import New from "./Pages/New";
import NavBar from "./Components/NavBar";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

const API = apiURL();

function App() {
  const [transactions, setTransactions] = useState([]);

  const addTransaction = (newTransaction) => {
    axios
      .post(`${API}/transactions`, newTransaction)
      .then((response) => {
        return axios.get(`${API}/transactions`).then((response) => {
          const { data } = response;
          setTransactions(data);
        });
      })
      .catch((e) => {
        console.log(e);
      });
  };

  useEffect(() => {
    axios
      .get(`${API}/transactions`)
      .then((response) => {
        const { data } = response;
        setTransactions(data);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);

  return (
    <div className="App">
      <NavBar />
      <main>
        <Switch>
          <Route exact path="/transaction">
            <New addTransaction={addTransaction} />
          </Route>
          <Route path="/">
            <Index transactions={transactions} />
          </Route>
        </Switch>
      </main>
    </div>
  );
}

export default App;
