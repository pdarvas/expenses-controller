// Firebase App is always required and must be first
import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import dayjs from 'dayjs';
import {firebaseConfig} from '../config';

class Firebase {
  constructor() {
    firebase.initializeApp(firebaseConfig);
    firebase.firestore().enablePersistence();
    this.database = firebase.firestore();
    this.auth = firebase.auth();
    this.user = 'user1'
  }

  async createDayInfo(day) {
    const dayRef = this.database.collection('trips')
      .doc('user1')
      .collection('days')
      .doc(day);

    const dayInfo = await dayRef.get();

    if (!dayInfo.exists) {
      await dayRef.set({spent: 0, total: 70})
    }
  }

  async addDescriptionToDay(description, day) {
    const dayRef = this.database.collection('trips')
      .doc('user1')
      .collection('days')
      .doc(day);

    const total = await this.calculateTotalForDay();

    dayRef.set({spent: 0, total, description})
  }

  async calculateTotalForDay() {
    const ref = this.getTripRef();

    const trip = (await ref.get()).data();

    const finish = dayjs(trip.end.toDate());

    const diff = finish.diff(getPureDay(dayjs()), 'day');

    const available = trip.total - trip.spent;

    return Number((available/diff).toFixed(2));
  }

  getExpensesInDayRef(day) {
    return this.database.collection('trips')
      .doc('user1')
      .collection('days')
      .doc(day)
      .collection('expenses')
      .orderBy('time', 'desc')
  }

  getDayInfoRef(day) {
    return this.database.collection('trips')
      .doc('user1')
      .collection('days')
      .doc(day)
  }

  getDaysRef() {
    return this.database.collection('trips')
      .doc('user1')
      .collection('days')
  }

  getTripRef() {
    return this.database.collection('trips')
      .doc('user1')
  }

  addExpenseToDay(expense, day) {
    const dayRef = this.database.collection('trips')
      .doc('user1')
      .collection('days')
      .doc(day);

    if (expense.id) {
      dayRef.collection('expenses').doc(expense.id).set(expense)
    } else {
      dayRef.collection('expenses').add(expense);
    }

    this.updateDaySpent(day)
  }

  deleteExpenseFromDay(expense, day) {
    const dayRef = this.database.collection('trips')
      .doc('user1')
      .collection('days')
      .doc(day);

    if (expense.id) {
      dayRef.collection('expenses').doc(expense.id).delete()
    }

    this.updateDaySpent(day)
  }

  async updateDaySpent(day) {
    const dayRef = this.database.collection('trips')
      .doc('user1')
      .collection('days')
      .doc(day);

    const expenses = await dayRef.collection('expenses').get();

    const spent = expenses.docs.reduce((acc, expense) => Number((acc += parseFloat(expense.data().value)).toFixed(2)), 0);

    dayRef.update({spent})
  }

  async updateGeneralSpent() {
    const tripRef = this.database.collection('trips')
      .doc('user1');

    const days = await tripRef.collection('days').get();

    const spent = days.docs.reduce((acc, day) => Number((acc += parseFloat(day.data().spent)).toFixed(2)), 0);

    tripRef.update({spent})
  }

  async addTotal(total) {
    const ref = this.getTripRef();

    const trip = (await ref.get()).data();

    ref.update({total: Number((Number(trip.total) + Number(total)).toFixed(2))});
  }
}

const getPureDay = (time) => {
  return time.hour(0).minute(0).second(0).millisecond(0)
};

export default new Firebase();

