<template>
  <BaseDialog title="Adicionar Custo" v-model="open">
    <div class="pa-3">
      <v-text-field
          label="Preço"
          v-model="item.value"
          prefix="€"
          type="number"
      ></v-text-field>
      <v-text-field
          label="Descrição"
          v-model="item.description"
      ></v-text-field>
      <v-text-field
          label="Horário"
          v-model="item.time"
          type="time"
      ></v-text-field>
      <div class="buttons-container">
        <v-btn class="button" @click="saveItem" color="primary" large>
          Salvar
        </v-btn>
        <v-btn class="button" @click="deleteItem" color="primary" large v-if="item.id">
          Deletar
        </v-btn>
      </div>
    </div>
  </BaseDialog>
</template>

<script>
  import DialogMixin from '../mixins/DialogMixin';
  import dayjs from 'dayjs';

  export default {
    name: 'ExpensesDayDialog',
    props: {
      initialItem: {
        type: Object,
        default() {
          return {
            time: dayjs().format('HH:mm')
          };
        }
      }
    },
    data() {
      return {
        item: this.initialItem,
      };
    },
    watch: {
      dialogOpen(val) {
        if (val) {
          this.item = this.initialItem;
        }
      }
    },
    methods: {
      saveItem() {
        this.open = false;
        this.$emit('save-item', this.item);
      },
      deleteItem() {
        this.open = false;
        this.$emit('delete-item', this.item);
      }
    },
    mixins: [DialogMixin]
  };
</script>

<style scoped>
  .buttons-container {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .button {
    width: 200px;
  }
</style>
