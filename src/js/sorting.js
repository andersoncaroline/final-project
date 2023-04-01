
import { ShoppingList } from "./ShoppingList.js"


const shoppingList = new ShoppingList();
shoppingList.toHTML();

//This function turns strings into dates and then subtracts them
//The value is either negative, positive, or zero
export function sortList(arrayCopy){
    return arrayCopy.sort(function(a,b){
        return new Date(b.date) - new Date(a.date);
    });
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