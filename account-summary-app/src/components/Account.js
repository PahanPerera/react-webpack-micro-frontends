import React from "react";

/**
 *
 * This provides a summary view of the Account Details
 * `color` parameter is used to change the theme based on the bank
 *
 * @param {account, color} @see mock-data/bankAccounts.json
 */
export default function Account({ account, color = "blue" }) {
  // bg-blue-500 hover:bg-blue-100 text-blue-500 border-blue-500
  // bg-red-500 hover:bg-red-100 text-red-500 border-red-500
  // bg-orange-500 hover:bg-orange-100 text-orange-500 border-orange-500
  return (
    <div
      className={`bg-white h-40 w-64 shadow-lg rounded-xl relative border-l-2 border-${color}-500 hover:bg-${color}-100 cursor-pointer `}
    >
      <span
        className={`absolute bg-${color}-500 text-white px-4 py-1 rounded-full font-bold -top-3 left-4 text-xs uppercase`}
      >
        {account.bankName}
      </span>
      <div className="flex flex-col space-y-6 h-full justify-center pl-4">
        <div>
          <h2 className={`text-base text-${color}-500`}>
            {account.accountName}
          </h2>
          <h3 className="text-sm text-gray-500 ">
            xxxx xxxx xxxx {account.last4}
          </h3>
        </div>
        <h1 className="text-3xl">
          {account.balance}
          {account.limit ? (
            <span className="text-sm text-gray-500 ">/ {account.limit}</span>
          ) : null}
        </h1>
      </div>
    </div>
  );
}
