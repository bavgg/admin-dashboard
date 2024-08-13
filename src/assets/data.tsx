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

export const navigation = [
  {
    title: "Dashboard",
    links: [
      {
        name: "ecommerce",
        icon: <ShoppingBag fill="black" width="24" height="24" />,
      },
    ],
  },

  {
    title: "Pages",
    links: [
      {
        name: "orders",
        icon: <ShoppingCart fill="black" width="24" height="24" />,
      },
      {
        name: "employees",
        icon: <Employees fill="black" width="24" height="24" />,
      },
      {
        name: "customers",
        icon: <Customers fill="black" width="24" height="24" />,
      },
    ],
  },
  {
    title: "Apps",
    links: [
      {
        name: "calendar",
        icon: <Calendar fill="black" width="24" height="24" />,
      },
      {
        name: "kanban",
        icon: <Board fill="black" width="24" height="24" />,
      },
      {
        name: "editor",
        icon: <Edit fill="black" width="24" height="24" />,
      },
      {
        name: "color-picker",
        icon: <Swatch fill="black" width="24" height="24" />,
      },
    ],
  },
  {
    title: "Charts",
    links: [
      {
        name: "line",
        icon: <LineChart fill="black" width="24" height="24" />,
      },
      {
        name: "area",
        icon: <AreaChart fill="black" width="24" height="24" />,
      },

      {
        name: "bar",
        icon: <BarChart fill="black" width="24" height="24" />,
      },
      {
        name: "pie",
        icon: <PieChart fill="black" width="24" height="24" />,
      },
      {
        name: "financial",
        icon: <Calculator fill="black" width="24" height="24" />,
      },
      {
        name: "color-mapping",
        icon: <ColorMap fill="black" width="24" height="24" />,
      },
      {
        name: "pyramid",
        icon: <Pyramid fill="black" width="24" height="24" />,
      },
      {
        name: "stacked",
        icon: <BarChartSolid fill="black" width="24" height="24" />,
      },
    ],
  },
];
