import Vue from "vue";
import Router from "vue-router";

import Layout from "@/components/Layout/Layout";

// Pages
import Dashboard from "@/pages/Dashboard/Dashboard";
import Links from "@/pages/Links/Links";
import Status from "@/pages/Status/Status";
import Typography from "@/pages/Typography/Typography";
import Informacoes from "@/pages/Informacoes/Informacoes";
import Tables from "@/pages/Tables/Basic";
import Notifications from "@/pages/Notifications/Notifications";
import Icons from "@/pages/Icons/Icons";
import Charts from "@/pages/Charts/Charts";
import Error from "@/pages/Error/Error";
import Login from "@/pages/Login/Login";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/login",
      name: "Login",
      component: Login,
    },
    {
      path: "/",
      redirect: "login",
      name: "Layout",
      component: Layout,
      children: [
        {
          path: "dashboard",
          name: "Dashboard",
          component: Dashboard,
        },
        {
          path: "Links",
          name: "Links",
          component: Links,
        },
        {
          path: "Status",
          name: "Status",
          component: Status,
        },
        {
          path: "typography",
          name: "Typography",
          component: Typography,
        },
        {
          path: "Informacoes",
          name: "Informacoes",
          component: Informacoes,
        },
        {
          path: "tables",
          name: "Tables",
          component: Tables,
        },
        {
          path: "notifications",
          name: "Notifications",
          component: Notifications,
        },
        {
          path: "icons",
          name: "Icons",
          component: Icons,
        },
        {
          path: "charts",
          name: "Charts",
          component: Charts,
        },
      ],
    },
    {
      path: "*",
      name: "Error",
      component: Error,
    },
  ],
});
