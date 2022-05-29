export default {
  data: () => ({
    validateName: [
      (v) => {
        v = v.trim();
        return !!v || "Name is required";
      },
      (v) => {
        v = v.trim();
        return (v && v.length <= 10) || "Name must be less than 10 characters";
      },
    ],
    validateEmail: [
      (v) => {
        v = v.trim();
        return !!v || "Email is required";
      },
      (v) => {
        v = v.trim();
        return /.+@.+\..+/.test(v) || "Email must be valid";
      },
    ],
    validatePassword: [
      (v) => {
        v = v.trim();
        return !!v || "Password is required";
      },
      (v) => {
        v = v.trim();
        return (v && v.length >= 6) || "Password must be atleast 6 characters";
      },
    ],
    validateRiderId: [
      (v) => {
        v = v.trim();
        return !!v || "Rider Id is required";
      },
    ],
    validateRiderPin: [
      (v) => {
        v = v.trim();
        return !!v || "Rider Pin is required";
      },
    ],
  }),

  methods: {
    validate() {
      this.$refs.form.validate();
    },
    reset() {
      this.$refs.form.reset();
    },
    resetValidation() {
      this.$refs.form.resetValidation();
    },
  },
};
