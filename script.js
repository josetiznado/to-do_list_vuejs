var data = {
  items: [
    { text: "Smile", checked: false },
    { text: "Have fun", checked: false },
    { text: "Be happy", checked: false }
  ],
  title: "List",
  newItem: null
};
new Vue({
  el: "#app",
  data: data,
  newItem: "",
  methods: {
    addItem: function() {
      var text;
      text = this.newItem.trim();
      if (text) {
        this.items.push({
          text: text,
          checked: false
        });
        this.newItem = "";
      }
    }
  }
});
