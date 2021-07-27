import config from "@/config";
import Vue from "vue";
import VueSweetalert2 from "vue-sweetalert2";

// If you don't need the styles, do not connect
import "sweetalert2/dist/sweetalert2.min.css";

Vue.use(VueSweetalert2);

export default {
  trend: {
    gradient: [config.light.success],
  },
  table: [
    {
      chave: "ROTA-CELULAR-DDD-1",
      rota: "GSM",
    },
    {
      chave: "ROTA-CELULAR-DDD-2",
      rota: "GSM",
    },
    {
      chave: "ROTA-CELULAR-DDD-3",
      rota: "GSM",
    },
    {
      chave: "ROTA-CELULAR-LOCAL-1",
      rota: "GSM",
    },
    {
      chave: "ROTA-CELULAR-LOCAL-2",
      rota: "GSM",
    },
    {
      chave: "ROTA-CELULAR-LOCAL-3",
      rota: "GSM",
    },
  ],
};
