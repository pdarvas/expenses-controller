<template>
  <v-dialog v-model="open">
    <v-card>
      <v-card-title
        class="headline"
        primary-title
      >
        Quanto deseja adicionar?
      </v-card-title>
      <v-card-text>
        <v-text-field
          label="Descrição"
          v-model="value"
          prefix="€"
          type="number"
        ></v-text-field>
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn
          color="primary"
          flat
          @click="$emit('save', value)"
        >
          Salvar
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
  import DialogMixin from '../mixins/DialogMixin';

  export default {
    name: 'AddTotalDialog',
    mixins: [DialogMixin],
    data() {
      return {
        value: undefined
      };
    }
  };
</script>

<style scoped>

</style>
