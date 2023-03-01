import { IconBolt, IconThumbUp, IconTrendingUp } from "@tabler/icons-react";
import React from "react";
import OverviewCard from "./OverviewCard";

export default function Statistics() {
  return (
    <div className="stats h-28 bg-primary shadow">
      <div className="stat">
        <div className="stat-title font-medium tracking-tight">Total Likes</div>
        <div className="stat-value text-secondary">
          25.6K <IconThumbUp className="mb-1 inline-block h-8 w-8" />
        </div>
        <div className="stat-desc">21% more than last month</div>
      </div>

      <div className="stat hidden md:block">
        <div className="stat-figure text-error"></div>
        <div className="stat-title font-medium tracking-tight">Page Views</div>
        <div className="stat-value text-error">
          2.6M{" "}
          <IconTrendingUp className="stat-figure mb-1 inline-block h-8 w-8" />
        </div>
        <div className="stat-desc">21% more than last month</div>
      </div>

      <div className="stat hidden md:block">
        <div className="stat-figure text-secondary"></div>
        <div className="stat-title font-medium tracking-tight">
          Completed Tasks
        </div>
        <div className="stat-value text-accent">
          86% <IconBolt className="mb-1 inline-block h-8 w-8" />
        </div>
        <div className="stat-desc">31 tasks remaining</div>
      </div>
    </div>
  );
}
