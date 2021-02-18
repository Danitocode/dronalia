import React, { Component } from "react";
import PopulateWarehouses from "../components/pupulateWarehouses.component";
import UserService from "../services/user.service";

export default class AdminWarehouse extends Component {

  constructor(props) {
    super(props);

    this.state = {
      content: ""
    };
  }

  componentDidMount() {
    UserService.getAdminBoard().then(
      response => {
        this.setState({
          content: response.data
        });
      },
      error => {
        this.setState({
          content:
            (error.response &&
              error.response.data &&
              error.response.data.message) ||
            error.message ||
            error.toString()
        });
      }
    );
  }


  render() {
    return (
        <>
          {<PopulateWarehouses/>}
        </>
    );
  }
}

