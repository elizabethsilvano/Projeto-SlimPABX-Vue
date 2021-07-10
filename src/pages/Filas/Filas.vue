<template>
  <v-container fluid>
    <div class="dashboard-page">
      <v-row no-gutters class="d-flex justify-space-between mt-10 mb-6">
        <h1 class="page-title">Gerenciamento de Filas</h1>
        <v-btn
          color="primary"
          class="text-capitalize button-shadow"
          to="dashboard"
          >Nova Fila</v-btn
        >
      </v-row>
      <v-row>
        <v-col cols="12">
          <v-card class="employee-list mb-1">
            <v-card-title class="pa-6 pb-0">
              <v-spacer></v-spacer>
              <v-text-field
                v-model="bigStat.search"
                append-icon="mdi-magnify"
                label="Pesquisar"
                clearable
                single-line
                hide-details
              ></v-text-field>
            </v-card-title>
            <v-card-text class="pa-0">
              <v-simple-table>
                <template v-slot:default>
                  <thead class="pl-2">
                    <tr>
                      <th class="text-left pa-6">Fila</th>
                      <th class="text-left">Grupo</th>
                      <th class="text-left">Ações</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="item in table" :key="item.name">
                      <td class="pa-6">{{ item.name }}</td>
                      <td>{{ item.type }}</td>
                      <td v-if="item.icon === 'icon'">
                        <v-icon style="font-size: 28px"
                          >mdi-square-edit-outline
                        </v-icon>
                        <v-icon style="font-size: 28px"
                          >mdi-trash-can-outline</v-icon
                        >
                      </td>
                    </tr>
                  </tbody>
                </template>
              </v-simple-table>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </div>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      bigStat: [
        {
          search: "",
          selected: [],
        },
      ],
      table: [
        {
          id: 0,
          name: "Comercial",
          type: "Grupo 1",
          status: "Sent",
          icon: "icon",
          select: false,
        },
        {
          id: 1,
          name: "Suporte",
          type: "Grupo 1",
          status: "Sent",
          icon: "icon",
          select: false,
        },
        {
          id: 1,
          name: "Atendimento",
          type: "Grupo 2",
          status: "Sent",
          icon: "icon",
          select: false,
        },
        {
          id: 1,
          name: "Fornecedores",
          type: "Grupo 3",
          status: "Declined",
          icon: "icon",
          select: false,
        },
        {
          id: 1,
          name: "Recepcao",
          type: "Grupo 4",
          status: "Sent",
          icon: "icon",
          select: false,
        },
        {
          id: 3,
          name: "Vendas",
          type: "Grupo 4",
          status: "Declined",
          icon: "icon",
          select: false,
        },
      ],
    };
  },
};
</script>
