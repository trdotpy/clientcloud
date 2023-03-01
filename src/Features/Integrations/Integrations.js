import React from "react";
import {
  IconBrandAmazon,
  IconBrandBinance,
  IconBrandFacebook,
  IconBrandGmail,
  IconBrandLinkedin,
  IconBrandTwitter,
  IconBrandWordpress,
} from "@tabler/icons-react";
import OverviewCard from "../Overview/components/OverviewCard";

const appList = [
  {
    id: 1,
    name: "Twitter",
    desc: "Click to connect your Twitter account",
    logo: <IconBrandTwitter size={28} />,
    color: "text-sky-500",
  },
  {
    id: 2,
    name: "WordPress",
    desc: "Click to connect your WordPress account",
    logo: <IconBrandWordpress size={28} />,
    color: "",
  },
  {
    id: 3,
    name: "Amazon",
    desc: "Click to connect your Amazon account",
    logo: <IconBrandAmazon size={28} />,
    color: "text-orange-500",
  },
  {
    id: 4,
    name: "LinkedIn",
    desc: "Click to connect your LinkedIn account",
    logo: <IconBrandLinkedin size={28} />,
    color: "text-blue-500",
  },
  {
    id: 5,
    name: "Google Mail",
    desc: "Click to connect your Gmail account",
    logo: <IconBrandGmail size={28} />,
    color: "text-red-500",
  },
  {
    id: 6,
    name: "Facebook",
    desc: "Click to connect your Facebook account",
    logo: <IconBrandFacebook size={28} />,
    color: "text-blue-500",
  },
  {
    id: 7,
    name: "Binance",
    desc: "Click to connect your Binance account",
    logo: <IconBrandBinance size={28} />,
    color: "text-yellow-500",
  },
];

export default function Integrations() {
  return (
    <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
      {appList.map((app) => {
        return (
          <div className="alert bg-primary shadow-lg md:h-28" key={app.id}>
            <div>
              <span className={app.color}>{app.logo}</span>
              <div>
                <h3 className="font-medium">{app.name}</h3>
                <div className="text-xs">{app.desc}</div>
              </div>
            </div>
            <div className="flex-none">
              <input type="checkbox" className="toggle-info toggle" />
            </div>
          </div>
        );
      })}
    </div>
  );
}
