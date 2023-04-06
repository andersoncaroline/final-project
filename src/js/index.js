import { createItem, readList, updateItem, 
    deleteItemList, toggleSwitch,  descStorage,
    dateStorage, loadHeaderFooter } from "./handlers.mjs";
import ShoppingList from "./ShoppingList.js";

    window.addEventListener('load', () => {
        readList();
    });

    const updateButton = document.querySelector("item-done");
    const desc = document.getElementById("description").value;
    const myShoppingList = new ShoppingList({text: desc, done: false, date: date, id: Date.now()});

    if (updateButton){
        updateButton.addEventListener('click', () =>{

            updateItem(myShoppingList.desc);
        });
    }
    const deleteButton = document.querySelector("#item-delete");

    if(deleteButton){
        deleteButton.addEventListener('click', () => {
            deleteItemList(myShoppingList.desc);
        });
    }
    
    document.getElementById("add-item-form").addEventListener ('submit', createItem);
    document.getElementById("sorting").addEventListener('click', toggleSwitch);
    document.getElementById("filter").addEventListener('click', toggleSwitch);
    document.getElementById("description").addEventListener('keyup', descStorage);
    document.getElementById("date").addEventListener('change', dateStorage);
    readList();

    loadHeaderFooter(); 