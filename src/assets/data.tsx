import {
  ShoppingBag,
  ShoppingCart,
  Employees,
  Customers,
  Calendar,
  Board,
  Edit,
  Swatch,
  LineChart,
  AreaChart,
  BarChart,
  PieChart,
  Calculator,
  ColorMap,
  Pyramid,
  BarChartSolid,
} from "./icons";

type navigationType = {
  title: string,
  links: {
    name: string,
    icon: JSX.Element
  }[]
}

export const navigation: navigationType[] = [
  {
    title: "Dashboard",
    links: [
      {
        name: "Ecommerce",
        icon: <ShoppingBag fill="none" width="20" height="20" />,
      },
    ],
  },

  {
    title: "Pages",
    links: [
      {
        name: "Orders",
        icon: <ShoppingCart fill="none" width="20" height="20" />,
      },
      {
        name: "Employees",
        icon: <Employees fill="none" width="20" height="20" />,
      },
      {
        name: "Customers",
        icon: <Customers fill="currentColor" width="20" height="20" />,
      },
    ],
  },
  {
    title: "Apps",
    links: [
      {
        name: "Calendar",
        icon: <Calendar fill="currentColor" width="20" height="20" />,
      },
      {
        name: "Kanban",
        icon: <Board fill="none" width="20" height="20" />,
      },
      {
        name: "Editor",
        icon: <Edit fill="none" width="20" height="20" />,
      },
      {
        name: "Color-Picker",
        icon: <Swatch fill="none" width="20" height="20" />,
      },
    ],
  },
  {
    title: "Charts",
    links: [
      {
        name: "Line",
        icon: <LineChart fill="none" width="20" height="20" />,
      },
      {
        name: "Area",
        icon: <AreaChart fill="currentColor" width="20" height="20" />,
      },

      {
        name: "Bar",
        icon: <BarChart fill="none" width="20" height="20" />,
      },
      {
        name: "Pie",
        icon: <PieChart fill="none" width="20" height="20" />,
      },
      {
        name: "Financial",
        icon: <Calculator fill="none" width="20" height="20" />,
      },
      {
        name: "Color-Mapping",
        icon: <ColorMap fill="none" width="20" height="20" />,
      },
      {
        name: "Pyramid",
        icon: <Pyramid fill="currentColor" width="20" height="20" />,
      },
      {
        name: "Stacked",
        icon: <BarChartSolid fill="currentColor" width="20" height="20" />,
      },
    ],
  },
];
