import React from 'react';
import "./Tile.css";
const Tile=(props:{val:{val:number,color:string}})=>{
    
    return (
        <div className="tile" style={{height:props.val.val,marginTop:-props.val.val,backgroundColor:props.val.color}}>

        </div>
    )
}

export default Tile;