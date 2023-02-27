import React from "react";
import { campaignData } from "../../../data/dashStats";
import Card from "../../../containers/Cards/Card";

export default function AdCampaigns() {
  return (
    <>
      <div className="overflow-x-auto">
        <Card title={"Campaign Data"}>
          {campaignData.map((stat) => (
            <table className="table w-full" key={stat.id}>
              <thead>
                <tr>
                  <th className="normal-case">Platform</th>
                  <th className="normal-case">Impressions</th>
                  <th className="normal-case">Convert Rate</th>
                </tr>
              </thead>
              <tbody>
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
            </table>
          ))}
        </Card>
      </div>
    </>
  );
}
