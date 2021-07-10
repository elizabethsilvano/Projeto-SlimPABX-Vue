<template>
  <v-container fluid>
    <div class="dashboard-page">
      <v-row no-gutters class="d-flex justify-space-between mt-10 mb-6">
        <h1 class="page-title">Agenda de Discagem</h1>
        <v-btn
          color="primary"
          class="text-capitalize button-shadow"
          to="dashboard"
          >Novo Número</v-btn
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
                      <th class="text-left pa-6">Código</th>
                      <th class="text-left">Número</th>
                      <th class="text-left">Descrição</th>
                      <th class="text-left">Permissão</th>
                      <th class="text-left">Ações</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="item in table" :key="item.name">
                      <td class="pa-6">{{ item.id }}</td>
                      <td>{{ item.name }}</td>
                      <td>{{ item.desc }}</td>
                      <td v-if="item.status === 'Sent'">
                        <p class="primary--text">
                          Liberado
                        </p>
                      </td>
                      <td v-else-if="item.status === 'Declined'">
                        <p class="error--text">
                          Bloqueado
                        </p>
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
          id: 1,
          name: "047999648588",
          desc: "João",
          status: "Sent",
          icon: "icon",
        },
        {
          id: 2,
          name: "0479996344545",
          desc: "Maria",
          status: "Sent",
          icon: "icon",
        },
        {
          id: 3,
          name: "0473547848588",
          desc: "Carolina",
          status: "Sent",
          icon: "icon",
        },
        {
          id: 4,
          name: "035999648577",
          desc: "Empresa A",
          status: "Declined",
          icon: "icon",
        },
        {
          id: 5,
          name: "049889648588",
          desc: "Empresa B",
          status: "Sent",
          icon: "icon",
        },
        {
          id: 6,
          name: "047999555588",
          desc: "Empresa C",
          status: "Declined",
          icon: "icon",
        },
      ],
    };
  },
};
</script>
