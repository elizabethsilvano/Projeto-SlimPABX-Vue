<template>
  <v-navigation-drawer
    app
    clipped
    v-model="DRAWER_STATE"
    :mini-variant="!DRAWER_STATE"
    :width="sidebarWidth"
    :permanent="$vuetify.breakpoint.mdAndUp"
    :temporary="$vuetify.breakpoint.smAndDown"
    :mini-variant-width="sidebarMinWidth"
    :class="{ 'drawer-mini': !DRAWER_STATE }"
  >
    <v-list>
      <template v-for="(item, i) in items">
        <v-row v-if="item.heading" :key="item.heading" align="center">
          <v-col cols="6" class="py-5">
            <span
              style="padding-left: 32px"
              class="text-body-1 subheader"
              :class="item.heading && DRAWER_STATE ? 'show ' : 'hide'"
            >
              {{ item.heading }}
            </span>
          </v-col>
          <v-col cols="6" class="text-center"> </v-col>
        </v-row>
        <v-divider
          v-else-if="item.divider"
          :key="i"
          dark
          class="my-4"
        ></v-divider>
        <v-list-group
          color="primary"
          v-else-if="item.children && DRAWER_STATE"
          :key="item.title"
          v-model="item.model"
          append-icon=""
        >
          <template v-slot:prependIcon>
            <v-icon size="28">{{ item.icon }}</v-icon>
          </template>
          <template v-slot:activator>
            <v-list-item-content>
              <v-list-item-title class="grey--text">
                {{ item.title }}
              </v-list-item-title>
            </v-list-item-content>
          </template>
          <v-list-item
            v-for="(child, i) in item.children"
            :key="i"
            :to="child.link"
            link
          >
            <v-list-item-action v-if="child.icon">
              <v-icon size="">{{ child.icon }}</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title class="grey--text">
                {{ child.title }}
              </v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-group>
        <v-list-item
          color="primary"
          v-else
          :key="item.text"
          :href="item.href ? item.href : null"
          :to="item.link === '#' ? null : item.link"
          link
        >
          <v-list-item-action>
            <v-icon size="28" :color="item.color ? item.color : ''">{{
              item.icon
            }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title class="grey--text" link>
              {{ item.title }}
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </template>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
import { mapActions, mapState } from "vuex";

export default {
  props: {
    source: String,
  },
  data() {
    return {
      items: [
        { title: "Dashboard", icon: "mdi-home", link: "/dashboard" },
        {
          title: "Relatórios",
          icon: "mdi-book-variant-multiple",
          link: "/typography",
          children: [
            { title: "●  Tarifação", link: "/Tarifa" },
            {
              title: "●  Registros de chamadas",
              link: "/Chamadas",
            },
            {
              title: "●  Relatório de URA",
              link: "/URA2",
            },
            { title: "●  Gravações", link: "/Gravacoes" },
          ],
        },
        {
          title: "Gerenciamento",
          icon: "mdi-phone-log",
          model: false,
          children: [
            {
              title: "●  Ramais",
              link: "/Ramais",
            },
            {
              title: "●  Bloqueio de Chamadas",
              link: "/Agenda",
            },
            {
              title: "●  Filas",
              link: "/Filas",
            },
            {
              title: "●  Salas de Conferência",
              link: "/Salas",
            },
            {
              title: "●  Agendamento de Conferência",
              link: "/Agendas",
            },
            {
              title: "●  Permissões",
              link: "/Permissoes",
            },
          ],
        },
        {
          title: "Configurações Avançadas",
          icon: "mdi-cog-outline",
          model: false,
          children: [
            {
              title: "●  Rotas de Saída - Fixo",
              link: "/Rotas1",
            },
            {
              title: "●  Rotas de Saída - Celular",
              link: "/Rotas2",
            },
            {
              title: "●  Rotas de Saída - Internacional",
              link: "/Rotas3",
            },
            {
              title: "●  Rotas de Saída - Especiais",
              link: "/Rotas4",
            },
          ],
        },
        {
          title: "Usuários",
          icon: "mdi-account-convert",
          link: "/icons",
          model: false,
          children: [
            {
              title: "●  Usuários do Sistema",
              link: "/Usuarios",
            },
            {
              title: "●  Grupos de Usuários",
              link: "/Grupos",
            },
          ],
        },
        { divider: true },
        { heading: "Sistema" },
        {
          title: "Links de Voz",
          icon: "mdi-access-point-network",
          color: "green",
          link: "/Links",
        },
        {
          title: "Status dos Serviços",
          icon: "mdi-check",
          color: "primary",
          link: "/Status",
        },
        {
          title: "Gráficos do Sistema",
          icon: "mdi-vector-polyline",
          color: "pink",
          link: "/Graficos",
        },
        {
          title: "Informações do servidor",
          icon: "mdi-information-outline",
          color: "blue",
          link: "/Informacoes",
        },
      ],
      sidebarWidth: 310,
      sidebarMinWidth: 150,
    };
  },
  computed: {
    ...mapState(["drawer"]),
    DRAWER_STATE: {
      get() {
        return this.drawer;
      },
      set(newValue) {
        if (newValue === this.drawer) return;
        this.TOGGLE_DRAWER();
      },
    },
  },
  methods: {
    ...mapActions(["TOGGLE_DRAWER"]),
  },
};
</script>

<style src="./Menu.scss" lang="scss" />
