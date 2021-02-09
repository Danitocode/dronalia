import React, { Component } from "react";
import UserService from '../services/UserService';

class PopulateAmateurDrone extends Component {

      constructor(props){
          super(props)
          this.state = {
              users:[]
          }
      }
  
      componentDidMount(){
          UserService.getUsers().then((response) => {
              this.setState({users: response.data})
              console.log(response.data);
          });
  
      }
  
  render(){
      return(
          <div>
              <h1 className="text-center">Users List</h1>
              <table className="table table-striped">
                  <thead>
                      <tr>
                          <td>Id</td>
                          <td>name</td>
                          <td>axis</td>
                          <td>colour</td>
                          <td>price</td>
                          <td>size</td>
  
                      </tr>
                  </thead>
                  <tbody>
                      {
                          this.state.users.map(
                              user =>
                              <tr key = {user.id}>
                                  <td>{user.id}</td>
                                  <td>{user.name}</td>
                                  <td>{user.axis}</td>
                                  <td>{user.colour}</td>
                                  <td>{user.price}</td>
                                  <td>{user.size}</td>
  
                              </tr>
                          )
                      }
                  </tbody>
              </table>
          </div>
      )
  }
  
  }
  
  
export default PopulateAmateurDrone;
