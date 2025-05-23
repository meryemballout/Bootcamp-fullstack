document.getElementById("letterOnly").addEventListener("input", function () {
  this.value = this.value.replace(/[^a-zA-Z]/g, "");
});
