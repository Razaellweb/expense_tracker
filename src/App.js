import React, { useState } from "react";
import { useEffect } from "react";
import Home from "./components/Home";
import './App.css'

const App = () => {
    const [balance, setBalance] = useState(0);
    const [transact, setTransact] = useState([]);
    const [expense, setExpense] = useState(0);
    const [transactex, setTransactex] = useState([]);
    const [transactin, setTransactin] = useState([]);
  //  const [home, setHome] = useState("none");
    const [balview, setBalview] = useState("block")
    const [inview, setInview] = useState("none")
    const [exview, setExview] = useState("none")
    const [excolor, setExcolor] = useState("white")
    const [incolor, setIncolor] = useState("white")
    const [balcolor, setBalcolor] = useState("green")




    
    useEffect(() => {
        getBalance()
        getExpense()
        getTransact()
        getTransactex()
        getTransactin()
    }, [])

    const getBalance = () => {
    var bal = JSON.parse(localStorage.getItem("balance"));
    bal ? setBalance(bal) : setBalance(0);
    }
    const getExpense = () => {
        var bal = JSON.parse(localStorage.getItem("expense"));
        bal ? setExpense(bal) : setExpense(0);
    }
    const getTransact = () => {
        var bal = JSON.parse(localStorage.getItem("transact"));
        bal ? setTransact(bal) : setTransact([]);
    }
    const getTransactex = () => {
        var bal = JSON.parse(localStorage.getItem("transactex"));
        bal ? setTransactex(bal) : setTransactex([]);
    }
    const getTransactin = () => {
        var bal = JSON.parse(localStorage.getItem("transactin"));
        bal ? setTransactin(bal) : setTransactin([]);
    }
    return (
    <div>
        <Home incolor={incolor} setIncolor={setIncolor} excolor={excolor} setExcolor={setExcolor} balcolor={balcolor} setBalcolor={setBalcolor} balview={balview} setBalview={setBalview} inview={inview} setInview={setInview} exview={exview} setExview={setExview} transactin={transactin} setTransactin={setTransactin} transactex={transactex} setTransactex={setTransactex} expense={expense} setExpense={setExpense} balance={balance} setBalance={setBalance} transact={transact} setTransact={setTransact}/>
    </div>
    )
}

export default App;