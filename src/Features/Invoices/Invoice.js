import React from "react";
import OverviewCard from "../Overview/components/OverviewCard";
import { invoiceData } from "./invoiceData";

export default function Invoice() {
  return (
    <OverviewCard>
      <div className="container mx-auto p-2 sm:p-8">
        <p className="text-sm font-medium text-gray-600">Data</p>
        <h4 className="text-xl font-bold text-secondary">Recent Invoices</h4>
        <div className="overflow-x-auto py-2">
          <table className="min-w-full text-xs">
            <thead className="rounded-lg bg-neutral">
              <tr className="text-left">
                <th className="p-3">Invoice #</th>
                <th className="p-3">Client</th>
                <th className="p-3">Issued</th>
                <th className="p-3 text-right">Amount</th>
                <th className="p-3">Status</th>
              </tr>
            </thead>
            {invoiceData.map((invoice) => (
              <tbody className="text-black" key={invoice.id}>
                <tr className="border-b border-opacity-20">
                  <td className="p-3">
                    <p>{invoice.id}</p>
                  </td>
                  <td className="p-3">
                    <p>{invoice.company}</p>
                  </td>
                  <td className="p-3">
                    <p>{invoice.date}</p>
                  </td>

                  <td className="p-3 text-right">
                    <p>$15,792</p>
                  </td>
                  <td className="p-3 text-right">
                    <span className="btn-outline btn-xs btn rounded-md px-3 py-1 font-semibold">
                      <span>{invoice.status}</span>
                    </span>
                  </td>
                </tr>
              </tbody>
            ))}
          </table>
        </div>
      </div>
    </OverviewCard>
  );
}
