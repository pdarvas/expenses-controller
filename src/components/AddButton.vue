<template>
  <v-btn
    fab
    color="blue accent-4"
    bottom
    right
    absolute
    class="mb-5"
    v-on="$listeners"
  >
    <v-icon>add</v-icon>
  </v-btn>
</template>

<script>
  export default {
    name: 'AddButton'
  };
</script>

<style scoped>

</style>
