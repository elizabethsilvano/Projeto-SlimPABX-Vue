<template>
  <v-container fluid>
    <v-row no-gutters class="d-flex justify-space-between mt-10 mb-6">
      <h2 class="page-title">Relatórios de Gravações</h2>
    </v-row>
    <v-row>
      <template>
        <v-row>
          <v-col class="d-flex" cols="12" sm="4">
            <v-menu
              ref="menu"
              v-model="menu"
              :close-on-content-click="false"
              :return-value.sync="date"
              transition="scale-transition"
              offset-y
              min-width="auto"
            >
              <template v-slot:activator="{ on, attrs }">
                <v-text-field
                  v-model="date"
                  label="Data Inicial"
                  prepend-icon="mdi-calendar"
                  readonly
                  v-bind="attrs"
                  v-on="on"
                ></v-text-field>
              </template>
              <v-date-picker v-model="date" no-title scrollable>
                <v-spacer></v-spacer>
                <v-btn text color="primary" @click="menu = false">
                  Cancelar
                </v-btn>
                <v-btn text color="primary" @click="$refs.menu.save(date)">
                  OK
                </v-btn>
              </v-date-picker>
            </v-menu>
          </v-col>
          <v-col class="d-flex" cols="12" sm="4">
            <v-menu
              ref="menu"
              v-model="menu"
              :close-on-content-click="false"
              :return-value.sync="date"
              transition="scale-transition"
              offset-y
              min-width="auto"
            >
              <template v-slot:activator="{ on, attrs }">
                <v-text-field
                  v-model="date"
                  label="Data Final"
                  prepend-icon="mdi-calendar"
                  readonly
                  v-bind="attrs"
                  v-on="on"
                ></v-text-field>
              </template>
              <v-date-picker v-model="date" no-title scrollable>
                <v-spacer></v-spacer>
                <v-btn text color="primary" @click="menu = false">
                  Cancelar
                </v-btn>
                <v-btn text color="primary" @click="$refs.menu.save(date)">
                  OK
                </v-btn>
              </v-date-picker>
            </v-menu>
          </v-col>
        </v-row>
      </template>
    </v-row>
    <v-row align="center">
      <template>
        <v-row>
          <v-col class="d-flex" cols="12" sm="4">
            <v-dialog
              ref="dialog"
              v-model="modal2"
              :return-value.sync="time"
              persistent
              width="290px"
            >
              <template v-slot:activator="{ on, attrs }">
                <v-text-field
                  v-model="time"
                  label="Hora Inicial"
                  prepend-icon="mdi-clock-time-four-outline"
                  readonly
                  v-bind="attrs"
                  v-on="on"
                ></v-text-field>
              </template>
              <v-time-picker v-if="modal2" v-model="time" full-width>
                <v-spacer></v-spacer>
                <v-btn text color="primary" @click="modal2 = false">
                  Cancelar
                </v-btn>
                <v-btn text color="primary" @click="$refs.dialog.save(time)">
                  OK
                </v-btn>
              </v-time-picker>
            </v-dialog>
          </v-col>
          <v-col class="d-flex" cols="12" sm="4">
            <v-dialog
              ref="dialog"
              v-model="modal2"
              :return-value.sync="time"
              persistent
              width="290px"
            >
              <template v-slot:activator="{ on, attrs }">
                <v-text-field
                  v-model="time"
                  label="Hora Final"
                  prepend-icon="mdi-clock-time-four-outline"
                  readonly
                  v-bind="attrs"
                  v-on="on"
                ></v-text-field>
              </template>
              <v-time-picker v-if="modal2" v-model="time" full-width>
                <v-spacer></v-spacer>
                <v-btn text color="primary" @click="modal2 = false">
                  Cancelar
                </v-btn>
                <v-btn text color="primary" @click="$refs.dialog.save(time)">
                  OK
                </v-btn>
              </v-time-picker>
            </v-dialog>
          </v-col>
        </v-row>
      </template>
    </v-row>
    <v-row align="center">
      <v-col cols="12" md="5">
        <v-select
          v-model="select"
          :items="grupo"
          label="GRUPO"
          required
        ></v-select>
      </v-col>
    </v-row>
    <v-row align="center">
      <v-radio-group v-model="row" row>
        <v-radio label="Número" value="radio-1"></v-radio>
        <v-radio label="Ramal" value="radio-2"></v-radio>
      </v-radio-group>
      <v-col cols="12" md="3">
        <v-text-field label="ORIGEM" required></v-text-field>
      </v-col>
    </v-row>
    <v-row align="center">
      <v-radio-group v-model="row" row>
        <v-radio label="Número" value="radio-1"></v-radio>
        <v-radio label="Ramal" value="radio-2"></v-radio>
      </v-radio-group>
      <v-col cols="12" md="3">
        <v-text-field label="DESTINO" required></v-text-field>
      </v-col>
    </v-row>
    <v-row no-gutters class="d-flex justify-space-between mt-10 mb-6">
      <v-btn color="primary" class="text-capitalize button-shadow"
        >Aplicar</v-btn
      >
    </v-row>
    <v-data-table :headers="headers" :items="desserts" class="elevation-1">
      <template v-slot:[`item.actions`]="{ item }">
        <v-icon small class="mr-2" @click="editItem(item)">
          mdi-download
        </v-icon>
      </template>
    </v-data-table>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    dialog: false,
    grupo: ["Suporte", "Comercial", "RH", "Vendas"],

    headers: [
      { text: "Data", value: "data" },
      { text: "Origem", value: "origem" },
      { text: "Destino", value: "destino" },
      { text: "Centro de Custo", value: "centro" },
      { text: "Download", value: "actions", sortable: false },
    ],
  }),

  created() {
    this.initialize();
  },

  methods: {
    initialize() {
      this.desserts = [
        {
          data: "10/08/2021",
          origem: "4799887564",
          destino: 1004,
          centro: "Suporte",
        },
        {
          data: "10/08/2021",
          origem: "4799887564",
          destino: 1004,
          centro: "Suporte",
        },
        {
          data: "10/08/2021",
          origem: "4799887564",
          destino: 1004,
          centro: "Suporte",
        },
      ];
    },
    getRandomDataForTrends() {
      const arr = [];
      for (let i = 0; i < 12; i += 1) {
        arr.push(Math.random().toFixed(1) * 10);
      }
      return arr;
    },
    getRandomInt(min, max) {
      let rand = min - 0.5 + Math.random() * (max - min + 1);
      return Math.round(rand);
    },
  },
};
</script>
