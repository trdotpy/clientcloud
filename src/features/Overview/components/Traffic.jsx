import React from "react";
import { IconBolt, IconHeart } from "@tabler/icons-react";

export default function Traffic() {
  return (
    <div className="stats shadow">
      <div className="stat">
        <div className="stat-title">Total Page Views</div>
        <div className="stat-value flex items-center">
          5.9M <IconBolt />
        </div>
        <div className="stat-desc">64% more than last month</div>
      </div>
      <div className="stat">
        <div className="stat-title">Total Likes</div>
        <div className="stat-value flex items-center">
          35.1K <IconHeart />
        </div>
        <div className="stat-desc">21% more than last month</div>
      </div>
    </div>
  );
}
