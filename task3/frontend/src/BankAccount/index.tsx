import React from "react";
import {data} from "./data.ts"


const BankAccount: React.FC = () => {

    const items = data
    
return (
   <div>
    <text>Bank Account Holder: {items["name"]}</text>
    <text>Balance: ${items["balance"]}</text>
    <text>Pending Charges: ${items["pending"]}</text>
   </div> 
)
}

export default BankAccount