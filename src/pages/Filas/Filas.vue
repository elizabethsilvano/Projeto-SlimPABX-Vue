<template>
  <v-container fluid>
    <v-row no-gutters class="d-flex justify-space-between mt-10 mb-6">
      <h1 class="page-title">Gerenciamento de Filas</h1>
      <v-dialog v-model="dialog" max-width="500px">
        <template v-slot:activator="{ on, attrs }">
          <v-btn color="primary" dark class="mb-2" v-bind="attrs" v-on="on">
            Nova Fila
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
                <v-combobox
                  v-model="model"
                  :items="ramais"
                  :search-input.sync="search"
                  hide-selected
                  label="RAMAIS"
                  multiple
                  persistent-hint
                  small-chips
                >
                </v-combobox>
                <v-select
                  v-model="select"
                  :items="strategy"
                  :rules="[(v) => !!v || 'Selecione o tipo de distribuição']"
                  label="Distribuição"
                  required
                ></v-select>
                <v-select
                  v-model="select"
                  :items="grupo"
                  :rules="[(v) => !!v || 'Selecione um grupo']"
                  label="GRUPO"
                  required
                ></v-select>
                <v-select
                  v-model="select"
                  :items="contexto"
                  :rules="[(v) => !!v || 'Selecione um contexto']"
                  label="CONTEXTO"
                  required
                ></v-select>
                <v-select
                  v-model="select"
                  :items="audio"
                  :rules="[(v) => !!v || 'Selecione o áudio']"
                  label="ÁUDIO"
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
    <template>
      <v-card color="grey lighten-4" flat height="60px" tile>
        <v-toolbar dense>
          <v-spacer></v-spacer>
          <v-card-title class="pa-1 pb-0">
            <v-spacer></v-spacer>
            <v-text-field
              append-icon="mdi-magnify"
              label="Pesquisar"
              clearable
              single-line
              hide-details
            ></v-text-field>
          </v-card-title>
        </v-toolbar>
      </v-card>
    </template>
    <v-data-table
      :headers="headers"
      :items="desserts"
      sort-by="calories"
      class="elevation-1"
    >
      <template v-slot:top>
        <v-toolbar flat>
          <v-divider class="mx-4" inset vertical></v-divider>
          <v-dialog v-model="dialogDelete" max-width="500px">
            <v-card>
              <v-card-title class="text-h5"
                >Deseja excluir este item?</v-card-title
              >
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="error" class="mr-4" @click="closeDelete">
                  Cancelar
                </v-btn>
                <v-btn color="success" class="mr-4" @click="deleteItemConfirm">
                  Excluir
                </v-btn>
                <v-spacer></v-spacer>
              </v-card-actions>
            </v-card>
          </v-dialog>
        </v-toolbar>
      </template>
      <template v-slot:[`item.actions`]="{ item }">
        <v-icon small class="mr-2" @click="editItem(item)">
          mdi-pencil
        </v-icon>
        <v-icon small class="mr-2" @click="deleteItem(item)">
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
    permissao: ["Liberado", "Bloqueado"],
    tipo: ["SIP", "Virtual", "IAX"],
    grupo: ["Suporte", "Comercial", "RH", "Vendas"],
    ramais: ["1000", "1001", "1002", "1003"],
    contexto: ["discagem-ramais", "portaria", "atendimento", "suporte"],
    audio: ["Áudio 1", "Áudio 2", "Áudio 3", "Áudio 4"],
    strategy: [
      "Rrmemory ",
      "Ringall",
      "Roundrobin",
      "Leastrecent",
      "Fewestcalls",
      "Random",
    ],
    headers: [
      { text: "Código", value: "id" },
      { text: "Fila", value: "fila" },
      { text: "Grupo", value: "grupo" },
      { text: "Ações", value: "actions", sortable: false },
    ],
    desserts: [],
    editedIndex: -1,
    editedItem: {
      id: "",
      fila: "",
      grupo: "",
    },
    defaultItem: {
      id: "",
      fila: "",
      grupo: "",
    },
  }),

  computed: {
    formTitle() {
      return this.editedIndex === -1 ? "Nova Fila" : "Editar Fila";
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
          id: 0,
          fila: "Comercial",
          grupo: "Grupo 1",
        },
        {
          id: 2,
          fila: "Suporte",
          grupo: "Grupo 2",
        },
        {
          id: 3,
          fila: "Suporte",
          grupo: "Grupo 2",
        },
        {
          id: 4,
          fila: "RH",
          grupo: "Grupo 3",
        },
        {
          id: 5,
          fila: "Comercial",
          grupo: "Grupo 3",
        },
        {
          id: 6,
          fila: "Suporte 2",
          grupo: "Grupo 3",
        },
        {
          id: 7,
          fila: "Suporte 3",
          grupo: "Grupo 4",
        },
        {
          id: 8,
          fila: "Atendimento",
          grupo: "Grupo 5",
        },
        {
          id: 9,
          fila: "Atendimento 2",
          grupo: "Grupo 2",
        },
        {
          id: 10,
          fila: "Atendimento 3",
          grupo: "Grupo 7",
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
    undo: function() {
      if (this.canUndo) {
        this.editedIndex -= 1;
        this.desserts = this.history[this.editedIndex];
      }
    },
  },
};
</script>
