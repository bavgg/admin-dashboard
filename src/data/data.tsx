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
  UsersIcon as UsersIconSolid,
  ShoppingBagIcon as ShoppingBagIconSolid,
  ChartBarIcon as ChartBarIconSolid,
  ArrowPathIcon as ArrowPathIconSolid,
} from "@heroicons/react/24/solid";

import {
  UserGroupIcon,
  PresentationChartLineIcon as PresentationChartLineIconSolid,
  ChartBarSquareIcon as ChartBarSquareIconSolid,
  CalendarIcon,
} from "@heroicons/react/24/solid";

import p1 from "./images/p1.png";
import p2 from "./images/p2.png";
import p3 from "./images/p3.png";
import p4 from "./images/p4.png";
import p5 from "./images/p5.png";
import p6 from "./images/p6.png";
import p7 from "./images/p7.png";
import p8 from "./images/p8.png";
import p9 from "./images/p9.png";

import avatar from './images/avatar.png'
import avatar2 from './images/avatar2.png'
import avatar3 from './images/avatar3.png'
import avatar4 from './images/avatar4.png'

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
    icon: <UsersIconSolid fill="currentColor" width="24" height="24" />,
    amount: "39,354",
    percentage: "-4%",
    title: "Customers",
    iconColor: "#03C9D7",
    iconBg: "#E5FAFB",
    pcColor: "red-600",
  },
  {
    icon: <ShoppingBagIconSolid fill="currentColor" width="24" height="24" />,
    amount: "4,396",
    percentage: "+23%",
    title: "Products",
    iconColor: "rgb(254, 201, 15) ",
    iconBg: "rgb(255, 244, 229)",
    pcColor: "green-600",
  },
  {
    icon: <ChartBarIconSolid fill="currentColor" width="24" height="24" />,
    amount: "423,39",
    percentage: "+38%",
    title: "Sales",
    iconColor: "#FDA5A5",
    iconBg: "rgb(255, 244, 229)",

    pcColor: "green-600",
  },
  {
    icon: <ArrowPathIconSolid fill="currentColor" width="24" height="24" />,
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

export const ordersData = [
  {
    order_id: 10248,
    customer_name: "Vinet",

    total_amount: 32.38,
    product_name: "Fresh Tomato",
    location: "USA",
    status: "pending",
    status_background: "#FDE2E4",
    product_image: p6,
  },
  {
    order_id: 345653,
    customer_name: "Carson Darrin",
    total_amount: 56.34,
    product_name: "Butter Scotch",
    location: "Delhi",
    status: "complete",
    status_background: "#BEE1E6",
    product_image: p5,
  },
  {
    order_id: 390457,
    customer_name: "Fran Perez",
    total_amount: 93.31,
    product_name: "Candy Gucci",
    location: "New York",
    status: "active",
    status_background: "#DFE7FD",
    product_image: p7,
  },
  {
    order_id: 893486,
    customer_name: "Anika Viseer",
    total_amount: 93.31,
    product_name: "Night Lamp",
    location: "Germany",
    status: "canceled",
    status_background: "#FFF1E6",
    product_image: p4,
  },
  {
    order_id: 748975,
    customer_name: "Miron Vitold",
    total_amount: 23.99,
    product_name: "Healthcare Erbology",
    location: "Spain",
    status: "rejected",
    status_background: "#FAD2E1",
    product_image: p1,
  },
  {
    order_id: 94757,
    customer_name: "Omar Darobe",
    total_amount: 95.99,
    product_name: "Makeup Lancome Rouge",
    location: "USA",
    status: "canceled",
    status_background: "#FFF1E6",
    product_image: p2,
  },
  {
    order_id: 944895,
    customer_name: "Lulia albu",
    total_amount: 17.99,
    product_name: "Skincare",
    location: "USA",
    status: "active",
    status_background: "#DFE7FD",
    product_image: p3,
  },
  {
    order_id: 845954,
    customer_name: "Penjani",
    total_amount: 59.99,
    product_name: "Headphone",
    location: "USA",
    status: "complete",
    status_background: "#BEE1E6",
    product_image: p4,
  },
  {
    order_id: 845954,
    customer_name: "Jie Yan",
    total_amount: 87.99,
    product_name: "Shoes",
    location: "USA",
    status: "pending",
    status_background: "#FDE2E4",
    product_image:
      "https://cdn.shopclues.com/images1/thumbnails/104158/320/320/148648730-104158193-1592481791.jpg",
  },
  {
    order_id: 874534,
    customer_name: "Danai",
    total_amount: 122.99,
    product_name: "Watch",
    location: "USA",
    status: "canceled",
    status_background: "#FFF1E6",
    product_image:
      "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/pop-womens-garmin-watches-1641919013.jpg?crop=0.502xw:1.00xh;0.250xw,0&resize=640:*",
  },
  {
    order_id: 38489,
    customer_name: "Miron",
    total_amount: 87.99,
    product_name: "Ice Cream",
    location: "USA",
    status: "active",
    status_background: "#DFE7FD",
    product_image:
      "https://images.immediate.co.uk/production/volatile/sites/30/2020/08/dairy-free-ice-cream-eae372d.jpg",
  },
  {
    order_id: 24546,
    customer_name: "Frank",
    total_amount: 84.99,
    product_name: "Pan Cake",
    location: "Delhi",
    status: "complete",
    status_background: "#BEE1E6",
    product_image:
      "https://images.unsplash.com/photo-1576618148400-f54bed99fcfd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80",
  },
  {
    order_id: 874534,
    customer_name: "Danai",
    total_amount: 122.99,
    product_name: "Watch",
    location: "USA",
    status: "canceled",
    status_background: "#FFF1E6",
    product_image:
      "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/pop-womens-garmin-watches-1641919013.jpg?crop=0.502xw:1.00xh;0.250xw,0&resize=640:*",
  },
  {
    order_id: 10248,
    customer_name: "Vinet",

    total_amount: 32.38,
    product_name: "Fresh Tomato",
    location: "USA",
    status: "pending",
    status_background: "#FDE2E4",
    product_image: p6,
  },
  {
    order_id: 345653,
    customer_name: "Carson Darrin",
    total_amount: 56.34,
    product_name: "Butter Scotch",
    location: "Delhi",
    status: "complete",
    status_background: "#BEE1E6",
    product_image: p5,
  },
  {
    order_id: 390457,
    customer_name: "Fran Perez",
    total_amount: 93.31,
    product_name: "Candy Gucci",
    location: "New York",
    status: "active",
    status_background: "#DFE7FD",
    product_image: p7,
  },
  {
    order_id: 893486,
    customer_name: "Anika Viseer",
    total_amount: 93.31,
    product_name: "Night Lamp",
    location: "Germany",
    status: "canceled",
    status_background: "#FFF1E6",
    product_image: p4,
  },
  {
    order_id: 748975,
    customer_name: "Miron Vitold",
    total_amount: 23.99,
    product_name: "Healthcare Erbology",
    location: "Spain",
    status: "rejected",
    status_background: "#FAD2E1",
    product_image: p1,
  },
  {
    order_id: 94757,
    customer_name: "Omar Darobe",
    total_amount: 95.99,
    product_name: "Makeup Lancome Rouge",
    location: "USA",
    status: "canceled",
    status_background: "#FFF1E6",
    product_image: p2,
  },
  {
    order_id: 944895,
    customer_name: "Lulia albu",
    total_amount: 17.99,
    product_name: "Skincare",
    location: "USA",
    status: "active",
    status_background: "#DFE7FD",
    product_image: p3,
  },
  {
    order_id: 845954,
    customer_name: "Penjani",
    total_amount: 59.99,
    product_name: "Headphone",
    location: "USA",
    status: "complete",
    status_background: "#BEE1E6",
    product_image: p4,
  },
  {
    order_id: 845954,
    customer_name: "Jie Yan",
    total_amount: 87.99,
    product_name: "Shoes",
    location: "USA",
    status: "pending",
    status_background: "#FDE2E4",
    product_image:
      "https://cdn.shopclues.com/images1/thumbnails/104158/320/320/148648730-104158193-1592481791.jpg",
  },
  {
    order_id: 874534,
    customer_name: "Danai",
    total_amount: 122.99,
    product_name: "Watch",
    location: "USA",
    status: "canceled",
    status_background: "#FFF1E6",
    product_image:
      "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/pop-womens-garmin-watches-1641919013.jpg?crop=0.502xw:1.00xh;0.250xw,0&resize=640:*",
  },
  {
    order_id: 38489,
    customer_name: "Miron",
    total_amount: 87.99,
    product_name: "Ice Cream",
    location: "USA",
    status: "active",
    status_background: "#DFE7FD",
    product_image:
      "https://images.immediate.co.uk/production/volatile/sites/30/2020/08/dairy-free-ice-cream-eae372d.jpg",
  },
  {
    order_id: 24546,
    customer_name: "Frank",
    total_amount: 84.99,
    product_name: "Pan Cake",
    location: "Delhi",
    status: "complete",
    status_background: "#BEE1E6",
    product_image:
      "https://images.unsplash.com/photo-1576618148400-f54bed99fcfd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80",
  },
  {
    order_id: 874534,
    customer_name: "Danai",
    total_amount: 122.99,
    product_name: "Watch",
    location: "USA",
    status: "canceled",
    status_background: "#FFF1E6",
    product_image:
      "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/pop-womens-garmin-watches-1641919013.jpg?crop=0.502xw:1.00xh;0.250xw,0&resize=640:*",
  },
  {
    order_id: 10248,
    customer_name: "Vinet",

    total_amount: 32.38,
    product_name: "Fresh Tomato",
    location: "USA",
    status: "pending",
    status_background: "#FDE2E4",
    product_image: p6,
  },
  {
    order_id: 345653,
    customer_name: "Carson Darrin",
    total_amount: 56.34,
    product_name: "Butter Scotch",
    location: "Delhi",
    status: "complete",
    status_background: "#BEE1E6",
    product_image: p5,
  },
  {
    order_id: 390457,
    customer_name: "Fran Perez",
    total_amount: 93.31,
    product_name: "Candy Gucci",
    location: "New York",
    status: "active",
    status_background: "#DFE7FD",
    product_image: p7,
  },
  {
    order_id: 893486,
    customer_name: "Anika Viseer",
    total_amount: 93.31,
    product_name: "Night Lamp",
    location: "Germany",
    status: "canceled",
    status_background: "#FFF1E6",
    product_image: p4,
  },
  {
    order_id: 748975,
    customer_name: "Miron Vitold",
    total_amount: 23.99,
    product_name: "Healthcare Erbology",
    location: "Spain",
    status: "rejected",
    status_background: "#FAD2E1",
    product_image: p1,
  },
  {
    order_id: 94757,
    customer_name: "Omar Darobe",
    total_amount: 95.99,
    product_name: "Makeup Lancome Rouge",
    location: "USA",
    status: "canceled",
    status_background: "#FFF1E6",
    product_image: p2,
  },
  {
    order_id: 944895,
    customer_name: "Lulia albu",
    total_amount: 17.99,
    product_name: "Skincare",
    location: "USA",
    status: "active",
    status_background: "#DFE7FD",
    product_image: p3,
  },
  {
    order_id: 845954,
    customer_name: "Penjani",
    total_amount: 59.99,
    product_name: "Headphone",
    location: "USA",
    status: "complete",
    status_background: "#BEE1E6",
    product_image: p4,
  },
  {
    order_id: 845954,
    customer_name: "Jie Yan",
    total_amount: 87.99,
    product_name: "Shoes",
    location: "USA",
    status: "pending",
    status_background: "#FDE2E4",
    product_image:
      "https://cdn.shopclues.com/images1/thumbnails/104158/320/320/148648730-104158193-1592481791.jpg",
  },
  {
    order_id: 874534,
    customer_name: "Danai",
    total_amount: 122.99,
    product_name: "Watch",
    location: "USA",
    status: "canceled",
    status_background: "#FFF1E6",
    product_image:
      "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/pop-womens-garmin-watches-1641919013.jpg?crop=0.502xw:1.00xh;0.250xw,0&resize=640:*",
  },
  {
    order_id: 38489,
    customer_name: "Miron",
    total_amount: 87.99,
    product_name: "Ice Cream",
    location: "USA",
    status: "active",
    status_background: "#DFE7FD",
    product_image:
      "https://images.immediate.co.uk/production/volatile/sites/30/2020/08/dairy-free-ice-cream-eae372d.jpg",
  },
  {
    order_id: 24546,
    customer_name: "Frank",
    total_amount: 84.99,
    product_name: "Pan Cake",
    location: "Delhi",
    status: "complete",
    status_background: "#BEE1E6",
    product_image:
      "https://images.unsplash.com/photo-1576618148400-f54bed99fcfd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80",
  },
  {
    order_id: 874534,
    customer_name: "Danai",
    total_amount: 122.99,
    product_name: "Watch",
    location: "USA",
    status: "canceled",
    status_background: "#FFF1E6",
    product_image:
      "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/pop-womens-garmin-watches-1641919013.jpg?crop=0.502xw:1.00xh;0.250xw,0&resize=640:*",
  },
  {
    order_id: 10248,
    customer_name: "Vinet",

    total_amount: 32.38,
    product_name: "Fresh Tomato",
    location: "USA",
    status: "pending",
    status_background: "#FDE2E4",
    product_image: p6,
  },
  {
    order_id: 345653,
    customer_name: "Carson Darrin",
    total_amount: 56.34,
    product_name: "Butter Scotch",
    location: "Delhi",
    status: "complete",
    status_background: "#BEE1E6",
    product_image: p5,
  },
  {
    order_id: 390457,
    customer_name: "Fran Perez",
    total_amount: 93.31,
    product_name: "Candy Gucci",
    location: "New York",
    status: "active",
    status_background: "#DFE7FD",
    product_image: p7,
  },
  {
    order_id: 893486,
    customer_name: "Anika Viseer",
    total_amount: 93.31,
    product_name: "Night Lamp",
    location: "Germany",
    status: "canceled",
    status_background: "#FFF1E6",
    product_image: p4,
  },
  {
    order_id: 748975,
    customer_name: "Miron Vitold",
    total_amount: 23.99,
    product_name: "Healthcare Erbology",
    location: "Spain",
    status: "rejected",
    status_background: "#FAD2E1",
    product_image: p1,
  },
  {
    order_id: 94757,
    customer_name: "Omar Darobe",
    total_amount: 95.99,
    product_name: "Makeup Lancome Rouge",
    location: "USA",
    status: "canceled",
    status_background: "#FFF1E6",
    product_image: p2,
  },
  {
    order_id: 944895,
    customer_name: "Lulia albu",
    total_amount: 17.99,
    product_name: "Skincare",
    location: "USA",
    status: "active",
    status_background: "#DFE7FD",
    product_image: p3,
  },
  {
    order_id: 845954,
    customer_name: "Penjani",
    total_amount: 59.99,
    product_name: "Headphone",
    location: "USA",
    status: "complete",
    status_background: "#BEE1E6",
    product_image: p4,
  },
  {
    order_id: 845954,
    customer_name: "Jie Yan",
    total_amount: 87.99,
    product_name: "Shoes",
    location: "USA",
    status: "pending",
    status_background: "#FDE2E4",
    product_image:
      "https://cdn.shopclues.com/images1/thumbnails/104158/320/320/148648730-104158193-1592481791.jpg",
  },
  {
    order_id: 874534,
    customer_name: "Danai",
    total_amount: 122.99,
    product_name: "Watch",
    location: "USA",
    status: "canceled",
    status_background: "#FFF1E6",
    product_image:
      "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/pop-womens-garmin-watches-1641919013.jpg?crop=0.502xw:1.00xh;0.250xw,0&resize=640:*",
  },
  {
    order_id: 38489,
    customer_name: "Miron",
    total_amount: 87.99,
    product_name: "Ice Cream",
    location: "USA",
    status: "active",
    status_background: "#DFE7FD",
    product_image:
      "https://images.immediate.co.uk/production/volatile/sites/30/2020/08/dairy-free-ice-cream-eae372d.jpg",
  },
  {
    order_id: 24546,
    customer_name: "Frank",
    total_amount: 84.99,
    product_name: "Pan Cake",
    location: "Delhi",
    status: "complete",
    status_background: "#BEE1E6",
    product_image:
      "https://images.unsplash.com/photo-1576618148400-f54bed99fcfd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80",
  },
  {
    order_id: 874534,
    customer_name: "Danai",
    total_amount: 122.99,
    product_name: "Watch",
    location: "USA",
    status: "canceled",
    status_background: "#FFF1E6",
    product_image:
      "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/pop-womens-garmin-watches-1641919013.jpg?crop=0.502xw:1.00xh;0.250xw,0&resize=640:*",
  },
  {
    order_id: 10248,
    customer_name: "Vinet",

    total_amount: 32.38,
    product_name: "Fresh Tomato",
    location: "USA",
    status: "pending",
    status_background: "#FDE2E4",
    product_image: p6,
  },
  {
    order_id: 345653,
    customer_name: "Carson Darrin",
    total_amount: 56.34,
    product_name: "Butter Scotch",
    location: "Delhi",
    status: "complete",
    status_background: "#BEE1E6",
    product_image: p5,
  },
  {
    order_id: 390457,
    customer_name: "Fran Perez",
    total_amount: 93.31,
    product_name: "Candy Gucci",
    location: "New York",
    status: "active",
    status_background: "#DFE7FD",
    product_image: p7,
  },
  {
    order_id: 893486,
    customer_name: "Anika Viseer",
    total_amount: 93.31,
    product_name: "Night Lamp",
    location: "Germany",
    status: "canceled",
    status_background: "#FFF1E6",
    product_image: p4,
  },
  {
    order_id: 748975,
    customer_name: "Miron Vitold",
    total_amount: 23.99,
    product_name: "Healthcare Erbology",
    location: "Spain",
    status: "rejected",
    status_background: "#FAD2E1",
    product_image: p1,
  },
  {
    order_id: 94757,
    customer_name: "Omar Darobe",
    total_amount: 95.99,
    product_name: "Makeup Lancome Rouge",
    location: "USA",
    status: "canceled",
    status_background: "#FFF1E6",
    product_image: p2,
  },
  {
    order_id: 944895,
    customer_name: "Lulia albu",
    total_amount: 17.99,
    product_name: "Skincare",
    location: "USA",
    status: "active",
    status_background: "#DFE7FD",
    product_image: p3,
  },
  {
    order_id: 845954,
    customer_name: "Penjani",
    total_amount: 59.99,
    product_name: "Headphone",
    location: "USA",
    status: "complete",
    status_background: "#BEE1E6",
    product_image: p4,
  },
  {
    order_id: 845954,
    customer_name: "Jie Yan",
    total_amount: 87.99,
    product_name: "Shoes",
    location: "USA",
    status: "pending",
    status_background: "#FDE2E4",
    product_image:
      "https://cdn.shopclues.com/images1/thumbnails/104158/320/320/148648730-104158193-1592481791.jpg",
  },
  {
    order_id: 874534,
    customer_name: "Danai",
    total_amount: 122.99,
    product_name: "Watch",
    location: "USA",
    status: "canceled",
    status_background: "#FFF1E6",
    product_image:
      "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/pop-womens-garmin-watches-1641919013.jpg?crop=0.502xw:1.00xh;0.250xw,0&resize=640:*",
  },
  {
    order_id: 38489,
    customer_name: "Miron",
    total_amount: 87.99,
    product_name: "Ice Cream",
    location: "USA",
    status: "active",
    status_background: "#DFE7FD",
    product_image:
      "https://images.immediate.co.uk/production/volatile/sites/30/2020/08/dairy-free-ice-cream-eae372d.jpg",
  },
  {
    order_id: 24546,
    customer_name: "Frank",
    total_amount: 84.99,
    product_name: "Pan Cake",
    location: "Delhi",
    status: "complete",
    status_background: "#BEE1E6",
    product_image:
      "https://images.unsplash.com/photo-1576618148400-f54bed99fcfd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80",
  },
  {
    order_id: 874534,
    customer_name: "Danai",
    total_amount: 122.99,
    product_name: "Watch",
    location: "USA",
    status: "canceled",
    status_background: "#FFF1E6",
    product_image:
      "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/pop-womens-garmin-watches-1641919013.jpg?crop=0.502xw:1.00xh;0.250xw,0&resize=640:*",
  },
];

export const employeesData = [
  {
    employee_id: 1,
    employee_name: 'Nancy Davolio',
    employee_title: 'Sales Representative',
    hire_date: '01/02/2021',
    employee_country: 'USA',
    reports_to: 'Carson',
    employee_image:
    avatar3,
  },
  {
    employee_id: 2,
    employee_name: 'Nasimiyu Danai',
    employee_title: 'Marketing Head',
    hire_date: '01/02/2021',
    employee_country: 'USA',
    reports_to: 'Carson',
    employee_image:
      avatar3,
  },
  {
    employee_id: 3,
    employee_name: 'Iulia Albu',
    employee_title: 'HR',
    hire_date: '01/02/2021',
    employee_country: 'USA',
    reports_to: 'Carson',
    employee_image:
      avatar4,
  },
  {
    employee_id: 4,
    employee_name: 'Siegbert Gottfried',
    employee_title: 'Marketing Head',
    hire_date: '01/02/2021',
    employee_country: 'USA',
    reports_to: 'Carson',
    employee_image:
      avatar2,
  },
  {
    employee_id: 5,
    employee_name: 'Omar Darobe',
    employee_title: 'HR',
    hire_date: '01/02/2021',
    employee_country: 'USA',
    reports_to: 'Carson',
    employee_image:
      avatar,
  },
  {
    employee_id: 4,
    employee_name: 'Penjani Inyene',
    employee_title: 'Marketing Head',
    hire_date: '01/02/2021',
    employee_country: 'USA',
    reports_to: 'Carson',
    employee_image:
      avatar,
  },
  {
    employee_id: 5,
    employee_name: 'Miron Vitold',
    employee_title: 'HR',
    hire_date: '01/02/2021',
    employee_country: 'USA',
    reports_to: 'Carson',
    employee_image:
      avatar2,
  },
  {
    employee_id: 1,
    employee_name: 'Nancy Davolio',
    employee_title: 'Sales Representative',
    hire_date: '01/02/2021',
    employee_country: 'USA',
    reports_to: 'Carson',
    employee_image:
    avatar2,

  },
  {
    employee_id: 2,
    employee_name: 'Nasimiyu Danai',
    employee_title: 'Marketing Head',
    hire_date: '01/02/2021',
    employee_country: 'USA',
    reports_to: 'Carson',
    employee_image:
      avatar3,
  },
  {
    employee_id: 3,
    employee_name: 'Iulia Albu',
    employee_title: 'HR',
    hire_date: '01/02/2021',
    employee_country: 'USA',
    reports_to: 'Carson',
    employee_image:
      avatar4,
  },
  {
    employee_id: 4,
    employee_name: 'Siegbert Gottfried',
    employee_title: 'Marketing Head',
    hire_date: '01/02/2021',
    employee_country: 'USA',
    reports_to: 'Carson',
    employee_image:
      avatar2,
  },
  {
    employee_id: 5,
    employee_name: 'Omar Darobe',
    employee_title: 'HR',
    hire_date: '01/02/2021',
    employee_country: 'USA',
    reports_to: 'Carson',
    employee_image:
      avatar,
  },
  {
    employee_id: 4,
    employee_name: 'Penjani Inyene',
    employee_title: 'Marketing Head',
    hire_date: '01/02/2021',
    employee_country: 'USA',
    reports_to: 'Carson',
    employee_image:
      avatar,
  },
  {
    employee_id: 5,
    employee_name: 'Miron Vitold',
    employee_title: 'HR',
    hire_date: '01/02/2021',
    employee_country: 'USA',
    reports_to: 'Carson',
    employee_image:
      avatar2,
  },
  {
    employee_id: 1,
    employee_name: 'Nancy Davolio',
    employee_title: 'Sales Representative',
    hire_date: '01/02/2021',
    employee_country: 'USA',
    reports_to: 'Carson',
    employee_image:
    avatar,
  },
  {
    employee_id: 2,
    employee_name: 'Nasimiyu Danai',
    employee_title: 'Marketing Head',
    hire_date: '01/02/2021',
    employee_country: 'USA',
    reports_to: 'Carson',
    employee_image:
      avatar3,
  },
  {
    employee_id: 3,
    employee_name: 'Iulia Albu',
    employee_title: 'HR',
    hire_date: '01/02/2021',
    employee_country: 'USA',
    reports_to: 'Carson',
    employee_image:
      avatar4,
  },
  {
    employee_id: 4,
    employee_name: 'Siegbert Gottfried',
    employee_title: 'Marketing Head',
    hire_date: '01/02/2021',
    employee_country: 'USA',
    reports_to: 'Carson',
    employee_image:
      avatar2,
  },
  {
    employee_id: 5,
    employee_name: 'Omar Darobe',
    employee_title: 'HR',
    hire_date: '01/02/2021',
    employee_country: 'USA',
    reports_to: 'Carson',
    employee_image:
      avatar,
  },
  {
    employee_id: 4,
    employee_name: 'Penjani Inyene',
    employee_title: 'Marketing Head',
    hire_date: '01/02/2021',
    employee_country: 'USA',
    reports_to: 'Carson',
    employee_image:
      avatar,
  },
  {
    employee_id: 5,
    employee_name: 'Miron Vitold',
    employee_title: 'HR',
    hire_date: '01/02/2021',
    employee_country: 'USA',
    reports_to: 'Carson',
    employee_image:
      avatar2,
  },
  {
    employee_id: 1,
    employee_name: 'Nancy Davolio',
    employee_title: 'Sales Representative',
    hire_date: '01/02/2021',
    employee_country: 'USA',
    reports_to: 'Carson',
    employee_image:
    avatar2,

  },
  {
    employee_id: 2,
    employee_name: 'Nasimiyu Danai',
    employee_title: 'Marketing Head',
    hire_date: '01/02/2021',
    employee_country: 'USA',
    reports_to: 'Carson',
    employee_image:
      avatar3,
  },
  {
    employee_id: 3,
    employee_name: 'Iulia Albu',
    employee_title: 'HR',
    hire_date: '01/02/2021',
    employee_country: 'USA',
    reports_to: 'Carson',
    employee_image:
      avatar4,
  },
  {
    employee_id: 4,
    employee_name: 'Siegbert Gottfried',
    employee_title: 'Marketing Head',
    hire_date: '01/02/2021',
    employee_country: 'USA',
    reports_to: 'Carson',
    employee_image:
      avatar2,
  },
  {
    employee_id: 5,
    employee_name: 'Omar Darobe',
    employee_title: 'HR',
    hire_date: '01/02/2021',
    employee_country: 'USA',
    reports_to: 'Carson',
    employee_image:
      avatar,
  },
  {
    employee_id: 4,
    employee_name: 'Penjani Inyene',
    employee_title: 'Marketing Head',
    hire_date: '01/02/2021',
    employee_country: 'USA',
    reports_to: 'Carson',
    employee_image:
      avatar,
  },
  {
    employee_id: 5,
    employee_name: 'Miron Vitold',
    employee_title: 'HR',
    hire_date: '01/02/2021',
    employee_country: 'USA',
    reports_to: 'Carson',
    employee_image:
      avatar2,
  },
  {
    employee_id: 1,
    employee_name: 'Nancy Davolio',
    employee_title: 'Sales Representative',
    hire_date: '01/02/2021',
    employee_country: 'USA',
    reports_to: 'Carson',
    employee_image:
    avatar2,

  },
  {
    employee_id: 2,
    employee_name: 'Nasimiyu Danai',
    employee_title: 'Marketing Head',
    hire_date: '01/02/2021',
    employee_country: 'USA',
    reports_to: 'Carson',
    employee_image:
      avatar3,
  },
  {
    employee_id: 3,
    employee_name: 'Iulia Albu',
    employee_title: 'HR',
    hire_date: '01/02/2021',
    employee_country: 'USA',
    reports_to: 'Carson',
    employee_image:
      avatar4,
  },
  {
    employee_id: 4,
    employee_name: 'Siegbert Gottfried',
    employee_title: 'Marketing Head',
    hire_date: '01/02/2021',
    employee_country: 'USA',
    reports_to: 'Carson',
    employee_image:
      avatar2,
  },
  {
    employee_id: 5,
    employee_name: 'Omar Darobe',
    employee_title: 'HR',
    hire_date: '01/02/2021',
    employee_country: 'USA',
    reports_to: 'Carson',
    employee_image:
      avatar,
  },
  {
    employee_id: 4,
    employee_name: 'Penjani Inyene',
    employee_title: 'Marketing Head',
    hire_date: '01/02/2021',
    employee_country: 'USA',
    reports_to: 'Carson',
    employee_image:
      avatar,
  },
  {
    employee_id: 5,
    employee_name: 'Miron Vitold',
    employee_title: 'HR',
    hire_date: '01/02/2021',
    employee_country: 'USA',
    reports_to: 'Carson',
    employee_image:
      avatar2,
  },
  {
    employee_id: 1,
    employee_name: 'Nancy Davolio',
    employee_title: 'Sales Representative',
    hire_date: '01/02/2021',
    employee_country: 'USA',
    reports_to: 'Carson',
    employee_image:
    avatar2,

  },
  {
    employee_id: 2,
    employee_name: 'Nasimiyu Danai',
    employee_title: 'Marketing Head',
    hire_date: '01/02/2021',
    employee_country: 'USA',
    reports_to: 'Carson',
    employee_image:
      avatar3,
  },
  {
    employee_id: 3,
    employee_name: 'Iulia Albu',
    employee_title: 'HR',
    hire_date: '01/02/2021',
    employee_country: 'USA',
    reports_to: 'Carson',
    employee_image:
      avatar4,
  },
  {
    employee_id: 4,
    employee_name: 'Siegbert Gottfried',
    employee_title: 'Marketing Head',
    hire_date: '01/02/2021',
    employee_country: 'USA',
    reports_to: 'Carson',
    employee_image:
      avatar2,
  },
  {
    employee_id: 5,
    employee_name: 'Omar Darobe',
    employee_title: 'HR',
    hire_date: '01/02/2021',
    employee_country: 'USA',
    reports_to: 'Carson',
    employee_image:
      avatar,
  },
  {
    employee_id: 4,
    employee_name: 'Penjani Inyene',
    employee_title: 'Marketing Head',
    hire_date: '01/02/2021',
    employee_country: 'USA',
    reports_to: 'Carson',
    employee_image:
      avatar,
  },
  {
    employee_id: 5,
    employee_name: 'Miron Vitold',
    employee_title: 'HR',
    hire_date: '01/02/2021',
    employee_country: 'USA',
    reports_to: 'Carson',
    employee_image:
      avatar2,
  },
  {
    employee_id: 1,
    employee_name: 'Nancy Davolio',
    employee_title: 'Sales Representative',
    hire_date: '01/02/2021',
    employee_country: 'USA',
    reports_to: 'Carson',
    employee_image:
    avatar2,

  },
  {
    employee_id: 2,
    employee_name: 'Nasimiyu Danai',
    employee_title: 'Marketing Head',
    hire_date: '01/02/2021',
    employee_country: 'USA',
    reports_to: 'Carson',
    employee_image:
      avatar3,
  },
  {
    employee_id: 3,
    employee_name: 'Iulia Albu',
    employee_title: 'HR',
    hire_date: '01/02/2021',
    employee_country: 'USA',
    reports_to: 'Carson',
    employee_image:
      avatar4,
  },
  {
    employee_id: 4,
    employee_name: 'Siegbert Gottfried',
    employee_title: 'Marketing Head',
    hire_date: '01/02/2021',
    employee_country: 'USA',
    reports_to: 'Carson',
    employee_image:
      avatar2,
  },
  {
    employee_id: 5,
    employee_name: 'Omar Darobe',
    employee_title: 'HR',
    hire_date: '01/02/2021',
    employee_country: 'USA',
    reports_to: 'Carson',
    employee_image:
      avatar,
  },
  {
    employee_id: 4,
    employee_name: 'Penjani Inyene',
    employee_title: 'Marketing Head',
    hire_date: '01/02/2021',
    employee_country: 'USA',
    reports_to: 'Carson',
    employee_image:
      avatar,
  },
  {
    employee_id: 5,
    employee_name: 'Miron Vitold',
    employee_title: 'HR',
    hire_date: '01/02/2021',
    employee_country: 'USA',
    reports_to: 'Carson',
    employee_image:
      avatar2,
  },
  {
    employee_id: 1,
    employee_name: 'Nancy Davolio',
    employee_title: 'Sales Representative',
    hire_date: '01/02/2021',
    employee_country: 'USA',
    reports_to: 'Carson',
    employee_image:
    avatar2,

  },
  {
    employee_id: 2,
    employee_name: 'Nasimiyu Danai',
    employee_title: 'Marketing Head',
    hire_date: '01/02/2021',
    employee_country: 'USA',
    reports_to: 'Carson',
    employee_image:
      avatar3,
  },
  {
    employee_id: 3,
    employee_name: 'Iulia Albu',
    employee_title: 'HR',
    hire_date: '01/02/2021',
    employee_country: 'USA',
    reports_to: 'Carson',
    employee_image:
      avatar4,
  },
  {
    employee_id: 4,
    employee_name: 'Siegbert Gottfried',
    employee_title: 'Marketing Head',
    hire_date: '01/02/2021',
    employee_country: 'USA',
    reports_to: 'Carson',
    employee_image:
      avatar2,
  },
  {
    employee_id: 5,
    employee_name: 'Omar Darobe',
    employee_title: 'HR',
    hire_date: '01/02/2021',
    employee_country: 'USA',
    reports_to: 'Carson',
    employee_image:
      avatar,
  },
  {
    employee_id: 4,
    employee_name: 'Penjani Inyene',
    employee_title: 'Marketing Head',
    hire_date: '01/02/2021',
    employee_country: 'USA',
    reports_to: 'Carson',
    employee_image:
      avatar,
  },
  {
    employee_id: 5,
    employee_name: 'Miron Vitold',
    employee_title: 'HR',
    hire_date: '01/02/2021',
    employee_country: 'USA',
    reports_to: 'Carson',
    employee_image:
      avatar2,
  },
  {
    employee_id: 1,
    employee_name: 'Nancy Davolio',
    employee_title: 'Sales Representative',
    hire_date: '01/02/2021',
    employee_country: 'USA',
    reports_to: 'Carson',
    employee_image:
    avatar2,

  },
  {
    employee_id: 2,
    employee_name: 'Nasimiyu Danai',
    employee_title: 'Marketing Head',
    hire_date: '01/02/2021',
    employee_country: 'USA',
    reports_to: 'Carson',
    employee_image:
      avatar3,
  },
  {
    employee_id: 3,
    employee_name: 'Iulia Albu',
    employee_title: 'HR',
    hire_date: '01/02/2021',
    employee_country: 'USA',
    reports_to: 'Carson',
    employee_image:
      avatar4,
  },
  {
    employee_id: 4,
    employee_name: 'Siegbert Gottfried',
    employee_title: 'Marketing Head',
    hire_date: '01/02/2021',
    employee_country: 'USA',
    reports_to: 'Carson',
    employee_image:
      avatar2,
  },
  {
    employee_id: 5,
    employee_name: 'Omar Darobe',
    employee_title: 'HR',
    hire_date: '01/02/2021',
    employee_country: 'USA',
    reports_to: 'Carson',
    employee_image:
      avatar,
  },
  {
    employee_id: 4,
    employee_name: 'Penjani Inyene',
    employee_title: 'Marketing Head',
    hire_date: '01/02/2021',
    employee_country: 'USA',
    reports_to: 'Carson',
    employee_image:
      avatar,
  },
  {
    employee_id: 5,
    employee_name: 'Miron Vitold',
    employee_title: 'HR',
    hire_date: '01/02/2021',
    employee_country: 'USA',
    reports_to: 'Carson',
    employee_image:
      avatar2,
  },
];

export const customersData = [
  {
    customer_id: 1001,
    customer_name: 'Nirav Joshi',
    customer_email: 'nirav@gmail.com',
    customer_image:
      avatar2,
    project_name: 'Hosting Press HTML',
    status: 'Active',
    status_bg: '#BEE1E6',
    weeks: '40',
    budget: '$2.4k',
    location: 'India',
  },
  {
    customer_id: 1002,

    customer_name: 'Sunil Joshi',
    customer_email: 'sunil@gmail.com',
    project_name: 'Elite Admin',
    status: 'Active',
    customer_image:
      avatar3,

    status_bg: '#BEE1E6',
    weeks: '11',
    budget: '$3.9k',
    location: 'India',
  },
  {
    customer_id: 1003,

    customer_name: 'Andrew McDownland',
    customer_email: 'andrew@gmail.com',
    project_name: 'Real Homes WP Theme',
    status: 'Pending',
    customer_image:
      avatar4,
    status_bg: '#FFF1E6',
    weeks: '19',
    budget: '$24.5k',
    location: 'USA',
  },
  {
    customer_id: 1004,

    customer_name: 'Christopher Jamil',
    customer_email: 'jamil@gmail.com',
    project_name: 'MedicalPro WP Theme',
    status: 'Completed',
    customer_image:
      avatar,
    status_bg: '#BEE1E6',
    weeks: '34',
    budget: '$16.5k',
    location: 'USA',
  },
  {
    customer_id: 1005,

    customer_name: 'Michael',
    customer_email: 'michael@gmail.com',
    project_name: 'Weekly WP Theme',
    status: 'Cancel',
    customer_image:
      avatar2,
    status_bg: '#FDE2E4',
    weeks: '34',
    budget: '$16.5k',
    location: 'USA',
  },
  {
    customer_id: 1006,
    customer_name: 'Nirav Joshi',
    customer_email: 'nirav@gmail.com',
    customer_image:
      avatar2,
    project_name: 'Hosting Press HTML',
    status: 'Active',
    status_bg: '#BEE1E6',
    weeks: '40',
    budget: '$2.4k',
    location: 'India',
  },
  {
    customer_id: 1007,

    customer_name: 'Sunil Joshi',
    customer_email: 'sunil@gmail.com',
    project_name: 'Elite Admin',
    status: 'Active',
    customer_image:
      avatar3,

    status_bg: '#BEE1E6',
    weeks: '11',
    budget: '$3.9k',
    location: 'India',
  },
  {
    customer_id: 1008,

    customer_name: 'Andrew McDownland',
    customer_email: 'andrew@gmail.com',
    project_name: 'Real Homes WP Theme',
    status: 'Pending',
    customer_image:
      avatar4,
    status_bg: '#FFF1E6',
    weeks: '19',
    budget: '$24.5k',
    location: 'USA',
  },
  {
    customer_id: 1009,

    customer_name: 'Christopher Jamil',
    customer_email: 'jamil@gmail.com',
    project_name: 'MedicalPro WP Theme',
    status: 'Completed',
    customer_image:
      avatar,
    status_bg: '#BEE1E6',
    weeks: '34',
    budget: '$16.5k',
    location: 'USA',
  },
  {
    customer_id: 1010,

    customer_name: 'Michael',
    customer_email: 'michael@gmail.com',
    project_name: 'Weekly WP Theme',
    status: 'Cancel',
    customer_image:
      avatar2,
    status_bg: '#FDE2E4',
    weeks: '34',
    budget: '$16.5k',
    location: 'USA',
  },
  {
    customer_id: 1011,
    customer_name: 'Nirav Joshi',
    customer_email: 'nirav@gmail.com',
    customer_image:
      avatar2,
    project_name: 'Hosting Press HTML',
    status: 'Active',
    status_bg: '#BEE1E6',
    weeks: '40',
    budget: '$2.4k',
    location: 'India',
  },
  {
    customer_id: 1012,

    customer_name: 'Sunil Joshi',
    customer_email: 'sunil@gmail.com',
    project_name: 'Elite Admin',
    status: 'Active',
    customer_image:
      avatar3,

    status_bg: '#BEE1E6',
    weeks: '11',
    budget: '$3.9k',
    location: 'India',
  },
  {
    customer_id: 1013,

    customer_name: 'Andrew McDownland',
    customer_email: 'andrew@gmail.com',
    project_name: 'Real Homes WP Theme',
    status: 'Pending',
    customer_image:
      avatar4,
    status_bg: '#FFF1E6',
    weeks: '19',
    budget: '$24.5k',
    location: 'USA',
  },
  {
    customer_id: 1014,

    customer_name: 'Christopher Jamil',
    customer_email: 'jamil@gmail.com',
    project_name: 'MedicalPro WP Theme',
    status: 'Completed',
    customer_image:
      avatar,
    status_bg: '#BEE1E6',
    weeks: '34',
    budget: '$16.5k',
    location: 'USA',
  },
  {
    customer_id: 1015,

    customer_name: 'Michael',
    customer_email: 'michael@gmail.com',
    project_name: 'Weekly WP Theme',
    status: 'Cancel',
    customer_image:
      avatar2,
    status_bg: '#FDE2E4',
    weeks: '34',
    budget: '$16.5k',
    location: 'USA',
  },
  {
    customer_id: 1016,
    customer_name: 'Nirav Joshi',
    customer_email: 'nirav@gmail.com',
    customer_image:
      avatar2,
    project_name: 'Hosting Press HTML',
    status: 'Active',
    status_bg: '#BEE1E6',
    weeks: '40',
    budget: '$2.4k',
    location: 'India',
  },
  {
    customer_id: 1017,

    customer_name: 'Sunil Joshi',
    customer_email: 'sunil@gmail.com',
    project_name: 'Elite Admin',
    status: 'Active',
    customer_image:
      avatar3,

    status_bg: '#BEE1E6',
    weeks: '11',
    budget: '$3.9k',
    location: 'India',
  },
  {
    customer_id: 1018,

    customer_name: 'Andrew McDownland',
    customer_email: 'andrew@gmail.com',
    project_name: 'Real Homes WP Theme',
    status: 'Pending',
    customer_image:
      avatar4,
    status_bg: '#FFF1E6',
    weeks: '19',
    budget: '$24.5k',
    location: 'USA',
  },
  {
    customer_id: 1019,

    customer_name: 'Christopher Jamil',
    customer_email: 'jamil@gmail.com',
    project_name: 'MedicalPro WP Theme',
    status: 'Completed',
    customer_image:
      avatar,
    status_bg: '#BEE1E6',
    weeks: '34',
    budget: '$16.5k',
    location: 'USA',
  },
  {
    customer_id: 1020,

    customer_name: 'Michael',
    customer_email: 'michael@gmail.com',
    project_name: 'Weekly WP Theme',
    status: 'Cancel',
    customer_image:
      avatar2,
    status_bg: '#FDE2E4',
    weeks: '34',
    budget: '$16.5k',
    location: 'USA',
  },
  {
    customer_id: 1021,
    customer_name: 'Nirav Joshi',
    customer_email: 'nirav@gmail.com',
    customer_image:
      avatar2,
    project_name: 'Hosting Press HTML',
    status: 'Active',
    status_bg: '#BEE1E6',
    weeks: '40',
    budget: '$2.4k',
    location: 'India',
  },
  {
    customer_id: 1022,

    customer_name: 'Sunil Joshi',
    customer_email: 'sunil@gmail.com',
    project_name: 'Elite Admin',
    status: 'Active',
    customer_image:
      avatar3,

    status_bg: '#BEE1E6',
    weeks: '11',
    budget: '$3.9k',
    location: 'India',
  },
  {
    customer_id: 1023,

    customer_name: 'Andrew McDownland',
    customer_email: 'andrew@gmail.com',
    project_name: 'Real Homes WP Theme',
    status: 'Pending',
    customer_image:
      avatar4,
    status_bg: '#FFF1E6',
    weeks: '19',
    budget: '$24.5k',
    location: 'USA',
  },
  {
    customer_id: 1024,

    customer_name: 'Christopher Jamil',
    customer_email: 'jamil@gmail.com',
    project_name: 'MedicalPro WP Theme',
    status: 'Completed',
    customer_image:
      avatar,
    status_bg: '#BEE1E6',
    weeks: '34',
    budget: '$16.5k',
    location: 'USA',
  },
  {
    customer_id: 1025,

    customer_name: 'Michael',
    customer_email: 'michael@gmail.com',
    project_name: 'Weekly WP Theme',
    status: 'Cancel',
    customer_image:
      avatar2,
    status_bg: '#FDE2E4',
    weeks: '34',
    budget: '$16.5k',
    location: 'USA',
  },
  {
    customer_id: 1026,
    customer_name: 'Nirav Joshi',
    customer_email: 'nirav@gmail.com',
    customer_image:
      avatar2,
    project_name: 'Hosting Press HTML',
    status: 'Active',
    status_bg: '#BEE1E6',
    weeks: '40',
    budget: '$2.4k',
    location: 'India',
  },
  {
    customer_id: 1027,

    customer_name: 'Sunil Joshi',
    customer_email: 'sunil@gmail.com',
    project_name: 'Elite Admin',
    status: 'Active',
    customer_image:
      avatar3,

    status_bg: '#BEE1E6',
    weeks: '11',
    budget: '$3.9k',
    location: 'India',
  },
  {
    customer_id: 1028,

    customer_name: 'Andrew McDownland',
    customer_email: 'andrew@gmail.com',
    project_name: 'Real Homes WP Theme',
    status: 'Pending',
    customer_image:
      avatar4,
    status_bg: '#FFF1E6',
    weeks: '19',
    budget: '$24.5k',
    location: 'USA',
  },
  {
    customer_id: 1029,

    customer_name: 'Christopher Jamil',
    customer_email: 'jamil@gmail.com',
    project_name: 'MedicalPro WP Theme',
    status: 'Completed',
    customer_image:
      avatar,
    status_bg: '#BEE1E6',
    weeks: '34',
    budget: '$16.5k',
    location: 'USA',
  },
  {
    customer_id: 1030,

    customer_name: 'Michael',
    customer_email: 'michael@gmail.com',
    project_name: 'Weekly WP Theme',
    status: 'Cancel',
    customer_image:
      avatar2,
    status_bg: '#FDE2E4',
    weeks: '34',
    budget: '$16.5k',
    location: 'USA',
  },
  {
    customer_id: 1031,
    customer_name: 'Nirav Joshi',
    customer_email: 'nirav@gmail.com',
    customer_image:
      avatar2,
    project_name: 'Hosting Press HTML',
    status: 'Active',
    status_bg: '#BEE1E6',
    weeks: '40',
    budget: '$2.4k',
    location: 'India',
  },
  {
    customer_id: 1032,

    customer_name: 'Sunil Joshi',
    customer_email: 'sunil@gmail.com',
    project_name: 'Elite Admin',
    status: 'Active',
    customer_image:
      avatar3,

    status_bg: '#BEE1E6',
    weeks: '11',
    budget: '$3.9k',
    location: 'India',
  },
  {
    customer_id: 1033,

    customer_name: 'Andrew McDownland',
    customer_email: 'andrew@gmail.com',
    project_name: 'Real Homes WP Theme',
    status: 'Pending',
    customer_image:
      avatar4,
    status_bg: '#FFF1E6',
    weeks: '19',
    budget: '$24.5k',
    location: 'USA',
  },
  {
    customer_id: 1034,

    customer_name: 'Christopher Jamil',
    customer_email: 'jamil@gmail.com',
    project_name: 'MedicalPro WP Theme',
    status: 'Completed',
    customer_image:
      avatar,
    status_bg: '#BEE1E6',
    weeks: '34',
    budget: '$16.5k',
    location: 'USA',
  },
  {
    customer_id: 1035,

    customer_name: 'Michael',
    customer_email: 'michael@gmail.com',
    project_name: 'Weekly WP Theme',
    status: 'Cancel',
    customer_image:
      avatar2,
    status_bg: '#FDE2E4',
    weeks: '34',
    budget: '$16.5k',
    location: 'USA',
  },
  {
    customer_id: 1036,
    customer_name: 'Nirav Joshi',
    customer_email: 'nirav@gmail.com',
    customer_image:
      avatar2,
    project_name: 'Hosting Press HTML',
    status: 'Active',
    status_bg: '#BEE1E6',
    weeks: '40',
    budget: '$2.4k',
    location: 'India',
  },
  {
    customer_id: 1037,

    customer_name: 'Sunil Joshi',
    customer_email: 'sunil@gmail.com',
    project_name: 'Elite Admin',
    status: 'Active',
    customer_image:
      avatar3,

    status_bg: '#BEE1E6',
    weeks: '11',
    budget: '$3.9k',
    location: 'India',
  },
  {
    customer_id: 1038,

    customer_name: 'Andrew McDownland',
    customer_email: 'andrew@gmail.com',
    project_name: 'Real Homes WP Theme',
    status: 'Pending',
    customer_image:
      avatar4,
    status_bg: '#FFF1E6',
    weeks: '19',
    budget: '$24.5k',
    location: 'USA',
  },
  {
    customer_id: 1039,
    customer_name: 'Christopher Jamil',
    customer_email: 'jamil@gmail.com',
    project_name: 'MedicalPro WP Theme',
    status: 'Completed',
    customer_image:
      avatar,
    status_bg: '#BEE1E6',
    weeks: '34',
    budget: '$16.5k',
    location: 'USA',
  },
  {
    customer_id: 1040,
    customer_name: 'Michael',
    customer_email: 'michael@gmail.com',
    project_name: 'Weekly WP Theme',
    status: 'Cancel',
    customer_image:
      avatar2,
    status_bg: '#FDE2E4',
    weeks: '34',
    budget: '$16.5k',
    location: 'USA',
  },

];
