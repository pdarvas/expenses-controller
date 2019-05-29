<template>
  <div class="item-container" @click="$emit('select')">
    <div class="small-item">
      {{item.time}}
    </div>
    <div>
      {{item.description}}
    </div>
    <div class="small-item">
      €{{item.value}}
    </div>
  </div>
</template>

<script>
  export default {
    name: 'ExpensesListItem',
    props: ['item']
  };
</script>

<style scoped>
  .item-container {
    display: grid;
    grid-template-columns: 18% auto 18%;
    height: 50px;
    align-items: center;
    border-bottom: 1px solid lightgray;
  }

  .small-item {
    display: flex;
    justify-content: center;
  }
</style>
