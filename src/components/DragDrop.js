import React from 'react'
import Block from "./Block";
import {useDrop} from "react-dnd";
import "../App.css";


const BlockPieces = [
    {
        id: 1,
        url: "https://cdn.pixabay.com/photo/2016/04/28/01/54/background-1357993_960_720.png"
        
    },
    {
      id: 2,
      url: "https://cdn.pixabay.com/photo/2021/11/18/20/01/spruce-needles-6807221_960_720.png"
    },
    {
      id: 3,
      url: "https://cdn.pixabay.com/photo/2021/09/11/15/25/flowers-6615871_960_720.png"
    },
  ];
  

function DragDrop() {
 
    const [designPad, setDesignPad] = React.useState([]);
    const [{isOver}, drop] = useDrop(() => ({
      accept: "image",
      drop: (item) => addImageToDesignPad(item.id),
      collect: (monitor) => ({
        isOver: !!monitor.isOver(),
      }),
    }))

    const addImageToDesignPad = (id) => {
    console.log(id);
    const blockPieces = BlockPieces.filter((block) => id === block.id);
      setDesignPad((designPad) => [...designPad, blockPieces[0]]);
    };

    return (
        <>

        <div className="Blocks"> 
        {BlockPieces.map((block) => {
            return <Block url = {block.url} id= {block.id}/>;
        })} 
        </div>

        <div className="DesignPad" ref={drop}>
          {designPad.map((block) => {
             return <Block url = {block.url} id= {block.id}/>;
        
        })} 
        
        </div>

        

        </>
    )
}

export default DragDrop;