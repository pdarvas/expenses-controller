<template>
  <v-app>
    <template v-if="user">
      <component :is="currentView" />
      <TheNavigationBar :bottom-nav.sync="bottomNav"/>
    </template>
    <template v-else>
      <SetNameDialog @save="saveName"/>
    </template>
  </v-app>
</template>

<script>
import TheNavigationBar from './components/TheNavigationBar'
import DayView from './views/DayView';
import GeneralView from './views/GeneralView';
import {getUser, setUser} from './utils/localStorage';
import SetNameDialog from './components/SetNameDialog';
import Firebase from './Firebase';


export default {
  name: 'App',
  components: {
    SetNameDialog,
    DayView,
    TheNavigationBar,
    GeneralView
  },
  data () {
    return {
      bottomNav: 'today',
      user: getUser()
    }
  },
  computed: {
    currentView() {
      return this.bottomNav === 'today' ? DayView : GeneralView
    }
  },
  methods: {
    saveName(name) {
      this.user = name;
      setUser(name);
      Firebase.setUser(name);
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
