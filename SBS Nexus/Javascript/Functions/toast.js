export function showToast(options = {}) {
  const { message = "", type = "info", duration = 3000 } = options;
  
  const toast = document.createElement("div");

  toast.className = `toast toast-${type}`;
  toast.textContent = message;

  document.body.append(toast);
  toast.classList.add("toast-visible");

  setTimeout(() => {
    toast.classList.remove("toast-visible");

    setTimeout(() => {
      if (document.body.contains(toast)) toast.remove();
    }, 300);
  }, duration);

  return toast;
}