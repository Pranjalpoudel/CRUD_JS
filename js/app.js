// ....
// import { groceryItems } from "./data.js";
import { createItems } from "./items.js";
import { createForm } from "./form.js";

// Toast Notification System
let toastId = 0;

function showToast(message, type = "success", duration = 3000) {
  const container = document.getElementById("toast-container");
  if (!container) return;
  
  const id = ++toastId;
  const toast = document.createElement("div");
  toast.className = `toast ${type}`;
  toast.id = `toast-${id}`;
  
  toast.innerHTML = `
    <span>${message}</span>
    <button class="close-btn" onclick="hideToast(${id})">&times;</button>
  `;
  
  container.appendChild(toast);
  
  // Auto remove after duration
  setTimeout(() => hideToast(id), duration);
}

function hideToast(id) {
  const toast = document.getElementById(`toast-${id}`);
  if (toast) {
    toast.classList.add("hide");
    setTimeout(() => {
      if (toast.parentNode) {
        toast.parentNode.removeChild(toast);
      }
    }, 300);
  }
}

// Make hideToast globally available
window.hideToast = hideToast;

function getLocalStorage() {
  const list = localStorage.getItem("grocery-list");
  if (list) {
    return JSON.parse(list);
  }
  return [];
}

function setLocalStorage(itemsArray) {
  localStorage.setItem("grocery-list", JSON.stringify(itemsArray));
}

// Initialize items from local storage
let items = getLocalStorage();
let editId = null;
// Render App
function render() {
  const app = document.getElementById("app");
  app.innerHTML = "";
  const formElement = createForm(
    editId,
    editId ? items.find((item) => item.id === editId) : null,
  );
  const itemsElement = createItems(items);
  app.appendChild(formElement);
  app.appendChild(itemsElement);
}
render();
 // Generate unique ID
function generateId() {
  return Date.now().toString(36) + Math.random().toString(36).substr(2);
}

// Add Item Function
export function addItem(itemName, dueDate = null) {
  const newItem = {
    name: itemName,
    completed: false,
    id: generateId(),
    dueDate: dueDate || null,
  };
  items = [...items, newItem];
  setLocalStorage(items);
  render();
  showToast("Item Added Successfully!", "success");
}   
// Initialize App
render();
// Edit Completed Function
export function editCompleted(itemId) {
  items = items.map((item) => {
    if (item.id === itemId) {
      return { ...item, completed: !item.completed };
    }
    return item;
  });
  setLocalStorage(items);
  render();
}

// Remove Item Function
export function removeItem(itemId) {
  items = items.filter((item) => item.id !== itemId);
  setLocalStorage(items);
  render();
  showToast("Item Deleted Successfully!", "success");
}
// Update Item Name Function
export function updateItemName(newName, newDueDate = null) {
  items = items.map((item) => {
    if (item.id === editId) {
      return { ...item, name: newName, dueDate: newDueDate || item.dueDate };
    }
    return item;
  });
  editId = null;
  setLocalStorage(items);
  render();
  showToast("Item Updated Successfully!", "success");
}

// Set Edit ID Function
export function setEditId(itemId) {
  editId = itemId;
  render();

  // Focus input after render
  setTimeout(() => {
    const input = document.querySelector(".form-input");
    if (input) {
      input.focus();
    }
  }, 0);
}


 
  


