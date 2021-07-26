<template>
  <v-container fluid>
    <div class="dashboard-page">
      <v-row no-gutters class="d-flex justify-space-between mt-10 mb-6">
        <h1 class="page-title">Status dos Serviços</h1>
      </v-row>
      <v-row>
        <v-col cols="12">
          <v-card class="support-requests mx-1 mb-1">
            <v-card-title class="pa-6 pb-0">
              <p>Serviços Monitorados</p>
              <v-spacer></v-spacer>
            </v-card-title>
            <v-card-text class="pa-0">
              <v-simple-table>
                <template v-slot:default>
                  <thead class="pl-2">
                    <tr>
                      <th class="text-left pa-6">Nome</th>
                      <th class="text-left">Host</th>
                      <th class="text-left">Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="item in table" :key="item.name">
                      <td class="pa-6">{{ item.name }}</td>
                      <td>{{ item.type }}</td>
                      <td v-if="item.status === 'Sent'">
                        <v-icon style="font-size: 28px" link color="success"
                          >mdi-check
                        </v-icon>
                      </td>
                      <td v-else-if="item.status === 'Declined'">
                        <v-icon style="font-size: 28px" link color="error"
                          >mdi-alert-circle-outline
                        </v-icon>
                        Clique aqui para mais informações
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
      table: [
        {
          id: 0,
          name: "Portabilidade BD Local ",
          type: "Local",
          status: "Sent",
        },
        {
          id: 1,
          name: "Rede - Conectividade com a Internet",
          type: "Local",
          status: "Sent",
        },
        {
          id: 1,
          name: "Serviço - PABX",
          type: "Local",
          status: "Sent",
        },
        {
          id: 1,
          name: "Serviço - Khomp",
          type: "Local",
          status: "Sent",
        },
        {
          id: 1,
          name: "Serviço - Compartilhamento de Arquivos (Samba)",
          type: "Local",
          status: "Sent",
        },
        {
          id: 3,
          name: "Serviço - Banco de Dados (MySQL)",
          type: "Local",
          status: "Declined",
        },
      ],
    };
  },
};
</script>
