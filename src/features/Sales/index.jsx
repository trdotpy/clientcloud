import React from "react";
import salesData from "../../data/salesData";

export default function Sales() {
  return (
    <div className="w-full overflow-x-auto">
      <table className="table w-full">
        <thead>
          <tr>
            <th></th>
            <th>Name</th>
            <th>Company</th>
            <th>Revenue</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {/* Row Start */}
          {salesData.map((sales) => {
            return (
              <tr>
                <th></th>
                <td>
                  <div className="flex items-center space-x-3">
                    <div className="avatar">
                      <div className="mask mask-squircle h-12 w-12">
                        <img src={sales.img} alt="sales-img" />
                      </div>
                    </div>
                    <div>
                      <div>{sales.name}</div>
                    </div>
                  </div>
                </td>
                <td>
                  {sales.company}
                  <br />
                </td>
                <td>
                  {"$"}
                  {sales.invoice}
                </td>
                <td>{sales.date}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
