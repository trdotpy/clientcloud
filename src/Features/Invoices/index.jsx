import React from "react";
import { invoiceData } from "./invoiceData";

export default function Invoices() {
  return (
    <div className="overflow-x-auto">
      <table className="table-compact table w-full">
        <thead>
          <tr>
            <th>Date</th>
            <th>Company</th>
            <th>Location</th>
            <th>File</th>
          </tr>
        </thead>
        <tbody>
          {invoiceData.map((invoice) => {
            return (
              <tr key={invoice.id}>
                <td className="">{invoice.date}</td>
                <td>{invoice.company}</td>
                <td>{invoice.location}</td>
                <td>
                  <button className="btn-secondary btn-sm rounded-lg">
                    {invoice.file}
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
