import BaseDialog from '../components/BaseDialog';

export default {
  components: {
    BaseDialog
  },
  model: {
    prop: 'dialogOpen',
    event: 'change'
  },
  props: {
    dialogOpen: Boolean,
  },
  data() {
    return {
      open: this.dialogOpen
    }
  },
  watch: {
    open(val) {
      this.$emit('change', val)
    },
    dialogOpen(val) {
      this.open = val;
    }
  },
}