import {
  IconBrandFacebook,
  IconBrandGoogle,
  IconBrandInstagram,
  IconBrandYoutube,
  IconCreditCard,
  IconDiscountCheck,
  IconHeartHandshake,
  IconMail,
  IconRefreshDot,
  IconUsers,
} from "@tabler/icons-react";

export const dashStats = [
  {
    title: "New Users",
    value: "34.7k",
    icon: <IconDiscountCheck />,
    description: "Current Week",
  },
  {
    title: "Total Sales",
    value: "$34,545",
    icon: <IconCreditCard />,
    description: "Current month",
  },
  {
    title: "Pending Leads",
    value: "450",
    icon: <IconRefreshDot />,
    description: "+50 New",
  },
  {
    title: "Active Users",
    value: "5.6k",
    icon: <IconUsers />,
    description: "Current Year",
  },
];

export const campaignData = [
  {
    source: "Facebook",
    icon: <IconBrandFacebook strokeWidth="1.5" size={32} />,
    color: "text-blue-600",
    impressions: "14,719",
    convert: 19.2,
  },
  {
    source: "Google",
    icon: <IconBrandGoogle strokeWidth="3.5" size={32} />,
    color: "text-green-500",
    impressions: "19,930",
    convert: 15.8,
  },
  {
    source: "Instagram",
    icon: <IconBrandInstagram strokeWidth="1.5" size={32} />,
    color: "text-pink-500",
    impressions: "12,382",
    convert: 11.9,
  },
  {
    source: "YouTube",
    icon: <IconBrandYoutube strokeWidth="1.5" size={32} />,
    color: "text-red-500",
    impressions: "13,601",
    convert: 4.4,
  },
  {
    source: "Organic",
    icon: <IconMail strokeWidth="1.5" className="text-sky-500" size={32} />,
    color: "text-gray-100",
    impressions: "20,801",
    convert: 3.5,
  },
];
