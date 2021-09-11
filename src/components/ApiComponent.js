import { Component } from 'react';

export default class ApiComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            person: null,
            loading : true,
            data:[],
            searchValue : ''
        }
        this.local = {
            loading : true,
        }
    }
    async componentDidMount() {
        const url = "https://api.randomuser.me/";
        const response = await fetch(url);
        //const data = await response.json();
        this.setState({
            data : await response.json()
        });
        this.setState((state) => ({
            person: state.data.results[0] 
        }));    
        // if (this.props.searchValue === "person") {
        //     this.setState({
        //         person: data.results[0], loading: false
        //     })
        // }
        //{ person: this.state.data.results[0], loading: false }
        console.log(this.state.searchValue);
    }
    
    componentDidUpdate(props){
        if (props.searchValue === "person" && this.local.loading === true) {
            // props.searchValue = "";
            // this.setState({
            //     loading : false
            // });
            this.local.loading = false;
        }
        else if (props.searchValue !=="person") {
            this.local.loading = true;
        }
        
    }

    render() {
        return (
            <div>
                { (this.local.loading || !this.state.person) ? <div></div> :
                    <div>
                        <div>
                            FirstName : {this.state.person.name.title} {this.state.person.name.first}
                        </div>
                        <div>
                            LastName : {this.state.person.name.last}
                        </div>
                        <div>
                            <img src={this.state.person.picture.large} alt="Profile pic"/>
                        </div>

                    </div>}
            </div>
        )
    }
};