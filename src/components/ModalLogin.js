import React, { Component } from 'react';
import '../style/modals.css';
import { Link, Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { Form, FormGroup, FormControl, ControlLabel, Button, Grid, Row, Col, Alert } from 'react-bootstrap';
import { userActions } from '../actions/user'

class ModalLogin extends Component {
    
    constructor(props) {
      super(props);

      this.state = {
          boleta: '',
          password: ''
      };

      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
  }

    handleChange(e) {
        const { name, value } = e.target;
        console.log(name,value);
        this.setState({ [name]: value });
        console.log(this.state.boleta,this.state.password);
    }

    handleSubmit(e) {
        e.preventDefault();
        const { boleta, password } = this.state;
        const { dispatch } = this.props;
        if (boleta && password) {
            dispatch(userActions.login(boleta, password));
        }
    }

  render() {
    let style ={display:'block'}
    const close= ()=> {document.getElementById("login").style.display="none"
  console.log(document.getElementById("login").style)}
    if(!this.props.show){
      this.style= {
        display:'none'
      }
    } 
    else{
      this.style = {
        display:'block'
      }
    }
    const { loggedIn, error } = this.props;
    let reDirect = loggedIn ? <Redirect to="/" push /> : '';
    const { boleta, password } = this.state;
    console.log(this.props);
    return (
          <div id ="login" className="modallogin" style = {this.style}>
            <Form className="modal-content animate"  onSubmit={this.handleSubmit} method="post">
                 <div className="tittlelogincontainer">
                  <span className="close" title="Close Modal" onClick={close}>&times;</span>
                  <h1 style={{fontSize: '25px', fontWeight: 'bold', textAlign:'center', width:'90%'}}>Inicio de sesión</h1>
                </div>
                <div className="logincontainer" style={{textAlign: 'center', color: 'black'}}>
                  <label for="uname" style={{marginTop:'3em'}}><b>Usuario</b></label>
                  <FormControl type="text" name="boleta" value ={boleta } onChange={this.handleChange} required/>
                  {/* <!--Hay que validar que sólo se puedan ingresar números--> */}
                  <label for="psw"><b>Contraseña</b></label>
                  <FormControl type="password" name="password" value= {password} onChange={this.handleChange} required/>
                </div>
                <div class="logincontainer2" style={{backgroundColor:'#f1f1f1', height:'2em', marginTop:'1.7em', marginBottom:'1em'}}>
                  <button id="fpass1" type="button" style={{height:'100%', textAlign:'center', fontSize:'80%'}}>Olvidé la contraseña</button>
                  <button id="sesion1" type="submit" style={{height:'100%'}}>Iniciar sesión</button>
                </div>
            </Form>
            </div>
    );
  }
}
function mapStateToProps(state) {
  const { loggedIn, error } = state.authentication;
  return {
      loggedIn,
      error
  };
}
const connectedLoginForm = withRouter(connect(mapStateToProps)(ModalLogin));
export { connectedLoginForm as  ModalLogin };