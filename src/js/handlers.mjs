import ShoppingList from "./ShoppingList";
import { updateStorage, readStorage
 } from "./storage";

 export function createItem(event){
    // Pulling data from the DOM, formatting it to JSON, and saving it to local storage

    let items = readStorage();
    event.preventDefault();

    const desc = document.getElementById("description").value;
    const date = document.getElementById("date").value;
    const item = new ShoppingList({text: desc, done: false, date: date, id: Date.now()});
    items.push(item);
    localStorage.removeItem("");
    localStorage.removeItem("");

    updateStorage(items);

    readList();
}

//This function reads the list that is being created
export function readList(){
    //Pulling data from the DOM, using toHTML() to parse, updating DOM
    let items = readStorage();
    let string = "";
    for (let i = 0; i < items.length; i++){
        string += items[i].toHTML();
    }
    document.getElementById("list").innerHTML = string;

    document.getElementById("description").value = localStorage.getItem("descriptionbox");
    document.getElementById("date").value = localStorage.getItem("datebox");   
    
}

//This function updates the list items to be done in the array
export function updateItem(id){
    //Pulling data from the DOM, saving it to local storage, and updating the DOM
    let items = readStorage();
    for(let i = 0; i < items.length; i++){
        if(items[i].id == id){
            items[i].toggle();
        }
    }
    updateStorage(items);
    readList();
}

//This function deletes a single item from the array
export function deleteItemList(id){
    //Pulling data from the DOM, for looping to delete the item, 
    //savng it to local storage, and updating the DOM
    let items = readStorage();
    for(let i = 0; i < items.length; i++){
        if(items[i].id == id){
            items.splice(i, 1);
        }
    }
    updateStorage(items);
    readList();
}

//This function makes sure that the sortin and filtering functions work
export function toggleSwitch(){
    //Pulling data from the DOM, grabbing the elements by ID,
    //filtering items by status
    let arrayCopy = readStorage();
    sortbyDate = document.getElementById("sorting").checked;
    filterByDescription = document.getElementById("filter").checked;
    console.log(sortbyDate, filterByDescription);
    if(sortbyDate && filterByDescription){
        arrayCopy = sortList(arrayCopy);
        arrayCopy = filterItems(arrayCopy);
        sortItems(arrayCopy);
    } else if (!sortbyDate && !filterByDescription){
        arrayCopy = sortList(arrayCopy);
        sortItems(arrayCopy);
    } else if(!sortbyDate && filterByDescription){
        arrayCopy = filterItems(arrayCopy);
        sortItems(arrayCopy);
    } else{
        readList();
    }
}