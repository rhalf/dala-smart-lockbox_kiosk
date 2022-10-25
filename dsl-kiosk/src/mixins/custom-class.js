export default {
  props: {
    customClass: {
      type: String,
      default: "",
    },
    required: {
      type: Boolean,
      default: false,
    },
    bold: {
      type: Boolean,
      default: false,
    },
    block: {
      type: Boolean,
      default: false,
    },
    placeholder: {
      type: String,
      default: "",
    },
    label: {
      type: String,
      default: "",
    },
    clearable: {
      type: Boolean,
      default: false,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    underlined: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    classes() {
      let classes = [];

      this.customClass.split(" ").map((c) => classes.push(c));

      return classes;
    },
  },
};
