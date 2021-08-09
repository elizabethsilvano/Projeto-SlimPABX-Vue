<template>
  <v-container fluid>
    <v-row no-gutters class="d-flex justify-space-between mt-10 mb-6">
      <h1 class="page-title">Relatórios de Chamadas</h1>
    </v-row>
    <v-row align="center">
      <v-col class="d-flex" cols="12" sm="3">
        <v-autocomplete
          v-model="value"
          :items="mock.employeeTable.data"
          dense
          filled
          label="Período"
        ></v-autocomplete>
      </v-col>

      <v-col class="d-flex" cols="12" sm="3">
        <v-autocomplete
          v-model="value"
          :items="mock.employeeTable.hora"
          dense
          filled
          label="Horário"
        ></v-autocomplete>
      </v-col>
      <v-col class="d-flex" cols="12" sm="3">
        <v-autocomplete
          v-model="value"
          :items="mock.employeeTable.direcao"
          dense
          filled
          label="Direção"
        ></v-autocomplete>
      </v-col>
      <v-col class="d-flex" cols="12" sm="3">
        <v-autocomplete
          v-model="value"
          :items="mock.employeeTable.ramais"
          dense
          filled
          label="Ramais"
        ></v-autocomplete>
      </v-col>
    </v-row>
    <v-row align="center">
      <v-col class="d-flex" cols="12" sm="3">
        <v-autocomplete
          v-model="value"
          :items="mock.employeeTable.centro"
          dense
          filled
          label="Centro de Custo"
        ></v-autocomplete>
      </v-col>
      <v-col class="d-flex" cols="12" sm="3">
        <v-autocomplete
          v-model="value"
          :items="mock.employeeTable.status"
          dense
          filled
          label="Status"
        ></v-autocomplete>
      </v-col>
      <v-col class="d-flex" cols="12" sm="3">
        <v-autocomplete
          v-model="value"
          :items="mock.employeeTable.ramais"
          dense
          filled
          label="Tipo"
        ></v-autocomplete>
      </v-col>
      <v-col class="d-flex" cols="12" sm="3">
        <v-autocomplete
          v-model="value"
          :items="mock.employeeTable.agrupar"
          dense
          filled
          label="Agrupar por::"
        ></v-autocomplete>
      </v-col>
    </v-row>
    <v-row align="center">
      <v-col class="d-flex" cols="12" sm="3">
        <v-autocomplete
          v-model="value"
          :items="mock.employeeTable.agrupar"
          dense
          filled
          label="Consolidar por:"
        ></v-autocomplete>
      </v-col>
      <v-col cols="12" md="3">
        <v-text-field
          v-model="email"
          :rules="emailRules"
          label="Número"
          required
        ></v-text-field>
      </v-col>
      <v-col cols="12" md="3">
        <v-switch
          v-model="ex11"
          label="Mostrar totais e médias:	"
          color="primary"
          value="indigo darken-3"
          hide-details
        ></v-switch>
      </v-col>
      <v-col cols="12" md="3">
        <v-btn class="ma-2" color="primary" dark>
          <v-icon dark>mdi-cloud-download</v-icon>
          Gerar PDF
        </v-btn>
        <v-btn class="ma-2" color="primary" dark>
          <v-icon dark>mdi-cloud-download</v-icon>
          Gerar CSV
        </v-btn>
      </v-col>
    </v-row>
    <v-row no-gutters class="d-flex justify-space-between mt-10 mb-6">
      <v-card-actions>
        <v-btn color="warning" @click="resetValidation">
          Limpar
        </v-btn>
        <v-btn color="success" @click="save">
          Pesquisar
        </v-btn>
      </v-card-actions>
    </v-row>

    <v-row>
      <v-col cols="12">
        <v-card class="employee-list mb-1">
          <v-card-title class="pa-6 pb-3">
            <v-spacer></v-spacer>
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
  data() {
    return {
      mock,
    };
  },
};
</script>

<style src="./Chamadas.scss" lang="scss"></style>
