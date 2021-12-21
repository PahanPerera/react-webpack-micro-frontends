import React, { Suspense, useState } from "react";
const AccountsSummary = React.lazy(() =>
  import("AccountsSummaryApp_Remote/AccountsSummary")
);
const AccountDetails = React.lazy(() =>
  import("AccountDetailsApp_Remote/AccountDetails")
);

/**
 * This page contains a summary of all the Accounts and
 * show the details of a selected account
 *
 */
export default function AccountsPage() {
  let [selectedAccount, setSelectedAccount] = useState(null);

  const handleAccountSelected = (accountId) => {
    setSelectedAccount(accountId);
  };
  return (
    <main className="px-4 py-8">
      <div className="flex gap-8 flex-col md:flex-row">
        <Suspense fallback={<h1>Error Loading Account Summary</h1>}>
          <AccountsSummary onAccountSelected={handleAccountSelected} />
        </Suspense>
        <Suspense fallback={<h1>Error Loading Account Details</h1>}>
          <AccountDetails selectedAccountId={selectedAccount} />
        </Suspense>
      </div>
    </main>
  );
}
