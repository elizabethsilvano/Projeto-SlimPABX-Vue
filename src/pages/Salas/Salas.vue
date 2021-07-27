<template>
  <v-container fluid>
    <v-row no-gutters class="d-flex justify-space-between mt-10 mb-6">
      <h1 class="page-title">Salas de Conferência</h1>
      <v-dialog v-model="dialog" max-width="500px">
        <template v-slot:activator="{ on, attrs }">
          <v-btn color="primary" dark class="mb-2" v-bind="attrs" v-on="on">
            Nova Sala
          </v-btn>
        </template>
        <v-card>
          <v-card-title>
            <span class="text-h5">{{ formTitle }}</span>
          </v-card-title>

          <v-card-text>
            <template>
              <v-form ref="form" v-model="valid" lazy-validation>
                <v-text-field
                  v-model="fila"
                  label="Nome"
                  required
                ></v-text-field>
                <v-text-field
                  v-model="fila"
                  label="Senha"
                  required
                ></v-text-field>
                <v-select
                  v-model="select"
                  :items="grupo"
                  :rules="[(v) => !!v || 'Selecione um grupo']"
                  label="GRUPO"
                  required
                ></v-select>
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

    <v-data-table
      :headers="headers"
      :items="desserts"
      sort-by="calories"
      class="elevation-1"
    >
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
      { text: "Sala", value: "sala" },
      { text: "Nome", value: "nome" },
      { text: "Grupo", value: "senha" },
      { text: "Ações", value: "actions", sortable: false },
    ],
    desserts: [],
    editedIndex: -1,
    editedItem: {
      sala: "",
      nome: "",
      senha: "",
    },
    defaultItem: {
      sala: "",
      nome: "",
      senha: "",
    },
  }),

  computed: {
    formTitle() {
      return this.editedIndex === -1 ? "Nova Sala" : "Editar Sala";
    },
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
          sala: 900,
          nome: "Projetos",
          senha: "1010",
        },
        {
          sala: 901,
          nome: "Comercial",
          senha: "1011",
        },
        {
          sala: 902,
          nome: "RH",
          senha: "1012",
        },
      ];
    },

    editItem(item) {
      this.editedIndex = this.desserts.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.dialog = true;
    },
    close() {
      this.dialog = false;
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
        title: "Deseja excluir esta sala?",
        text: "A sala será excluída do banco de dados",
        type: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3CD4A0",
        cancelButtonColor: "#E53935",
        confirmButtonText: "Sim, excluir!",
      }).then((result) => {
        if (result.value) {
          this.$swal("Excluído", "Sala excluída com sucesso!", "success");
        } else {
          this.$swal("Exclusão Cancelada!");
        }
      });
    },
  },
};
</script>
