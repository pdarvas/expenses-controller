<template>
  <v-dialog :value="open" fullscreen hide-overlay transition="dialog-bottom-transition">
    <v-card>
      <v-toolbar dark color="primary">
        <v-btn icon dark @click="$emit('change', false)">
          <v-icon>close</v-icon>
        </v-btn>
        <v-toolbar-title>{{title}}</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-toolbar-items>
<!--          <v-btn dark flat @click="$emit('save')">Salvar</v-btn>-->
        </v-toolbar-items>
      </v-toolbar>
      <slot></slot>
    </v-card>
  </v-dialog>
</template>

<script>
  export default {
    name: 'BaseDialog',
    model: {
      prop: 'open',
      event: 'change'
    },
    props: ['open', 'title']
  };
</script>

<style scoped>

</style>
