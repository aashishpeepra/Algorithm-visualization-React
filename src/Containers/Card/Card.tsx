import React, {Component} from "react";
import "./Card.css";
import Tiles from "../../Components/Tiles/Tiles";

class Card extends Component<{home:{algo:string,temp:Array<{val:number,color:string}>}}> {
    returnData() {
        let dt = [];
        for (let i = 0; i <= 60; i++)
            dt.push({ val: Math.floor(Math.random() * 250 + 2), color: "rgb(67,208,243)" })
        return dt;
    }
    
    public state = {
        data: this.props.home.temp,
        evn: setTimeout(() => { }, 0),
        time: 0
    }
    componentWillReceiveProps(){
        // alert("hey")
        this.setState({data:this.returnData()})
    }
    startInsertion = () => {
        console.log("worked")
        let temp = [...this.state.data];
        let start = new Date().getTime();
        let len = temp.length;
        for (let i = 1; i < len; i++) {
            let key = temp[i];
            let j = i - 1;
            setTimeout(() => {
                while (j >= 0 && temp[j].val > key.val) {
                    console.log("While ", j);
                    temp[j + 1] = temp[j];
                    j -= 1;
                    console.log("SETTIMOUT")
                    this.setState({ data: temp });

                }
                temp[j + 1] = key;
            }, 100)

            
        }
        let end = new Date().getTime();
        this.setState({ time: (end - start) });
    }
    startSelection = () => {
        const temp = [...this.state.data];
        let len = temp.length;
        let start = new Date().getTime();
        let min = 0;
        for (let i = 0; i < len; i++) {
            min = i;
            setTimeout(()=>{
            for (let j = i + 1; j < len; j++) {
                if (temp[min].val > temp[j].val) {
                    min = j;
                    this.setState({data:temp})
                }
            }
            if (min !== i) {
                let swap = temp[min].val;
                temp[min].val = temp[i].val;
                temp[i].val = swap;
                
            }
            },100)
            
        }
        console.log("final", temp);
        let end = new Date().getTime();
        this.setState({ time: (end - start) });
    }
    startBubble = () => {
        const temp = [...this.state.data];
        let start = new Date().getTime();
        for (let i = 0; i < temp.length; i++) {

            for (let j = 0; j < temp.length - i - 1; j++) {

                let event = setTimeout(() => {
                    // temp[i].color="#0088ff";
                    if (temp[j].val > temp[j + 1].val) {
                        // temp[i].color="#ff0000";
                        let lt = temp[j].val;
                        temp[j].val = temp[j + 1].val;
                        temp[j + 1].val = lt;
                        console.log(j, j + 1);
                        // temp[j+1].color="#0088ff";

                        // if(temp[j].color=="#00ff00")
                        //     temp[j].color="#ff0000";
                        // else
                        //     temp[j].color="#00ff00";
                        // temp[j].color="#ff0000"
                    }
                    this.setState({ data: temp, evn: event });
                }, 100);
            }


        }
        let end = new Date().getTime();
        this.setState({ time: (end - start) })
    }
    render() {
        let func=()=>{};
        let complex="";
        switch(this.props.home.algo)
        {
            case "bubble":
                func=this.startBubble;
                complex="O(n^2)";
                break;
            case "selection":
                func=this.startSelection;
                complex="O(n^2)";
                break;
            case "insertion":
                func=this.startInsertion;
                complex="O(n^2)";
                break;
        }
        return (
            <div className="Card">
                <div className="Card-btn-holder">
                    <div className="Card-btn" onClick={func}>
                        Start
                    </div>
                    <div
                        className="Card-btn"
                    >
                        {this.state.time + " ms"}
                    </div>
                    <div
                        className="Card-btn"
                    >
                        {complex}
                    </div>

                </div>
                <div className="Card-Tile-Container">
                    <Tiles data={this.state.data} />
                </div>

            </div>
        );
    }
}

export default Card;