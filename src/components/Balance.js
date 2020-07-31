import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
export const Balance = () => {
  const { transactions } = useContext(GlobalContext);
  
  return (
    <>
      <h4>Your Balance</h4>
      <h1 id="balance">${transactions.reduce((acc,i)=> acc+i.amount,0).toFixed(2)}</h1>
    </>
  );
};
