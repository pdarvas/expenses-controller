<template>
  <v-app>
    <component :is="currentView" />
    <TheNavigationBar :bottom-nav.sync="bottomNav"/>
  </v-app>
</template>

<script>
import TheNavigationBar from './components/TheNavigationBar'
import DayView from './views/DayView';
import GeneralView from './views/GeneralView';


export default {
  name: 'App',
  components: {
    DayView,
    TheNavigationBar,
    GeneralView
  },
  data () {
    return {
      bottomNav: 'today'
    }
  },
  computed: {
    currentView() {
      return this.bottomNav === 'today' ? DayView : GeneralView
    }
  }
}
</script>

<style>
  .view-container {
    height: calc(100vh - 56px);
    position: relative;
  }
</style>
