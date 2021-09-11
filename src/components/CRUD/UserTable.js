import React, { Component } from 'react'

class UserTable extends Component {
  constructor(props){
    super(props);
    console.log(this.props.userData);
  }

  render() {

    //const obj = this.props.userData;
    // var usersArray = Object.keys(obj).map(function (key) {
    //   return [key,obj[key]];
    // });
    //var usersArray = Object.keys(obj).map(key => ([key]: obj[key]);

    return (
      <div className="container" >
        <table className="table">
          <thead>
            <tr>
              <th>FullName</th>
              <th>Phone</th>
              <th>Email</th>
              <th>Message</th>
              <th>Actions</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {this.props.userData.length > 0 ? (this.props.userData.map(userData => (
              <tr key={userData.userId}>
                <td>{userData.user.inputNameData}</td>
                <td>{userData.user.inputPhoneData}</td>
                <td>{userData.user.inputMailData}</td>
                <td>{userData.user.textAreaData}</td>
                <td></td>
                <td>
                  <button className="button muted-button" onClick={() => this.props.editUserData(userData.user)}>Edit</button>
                </td>
                <td>
                  <button className="button muted-button" onClick={() => this.props.deleteUserData(userData.user.userId)}>Delete</button>
                </td>
              </tr>

            ))):(
              <tr>
                <td colSpan={3}>No users </td>
              </tr>
            )}

          </tbody>
        </table>
      </div>
    )
  }
}


export default UserTable