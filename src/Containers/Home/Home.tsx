import React from "react";

import "./Home.css";
import Card from "../Card/Card";

class Home extends React.Component {
    returnData() {
        let dt = [];
        for (let i = 0; i <= 60; i++)
            dt.push({ val: Math.floor(Math.random() * 250 + 2), color: "rgb(67,208,243)" })
        return dt;
    }
    public state={
        algo:"bubble",
        dt:this.returnData()
    }
    setAlgo=(name:string)=>{
     this.setState({algo:name,dt:this.returnData()});   
    }
    active=(val:string)=>{
        return val==this.state.algo?"active":"";
    }
    render() {
        return (
            <div className="Home">
                <h1> Visualizer</h1>
                <h4>Select an Algorithm</h4>
                <div className="btn-holder">
                    <div className={`btn ${this.active('bubble')}`}  onClick={()=>this.setAlgo("bubble")}>
                        Bubble Sort
                    </div>
                    <div className={`btn ${this.active('selection')}`} onClick={()=>this.setAlgo("selection")}>
                        Selection Sort
                    </div>
                    <div className={`btn ${this.active('insertion')}`} onClick={()=>this.setAlgo("insertion")}>
                        Insertion Sort
                    </div>
                </div>
                <Card home={{algo:this.state.algo,temp:this.state.dt}} />
            </div>
        )
    }
}

export default Home;