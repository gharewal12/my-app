import React, { Component } from 'react';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import { Link, Route, Switch } from 'react-router-dom';
import { Tabs, Tab, Nav, Navbar } from 'react-bootstrap';
import LoginComponent from '../LoginComponent';
import LoginButton from '../LoginButton';

class RouteComponent extends Component {
    render() {
        return (
            <div>
                <Navbar bg="dark" variant="dark">
                    <Nav variant="tabs" defaultActiveKey="Home" id="tabs-example">
                        <Nav.Item>
                            <Nav.Link href="/Home">Home</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link href="/About">About</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link href="/Contact">Contact</Nav.Link>
                        </Nav.Item>
                    </Nav>
                </Navbar>
                {/*<ul>
                    <li><Link to="/"> Home </Link></li>
                    <li><Link to="/About"> About </Link></li>
                    <li><Link to="/Contact"> Contact </Link></li>
                </ul>*/}
                <Switch>
                    <Route exact path='/Home' component={Home}></Route>
                    <Route exact path='/About' component={About}></Route>
                    <Route exact path='/Contact' component={Contact}></Route>
                </Switch>
            </div>
        );
    }
}
export default RouteComponent;

