// ShoppingList class with constructor
export default class ShoppingList{    
    constructor({text, date, done, id}){
        this.text = text;
        this.date = date;
        this.done = done;
        this.id = id;
    }

    //Return what will be visible when customers input tasks/items
    toHTML(){
        return`
        <li class="item my-description">
            <input type='checkbox' onclick="updateItem(${this.id})" ${this.done ? "checked": ""} class="item-done checkbox-icon"/>
            <span class="item-description ${this.done ? "strikethrough" : ""} ">${this.text}</span>
            <span class="item-date">${this.prettyDate()}</span>
            <button type="submit" onclick="deleteItem(${this.id})" class="item-delete material-icon">delete</button>
        </li>`
    }
    //Converting the date to be MM/DD/YYYY
    prettyDate() {
        let newDate = this.date.split('-');
        let date = newDate[1] + "/" + newDate[2] + "/" + newDate[0];
        return date;
    }
    // Once tasks are done, they need to be flipped to done and vice-versa
    toggle(){
        this.done = !this.done;
    }
}

//let items =[];

// // This function makes sure things are up to date
// function updateStorage(jsonString){
//     localStorage.setItem('database', JSON.stringify(jsonString));
// }

// //This function reads from what is in the storage
// function readStorage(){
//     let jsonString = localStorage.getItem('database');
//     let result = JSON.parse(jsonString)||[];
//     result = result.map(itemData=> new ShoppingList(itemData));
//     return result;
// }

// // This function creates a new item and pushes it into the array
// function createItem(event){
//     // Pulling data from the DOM, formatting it to JSON, and saving it to local storage

//     let items = readStorage();
//     event.preventDefault();

//    const desc = document.getElementById("description").value;
//    const date = document.getElementById("date").value;
//    const item = new ShoppingList({text: desc, done: false, date: date, id: Date.now()});
//    items.push(item);
//    localStorage.removeItem("");
//    localStorage.removeItem("");

//    updateStorage(items);

//     readList();
// }

// //This function reads the list that is being created
// function readList(){
//     //Pulling data from the DOM, using toHTML() to parse, updating DOM
//     let items = readStorage();
//     let string = "";
//     for (let i = 0; i < items.length; i++){
//         string += items[i].toHTML();
//     }
//     document.getElementById("list").innerHTML = string;
//     document.getElementById("description").value = localStorage.getItem("descriptionbox");
//     document.getElementById("date").value = localStorage.getItem("datebox");   
   
// }

// //This function updates the list items to be done in the array
// function updateItem(id){
//     //Pulling data from the DOM, saving it to local storage, and updating the DOM
//     let items = readStorage();
//     for(let i = 0; i < items.length; i++){
//         if(items[i].id == id){
//             items[i].toggle();
//         }
//     }
//     updateStorage(items);
//     readList();
// }

// //This function deletes a single item from the array
// function deleteItemList(id){
//     //Pulling data from the DOM, for looping to delete the item, 
//     //savng it to local storage, and updating the DOM
//     let items = readStorage();
//     for(let i = 0; i < items.length; i++){
//         if(items[i].id == id){
//             items.splice(i, 1);
//         }
//     }
//     updateStorage(items);
//     readList();
// }

// //This function turns strings into dates and then subtracts them
// //The value is either negative, positive, or zero
// function sortList(arrayCopy){
//     return arrayCopy.sort(function(a,b){
//     return new Date(b.date) - new Date(a.date);
//     });
// }

// //This function makes sure that the sortin and filtering functions work
// function toggleSwitch(){
//     //Pulling data from the DOM, grabbing the elements by ID,
//     //filtering items by status
//     let arrayCopy = readStorage();
//     sortbyDate = document.getElementById("sorting").checked;
//     filterByDescription = document.getElementById("filter").checked;
//     console.log(sortbyDate, filterByDescription);
//     if(sortbyDate && filterByDescription){
//         arrayCopy = sortList(arrayCopy);
//         arrayCopy = filterItems(arrayCopy);
//         sortItems(arrayCopy);
//     } else if (!sortbyDate && !filterByDescription){
//         arrayCopy = sortList(arrayCopy);
//         sortItems(arrayCopy);
//     } else if(!sortbyDate && filterByDescription){
//         arrayCopy = filterItems(arrayCopy);
//         sortItems(arrayCopy);
//     } else{
//         readList();
//     }
// }

// //This function parses the tasks using the toHTML()
// function sortItems(arrayCopy){
//     //Pulling data from local storage, parsing, and then updating the DOM
//     let string= "";
//     for(let i = 0; i < arrayCopy.length; i++){
//         string += arrayCopy[i].toHTML();
//     }
//     document.getElementById("list").innerHTML = string;
// }

// //This function filters the items when they are either done or not done
// function filterItems(arrayCopy){
//     return arrayCopy.filter(items => !items.done);
// }

// //This function sets the description of the items
// function descStorage(){
//     let descriptionStorage = document.getElementById("description").value;
//     localStorage.setItem("descriptionbox", descriptionStorage);
// }

// //This function sets the date of the items
// function dateStorage(){
//     let dateStore = document.getElementById("date").value;
//     localStorage.setItem("datebox", dateStore);
// }
