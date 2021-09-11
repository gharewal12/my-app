import logo from './logo.svg';
import './App.css';
import FunctionalComponent from './components/FunctionalComponent';
import ClassComponent from './components/ClassComponent';
import ClassComponentWithState from './components/ClassComponentWithState';
import Test from './components/Test';
import Form from './components/FormComponent';

import Home from './components/Route/Home';
import About from './components/Route/About';
import Contact from './components/Route/Contact';
import RouteComponent from './components/Route/RouteComponent';
import {BrowserRouter as Router} from 'react-router-dom';
import AutoSaveComponent from './components/AutoSave/AutoSaveComponent';
import Saving from './components/AutoSave/Saving';
import './index.css'


function App() {
    var details = {
        name: "Granth",
        age: 22
    }

    return (
        <div className="App">
            {/*<header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                    Edit <code>src/App.js</code> and save to reload.
        </p>
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Learn React
        </a>
            </header>*/}
            {
                <Router>
                    <RouteComponent />
                </Router>
            }

            {/*<Form/>*/}
            {/*<FunctionalComponent userInfo={details}>
                <Test />
                <Test />

            </FunctionalComponent>*/}
            {/*<ClassComponent />*/}
            {/*<ClassComponentWithState userInfo={details} />}*/}

            
            {/*<AutoSaveComponent />*/}
            {/*<Saving/>*/}
            
        </div>

    );

}

export default App;
