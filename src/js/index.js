import { createItem, readList, updateItem, 
    deleteItemList, toggleSwitch,  descStorage,
    dateStorage, loadHeaderFooter } from "./handlers.mjs";
import ShoppingList from "./ShoppingList.js";

    window.addEventListener('load', () => {
        readList();
    });

    const updateButton = document.querySelector("#item-done");
    const myShoppingList = new ShoppingList({id});

    updateButton.addEventListener('click', () =>{

        updateItem(myShoppingList.id);
    });
    const deleteButton = document.querySelector("#item-delete");

    deleteButton.addEventListener('click', () => {
        deleteItemList(myShoppingList.id);
    });
    document.getElementById("add-item-form").addEventListener ('submit', createItem);
    document.getElementById("sorting").addEventListener('click', toggleSwitch);
    document.getElementById("filter").addEventListener('click', toggleSwitch);
    document.getElementById("description").addEventListener('keyup', descStorage);
    document.getElementById("date").addEventListener('change', dateStorage);
    readList();
    loadHeaderFooter();