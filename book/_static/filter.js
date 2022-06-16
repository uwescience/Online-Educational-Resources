function showOnly(filter) {
  const shields = document.getElementsByClassName("level-shield");
  for (shield of shields) {
    const parent = shield.parentElement;
    const grandparent = parent.parentElement;
    let container = parent;
    if (grandparent.tagName === "LI") {
      container = grandparent;
    }
    if (filter !== undefined && !shield.classList.contains(filter)) {
      container.style.display = "none";
    } else {
      container.style.display = "";        
    }
  }
}
