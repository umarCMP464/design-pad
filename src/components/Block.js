import React from 'react'
import {useDrag} from "react-dnd";

function Block({id, url}) {

    const btn = document.createElement('button');
    btn.innerText = 'Edit';
    document.body.appendChild(btn);
    
    const [ {isDragging}, drag] = useDrag(() => ({
        type: "image",
        item: {id: id},
        collect: (monitor) => ({
            isDragging: !!monitor.isDragging(),
        }),
    })); 
    return ( 
    <img
    ref={drag} 
    src = {url} 
    width="200px" 
    style = {{border: isDragging ? "5px solid pink" : "0px"}} 
    />
    );
}

export default Block;

//start video from 12:37