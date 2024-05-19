export function showToast(operation, id, name) {
  const toast = document.createElement("div");
  toast.classList.add("toast");

  if (operation === "add") {
    toast.textContent = `${name} has been added`;
  } else {
    toast.textContent = `${name} has been removed`;
  }

  document.body.appendChild(toast);

  setTimeout(() => {
    toast.remove();
  }, 4000);
}
