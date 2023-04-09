// Layouts
import { HeaderOnly } from "@/layouts";

// Pages
import Home from "@/pages/Home";
import Collection from "@/pages/Collection";
import Product from "@/pages/Product";
import Upload from "@/pages/Upload";
import Search from "@/pages/Search";
import Card from "@/pages/Card";
import Register from "@/pages/Register";
import Login from "@/pages/Login";

// Public routes
const publicRoutes = [
  { path: "/", component: Home },
  { path: "/collection", component: Collection },
  { path: "/product", component: Product },
  { path: "/upload", component: Upload, layout: HeaderOnly },
  { path: "/search", component: Search, layout: null },
  { path: "/card", component: Card},
  { path: "/account/register", component: Register},
  { path: "/account/login", component: Login},
];

//Routing guard

const privateRoutes = [];

export { publicRoutes, privateRoutes };
