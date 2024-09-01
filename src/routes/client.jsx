// Layout
import LayoutMessages from "../layouts/messages";
import LayoutSettings from "../layouts/settings";

// Trang chủ
import Home from "../pages/Client/Home";

// Xử lý xác thực
import Login from "../pages/Client/Auth/Login";
import Register from "../pages/Client/Auth/Register";
import Repassword from "../pages/Client/Auth/Repassword";
import ForgotPassword from "../pages/Client/Auth/ForgotPassword";

// Trang nhắn tin
import Messages from "../pages/Client/Messages";

// cài đặt

import Settings from "../pages/Client/Settings";
import Privacy from "../pages/Client/Settings/Privacy";
import Password from "../pages/Client/Settings/Password";
import NewPass from "../pages/Client/Settings/NewPass";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import Search from "../pages/Client/Search";
import Notification from "../pages/Client/Notification";

// Router không cần đăng nhập vẫn vô được
const pulicRouter = [
  {
    path: "/login",
    component: Login,
  },
  {
    path: "/register",
    component: Register,
  },
  {
    path: "/forgot",
    component: ForgotPassword,
  },
  {
    path: "/repassword",
    component: Repassword,
  },
];

// Route cần đăng nhập mới vô được
const privateRouters = [
  // Trang chủ
  {
    path: "/",
    component: Home,
  },

  // Trang nhắn tin
  {
    path: "/messages",
    component: Messages,
    layout: LayoutMessages,
  },
  {
    path: "/messages/:id",
    component: Messages,
    layout: LayoutMessages,
  },

  // cài đặt
  {
    path: "/setting",
    component: Settings,
    layout: LayoutSettings,
  },
  {
    path: "/setting/privacy",
    component: Privacy,
    layout: LayoutSettings,
  },
  {
    path: "/setting/password",
    component: Password,
    layout: LayoutSettings,
  },
  {
    path: "/setting/newpass",
    component: NewPass,
    layout: LayoutSettings,
  },
  
  //
  {
      path: "/search", component: Search
  },
  {
    path: "/thongbao", component: Notification
},
];

export { pulicRouter, privateRouters };
