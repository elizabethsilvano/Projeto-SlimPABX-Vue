<template>
  <v-container fluid>
    <v-row no-gutters class="d-flex justify-space-between mt-10 mb-6">
      <h1 class="page-title">Gerenciamento de Ramais</h1>
      <v-menu offset-y>
        <template v-slot:activator="{ on }">
          <v-btn
            v-bind="attrs"
            v-on="on"
            color="primary"
            class="text-capitalize button-shadow"
            >Novo Ramal</v-btn
          >
        </template>
        <v-list>
          <v-list-item link v-for="(item, index) in lastReports" :key="index">
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </v-row>
    <v-row>
      <v-col cols="12">
        <v-card class="employee-list mb-1">
          <v-card-title class="pa-6 pb-3">
            <v-spacer></v-spacer>
            <v-text-field
              v-model="mock.employeeTable.search"
              append-icon="mdi-magnify"
              label="Pesquisar"
              clearable
              single-line
              hide-details
            ></v-text-field>
          </v-card-title>
          <v-data-table
            v-model="mock.employeeTable.selected"
            :headers="mock.employeeTable.headers"
            :items="mock.employeeTable.employee"
            item-key="name"
            show-select
          >
          </v-data-table>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import mock from "./mock";

export default {
  name: "Tables",
  data() {
    return {
      mock,
    };
  },
};
</script>

<style src="./Basic.scss" lang="scss"></style>
