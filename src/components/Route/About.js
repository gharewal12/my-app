import { Component } from "react";
import FormComponent from "../FormComponent";
import AutoSaveComponent from '../AutoSave/AutoSaveComponent';

class About extends Component {
    render() {
        console.log("About is rendered.");
        return (
            <div>
                <h1 className="text-center">About</h1>
                <AutoSaveComponent/>
            </div>
        )
    }
}
export default About;