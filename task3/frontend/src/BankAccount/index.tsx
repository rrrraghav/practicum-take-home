import React from "react";
import { data } from "./data.ts"


const BankAccount: React.FC = () => {

    const items = data

    return (
        <div>
            <div className="accountName">Bank Account Holder: {items["name"]}</div>
            <div className="accountDetailsWrapper">
                <div className="balanceCard">
                    <div className="balanceTitle">Current Balance</div>
                    <div className="balanceAmount">${items["balance"]}</div>
                </div>
                <div className="balanceCard">
                    <div className="balanceTitle">Balance</div>
                    <div className="balanceAmount">${items["balance"]}</div>
                </div>
            </div>
            <text>Pending Charges: ${items["pending"]}</text>
        </div>
    )
}

export default BankAccount