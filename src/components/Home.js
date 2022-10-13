import React from "react";

const Home = ({ balance, setBalance, transact, setTransact, transactin, setTransactin, expense, setExpense, transactex, setTransactex, inview, setInview, exview, setExview, balview, setBalview, incolor, setIncolor, excolor, setExcolor, balcolor, setBalcolor }) => {

    const balanceadd = (e) => {
        e.preventDefault();
        var x = prompt("Add Money");
        setBalance((balance * 1) + (x * 1));
        var requ = {
            subject: "",
            amount: x,
            action: "Money Added",
            sentence: x + " was added from card",
            color: "green"
        }
        transactin.push(requ);
        transact.push(requ);
        localStorage.setItem("balance", JSON.stringify((balance * 1) + (x * 1)))
        localStorage.setItem("transact", JSON.stringify(transact));
        localStorage.setItem("transactin", JSON.stringify(transactin));
    }


    const currency = (e) => {
        if (e.target.innerText = "USD") {
            var curr = balance / 560;
            setBalance(curr);
        }
        else {
        }
    }
    const request = () => {
        var subject = prompt("Input Name Of Contact")
        var amount = prompt("input Amount")
        var reque = balance + (amount * 1)
        setBalance(reque);

        var requ = {
            subject: subject,
            amount: amount,
            action: "request",
            sentence: amount + " was requested from " + subject,
            color: "green"
        }
        transactin.push(requ);
        transact.push(requ);
        console.log(transact)
        localStorage.setItem("balance", JSON.stringify(balance + (amount * 1)))
        localStorage.setItem("transact", JSON.stringify(transact));
        localStorage.setItem("transactin", JSON.stringify(transactin));
    }
    const sent = () => {
        prompt("input Account Number")
        prompt("input Bank Account")
        var subject = prompt("Input Name Of Contact")
        var amount = prompt("input Amount")
        var reque = balance - (amount * 1)
        setBalance(reque);
        setExpense(expense + (amount * 1))

        var requ = {
            subject: subject,
            amount: amount,
            action: "sent",
            sentence: "you sent " + amount + " to " + subject,
            color: "red"
        }
        transact.push(requ);
        transactex.push(requ);
        console.log(transact)
        localStorage.setItem("balance", JSON.stringify(balance - (amount * 1)))
        localStorage.setItem("expense", JSON.stringify(expense + (amount * 1)))
        localStorage.setItem("transact", JSON.stringify(transact));
        localStorage.setItem("transactex", JSON.stringify(transactex));
    }

    const airtime = () => {
        prompt("input Phone Number")
        var subject = prompt("Input Name Of Reciver")
        var amount = prompt("input Amount")
        var reque = balance - (amount * 1)
        setBalance(reque);
        setExpense(expense + (amount * 1))


        var requ = {
            subject: subject,
            amount: amount,
            action: "Airtime Purchased",
            sentence: "Airtime Of " + amount + " was purchased for " + subject,
            color: "red"
        }
        transact.push(requ);
        transactex.push(requ);

        console.log(transact)
        localStorage.setItem("balance", JSON.stringify(balance - (amount * 1)))
        localStorage.setItem("expense", JSON.stringify(expense + (amount * 1)))
        localStorage.setItem("transact", JSON.stringify(transact));
        localStorage.setItem("transactex", JSON.stringify(transactex));
    }

    const bills = () => {
        var subject = prompt("Input Receiver")
        var action = prompt("Bill For")
        var amount = prompt("input Amount")
        var reque = balance - (amount * 1)
        setBalance(reque);
        setExpense(expense + (amount * 1))


        var requ = {
            subject: subject,
            amount: amount,
            action: action,
            sentence: "You paid " + amount + " to " + subject + " for " + action,
            color: "red"
        }
        transact.push(requ);
        transactex.push(requ);

        console.log(transact)
        localStorage.setItem("balance", JSON.stringify(balance - (amount * 1)))
        localStorage.setItem("expense", JSON.stringify(expense + (amount * 1)))
        localStorage.setItem("transact", JSON.stringify(transact));
        localStorage.setItem("transactex", JSON.stringify(transactex));

    }
    const showexpense = () => {
        localStorage.clear();
        window.location="/"
    }
    const showex = () => {
        setExcolor("green")
        setIncolor("white")
        setBalcolor("white")
        setExview("block")
        setInview("none")
        setBalview("none")
    }
    const showin = () => {
        setIncolor("green")
        setExcolor("white")
        setBalcolor("white")
        setExview("none")
        setInview("block")
        setBalview("none")
    }
    const showtran = () => {
        setBalcolor("green")
        setIncolor("white")
        setExcolor("white")
        setExview("none")
        setInview("none")
        setBalview("block")
    }

    return (
        <div>
            <button onClick={showexpense} className="clear">Clear All Data</button>
            <div>
                <center>
                    <fieldset className="header">
                        <h4>${balance}.00</h4>
                        <button onClick={balanceadd} className="btn">Add Money</button>
                    </fieldset>
                </center>
            </div>

            <div className="exec1">
                <fieldset onClick={request} className="field1"><i></i>Request Money</fieldset>
                <fieldset onClick={sent} className="field2"><i></i>Send Money</fieldset>
            </div>
            <div className="exec1">
                <fieldset onClick={airtime} className="field3">Buy Airtime</fieldset>
                <fieldset onClick={bills} className="field4">Pay Bills</fieldset>
            </div>
            <div>
                <fieldset className="compare">
                    <div>
                        <p><span className="inc">Total Income:</span> {balance + (expense * 1)}</p>
                        <p><span className="exp">Total Expense:</span> {expense}</p>
                    </div>
                </fieldset>
                <div className="exec1">
                    <p onClick={showex} style={{ color: excolor }}>Expenses</p>
                    <p onClick={showtran} style={{ color: balcolor }}>Transactions</p>
                    <p onClick={showin} style={{ color: incolor }}>Incomes</p>
                </div>
            </div>
            <div className="trans" style={{ display: balview }}>
                {transact.map((item) => {
                    return <li key={Math.random() * 100000} className="lists"><p className="litext" style={{ color: item.color }}>{item.sentence}</p>
                        <hr />
                    </li>
                })}
            </div>
            <div className="transex" style={{ display: exview }}>
                {transactex.map((item) => {
                    return <li key={Math.random() * 100000} className="lists"><p className="litext" style={{ color: "red" }}>{item.sentence}</p>
                        <hr />
                    </li>
                })}
            </div>
            <div className="transin" style={{ display: inview }}>
                {transactin.map((item) => {
                    return <li key={Math.random() * 100000} className="lists"><p className="litext" style={{ color: "green" }}>{item.sentence}</p>
                        <hr />
                    </li>
                })}
            </div>
        </div>
    )
}

export default Home;