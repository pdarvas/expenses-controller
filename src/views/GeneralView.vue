<template>
  <div class="view-container">
    <ExpensesMainValue :available="trip.total - trip.spent" :spent="trip.spent" />
    <ExpensesList :items="mappedItems" @select-item="selectItem"/>
    <DayViewDialog :day="selectedDay" v-model="dayDialogOpen"/>
    <AddTotalDialog @save="addTotal" v-model="totalDialogOpen"/>
    <AddButton @click="totalDialogOpen = true"/>
  </div>
</template>

<script>
  import ExpensesMainValue from '../components/ExpensesMainValue';
  import ExpensesList from '../components/ExpensesList';
  import DayViewDialog from '../components/DayViewDialog';
  import Firebase from '../Firebase';
  import dayjs from 'dayjs';
  import AddButton from '../components/AddButton';
  import AddTotalDialog from '../components/AddTotalDialog';

  export default {
    name: 'GeneralView',
    components: {
      AddTotalDialog,
      ExpensesMainValue,
      ExpensesList,
      DayViewDialog,
      AddButton
    },
    data() {
      return {
        items: [],
        dayDialogOpen: false,
        totalDialogOpen: false,
        trip: {
          total: 0,
          spent: 0
        },
        selectedDay: undefined
      }
    },
    computed: {
      mappedItems() {
        return this.items.map((item) => {
          return {
            time: dayjs(item.id).format('DD/MM'),
            description: item.description,
            value: item.spent,
            id: item.id
          }
        }).reverse()
      }
    },
    created() {
      Firebase.updateGeneralSpent();
      this.$bind('items', Firebase.getDaysRef());
      this.$bind('trip', Firebase.getTripRef());
    },
    methods: {
      selectItem(item) {
        this.dayDialogOpen = true;
        this.selectedDay = item.id;
      },
      addTotal(total) {
        this.totalDialogOpen = false;
        Firebase.addTotal(total);
      }
    },
    watch: {
      dayDialogOpen(val) {
        if (!val) {
          Firebase.updateGeneralSpent()
        }
      }
    }
  };
</script>

<style scoped>

</style>
