/**
 * @copyright UCB Fintech Company Ltd
 * @author Md. Hashinur Rahman
 * @email hasinoorit@gmail.com
 * @create date 2021-06-15 12:03:41
 * @modify date 2021-06-15 12:10:56
 * @desc [description]
 */

// Import Layouts
import PrivateLayout from "./components/layouts/PrivateLayout/index";
import NotFound from "./components/NotFound";
// Import Page components
import Dashboard from "./pages/Dashboard/Dashboard";
import Login from "./pages/Auth/Login/Login";
import Logout from "./pages/Auth/Logout/Logout";
import ResetPassword from "./pages/Auth/ResetPassword";
import UserList from "./pages/Users/UserList";
import BlogList from "./pages/Blogs/BlogList";

const routes = [
  { path: "/dashboard", layout: PrivateLayout, component: Dashboard },
  { path: "/users", layout: PrivateLayout, component: UserList },
  { path: "/blogs", layout: PrivateLayout, component: BlogList },
  { path: "/reset-password/:username", component: ResetPassword },
  { path: "/logout", component: Logout },
  { path: "/login", component: Login },
  { path: "/", component: NotFound },
];

export default routes;
