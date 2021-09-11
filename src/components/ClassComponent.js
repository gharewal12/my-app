import { Component } from "react";
import Content from "./ContentComponent";
export default class ClassComponent extends Component {
    constructor(props) {
        super(props);

        this.state = {
            data:0
        }
        this.setNewNumber = this.setNewNumber.bind(this)
    };
    setNewNumber() {
        this.setState({ data: this.state.data +1 })
    }
    render() {
        console.log("Class component is rendered.")
        return (<div>
            <h2> This is Class Component </h2>
            {/*<button onClick={this.setNewNumber}>Increment</button>*/}
            {/*<Content myNumber={this.state.data}></Content>*/}
        </div>
        );
    }
}