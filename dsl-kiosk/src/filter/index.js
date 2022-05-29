import Vue from "vue";

Vue.filter("toPad", function (value, size) {
  if (!value) return "";
  if (typeof value != "number") return "";

  var s = "000000000" + value;
  return s.substr(s.length - size);
});

Vue.filter("toPesos", function (value) {
  // Create our number formatter.
  var formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "PHP",
    // These options are needed to round to whole numbers if that's what you want.
    //minimumFractionDigits: 0, // (this suffices for whole numbers, but will print 2500.10 as $2,500.1)
    //maximumFractionDigits: 0, // (causes 2500.99 to be printed as $2,501)
  });

  return formatter.format(value);
});
export default Vue;
