import React from "react";
import RevenueBar from "../../Charts/RevenueBar";
import AcquisitionLine from "../../Charts/AcquisitionLine";
import RegionPie from "../../Charts/RegionPie";
import ProductPie from "../../Charts/ProductPie";
import TeamRange from "../../Charts/TeamRange";
import ClientArea from "../../Charts/ClientArea";

export default function Charts() {
  return (
    <div className="space-y-8">
      <div className="col-span-3 grid grid-cols-2 gap-4">
        <RegionPie />
        <TeamRange />
      </div>
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
        <AcquisitionLine />
        <RevenueBar />
        <ProductPie />
      </div>
      <div>
        <ClientArea />
      </div>
    </div>
  );
}
