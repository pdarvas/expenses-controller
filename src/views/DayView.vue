<template>
  <div class="view-container">
    <ExpensesMainValue :available="dayInfo.total - dayInfo.spent" :spent="dayInfo.spent"/>
    <ExpensesList :items="items" @select-item="selectItem"/>
    <AddButton @click="dialogOpen = true"/>
    <ExpensesDayDialog
        v-model="dialogOpen"
        @save-item="saveItem"
        @delete-item="deleteItem"
        :initial-item="selectedItem"
    />
    <DayInfoDialog :open="dayInfoDialogOpen" @save="addDescriptionToDay"/>
  </div>
</template>

<script>
  import ExpensesMainValue from '../components/ExpensesMainValue';
  import ExpensesList from '../components/ExpensesList';
  import ExpensesDayDialog from '../components/ExpensesDayDialog';
  import AddButton from '../components/AddButton';
  import Firebase from '../Firebase';
  import DayInfoDialog from '../components/DayInfoDialog';
  import dayjs from 'dayjs';

  export default {
    name: 'DayView',
    components: {
      AddButton,
      ExpensesDayDialog,
      ExpensesMainValue,
      ExpensesList,
      DayInfoDialog
    },
    props: {
      day: {
        type: String,
        default: dayjs().format('YYYY-MM-DD')
      }
    },
    data() {
      return {
        dialogOpen: false,
        selectedItem: undefined,
        items: [],
        dayInfo: {
          total: 0,
          spent: 0
        },
        dayInfoDialogOpen: false
      }
    },
    methods: {
      saveItem(item) {
        Firebase.addExpenseToDay(item, this.day)
      },
      deleteItem(item) {
        Firebase.deleteExpenseFromDay(item, this.day)
      },
      selectItem(item) {
        this.selectedItem = item;
        this.dialogOpen = true;
      },
      addDescriptionToDay(description) {
        Firebase.addDescriptionToDay(description, this.day);
        this.dayInfoDialogOpen = false
      }
    },
    watch: {
      dialogOpen(val) {
        if (!val) {
          this.selectedItem = {}
        }
      },
      day: {
        immediate: true,
        handler(day) {
          this.$bind('dayInfo', Firebase.getDayInfoRef(day)).then((day) => {
            if (!day.description) {
              this.dayInfoDialogOpen = true
            }
          });
          this.$bind('items', Firebase.getExpensesInDayRef(day))
        }
      }
    }
  };
</script>

<style scoped>

</style>
