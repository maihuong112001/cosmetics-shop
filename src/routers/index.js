// Layouts
import { HeaderOnly } from "@/layouts";

// Pages
import Home from "@/pages/Home";
import Collection from "@/pages/Collection";
import Product from "@/pages/Product";
import Upload from "@/pages/Upload";
import Search from "@/pages/Search";

// Public routes
const publicRoutes = [
  { path: "/", component: Home },
  { path: "/collection", component: Collection },
  { path: "/product", component: Product },
  { path: "/upload", component: Upload, layout: HeaderOnly },
  { path: "/search", component: Search, layout: null },
];

//Routing guard

const privateRoutes = [];

export { publicRoutes, privateRoutes };
