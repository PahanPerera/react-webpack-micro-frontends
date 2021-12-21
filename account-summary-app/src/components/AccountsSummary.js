import React from "react";
import accounts from "../mock-data/bankAccounts.json";
import Account from "./Account";
import "../index.css";
/**
 * This page contains a summary of all the Accounts and
 * show the details of a selected account
 *
 */
export default function AccountsSummary({ onAccountSelected }) {
  return (
    <div className="flex flex-col gap-4 border border-gray-400 border-dashed p-8 rounded-xl">
      <section className="flex gap-8 flex-wrap justify-center md:justify-start">
        {accounts.bankAccounts.map((bank) => (
          <div
            key={bank.id}
            onClick={() => {
              onAccountSelected(bank.id);
            }}
          >
            <Account account={bank} color={bank.color} />
          </div>
        ))}
      </section>
    </div>
  );
}
