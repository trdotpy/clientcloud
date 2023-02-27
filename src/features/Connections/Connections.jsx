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

const appList = [
  {
    name: "Twitter",
    desc: "Click to integrate your Twitter account",
    logo: <IconBrandTwitter size={28} />,
    color: "text-sky-500",
  },
  {
    name: "WordPress",
    desc: "Click to integrate your WordPress account",
    logo: <IconBrandWordpress size={28} />,
    color: "",
  },
  {
    name: "Amazon",
    desc: "Click to integrate your Amazon account",
    logo: <IconBrandAmazon size={28} />,
    color: "text-orange-500",
  },
  {
    name: "LinkedIn",
    desc: "Click to integrate your LinkedIn account",
    logo: <IconBrandLinkedin size={28} />,
    color: "text-blue-500",
  },
  {
    name: "Google Mail",
    desc: "Click to integrate your Gmail account",
    logo: <IconBrandGmail size={28} />,
    color: "text-red-500",
  },
  {
    name: "Facebook",
    desc: "Click to integrate your Facebook account",
    logo: <IconBrandFacebook size={28} />,
    color: "text-blue-500",
  },
  {
    name: "Binance",
    desc: "Click to integrate your Binance account",
    logo: <IconBrandBinance size={28} />,
    color: "text-yellow-500",
  },
];

export default function Connections() {
  return (
    <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
      {appList.map((app) => {
        return (
          <div className="alert shadow-lg md:h-24 " key={app.id}>
            <div>
              <span className={app.color}>{app.logo}</span>
              <div>
                <h3 className="font-bold">{app.name}</h3>
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
