<template>
  <div class="main-value-container">
    <div class="value-container">
      <span class="label">Gasto</span>
      <span class="number spent">€{{spent.toFixed(2)}}</span>
    </div>
    <div class="value-container">
      <span class="label">Disponível</span>
      <span class="number available">€{{available.toFixed(2)}}</span>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'MainValue',
    props: ['available', 'spent']
  };
</script>

<style scoped>
  .main-value-container {
    height: 100px;
    border-bottom: 1px solid lightgray;
    display: flex;
    justify-content: space-around;
    align-items: center;
  }

  .value-container {
    display: flex;
    flex-direction: column;
  }

  .number {
    font-size: 30px;
  }

  .label {
    font-size: small;
    color: lightslategray;
  }

  .available {
    color: green;
  }

  .spent {
    color: red;
  }
</style>
