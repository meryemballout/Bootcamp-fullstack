
function removecolor() {
  const select = document.getElementById("colorSelect");
  const selectedIndex = select.selectedIndex;

  if (selectedIndex !== -1) {
    select.remove(selectedIndex);
  }
}

document.getElementById("removeBtn").addEventListener("click", removecolor);
