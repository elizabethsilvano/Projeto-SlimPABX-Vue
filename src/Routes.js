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
import Tarifa from "@/pages/Tarifa/Tarifa";
import Chamadas from "@/pages/Chamadas/Chamadas";
import Salas from "@/pages/Salas/Salas";
import Informacoes from "@/pages/Informacoes/Informacoes";
import Icons from "@/pages/Icons/Icons";
import Graficos from "@/pages/Graficos/Graficos";
import Error from "@/pages/Error/Error";
import Login from "@/pages/Login/Login";
import Agendas from "@/pages/Agendas/Agendas";
import URA2 from "@/pages/URA2/URA2";
import Gravacoes from "@/pages/Gravacoes/Gravacoes";
import Rotas from "@/pages/Rotas/Rotas1";
import Rotas2 from "@/pages/Rotas2/Rotas2";
import Rotas3 from "@/pages/Rotas3/Rotas3";
import Rotas4 from "@/pages/Rotas4/Rotas4";
import Usuarios from "@/pages/Usuarios/Usuarios";
import Grupos from "@/pages/Grupos/Grupos";
import Permissoes from "@/pages/Permissoes/Permissoes";

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
          path: "Permissoes",
          name: "Permissoes",
          component: Permissoes,
        },
        {
          path: "Usuarios",
          name: "Usuarios",
          component: Usuarios,
        },
        {
          path: "Grupos",
          name: "Grupos",
          component: Grupos,
        },
        {
          path: "Rotas1",
          name: "Rotas",
          component: Rotas,
        },
        {
          path: "Rotas2",
          name: "Rotas",
          component: Rotas2,
        },
        {
          path: "Rotas3",
          name: "Rotas",
          component: Rotas3,
        },
        {
          path: "Rotas4",
          name: "Rotas",
          component: Rotas4,
        },
        {
          path: "Links",
          name: "Links",
          component: Links,
        },
        {
          path: "Agendas",
          name: "Agendas",
          component: Agendas,
        },
        {
          path: "Status",
          name: "Status",
          component: Status,
        },
        {
          path: "URA2",
          name: "URA2",
          component: URA2,
        },
        {
          path: "Tarifa",
          name: "Tarifa",
          component: Tarifa,
        },
        {
          path: "Chamadas",
          name: "Chamadas",
          component: Chamadas,
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
          path: "Salas",
          name: "Salas",
          component: Salas,
        },
        {
          path: "Gravacoes",
          name: "Gravacoes",
          component: Gravacoes,
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
