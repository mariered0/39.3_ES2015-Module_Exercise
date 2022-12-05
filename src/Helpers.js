import React from "react";

//15 items
function choice (items) {
    const randomNum = Math.floor(Math.random() * 15);
    return randomNum;
}

function remove(items, item) {
    const idx = items.findIndex(function (i){
        return i === item;
    })
    if (idx != -1) {
        return items.splice(idx, 1);
    }else{
        return undefined;
    }
}

export {choice, remove};