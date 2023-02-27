import React from "react";
import { campaignData } from "../../../data/dashStats";
import Card from "../../../layout/Cards/Card";

export default function AdCampaigns() {
  return (
    <>
      <div className="overflow-x-auto">
        <Card title={"Campaign Data"}>
          <table className="table w-full">
            <thead>
              <tr>
                <th className="normal-case">Platform</th>
                <th className="normal-case">Impressions</th>
                <th className="normal-case">Convert Rate</th>
              </tr>
            </thead>
            {campaignData.map((stat) => (
              <tbody key={stat.id}>
                <tr>
                  <td className={`${stat.color}`}>{stat.icon}</td>
                  {/* <td>{stat.source}</td> */}
                  <td>{stat.impressions}</td>
                  <td>
                    {stat.convert}
                    {"%"}
                  </td>
                </tr>
              </tbody>
            ))}
          </table>
        </Card>
      </div>
    </>
  );
}
