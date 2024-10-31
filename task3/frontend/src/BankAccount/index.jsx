import React from "react";
import { data } from "./data.js"
import './index.css';

const BankAccount = () => {

    const details = data

    return (
        <div>
            <div className="accountName"><b>Bank Account Holder:</b> {details["name"]}</div>
            <div className="accountDetailsWrapper">
                <div className="bankCard">
                    <div className="cardTitle">Current Balance</div>
                    <div className="cardAmount">${details["balance"]}</div>
                </div>
                <div className="bankCard">
                    <div className="cardTitle">Total Pending Charges</div>
                    <div className="cardAmount">${details["pending"]}</div>
                </div>
            </div>
        </div>
    )
}

export default BankAccount