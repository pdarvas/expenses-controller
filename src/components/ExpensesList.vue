<template>
  <div class="list-container">
    <ExpensesListItem v-for="item in items" :item="item" :key="item.id" @select="$emit('select-item', item)"/>
  </div>
</template>

<script>
  import ExpensesListItem from './ExpensesListItem';
  export default {
    name: 'ExpensesList',
    components: {ExpensesListItem},
    props: ['items']
  };
</script>

<style scoped>
  .list-container {
    height: calc(100% - 100px);
    overflow: auto;
  }
</style>
