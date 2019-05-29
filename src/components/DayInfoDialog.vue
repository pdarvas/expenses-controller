<template>
  <v-dialog :value="open" persistent>
    <v-card>
      <v-card-title
        class="headline"
        primary-title
      >
        Onde você está?
      </v-card-title>
      <v-card-text>
        <v-text-field
          label="Descrição"
          v-model="description"
          type="text"
        ></v-text-field>
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn
          color="primary"
          flat
          @click="$emit('save', description)"
        >
          Salvar
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
  export default {
    name: 'DayInfoDialog',
    props: ['open'],
    data() {
      return {
        description: ''
      };
    }
  };
</script>

<style scoped>

</style>
