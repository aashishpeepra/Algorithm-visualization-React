import React from 'react';
import Tile from "./Tile/Tile";
import "./Tiles.css";

const Tiles=(props:{data:Array<{val:number,color:string}>})=>{
    
    return (
        <div className="Tile-Container">
            
             {props.data.map(each=><Tile val={each}/>)}
        </div>
       
    )
}

export default Tiles;
