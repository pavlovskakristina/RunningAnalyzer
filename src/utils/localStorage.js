// Setting items in local storage

export function setItem(key, value) {
    try {
        window.localStorage.setItem(key, JSON.stringify(value));
    } catch {
        console.log(error);
    }
}


// Getting items in local storage

export function getItem(key) {
    try {
        const item = window.localStorage.getItem(key);
        return item ? JSON.parse(item): null; // jeśli wartość istnieje, parsuje ją z JSON.
    } catch (error){
        console.log(error);
    }
}
