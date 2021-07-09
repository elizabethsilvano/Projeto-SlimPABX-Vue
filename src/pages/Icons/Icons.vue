<template>
  <v-container fluid class="icons-page">
    <v-row no-gutters class="d-flex justify-space-between mt-10 mb-6">
      <h1 class="page-title">Icons</h1>
      <v-menu offset-y>
        <template v-slot:activator="{ on, attrs }">
          <v-btn
            v-bind="attrs"
            v-on="on"
            color="error"
            class="text-capitalize button-shadow"
            >Actions</v-btn
          >
        </template>
        <v-list>
          <v-list-item link v-for="(item, index) in lastReports" :key="index">
            <v-list-item-icon>
              <v-icon v-text="item.icon"></v-icon>
            </v-list-item-icon>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </v-row>
    <v-row>
      <v-col cols="12">
        <v-tabs light centered grow>
          <v-tabs-slider></v-tabs-slider>

          <v-tab :href="`#tab-font-awesome`">
            Font Awesome
          </v-tab>
          <v-tab :href="`#tab-material-icons`">
            Material Icons
          </v-tab>

          <v-tab-item :value="'tab-material-icons'">
            <v-card flat tile>
              <v-card-text>
                <v-row no-gutters>
                  <template v-for="icon in materialIcons">
                    <v-col
                      md="3"
                      lg="2"
                      sm="6"
                      cols="12"
                      :key="icon"
                      class="mb-5"
                    >
                      <v-icon class="mr-3"> {{ icon }} </v-icon>
                      <span> {{ icon }}</span>
                    </v-col>
                  </template>
                </v-row>
              </v-card-text>
            </v-card>
          </v-tab-item>
          <v-tab-item :value="'tab-font-awesome'">
            <v-card flat tile>
              <v-card-text>
                <v-row no-gutters>
                  <template v-for="icon in fontAwesome">
                    <v-col
                      md="3"
                      lg="2"
                      sm="6"
                      cols="12"
                      :key="icon"
                      class="mb-5"
                    >
                      <v-icon class="mr-3">
                        {{ toFontAwesomeText(icon) }}
                      </v-icon>
                      <span> {{ icon }}</span>
                    </v-col>
                  </template>
                </v-row>
              </v-card-text>
            </v-card>
          </v-tab-item>
        </v-tabs>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    toFontAwesomeText(name) {
      return "fa-" + name.toLowerCase();
    },
  },
};
</script>

<style src="./Icons.scss" lang="scss" />
