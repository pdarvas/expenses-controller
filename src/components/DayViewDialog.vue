<template>
  <BaseDialog :title="day.description" v-model="open" v-if="day">
    <DayView :day="day"/>
  </BaseDialog>
</template>

<script>
  import DayView from '../views/DayView';
  import DialogMixin from '../mixins/DialogMixin';

  export default {
    name: 'DayViewDialog',
    components: {
      DayView
    },
    mixins: [DialogMixin],
    props: ['day']
  };
</script>

<style scoped>

</style>
