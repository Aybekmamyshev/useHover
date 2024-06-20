import React from 'react';
import './App.css';
import {useHover} from "./useHover";

function App() {
    const {ref, hovered} = useHover()
    return (
        <div
            style={
                {
                    margin: '10px',
                    border: '5px solid black',
                    padding: '10px',
                    width: '100px',
                    height: '100px',
                    background: `${hovered ? 'red' : ""}`,
                    color: `${hovered ? 'white' : ""}`
                }
            }
            ref={ref}
        >
            {hovered ? 'На меня навели мышку' : 'Наведи мышкой на меня'}
        </div>
    );
}

export default App;
