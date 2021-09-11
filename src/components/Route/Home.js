import { Component } from "react";
import '../../App.css';
import logo from '../../logo.svg';

class Home extends Component {
    render() {
        console.log("Home is rendered.");
        return (
            <div>
                <h1 className="text-center">Home</h1>
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <p>
                        Welcome  to <code>React</code>. 
                    </p>
                    <a
                        className="App-link"
                        href="https://reactjs.org"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Learn React
                    </a>
                </header>
            </div>
        )
    }
}
export default Home;