import ShoppingList from "./ShoppingList";
// This function makes sure things are up to date
export function updateStorage(jsonString){
    localStorage.setItem('database', JSON.stringify(jsonString));
}

// This function reads from what is in the storage
export function readStorage(){
    let jsonString = localStorage.getItem('database');
    let result = JSON.parse(jsonString)||[];
    result = result.map(itemData=> new ShoppingList(itemData));
    return result;
}
