import React, { Component } from 'react'
import ClassComponent from './ClassComponent';
import PureComp from './PureComp';
import MemoComp from './MemoComp';

export default class ClassComponentWithState extends Component {
    constructor(props) {
        super(props)
        //console.log(props);
        this.state = {
            name: /*props.userInfo.name*/"Rohan",
            age: { young: 16, old: 80 }
        }
        this.abcd = { surname: "xyz" }
        this.handleClick = this.handleClick.bind(this);

    }
    surname = "Gharewal";
    count = 0;
    handleClick ()  {
        /*this.state({ user: "Granth" });*/
        this.setState({ name: "Granth"});
        this.setState({ age: {young: "17"} });
        this.count = this.count + 1;
        this.surname = this.abcd.surname;
        console.log(this.state.name);
        console.log(this);
    }

    render() {
        console.log("Parent component is rendered.");
        return (
            <div>
                <h2> Class with state: {this.state.name} {this.state.age.young} </h2>
                <ClassComponent name={this.state.name} />
                {/*<PureComp name={this.state.name} />*/}
                <MemoComp name={this.state.name} />

                <button onClick={this.handleClick}> Update </button>
            </div>)
    }
}