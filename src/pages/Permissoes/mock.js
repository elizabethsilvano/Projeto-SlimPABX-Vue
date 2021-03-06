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
      chave: "DDD-CELULAR",
      rota: "GSM",
    },
    {
      chave: "DDD-COBRAR",
      rota: "GSM",
    },
    {
      chave: "DDD-FIXO",
      rota: "GSM",
    },
    {
      chave: "DDI",
      rota: "GSM",
    },
    {
      chave: "LOCAL-CELULAR",
      rota: "GSM",
    },
    {
      chave: "LOCAL-COBRAR",
      rota: "GSM",
    },
    {
      chave: "LOCAL-FIXO",
      rota: "GSM",
    },
    {
      chave: "NUM-ESPECIAIS",
      rota: "GSM",
    },
    {
      chave: "NUM-ESPECIAIS-0300",
      rota: "GSM",
    },
    {
      chave: "NUM-ESPECIAIS-0800",
      rota: "GSM",
    },
  ],
};
