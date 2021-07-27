import config from "@/config";
import Vue from "vue";
import VueSweetalert2 from "vue-sweetalert2";
import "sweetalert2/dist/sweetalert2.min.css";

Vue.use(VueSweetalert2);

export default {
  trend: {
    gradient: [config.light.success],
  },
  table: [
    {
      chave: "ROTA-INTERNACIONAL-1",
      rota: "GSM",
    },
    {
      chave: "ROTA-INTERNACIONAL-2",
      rota: "GSM",
    },
    {
      chave: "ROTA-INTERNACIONAL-3",
      rota: "GSM",
    },
  ],
};
