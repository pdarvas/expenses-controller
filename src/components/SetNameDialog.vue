<template>
  <v-dialog value="true" persistent>
    <v-card>
      <v-card-title
        class="headline"
        primary-title
      >
        Qual é seu nome?
      </v-card-title>
      <v-card-text>
        <v-text-field
          label="Nome"
          v-model="name"
          type="text"
        ></v-text-field>
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn
          color="primary"
          flat
          @click="$emit('save', name)"
        >
          Salvar
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
  export default {
    name: 'SetNameDialog',
    data() {
      return {
        name: undefined
      }
    }
  };
</script>

<style scoped>

</style>
