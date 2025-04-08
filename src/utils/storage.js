// This file contains functions to load and save todos to local storage
export const getToday = () =>{
    const today = new Date();
    return today.toISOString().split('T')[0];
}
//    load todos from local storage
export const loadTodos = ()=> {
    const stored = JSON.parse(localStorage.getItem('dailyTodos')) || {};
    const today = getToday();

    if (stored.date !== today){
        return {
        
            todos:[],
            date: today
        }
    }

    return stored
}
//    save todos to local storage
export const saveTodos =(todos) =>{
    const today = getToday();
    localStorage.setItem(
        'dailyTodos',JSON.stringify({todos , date:today})
    )
}

