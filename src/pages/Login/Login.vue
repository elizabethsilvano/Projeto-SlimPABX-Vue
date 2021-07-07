<template>
  <v-app>
    <v-container fluid>
      <v-row no-gutters>
        <v-col cols="5" class="main-part d-none d-md-none d-lg-flex">
          <div class="d-flex">
            <v-img src="@/assets/logo.svg" contain></v-img>
            <p>Slim PABX</p>
          </div>
        </v-col>
        <v-col>
          <v-row no-gutters>
            <v-col
              cols="12"
              class="login-part d-flex align-center justify-center"
            >
              <div class="login-wrapper">
                <v-row no-gutters>
                  <h1 class="page-title">Entrar</h1>
                </v-row>
                <v-tabs grow>
                  <v-tab :href="`#tab-login`"> </v-tab>
                  <v-tab-item :value="'tab-login'">
                    <v-form>
                      <v-container>
                        <v-row class="flex-column">
                          <v-col cols="12" class="d-flex align-center my-8">
                            <span class="px-5"></span>
                          </v-col>
                          <v-form>
                            <v-col>
                              <v-text-field
                                v-model="email"
                                :rules="emailRules"
                                value="admin@pabx.com"
                                label="Email"
                                required
                              ></v-text-field>
                              <v-text-field
                                v-model="password"
                                :rules="passRules"
                                type="password"
                                label="Senha"
                                hint="Pelo menos 6 caracteres"
                                required
                              ></v-text-field>
                            </v-col>
                            <v-col class="d-flex justify-space-between">
                              <v-btn
                                class="text-capitalize"
                                large
                                :disabled="
                                  password.length === 0 || email.length === 0
                                "
                                color="primary"
                                @click="login"
                              >
                                Entrar</v-btn
                              >
                            </v-col>
                          </v-form>
                        </v-row>
                      </v-container>
                    </v-form>
                  </v-tab-item>
                </v-tabs>
              </div>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
  </v-app>
</template>

<script>
export default {
  name: "Entrar",
  data() {
    return {
      email: "admin@pabx.com",
      emailRules: [
        (v) => !!v || "E-mail is required",
        (v) => /.+@.+/.test(v) || "E-mail must be valid",
      ],
      createFullName: "Elizabeth Silvano",
      createEmail: "elizabeth@pabx.com",
      createPassword: "123456",
      password: "123456",
      passRules: [
        (v) => !!v || "Senha requerida",
        (v) => v.length >= 6 || "Min 6 caracteres",
      ],
    };
  },
  methods: {
    login() {
      window.localStorage.setItem("authenticated", true);
      this.$router.push("/dashboard");
    },
  },
  created() {
    if (window.localStorage.getItem("authenticated") === "true") {
      this.$router.push("/dashboard");
    }
  },
};
</script>

<style src="./Login.scss" lang="scss" />
