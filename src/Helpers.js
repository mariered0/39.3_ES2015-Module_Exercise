// import React from "react";

//15 items
function choice (items) {
    const randomNum = Math.floor(Math.random() * items.length);
    return items[randomNum];
}

function remove(item, items) {
   for (let i = 0; i < items.length; i++) {
    if (items[i] === item) {
        return [...items.slice(0, i), ...items.slice(i + 1)]
    }
   }
}

export {choice, remove};