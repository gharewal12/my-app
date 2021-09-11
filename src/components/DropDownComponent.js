import React from 'react';
import { Jumbotron } from 'react-bootstrap';
import { DropdownList } from 'react-widgets';
import 'react-widgets/dist/css/react-widgets.css';
import HourlyComponent from './PayType Component/HourlyComponent';
import MonthlyComponent from './PayType Component/MonthlyComponents';
import WeeklyComponent from './PayType Component/WeeklyComponent';
import YearlyComponent from './PayType Component/YearlyComponent';


let payType = ['Select Pay Option', 'Hourly', 'Weekly', 'Monthly', 'Yearly'];

class DropDownComponent extends React.Component {
    constructor(...args) {
        super(...args)
        this.state = { value: 'Select Pay Option'}
    }

    render() {
        return (
            <div>
                <div class="mb-3">
                    <DropdownList
                        data={payType}
                        value={this.state.value}
                        onChange={(value) => this.setState({ value})}
                    />
                </div>
                {/* <Jumbotron> */}
                <div class="mb-3 jumbotron bg-dark text-white"> 
                    {this.state.value === "Hourly" && <HourlyComponent />}
                    {this.state.value === "Weekly" && <WeeklyComponent />}
                    {this.state.value === "Monthly" && <MonthlyComponent />}
                    {this.state.value === "Yearly" && <YearlyComponent />}
                </div>
                {/* </Jumbotron> */}
            </div>

        )
    }
}

export default DropDownComponent