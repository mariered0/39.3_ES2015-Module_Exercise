import React from "react";
import fruits from './Foods'
import {choice, remove} from './Helpers'

function App() {
    
    const idx = choice(fruits);
    const fruit = fruits[idx];
    remove(fruits, fruit);

    return (
        <div>
            <p>I'd like one {fruit}, please</p>
            <p>Here you go: {fruit}</p>
            <p>Delicious! May I have another?</p>
            <p>I'm sorry, we're all out. We have {fruits.length} left.</p>
        </div>
    )
}

export default App;