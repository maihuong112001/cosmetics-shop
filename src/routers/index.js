
// Pages
import Home from "@/pages/Home";
import Collection from "@/pages/Collection";
import Product from "@/pages/Product";
import Card from "@/pages/Card";
import Register from "@/pages/Register";
import Login from "@/pages/Login";
import MyAccount from "@/pages/MyAccount";

// Public routes
const publicRoutes = [
  { path: "/", component: Home },
  { path: "/collection", component: Collection },
  { path: "/product", component: Product },
  { path: "/card", component: Card},
  { path: "/account/register", component: Register},
  { path: "/account/login", component: Login},
  { path: "/account", component: MyAccount},
];

//Routing guard

const privateRoutes = [];

export { publicRoutes, privateRoutes };
