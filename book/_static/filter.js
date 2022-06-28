function showOnly(filter) {
  const all_shields = document.getElementsByClassName("level-shield");
  
  const shielded_containers = new Set();

  // Build list of filterable page elements
  for (let shield of all_shields) {
    const parent = shield.parentElement;
    const grandparent = parent.parentElement;
    let container = parent;
    if (grandparent.tagName === "LI") {
      container = grandparent;
    }
    shielded_containers.add(container);
  }

  // For each filterable element, hide if it doesn't
  // contain the specified filter
  for (let container of shielded_containers) {
    let hide_container = true;
    let container_shields = container.getElementsByClassName("level-shield");
    for (let shield of container_shields) {
      if (shield.classList.contains(filter)) {
        hide_container = false;
      }
    }
    if (filter === undefined || !hide_container) {
      container.style.display = "";
    } else {
      container.style.display = "none";
    }
  }
}
