import React, { useState } from "react";
import AccountsSummary from "./components/AccountsSummary";

/**
 * Main Component of the application.
 * Contains all the routing configurations
 *
 */
export default function App() {
  let [selectedAccount, setSelectedAccount] = useState(null);

  const handleAccountSelected = (accountId) => {
    setSelectedAccount(accountId);
  };

  return (
    <main className="m-8">
      <div className=" p-8 border border-gray-200 rounded-xl relative">
        <span className="absolute -top-2 bg-gray-300 rounded-full px-4 text-xs">
          Accounts Summary Micro Frontend
        </span>
        <AccountsSummary onAccountSelected={handleAccountSelected} />
      </div>
      <div className="my-8">
        <p>Select Account - {selectedAccount}</p>
      </div>
    </main>
  );
}
