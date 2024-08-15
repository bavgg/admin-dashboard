import { ChartPieIcon, ChartBarIcon, ChevronDoubleUpIcon, CalculatorIcon, SwatchIcon, ChartBarSquareIcon, PresentationChartLineIcon, ShoppingBagIcon, UsersIcon, Calendari, ClipboardDocumentIcon, PencilSquareIcon, ArrowPathIcon, ShoppingCartIcon } from "@heroicons/react/24/outline";
import { UserGroupIcon, PresentationChartLineIcon as PresentationChartLineIconSolid, ChartBarSquareIcon as ChartBarSquareIconSolid, CalendarIcon } from "@heroicons/react/24/solid";



type linkType = {
  title: string;
  links: {
    name: string;
    icon: JSX.Element;
  }[];
};

export const links: linkType[] = [
  {
    title: "Dashboard",
    links: [
      {
        name: "Ecommerce",
        icon: <ShoppingBagIcon fill="none" width="24" height="24"/>,
      },
    ],
  },

  {
    title: "Pages",
    links: [
      {
        name: "Orders",
        icon: <ShoppingCartIcon fill="none" width="24" height="24"/>,
      },
      {
        name: "Employees",
        icon: <UsersIcon fill="none" width="24" height="24"/>,
      },
      {
        name: "Customers",
        icon: <UserGroupIcon fill="currentColor" width="24" height="24"   />,
      },
    ],
  },
  {
    title: "Apps",
    links: [
      {
        name: "Calendar",
        icon: <CalendarIcon fill="currentColor" width="24" height="24"   />,
      },
      {
        name: "Kanban",
        icon: <ClipboardDocumentIcon fill="none" width="24" height="24" />,
      },
      {
        name: "Editor",
        icon: <PencilSquareIcon fill="none" width="24" height="24" />,
      },
      {
        name: "Color-Picker",
        icon: <SwatchIcon fill="none" width="24" height="24" />,
      },
    ],
  },
  {
    title: "Charts",
    links: [
      {
        name: "Line",
        icon: <ChartBarSquareIcon fill="none" width="24" height="24" />,
      },
      {
        name: "Area",
        icon: <ChartBarSquareIconSolid fill="currentColor" width="24" height="24"  />,
      },

      {
        name: "Bar",
        icon: <ChartBarIcon fill="none" width="24" height="24" />,
      },
      {
        name: "Pie",
        icon: <ChartPieIcon fill="none" width="24" height="24" />,
      },
      {
        name: "Financial",
        icon: <CalculatorIcon fill="none" width="24" height="24" />,
      },
      {
        name: "Color-Mapping",
        icon: <SwatchIcon fill="none" width="24" height="24" />,
      },
      {
        name: "Pyramid",
        icon: <ChevronDoubleUpIcon fill="none" width="24" height="24"   />,
      },
      {
        name: "Stacked",
        icon: <PresentationChartLineIconSolid  fill="currentColor" width="24" height="24"  />,
      },
    ],
  },
];

export const earningData = [
  {
    icon: <UsersIcon fill="none" width="24" height="24"  />,
    amount: "39,354",
    percentage: "-4%",
    title: "Customers",
    iconColor: "#03C9D7",
    iconBg: "#E5FAFB",
    pcColor: "red-600",
  },
  {
    icon: <ShoppingBagIcon fill="none" width="24" height="24" />,
    amount: "4,396",
    percentage: "+23%",
    title: "Products",
    iconColor: "rgb(255, 244, 229)",
    iconBg: "rgb(254, 201, 15)",
    pcColor: "green-600",
  },
  {
    icon: <ChartBarIcon fill="none" width="24" height="24" />,
    amount: "423,39",
    percentage: "+38%",
    title: "Sales",
    iconColor: "rgb(228, 106, 118)",
    iconBg: "rgb(255, 244, 229)",

    pcColor: "green-600",
  },
  {
    icon: <ArrowPathIcon fill="none" width="24" height="24" />,
    amount: "39,354",
    percentage: "-12%",
    title: "Refunds",
    iconColor: "rgb(0, 194, 146)",
    iconBg: "rgb(235, 250, 242)",
    pcColor: "red-600",
  },
];
