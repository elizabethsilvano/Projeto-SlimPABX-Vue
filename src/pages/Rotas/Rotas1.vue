<template>
  <v-container fluid>
    <div class="dashboard-page">
      <v-row no-gutters class="d-flex justify-space-between mt-10 mb-6">
        <h1 class="page-title">Rota de Saída - Ligações Telefone Fixo</h1>
      </v-row>
      <v-row class="justify-center">
        <v-col cols="6">
          <v-card class="support-requests mx-1 mb-1">
            <v-card-title class="pa-6 pb-0">
              <v-spacer></v-spacer>
            </v-card-title>
            <v-card-text class="pa-0">
              <v-simple-table>
                <template v-slot:default>
                  <thead class="pl-2">
                    <tr>
                      <th class="text-left pa-6">Chave</th>
                      <th class="text-left">Rota</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="item in mock.table" :key="item.chave">
                      <td class="pa-6">{{ item.chave }}</td>
                      <td v-if="item.rota" md="4">
                        <v-select :items="grupo" label="ROTA"></v-select>
                      </td>
                    </tr>
                  </tbody>
                </template>
              </v-simple-table>
            </v-card-text>
          </v-card>
          <v-row no-gutters class="mt-10 mb-6 justify-right">
            <v-btn color="primary" @click="showAlert">Aplicar</v-btn>
          </v-row>
        </v-col>
      </v-row>
    </div>
  </v-container>
</template>

<script>
import mock from "./mock";

export default {
  data() {
    return {
      mock,
      grupo: ["Padrão", "GSM", "PASTN", "VIVO", "HANGUP"],
    };
  },
  methods: {
    showAlert() {
      this.$swal.fire({
        icon: "success",
        text: "Regra aplicada com sucesso!",
        confirmButtonText: "Ok",
        confirmButtonColor: "#41b882",
      });
    },
  },
};
</script>
