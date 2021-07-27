<template>
  <v-container fluid>
    <v-row no-gutters class="d-flex justify-space-between mt-10 mb-6">
      <h2 class="page-title">Agendamento de Conferências</h2>
      <v-dialog v-model="dialog" max-width="500px">
        <template v-slot:activator="{ on, attrs }">
          <v-btn color="primary" dark class="mb-2" v-bind="attrs" v-on="on">
            Novo Agendamento
          </v-btn>
        </template>
        <v-card>
          <v-card-title>
            <span class="text-h5">{{ formTitle2 }}</span>
          </v-card-title>

          <v-card-text>
            <template>
              <v-form ref="form" v-model="valid" lazy-validation>
                <template>
                  <v-row>
                    <v-col cols="12">
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
                            label="Data"
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
                          <v-btn
                            text
                            color="primary"
                            @click="$refs.menu.save(date)"
                          >
                            OK
                          </v-btn>
                        </v-date-picker>
                      </v-menu>
                    </v-col>
                    <v-spacer></v-spacer>
                  </v-row>
                </template>
                <template>
                  <v-row>
                    <v-col cols="12">
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
                            label="Horário"
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
                          <v-btn
                            text
                            color="primary"
                            @click="$refs.dialog.save(time)"
                          >
                            OK
                          </v-btn>
                        </v-time-picker>
                      </v-dialog>
                    </v-col>
                  </v-row>
                </template>
                <v-select
                  v-model="select"
                  :items="sala"
                  :rules="[(v) => !!v || 'Selecione uma sala']"
                  label="Sala"
                  required
                ></v-select>
                <v-text-field
                  v-model="fila"
                  label="Descrição"
                  required
                ></v-text-field>
              </v-form>
            </template>
          </v-card-text>

          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="warning" @click="resetValidation">
              Limpar
            </v-btn>
            <v-btn color="error" class="mr-4" @click="close">
              Cancelar
            </v-btn>
            <v-btn color="success" class="mr-4" @click="save">
              Salvar
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-row>

    <v-data-table :headers="headers" :items="desserts" class="elevation-1">
      <template v-slot:[`item.actions`]="{ item }">
        <v-icon small class="mr-2" @click="editItem(item)">
          mdi-pencil
        </v-icon>
        <v-icon small class="mr-2" v-on:click="alertDisplay">
          mdi-delete
        </v-icon>
        <v-icon @click="undo(item)">
          mdi-undo
        </v-icon>
      </template>
    </v-data-table>
  </v-container>
</template>

<script>
import Vue from "vue";
import VueSweetalert2 from "vue-sweetalert2";

Vue.use(VueSweetalert2);
export default {
  data: () => ({
    dialog: false,
    dialogDelete: false,
    grupo: ["Suporte", "Comercial", "RH", "Vendas"],
    sala: [900, 901, 902, 903, 904],
    time: null,
    menu2: false,
    modal2: false,
    date: new Date(Date.now() - new Date().getTimezoneOffset() * 60000)
      .toISOString()
      .substr(0, 10),
    menu: false,
    modal: false,

    headers: [
      { text: "Data", value: "data" },
      { text: "Sala", value: "sala" },
      { text: "Números", value: "numeros" },
      { text: "Descrição", value: "desc" },
      { text: "Ações", value: "actions", sortable: false },
    ],
    desserts: [],
    editedIndex: -1,
    editedItem: {
      data: "",
      sala: "",
      numeros: "",
      desc: "",
    },
    defaultItem: {
      data: "",
      sala: "",
      numeros: "",
      desc: "",
    },
  }),

  computed: {
    formTitle2() {
      return this.editedIndex === -1 ? "Novo Agendamento" : "Editar Agenda";
    },
  },

  watch: {
    dialog(val) {
      val || this.close();
    },
    dialogDelete(val) {
      val || this.closeDelete();
    },
  },

  created() {
    this.initialize();
  },

  methods: {
    initialize() {
      this.desserts = [
        {
          data: "10/08/2021",
          sala: 901,
          numeros: "4799887564",
          desc: "Reunião Suporte",
        },
        {
          data: "11/08/2021",
          sala: 902,
          numeros: "4799887564",
          desc: "Reunião Suporte",
        },
        {
          data: "12/08/2021",
          sala: 901,
          numeros: "4799887564",
          desc: "Reunião Suporte 2",
        },
      ];
    },

    editItem(item) {
      this.editedIndex = this.desserts.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.dialog = true;
    },

    deleteItem(item) {
      this.editedIndex = this.desserts.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.dialogDelete = true;
    },

    deleteItemConfirm() {
      this.desserts.splice(this.editedIndex, 1);
      this.closeDelete();
    },

    close() {
      this.dialog = false;
      this.$nextTick(() => {
        this.editedItem = Object.assign({}, this.defaultItem);
        this.editedIndex = -1;
      });
    },

    closeDelete() {
      this.dialogDelete = false;
      this.$nextTick(() => {
        this.editedItem = Object.assign({}, this.defaultItem);
        this.editedIndex = -1;
      });
    },

    save() {
      if (this.editedIndex > -1) {
        Object.assign(this.desserts[this.editedIndex], this.editedItem);
      } else {
        this.desserts.push(this.editedItem);
      }
      this.close();
    },
    resetValidation() {
      this.$refs.editedItem.resetValidation();
    },
    alertDisplay() {
      this.$swal({
        title: "Deseja excluir esta agenda?",
        text: "A agenda será excluída do banco de dados",
        type: "warning",
        showCancelButton: true,
        showUndoButton: true,
        confirmButtonColor: "#3CD4A0",
        cancelButtonColor: "#E53935",
        confirmButtonText: "Sim, excluir!",
      }).then((result) => {
        if (result.value) {
          this.$swal("Excluído", "Agenda excluída com sucesso!", "success");
        } else {
          this.$swal("Exclusão Cancelada!");
        }
      });
    },
  },
};
</script>
