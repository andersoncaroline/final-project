import {
  createItem,
  readList,
  updateItem,
  deleteItemList,
  toggleSwitch,
  descStorage,
  dateStorage,
  loadHeaderFooter,
} from "./handlers.mjs";
import ShoppingList from "./ShoppingList.js";

// add update and delete functions to the global scope so they work in the item template
window.updateItem = (id) => updateItem(id);
window.deleteItem = (id) => deleteItemList(id);

window.addEventListener("load", () => {
  readList();
});

const desc = document.getElementById("description").value;
const myShoppingList = new ShoppingList({
  text: desc,
  done: false,
  date: date,
  id: Date.now(),
});

document.getElementById("add-item-form").addEventListener("submit", createItem);
document.getElementById("sorting").addEventListener("click", toggleSwitch);
document.getElementById("filter").addEventListener("click", toggleSwitch);
document.getElementById("description").addEventListener("keyup", descStorage);
document.getElementById("date").addEventListener("change", dateStorage);
readList();

loadHeaderFooter();
