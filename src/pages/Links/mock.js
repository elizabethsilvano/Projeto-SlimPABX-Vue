import config from "@/config";

export default {
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
        data: [31, 31, 31, 31, 31, 60, 51, 31, 40, 28, 51, 42],
      },
      {
        name: "Sainte",
        type: "line",
        data: [11, 32, 45, 30, 34, 52, 41, 11, 32, 45, 30, 34],
      },
    ],
    series2: [
      {
        name: "Entrante",
        type: "line",
        data: [21, 30, 28, 61, 52, 50, 41, 21, 20, 38, 61, 52],
      },
      {
        name: "Sainte",
        type: "line",
        data: [11, 32, 45, 30, 34, 52, 41, 11, 32, 45, 30, 34],
      },
    ],
    series3: [
      {
        name: "Entrante",
        type: "line",
        data: [41, 50, 48, 81, 72, 70, 61, 41, 40, 58, 81, 72],
      },
      {
        name: "Sainte",
        type: "line",
        data: [41, 52, 75, 60, 64, 82, 71, 41, 62, 75, 60, 64],
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
