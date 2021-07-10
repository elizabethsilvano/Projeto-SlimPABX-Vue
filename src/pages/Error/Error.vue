<template>
  <v-app>
    <v-container fluid class="error-page">
      <v-col cols="5" class="main-part d-none d-md-none d-lg-flex">
        <v-img src="@/assets/logo1.png" contain></v-img>
      </v-col>
      <v-row class="d-flex justify-center">
        <v-col cols="8">
          <div class="card">
            <p class="error-text">
              Ops. Página indisponível no momento.
            </p>
            <v-btn dark x-large :color="config.light.primary" to="dashboard">
              Voltar para o início
            </v-btn>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </v-app>
</template>

<script>
import config from "@/config";

export default {
  name: "Error",
  data() {
    return {
      config,
    };
  },
};
</script>

<style src="./Error.scss" lang="scss"></style>
