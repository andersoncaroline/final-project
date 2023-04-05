import { createItem, readList, updateItem, 
    deleteItemList, toggleSwitch,  descStorage,
    dateStorage } from "./CRUD.mjs";

    window.addEventListener('load', () => {
        readList();
    });

    document.getElementById("add-item-form").addEventListener ('submit', createItem);
    document.getElementById("sorting").addEventListener('click', toggleSwitch);
    document.getElementById("filter").addEventListener('click', toggleSwitch);
    document.getElementById("description").addEventListener('keyup', descStorage);
    document.getElementById("date").addEventListener('change', dateStorage);
    readList();
