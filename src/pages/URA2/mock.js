import config from "@/config";

export default {
  employeeTable: {
    headers: [
      { text: "Descrição", value: "desc" },
      { text: "Quantidade", value: "qt" },
      { text: "Porcentagem", value: "porc" },
    ],
    apexPie: {
      options: {
        dataLabels: {
          enabled: false,
        },
        colors: [
          config.light.primary,
          config.light.secondary,
          config.light.success,
          config.light.warning,
        ],
        labels: ["Comercial", "RH", "Suporte", "Outros Assuntos"],
        legend: {},
      },
      series: [400, 300, 300, 200],
    },

    employee: [
      {
        desc: "Timeout",
        qt: 35,
        porc: "10%",
      },
      {
        desc: "Suporte",
        qt: 35,
        porc: "10%",
      },
      {
        desc: "Comercial",
        qt: 35,
        porc: "10%",
      },
      {
        desc: "Parceiros",
        qt: 35,
        porc: "10%",
      },
      {
        desc: "Projetos",
        qt: 35,
        porc: "10%",
      },
    ],
  },
  trend: {
    gradient: [config.light.success],
  },

  apexPie: {
    options: {
      dataLabels: {
        enabled: false,
      },
      colors: [
        config.light.primary,
        config.light.secondary,
        config.light.success,
        config.light.warning,
      ],
      labels: ["Comercial", "RH", "Suporte", "Outros Assuntos"],
      legend: {},
    },
    series: [400, 300, 300, 200],
  },
};
