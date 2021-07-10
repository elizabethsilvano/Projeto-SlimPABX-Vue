import config from "@/config";

export default {
  trend: {
    gradient: [config.light.success],
  },
  table: [
    {
      id: 0,
      name: "Hostname",
      type: "slimpabx.lan",
    },
    {
      id: 1,
      name: "Hardware vendor",
      type: "Red Hat",
    },
    {
      id: 3,
      name: "Hardware model",
      type: "KVM",
    },
    {
      id: 0,
      name: "CPU Brand",
      type: "Intel Core Processor (Haswell, IBRS)",
    },
    {
      id: 1,
      name: "CPU Cores",
      type: "4",
    },
    {
      id: 3,
      name: "Memory (Used/Total)",
      type: "775M / 2.0G",
    },
    {
      id: 0,
      name: "Swap (Used/Total)",
      type: "74M / 4.0G",
    },
    {
      id: 1,
      name: "Distribution",
      type: "CentOS release 6.10 (Final)",
    },
    {
      id: 3,
      name: "Kernel",
      type: "2.6.32-754.35.1.el6.centos.plus.x86_64",
    },
  ],
};
