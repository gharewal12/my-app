import { Component } from "react";
import UserTable from "../CRUD/UserTable";
import FormComponent from "../FormComponent";

class Contact extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isUpdating : false,
            users: 
                [ 
                    {
                    userId: 0,
                    inputNameData: '',
                    inputPhoneData: '',
                    inputMailData: '',
                    textAreaData: ''
                    }
                ]
            
            ,
            currentUser : [
                {
                    userId: 0,
                    inputNameData: '',
                    inputPhoneData: '',
                    inputMailData: '',
                    textAreaData: ''   
                }
            ]
        }
        this.addUser = this.addUser.bind(this);
        this.deleteUser = this.deleteUser.bind(this);
        this.editUser = this.editUser.bind(this);
        this.updateUser = this.updateUser.bind(this);
        this.state.users.length = 0; // ???
    }

    addUser = (user) => {
        user.userId = this.state.users.length + 1;
        this.setState({
            users: [...this.state.users, { user }]
        });
    }

    updateUser = (id,updatedUser) => {
        debugger;
        this.setState((prevState) => ({
             users: prevState.users.map((userData) => (userData.user.userId === id ? { ...userData.user, user :updatedUser } : userData)),
            isUpdating : false,
        //     users: prevState.users.map((userData) => {
                
        //         if (userData.user.userId === id) {
        //             console.log(userData.name);
        //             return {
        //               ...userData.user,
        //               user : updatedUser
        //             };
        //           }
        //         return userData;
        //         }
        //     )
         }));
    }

    deleteUser = id => {
        this.setState((prevState) => ({
            users: prevState.users.filter((userData) => userData.user.userId !== id)
        }));
        // this.setState({
        //     users : this.state.users.filter(userData => userData.user.inputNameData !== id)
        // })
        // const usersData = this.state.users.filter(userData => userData.user.userId !== id);
        // this.setState({users: usersData});
        //console.log(this.state.users.length);
    }

    editUser = (user) => {
        this.setState({
            isUpdating : true,
            currentUser : {
                userId : user.userId,
                inputNameData : user.inputNameData,
                inputMailData : user.inputMailData,
                inputPhoneData : user.inputPhoneData,
                textAreaData : user.textAreaData
            }
        });
    }

    render() {
        //console.log("Contact is rendered." + this.state.users);
        return (
            <div>
                <div>
                    <h1 className="text-center">Contact Us</h1>
                    <FormComponent addUserData={this.addUser} updateUserData={this.updateUser} currentUserData={this.state.currentUser} checkUpdate={this.state.isUpdating}/>
                </div>
                <div>
                    <h1 className='text-center'>User Data</h1>
                    <UserTable userData={this.state.users} deleteUserData={this.deleteUser} editUserData={this.editUser} />
                </div>
            </div>
        )
    }
}
export default Contact;