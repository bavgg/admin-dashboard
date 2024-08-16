import {
  ChartPieIcon,
  ChartBarIcon,
  ChevronDoubleUpIcon,
  CalculatorIcon,
  SwatchIcon,
  ChartBarSquareIcon,
  PresentationChartLineIcon,
  ShoppingBagIcon,
  UsersIcon,
  Calendari,
  ClipboardDocumentIcon,
  PencilSquareIcon,
  ArrowPathIcon,
  ShoppingCartIcon,
} from "@heroicons/react/24/outline";
import {
  UserGroupIcon,
  PresentationChartLineIcon as PresentationChartLineIconSolid,
  ChartBarSquareIcon as ChartBarSquareIconSolid,
  CalendarIcon,
} from "@heroicons/react/24/solid";

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
        icon: <ShoppingBagIcon fill="none" width="24" height="24" />,
      },
    ],
  },

  {
    title: "Pages",
    links: [
      {
        name: "Orders",
        icon: <ShoppingCartIcon fill="none" width="24" height="24" />,
      },
      {
        name: "Employees",
        icon: <UsersIcon fill="none" width="24" height="24" />,
      },
      {
        name: "Customers",
        icon: <UserGroupIcon fill="currentColor" width="24" height="24" />,
      },
    ],
  },
  {
    title: "Apps",
    links: [
      {
        name: "Calendar",
        icon: <CalendarIcon fill="currentColor" width="24" height="24" />,
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
        icon: (
          <ChartBarSquareIconSolid fill="currentColor" width="24" height="24" />
        ),
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
        icon: <ChevronDoubleUpIcon fill="none" width="24" height="24" />,
      },
      {
        name: "Stacked",
        icon: (
          <PresentationChartLineIconSolid
            fill="currentColor"
            width="24"
            height="24"
          />
        ),
      },
    ],
  },
];

export const earningData = [
  {
    icon: <UsersIcon fill="none" width="24" height="24" />,
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

export const LineChartData = [
  {
    id: "test",
    color: "hsl(199.99999999999997, 100%, 68.23529411764706%)",
    data: [
      { x: 1, y: 2 },
      { x: 2, y: 6 },
      { x: 3, y: 8 },
      { x: 4, y: 5 },
      { x: 5, y: 10 },
    ],
  },
];

export const stackedPrimaryXAxis = {
  majorGridLines: { width: 0 },
  minorGridLines: { width: 0 },
  majorTickLines: { width: 0 },
  minorTickLines: { width: 0 },
  interval: 1,
  lineStyle: { width: 0 },
  labelIntersectAction: "Rotate45",
  valueType: "Category",
};

export const stackedPrimaryYAxis = {
  lineStyle: { width: 0 },
  minimum: 100,
  maximum: 400,
  interval: 100,
  majorTickLines: { width: 0 },
  majorGridLines: { width: 1 },
  minorGridLines: { width: 1 },
  minorTickLines: { width: 0 },
  labelFormat: "{value}",
};
export const BarchartData = [
  {
    month: "Jan",
    Budget: 100,
    Expense: 220,
  },
  {
    month: "Feb",
    Budget: 120,
    Expense: 250,
  },
  {
    month: "Mar",
    Budget: 140,
    Expense: 280,
  },
  {
    month: "Apr",
    Budget: 150,
    Expense: 320,
  },
  {
    month: "May",
    Budget: 150,
    Expense: 320,
  },
  {
    month: "June",
    Budget: 150,
    Expense: 320,
  },
  {
    month: "July",
    Budget: 150,
    Expense: 320,
  },
];
