<template>
  <v-footer class="px-0 mt-10" color="transparent">
    <v-row no-gutters>
      <div>
        <v-btn
          v-for="link in links"
          :key="link.link"
          color="primary"
          text
          :href="link.link"
          class="text-capitalize ml-1 font-weight-regular"
        >
          {{ link.text }}
        </v-btn>
      </div>
      <div>
        <v-btn
          v-for="icon in icons"
          :key="icon.icon"
          :href="icon.link"
          class="mr-1"
          :color="config.light.textColor"
          icon
        >
          <v-icon size="24px">{{ icon.icon }}</v-icon>
        </v-btn>
      </div>
    </v-row>
  </v-footer>
</template>

<script>
import config from "../../config";

export default {
  name: "Footer",

  data: () => ({
    config,
    icons: [],
    links: [],
  }),
};
</script>

<style src="./Footer.scss" lang="scss" />
