<template>
  <v-container fluid>
    <div class="dashboard-page">
      <v-row no-gutters class="d-flex justify-space-between mt-10 mb-6">
        <h1 class="page-title">Gerenciamento de Ramais</h1>
        <v-btn
          color="primary"
          class="text-capitalize button-shadow"
          to="dashboard"
          >Novo Ramal</v-btn
        >
      </v-row>
      <v-row>
        <v-col cols="12">
          <v-card class="employee-list mb-1">
            <v-card-title class="pa-4 pb-0">
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
                      <th class="text-left pa-6">Ramal</th>
                      <th class="text-left">Grupo</th>
                      <th class="text-left">Gravação</th>
                      <th class="text-left">Ações</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="item in table" :key="item.name">
                      <td class="pa-6">{{ item.name }}</td>
                      <td>{{ item.type }}</td>
                      <td v-if="item.status === 'Sent'">
                        <v-chip link color="success" class="ma-2 ml-0">
                          Sim
                        </v-chip>
                      </td>
                      <td v-else-if="item.status === 'Declined'">
                        <v-chip link color="secundary" class="ma-2 ml-0">
                          Não
                        </v-chip>
                      </td>
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
          name: "1000",
          type: "Grupo 1",
          status: "Sent",
          icon: "icon",
          select: false,
        },
        {
          id: 1,
          name: "1001",
          type: "Grupo 1",
          status: "Sent",
          icon: "icon",
          select: false,
        },
        {
          id: 1,
          name: "1002",
          type: "Grupo 2",
          status: "Sent",
          icon: "icon",
          select: false,
        },
        {
          id: 1,
          name: "1003",
          type: "Grupo 3",
          status: "Declined",
          icon: "icon",
          select: false,
        },
        {
          id: 1,
          name: "1004",
          type: "Grupo 4",
          status: "Sent",
          icon: "icon",
          select: false,
        },
        {
          id: 3,
          name: "1005",
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
