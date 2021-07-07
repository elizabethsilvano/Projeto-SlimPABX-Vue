import config from "@/config";

export default {
  bigStat: [
    {
      product: "Light Blue",
      total: "4,232",
      color: "primary",
      registrations: {
        value: 830,
        profit: true,
      },
      bounce: {
        value: 4.5,
        profit: false,
      },
    },
    {
      product: "Sing App",
      total: "754",
      color: "danger",
      registrations: {
        value: 30,
        profit: true,
      },
      bounce: {
        value: 2.5,
        profit: true,
      },
    },
    {
      product: "RNS",
      total: "1,025",
      color: "info",
      registrations: {
        value: 230,
        profit: true,
      },
      bounce: {
        value: 21.5,
        profit: false,
      },
    },
  ],
  trend: {
    gradient: [config.light.success],
  },
  table: [
    {
      id: 0,
      name: "VIVO",
      type: "GSM",
      interface: "b0c0-1",
      sinal: "65%",
      status: "Sent",
    },
    {
      id: 1,
      name: "VOXIP",
      type: "SIP",
      interface: "10.10.10.10:5060",
      sinal: "58 ms",
      status: "Sent",
    },
    {
      id: 3,
      name: "Embratel",
      type: "SIP",
      interface: "10.20.20.20:5060",
      sinal: "75 ms",
      status: "Declined",
    },
  ],
  select: ["Diário", "Semanal", "Mensal"],
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
  apexArea1: {
    options: {
      chart: {
        id: "apexAreaFirst",
        sparkline: {
          enabled: true,
        },
      },
      colors: [config.light.secondary],
      fill: {
        type: "solid",
        opacity: 0.3,
      },
      stroke: {
        width: 2,
        curve: "smooth",
      },
    },
    series: [
      {
        data: [50, 56, 52, 51, 52, 55, 53],
      },
    ],
  },
  apexArea2: {
    options: {
      chart: {
        sparkline: {
          enabled: true,
        },
      },
      colors: [config.light.primary],
      fill: {
        type: "solid",
        opacity: 0.3,
      },
      stroke: {
        width: 2,
        curve: "smooth",
      },
    },
    series: [
      {
        data: [55, 56, 52, 51, 52, 55, 53],
      },
    ],
  },
  apexArea3: {
    options: {
      chart: {
        sparkline: {
          enabled: true,
        },
      },
      colors: [config.light.warning],
      fill: {
        type: "solid",
        opacity: 0.3,
      },
      stroke: {
        width: 2,
        curve: "smooth",
      },
    },
    series: [
      {
        data: [55, 56, 52, 51, 52, 55, 53],
      },
    ],
  },
  mainApexArea: {
    options: {
      chart: {
        width: "100%",
        toolbar: {
          show: false,
        },
      },
      dataLabels: {
        enabled: false,
      },
      grid: {
        xaxis: {
          lines: {
            show: false,
          },
        },
        yaxis: {
          lines: {
            show: false,
          },
        },
      },
      markers: {
        size: [5, 0, 0],
      },
      stroke: {
        width: [3, 3, 0],
        curve: ["straight", "smooth", "smooth"],
      },
      fill: {
        type: "linear",
      },
      legend: {
        show: false,
      },
      colors: [config.light.warning, config.light.primary, "#FAFAFA"],
      yaxis: {
        axisBorder: {
          show: true,
          color: "#B9B9B980",
        },
        labels: {
          style: {
            colors: [
              "#B9B9B980",
              "#B9B9B980",
              "#B9B9B980",
              "#B9B9B980",
              "#B9B9B980",
              "#B9B9B980",
              "#B9B9B980",
              "#B9B9B980",
            ],
            fontSize: "12px",
          },
        },
        tickAmount: 5,
      },
      xaxis: {
        labels: {
          style: {
            fontSize: "12px",
            colors: [
              "#B9B9B980",
              "#B9B9B980",
              "#B9B9B980",
              "#B9B9B980",
              "#B9B9B980",
              "#B9B9B980",
              "#B9B9B980",
              "#B9B9B980",
              "#B9B9B980",
              "#B9B9B980",
              "#B9B9B980",
              "#B9B9B980",
              "#B9B9B980",
              "#B9B9B980",
            ],
          },
        },
        tickAmount: 10,
      },
    },
    series: [
      {
        name: "Entrante",
        type: "line",
        data: [
          3100,
          3100,
          3100,
          3100,
          3100,
          6090,
          5100,
          3100,
          4000,
          2800,
          5100,
          4200,
          6090,
          5100,
        ],
      },
      {
        name: "Sainte",
        type: "line",
        data: [
          1100,
          3200,
          4500,
          3020,
          3400,
          5200,
          4100,
          1100,
          3200,
          4500,
          3020,
          3400,
          5200,
          4100,
        ],
      },
    ],
    series2: [
      {
        name: "Entrante",
        type: "line",
        data: [
          2100,
          3000,
          2800,
          6100,
          5200,
          5090,
          4100,
          2100,
          2000,
          3800,
          6100,
          5200,
          7090,
          6100,
        ],
      },
      {
        name: "Sainte",
        type: "line",
        data: [
          1100,
          3200,
          4500,
          3020,
          3400,
          5200,
          4100,
          1100,
          3200,
          4500,
          3020,
          3400,
          5200,
          4100,
        ],
      },
    ],
    series3: [
      {
        name: "Entrante",
        type: "line",
        data: [
          4100,
          5000,
          4800,
          8100,
          7200,
          7090,
          6100,
          4100,
          4000,
          5800,
          8100,
          7200,
          9090,
          8100,
        ],
      },
      {
        name: "Sainte",
        type: "line",
        data: [
          4100,
          5200,
          7500,
          6020,
          6400,
          8200,
          7100,
          4100,
          6200,
          7500,
          6020,
          6400,
          8200,
          7100,
        ],
      },
    ],
  },
  apexBar1: {
    options: {
      chart: {
        id: "chartFirst",
        toolbar: {
          show: false,
        },
      },
      fill: {
        colors: [config.light.primary],
        opacity: 1,
      },
      plotOptions: {
        bar: {
          columnWidth: "50%",
          distributed: true,
          endingShape: "rounded",
          startingShape: "rounded",
        },
      },
      grid: {
        xaxis: {
          lines: {
            show: false,
          },
        },
        yaxis: {
          lines: {
            show: false,
          },
        },
      },
      dataLabels: {
        enabled: false,
        dropShadow: {
          enable: false,
        },
      },
      legend: {
        show: false,
      },
      xaxis: {
        axisBorder: {
          show: false,
        },
        axisTicks: {
          show: false,
        },
        labels: {
          show: false,
        },
      },
      yaxis: {
        labels: {
          show: false,
        },
      },
    },
    series: [
      {
        data: [70, 63, 84, 79, 70, 65, 80],
      },
    ],
  },
  apexBar2: {
    options: {
      chart: {
        id: "chartFirst",
        toolbar: {
          show: false,
        },
      },
      fill: {
        colors: [config.light.warning],
        opacity: 1,
      },
      plotOptions: {
        bar: {
          columnWidth: "45%",
          distributed: true,
          endingShape: "rounded",
          startingShape: "rounded",
        },
      },
      grid: {
        padding: {
          left: -20,
          right: 0,
        },
        margin: {
          bottom: 0,
        },
        xaxis: {
          lines: {
            show: false,
          },
        },
        yaxis: {
          lines: {
            show: false,
          },
        },
      },
      dataLabels: {
        enabled: false,
        dropShadow: {
          enable: false,
        },
      },
      legend: {
        show: false,
      },
      xaxis: {
        axisBorder: {
          show: false,
        },
        axisTicks: {
          show: false,
        },
        labels: {
          show: false,
        },
      },
      yaxis: {
        labels: {
          show: false,
        },
      },
    },
    series: [
      {
        data: [30, 23, 54, 69, 40, 25, 60],
      },
    ],
  },
  apexBar3: {
    options: {
      chart: {
        id: "chartFirst",
        toolbar: {
          show: false,
        },
      },
      fill: {
        colors: [config.light.secondary],
        opacity: 1,
      },
      plotOptions: {
        bar: {
          columnWidth: "45%",
          distributed: true,
          endingShape: "rounded",
          startingShape: "rounded",
        },
      },
      grid: {
        padding: {
          left: -20,
          right: 0,
        },
        margin: {
          bottom: 0,
        },
        xaxis: {
          lines: {
            show: false,
          },
        },
        yaxis: {
          lines: {
            show: false,
          },
        },
      },
      dataLabels: {
        enabled: false,
        dropShadow: {
          enable: false,
        },
      },
      legend: {
        show: false,
      },
      xaxis: {
        axisBorder: {
          show: false,
        },
        axisTicks: {
          show: false,
        },
        labels: {
          show: false,
        },
      },
      yaxis: {
        labels: {
          show: false,
        },
      },
    },
    series: [
      {
        data: [60, 43, 24, 19, 30, 45, 60],
      },
    ],
  },
};
