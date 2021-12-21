import React, { useState } from "react";
import AccountDetails from "./components/AccountDetails";

/**
 * Main Component of the application.
 * Contains all the routing configurations
 *
 */
export default function App() {
  const [selectedAccount, setSelectedAccount] = useState();

  return (
    <main className="m-8">
      <div className="flex gap-4 mb-12">
        <button
          className="bg-blue-500 text-white px-4 rounded-full text-sm py-2 shadow-lg"
          onClick={() => setSelectedAccount(1)}
        >
          Select Account 1
        </button>
        <button
          className="bg-red-500 text-white px-4 rounded-full text-sm py-2 shadow-lg"
          onClick={() => setSelectedAccount(2)}
        >
          Select Account 2
        </button>
      </div>
      <div className="p-8 border border-gray-200 rounded-xl relative">
        <span className="absolute -top-2 bg-gray-300 rounded-full px-4 text-xs">
          Account Details Micro Frontend
        </span>

        <AccountDetails selectedAccountId={selectedAccount} />
      </div>
    </main>
  );
}
