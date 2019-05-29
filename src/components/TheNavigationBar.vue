<template>
  <v-card class="nav-container" flat>
    <v-bottom-nav
      :active.sync="bottomNav1"
      :value="true"
      absolute
      color="white"
    >
      <v-btn
        color="teal"
        flat
        value="today"
      >
        <span>Hoje</span>
        <v-icon>today</v-icon>
      </v-btn>

      <v-btn
        color="teal"
        flat
        value="extract"
      >
        <span>Extrato</span>
        <v-icon>trending_up</v-icon>
      </v-btn>
    </v-bottom-nav>
  </v-card>
</template>

<script>
  export default {
    name: 'TheNavigationBar',
    data() {
      return {
        bottomNav1: this.bottomNav
      }
    },
    props: {
      bottomNav: String
    },
    watch: {
      bottomNav1(newNav) {
        this.$emit('update:bottomNav', newNav);
      }
    }
  };
</script>

<style scoped>
  .nav-container {
    position: fixed;
    bottom: 0;
    width: 100%;
    padding: 0;
  }
</style>
