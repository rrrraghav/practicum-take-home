import React from "react";
import {data} from "./data.ts"
import './index.css'


const BankAccount: React.FC = () => {

    const items = data
    
return (
   <div className="account">
    <text>Bank Account Holder: {items["name"]}</text>
    <text>Balance: ${items["balance"]}</text>
    <text>Pending Charges: ${items["pending"]}</text>
   </div> 
)
}

export default BankAccount