import React, { Component } from 'react';
import DropDownComponent from './DropDownComponent';

class FormComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            // users: 
            //     {
            //         userId: 0,
            //         inputNameData: '',
            //         inputPhoneData: '',
            //         inputMailData: '',
            //         textAreaData: ''
            //     },

            users: this.props.currentUserData,
            isCheckEdit: true,
            submitButtonValue: 'Submit'
        }

        this.handleInput = this.handleInput.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        /*    this.handleDropDownChange = this.handleDropDownChange.bind(this);
            this.handleTextAreaChange = this.handleTextAreaChange.bind(this);
            this.handleGenderChange = this.handleGenderChange.bind(this);*/
    };

    handleSubmit(event) {
        // alert('Name :' + this.state.users.inputNameData + "\r\n" +
        //     'Mobile : ' + this.state.users.inputPhoneData + "\r\n" +
        //     'Email : ' + this.state.users.inputMailData + "\r\n" +
        //     'Message : ' + this.state.users.textAreaData
        // );
        event.preventDefault();

        if (this.props.checkUpdate) {
            this.props.updateUserData(this.state.users.userId, this.state.users)
            this.setState({
                isCheckEdit: true,
                submitButtonValue: 'Submit'
            });

        }
        else {
            this.props.addUserData(this.state.users);
        }
        /*event.preventDefault();*/ // to save after refreshing(submitting form) page.
    }

    handleInput(event) {
        const user = { ...this.state.users };
        //   const currentState = user;
        const { name, value } = event.target;
        user[name] = value;

        this.setState({ users: user });
    };

    static getDerivedStateFromProps(props, state) {
        if (state.isCheckEdit && props.checkUpdate) {
            return {
                isCheckEdit: false,
                users: props.currentUserData,
                submitButtonValue: 'Update'
            };

        }
        return null;
    }



    render() {
        return (
            <div className="container contact_div">
                <div className="row">
                    <div className="col-md-8 col-10 mx-auto">
                        <form onSubmit={this.handleSubmit}>
                            <div class="mb-3">
                                <label for="exampleFormControlInput1" class="form-label">
                                    FullName
                                </label>
                                <input
                                    type="text"
                                    class="form-control"
                                    id="exampleFormControlInput1"
                                    name="inputNameData"
                                    value={this.state.users.inputNameData}
                                    onChange={this.handleInput}
                                    placeholder="Enter your name"
                                />
                            </div>

                            <div class="mb-3">
                                <label for="exampleFormControlInput1" class="form-label">
                                    Phone
                                </label>
                                <input
                                    type="number"
                                    class="form-control"
                                    id="exampleFormControlInput1"
                                    name="inputPhoneData"
                                    value={this.state.users.inputPhoneData}
                                    onChange={this.handleInput}
                                    placeholder="mobile number"
                                />
                            </div>

                            <div class="mb-3">
                                <label for="exampleFormControlInput1" class="form-label">
                                    Email address
                                </label>
                                <input
                                    type="email"
                                    class="form-control"
                                    id="exampleFormControlInput1"
                                    name="inputMailData"
                                    value={this.state.users.inputMailData}
                                    onChange={this.handleInput}
                                    placeholder="name@example.com"
                                />
                            </div>

                            <div class="mb-3">
                                <label for="exampleFormControlTextarea1" class="form-label">
                                    Message
                                </label>
                                <textarea
                                    class="form-control"
                                    id="exampleFormControlTextarea1"
                                    rows="3"
                                    name="textAreaData"
                                    value={this.state.users.textAreaData}
                                    onChange={this.handleInput}
                                ></textarea>
                            </div>

                            <div class="mb-4">
                                <label for="exampleFormControlTextarea1" class="form-label">
                                    Type of Pay :
                                </label>
                                <div class="mb-4"> 
                                    <DropDownComponent />
                                </div>
                            </div>

                            <div class="mb-3">
                                <button type="submit" id="submitId" class="btn btn-outline-success" name="submitButton">
                                    {this.state.submitButtonValue}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}
export default FormComponent;
