<template>
  <v-container fluid>
    <v-row no-gutters class="d-flex justify-space-between mt-10 mb-6">
      <h1 class="page-title">Usuários do Sistema</h1>
      <v-dialog v-model="dialog" max-width="500px">
        <template v-slot:activator="{ on, attrs }">
          <v-btn color="primary" dark class="mb-2" v-bind="attrs" v-on="on">
            Novo Usuário
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
      <template v-slot:top>
        <v-toolbar flat>
          <v-divider class="mx-4" inset vertical></v-divider>
          <v-dialog v-model="dialogDelete" max-width="500px">
            <v-card>
              <v-card-title class="text-h5"
                >Tem certeza de que deseja excluir este item?</v-card-title
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
    grupo: ["Suporte", "Comercial", "RH", "Vendas"],

    headers: [
      { text: "Nome", value: "nome" },
      { text: "Senha", value: "senha" },
      { text: "Grupo", value: "grupo" },
      { text: "Ações", value: "actions", sortable: false },
    ],
    desserts: [],
    editedIndex: -1,
    editedItem: {
      nome: "",
      senha: "",
      grupo: "",
    },
    defaultItem: {
      nome: "",
      senha: "",
      grupo: "",
    },
  }),

  computed: {
    formTitle() {
      return this.editedIndex === -1 ? "Novo Usuário" : "Editar Usuário";
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
          nome: "Larissa",
          senha: "1234",
          grupo: "Suporte",
        },
        {
          nome: "Pedro",
          senha: "1234",
          grupo: "RH",
        },
        {
          nome: "Gustavo",
          senha: "1234",
          grupo: "Atendimento",
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
  },
};
</script>
