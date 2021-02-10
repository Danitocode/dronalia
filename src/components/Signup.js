import React, { Component } from 'react';
import UserService from '../services/UserService';

class Signup extends React.Component {



  constructor(props){
    super(props)

    this.state={
        name : '',
        surname:'',
        email:'',
        password:''

    }

    this.changeNameHandler = this.changeNameHandler.bind(this);
    this.changeSurnameHandler = this.changeSurnameHandler.bind(this);
    this.saveUser = this.saveUser.bind(this);


}

changeNameHandler= (event) => {
  this.setState({name: event.target.value});
}

changeSurnameHandler= (event) => {
  this.setState({surname: event.target.value});
}

changeEmailHandler= (event) => {
  this.setState({email: event.target.value});
}

changePasswordHandler= (event) => {
  this.setState({password: event.target.value});
}


  saveUser = (e) => {
    e.preventDefault();
    let user = {name:this.state.name, surname:this.state.surname, email: this.state.email, password: this.state.password};
    console.log('user =>' + JSON.stringify(user));

    UserService.createUser(user).then(res => {
        this.props.history.push('/');
    });
  }

  cancel(){
    this.props.history.push('/');
  }

  render() {
    return (
      <form className="row g-3">
        <div className="col-4">
          <label for="inputAddress" className="form-label">Nombre</label>
          <input type="text" id="inputAddress" placeholder="Primer Nombre" name="Primer Nombre" className="form-control" 
                  value={this.state.name} onChange={this.changeNameHandler}/>
        </div>
        <div className="col-4">
          <label for="inputAddress" className="form-label">Apellido</label>
          <input type="text" id="inputAddress" placeholder="Segundo Nombre" name="Segundo Nombre" className="form-control" 
                  value={this.state.surname} onChange={this.changeSurnameHandler}/>
        </div>
        <div className="col-4">
          <label for="inputEmail" className="form-label">Email</label>
          <input type="email" id="inputEmail" placeholder="Email" name="Email" className="form-control" 
                  value={this.state.email} onChange={this.changeEmailHandler}/>
        </div>
        <div className="col-4">
          <label for="inputPassword4" className="form-label">Contraseña</label>
          <input type="password" id="inputPassword4" name="Contraseña" className="form-control" 
                  value={this.state.password} onChange={this.changePasswordHandler}/>
        </div>


        <div className="col-12">
          <div className="form-check">
            <input className="form-check-input" type="checkbox" id="gridCheck" required/>
            <label className="form-check-label" for="gridCheck">
              Acepto los términos y condiciones de privacidad de la empresa.
            </label>
          </div>
        </div>
        <div className="col-12">
          <button className="btn btn-success" onClick={this.saveUser}>Registrarse</button>
          <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft: "10px"}}>Cancelar</button>
        </div>
      </form>    
    );
  }
}

export default Signup;
