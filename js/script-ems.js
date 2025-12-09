//CREATE AN ARRAY OF EMPLOYEES
let employees = ["Bob", "Rhonda", "Scarlett", "Tim"]
console.log(employees)

// CHECK TO SEE IF STORAGE OBJECT EXISTS WHEN THE PAGE LOADS
// IF DOES, RETURN STORAGE OBJECT INTO ARRAY INSTEAD OF POPULATED ARRAY
function displayTaskList() {
    // IF THERE ARE NO TASKS IN ARRAY, CHECK STORAGE
    if (tasks.length === 0) {
        // GET TASKS FROM STORAGE OR EMPTY STRING IF STORAGE IS ALSO EMPTY
        storage = localStorage.getItem('tasks') || ''
        // IF NOT EMPTY, CONVERT STRING TO ARRAY AND STORE IN TASKS VARIABLE
        if (storage.length > 0) {
            // tasks = storage.split('|') // WITHOUT JSON.PARSE
            tasks = JSON.parse(localStorage.getItem('tasks'))
        }
    }

// GET DOM ELEMENTS
const $ = id => document.getElementById(id)

