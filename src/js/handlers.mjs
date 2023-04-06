import {readStorage, updateStorage} from './storage.js';
import ShoppingList from './ShoppingList.js';

let items =[];

// This function creates a new item and pushes it into the array
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
    const initialList = readStorage();
    const sortbyDate = document.getElementById("sorting").checked;
    const filterDone = document.getElementById("filter").checked;

    const sortedFilteredList = initialList.filter((item) => {
        if (filterDone) return !item.done

        return true
    }).sort((itemA, itemB) => {
        if (sortbyDate) return new Date(itemA.date) - new Date(itemB.date)

        return itemA.text.toLowerCase().localeCompare(itemB.text.toLowerCase())
    })

    document.getElementById("list").innerHTML = sortedFilteredList.map(item => item.toHTML()).join('\n');
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

//This function turns strings into dates and then subtracts them
//The value is either negative, positive, or zero
export function sortList(arrayCopy){
    return arrayCopy.sort(function(a,b){
    return new Date(b.date) - new Date(a.date);
    });
}

//This function makes sure that the sortin and filtering functions work
export function toggleSwitch(){
    // just reload the list. It will automatically sort and filter
    readList()
}

//This function parses the tasks using the toHTML()
export function sortItems(arrayCopy){
    //Pulling data from local storage, parsing, and then updating the DOM
    let string= "";
    for(let i = 0; i < arrayCopy.length; i++){
        string += arrayCopy[i].toHTML();
    }
    document.getElementById("list").innerHTML = string;
}

//This function filters the items when they are either done or not done
export function filterItems(arrayCopy){
    return arrayCopy.filter(items => !items.done);
}

//This function sets the description of the items
export function descStorage(){
    let descriptionStorage = document.getElementById("description").value;
    localStorage.setItem("descriptionbox", descriptionStorage);
}

//This function sets the date of the items
export function dateStorage(){
    let dateStore = document.getElementById("date").value;
    localStorage.setItem("datebox", dateStore);
}

// function to dynamically load the header and footer into a page
export function loadHeaderFooter() {
    fetch('public/partials/header.html')
        .then(response => response.text())
        .then(html => {
            document.querySelector('#main-header').innerHTML = html;
        });
    fetch('public/partials/footer.html')
        .then(response => response.text())
        .then(html => {
            document.querySelector('#main-footer').innerHTML = html;
        });

}