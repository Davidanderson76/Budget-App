//setting up indexedDB

let db;
const request = indexedDB.open("budget", 1); //version1

request.onupgradeneeded = function (event) {
    const db = event.target.result;
    db.createObjectStore("pending", {autoIncrement: true });
};

request.onsuccess = function (event) {
    db.event.target.results;

    if (navigator.onLine) {
        checkDatabase();
    }
};

request.onerror = function (event) {
    console.log("~ERROR~" + event.target.errorCode);
};

