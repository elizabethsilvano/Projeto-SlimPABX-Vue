import Vue from "vue";
import Router from "vue-router";

import Layout from "@/components/Layout/Layout";

// Pages
import Dashboard from "@/pages/Dashboard/Dashboard";
import Links from "@/pages/Links/Links";
import Status from "@/pages/Status/Status";
import Ramais from "@/pages/Ramais/Ramais";
import Agenda from "@/pages/Agenda/Agenda";
import Filas from "@/pages/Filas/Filas";
import Typography from "@/pages/Typography/Typography";
import Informacoes from "@/pages/Informacoes/Informacoes";
import Tables from "@/pages/Tables/Basic";
import Icons from "@/pages/Icons/Icons";
import Graficos from "@/pages/Graficos/Graficos";
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
          path: "Ramais",
          name: "Ramais",
          component: Ramais,
        },
        {
          path: "Filas",
          name: "Filas",
          component: Filas,
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
          path: "Agenda",
          name: "Agenda",
          component: Agenda,
        },
        {
          path: "tables",
          name: "Tables",
          component: Tables,
        },
        {
          path: "icons",
          name: "Icons",
          component: Icons,
        },
        {
          path: "Graficos",
          name: "Graficos",
          component: Graficos,
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
