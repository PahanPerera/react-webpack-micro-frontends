import React from "react";
import accountDetailsMap from "../mock-data/accountDetails.json";
import "../index.css";

/**
 * This component shows the account details
 * * Account Summary view
 * * Recent Transactions view
 *
 * @param accountDetails @see mock-data/accountDetails.json
 *
 */
export default function AccountDetails({ selectedAccountId }) {
  const details = accountDetailsMap[selectedAccountId];

  // bg-blue-500 bg-blue-700
  // bg-red-500 bg-red-700
  if (!details) return <p>Please select an account to see details</p>;
  return (
    <div className="rounded-xl bg-white shadow-lg text-white">
      <div className="flex rounded-tl-xl flex-col">
        <div
          className={`flex-1 bg-${details.color}-500 px-4 py-8 rounded-t-xl shadow`}
        >
          <span
            className={`bg-${details.color}-700 px-4 py-1 rounded-full text-xs uppercase`}
          >
            {details.bankName}
          </span>
          <h1 className="text-2xl mt-2"> {details.accountName}</h1>
          <p className="text-sm"> x {details.last4}</p>
        </div>
        <div className="flex-1 text-sm text-gray-500 my-4 px-4">
          <ul className="flex flex-col gap-2">
            <li className="flex items-center">
              <span className="flex-grow">Actual Balance</span>
              <span className="text-2xl text-black font-bold">
                {details.balance}
              </span>
            </li>
            <li className="flex items-center">
              <span className="flex-grow">Available Balance</span>
              <span>{details.balance}</span>
            </li>
            <li className="flex items-center">
              <span className="flex-grow">Account Number</span>
              <span>{details.accountNumber}</span>
            </li>
          </ul>
        </div>
      </div>
      <div className="mx-4 py-4">
        <h1 className="uppercase text-gray-500 text-left">
          Pending Transactions
        </h1>
        <p className="text-gray-400 text-xs italic my-2">
          No Pending Transactions
        </p>
      </div>
    </div>
  );
}
